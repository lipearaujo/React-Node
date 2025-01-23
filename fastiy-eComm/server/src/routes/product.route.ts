import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";

import { z } from "zod";
import { ZodTypeProvider } from "fastify-type-provider-zod";

const createProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  imageURL: z.string(),
  price: z.number(),
  stockQuantity: z.number(),
});

type CreateProductInput = z.infer<typeof createProductSchema>;

const createCheckoutSchema = z.object({
  customerId: z.string(),
  cartItems: z.object({}),
});

type CreateCheckoutInput = z.infer<typeof createCheckoutSchema>;

export async function productRoutes(app: FastifyInstance) {
  app.get("/", async (req, res: FastifyReply) => {
    const products = await prisma.products.findMany();

    return res.code(200).send(products);
  });

  app.withTypeProvider<ZodTypeProvider>().get(
    "/:productId",
    {
      schema: {
        params: z.object({
          productId: z.string(),
        }),
      },
    },
    async (req, res) => {
      const { productId } = req.params;

      try {
        const product = await prisma.products.findUnique({
          where: {
            id: productId,
          },
        });

        if (!product) {
          res.code(404).send({ message: "Product not found" });
        }

        return res.code(200).send(product);
      } catch (error) {
        res.code(500).send(error);
      }
    }
  );

  app
    .withTypeProvider<ZodTypeProvider>()
    .post(
      "/checkout",
      async (req: FastifyRequest<{ Body: CreateCheckoutInput }>, res) => {
        const { customerId, cartItems } = req.body;

        const productIds: any = Object.keys(cartItems);

        try {
          const user = await prisma.user.findUnique({
            where: {
              id: customerId,
            },
            include: {
              purchasedItems: {},
            },
          });

          const products = await prisma.products.findMany({
            where: {
              id: { in: productIds },
            },
          });

          if (!products) {
            res.code(404).send({ message: "Product not found" });
          }

          if (!user) {
            res.code(404).send({ message: "User not found" });
          }

          for (const item in cartItems) {
            const product = products.find((product) => product.id === item);

            if (!product) {
              return res.code(400).send({ message: "Product not found" });
            }

            if (product.stockQuantity < cartItems[item]) {
              return res.code(400).send({ message: "Not enough stock" });
            }
          }

          await prisma.products.updateMany({
            where: {
              id: { in: productIds },
            },
            data: {
              userId: customerId,
              stockQuantity: {
                decrement: 1,
              },
            },
          });

          return res
            .code(200)
            .send({ user: customerId, purchasedItems: user?.purchasedItems });
        } catch (error) {
          return res.code(500).send(error);
        }
      }
    );
  app.withTypeProvider<ZodTypeProvider>().get(
    "/purchased-items/:customerId",
    {
      schema: {
        params: z.object({
          customerId: z.string(),
        }),
      },
    },
    async (req, res) => {
      const { customerId } = req.params;

      try {
        const user = await prisma.user.findUnique({
          where: {
            id: customerId,
          },
        });

        if (!user) {
          res.code(404).send({ message: "User not found" });
        }

        const products = await prisma.products.findMany({
          where: {
            userId: customerId,
          },
        });

        return res.code(200).send({ purchasedItems: products });
      } catch (error) {
        return res.code(500).send(error);
      }
    }
  );

  app.post(
    "/register",
    async (
      req: FastifyRequest<{ Body: CreateProductInput }>,
      res: FastifyReply
    ) => {
      const { name, description, imageURL, price, stockQuantity } = req.body;

      try {
        const product = await prisma.products.create({
          data: {
            name,
            description,
            imageURL,
            price,
            stockQuantity,
          },
        });

        return res.code(201).send(product);
      } catch (error) {
        return res.code(500).send(error);
      }
    }
  );
}
