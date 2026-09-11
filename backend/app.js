const express = require("express");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
const agentRoutes = require("./routes/agentRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Purabi Insurance Backend is running",
  });
});

// Blog Routes
app.use("/api", blogRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);

// Auth Routes
app.use("/api/auth", authRoutes);

// Agent Routes
app.use("/api/agent", agentRoutes);

module.exports = app;