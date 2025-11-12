import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { supabase } from '../../lib/supabase';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const dateInputRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            event_date: formData.eventDate || null,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your inquiry! We will contact you shortly.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit your inquiry. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDateFieldClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      detail: 'info@greatmusicllm.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      detail: '+1 (555) 123-4567'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      detail: 'Montreal, QC'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="contact-header"
        >
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">
            Ready to Create Something
            <span className="text-gold"> Extraordinary?</span>
          </h2>
          <p className="contact-intro">
            Let us bring the beauty of live orchestral music to your next event.
            Contact us today to discuss your vision.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="contact-info-section"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-item">
                <div className="contact-info-icon">{info.icon}</div>
                <div className="contact-info-text">
                  <h4>{info.title}</h4>
                  <p>{info.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventDate" className="form-label">Event Date</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                ref={dateInputRef}
                value={formData.eventDate}
                onChange={handleChange}
                onClick={handleDateFieldClick}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your event..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {submitStatus.message && (
              <div className={`submit-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
