import { productsService } from "../services/productsService.js";

const productsController = {
  getAll: async (req, res) => {
    const products = await productsService.getAll();

    res.status(200).json({
      ok: "true",
      count: products.length,
      products: products,
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

    return res.status(201).json({
      isStored: true,
      product: productStored,
      message: "The product has been successfully created",
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    if (!req.params.id) {
      return res.status(400).json({
        idDeleted: false,
        message: "The filed id is required",
      });
    }
    const response = await productsService.delete(id);
    console.log(response);
    return res.status(202).json({
      status: 202,
      product: response,
      isDeleted: true,
      message: "Product deleted successfully",
    });
  },
};

export default productsController;
