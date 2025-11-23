import React, { useState } from "react";

const WriteBlog = () => {
  const [blog, setBlog] = useState({ title: "", category: "", content: "" });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/blogs/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Blog published successfully!");
        setBlog({ title: "", category: "", content: "" });
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error publishing blog!");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">
        ✍️ Write a New Blog
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full p-3 border rounded-md"
          required
        />

        <select
          name="category"
          value={blog.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        >
          <option value="">Select Category</option>
          <option value="Freelancing">Freelancing</option>
          <option value="Video Editing">Video Editing</option>
          <option value="Content Creation">Content Creation</option>
          <option value="Affiliate Marketing">Affiliate Marketing</option>
          <option value="Online Tutor">Online Tutor</option>
        </select>

        <textarea
          name="content"
          value={blog.content}
          onChange={handleChange}
          placeholder="Write your blog here..."
          rows="6"
          className="w-full p-3 border rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold"
        >
          Publish 🚀
        </button>
      </form>
    </div>
  );
};

export default WriteBlog;


