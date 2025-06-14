import { HTTP_STATUS } from "../constants/index.js";
import Payment from "../models/payment.model.js";

/* Get all Payments */
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    return res.status(HTTP_STATUS.OK).json({ message: payments });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
  }
};

/* Get Payment by ID */
const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Payment Not Found!" });
    }
    return res.status(HTTP_STATUS.OK).json({ message: payment });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
  }
};

/* Add a new Payment */
const addNewPayment = async (req, res) => {
  try {
    const { orderId, userId, amount, paymentMethod, status, transactionId, paymentDate } = req.body;

    const newPayment = new Payment({
      orderId,
      userId,
      amount,
      paymentMethod,
      status,
      transactionId,
      paymentDate,
    });

    await newPayment.save();

    return res.status(HTTP_STATUS.CREATED).json({ message: "Payment Successfully Added!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
  }
};

/* Update Payment by ID */
const updatePaymentById = async (req, res) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPayment) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Payment Not Found!" });
    }
    return res.status(HTTP_STATUS.OK).json({ message: "Payment Successfully Updated!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
  }
};

/* Delete Payment by ID */
const deletePaymentById = async (req, res) => {
  try {
    const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
    if (!deletedPayment) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Payment Not Found!" });
    }
    return res.status(HTTP_STATUS.OK).json({ message: "Payment Successfully Deleted!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
  }
};

export default {
  getAllPayments,
  getPaymentById,
  addNewPayment,
  updatePaymentById,
  deletePaymentById,
};
