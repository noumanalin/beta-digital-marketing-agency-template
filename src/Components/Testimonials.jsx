import { useEffect } from 'react';
import { motion } from "framer-motion";
import '../styles/Testimonials.css';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const Testimonials = () => {
  useEffect(() => {
    const photoCards = document.querySelectorAll('.photo-card');
    
    const handleMouseEnter = (card) => {
      card.style.animationPlayState = 'paused';
    };
    
    const handleMouseLeave = (card) => {
      card.style.animationPlayState = 'running';
    };

    photoCards.forEach(card => {
      card.addEventListener('mouseenter', () => handleMouseEnter(card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
      } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      photoCards.forEach(card => {
        card.removeEventListener('mouseenter', () => handleMouseEnter(card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Jessica Sherlock",
      role: "Manager, Delta",
      image: "https://crowdytheme.com/wp/axtra/wp-content/uploads/2024/03/1-3.webp",
      className: "photo-card-1",
      margin: "margin-left: 40px"
    },
    {
      id: 2,
      name: "David Jonson",
      role: "CEO, Aviary",
      image: "https://crowdytheme.com/wp/axtra/wp-content/uploads/2024/03/3-4-2.webp",
      className: "photo-card-2",
      margin: "margin-right: 20px; margin-top: -20px"
    },
    {
      id: 3,
      name: "Joanny T. Graves",
      role: "CEO, Battery",
      image: "https://crowdytheme.com/wp/axtra/wp-content/uploads/2024/03/2-4-217x300.webp",
      className: "photo-card-3"
    }
  ];


  return (
    <>


      <section className="testimonials">
        <div className="container">
          <div className="testimonials-layout">
            <div className="left-photos">
              {testimonials.slice(0, 2).map(testimonial => (
                <motion.div 
                  key={testimonial.id}
                  className={`photo-card ${testimonial.className}`}
                  style={{ ...testimonial.margin && { margin: testimonial.margin } }}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="photo-overlay">
                    <h3 className="person-name">{testimonial.name}</h3>
                    <p className="person-role">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="center-content"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="section-tag">Testimonials</div>
              <h2 className="section-title">Clients<br />feedback</h2>
              <p className="section-description">
                Our happy customers give us impactful and positive feedback on our services, customer support & etc.
              </p>
            </motion.div>

            <motion.div 
              className="right-photo"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={`photo-card ${testimonials[2].className}`}>
                <motion.img 
                  src={testimonials[2].image} 
                  alt={testimonials[2].name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="photo-overlay">
                  <h3 className="person-name">{testimonials[2].name}</h3>
                  <p className="person-role">{testimonials[2].role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="recent-blog"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
        </motion.div>
      </section>
    </>
  );
};

export default Testimonials;
