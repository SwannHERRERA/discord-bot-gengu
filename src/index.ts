import "dotenv-safe/config";
import path from "path";
import pino from "pino";
import { createConnection } from "typeorm";
import { createServer } from "./server";

const main = async () => {
  const logger = pino();
  try {
    await createConnection({
      type: "postgres",
      url: process.env.DATABASE_URL,
      logging: true,
      // synchronize: true,
      migrations: [path.join(__dirname, "./migrations/*")],
    });
    const port = Number(process.env.PORT) || 8080;
    const app = await createServer();
    app.listen(port);
    logger.info(`application running on port: ${port}`);
  } catch (error) {
    logger.error(error, "Error occurred while initializing application");
  }
};

main().catch((err) => {
  console.error(err);
});
