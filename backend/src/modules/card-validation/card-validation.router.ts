import { Router } from "express";
import { validateCardController } from "./card-validation.controller";

const router = Router();

router.post("/validate", validateCardController);

export { router as cardValidationRouter };
