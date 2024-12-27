import React from "react";
import bahanImg from "../../assets/bahann.jpg";
import rasaImg from "../../assets/kuerasa.jpg";
import pengirimanImg from "../../assets/pengiriman.jpg";

const About = () => {
  return (
    <main className="bg-gradient-to-b from-gray-100 to-gray-300 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-serif font-bold text-orange-700 mb-6">
          Tentang Sweet Bakes Bakery
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Selamat datang di Sweet Bakes Bakery, toko online roti terbaik yang menyediakan berbagai jenis roti, kue, dan pastry yang dibuat dengan cinta dan bahan berkualitas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {/* Kualitas Bahan Terbaik */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={bahanImg}
              alt="Kualitas Bahan Terbaik"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-gray-800">
                Kualitas Bahan Terbaik
              </h3>
              <p className="text-sm text-gray-500 mt-4">
                Semua roti kami dibuat dari bahan premium untuk memberikan rasa dan tekstur terbaik.
              </p>
            </div>
          </div>

          {/* Beragam Varian Rasa */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={rasaImg}
              alt="Beragam Varian Rasa"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-gray-800">
                Beragam Varian Rasa
              </h3>
              <p className="text-sm text-gray-500 mt-4">
                Nikmati berbagai pilihan rasa mulai dari klasik hingga inovatif yang cocok untuk semua lidah.
              </p>
            </div>
          </div>

          {/* Pengiriman Cepat */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={pengirimanImg}
              alt="Pengiriman Cepat"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-gray-800">
                Pengiriman Cepat
              </h3>
              <p className="text-sm text-gray-500 mt-4">
                Kami menjamin roti segar sampai ke tangan Anda dengan pengiriman cepat dan aman.
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Kami berkomitmen untuk memberikan layanan terbaik kepada pelanggan kami. Hubungi kami untuk pesanan khusus atau jika Anda membutuhkan bantuan. Sweet Bakes Bakery selalu siap untuk membuat hari Anda lebih manis!
        </p>
      </div>
    </main>
  );
};

export default About;
