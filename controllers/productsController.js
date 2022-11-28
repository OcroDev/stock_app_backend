import { productsService } from "../services/porductsService.js";

const productsController = {
  getAll: async (req, res) => {
    const products = await productsService.getAll();

    res.status(200).json({
      ok: "true",
      count: products.length,
      data: products,
    });
  },
  store: async (req, res) => {
    if (!req.body.name || !req.body.price) {
      res.status(400).json({
        ok: false,
        message: "The field name and category is required",
      });
      return;
    }

    const newProduct = { ...req.body };

    const productStored = await productsService.store(newProduct);

    return res.status(200).json({
      isStored: true,
      data: productStored,
      message: "The product has been successfully created",
    });
  },
};

export default productsController;
