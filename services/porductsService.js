import { PRODUCT } from "../models/products.js";

export const productsService = {
  getAll: () => {
    try {
      return PRODUCT.find({ deletedAt: null }).sort({ _id: -1 });
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
  delete: (id) => {
    try {
      return PRODUCT.findByIdAndUpdate(
        id,
        { deletedAt: new Date() },
        { new: true }
      );
    } catch (error) {
      return error;
    }
  },
};
