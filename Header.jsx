import React from "react";
import { motion, useScroll } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
import Passion from "./Passion";
import Footer from "./Footer";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // 🔒 Logout Function
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:4000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="bg-red-500 w-full h-3 fixed top-0 left-0"
        ></motion.div>

        <header className="head flex justify-between items-center px-10 py-6">
          <div className="text-xl tracking-wide font-serif px-10">INCOME</div>

          <nav className="flex items-center gap-4">
            {/* Always visible */}
            <Link
              to="/about"
              className="cursor-pointer border rounded-full border-red-200 px-4 py-2"
            >
              ABOUT
            </Link>

            <Link
              to="/blogs"
              className="cursor-pointer border rounded-full border-red-200 px-4 py-2"
            >
              BLOGS
            </Link>

            {/* ✅ Conditional Buttons */}
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="text-sm border rounded-full border-red-200 px-4 py-2"
              >
                LOG IN
              </Link>
            ) : (
              <>
                <button className="bg-black text-white px-4 py-2 text-sm font-medium rounded-md">
                  <Link to="/write" className="text-white no-underline">
                    GET STARTED
                  </Link>
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm font-medium rounded-md"
                >
                  LOGOUT
                </button>
              </>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10 md:px-20 py-20 mt-15">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase font-[cursive] text-gray-600 mb-2">
              Live life wealthier
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Create a money making blog
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Share your story with the world. Create a beautiful, personalized
              blog that fits your brand. Grow your audience by telling how to
              make money or transform your passion into revenue.
            </p>
            <button className="bg-black text-white px-6 py-3 text-sm font-medium">
              GET STARTED
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://cdn.sanity.io/images/r115idoc/production/4ce329dc4ac504c6351a20bc05156cba87653818-1200x800.png?w=3840&q=75&fit=clip&auto=format"
              alt="Blog preview"
              className="rounded-lg shadow-lg border"
            />
          </motion.div>
        </main>
      </div>

      <Card />
      <Passion />
      <Footer />
    </div>
  );
};

export default Header;

