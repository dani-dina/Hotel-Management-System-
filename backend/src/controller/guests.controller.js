import { HTTP_STATUS } from "../constants/index.js";
import Guest from "../models/guests.models.js";

const findGuest = async (email) => {
  return await Guest.findOne({ email });
};

/* Get all Guests */
const getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    return res.status(HTTP_STATUS.OK.code).json({ message: guests });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Get guest by id */
const getGuestById = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    if (!guest) return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "User Not Found!" });
    return res.status(HTTP_STATUS.OK.code).json({ message: guest });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Add a new Guest */
const addNewGuest = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      sex,
      address,
      profileImage,
      roomNumber,
      paymentStatus,
      bookingStatus,
      checkInDate,
      checkOutDate,
    } = req.body;

    const getGuest = await findGuest(email);
    if (getGuest)
      return res.status(HTTP_STATUS.CONFLICT.code).json({ message: "Guest Already Registered!" });

    const newGuest = new Guest({
      firstName,
      lastName,
      email,
      password,
      sex,
      address,
      profileImage,
      roomNumber,
      paymentStatus,
      bookingStatus,
      checkInDate,
      checkOutDate,
    });

    await newGuest.save();
    return res.status(HTTP_STATUS.CREATED.code).json({ message: "Successfully Added!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Update guest by id */
const updateGuestById = async (req, res) => {
  try {
    const updateGuest = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateGuest) return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Guest Not Found!" });
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Updated!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

/* Delete guest by Id */
const deleteGuestById = async (req, res) => {
  try {
    const deleteGuest = await Guest.findByIdAndDelete(req.params.id);
    if (!deleteGuest) return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Guest Not Found!" });
    return res.status(HTTP_STATUS.OK.code).json({ message: "Successfully Deleted!" });
  } catch (error) {
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

export default {
  getAllGuests,
  getGuestById,
  addNewGuest,
  updateGuestById,
  deleteGuestById,
};
