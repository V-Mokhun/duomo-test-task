import { Router } from "express";
import { cardController } from "./payments.controller";

const router = Router();

router.post("/card", cardController);

export { router as paymentsRouter };
