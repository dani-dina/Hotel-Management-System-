import Employee from '../models/employees.model.js';
import { HTTP_STATUS } from '../constants/index.js';

const findEmployee = async (fin) => {
  return await Employee.findOne({ fin });
};

/* Get all users */
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.status(HTTP_STATUS.OK).json({ message: employees });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Server Error" });
  }
};

/* Get employee by ID */
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee)
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Employee not found" });
    return res.status(HTTP_STATUS.OK).json({ employee });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error" });
  }
};

/* Add a new employee */
const addNewEmployee = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      password,
      jobPosition,
      salary,
      profileImage,
      sex,
      address,
      fin,
      phoneNumber,
      status,
      description,
      rate,
      role,
    } = req.body;

    const existingEmployee = await findEmployee(fin);
    if (existingEmployee) {
      return res.status(HTTP_STATUS.CONFLICT).json({ message: "Employee Already Exists" });
    }

    const newEmployee = new Employee({
      firstName,
      middleName,
      lastName,
      email,
      password,
      jobPosition,
      salary,
      profileImage,
      sex,
      address,
      fin,
      phoneNumber,
      status,
      description,
      rate,
      role,
    });

    await newEmployee.save();
    return res.status(HTTP_STATUS.CREATED).json({ message: "Successfully added!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({
      message: "Internal Server Error!",
      error: error.message,
    });
  }
};

/* Update employee by ID */
const updateEmployeeById = async (req, res) => {
  try {
    const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateEmployee) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Employee Not Found!" });
    }
    return res.status(HTTP_STATUS.OK).json({ message: "Successfully updated!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Server Error!" });
  }
};

/* Delete employee by ID */
const deleteEmployeeById = async (req, res) => {
  try {
    const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deleteEmployee) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Employee Not Found!" });
    }
    res.status(HTTP_STATUS.OK).json({ message: "Successfully Deleted!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
  }
};

export default {
  getAllEmployees,
  getEmployeeById,
  addNewEmployee,
  updateEmployeeById,
  deleteEmployeeById,
};
