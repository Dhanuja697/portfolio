import React, { useState } from "react";
import projOne from "../assets/project1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";
import proj7 from "../assets/proj7.png";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiOpenjdk,
  SiMysql,
} from "react-icons/si";
import TiltCard3D from "./TiltCard3D";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Full Stack", "AI / ML", "Frontend"];

  const projectsData = [
    {
      id: 1,
      title: "Quantum Careers",
      category: "Full Stack",
      description:
        "A futuristic recruitment platform built for high-end tech positions. Features include  dynamic job posting & application management, interactive statistics, and a responsive modern UI.",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      ],
      image: {projOne},
      demo: "https://quantum-careers-git-main-dhanuja697s-projects.vercel.app/",
      github: "https://github.com/Dhanuja697/Quantum-Careers.git",
    },
    {
      id: 2,
      title: "Laptop Navigator AI",
      category: "AI / ML",
      description:
        "Find the ultimate laptop specs recommended for your professional career — powered by AI-driven market price prediction.",
      tech: [
        { name: "Python", icon: <SiPython />, color: "#3776ab" },
        { name: "React.js", icon: <SiReact />, color: "#61dafb" },
      ],
      image: {proj2},
      github: "https://github.com/Dhanuja697/laptop-price-ai-system.git",
    },
    {
      id: 3,
      title: "Green Villa",
      category: "Full Stack",
      description:
        "An eco-luxury resort web application featuring a modern UI, room booking system, travel guide, and immersive visual storytelling highlighting sustainable luxury in the Sri Lankan tea valleys.",
      tech: [
        { name: "React.js", icon: <SiReact />, color: "#61dafb" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      ],
      image: {proj3},
      demo: "https://greenvilla-git-main-dhanuja697s-projects.vercel.app",
      github: "https://github.com/Dhanuja697/greenvilla.git",
    },
   
    {
      id: 5,
      title: "Adventure (Traveling App)",
      category: "Frontend",
      description:
        "Instant group messaging app using web sockets, complete with message statuses, media attachments, and user online/offline trackers.",
      tech: [{ name: "React.js", icon: <SiReact />, color: "#61dafb" }],
      image: {proj5},
      demo: "https://adventure-app-git-main-dhanuja697s-projects.vercel.app/",
      github: "https://github.com/Dhanuja697/adventure-app.git",
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "Full Stack",
      description:
        "A modern inventory management dashboard featuring real-time stock tracking, critical stock alerts, product management, supplier logs, and dynamic stock movement monitoring.",
      tech: [
        { name: "Java", icon: <SiOpenjdk />, color: "#f89820" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
      ],
      image: {proj6},
      demo: null,
      github: "https://github.com/Dhanuja697/inventory-management-system.git",
    },
    {
      id: 7,
      title: "Smart Inventory Management System AI",
      category: "Full Stack",
      description:
        "An intelligent inventory and POS system featuring real-time retail analytics, low stock tracking, automated alerts, and seamless sales history reporting.",
      tech: [
        { name: "Java", icon: <SiOpenjdk />, color: "#f89820" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
        { name: "Python", icon: <SiPython />, color: "#3776ab" },

      ],
      image: {proj7},
      demo: "",
      github: "https://github.com/Dhanuja697/AI-inventory-management-system.git",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "50px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <span
              style={{
                color: "var(--primary-neon)",
                fontFamily: "var(--font-heading)",
                fontWeight: "600",
                fontSize: "0.85rem",
                letterSpacing: "2px",
              }}
            >
              PORTFOLIO SHOWCASE
            </span>
            <h2 style={{ fontSize: "2.5rem", marginTop: "10px" }}>
              My Recent{" "}
              <span className="text-gradient-red neon-text-glow">Projects</span>
            </h2>
          </div>

          {/* Filter Categories */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              background: "rgba(255, 45, 85, 0.03)",
              padding: "6px",
              borderRadius: "25px",
              border: "1px solid rgba(255, 45, 85, 0.06)",
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background:
                    activeFilter === filter
                      ? "linear-gradient(135deg, #ff2d55 0%, #cc0033 100%)"
                      : "transparent",
                  border: "none",
                  color:
                    activeFilter === filter ? "#fff" : "var(--text-secondary)",
                  padding: "8px 20px",
                  borderRadius: "20px",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  fontFamily: "var(--font-heading)",
                  transition: "var(--transition-smooth)",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "30px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{ height: "100%" }}
              >
                <TiltCard3D
                  maxTilt={6}
                  scale={1.01}
                  className="glass-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    textAlign: "left",
                    border: "1px solid rgba(255, 45, 85, 0.08)",
                  }}
                >
                  {/* Image Holder */}
                  <div
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      position: "relative",
                      background:
                        "radial-gradient(circle at center, #1b0912 0%, #050506 100%)",
                      borderBottom: "1px solid rgba(255, 45, 85, 0.08)",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "var(--transition-smooth)",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback stylized gradient icon when image is missing */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: "700",
                          fontSize: "3.5rem",
                          color: "rgba(255, 45, 85, 0.1)",
                          letterSpacing: "-2px",
                        }}
                      >
                        0{project.id}
                      </span>
                      <span
                        style={{
                          color: "var(--primary-neon)",
                          fontSize: "0.75rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div
                    style={{
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      flexGrow: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
                        lineHeight: "1.6",
                        flexGrow: 1,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech icons used in project */}
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginTop: "8px",
                      }}
                    >
                      {project.tech.map((t) => (
                        <div
                          key={t.name}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            background: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            fontSize: "0.75rem",
                            fontWeight: "500",
                            color: "#fff",
                          }}
                        >
                          <span
                            style={{
                              color: t.color,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {t.icon}
                          </span>
                          <span>{t.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        marginTop: "8px",
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        paddingTop: "16px",
                      }}
                    >
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            color: "var(--primary-neon)",
                            textDecoration: "none",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          fontSize: "0.85rem",
                          fontWeight: "600",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        Source <FaGithub size={14} />
                      </a>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
