import Food from "../models/foodMenu.model.js";
import { HTTP_STATUS } from "../constants/index.js";

const findFood = async(name)=>{
    return await Food.findOne({name});
}
/* Get All Foods */
const getAllFoods = async(req,res)=>{
    try{
        const getFood = await Food.find();
        return res.status(HTTP_STATUS.OK).json(getFood);
    }catch(error){
        return res.status(HTTP_STATUS.SERVER_ERROR).json("Internal Server Error !");
    }
}
// Get Food by id
const getFoodById = async(req,res)=>{
    try{
        const food = await Food.findById(req.params.id);
        if(!food){
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message : "Food Not Found !"});
        }
        return res.status(HTTP_STATUS.OK).json({ message : food});
    }catch(error){
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message : "Internal Server Error"});
    }
}
/* Add a new Employee */
const addNewFood = async(req,res)=>{
    try{
        const  {
            foodId,
            name,
            description,
            price,
            image,
            availability,
            isVegetarian,
            categories,
        } = req.body;
        const existingFood = await findFood(name);
        if(existingFood){
            return res.status(HTTP_STATUS.CONFLICT).json({ message : "Food Already Exists"});
        }
        const newFood = new Food({
            foodId,
            name,
            description,
            price,
            image,
            availability,
            isVegetarian,
            categories,
        });
        await newFood.save();
        return res.status(HTTP_STATUS.CREATED).json({ message : "New Food Successfully Added !"});
    }catch(error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({ message : "Internal Server Error !"});
    }
}
/* update Food by id */
const updateFoodById = async(req,res)=>{
    try{
        const updateFood = await Food.findByIdAndUpdate(req,params.id,req.body,{ new : true});
        if(!updateFood){
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message : "Food Not Found !"});
        }
        return res.status(HTTP_STATUS.OK).json({ message : "Successdully Updated !"});
    }catch(error){
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message : "Internal Server Error"});
    }
}
/* Delete Food By Id */
const deleteFoodById = async(req,res)=>{
    try{
        const deleteFood = Food.findByIdAndDelete(req.params.id);
        if(!deleteFood){
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message : "Food Not Found !"});
        }
        return res.status(HTTP_STATUS.OK).json({ message : "Food Successfully deleted !"});
    }catch(error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({ message : " Internal Server Error !"});
    }
}

export default{
    getAllFoods,
    getFoodById,
    addNewFood,
    updateFoodById,
    deleteFoodById
};