import React, { useState } from 'react';
import { 
  ArrowRight,
  Mail
} from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedin 
 
} from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const socials = [
    { icon: <FaGithub size={18} />, href: 'https://github.com/Dhanuja697' },
    { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/in/dhanuja-nisal-440515351' }
    
  ];

  return (
    <footer style={{
      background: '#040405',
      borderTop: '1px solid rgba(255, 45, 85, 0.08)',
      padding: '80px 0 30px',
      textAlign: 'left'
    }}>
      <div className="container">
        
        {/* Main Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 0.8fr 0.8fr 1.2fr',
          gap: '40px',
          marginBottom: '60px'
        }} className="footer-grid">
          
          {/* Col 1: Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a href="#home" style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--primary-neon) 0%, #a3001e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                color: '#fff',
                fontFamily: 'var(--font-heading)'
              }}>
                D
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '1.1rem',
                color: '#fff',
                letterSpacing: '0.5px'
              }}>
                DHANUJA <span style={{ color: 'var(--primary-neon)' }}>NISAL</span>
              </span>
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', maxWidth: '300px' }}>
              Full Stack Developer passionate about building modern, scalable, intelligent, and highly optimized web applications.
            </p>
            {/* Social Handles */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'var(--primary-neon)';
                    e.currentTarget.style.background = 'rgba(255, 45, 85, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#fff', letterSpacing: '1px' }}>QUICK LINKS</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition-fast)' }}
                    onMouseEnter={(e) => e.target.style.color = '#fff'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tech List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#fff', letterSpacing: '1px' }}>TECHNOLOGIES</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              {['Next.js', 'React.js', 'Node.js', 'Python', 'AI / ML'].map((tech) => (
                <li key={tech}>
                  <a
                    href="#skills"
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition-fast)' }}
                    onMouseEnter={(e) => e.target.style.color = '#fff'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {tech}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#fff', letterSpacing: '1px' }}>NEWSLETTER</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              Subscribe to get updates on my latest projects and tech logs.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? 'Subscribed!' : 'Enter your email'}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255, 45, 85, 0.1)',
                  padding: '12px 48px 12px 16px',
                  borderRadius: '25px',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  transition: 'var(--transition-fast)'
                }}
                disabled={subscribed}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-neon)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 45, 85, 0.1)'}
              />
              <button
                type="submit"
                disabled={subscribed}
                style={{
                  position: 'absolute',
                  right: '6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff2d55 0%, #cc0033 100%)',
                  border: 'none',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          width: '100%',
          backgroundColor: 'rgba(255,255,255,0.05)',
          margin: '30px 0'
        }} />

        {/* Bottom Panel */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }} className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Dhanuja Nisal. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: 'var(--primary-neon)', fontWeight: '600' }}>Available for Freelance</span>
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
