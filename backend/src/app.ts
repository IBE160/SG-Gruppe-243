import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import cvRoutes from "./routes/cv.routes";
import analysisRoutes from "./routes/analysis.routes";
import { connectDB } from "./config/database";

const app = express();

app.use(cors());
app.use(express.json());

console.log("DEBUG - MONGO_URI at runtime:", process.env.MONGO_URI);
connectDB();

app.use("/auth", authRoutes);
app.use("/cv", cvRoutes);
app.use("/analysis", analysisRoutes);

export default app;
