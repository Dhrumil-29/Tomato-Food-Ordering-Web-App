import fs from "fs";
import FoodModel from "../models/foodModel.js";
import { food_list } from "../data/assets.js";

const deleteAllFood = async (req,res) => {
  try {
    const allFood = await FoodModel.find({});
    allFood.forEach(async (food) => {
      fs.unlink(`uploads/${food.image}`, () => {});
      await FoodModel.findByIdAndDelete(food._id);
    });

    console.log("Deleted all data");
    res.json({ success: true, message: "Deleted all data" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

const addAllFood = async (req, res) => {
  food_list.forEach(async (food) => {
    const newFood = new FoodModel({ ...food });
    await newFood.save();
  });
  // console.log("All Data inserted...");
  res.json({ success: true, message: "Done operations..." });
};

export { addAllFood,deleteAllFood };
