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
      achievements: 'Grammy nominated, Avery Fisher Prize recipient',
      backgroundImage: 'https://i.pinimg.com/originals/4c/c1/fa/4cc1fad0cc6e694c4ff09297f1f3dbc1.jpg?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'James Chen',
      instrument: 'Concert Pianist',
      icon: <GiGrandPiano />,
      bio: 'International soloist featured at Royal Albert Hall and Sydney Opera House',
      achievements: 'Van Cliburn Competition finalist',
      backgroundImage: 'https://c8.alamy.com/comp/2XE5H7Y/japanese-man-playing-piano-2XE5H7Y.jpg?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Sophie Laurent',
      instrument: 'Principal Cellist',
      icon: <FaMusic />,
      bio: 'Former principal cellist of the Berlin Philharmonic with global acclaim',
      achievements: 'Echo Klassik Award winner',
      backgroundImage: 'https://t4.ftcdn.net/jpg/02/42/28/19/360_F_242281945_NPOSq5YxPkUbUwGz1aY6J7d1A8HziyGw.jpg?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Michelle Torres',
      instrument: 'Master Flutist',
      icon: <GiFlute />,
      bio: 'Renowned soloist and chamber musician with 30+ years of excellence',
      achievements: 'National Flute Association soloist',
      backgroundImage: 'https://thumbs.dreamstime.com/b/studio-portrait-woman-playing-flute-242522957.jpg?q=80&w=600&auto=format&fit=crop'
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
              <div className="musician-image-wrapper">
                <img
                  src={musician.backgroundImage}
                  alt={musician.name}
                  className="musician-image"
                />
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
