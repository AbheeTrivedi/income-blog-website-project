import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = [
    "All",
    "Freelancing",
    "Video Editing",
    "Content Creation",
    "Affiliate Marketing",
    "Online Tutor",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log("Error loading blogs:", err));
  }, []);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <div className="p-6">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col gap-5">
        {filteredBlogs.length === 0 ? (
          <p className="text-center text-gray-500">
            No blogs found for this category.
          </p>
        ) : (
          filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-orange-50 rounded-xl shadow p-5 hover:shadow-md transition cursor-pointer"
            >
              <h3 className="text-lg font-bold mb-1">{blog.title}</h3>
              <p className="text-gray-700 mb-2">
                {blog.content.slice(0, 120)}...
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Author: {blog.author || "Anonymous"}
              </p>
              <button
                onClick={() => navigate(`/blog/${blog._id}`)}
                className="text-orange-600 font-medium hover:underline"
              >
                Read More →
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;





