import Product from "../models/products.model.js";
import { HTTP_STATUS } from "../constants/index.js";

const findProduct = async (productId) => {
  return await Product.findOne({ productId });
};
/* Get all Products */
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(HTTP_STATUS.OK.code).json({ message: products });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};
/* Get Product by ID */
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Product Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: product });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Create a New Product */
const addNewProduct = async (req, res) => {
  try {
    const {
      productId,
      name,
      description,
      category,
      price,
      stockQuantity,
      supplier,
      image,
      expiryDate,
      addedDate,
      isAvailable,
    } = req.body;

    const existingProduct = await findProduct(productId);
    if (existingProduct) {
      return res.status(HTTP_STATUS.CONFLICT.code).json({ message: "Product Already Exists!" });
    }

    const newProduct = new Product({
      productId,
      name,
      description,
      category,
      price,
      stockQuantity,
      supplier,
      image,
      expiryDate,
      addedDate,
      isAvailable,
    });

    await newProduct.save();
    return res.status(HTTP_STATUS.CREATED.code).json({ message: "Product Successfully Added!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Update Product by ID */
const updateProductById = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Product Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Updated!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Delete Product by ID */
const deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Product Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Deleted!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

export default {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  deleteProductById,
};
