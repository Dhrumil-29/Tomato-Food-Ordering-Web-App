import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dhrumil:dhrumil@cluster0.caykrr3.mongodb.net/gujju-food"
    )
    .then(() => {
      console.log("DB connected...");
    });
};
