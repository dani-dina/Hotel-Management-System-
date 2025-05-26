import { HTTP_STATUS } from "../constants/index.js";
import Room from "../models/roomMenu.model.js";

const findRoom = async (roomId) => {
    return await Room.findOne({ roomId });
};

/* Get all Rooms */
const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        return res.status(HTTP_STATUS.OK).json({ message: rooms });
    } catch (error) {
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Get room by ID */
const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Room Not Found!" });
        return res.status(HTTP_STATUS.OK).json({ message: room });
    } catch (error) {
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Create a new room */
const addNewRoom = async (req, res) => {
    try {
        const {
            roomId,
            name,
            description,
            price,
            availability,
            bedType,
            views,
            isBooked,
            floorNumber,
            hasBalcony,
            isSmokingAllowed,
            checkInDate,
            checkOutDate,
            amenities,
        } = req.body;

        const existingRoom = await findRoom(roomId);
        if (existingRoom) {
            return res.status(HTTP_STATUS.CONFLICT).json({ message: "Room Already Exists!" });
        }

        const newRoom = new Room({
            roomId,
            name,
            description,
            price,
            availability,
            bedType,
            views,
            isBooked,
            floorNumber,
            hasBalcony,
            isSmokingAllowed,
            checkInDate,
            checkOutDate,
            amenities,
        });

        await newRoom.save();
        return res.status(HTTP_STATUS.CREATED).json({ message: "Successfully Added a New Room!" });
    } catch (error) {
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!",err : error });
    }
};

/* Update room by ID */
const updateRoomById = async (req, res) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRoom) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Room Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: "Room was successfully updated!" });
    } catch (error) {
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Delete room by ID */
const deleteRoomById = async (req, res) => {
    try {
        const deletedRoom = await Room.findByIdAndDelete(req.params.id);
        if (!deletedRoom) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Room Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: "Room was successfully deleted!" });
    } catch (error) {
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

export default{ getAllRooms, getRoomById, addNewRoom, updateRoomById, deleteRoomById };
