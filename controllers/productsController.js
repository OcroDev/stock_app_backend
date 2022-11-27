import { PRODUCT } from "../models/products.js";

const productsController = {
  getAll: async (req, res) => {
    const products = await PRODUCT.find();
    res.status(200).json({
      ok: "true",
      count: products.length,
      data: products,
    });
  },
  create: (req, res) => {
    if (!req.body.name) {
      res.status(400).json({
        ok: false,
        message: "The field name is required",
      });
      return;
    }
    if (!req.body.price) {
      res.status(400).json({
        ok: false,
        message: "The field price is required",
      });
      return;
    }
    const newProduct = new PRODUCT(req.body);
    newProduct
      .save()
      .then((result) => res.status(201).json({ ok: true }))
      .catch((error) => console.log(error));
  },
};

export default productsController;
