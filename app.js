import  express  from "express"

const app = express();


app.get('/', (req, res) => {
  console.log("peticion recibida");
  res.status(200).send("<h1>holamundo</h1>")
})

app.listen(4000, () => {
  console.log("servidor escuchando en puerto 4000")
})