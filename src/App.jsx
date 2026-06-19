import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

export default function App() {
  const [labTab, setLabTab] = useState('projects');
  const [activeProject, setActiveProject] = useState(0);
  const [activeInternship, setActiveInternship] = useState(0);

  // Mouse track layer for dynamic aurora glows
  useEffect(() => {
    const handleMouseMove = (e) => {
      const root = document.documentElement;
      root.style.setProperty('--mouse-x', `${e.clientX}px`);
      root.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const internshipsData = [
    {
      company: "Dcodetech",
      role: "Python Development Intern (Onsite)",
      duration: "Jul 2022 - Aug 2022",
      summary: "Executed localized automation engineering tasks and raw data crawling logic sequences within onsite corporate development environments.",
      workItems: [
        "Programmed multi-threaded web scrapers via BeautifulSoup and Requests targeting secure data pipelines.",
        "Built administrative automation scripts in Python to substitute legacy analytical reporting systems.",
        "Refined structural data cleanups ensuring uncompressed formatting layout parity."
      ],
      stack: ["Python", "Automation Scripting", "Web Scraping", "Data Processing", "Onsite Debugging"]
    },
    {
      company: "Prodigy InfoTech",
      role: "Web Development Intern",
      duration: "Jun 2024 – Jul 2024",
      summary: "Engineered performant layouts and interactive client interfaces using core foundational browser runtimes.",
      workItems: [
        "Constructed custom timing matrices utilizing raw vanilla JavaScript DOM lifecycle manipulation.",
        "Assembled scalable cross-device landing modules configured to match modular layout targets.",
        "Optimized asset parsing speeds across viewport layout thresholds."
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "DOM Architecture", "Responsive Testing"]
    },
    {
      company: "Codeway",
      role: "Python Development Intern",
      duration: "Jan 2024 – Feb 2024",
      summary: "Constructed structural application configurations focused on logical error exception mapping paths.",
      workItems: [
        "Built modular GUI application interfaces mapped to relational score tables.",
        "Utilized clean OOP standards to separate application configurations from storage rules.",
        "Executed behavioral test cases to fix variable parsing faults."
      ],
      stack: ["Python", "OOP Layouts", "GUI Engineering", "Logic Optimization"]
    }
  ];

  const academicProjectsData = [
    {
      title: "AutoEval",
      tagline: "AI Assignment Grading Core",
      role: "Full Stack & AI Developer",
      coreChallenge: "Eliminating administrative evaluation delays and human scoring variance.",
      execution: "Constructed an automated assessment framework using React.js and a Python Flask backend. Integrated NLP algorithms to process content compliance frameworks, score topical relevance fields, and instantly log analytical feedback markers back onto student terminal layouts.",
      stack: ["React.js", "Python Flask", "SQLite", "NLP Core Model"]
    },
    {
      title: "Automatic Timetable Generator",
      tagline: "Constraint-Based Scheduler Matrix",
      role: "Full Stack Developer",
      coreChallenge: "Resolving overlapping organizational scheduling requests across variable parameters.",
      execution: "Architected a resource optimization matrix inside Django and React.js powered by a Constraint Logic Programming (CLP) algorithm structure. The engine automatically handles faculty tracking constraints, classroom capacities, and calendar variables into clean conflict-free structures.",
      stack: ["React.js", "Django Matrix", "MongoDB", "Constraint Logic Programming"]
    },
    {
      title: "Enigma 3.0 Web Verse Hackathon",
      tagline: "Election Security Platform Architecture",
      role: "Team Coordinator & Full Stack Developer",
      coreChallenge: "Protecting voter validation immutability and systemic metadata privacy.",
      execution: "Built an open-ledger, blockchain-anchored data vault inside an intensive 12-hour design sprint alongside a 4-member squad. Directed cross-functional logic compilation, distributed functional tasks under tight constraints, and designed cryptographic token routing modules to prevent vector vulnerabilities.",
      stack: ["Blockchain Systems", "Security Cryptography", "Full Stack JavaScript", "Agile Task Handling"]
    },
    {
      title: "AlumniFusion (HACKCELESTIAL 1.0)",
      tagline: "Institutional Networking Fabric",
      role: "Team Coordinator & Frontend Developer",
      coreChallenge: "Maintaining user focus and rapid platform development through a continuous 36-hour sprint.",
      execution: "Served as the vital Team Coordinator and Frontend Developer for a 4-member squad during the HACKCELESTIAL 1.0 Hackathon. Spearheaded project planning, task delegation, and cross-functional frontend component production to assemble a complete interactive platform linking students, alumni, and faculty branches for professional mentorship opportunities.",
      stack: ["MERN Stack", "React UI Framework", "Interface Scalability", "Task Synchronization"]
    }
  ];

  return (
    <div className="main-wrapper" style={{ position: 'relative' }}>
      {/* ACTIVE ENERGY WAVE BACKGROUND CONTAINER */}
      <div className="plasma-aurora" />

      {/* FLOATING NAVIGATION TERMINAL */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, background: 'rgba(5,5,8,0.7)', backdropFilter: 'blur(30px)', borderBottom: '1px solid var(--border-glow)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '75px' }}>
          <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.5px' }}>SIDDHI GHARAT<span style={{ color: 'var(--neon-indigo)' }}>.</span></span>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#about" style={{ textDecoration: 'none', color: 'var(--text-dimmed)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>About</a>
            <a href="#work" style={{ textDecoration: 'none', color: 'var(--text-dimmed)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Projects</a>
            <a href="#credentials" style={{ textDecoration: 'none', color: 'var(--text-dimmed)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Certifications</a>
            <a href="#connect" style={{ textDecoration: 'none', background: '#fff', color: '#000', padding: '0.5rem 1.2rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Index</a>
          </div>
        </div>
      </nav>

      {/* UPDATED HERO ARENA */}
      <section id="about" style={{ minHeight: '95vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '0.5rem 1.2rem', borderRadius: '100px', marginBottom: '2rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-emerald)', boxShadow: '0 0 10px var(--neon-emerald)', display: 'inline-block' }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#fff', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                Computer Engineering Graduate | Pillai HOC
              </span>
            </motion.div>

            {/* Natural Authentic Heading */}
            <motion.h1 variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.1, marginBottom: '2rem' }}>
              Building software to solve <br />
              <span className="headline-gradient" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #10b981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>real-world problems.</span>
            </motion.h1>

            {/* Clean Authentic Intro Paragraph */}
            <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} style={{ fontSize: '1.1rem', color: 'var(--text-dimmed)', maxWidth: '720px', lineHeight: 1.6, marginBottom: '3.5rem', fontWeight: 500 }}>
              I'm Siddhi Gharat. I'm a Computer Engineering graduate from Pillai HOC who enjoys learning by building and figuring things out. I focus on clean web development, backend data logic, and building functional applications like an AI-based grading system, a job portal, and a machine learning medicine recommendation system.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#work" className="explore-btn" style={{ textDecoration: 'none', background: 'var(--neon-indigo)', color: '#fff', padding: '1rem 2rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700, boxShadow: '0 10px 30px rgba(99,102,241,0.25)' }}>
                Explore More
              </a>
              
              <a href="/Siddhi_Gharat_Resume.pdf" download="Siddhi_Gharat_Resume.pdf" className="download-cv-btn">
                Download CV
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CREATIVE POLAROIDS GRID SECTION */}
      <section style={{ borderTop: '1px solid var(--border-glow)', background: 'rgba(255,255,255,0.002)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.1fr', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <span style={{ textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 700, color: 'var(--neon-amber)', letterSpacing: '1px' }}>Adaptive Blueprint</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-1px', margin: '0.5rem 0 1.5rem 0' }}>Agile Stack Evolution.</h2>
              <p style={{ color: 'var(--text-dimmed)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                I balance technical execution with rapid execution constraints. Whether coordinating tasks inside a fast-paced hackathon sprint or implementing core functionality within complex data models, I adjust my approach to match current deployment priorities.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem' }}>
                {["Java Core","Angular", "Python ", "JavaScript", "React.js", "Node.js", "Django", "SQL", "MongoDB", "Git "].map((tech, i) => (
                  <span key={i} className="interactive-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="bento-panel" style={{ height: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.3px' }}>Creative Outlets</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dimmed)' }}>Drag or hover over the creative field frames below</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', position: 'relative', height: '220px' }}>
                <motion.div drag dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }} whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }} className="sticker-polaroid" style={{ rotate: '-6deg', y: 10 }}>
                  <div className="sticker-image-frame" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=300&q=80")' }} />
                  <span className="polaroid-caption">✒️ Quotes Writing</span>
                </motion.div>

                <motion.div drag dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }} whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }} className="sticker-polaroid" style={{ rotate: '4deg', y: -15 }}>
                  <div className="sticker-image-frame" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=300&q=80")' }} />
                  <span className="polaroid-caption">🎬 Videography</span>
                </motion.div>

                <motion.div drag dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }} whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }} className="sticker-polaroid" style={{ rotate: '-2deg', y: 15 }}>
                  <div className="sticker-image-frame" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80")' }} />
                  <span className="polaroid-caption">📷 Photography</span>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE / TAB LAB */}
      <section id="work">
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
            <div>
              <span style={{ color: 'var(--neon-emerald)', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>DEVELOPMENT HISTORY</span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-1px', marginTop: '0.3rem' }}>Project Hub & Professional Experience</h2>
            </div>
            
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.02)', padding: '0.3rem', borderRadius: '12px', border: '1px solid var(--border-glow)' }}>
              <button onClick={() => setLabTab('projects')} style={{ background: labTab === 'projects' ? '#fff' : 'transparent', border: 'none', color: labTab === 'projects' ? '#000' : '#fff', padding: '0.5rem 1.2rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                Engineering Core ({academicProjectsData.length})
              </button>
              <button onClick={() => setLabTab('internships')} style={{ background: labTab === 'internships' ? '#fff' : 'transparent', border: 'none', color: labTab === 'internships' ? '#000' : '#fff', padding: '0.5rem 1.2rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                Industry Internships ({internshipsData.length})
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '2rem', alignItems: 'start' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {labTab === 'projects' ? (
                academicProjectsData.map((proj, idx) => (
                  <button key={idx} onClick={() => setActiveProject(idx)} style={{ background: activeProject === idx ? 'rgba(255,255,255,0.02)' : 'transparent', border: '1px solid', borderColor: activeProject === idx ? 'var(--neon-indigo)' : 'var(--border-glow)', borderRadius: '14px', padding: '1.2rem', textAlign: 'left', color: '#fff', cursor: 'pointer', transition: 'all 0.2s' }}>
                    <span style={{ fontSize: '0.7rem', color: activeProject === idx ? 'var(--neon-indigo)' : 'var(--text-dimmed)', fontWeight: 700 }}>{proj.role}</span>
                    <h4 style={{ fontSize: '1.05rem', marginTop: '0.1rem', fontWeight: 700 }}>{proj.title}</h4>
                  </button>
                ))
              ) : (
                internshipsData.map((intern, idx) => (
                  <button key={idx} onClick={() => setActiveInternship(idx)} style={{ background: activeInternship === idx ? 'rgba(255,255,255,0.02)' : 'transparent', border: '1px solid', borderColor: activeInternship === idx ? 'var(--neon-emerald)' : 'var(--border-glow)', borderRadius: '14px', padding: '1.2rem', textAlign: 'left', color: '#fff', cursor: 'pointer', transition: 'all 0.2s' }}>
                    <span style={{ fontSize: '0.7rem', color: activeInternship === idx ? 'var(--neon-emerald)' : 'var(--text-dimmed)', fontWeight: 700 }}>{intern.role}</span>
                    <h4 style={{ fontSize: '1.05rem', marginTop: '0.1rem', fontWeight: 700 }}>{intern.company}</h4>
                  </button>
                ))
              )}
            </div>

            <div className="bento-panel" style={{ minHeight: '440px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <AnimatePresence mode="wait">
                {labTab === 'projects' ? (
                  <motion.div key={activeProject} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--neon-indigo)', fontWeight: 700, textTransform: 'uppercase' }}>{academicProjectsData[activeProject].tagline}</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0.3rem 0 1rem 0' }}>{academicProjectsData[activeProject].title}</h3>
                    
                    <div style={{ background: 'rgba(255,255,255,0.01)', padding: '0.8rem 1rem', borderRadius: '10px', borderLeft: '3px solid var(--neon-indigo)', color: '#fff', marginBottom: '1.2rem', fontSize: '0.85rem' }}>
                      <strong>Objective Variant:</strong> {academicProjectsData[activeProject].coreChallenge}
                    </div>

                    <p style={{ color: 'var(--text-dimmed)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                      {academicProjectsData[activeProject].execution}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {academicProjectsData[activeProject].stack.map((t, i) => (
                        <span key={i} className="interactive-pill">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key={activeInternship} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--neon-emerald)', fontWeight: 700 }}>{internshipsData[activeInternship].duration}</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0.2rem 0 0.1rem 0' }}>{internshipsData[activeInternship].role}</h3>
                    <h5 style={{ color: 'var(--text-dimmed)', fontWeight: 500, fontSize: '0.85rem', marginBottom: '1.2rem' }}>@{internshipsData[activeInternship].company}</h5>

                    <p style={{ color: '#fff', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                      {internshipsData[activeInternship].summary}
                    </p>

                    <ul style={{ paddingLeft: '1.1rem', color: 'var(--text-dimmed)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '2rem' }}>
                      {internshipsData[activeInternship].workItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {internshipsData[activeInternship].stack.map((t, i) => (
                        <span key={i} className="interactive-pill">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* CREDENTIALS SECTION */}
      <section id="credentials" style={{ background: 'rgba(255,255,255,0.002)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ color: 'var(--neon-indigo)', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>VALIDATED ACCREDITATIONS</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-1px', marginTop: '0.3rem' }}>Professional Certifications</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="bento-panel" style={{ borderLeft: '4px solid var(--neon-indigo)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--neon-indigo)', fontWeight: 700 }}>MAY 2026</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0.3rem 0 0.2rem 0' }}>Angular Framework Core</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dimmed)', marginBottom: '1.2rem' }}>Infosys Springboard Verified</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {["Angular Core", "TypeScript", "SPA Routing", "Components Architecture", "Directives", "State Services"].map((tool, i) => (
                  <span key={i} style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{tool}</span>
                ))}
              </div>
            </div>

            <div className="bento-panel">
              <span style={{ fontSize: '0.7rem', color: 'var(--neon-amber)', fontWeight: 700 }}>ACADEMIC YEAR 2025</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0.3rem 0 0.2rem 0' }}>UI/UX Methodology</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dimmed)', marginBottom: '1.2rem' }}>Launched Global Training</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {["Figma Layouts", "Wireframing", "User Persona Synthesis", "Component Testing", "WCAG Guidelines"].map((tool, i) => (
                  <span key={i} style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{tool}</span>
                ))}
              </div>
            </div>

            <div className="bento-panel">
              <span style={{ fontSize: '0.7rem', color: 'var(--neon-emerald)', fontWeight: 700 }}>JANUARY 2025</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0.3rem 0 0.2rem 0' }}>Power BI Analysis</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dimmed)', marginBottom: '1.2rem' }}>E-Learning Specialization</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {["DAX Queries", "Data Modeling", "Visualization Engineering", "Power Query Transform"].map((tool, i) => (
                  <span key={i} style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{tool}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bento-panel" style={{ marginTop: '1.5rem', padding: '1.5rem 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Completed Industry Job Simulations</h4>
                <p style={{ color: 'var(--text-dimmed)', fontSize: '0.8rem' }}>Hands-on technical scenario environments</p>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <span className="interactive-pill">✦ Deloitte Data Analytics</span>
                <span className="interactive-pill" style={{ borderColor: 'var(--neon-indigo)', color: '#fff' }}>✦ Deloitte Cybersecurity Architecture</span>
                <span className="interactive-pill">✦ TATA Cybersecurity Operations</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SYSTEM INDEX DIRECTORY */}
      <section id="connect" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="bento-panel" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.02) 0%, rgba(16,185,129,0.02) 100%)', padding: '3.5rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }}>
              
              <div>
                <span style={{ color: 'var(--neon-indigo)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>SYSTEM INDEX</span>
                <h2 style={{ fontSize: '2.6rem', fontWeight: 900, letterSpacing: '-1.5px', marginTop: '0.5rem', marginBottom: '1.2rem', lineHeight: 1.1 }}>Let the projects speak.</h2>
                <p style={{ color: 'var(--text-dimmed)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                  No clutter, forms, or gimmicks. If you find my background and project layouts interesting, here is my direct path index.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-dimmed)', fontSize: '0.7rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Direct Route</span>
                    <a href="mailto:siddhigharat775@gmail.com" className="snapshot-link">siddhigharat775@gmail.com</a>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-dimmed)', fontSize: '0.7rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Geographic Base</span>
                    <span style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>Navi Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              {/* SPEC-SHEET CONTAINER */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div className="spec-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                    <span className="pulse-indicator"></span>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Current Roadmap Focus</h4>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dimmed)', lineHeight: 1.5 }}>
                    Refining full-stack integration schemas, benchmarking algorithm performance bounds, and exploring reactive framework engineering patterns.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', paddingLeft: '0.5rem', marginTop: '0.5rem' }}>
                  <a href="https://linkedin.com/in/siddhi-gharat-3314802a6" target="_blank" rel="noopener noreferrer" className="gateway-anchor">LinkedIn Hub ↗</a>
                  <a href="https://github.com/SIDDHI-noraha" target="_blank" rel="noopener noreferrer" className="gateway-anchor" style={{ color: 'var(--text-dimmed)' }}>GitHub Repos ↗</a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid var(--border-glow)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-dimmed)', fontSize: '0.75rem' }}>
        <div className="container">
          <p>© 2026 Siddhi Gharat. Secured </p>
        </div>
      </footer>
    </div>
  );
}