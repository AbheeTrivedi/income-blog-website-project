import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Frontpage/Header";
import About from "./about/About";
import Blog from "./blogs/Blog";
import BlogDetail from "./Frontpage/BlogDetail";
import WriteBlog from "./blogs/writeblog";
import Login from "./login/Login";
import Signup from "./login/Signup";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      {/* 🟧 Header only on authenticated routes */}
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Header />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <>
                
                <About />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <>
                
                <Blog />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <>
                
                <BlogDetail />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/write"
          element={
            <ProtectedRoute>
              <>
                
                <WriteBlog />
              </>
            </ProtectedRoute>
          }
        />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/blogs" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;






