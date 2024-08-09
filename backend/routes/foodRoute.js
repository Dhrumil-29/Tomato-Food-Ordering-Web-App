import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// adding new food item
foodRouter.post("/add", upload.single("image"), addFood);

// getting all list of food items
foodRouter.get("/list", listFood);

foodRouter.post("/remove", removeFood);

export default foodRouter;