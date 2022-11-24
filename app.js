import * as dotenv from "dotenv"
dotenv.config()
import express from "express"

const app = express();

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  console.log("peticion recibida");
  res.status(200).send("<h1>holamundo</h1>")
})

app.listen(PORT, () => {
  console.log(`servidor escuchando en puerto ${PORT}`)
})


