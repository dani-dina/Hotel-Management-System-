import Service from "../models/service.model.js";
import { HTTP_STATUS } from "../constants/index.js";

const findService = async (serviceId) => {
  return await Service.findOne({ serviceId });
};

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    return res.status(HTTP_STATUS.OK.code).json({ data: services });
  } catch (error) {
    console.error("Error fetching services:", error);
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Service Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ data: service });
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

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
    } = req.body;

    const existingService = await findService(serviceId);
    if (existingService) {
      return res.status(HTTP_STATUS.CONFLICT.code).json({ message: "Service Already Exists!" });
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
      // createdAt: Date.now(), // optionally set server-side timestamp
    });

    await newService.save();
    return res.status(HTTP_STATUS.CREATED.code).json({ message: "New Service Successfully Added!" });
  } catch (error) {
    console.error("Error adding new service:", error);
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

const updateServiceById = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedService) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Service Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Service successfully updated!" });
  } catch (error) {
    console.error("Error updating service:", error);
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

const deleteServiceById = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(HTTP_STATUS.NOT_FOUND.code).json({ message: "Service Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: "Service successfully deleted!" });
  } catch (error) {
    console.error("Error deleting service:", error);
    return res.status(HTTP_STATUS.SERVER_ERROR.code).json({ message: "Internal Server Error!" });
  }
};

export default { getAllServices, getServiceById, addNewService, updateServiceById, deleteServiceById };
