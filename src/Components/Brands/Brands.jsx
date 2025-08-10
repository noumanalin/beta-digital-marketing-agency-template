import './Brands.css';

const Brands = () => {
  const brandLogos = [
    { src: "src/assets/images/1.webp", alt: "Coca-Cola Logo" },
    { src: "src/assets/images/2.webp", alt: "Nike Logo" },
    { src: "src/assets/images/3.webp", alt: "Google Logo" },
    { src: "src/assets/images/4.webp", alt: "Apple Logo" },
    { src: "src/assets/images/5.webp", alt: "Microsoft Logo" },
    { src: "src/assets/images/6.webp", alt: "Amazon Logo" },
    { src: "src/assets/images/1.webp", alt: "Samsung Logo" },
    { src: "src/assets/images/2.webp", alt: "Sony Logo" },
    { src: "src/assets/images/3.webp", alt: "Adidas Logo" },
    { src: "src/assets/images/4.webp", alt: "Pepsi Logo" },
    { src: "src/assets/images/5.webp", alt: "Netflix Logo" },
    { src: "src/assets/images/6.webp", alt: "Spotify Logo" },
  ];

  return (
    <section className="brands-section">
      <div className="brands-container">
        
        {/* Subtitle */}
        <p className="brands-subtitle">Internation Brands</p>
        
        {/* Title */}
        <h2 className="brands-title">
          We are happy to work with global <br /> largest brands
        </h2>
        
        {/* Logo Grid */}
        <div className="brands-grid">
          {brandLogos.map((logo, index) => (
            <div className="brand-tile" key={index}>
              <img src={logo.src} alt={logo.alt} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
