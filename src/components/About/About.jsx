import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAward, FaMusic, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    {
      icon: <FaAward />,
      number: '15+',
      label: 'Years of Excellence'
    },
    {
      icon: <FaMusic />,
      number: '500+',
      label: 'Performances'
    },
    {
      icon: <FaUsers />,
      number: '50+',
      label: 'World-Class Musicians'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.div variants={itemVariants} className="about-text">
            <p className="section-subtitle">About Us</p>
            <h2 className="section-title">
              Elevating Events Through
              <span className="text-gold"> Artistic Excellence</span>
            </h2>
            <p className="about-description">
              Great Music LLM brings together an exceptional ensemble of internationally
              recognized musicians who have graced the world's most prestigious concert
              halls and stages. Our orchestra features virtuosos specializing in violin,
              piano, cello, and a full range of classical instruments.
            </p>
            <p className="about-description">
              With a commitment to sophistication and artistry, we transform every event
              into an unforgettable experience. Whether it's an intimate private gathering,
              a grand corporate celebration, or a milestone wedding, our musicians deliver
              performances that resonate with elegance and emotional depth.
            </p>
            <p className="about-description">
              Each member of our ensemble has been carefully selected for their
              exceptional talent, professional experience, and dedication to their craft.
              Together, we create moments of beauty that will be cherished for a lifetime.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
