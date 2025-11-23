import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", data.token);
        setMessage("✅ Login successful! Redirecting...");
        setTimeout(() => navigate("/"), 1200);
      } else {
        setMessage(`❌ ${data.message || "Invalid credentials"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Server error, please try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-100 via-white to-orange-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue your blogging journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold shadow-md transition ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            {loading ? "Logging in..." : "Log In 🚀"}
          </motion.button>
        </form>

        {message && (
          <p
            className={`text-center text-sm mt-4 ${
              message.startsWith("✅")
                ? "text-green-600"
                : message.startsWith("❌")
                ? "text-red-600"
                : "text-yellow-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
