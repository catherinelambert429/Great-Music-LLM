import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content container"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="hero-subtitle"
          variants={fadeIn}
        >
          Premium Orchestra Experience
        </motion.p>

        <motion.h1
          className="hero-title"
          variants={fadeIn}
        >
          World-Class Musicians.
          <br />
          <span className="hero-title-accent">Unforgettable Performances.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={fadeIn}
        >
          Experience the elegance of live orchestral music performed by internationally
          acclaimed virtuosos. From intimate gatherings to grand celebrations, we bring
          artistic excellence to every event.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={fadeIn}
        >
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="btn btn-primary">Book an Event</button>
          </Link>
          <Link to="musicians" smooth={true} duration={500} offset={-80}>
            <button className="btn btn-secondary">Meet Our Musicians</button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="hero-scroll-indicator">
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <div className="scroll-arrow"></div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
