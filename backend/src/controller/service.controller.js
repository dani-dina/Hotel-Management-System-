import Service from "../models/service.model.js";
import { HTTP_STATUS } from "../constants/index.js";

const findService = async (serviceId) => {
    return await Service.findOne({ serviceId });
};

/* Get all Services */
const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        return res.status(HTTP_STATUS.OK).json({ message: services });
    } catch (error) {
        console.error("Error fetching services:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Get service by ID */
const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Service Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: service });
    } catch (error) {
        console.error("Error fetching service by ID:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Add new Service */
const addNewService = async (req, res) => {
    try {
        const {
            serviceId,
            name,
            description,
            category,
            price,
            availability,
            serviceDuration,
            serviceProvider,
            createdAt,
        } = req.body;

        const existingService = await findService(serviceId);
        if (existingService) {
            return res.status(HTTP_STATUS.CONFLICT).json({ message: "Service Already Exists!" });
        }

        const newService = new Service({
            serviceId,
            name,
            description,
            category,
            price,
            availability,
            serviceDuration,
            serviceProvider,
            createdAt,
        });

        await newService.save();
        return res.status(HTTP_STATUS.CREATED).json({ message: "New Service Successfully Added!" });
    } catch (error) {
        console.error("Error adding new service:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Update service by ID */
const updateServiceById = async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedService) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Service Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: "Service successfully updated!" });
    } catch (error) {
        console.error("Error updating service:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Delete service by ID */
const deleteServiceById = async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (!deletedService) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Service Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: "Service successfully deleted!" });
    } catch (error) {
        console.error("Error deleting service:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

export default { getAllServices, getServiceById, addNewService, updateServiceById, deleteServiceById };
