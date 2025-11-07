import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaRing, FaBriefcase, FaTheaterMasks, FaGlassCheers } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FaRing />,
      title: 'Weddings',
      description: 'Create an enchanting atmosphere for your special day with our elegant orchestral performances, from ceremony to reception.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Corporate Events',
      description: 'Elevate your corporate gatherings with sophisticated live music that impresses clients and inspires teams.'
    },
    {
      icon: <FaTheaterMasks />,
      title: 'Private Concerts',
      description: 'Experience intimate performances by world-class musicians in the comfort of your own venue or home.'
    },
    {
      icon: <FaGlassCheers />,
      title: 'Galas & Celebrations',
      description: 'Make any celebration extraordinary with our full orchestra or customized ensemble performances.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <p className="section-subtitle">Our Services</p>
          <h2 className="section-title">
            Exceptional Music for
            <span className="text-gold"> Every Occasion</span>
          </h2>
          <p className="services-intro">
            From intimate gatherings to grand celebrations, we provide tailored musical
            experiences that perfectly complement your event's vision and atmosphere.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="service-card"
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
