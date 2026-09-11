const express = require("express");

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.get("/blogs", getBlogs);

router.get("/blogs/:id", getBlogById);

// Admin only
router.post(
  "/blogs",
  protectAdmin,
  createBlog
);

router.put(
  "/blogs/:id",
  protectAdmin,
  updateBlog
);

router.delete(
  "/blogs/:id",
  protectAdmin,
  deleteBlog
);

module.exports = router;