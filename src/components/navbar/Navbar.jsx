import React, { useEffect } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(localStorage.getItem('theme') === 'dark' ? true : false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-orange-500 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 shadow-md">
      <div className="container flex justify-between items-center py-4 sm:py-6">
        {/* Teks judul yang lebih indah */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200 dark:from-yellow-400 dark:to-yellow-500 drop-shadow-lg">
          Welcome to Our Shop
        </h1>

        <div className="flex items-center space-x-6">
          {/* Tombol mode terang/gelap */}
          {darkMode ? (
            <BiSolidSun
              className="text-2xl text-white cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={toggleDarkMode}
            />
          ) : (
            <BiSolidMoon
              className="text-2xl text-white cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={toggleDarkMode}
            />
          )}

          {/* Tombol logout */}
          <a
            href="/logout"
            className="flex items-center text-lg font-medium text-white hover:text-yellow-300 transition duration-300"
          >
            <FiLogOut className="inline mr-2 text-2xl" />
            <span className="hover:underline">Log Out</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
