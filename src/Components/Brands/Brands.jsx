// src/components/Brands.jsx
import React from 'react';

// No specific Brands.css needed as styling is primarily Tailwind CSS

const Brands = () => {
  // Define an array of dummy logo objects using placeholder images
  const brandLogos = [
    { src: 'src/assets/images/1.webp', alt: 'Coca-Cola Logo' },
    { src: 'src/assets/images/2.webp', alt: 'Nike Logo' },
    { src: 'src/assets/images/3.webp', alt: 'Google Logo' },
    { src: 'src/assets/images/4.webp', alt: 'Apple Logo' },
    { src: 'src/assets/images/5.webp', alt: 'Microsoft Logo' },
    { src: 'src/assets/images/6.webp', alt: 'Amazon Logo' },
    { src: 'src/assets/images/1.webp', alt: 'Samsung Logo' },
    { src: 'src/assets/images/2.webp', alt: 'Sony Logo' },
    { src: 'src/assets/images/3.webp', alt: 'Adidas Logo' },
    { src: 'src/assets/images/4.webp', alt: 'Pepsi Logo' },
    { src: 'src/assets/images/5.webp', alt: 'Netflix Logo' },
    { src: 'src/assets/images/6.webp', alt: 'Spotify Logo' },
  ];

  return (
    <section className="bg-black py-20 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtitle */}
        <p className="text-gray-500 uppercase tracking-wider font-semibold text-sm text-center md:text-left">
          Internation Brands
        </p>

        {/* Main Title */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center md:text-left mt-2 leading-tight">
          We are happy to work with global <br className="sm:hidden" />largest brands
        </h2>

        {/* Logos Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md flex items-center justify-center py-8 px-4 h-24" // Added height for consistency
            >
              {/* Using img tag with dummy placeholder URL */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain" // Ensures logo fits within the div
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
