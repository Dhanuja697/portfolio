import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      transition: 'var(--transition-smooth)',
      backgroundColor: isScrolled ? 'rgba(5, 5, 6, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 45, 85, 0.1)' : '1px solid transparent',
      padding: isScrolled ? '16px 0' : '24px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="#home" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--primary-neon) 0%, #a3001e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '1.5rem',
            color: '#fff',
            fontFamily: 'var(--font-heading)',
            boxShadow: '0 0 15px rgba(255, 45, 85, 0.4)'
          }}>
            D
          </div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: '700',
            fontSize: '1.2rem',
            letterSpacing: '1px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center'
          }}>
            DHANUJA <span style={{ color: 'var(--primary-neon)', marginLeft: '6px' }}>NISAL</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }} className="desktop-menu-container">
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '24px'
          }} className="desktop-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    transition: 'var(--transition-fast)',
                    fontFamily: 'var(--font-heading)'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#fff'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            LET'S TALK
            <MessageSquare size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'none' // Controlled by CSS / media query fallback below
          }}
          className="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#050506',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px'
        }}>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            <X size={32} />
          </button>
          
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="#contact" 
            className="btn btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ marginTop: '20px' }}
          >
            LET'S TALK
            <MessageSquare size={16} />
          </a>
        </div>
      )}

      {/* Inline styles for responsive menu show/hide */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu-container {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
