import path from 'path';
import {fileURLToPath} from 'url';
import * as dotenv from "dotenv"
dotenv.config()
import express from "express"

const app = express();


//static files routes configure (middleware)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  console.log("peticion recibida");
  console.log(__dirname);
  res.status(200).sendFile("index.html", {root: __dirname})
})

//constante de entorno
const PORT = process.env.PORT || 4000



app.listen(PORT, () => {
  console.log(`servidor escuchando en puerto ${PORT}`)
})


