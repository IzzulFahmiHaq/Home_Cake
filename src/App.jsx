import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import TambahRoti from "./components/TambahRoti.jsx";
import Register from "./components/Register.jsx";

function App() {
  const location = useLocation();
  const noNavbarRoutes = ["/register", "/login"]; // Rute tanpa navbar
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && (
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tambahroti" element={<TambahRoti />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
