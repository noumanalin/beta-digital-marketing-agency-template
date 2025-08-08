import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

  // Track scroll for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Heading enlargement on scroll down and shrink on scroll up
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section ref={sectionRef} className="bg-black text-white py-20">
      <div className="container mx-auto">
        {/* Floating + Enlarging Heading */}
        <motion.h2
          style={{ scale, y }}
          className="text-6xl font-bold text-center mb-16 sticky top-20 z-20"
        >
          WORK
        </motion.h2>

        {/* Two Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: (index % 2) * 0.3, // stagger by column
              }}
              className={`w-full ${
                index % 2 === 1 ? "mt-20" : ""
              }`} // stagger vertically
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
