import { app } from "./app";
import { env } from "./config";

const server = app.listen(env.API_PORT, () => {
  console.log(`Server is running on port ${env.API_PORT}`);
});

const shutdown = async () => {
  server.close(() => {
    console.log("Server shutdown");
  });

  process.exit(0);
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
