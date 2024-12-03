import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-800 dark:text-white py-16"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-orange-500 dark:text-yellow-400 mb-6">About Us</h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          At Sweet Bakes Bakery, we pride ourselves on delivering the freshest and most delightful baked goods. 
          With a passion for quality and taste, we’ve been serving our community with love and care.
        </p>
        <a
          href="/contact"
          className="outline-btn inline-block py-2 px-8 text-lg font-semibold text-yellow-600 dark:text-yellow-300 border-2 border-yellow-600 dark:border-yellow-300 rounded-md hover:bg-yellow-600 hover:text-white transition duration-300"
        >
          Contact Us
        </a>
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 Sweet Bakes Bakery. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default About;
