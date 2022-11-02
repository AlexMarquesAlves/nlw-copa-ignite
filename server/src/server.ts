import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";

const prisma = new PrismaClient({
  log: ["query"],
});

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();

    return { count };
  });

  const port = 3333;
  await fastify.listen({ port: port /*host: "0.0.0.0"*/ });
}

bootstrap();
