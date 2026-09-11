const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    content: {
      type: String,
      required: true
    },

    image: {
      type: String,
      default: ""
    },

    category: {
      type: String,
      default: "Insurance"
    },

    author: {
      type: String,
      default: "Purabi Insurance"
    }
  },
  {
    timestamps: true
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;