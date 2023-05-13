import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.log("ERROR IN CONNECTING TO DATABASE", error.message);
  }
};

export default Connection;
