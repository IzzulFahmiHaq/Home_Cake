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
        <h1
          className={`text-4xl font-serif font-extrabold tracking-wide ${
            darkMode ? 'text-gray-100' : 'text-gray-900'
          } transition duration-300 ease-in-out`}
        >
          Welcome to Our Shop
        </h1>

        <div className="flex items-center space-x-6">
          {darkMode ? (
            <BiSolidSun className="text-2xl text-white cursor-pointer hover:text-yellow-300 transition duration-300" onClick={toggleDarkMode} />
          ) : (
            <BiSolidMoon className="text-2xl text-white cursor-pointer hover:text-yellow-600 transition duration-300" onClick={toggleDarkMode} />
          )}

          <a
            href="/logout"
            className="flex items-center text-lg font-semibold text-white hover:text-yellow-200 transition duration-300"
          >
            <FiLogOut className="inline mr-2 text-2xl" /> Log Out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
