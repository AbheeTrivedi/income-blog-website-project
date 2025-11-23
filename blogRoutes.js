import express from "express";
import Blog from "../models/blog-model.js";

const router = express.Router();

// ➕ Create new blog
router.post("/create", async (req, res) => {
  try {
    const { title, content, category, author } = req.body;
    const blog = new Blog({ title, content, category, author });
    await blog.save();
    res.json({ success: true, message: "Blog created successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error creating blog" });
  }
});

// 📖 Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching blogs" });
  }
});

// 📄 Get single blog by ID (important for Read More)
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blog" });
  }
});

export default router;


