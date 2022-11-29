import { Router } from "express";
import movementController from "../controllers/movementController.js";

const movementRouter = Router();

movementRouter.get("/", movementController.getAll);
movementRouter.post("/:productId", movementController.store);
movementRouter.delete("/:id", movementController.delete);
export default movementRouter;
