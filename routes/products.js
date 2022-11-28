import { Router } from "express";
import productsController from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/", productsController.getAll);
productsRouter.post("/", productsController.store);
productsRouter.delete("/:id", productsController.delete);
export default productsRouter;
