const express = require("express");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Purabi Insurance Backend is running"
  });
});

// Blog Routes
app.use("/api", blogRoutes);

module.exports = app;