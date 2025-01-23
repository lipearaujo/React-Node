import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";

import { z } from "zod";
import { ZodTypeProvider } from "fastify-type-provider-zod";

import bcrypt from "bcrypt";

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type CreateUserInput = z.infer<typeof createUserSchema>;

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email(),
  password: z.string(),
});

type LoginUserInput = z.infer<typeof loginSchema>;

const userdataSchema = z.object({
  token: z.string(),
});

type UserdataSchema = z.infer<typeof userdataSchema>;

interface JwtPayload {
  id: string;
  name: string;
  email: string;
}

export async function userRoutes(app: FastifyInstance) {
  //get users
  app.get("/", async (req, res: FastifyReply) => {
    const users = await prisma.user.findMany();

    return res.code(200).send(users);
  });

  app.withTypeProvider<ZodTypeProvider>().get(
    "/:userId",
    {
      schema: {
        params: z.object({
          userId: z.string(),
        }),
      },
    },
    async (req, res) => {
      const { userId } = req.params;

      try {
        const getUser = await prisma.user.findUnique({
          where: {
            id: userId,
          },
          include: {
            purchasedItems: {},
          },
        });

        if (!getUser) {
          return res.code(404).send({ message: "User not found" });
        }

        return res.code(200).send(getUser);
      } catch (error) {
        return res.code(500).send(error);
      }
    }
  );

  app.withTypeProvider<ZodTypeProvider>().post(
    "/register",
    {
      schema: {
        body: createUserSchema,
      },
    },
    async (
      req: FastifyRequest<{ Body: CreateUserInput }>,
      res: FastifyReply
    ) => {
      const { name, email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (user) {
        return res
          .code(401)
          .send({ message: "User already exists with this email" });
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const createUser = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        });

        return res.code(201).send(createUser);
      } catch (error) {
        return res.code(500).send(error);
      }
    }
  );

  app.withTypeProvider<ZodTypeProvider>().post(
    "/login",
    {
      schema: {
        body: loginSchema,
      },
    },
    async (
      req: FastifyRequest<{ Body: LoginUserInput }>,
      res: FastifyReply
    ) => {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      const isPasswordValid = await bcrypt.compare(password, user?.password);

      if (!user || !isPasswordValid) {
        return res.code(401).send({ message: "Invalid email or password" });
      }

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      const token = req.jwt.sign(payload);

      return { accessToken: token, userId: user.id };
    }
  );

  app.withTypeProvider<ZodTypeProvider>().post(
    "/addItems",
    {
      schema: {
        body: z.object({
          productId: z.string(),
          token: z.string(),
        }),
      },
    },
    async (req, res) => {
      const { productId, token } = req.body;

      const user = req.jwt.verify(token) as JwtPayload;
      const userId = user.id;

      try {
        const user = await prisma.user.findUnique({
          where: {
            id: userId,
          },
        });

        if (!user) {
          res.code(404).send({ message: "User not found" });
        }

        const addItem = await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            purchasedItems: {
              connect: {
                id: productId,
              },
            },
          },
        });

        return {
          userId: addItem.id,
          userName: addItem.name,
          userEmail: addItem.email,
        };
      } catch (error) {}
    }
  );

  app
    .withTypeProvider<ZodTypeProvider>()
    .post(
      "/userdata",
      { schema: { body: userdataSchema } },
      async (
        req: FastifyRequest<{ Body: UserdataSchema }>,
        res: FastifyReply
      ) => {
        const { token } = req.body;

        try {
          const user = req.jwt.verify(token) as JwtPayload;
          const userId = user.id;

          const userdata = await prisma.user.findUnique({
            where: {
              id: userId,
            },
          });

          if (!userdata) {
            res.code(404).send({ message: "User not found" });
          }

          return userdata?.id;
        } catch (error) {
          res.code(500).send(error);
        }
      }
    );
}
