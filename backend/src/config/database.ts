import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cvtool");
    console.log("MongoDB connected locally");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};