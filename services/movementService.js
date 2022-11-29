import { MOVEMENT } from "../models/movement.js";

export const movementService = {
  getAll: () => {
    try {
      //TODO function to get all movement from database
    } catch (error) {
      return error;
    }
  },
  store: (newMovement) => {
    try {
      return MOVEMENT.create(newMovement);
    } catch (error) {
      return error;
    }
  },
  delete: (id) => {
    try {
      return MOVEMENT.findByIdAndUpdate(
        id,
        { deletedAt: new Date() },
        { new: true }
      );
    } catch (error) {
      return error;
    }
  },
};
