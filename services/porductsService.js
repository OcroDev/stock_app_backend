import { PRODUCT } from "../models/products.js";

export const productsService = {
  getAll: () => {
    try {
      return PRODUCT.find().sort({ _id: -1 });
    } catch (error) {
      return error;
    }
  },
  store: (newProduct) => {
    try {
      return PRODUCT.create(newProduct);
    } catch (error) {
      return error;
    }
  },
};
