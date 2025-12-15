
import { useEffect, useState } from 'react';
import './App.css';

// Komponen untuk menyisipkan CSS langsung ke dalam file JSX untuk mengatasi error import
const GlobalStyles = () => (
  <style>{`
    
    /* --- CSS Variables for Theming (Light & Dark Mode) --- */
    :root {
      --bg-color: #E8EAE5;
      --text-color: #00412E;
      --primary-color: #00412E;
      --secondary-color: #96BF8A;
      --accent-color: #00412E;
      --card-bg: rgba(255, 255, 255, 0.5);
      --card-border: rgba(255, 255, 255, 0.9);
      --shadow-color: rgba(0, 65, 46, 0.1);
      --nav-text-color: #00412E;
    }

    [data-theme='dark'] {
      --bg-color: #002B1E;
      --text-color: #E8EAE5;
      --primary-color: #96BF8A;
      --secondary-color: #E8EAE5;
      --accent-color: #96BF8A;
      --card-bg: rgba(0, 43, 30, 0.4);
      --card-border: rgba(150, 191, 138, 0.2);
      --shadow-color: rgba(0, 0, 0, 0.2);
      --nav-text-color: #E8EAE5;
    }

    /* --- General Styles & Resets --- */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: var(--bg-color);
      color: var(--text-color);
      line-height: 1.6;
      transition: background-color 0.3s ease, color 0.3s ease;
      overflow-x: hidden;
      background-image: 
        radial-gradient(circle at 1% 1%, var(--secondary-color) 1px, transparent 1px),
        radial-gradient(circle at 99% 99%, var(--secondary-color) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    /* --- Glassmorphism Card Style --- */
    .glass-card {
      background: var(--card-bg);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border-radius: 20px;
      border: 1px solid var(--card-border);
      box-shadow: 0 8px 32px 0 var(--shadow-color);
      transition: all 0.3s ease;
    }

    /* --- Layout & Sections --- */
    .portfolio-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .content-section {
      padding: 6rem 0;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeIn 0.8s forwards;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 3rem;
      color: var(--primary-color);
    }

    /* --- Navigation Bar --- */
    .navbar {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 4rem);
      max-width: 900px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 1.5rem;
      z-index: 1000;
    }

    .nav-brand {
      font-weight: 600;
      font-size: 1.2rem;
      color: var(--nav-text-color);
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: var(--nav-text-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-links a:hover {
      color: var(--accent-color);
    }
    
    .nav-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .theme-toggle, .menu-toggle {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--nav-text-color);
      display: flex;
      align-items: center;
    }
    
    .theme-toggle {
        font-size: 1.5rem;
    }

    .menu-toggle {
        display: none; /* Hidden on desktop */
    }

    /* --- Hero Section --- */
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-top: 120px;
    }

    .hero-content {
        animation: fadeIn 1s ease-in-out;
    }

    .profile-picture {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 4px solid var(--secondary-color);
      margin-bottom: 1.5rem;
      object-fit: cover;
    }

    .name-title {
      font-size: 3rem;
      font-weight: 700;
    }

    .profession {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .tagline {
      max-width: 600px;
      margin: 0 auto 2rem;
      font-size: 1.1rem;
    }

    /* --- Call to Action Buttons --- */
    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.8rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }

    .cta-button.primary {
      background-color: var(--primary-color);
      color: var(--bg-color);
    }

    .cta-button.primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    .cta-button.secondary {
      background-color: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
    }

    .cta-button.secondary:hover {
      background-color: var(--primary-color);
      color: var(--bg-color);
    }

    /* --- About Section --- */
    .about-card {
      padding: 2.5rem;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      font-size: 1.1rem;
    }

    /* --- Skills Section --- */
    .skills-category { margin-bottom: 3rem; }
    .skills-category h3 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.5rem;
    }
    .skill-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      gap: 1rem;
      font-weight: 500;
    }
    .skill-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 32px 0 var(--shadow-color);
    }
    .skill-icon { width: 50px; height: 50px; }

    /* --- Projects Section --- */
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .project-card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .project-image {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
      object-fit: cover;
    }
    .project-info { padding: 1.5rem; }
    .project-info h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }
    .tech-badge {
      background-color: var(--secondary-color);
      color: var(--bg-color);
      padding: 0.3rem 0.7rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    .project-links {
      margin-top: 1rem;
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .project-links a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 600;
    }

    /* --- Experience Section (Timeline) --- */
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }
    .timeline::after {
      content: '';
      position: absolute;
      width: 3px;
      background-color: var(--secondary-color);
      top: 0;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    .timeline-item {
      padding: 2rem;
      position: relative;
      width: 50%;
      margin-bottom: 2rem;
    }
    .timeline-item:nth-child(odd) {
      left: 0;
      padding-right: 4rem;
      text-align: right;
    }
    .timeline-item:nth-child(even) {
      left: 50%;
      padding-left: 4rem;
    }
    .timeline-item::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: var(--bg-color);
      border: 4px solid var(--secondary-color);
      top: 30px;
      border-radius: 50%;
      z-index: 1;
    }
    .timeline-item:nth-child(odd)::after { right: -10px; }
    .timeline-item:nth-child(even)::after { left: -10px; }
    .timeline-meta {
      font-style: italic;
      font-weight: 500;
      margin: 0.5rem 0 1rem;
      color: var(--primary-color);
    }
    .timeline-item ul { list-style-type: none; }

    /* --- Contact Section --- */
    .contact-card {
      max-width: 700px;
      margin: 0 auto;
      padding: 2.5rem;
      text-align: center;
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 2rem 0;
    }
    .contact-form input, .contact-form textarea {
      width: 100%;
      padding: 1rem;
      border-radius: 10px;
      border: 1px solid var(--card-border);
      background: rgba(255,255,255, 0.1);
      color: var(--text-color);
      font-family: inherit;
    }
    .contact-form input::placeholder, .contact-form textarea::placeholder {
      color: var(--text-color);
      opacity: 0.7;
    }
    .contact-alternatives {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .contact-alternatives .social-link {
      color: var(--text-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
    }
    .download-cv-btn { padding: 0.7rem 1.5rem; }

    /* --- Footer --- */
    .app-footer {
      text-align: center;
      padding: 2rem;
      border-top: 1px solid var(--card-border);
      margin-top: 4rem;
    }
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 1rem;
    }
    .social-icons a { color: var(--text-color); }
    .social-icons a:hover { color: var(--primary-color); }

    /* --- Responsive Design --- */
    @media (min-width: 769px) {
      .projects-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 900px) {
      .timeline::after { left: 20px; }
      .timeline-item {
        width: 100%;
        padding-left: 4rem;
        padding-right: 0;
        text-align: left !important;
      }
      .timeline-item:nth-child(odd), .timeline-item:nth-child(even) { left: 0; }
      .timeline-item::after { left: 10px !important; right: auto !important; }
    }
    @media (max-width: 768px) {
      .portfolio-container { padding: 0 1rem; }
      .navbar { width: calc(100% - 2rem); top: 1rem; }
      .section-title { font-size: 2rem; }
      .name-title { font-size: 2.5rem; }
      .profession { font-size: 1.2rem; }
      .menu-toggle { display: block; z-index: 1001; }
      .nav-links {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: var(--card-bg);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }
      .nav-links.active { display: flex; }
      .nav-links a { font-size: 1.5rem; }
      .contact-alternatives { flex-direction: column; align-items: center; }
    }
    @media (max-width: 480px) {
      .name-title { font-size: 2rem; }
      .profession { font-size: 1.1rem; }
      .hero-section { padding-top: 100px; }
      .content-section { padding: 4rem 0; }
      .about-card, .contact-card { padding: 1.5rem; }
    }
  `}</style>
);

// Komponen SVG untuk ikon agar mandiri dan cepat dimuat
const Mail = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Github = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const ArrowRight = ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

const Download = ({ size = 20, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
);

const Menu = ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const X = ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const Header = () => (
    <header className="hero-section" id="home">
        <div className="hero-content">
            <img src="https://placehold.co/150x150/E8EAE5/00412E?text=IA" alt="Iwan Agi Berutu" className="profile-picture" />
            <h1 className="name-title">Anwar</h1>
            <h2 className="profession">Frontend Developer & UI Designer</h2>
            <p className="tagline">Membangun antarmuka web yang modern dan intuitif dengan React & Tailwind.</p>
            <div className="cta-buttons">
                <a href="#projects" className="cta-button primary">Lihat Proyek Saya</a>
                <a href="#contact" className="cta-button secondary">Hubungi Saya</a>
            </div>
        </div>
    </header>
);

const About = () => (
    <section id="about" className="content-section">
        <h2 className="section-title">Tentang Saya</h2>
        <div className="glass-card about-card">
            <p>
                Saya adalah seorang mahasiswa Ilmu Komputer Unimed dengan hasrat mendalam untuk pengembangan web modern dan desain antarmuka yang bersih. 
                Fokus utama saya adalah menciptakan pengalaman pengguna yang mulus dan menarik secara visual menggunakan teknologi seperti React dan Tailwind CSS. 
                Saya percaya bahwa perpaduan antara kode yang efisien dan desain yang intuitif adalah kunci untuk menciptakan produk digital yang luar biasa.
            </p>
        </div>
    </section>
);

const Skills = () => {
    const skills = {
        Frontend: [
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
            { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        ],
        Backend: [
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        ],
        'Tools & Design': [
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        ]
    };

    return (
        <section id="skills" className="content-section">
            <h2 className="section-title">Keahlian & Teknologi</h2>
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skills-category">
                    <h3>{category}</h3>
                    <div className="skills-grid">
                        {items.map(skill => (
                            <div className="glass-card skill-card" key={skill.name}>
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

const Projects = () => {
    const projectData = [
        {
            title: "Project Alpha",
            description: "Sebuah dashboard analitik modern untuk visualisasi data secara real-time.",
            tech: ["React", "D3.js", "Node.js"],
            imageUrl: "https://placehold.co/600x400/96BF8A/00412E?text=Project+Alpha",
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Project Beta",
            description: "Aplikasi e-commerce dengan fokus pada user experience yang mulus dan cepat.",
            tech: ["Next.js", "Tailwind CSS", "Firebase"],
            imageUrl: "https://placehold.co/600x400/96BF8A/00412E?text=Project+Beta",
            demoUrl: "#",
            githubUrl: "#"
        },
    ];

    return (
        <section id="projects" className="content-section">
            <h2 className="section-title">Portofolio Proyek</h2>
            <div className="projects-grid">
                {projectData.map(project => (
                    <div className="glass-card project-card" key={project.title}>
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                            </div>
                            <div className="project-links">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Lihat Demo <ArrowRight size={16}/></a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Lihat di GitHub <Github size={16}/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Experience = () => (
    <section id="experience" className="content-section">
        <h2 className="section-title">Pengalaman & Pendidikan</h2>
        <div className="timeline">
            <div className="timeline-item glass-card">
                <h3>Frontend Developer (Intern)</h3>
                <p className="timeline-meta">Startup Maju Jaya | 2024 - Sekarang</p>
                <ul>
                    <li>Berkontribusi dalam pengembangan komponen UI dengan React.</li>
                    <li>Bekerja sama dengan tim desain untuk implementasi mockup dari Figma.</li>
                </ul>
            </div>
            <div className="timeline-item glass-card">
                <h3>S1 Ilmu Komputer</h3>
                <p className="timeline-meta">Universitas Teknologi Nusantara | 2022 - 2026</p>
                <ul>
                    <li>Fokus pada rekayasa perangkat lunak dan pengembangan web.</li>
                    <li>Aktif dalam komunitas coding di kampus.</li>
                </ul>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="content-section">
        <h2 className="section-title">Hubungi Saya</h2>
        <div className="glass-card contact-card">
            <p>Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya.</p>
            <form className="contact-form">
                <input type="text" placeholder="Nama Anda" required />
                <input type="email" placeholder="Email Anda" required />
                <textarea placeholder="Pesan Anda" rows={5} required></textarea>
                <button type="submit" className="cta-button primary">Kirim Pesan</button>
            </form>
            <div className="contact-alternatives">
                <a href="mailto:iwanagi@email.com" className="social-link"><Mail /> anwar@email.com</a>
                <a href="#" className="cta-button secondary download-cv-btn">
                    <Download /> Download CV
                </a>
            </div>
        </div>
    </section>
);

const AppFooter = () => (
    <footer className="app-footer">
        <div className="social-icons">
            <a href="https://github.com/iwanagi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://linkedin.com/in/iwanagi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:iwanagi@email.com" aria-label="Email"><Mail /></a>
        </div>
        <p>Copyright © 2025 Iwan Agi Berutu</p>
    </footer>
);

function App() {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <GlobalStyles />
      <div className="portfolio-container">
        <nav className="navbar glass-card">
          <div className="nav-brand"> Anwar</div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Tentang</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Keahlian</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Proyek</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontak</a>
          </div>
          <div className="nav-actions">
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button onClick={toggleMenu} className="menu-toggle">
                  {isMenuOpen ? <X /> : <Menu />}
              </button>
          </div>
        </nav>
        
        <main>
          <Header />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <AppFooter />
      </div>
    </>
  )
}

export default App;

