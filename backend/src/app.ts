import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import { env } from "./config";
import { errorMiddleware } from "./middleware";
import { cardValidationRouter } from "./modules";

export const app = express();

if (env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req, res) => {
  res.send("OK");
});

app.use("/api/card", cardValidationRouter);

app.use(errorMiddleware);
