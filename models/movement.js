import mongoose from "mongoose";

//SCHEMA & MODEL MOVEMENT DATABASE
const movementSchema = mongoose.Schema(
  {
    type: String, //compra o venta
    quantity: { type: Number },
    price: { type: Number },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" }, //refiere al id del product
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);
export const MOVEMENT = mongoose.model("Movement", movementSchema);
