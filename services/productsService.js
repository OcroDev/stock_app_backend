import { PRODUCT } from "../models/products.js";

export const productsService = {
  getAll: () => {
    try {
      //return PRODUCT.find({ deletedAt: null }).sort({ _id: -1 });
      return PRODUCT.aggregate([
        { $match: { deletedAt: null } },
        { $limit: 10 },
        { $sort: { _id: 1 } },
        {
          $lookup: {
            from: "movements",
            localField: "_id",
            foreignField: "product",
            as: "product_movements",
          },
        },
        {
          $unwind: {
            path: "$product_movements",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $group: {
            _id: { name: "$name", price: "$price", _id: "$_id" },
            stock: {
              $sum: "$product_movements.quantity",
            },
          },
        },
        {
          $project: {
            _id: "$_id._id",
            name: "$_id.name",
            price: "$_id.price",
            stock: 1,
          },
        },
        { $sort: { stock: -1 } },
      ]);
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
