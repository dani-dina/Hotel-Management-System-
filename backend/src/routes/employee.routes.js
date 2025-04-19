import express from 'express';
import employeeController from '../controller/employees.controller.js';
import auth from '../middlewares/auth.moddleware.js';

const { 
    getAllEmployees, 
    getEmployeeById, 
    addNewEmployee, 
    updateEmployeeById, 
    deleteEmployeeById 
} = employeeController;

const router = express.Router();

router.get('/employees',auth, getAllEmployees);
router.get('/employees/:id',auth, getEmployeeById);
router.post('/employees',auth, addNewEmployee);
router.put('/employees/:id',auth, updateEmployeeById);
router.delete('/employees/:id',auth, deleteEmployeeById);

export default router;
