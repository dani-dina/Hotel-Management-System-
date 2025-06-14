import { body } from "express-validator";

export const validateFood = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Food name is required")
    .isLength({ min: 2 })
    .withMessage("Food name must be at least 2 characters long"),

  body("price")
    .isNumeric()
    .withMessage("Price must be a number")
    .custom(value => value > 0)
    .withMessage("Price must be greater than zero"),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  body("imageUrl")
    .optional()
    .isURL()
    .withMessage("Image URL must be a valid URL"),
];
