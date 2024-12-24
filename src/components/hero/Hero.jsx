import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import threeImg from "../../assets/uklt.jpg";
import twoImg from "../../assets/poyy.jpg";
import immImg from "../../assets/imm.jpg";
import roti1Img from "../../assets/roti1.jpg";
import roti2Img from "../../assets/kuee.jpg";
import roti3Img from "../../assets/gema.jpg";

const Hero = () => {
  // State untuk pencarian produk
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { id: 1, name: 'Chocolate Muffin', description: 'Rich and moist chocolate muffins made with premium cocoa.', price: 'Rp 50,000', image: threeImg },
    { id: 2, name: 'Croissant', description: 'Flaky, buttery croissants baked fresh every morning.', price: 'Rp 40,000', image: twoImg },
    { id: 3, name: 'Imm Cake', description: 'Delicious and fluffy imm cake with a light vanilla flavor.', price: 'Rp 60,000', image: immImg },
    { id: 4, name: 'Fun Cake', description: 'Soft and warm roti, perfect for any meal.', price: 'Rp 30,000', image: roti1Img },
    { id: 5, name: 'Choco Cess', description: 'Soft and warm roti, perfect for any meal.', price: 'Rp 65,000', image: roti2Img },
    { id: 6, name: 'Strawberry Cake', description: 'Soft and warm roti, perfect for any meal.', price: 'Rp 50,000', image: roti3Img },
  ];

  // Fungsi untuk menangani pencarian
  const handleSearch = (event) => {
    const keyword = event.target.value;
    setSearchTerm(keyword);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <main className="bg-gradient-to-b from-gray-100 to-gray-300 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-serif font-bold text-orange-700 mb-6">Sweet Bakes Bakery</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Indulge in our freshly baked treats, from pastries to cakes, all made with love.
        </p>

        {/* Input Pencarian */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <input
            type="text"
            placeholder="Cari roti yang Anda inginkan..."
            className="py-3 px-6 text-lg rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-80"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            onClick={() => handleSearch({ target: { value: searchTerm } })}
            className="inline-flex items-center py-3 px-8 text-lg font-semibold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition duration-300 transform hover:scale-105"
          >
            <FaSearch className="text-xl mr-2" /> Cari
          </button>
        </div>

        {/* Tombol Order Sekarang */}
        <div className="flex justify-center mb-6">
          <a
            href="/order-now"
            className="inline-flex items-center py-2 px-6 text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg hover:bg-gradient-to-l from-yellow-400 to-yellow-500 transition duration-300 transform hover:scale-105"
          >
            <FaShoppingCart className="text-lg mr-2" /> Order Sekarang
          </a>
        </div>

        {/* Menampilkan produk berdasarkan pencarian */}
        <div className="py-16 bg-white shadow-lg rounded-2xl">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchTerm === '' ? (
              // Jika pencarian kosong, tampilkan semua produk
              products.map((product) => (
                <div key={product.id} className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-xl" />
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                    <p className="text-lg font-bold text-orange-600 mt-4">{product.price}</p>
                    <div className="mt-4">
                      <a
                        href={`/product/${product.id}`}
                        className="text-center block py-2 px-4 bg-orange-700 text-white rounded-full hover:bg-orange-800 transition duration-300"
                      >
                        Lihat Detail
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Tampilkan produk yang sesuai dengan pencarian
              filteredProducts.map((product) => (
                <div key={product.id} className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-xl" />
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                    <p className="text-lg font-bold text-orange-600 mt-4">{product.price}</p>
                    <div className="mt-4">
                      <a
                        href={`/product/${product.id}`}
                        className="text-center block py-2 px-4 bg-orange-700 text-white rounded-full hover:bg-orange-800 transition duration-300"
                      >
                        Lihat Detail
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
