import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-text">Great Music</span>
              <span className="logo-accent"> LLM</span>
            </h3>
            <p className="footer-description">
              Bringing world-class orchestral performances to your most important moments.
              Excellence, elegance, and artistry in every note.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="hero" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={-80}>
                  About
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={-80}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="musicians" smooth={true} duration={500} offset={-80}>
                  Musicians
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#">Weddings</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Private Concerts</a></li>
              <li><a href="#">Galas & Celebrations</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>Montreal, QC</li>
              <li>
                <a href="mailto:info@greatmusicllm.com">info@greatmusicllm.com</a>
              </li>
              <li>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Great Music LLM. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Developed by <span className="text-gold">BC Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
