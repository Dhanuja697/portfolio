import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiFigma,
  SiOpenjdk,
  SiTensorflow 
} from 'react-icons/si';
import TiltCard3D from './TiltCard3D';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const techStack = [
    { name: 'Next.js', icon: <SiNextdotjs size={20} />, color: '#ffffff' },
    { name: 'React.js', icon: <SiReact size={20} />, color: '#61dafb' },
    { name: 'Node.js', icon: <SiNodedotjs size={20} />, color: '#339933' },
    { name: 'Python', icon: <SiPython size={20} />, color: '#3776ab' },
    { name: "Java", icon: <SiOpenjdk />, color: "#f89820" },
    { name: 'AI/ML', icon: <SiTensorflow size={20} />, color: '#ff6f00' },
    { name: 'UI/UX', icon: <SiFigma size={20} />, color: '#f24e1e' }
  ];

  return (
    <section id="home" className="section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px',
      overflow: 'hidden'
    }}>
      <div className="container">
        <motion.div 
          className="grid-2" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ alignItems: 'center' }}
        >
          {/* Left Text Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                color: 'var(--primary-neon)',
                fontWeight: '600',
                fontSize: '1rem',
                letterSpacing: '2px',
                fontFamily: 'var(--font-heading)'
              }}>
                HELLO, I'M DHANUJA NISAL 👋
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: '1.1',
                margin: 0
              }}
            >
              I FULL STACK DEVELOPER <br />
              <span className="text-gradient-red neon-text-glow">DIGITAL EXPERIENCES</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                maxWidth: '540px',
                lineHeight: '1.6'
              }}
            >
              Full Stack Developer crafting fast, scalable, intelligent, and visually striking digital products with 3D interactions and AI-powered intelligence.
            </motion.p>

            <motion.div 
              variants={itemVariants} 
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                marginTop: '10px'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                VIEW MY WORK
                <ArrowRight size={18} />
              </a>
              <a 
                href="/CV.pdf" 
                download="CV.pdf"
                className="btn btn-secondary"
           >
                 DOWNLOAD CV
              <Download size={18} />
              </a>
            </motion.div>

            {/* Tech Stack Row */}
            <motion.div 
              variants={itemVariants} 
              style={{
                marginTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <span style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '1px',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-heading)'
              }}>
                TECH STACK
              </span>
              
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="glass-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-neon)';
                      e.currentTarget.style.boxShadow = `0 0 10px ${tech.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ color: tech.color, display: 'flex', alignItems: 'center' }}>
                      {tech.icon}
                    </span>
                    <span style={{ fontWeight: '500', color: '#fff' }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right 3D Column */}
          <motion.div 
            variants={itemVariants} 
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <TiltCard3D maxTilt={10} scale={1.03}>
              <div style={{
                position: 'relative',
                width: 'clamp(280px, 35vw, 420px)',
                height: 'clamp(280px, 35vw, 420px)',
                borderRadius: '50%',
                padding: '12px',
                background: 'linear-gradient(135deg, var(--primary-neon) 0%, rgba(0,0,0,0) 80%)',
                boxShadow: '0 0 40px rgba(255, 45, 85, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Neon Circle Outline */}
                <div style={{
                  position: 'absolute',
                  width: 'calc(100% - 4px)',
                  height: 'calc(100% - 4px)',
                  borderRadius: '50%',
                  border: '2px solid var(--primary-neon)',
                  opacity: 0.6,
                  animation: 'pulse-slow 4s ease-in-out infinite'
                }} />

                {/* Profile Image container */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#0c0c0e',
                  border: '4px solid #070708',
                  position: 'relative'
                }}>
                  <img
                    src="./src/assets/prof.jpeg"
                    alt="Dhanuja Nisal profile portrait"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      // Fallback SVG graphic if profile image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Vector Graphic */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle at center, #1b0912 0%, #050506 100%)'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: '800',
                      fontSize: '6rem',
                      color: 'rgba(255, 45, 85, 0.2)',
                      letterSpacing: '-2px'
                    }}>
                      DN
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      color: 'var(--primary-neon)',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      fontWeight: '600'
                    }}>
                      Full Stack Coder
                    </span>
                  </div>
                </div>

                {/* Floating 3D Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '-10px',
                  transform: 'translateZ(30px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 20px',
                  borderRadius: '16px',
                  background: 'rgba(13, 13, 17, 0.9)',
                  border: '1px solid var(--border-hover)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(255, 45, 85, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(255, 45, 85, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-neon)'
                  }}>
                    <code>&lt;/&gt;</code>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.5px' }}>ROLE</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff' }}>Full Stack Dev</span>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
