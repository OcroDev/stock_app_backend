import path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import Colors from "colors";
import axios from "axios";

const app = express();
app.use(express.json());

//constante de entorno
const PORT = process.env.PORT || 4000;

//database conection
mongoose
  .connect(
    `mongodb+srv://root:${process.env.MONGO_DB_PASS}@development.gmjmloq.mongodb.net/stock-app?retryWrites=true&w=majority`
  )
  .then((result) => {
    console.log(Colors.bgGreen("conexion exitosa a la base de datos"));
    app.listen(PORT, () => {
      console.log(Colors.rainbow(`servidor escuchando en puerto ${PORT}`));
    });
  })
  .catch((err) => {
    console.log(err);
  });

//esquema y modelo de la base de datos
const productSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);

// const pokeApiURI = "https://pokeapi.co/api/v2/pokemon";
// app.get("/", async (req, res) => {
//   try {
//     const response = await axios(`${pokeApiURI}/charrnder`);
//     if (response.status === 200) console.log(response.data.name);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

//static files routes configure (middleware)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/v1/products", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((result) => res.status(201).json({ ok: true }))
    .catch((error) => console.log(error));
});
