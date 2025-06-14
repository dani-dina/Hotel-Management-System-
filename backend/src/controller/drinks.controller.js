import Drink from '../models/drinksMenu.model.js';
import { HTTP_STATUS } from '../constants/index.js';

const findDrink = async (drinkId) => {
  return await Drink.findOne({ drinkId });
};

/* Get all Drinks */
const getAllDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find();
    return res.status(HTTP_STATUS.OK).json(drinks);
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error" });
  }
};

// Get Single Drink By ID
const getDrinkById = async (req, res) => {
  try {
    const drink = await Drink.findById(req.params.id);
    if (!drink) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Not Found" });
    }
    return res.status(HTTP_STATUS.OK).json(drink);
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Server Error" });
  }
};

const addNewDrink = async (req, res) => {
  try {
    const {
      drinkId,
      name,
      description,
      price,
      image,
      availability,
      isAlcoholic,
      categories,
    } = req.body;

    const existingDrink = await findDrink(drinkId);
    if (existingDrink) {
      return res.status(HTTP_STATUS.CONFLICT).json({ message: "Drink Already Exists" });
    }

    const newDrink = new Drink({
      drinkId,
      name,
      description,
      price,
      image,
      availability,
      isAlcoholic,
      categories,
    });

    await newDrink.save();
    return res.status(HTTP_STATUS.CREATED).json({ message: "Successfully added" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Server Error" });
  }
};

const updateDrinkById = async (req, res) => {
  try {
    const updateDrink = await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateDrink) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Not Found!" });
    }
    return res.status(HTTP_STATUS.OK).json({ message: "Successfully updated!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Server Error" });
  }
};

// Delete by id
const deleteDrinkById = async (req, res) => {
  try {
    const deleteDrink = await Drink.findByIdAndDelete(req.params.id);
    if (!deleteDrink) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Not Found!" });
    }
    return res.status(HTTP_STATUS.OK).json({ message: "Successfully Deleted!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Server Error" });
  }
};

export default {
  getAllDrinks,
  getDrinkById,
  addNewDrink,
  updateDrinkById,
  deleteDrinkById,
};
