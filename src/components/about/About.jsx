import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-orange-700 mb-6">About Us</h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          At Sweet Bakes Bakery, we pride ourselves on delivering the freshest and most delightful baked goods. With a passion for quality and taste, we’ve been serving our community with love and care.
        </p>

        
      </div>

      <div className="py-16 bg-white shadow-lg rounded-2xl">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Additional content can be added here */}
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container text-center">
          <p>&copy; 2024 Sweet Bakes Bakery. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default About;
