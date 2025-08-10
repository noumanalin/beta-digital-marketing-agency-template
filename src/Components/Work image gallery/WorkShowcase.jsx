import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./WorkShowcase.css";

const images = [
  { id: 1, src: "src/assets/images/7.webp", alt: "Person working at a desk" },
  { id: 2, src: "src/assets/images/8.webp", alt: "Person shopping online" },
  { id: 3, src: "src/assets/images/9.webp", alt: "Hand holding a Coca-Cola can" },
  { id: 4, src: "src/assets/images/10.webp", alt: "Person using a mobile phone" },
  { id: 5, src: "src/assets/images/7.webp", alt: "Creative work process" },
  { id: 6, src: "src/assets/images/8.webp", alt: "Design mockup on a screen" },
];

export default function WorkShowcase() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section ref={sectionRef}>
      <div>
        {/* Heading */}
        <motion.h2 style={{ scale, y }} className="work-heading">
          WORK
        </motion.h2>

        {/* Grid */}
        <div className="images-container">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 100,
                rotateX: 45,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: (index % 2) * 0.2,
              }}
              className={`work-image-item ${index % 2 === 1 ? "mt-20" : ""}`}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <img src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
