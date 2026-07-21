import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto close success alert after 5s
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactDetails = [
    { label: 'CALL ME', value: '+94 773601307', icon: <Phone size={18} />, href: 'tel:+94773601307' },
    { label: 'EMAIL ME', value: 'dhanujanisal25@email.com', icon: <Mail size={18} />, href: 'mailto:dhanujanisal25@email.com' },
    { label: 'FIND ME', value: 'Welimada, Sri Lanka', icon: <MapPin size={18} />, href: '#' }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            color: 'var(--primary-neon)',
            fontFamily: 'var(--font-heading)',
            fontWeight: '600',
            fontSize: '0.85rem',
            letterSpacing: '2px'
          }}>
            GET IN TOUCH
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>
            Let's Build Something <span className="text-gradient-red neon-text-glow">Amazing</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '48px',
          alignItems: 'stretch'
        }} className="contact-grid">
          
          {/* Left Column: Contact details */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            textAlign: 'left'
          }}>
            <h3 style={{ fontSize: '1.8rem', lineHeight: '1.3', color: '#fff' }}>
              Start Your Next Project
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Looking for an internship opportunity or have an exciting project in mind? Feel free to reach out! I am actively seeking a Software Engineering internship where I can apply my skills, learn from experienced professionals, and contribute to real-world projects. I'm also open to freelance opportunities and technical collaborations. Let's build something amazing together!
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginTop: '10px'
            }}>
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 45, 85, 0.08)',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-neon)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 45, 85, 0.08)'}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 45, 85, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-neon)',
                    boxShadow: '0 0 10px rgba(255, 45, 85, 0.05)'
                  }}>
                    {detail.icon}
                  </div>
                  <div>
                    <span style={{
                      display: 'block',
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      fontWeight: '600',
                      letterSpacing: '1px'
                    }}>{detail.label}</span>
                    <span style={{
                      fontSize: '0.95rem',
                      color: '#fff',
                      fontWeight: '600'
                    }}>{detail.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div style={{ position: 'relative' }}>
            <TiltCard3D maxTilt={4} scale={1.0} className="glass-card" style={{
              padding: '40px',
              border: '1px solid rgba(255, 45, 85, 0.08)',
              height: '100%',
              textAlign: 'left'
            }}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    height: '100%',
                    gap: '16px'
                  }}
                >
                  <CheckCircle2 size={64} color="var(--primary-neon)" style={{ filter: 'drop-shadow(0 0 10px var(--primary-neon))' }} />
                  <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '280px', fontSize: '0.9rem' }}>
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px',margin: '5px',  }}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Message</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project details..."
                      className="form-input"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      justifyContent: 'center',
                      padding: '14px',
                      borderRadius: '8px',
                      marginTop: '10px'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </TiltCard3D>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
