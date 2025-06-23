import { HTTP_STATUS } from "../constants/index.js";
import Order from "../models/orders.model.js";

/* Get all Orders */
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(HTTP_STATUS.OK.code).json({ message: orders });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Get order by ID */
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Order Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: order });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Add a new Order */
const addNewOrder = async (req, res) => {
  try {
    const { customerId, items, totalPrice, status, paymentMethod, createdAt } = req.body;

    const newOrder = new Order({
      customerId,
      items,
      totalPrice,
      status,
      paymentMethod,
      createdAt,
    });

    await newOrder.save();

    return res.status(HTTP_STATUS.CREATED.code).json({ message: "Successfully Added!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Update order by ID */
const updateOrderById = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Order Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Updated!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Delete order by ID */
const deleteOrderById = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Order Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Deleted!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

export default {
  getAllOrders,
  getOrderById,
  addNewOrder,
  updateOrderById,
  deleteOrderById,
};
