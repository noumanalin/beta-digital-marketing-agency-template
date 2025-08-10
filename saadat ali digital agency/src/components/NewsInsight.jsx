import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/newsInsight.css';

const BlogCard = ({ index, image, category, date, title }) => {
  const gradients = [
    'linear-gradient(135deg, #2c3e50, #34495e)',
    'linear-gradient(135deg, #8e44ad, #e74c3c)',
    'linear-gradient(135deg, #f39c12, #e67e22)'
  ];

  const emojis = ['🎧', '🎨', '💼'];

  // Animation variant
  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, delay: index * 0.2 } 
    }
  };

  return (
    <motion.article
      className={`blog-card card-${index}`}
      variants={slideFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div 
        className="blog-image"
        style={{ background: gradients[index] }}
      >
        <img src={image} alt={title} />
        <span className="blog-emoji">{emojis[index]}</span>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-category">{category}</span>
          <span className="blog-date">{date}</span>
        </div>
        <h3 className="blog-title">{title}</h3>
        <a href="#" className="read-more">Read More</a>
      </div>
    </motion.article>
  );
};

const NewsInsight = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const blogData = [
    {
      image: "https://crowdytheme.com/wp/axtra/wp-content/uploads/2024/03/image-3.webp",
      category: "Latest News",
      date: "March 4, 2024",
      title: "Ways of lying to yourself about your new relationship."
    },
    {
      image: "https://crowdytheme.com/wp/axtra/wp-content/uploads/2024/03/image-4.webp",
      category: "Latest News",
      date: "March 4, 2024",
      title: "How to manage a talented and successful design team"
    },
    {
      image: "https://crowdytheme.com/wp/axtra/wp-content/uploads/2024/03/image-5.webp",
      category: "Latest News",
      date: "March 4, 2024",
      title: "How to bring fold to your startup company with Axtra"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <div className="logo-circle"></div>
          </div>
        </div>
      </nav>

      <section className="news-insight">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Recent Blog</div>
            <h2 className="section-title">News insight</h2>
          </div>

          <div className="blog-grid">
            {blogData.map((blog, index) => (
              <BlogCard key={index} index={index} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <button 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  );
};

export default NewsInsight;
