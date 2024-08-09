import express from "express";
import { addAllFood, deleteAllFood } from "../controllers/initdataController.js";

const initDataRouter = express.Router();

// adding Data
initDataRouter.get("/initdata", addAllFood);
initDataRouter.delete("/deleteData", deleteAllFood);

export default initDataRouter;
