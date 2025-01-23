import fastify from "fastify";
import cors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import fjwt, { FastifyJWT, JWT } from "@fastify/jwt";
import fCookie from "@fastify/cookie";

import { userRoutes } from "./routes/user.route";
import { productRoutes } from "./routes/product.route";

const app = fastify();

app.register(cors, {
  origin: "*",
});

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

declare module "fastify" {
  interface FastifyRequest {
    jwt: JWT;
  }
}

// jwt
app.register(fjwt, { secret: "secret" });
app.addHook("preHandler", (req, res, next) => {
  // here we are
  req.jwt = app.jwt;
  return next();
});
// cookies
app.register(fCookie, {
  secret: "some-secret-key",
  hook: "preHandler",
});

app.get("/", () => {
  return "Hello World!";
});

//Routes
app.register(userRoutes, { prefix: "users" });
app.register(productRoutes, { prefix: "products" });

app.listen({ port: 3001 }).then(() => {
  console.log("Server running!");
});
