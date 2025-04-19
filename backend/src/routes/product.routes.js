import express from 'express';
import productController from '../controller/products.controller.js';

const { 
getAllProducts, getProductById, addNewProduct, updateProductById, deleteProductById
} = productController;

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', addNewProduct);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

export default router;
