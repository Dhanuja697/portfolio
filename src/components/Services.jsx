import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Brain, 
  Palette, 
  Server, 
  Rocket 
} from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const ServiceCard = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ height: '100%' }}
    >
      <TiltCard3D maxTilt={8} scale={1.02} className="glass-card" style={{
        padding: '40px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px',
        height: '100%',
        textAlign: 'left',
        border: '1px solid rgba(255, 45, 85, 0.08)'
      }}>
        {/* Glow effect spot inside card */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 45, 85, 0.1) 0%, transparent 75%)',
          pointerEvents: 'none'
        }} />

        {/* Icon wrapper */}
        <div style={{
          width: '56px',
          height: '56px',
          margin: '20px',

          borderRadius: '14px',
          background: 'rgba(255, 45, 85, 0.05)',
          border: '1px solid rgba(255, 45, 85, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary-neon)',
          boxShadow: '0 0 15px rgba(255, 45, 85, 0.1)',
          transition: 'var(--transition-fast)'
        }} className="service-icon-box">
          {icon}
        </div>

        {/* Card Title */}
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', margin: '5px', }}>
          {title}
        </h3>

        {/* Card Description */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          margin: '5px', 
          lineHeight: '1.6'
        }}>
          {description}
        </p>
      </TiltCard3D>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building high-performance, fast loading, and SEO friendly websites using modern technologies and coding practices.',
      icon: <Code2 size={26} />,
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end development of scalable, secure, and responsive web applications with interactive databases and API endpoints.',
      icon: <Layers size={26} />,
    },
    {
      title: 'AI / ML Solutions',
      description: 'Building intelligent solutions with machine learning models, natural language processing, and deep learning algorithms.',
      icon: <Brain size={26} />,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing beautiful, modern, and user-centric wireframes and prototypes that convert and elevate digital experiences.',
      icon: <Palette size={26} />,
    },
    {
      title: 'API Development',
      description: 'Building robust, highly secure, and well-documented RESTful and GraphQL APIs for seamless third party integrations.',
      icon: <Server size={26} />,
    },
    {
      title: 'Deployment & DevOps',
      description: 'Deploying web applications to cloud infrastructures (AWS, Vercel, Netlify) with continuous integration and CD pipelines.',
      icon: <Rocket size={26} />,
    }
  ];

  return (
    <section id="services" className="section" style={{ background: '#070709' }}>
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
            SERVICES I PROVIDE
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>
            What I <span className="text-gradient-red neon-text-glow">Do</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid-3">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              delay={index * 0.1} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
