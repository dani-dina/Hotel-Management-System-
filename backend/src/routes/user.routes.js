import express from 'express';
import userController from '../controller/user.controller.js';
import auth from '../middlewares/auth.moddleware.js';

const { 
    getAllUsers, 
    getUserById, 
    addNewUser, 
    updateUserById, 
    deleteUserById 
} = userController;

const router = express.Router();

router.get('/users',getAllUsers);
router.get('/users/:id',auth, getUserById);
router.post('/users', addNewUser);
router.put('/users/:id',auth, updateUserById);
router.delete('/users/:id',auth, deleteUserById);

export default router;
