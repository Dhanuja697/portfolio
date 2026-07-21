import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, FolderGit2, Star, ThumbsUp } from 'lucide-react';

const CountUp = ({ to, suffix = '', duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(to, 10);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutStats = () => {
  const stats = [
    { label: 'Frontend Development', value: '100', suffix: '%', icon: <ThumbsUp size={24} color="var(--primary-neon)" /> },
    { label: 'Backend Development', value: '80', suffix: '%', icon: <FolderGit2 size={24} color="var(--primary-neon)" /> },
    { label: 'Database Management', value: '80', suffix: '%', icon: <Award size={24} color="var(--primary-neon)" /> },
    { label: 'Client Satisfaction', value: '100', suffix: '%', icon: <Star size={24} color="var(--primary-neon)" /> }
  ];

  return (
    <section id="about" className="section" style={{ background: '#070709' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="about-grid">
          
          {/* Left Grid: Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px'
          }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card"
                style={{
                  padding: '30px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 45, 85, 0.08)'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255, 45, 85, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(255, 45, 85, 0.05)'
                }}>
                  {stat.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.25rem',
                  fontWeight: '700',
                  color: '#fff',
                  margin: 0
                }}>
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </h3>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right Grid: About Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <span style={{
              color: 'var(--primary-neon)',
              fontFamily: 'var(--font-heading)',
              fontWeight: '600',
              fontSize: '0.85rem',
              letterSpacing: '2px'
            }}>
              ABOUT ME
            </span>
            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
              Full Stack Developer & <br />
              <span className="text-gradient-red neon-text-glow">Creative Problem Solver</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              I'm Dhanuja Nisal, a passionate Full Stack Developer who loves building modern web applications and AI-powered solutions. I focus on writing clean code, creating great user experiences, and delivering real value that helps projects scale and stand out in the digital landscape.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Whether designing clean web structures, engineering responsive databases, or compiling intelligent deep learning solutions, I bridge the gap between pixel-perfect frontend layouts and stable, high-throughput backend infrastructure.
            </p>
            <div style={{ marginTop: '10px' }}>
              <a href="#contact" className="btn btn-secondary">
                MORE ABOUT ME
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutStats;
