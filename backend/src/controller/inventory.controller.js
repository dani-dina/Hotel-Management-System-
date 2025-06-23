import { HTTP_STATUS } from "../constants/index.js";
import Inventory from "../models/Inventory.models.js";

const findInventory = async (itemName) => {
  return await Inventory.findOne({ itemName });
};

/* Get all the inventories */
const getAllInventory = async (req, res) => {
  try {
    const inventories = await Inventory.find();
    return res.status(HTTP_STATUS.OK.code).json({ message: inventories });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Get single inventory by id */
const getInventoryById = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Inventory Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: inventory });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};
/* Add a new Inventory */
const addNewInventory = async (req, res) => {
  try {
    const {
      itemId,
      itemName,
      category,
      quantity,
      unit,
      purchaseDate,
      expiryDate,
      supplier,
      purchasePrice,
      sellingPrice,
      restockLevel,
      lastRestockDate,
      status,
      notes
    } = req.body;

    const existingInventory = await findInventory(itemName);
    if (existingInventory) {
      return res.status(HTTP_STATUS.CONFLICT.code).json({ message: "This Inventory Already Exists" });
    }

    const newInventory = new Inventory({
      itemId,
      itemName,
      category,
      quantity,
      unit,
      purchaseDate,
      expiryDate,
      supplier,
      purchasePrice,
      sellingPrice,
      restockLevel,
      lastRestockDate,
      status,
      notes
    });

    await newInventory.save();
    return res.status(HTTP_STATUS.CREATED.code).json({ message: "Successfully Added!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

const updateInventoryById = async (req, res) => {
  try {
    const updateInventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateInventory) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Inventory Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Updated!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

const deleteInventoryById = async (req, res) => {
  try {
    const deleteInventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!deleteInventory) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Inventory Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Deleted!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

export default {
  getAllInventory,
  getInventoryById,
  addNewInventory,
  updateInventoryById,
  deleteInventoryById
};
