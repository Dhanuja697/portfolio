import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiNextdotjs, 
  SiReact, 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiFigma, 
  SiNodedotjs, 
  SiPython, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiTensorflow,
  SiOpenjdk 
} from 'react-icons/si';

const SkillBar = ({ name, percentage, icon, color }) => {
  return (
    <div style={{ marginBottom: '24px', textAlign: 'left' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: color || '#fff', display: 'flex', alignItems: 'center' }}>
            {icon}
          </span>
          <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{name}</span>
        </div>
        <span style={{
          fontSize: '0.85rem',
          fontWeight: '700',
          color: 'var(--primary-neon)'
        }}>{percentage}%</span>
      </div>
      
      {/* Outer Bar */}
      <div style={{
        height: '6px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '3px',
        overflow: 'hidden'
      }}>
        {/* Inner progress filled bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, var(--primary-neon) 0%, ${color || '#ff6b6b'} 100%)`,
            borderRadius: '3px',
            boxShadow: '0 0 8px var(--primary-neon)'
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: 'Next.js', percentage: 95, icon: <SiNextdotjs />, color: '#ffffff' },
    { name: 'React.js', percentage: 95, icon: <SiReact />, color: '#61dafb' },
    { name: 'HTML5', percentage: 95, icon: <SiHtml5 />, color: '#e34f26' },
    { name: 'CSS3', percentage: 90, icon: <SiCss />, color: '#1572b6' },
    { name: 'JavaScript', percentage: 90, icon: <SiJavascript />, color: '#f7df1e' },
    { name: 'UI/UX Design', percentage: 91, icon: <SiFigma />, color: '#f24e1e' }
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 90, icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Python', percentage: 85, icon: <SiPython />, color: '#3776ab' },
    { name: "Java",percentage: 75, icon: <SiOpenjdk />, color: "#f89820" },
    { name: 'MongoDB', percentage: 80, icon: <SiMongodb />, color: '#47a248' },
    { name: 'MySQL', percentage: 75, icon: <SiMysql />, color: '#00758f' },
    { name: 'AI / ML', percentage: 80, icon: <SiTensorflow />, color: '#ff6f00' }
  ];

  return (
    <section id="skills" className="section">
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
            MY CAPABILITIES
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>
            My Technical <span className="text-gradient-red neon-text-glow">Expertise</span>
          </h2>
        </div>

        {/* Skills Main Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1.2fr',
          gap: '40px',
          alignItems: 'center'
        }} className="skills-grid-container">
          
          {/* Column 1: Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{
              padding: '30px 24px',
              border: '1px solid rgba(255, 45, 85, 0.08)'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: '24px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
              Frontend Skills
            </h3>
            <div>
              {frontendSkills.map(skill => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  icon={skill.icon} 
                  color={skill.color} 
                />
              ))}
            </div>
          </motion.div>

          {/* Column 2: Center Radial Graphic */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="skill-radial-container">
              <div className="radial-bg-glow" />
              
              {/* Spinning Outer Ring */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px dashed rgba(255, 45, 85, 0.3)',
                animation: 'spin-slow 15s linear infinite'
              }} />

              {/* Spinning Inner Ring - counter rotation */}
              <div style={{
                position: 'absolute',
                width: '82%',
                height: '82%',
                borderRadius: '50%',
                border: '2px solid rgba(255, 45, 85, 0.1)',
                borderTop: '2px solid var(--primary-neon)',
                borderBottom: '2px solid var(--primary-neon)',
                animation: 'spin-slow 6s linear infinite reverse'
              }} />

              {/* Center Content */}
              <div className="skill-radar-meter">
                <div className="skill-radar-text">
                  <span>SPECIALIZATION</span>
                  <h3>FULL STACK</h3>
                  <h3 style={{ color: 'var(--primary-neon)', marginTop: '-4px' }}>DEVELOPER</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Backend Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{
              padding: '30px 24px',
              border: '1px solid rgba(255, 45, 85, 0.08)'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: '24px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
              Backend & AI Skills
            </h3>
            <div>
              {backendSkills.map(skill => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  icon={skill.icon} 
                  color={skill.color} 
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 992px) {
          .skills-grid-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .skills-grid-container > div:nth-child(2) {
            order: -1;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
