import React from 'react';
import { FaTwitter, FaTelegramPlane, FaChartLine, FaExchangeAlt } from 'react-icons/fa'; // Importing icons from react-icons

const Links = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-950 p-8 shadow-md">
      <div className="container mx-auto text-center text-white font-spaceMono">
        <h2 className="text-3xl font-bold mb-6">Contact & Social Links</h2>

        {/* Twitter Section */}
        <div className="mb-10">
          <img src="https://i.ibb.co/Bj5y9Lz/logo.png" alt="DexScreener" className="mx-auto mb-4 rounded-lg shadow-lg animate-relax-scale" />
          <h3 className="text-2xl mb-2">Follow us on Twitter</h3>
          <a href="https://x.com/JindoInuERC" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-full font-bold transition-colors duration-200">
            <FaTwitter className="h-6 w-6" />
            <span>Twitter</span>
          </a>
        </div>

        {/* Telegram Section */}
        <div className="mb-10">
          <img src="https://i.ibb.co/p17qVsR/photo-2024-06-08-23-15-02.jpg" alt="Twitter" className="mx-auto mb-4 rounded-lg shadow-lg animate-relax-scale" />
          <h3 className="text-2xl mb-2">Join our Telegram Channel</h3>
          <a href="https://t.me/JindoInuERC" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-full font-bold transition-colors duration-200">
            <FaTelegramPlane className="h-6 w-6" />
            <span>Telegram</span>
          </a>
        </div>

        {/* DexScreener Section */}
        <div className="mb-10">
        <img src="https://i.ibb.co/HXvCd0H/photo-2024-06-08-23-15-22.jpg" alt="Telegram" className="mx-auto mb-4 rounded-lg shadow-lg animate-relax-scale" />
          <h3 className="text-2xl mb-2">View DexScreener Chart</h3>
          <a href="https://dexscreener.com/ethereum/0x8b1683ff5d82e1d24e8a29e58d2df8dbb14047cd" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-full font-bold transition-colors duration-200">
            <FaChartLine className="h-6 w-6" />
            <span>DexScreener</span>
          </a>
        </div>

        {/* Buy Jindo & DexScreener Section */}
        <div className="mb-10">
          <h3 className="text-2xl mb-2">Get Your Jindo Inu Tokens</h3>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
            <a href="https://app.uniswap.org/#/swap?outputCurrency=0x883eaedcf684391439376b6f9244fbb864e4746e" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-3 rounded-full font-bold transition-colors duration-200 mb-4 md:mb-0">
              <FaExchangeAlt className="h-6 w-6" />
              <span>Buy on Uniswap</span>
            </a>
            <a href="https://dexscreener.com/ethereum/0x8b1683ff5d82e1d24e8a29e58d2df8dbb14047cd" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-full font-bold transition-colors duration-200">
              <FaChartLine className="h-6 w-6" />
              <span>Check DexScreener</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
