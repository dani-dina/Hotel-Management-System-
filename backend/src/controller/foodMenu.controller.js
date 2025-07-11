import Food from "../models/foodMenu.model.js";
import { HTTP_STATUS } from "../constants/index.js";

const findFood = async (name) => {
  return await Food.findOne({ name });
};

const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    return res.status(HTTP_STATUS.OK.code).json(foods);
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Food Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: food });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error" });
  }
};

const addNewFood = async (req, res) => {
  try {
    const {
      foodId,
      name,
      description,
      price,
      image,
      availability,
      isVegetarian,
      categories,
    } = req.body;

    const existingFood = await findFood(name);
    if (existingFood) {
      return res.status(HTTP_STATUS.CONFLICT.code).json({ message: "Food Already Exists" });
    }

    const newFood = new Food({
      foodId,
      name,
      description,
      price,
      image,
      availability,
      isVegetarian,
      categories,
    });

    await newFood.save();
    return res.status(HTTP_STATUS.CREATED.code).json({ message: "New Food Successfully Added!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

const updateFoodById = async (req, res) => {
  try {
    const updateFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateFood) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Food Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Updated!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error" });
  }
};

const deleteFoodById = async (req, res) => {
  try {
    const deleteFood = await Food.findByIdAndDelete(req.params.id);
    if (!deleteFood) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Food Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Food Successfully Deleted!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

export default {
  getAllFoods,
  getFoodById,
  addNewFood,
  updateFoodById,
  deleteFoodById,
};
