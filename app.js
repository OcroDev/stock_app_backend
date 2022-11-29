import productsRouter from "./routes/products.js";
import express from "express";
import Cors from "cors";
import { databaseConnection } from "./DB/index.js";
import movementRouter from "./routes/movement.js";

const app = express();

//db connect
databaseConnection(app);

//habilitar cors en todas las rutas
app.use(Cors());
//hablitar el uso de json en el backend
app.use(express.json());

app.use("/api/v1/products", productsRouter);
app.use("/api/v1/products/movement", movementRouter);
