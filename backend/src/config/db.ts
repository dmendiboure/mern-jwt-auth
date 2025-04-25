import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB database successfully");
  } catch (error) {
    console.error("Could not connect to database", error);
    process.exit(1);
  }
};

export default connectDatabase;
