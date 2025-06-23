import { HTTP_STATUS } from "../constants/index.js";
import Reservation from "../models/reservations.models.js";

const findReservation = async (reservationId) => {
  return await Reservation.findOne({ reservationId });
};

/* Get all reservations */
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    return res.status(HTTP_STATUS.OK.code).json({ message: reservations });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};
/* Get reservation by ID */
const getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Reservation Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: reservation });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Add a new reservation */
const addNewReservation = async (req, res) => {
  try {
    const {
      reservationId,
      guestId,
      reservationType,
      reservationDetails,
      checkInDate,
      checkOutDate,
      reservationDate,
      status,
      totalAmount,
      paymentStatus,
      specialRequests,
      createdAt,
      updatedAt,
    } = req.body;

    const existingReservation = await findReservation(reservationId);
    if (existingReservation) {
      return res.status(HTTP_STATUS.CONFLICT.code).json({ message: "Reservation Already Exists!" });
    }

    const newReservation = new Reservation({
      reservationId,
      guestId,
      reservationType,
      reservationDetails,
      checkInDate,
      checkOutDate,
      reservationDate,
      status,
      totalAmount,
      paymentStatus,
      specialRequests,
      createdAt,
      updatedAt,
    });

    await newReservation.save();
    return res.status(HTTP_STATUS.CREATED.code).json({ message: "New Reservation Successfully Added!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Update reservation by ID */
const updateReservationById = async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReservation) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Reservation Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Updated!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Delete reservation by ID */
const deleteReservationById = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Reservation Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Deleted!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

export default {
  getAllReservations,
  getReservationById,
  addNewReservation,
  updateReservationById,
  deleteReservationById,
};
