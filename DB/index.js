import mongoose from "mongoose";
import Colors from "colors";
import * as dotenv from "dotenv";

//ENVIROMENT CONSTANTS
dotenv.config();
const PORT = process.env.PORT || 4000;

//database conection
export const databaseConnection = (app) => {
  mongoose
    .connect(
      `mongodb+srv://root:${process.env.MONGO_DB_PASS}@development.gmjmloq.mongodb.net/stock-app?retryWrites=true&w=majority`
    )
    .then((result) => {
      console.log(Colors.bgGreen("DATABASE CONNECTION SUCCESS"));
      app.listen(PORT, () => {
        console.log(Colors.rainbow(`SERVER PORT LISTENING LISTENING ${PORT}`));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
