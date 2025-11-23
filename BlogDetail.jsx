import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log("Error fetching blog:", err));
  }, [id]);

  if (!blog) {
    return <p className="p-10 text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-orange-50 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
      <p className="text-gray-600 mb-2">
        Author: {blog.author || "Anonymous"}
      </p>
      <p className="text-gray-800 leading-relaxed">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;






