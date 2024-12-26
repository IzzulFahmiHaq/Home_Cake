import React, { useState } from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';
import threeImg from "../../assets/uklt.jpg";
import twoImg from "../../assets/poyy.jpg";
import immImg from "../../assets/imm.jpg";
import roti1Img from "../../assets/roti1.jpg";
import roti2Img from "../../assets/kuee.jpg";
import roti3Img from "../../assets/gema.jpg";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Chocolate Muffin',
      description: 'Rich and moist chocolate muffins made with premium cocoa.',
      price: 'Rp 50,000',
      image: threeImg,
      rating: 5,
      recipe: `Ingredients:
      - 2 cups all-purpose flour
      - 1/2 cup cocoa powder
      - 1 tsp baking powder
      - 1/2 tsp salt
      - 1 cup sugar
      - 2 eggs
      - 1/2 cup milk
      - 1/2 cup melted butter
      \nInstructions:
      1. Preheat the oven to 180°C (350°F).
      2. Mix dry ingredients in a bowl.
      3. In another bowl, whisk wet ingredients.
      4. Combine wet and dry ingredients until smooth.
      5. Pour into muffin cups and bake for 20 minutes.`
    },
    {
      id: 2,
      name: 'Croissant',
      description: 'Flaky, buttery croissants baked fresh every morning.',
      price: 'Rp 40,000',
      image: twoImg,
      rating: 4,
      recipe: `Ingredients:
      - 2 cups all-purpose flour
      - 1 tsp salt
      - 1/4 cup sugar
      - 1 packet instant yeast
      - 1/2 cup warm milk
      - 200g butter
      \nInstructions:
      1. Combine flour, sugar, and salt. Add yeast and milk to form dough.
      2. Roll out dough and layer with butter. Fold and chill multiple times.
      3. Shape into croissants and proof for 1 hour.
      4. Bake at 190°C (375°F) for 15 minutes.`
    },
    {
      id: 3,
      name: 'Imm Cake',
      description: 'Delicious and fluffy imm cake with a light vanilla flavor.',
      price: 'Rp 60,000',
      image: immImg,
      rating: 3,
      recipe: `Ingredients:
      - 2 cups cake flour
      - 1 cup sugar
      - 1/2 cup butter
      - 3 eggs
      - 1 tsp vanilla extract
      - 1/2 cup milk
      \nInstructions:
      1. Preheat oven to 175°C (350°F).
      2. Cream butter and sugar until light and fluffy.
      3. Add eggs one at a time, then mix in vanilla.
      4. Alternate adding flour and milk until smooth.
      5. Pour into a cake pan and bake for 30 minutes.`
    },
    {
      id: 4,
      name: 'Fun Cake',
      description: 'Soft and warm roti, perfect for any meal.',
      price: 'Rp 30,000',
      image: roti1Img,
      rating: 4,
      recipe: `Ingredients:
      - 2 cups all-purpose flour
      - 1/2 cup sugar
      - 1 tsp baking powder
      - 1/2 tsp salt
      - 1/2 cup butter
      - 1/2 cup milk
      \nInstructions:
      1. Combine dry ingredients in a bowl.
      2. Cut in butter until mixture resembles crumbs.
      3. Add milk gradually to form dough.
      4. Roll out dough and cut into shapes.
      5. Bake at 180°C (350°F) for 15 minutes.`
    },
    {
      id: 5,
      name: 'Choco Cess',
      description: 'Soft and warm roti, perfect for any meal.',
      price: 'Rp 65,000',
      image: roti2Img,
      rating: 5,
      recipe: `Ingredients:
      - 2 cups flour
      - 1/2 cup cocoa powder
      - 1/2 cup sugar
      - 1/4 cup butter
      - 1/2 cup milk
      \nInstructions:
      1. Mix flour, cocoa powder, and sugar in a bowl.
      2. Add butter and milk to form a dough.
      3. Roll dough into desired shapes.
      4. Bake at 180°C (350°F) for 20 minutes.`
    },
    {
      id: 6,
      name: 'Strawberry Cake',
      description: 'Soft and warm roti, perfect for any meal.',
      price: 'Rp 50,000',
      image: roti3Img,
      rating: 4,
      recipe: `Ingredients:
      - 2 cups all-purpose flour
      - 1 cup sugar
      - 1/2 cup butter
      - 2 eggs
      - 1 cup strawberries, diced
      \nInstructions:
      1. Preheat oven to 175°C (350°F).
      2. Cream butter and sugar, then beat in eggs.
      3. Fold in flour and strawberries gently.
      4. Pour batter into a cake pan.
      5. Bake for 25–30 minutes or until a toothpick comes out clean.`
    },
  ];
  
  const handleSearch = (event) => {
    const keyword = event.target.value;
    setSearchTerm(keyword);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  const handleOrder = (product) => {
    alert(`Anda memesan produk: ${product.name}`);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center items-center gap-1 mt-2">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar
            key={index}
            className="text-yellow-400 text-2xl hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>
    );
  };

  return (
    <main className="bg-gradient-to-b from-gray-100 to-gray-300 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-serif font-bold text-orange-700 mb-6">Sweet Bakes Bakery</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Indulge in our freshly baked treats, from pastries to cakes, all made with love.
        </p>

        <div className="flex justify-center items-center gap-6 mb-6">
          <input
            type="text"
            placeholder="Cari roti yang Anda inginkan..."
            className="py-3 px-6 text-lg rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-80 shadow-md"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            onClick={() => handleSearch({ target: { value: searchTerm } })}
            className="inline-flex items-center py-3 px-8 text-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <FaSearch className="text-xl mr-2" /> Cari
          </button>

          <button>
  
</button>

        </div>

        {selectedProduct ? (
  <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg mx-auto">
    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-xl mb-4" />
    <h3 className="text-2xl font-serif font-semibold text-gray-800">{selectedProduct.name}</h3>
    {renderStars(selectedProduct.rating)}
    <p className="text-sm text-gray-500 mt-4">{selectedProduct.description}</p>
    <p className="text-lg font-bold text-orange-600 mt-4">{selectedProduct.price}</p>
    <div className="text-left mt-6">
      <h4 className="text-lg font-semibold text-gray-700 mb-2">Resep:</h4>
      <pre className="text-sm text-gray-600 bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
        {selectedProduct.recipe}
      </pre>
    </div>
    <div className="flex justify-between mt-6">
      <button
        onClick={handleBackToList}
        className="py-2 px-4 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 hover:shadow-md transition duration-300"
      >
        Kembali
      </button>
      <button
        onClick={() => handleOrder(selectedProduct)}
        className="py-2 px-6 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full hover:shadow-lg hover:scale-105 transition duration-300"
      >
        Order
      </button>
    </div>
  </div>
) : (
  // Kode untuk daftar produk tetap sama

          <div className="py-16 bg-white shadow-lg rounded-2xl">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm === '' ? products : filteredProducts).map((product) => (
                <div key={product.id} className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-xl" />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-serif font-semibold text-gray-800">{product.name}</h3>
                    {renderStars(product.rating)}
                    <p className="text-sm text-gray-500 mt-4">{product.description}</p>
                    <p className="text-lg font-bold text-orange-600 mt-4">{product.price}</p>
                    <div className="mt-4 flex justify-between gap-4">
                      <button
                        onClick={() => handleViewDetails(product)}
                        className="py-2 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full hover:shadow-lg transition duration-300 w-full"
                      >
                        Lihat Detail
                      </button>
                      <button
                        onClick={() => handleOrder(product)}
                        className="py-2 px-4 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full hover:shadow-lg transition duration-300 w-full"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Hero;
