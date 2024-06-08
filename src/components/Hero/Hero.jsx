import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-950 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-spaceMono">Welcome to Jindo Inu</h2>
          <p className="mb-8 font-redditMono">
            Jindo Inu - The meme coin with a mission. Join us as we ride the waves of crypto with humor and determination!
          </p>
          <img
            src="https://i.ibb.co/Bj5y9Lz/logo.png"
            alt="Jindo Inu Logo"
            className="mx-auto mb-8 animate-bounce-scale"
            style={{ maxWidth: '300px' }}
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-950 text-white py-20">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <img src="https://i.ibb.co/TTtZqLG/DALL-E-2024-06-09-02-01-39-A-highly-detailed-and-unique-illustration-of-a-white-dog-resembling-the-r.webp" alt="Meme 1" className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg shadow-lg animate-relax-scale" />
            <div>
              <h2 className="text-4xl font-bold mb-4 font-spaceMono">Jindo Inu Leading the Bull Run</h2>
              <p className="font-redditMono mb-4">"When Jindo Inu leads the bull run and your portfolio is smiling."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-950 text-white py-20">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <img src="https://i.ibb.co/M7dQxFB/DALL-E-2024-06-09-01-00-02-A-highly-detailed-and-vibrant-illustration-of-a-white-dog-resembling-the.webp" alt="Meme 2" className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg shadow-lg animate-relax-scale" />
            <div>
              <h2 className="text-4xl font-bold mb-4 font-spaceMono">To the Moon!</h2>
              <p className="font-redditMono mb-4">"To the moon! Jindo Inu style."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-950 text-white py-20">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <img src="https://i.ibb.co/p17qVsR/photo-2024-06-08-23-15-02.jpg" alt="Meme 3" className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg shadow-lg animate-relax-scale" />
            <div>
              <h2 className="text-4xl font-bold mb-4 font-spaceMono">Holding Jindo Inu</h2>
              <p className="font-redditMono mb-4">"Holding Jindo Inu, because legends never sell."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-950 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-spaceMono">Get Your Jindo Inu Tokens Now!</h2>
          <a
            href="https://app.uniswap.org/#/swap?outputCurrency=0x8b1683ff5d82e1d24e8a29e58d2df8dbb14047cd"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-yellow-500 transition-colors duration-200 hover:bg-yellow-600 text-white px-12 py-4 rounded-full font-bold inline-block font-spaceMono"
          >
            Buy Jindo Inu on Uniswap
          </a>
        </div>
      </section>

      {/* Section 6 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-950 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-spaceMono">Check the Jindo Inu Chart</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <img src="https://i.ibb.co/HXvCd0H/photo-2024-06-08-23-15-22.jpg" alt="DexScreener Chart" className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg shadow-lg animate-relax-scale" />
            <div>
              <p className="font-redditMono mb-4">"Track the live performance of Jindo Inu on DexScreener."</p>
              <a
                href="https://dexscreener.com/ethereum/0x8b1683ff5d82e1d24e8a29e58d2df8dbb14047cd"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-yellow-500 transition-colors duration-200 hover:bg-yellow-600 text-white px-12 py-4 rounded-full font-bold inline-block font-spaceMono"
              >
                View Chart
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-950 text-white py-20">
        <div className="container mx-auto text-center">
          <img
            src="https://i.ibb.co/Bj5y9Lz/logo.png"
            alt="Jindo Inu Image"
            className="mx-auto mb-8 rounded-lg animate-relax-scale"
            style={{ maxWidth: '500px' }}
          />
          <p className="text-lg font-redditMono">
            "Investing in Jindo Inu - because every good dog has its day, and today's the day for Jindo Inu!"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
