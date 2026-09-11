const express = require("express");

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require("../controllers/blogController");

const router = express.Router();

// Create Blog
router.post("/blogs", createBlog);

// Get All Blogs
router.get("/blogs", getBlogs);

// Get Single Blog
router.get("/blogs/:id", getBlogById);

// Update Blog
router.put("/blogs/:id", updateBlog);

// Delete Blog
router.delete("/blogs/:id", deleteBlog);

module.exports = router;