import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dinusha Perera',
      role: 'CEO, Tech Solutions',
      content: 'Dhanuja is an exceptional developer. He delivered a high quality project on time and exceeded our expectations. His skills in integrating complex backend features were outstanding.',
      rating: 5,
      avatar: './src/assets/client1.png'
    },
    {
      id: 2,
      name: 'Nadun Ekanayake',
      role: 'Founder, QuickCart',
      content: 'Great communication, skilled developer, and very professional. Will definitely work with him again! He helped optimize our client dashboard and speed up loading times by 40%.',
      rating: 5,
      avatar: './src/assets/client2.png'
    },
    {
      id: 3,
      name: 'Suvindi Fernando',
      role: 'Product Manager',
      content: 'Amazing work on our AI solution. Highly recommend Dhanuja for any complex web application. He has a rare mix of UI/UX design sense and raw engineering expertise.',
      rating: 5,
      avatar: './src/assets/client3.png'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section" style={{ background: '#070709', overflow: 'hidden' }}>
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
            TESTIMONIALS
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>
            What Clients <span className="text-gradient-red neon-text-glow">Say</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-card"
              style={{
                padding: '40px',
                textAlign: 'left',
                border: '1px solid rgba(255, 45, 85, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                position: 'relative'
              }}
            >
              {/* Quote Mark Icon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '40px',
                color: 'rgba(255, 45, 85, 0.08)',
                pointerEvents: 'none'
              }}>
                <Quote size={80} style={{ transform: 'rotate(180deg)' }} />
              </div>

              {/* Stars Rating */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary-neon)" color="var(--primary-neon)" />
                ))}
              </div>

              {/* Review Text */}
              <p style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                fontStyle: 'italic'
              }}>
                "{testimonials[currentIndex].content}"
              </p>

              {/* Profile Details */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '10px'
              }}>
                {/* Avatar frame */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--primary-neon)',
                  boxShadow: '0 0 10px rgba(255, 45, 85, 0.2)',
                  background: '#0c0c0e'
                }}>
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Avatar Initials Fallback */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#1b0912',
                    color: 'var(--primary-neon)',
                    fontWeight: '700',
                    fontSize: '0.95rem'
                  }}>
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>
                    {testimonials[currentIndex].name}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {testimonials[currentIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '32px'
          }}>
            <button
              onClick={handlePrev}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(13, 13, 17, 0.8)',
                border: '1px solid rgba(255, 45, 85, 0.1)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-neon)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 45, 85, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 45, 85, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(13, 13, 17, 0.8)',
                border: '1px solid rgba(255, 45, 85, 0.1)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-neon)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 45, 85, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 45, 85, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
