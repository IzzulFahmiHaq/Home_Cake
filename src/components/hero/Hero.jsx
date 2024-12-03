import React from 'react';
import dinoImg from "../../assets/imagee.jpg";
import secondImg from "../../assets/imgg.jpg";
import threeImg from "../../assets/imgge.jpg";
import twoImg from "../../assets/imgrot.jpg";

const Hero = () => {
  return (
    <main className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 dark:bg-gradient-to-r dark:from-orange-600 dark:to-yellow-600 dark:text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 sm:py-20">
        <div className="text-center sm:text-left flex flex-col justify-center">
          <p className="text-3xl font-semibold text-white">Welcome to Sweet Bakes Bakery!</p>
          <p className="text-5xl font-extrabold text-white mt-2">Freshly Baked Happiness</p>
          <p className="text-xl text-gray-200 my-4 max-w-lg mx-auto sm:mx-0">
            Discover our delicious range of cakes, pastries, and artisan bread crafted with love.
          </p>
          <div className="flex flex-col items-center sm:items-start gap-4">
            <a
              href="/shop"
              className="inline-block px-8 py-4 text-white bg-yellow-600 rounded-full shadow-lg hover:bg-yellow-700 hover:scale-105 transition-all duration-300 transform"
            >
              Explore Our Menu
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-white bg-yellow-600 rounded-full shadow-lg hover:bg-yellow-700 hover:scale-105 transition-all duration-300 transform"
            >
              Visit Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={dinoImg}
              alt="Fresh Bread"
              className="w-full max-w-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={secondImg}
              alt="Delicious Cakes"
              className="w-full max-w-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={threeImg}
              alt="Delicious Cakes"
              className="w-full max-w-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={twoImg}
              alt="Delicious Cakes"
              className="w-full max-w-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
