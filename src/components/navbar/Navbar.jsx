import React, { useEffect } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { FaShoppingCart, FaCoffee, FaBreadSlice } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';

const navMenus = [
  { name: 'Home', link: '/home', icon: <IoHomeSharp className="inline mr-2" /> },
  { name: 'Shop', link: '/shop', icon: <FaBreadSlice className="inline mr-2" /> },
  { name: 'Cafe', link: '/cafe', icon: <FaCoffee className="inline mr-2" /> },
  { name: 'Cart', link: '/cart', icon: <FaShoppingCart className="inline mr-2" /> },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );

  const toggleMenu = () => setShowMenu(!showMenu);

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
        <h1 className="text-3xl text-white font-bold">Sweet Bakes Bakery</h1>

        <div className="hidden sm:flex items-center space-x-6">
          {darkMode ? (
            <BiSolidSun className="text-2xl text-white cursor-pointer" onClick={toggleDarkMode} />
          ) : (
            <BiSolidMoon className="text-2xl text-white cursor-pointer" onClick={toggleDarkMode} />
          )}

          <ul className="flex space-x-6">
            {navMenus.map((menu) => (
              <li key={menu.name}>
                <a
                  href={menu.link}
                  className="text-lg font-semibold text-white hover:text-yellow-200 transition duration-300 flex items-center"
                >
                  {menu.icon} {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block sm:hidden">
          <FiMenu className="text-2xl text-white cursor-pointer" onClick={toggleMenu} />

          {showMenu && (
            <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-10 p-6">
              <ul className="flex flex-col items-center space-y-6">
                {darkMode ? (
                  <BiSolidSun className="text-2xl text-white cursor-pointer" onClick={toggleDarkMode} />
                ) : (
                  <BiSolidMoon className="text-2xl text-white cursor-pointer" onClick={toggleDarkMode} />
                )}
                {navMenus.map((menu) => (
                  <li key={menu.name}>
                    <a
                      href={menu.link}
                      className="text-lg font-semibold text-gray-800 dark:text-white hover:text-yellow-500 transition duration-300 flex items-center"
                    >
                      {menu.icon} {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;