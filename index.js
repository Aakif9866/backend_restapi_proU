import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import employeeRoutes from "./routes/employee.js";
import taskRoutes from "./routes/task.js";

// Load environment variables FIRST
dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected");

    // Start server ONLY after DB is connected
    app.listen(4000, () => {
      console.log("Server running on port 4000");
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/tasks", taskRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({ message: err.message });
});
