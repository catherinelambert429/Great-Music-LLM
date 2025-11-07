import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiViolin, GiGrandPiano, GiFlute } from 'react-icons/gi';
import { FaMusic } from 'react-icons/fa';
import './Musicians.css';

const Musicians = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const musicians = [
    {
      name: 'Elena Marchand',
      instrument: 'Principal Violin',
      icon: <GiViolin />,
      bio: 'Juilliard graduate with 20+ years performing at Carnegie Hall and Lincoln Center',
      achievements: 'Grammy nominated, Avery Fisher Prize recipient'
    },
    {
      name: 'James Chen',
      instrument: 'Concert Pianist',
      icon: <GiGrandPiano />,
      bio: 'International soloist featured at Royal Albert Hall and Sydney Opera House',
      achievements: 'Van Cliburn Competition finalist'
    },
    {
      name: 'Sophie Laurent',
      instrument: 'Principal Cellist',
      icon: <FaMusic />,
      bio: 'Former principal cellist of the Berlin Philharmonic with global acclaim',
      achievements: 'Echo Klassik Award winner'
    },
    {
      name: 'Michael Torres',
      instrument: 'Master Flutist',
      icon: <GiFlute />,
      bio: 'Renowned soloist and chamber musician with 30+ years of excellence',
      achievements: 'National Flute Association soloist'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="musicians" className="musicians section">
      <div className="container">
        <div className="musicians-header">
          <p className="section-subtitle">Featured Artists</p>
          <h2 className="section-title">
            Meet Our
            <span className="text-gold"> Virtuoso Musicians</span>
          </h2>
          <p className="musicians-intro">
            Each member of our ensemble has performed on the world's most prestigious stages,
            bringing decades of experience and unparalleled artistry to every performance.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="musicians-grid"
        >
          {musicians.map((musician, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="musician-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="musician-icon-wrapper">
                <div className="musician-icon">{musician.icon}</div>
              </div>
              <div className="musician-info">
                <h3 className="musician-name">{musician.name}</h3>
                <p className="musician-instrument">{musician.instrument}</p>
                <p className="musician-bio">{musician.bio}</p>
                <p className="musician-achievements">{musician.achievements}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Musicians;
