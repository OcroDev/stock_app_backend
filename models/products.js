import mongoose from "mongoose";

//SCHEMA & MODEL PRODUCT DATABASE
const productSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
  },
  { timestamps: true }
);
export const PRODUCT = mongoose.model("Product", productSchema);
