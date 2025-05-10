import { Router } from "express";
import * as paymentsController from "./payments.controller";

const router = Router();

router.post("/card", paymentsController.validateCard);

export { router as paymentsRouter };
