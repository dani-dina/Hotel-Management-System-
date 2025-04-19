import { HTTP_STATUS } from "../constants/index.js";
import Inventory from "../models/Inventory.models.js";

const findInventory = async(itemName)=>{
    return await Models.findOne({itemName});
}

/* Get all the inventories */
const getAllInventory = async(req,res)=>{
    try{
        const inventories = await Inventory.find();
        return res.status(HTTP_STATUS.OK).json({ message : inventories});
    }catch(error){
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message : "Internal Server Error !"});
    }
}
/* Get single inventory by id */
const getInventoryById = async(req,res)=>{
    try{
        const inventory = await Inventory.findById(req.params.id);
        if(!inventory) return res.status(HTTP_STATUS.NOT_FOUND).json({ message : "Not Found !"});
        return res.status(HTTP_STATUS.OK).json({ message : inventory});
    }catch(error){
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message : "Internal Server Error !"});
    }
}
/* Add anew Inventory*/
const addNewInventery = async(req,res)=>{
    try{
        const {
            itemId,
            itemName,
            category,
            quantity,
            unit,
            purchaseDate,
            expiryDate,
            supplier,
            purchasePrice,
            sellingPrice,
            restockLevel,
            lastRestockDate,
            status,
            notes
        } = req.body;
        const existingInventory = findInventory(itemName);
        if(existingInventory){
            return res.status(HTTP_STATUS.CONFLICT).json({ message :"This Enventory Already Exists"});
        } 
        const newInventory = new Inventory({
            itemId,
            itemName,
            category,
            quantity,
            unit,
            purchaseDate,
            expiryDate,
            supplier,
            purchasePrice,
            sellingPrice,
            restockLevel,
            lastRestockDate,
            status,
            notes
        });
        await newInventory.save();
        return res.status(HTTP_STATUS.CREATED).json({ message : "Successfully Added !"})
    }catch(error){
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message : "Internal Server Error !"});
    }
}
/* update inventory by id */
const updateInventoryById = async(req,res)=>{
    try{
        const updateInventory = await Inventory.findByIdAndUpdate(req.params.id,req.body,{ new : true});
        if(!updateInventory) return res.status(HTTP_STATUS.NOT_FOUND).json({ message : "Not Found !"});
        return res.status(HTTP_STATUS.OK).json({ message : "Successfully Updated !"});
    }catch(error){
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message : "Internal Server Error "});
    }
}
/* Delete Inventory By Id */
const deleteInventoryById = async(req,res)=>{
    try{
        const deleteInventory = await Inventory.findByIdAndDelete(req.params.id);
        if(!deleteInventory) return res.status(HTTP_STATUS.NOT_FOUND).json({ message : "Not Found !"});
        return res.status(HTTP_STATUS.OK).json({ message : "Successfully Deleted !"});
    }catch(error){
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message : "Internal Server Error "});
    }
}

export default {
    getAllInventory,
    getInventoryById,
    addNewInventery,
    updateInventoryById,
    deleteInventoryById,
};