import React, { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Untuk mendapatkan rute saat ini

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    navigate("/login"); // Arahkan ke halaman login
  };

  useEffect(() => {
    // Atur mode gelap saat halaman Home
    if (location.pathname === "/hero") {
      setDarkMode(true);
    }
    // Atur mode terang otomatis di halaman Dashboard dan About
    else if (location.pathname === "/dashboard" || location.pathname === "/about") {
      setDarkMode(false);
    }
  }, [location.pathname]);

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
    <nav className="bg-gradient-to-r from-yellow-400 to-orange-500 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <h1
          className={`text-2xl md:text-4xl font-serif font-extrabold tracking-wide ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Our Shop
        </h1>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden">
          {menuOpen ? (
            <AiOutlineClose
              className="text-3xl text-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <AiOutlineMenu
              className="text-3xl text-white cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static left-0 top-0 md:top-auto md:left-auto bg-gradient-to-r from-yellow-400 to-orange-500 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 md:bg-transparent w-full md:w-auto p-6 md:p-0 transition-all duration-300 z-10 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/hero"
              className="block text-lg font-semibold text-white hover:text-yellow-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block text-lg font-semibold text-white hover:text-yellow-200 transition duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-lg font-semibold text-white hover:text-yellow-200 transition duration-300"
            >
              About
            </Link>
          </li>
          <li className="mt-4 md:mt-0">
            {darkMode ? (
              <BiSolidSun
                className="text-2xl text-white cursor-pointer hover:text-yellow-300 transition duration-300"
                onClick={toggleDarkMode}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl text-white cursor-pointer hover:text-yellow-600 transition duration-300"
                onClick={toggleDarkMode}
              />
            )}
          </li>
          <li className="mt-4 md:mt-0">
            <button
              onClick={handleLogout}
              className="flex items-center text-lg font-semibold text-white hover:text-yellow-200 transition duration-300"
            >
              <FiLogOut className="inline mr-2 text-2xl" /> Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
