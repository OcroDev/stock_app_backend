import { movementService } from "../services/movementService.js";

const movementController = {
  getAll: async (req, res) => {
    const movements = await movementService.getAll();

    res.status(200).json({
      ok: "true",
      count: movements.length,
      products: movements,
    });
  },
  store: async (req, res) => {
    const { productId } = req.params;
    if (!productId) {
      return res.status(400).json({
        status: 400,
        message: "The id is required",
        isStored: false,
      });
    }

    const { type, quantity } = req.body;
    const newMovement = {
      type,
      quantity: type === "Compra" ? quantity : quantity * -1,
      product: productId,
    };

    const movementStored = await movementService.store(newMovement);

    return res.status(201).json({
      status: 201,
      isStored: true,
      movement: movementStored,
      message: "The movement has been successfully created",
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        idDeleted: false,
        message: "The filed id is required",
      });
    }

    const response = await movementService.delete(id);

    return res.status(202).json({
      status: 202,
      movement: response,
      isDeleted: true,
      message: "Product deleted successfully",
    });
  },
};

export default movementController;
