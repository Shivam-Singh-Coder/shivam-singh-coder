import { useEffect, useState } from "react";

const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

const skills = [
  ["Backend", ["Python", "Django", "Django REST Framework", "REST APIs"]],
  ["Frontend", ["HTML5", "CSS3", "JavaScript", "Bootstrap"]],
  ["Data", ["MySQL", "Schema Design", "Query Optimization", "Django ORM"]],
  ["Security", ["JWT", "Custom Tokens", "RBAC", "Client Privileges"]],
  ["Real-time & Architecture", ["Django Channels", "WebSockets", "Threading", "Middleware"]],
  ["Workflow", ["Git & GitHub", "Postman", "Agile", "Scrum"]],
];

const jobs = [
  {
    title: "Backend Developer / Full Stack Web Developer",
    company: "Rays Edutech Private Limited · Patna",
    date: "2024 – Present",
    points: [
      "Developed and deployed 50+ REST APIs with Django and DRF, improving response times by 30% and supporting 1,000+ daily users.",
      "Implemented JWT, custom token authentication, and RBAC, reducing unauthorized access incidents by 40%.",
      "Engineered real-time chat and notifications with Django Channels and WebSockets for 500+ concurrent users with sub-second latency.",
      "Created reusable decorators and middleware, reducing repetitive code by 25%, and optimized MySQL performance by 35%.",
    ],
  },
  {
    title: "Full Stack Development Intern",
    company: "Rays Edutech Private Limited · Patna",
    date: "2023 – 2024",
    points: [
      "Contributed to 5+ client projects using Python, Django, HTML, CSS, and JavaScript.",
      "Improved responsive UI components, helping reduce bounce rate by 10%.",
    ],
  },
];

const projects = [
  {
    name: "TestDarpan",
    type: "Online Test & Assessment Platform · Full Stack Developer",
    description: "Built question-bank management, a content editor, secure payments, online examinations, automated evaluation, and performance analytics.",
    link: "https://testdarpan.com/",
    color: "#6ee7d8",
    tags: ["Django", "DRF", "MySQL", "JavaScript"],
  },
  {
    name: "TrueSurvey",
    type: "Survey & Analytics Platform · Backend Developer",
    description: "Developed politician feedback, issue reporting, and real-time public and constituency chats serving more than 500 active users.",
    link: "https://truesurvey.in/",
    color: "#8ba8ff",
    tags: ["Python", "Django", "DRF", "WebSockets"],
  },
  {
    name: "Krishco Engineers",
    type: "Manufacturing & Sales ERP · Full Stack Developer",
    description: "Engineered an ERP-style system with QR and non-QR product tracking, operational workflows, and reporting that reduced manual tracking errors by 40%.",
    link: "https://krishco.com/",
    color: "#f3c988",
    tags: ["Django", "MySQL", "HTML", "JavaScript"],
  },
  {
    name: "CollegeSewa",
    type: "Three-Application Education Platform · Full Stack Developer",
    description: "Delivered a connected ecosystem: Web CollegeSewa for universities, programs, notifications, user control, and platform operations; LMS CollegeSewa for lead management; and Admission CollegeSewa for complete admission workflows.",
    link: "https://collegesewa.com/",
    color: "#ef8dad",
    tags: ["Django", "DRF", "MySQL", "Bootstrap"],
  },
  {
    name: "The Twin Flame Luxury Candles",
    type: "Luxury Candle Platform · Node.js Backend Developer",
    description: "Recently started developing the Node.js backend and server-side functionality, while collaborating with another developer who is building the customer-facing website in Next.js.",
    color: "#d7a46f",
    status: "In progress",
    tags: ["Node.js", "JavaScript", "Backend Development", "Team Collaboration"],
  },
  {
    name: "Patliputra Logistics",
    type: "C&F Depot Management Platform · Full Stack Developer",
    description: "Built a centralized platform for a C&F company to manage services across more than 10 depots, with separate software workflows tailored to each depot.",
    link: "https://pcplpatna.com/",
    color: "#72d6a5",
    tags: ["Python", "Django", "MySQL", "JavaScript", "Bootstrap"],
  },
];

const education = [
  ["MCA in Artificial Intelligence & Machine Learning", "Lovely Professional University", "2025 – 2027 · Pursuing"],
  ["Bachelor of Computer Applications", "Chandigarh University", "2022 – 2025 · 81.20%"],
  ["Intermediate in Science", "Manasthali Education Centre", "2018 – 2020 · 86.60%"],
];

const certifications = [
  ["Data Science Workshop", "IIT Patna"],
  ["Full Stack Web Development", "Rays Edutech Private Limited · 2022 – 2023"],
  ["Advanced Diploma in Computer Applications", "Rays Edutech Private Limited · 2021 – 2022"],
];

function Tags({ items }) {
  return <div className="tags">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>;
}

function SectionHeading({ kicker, title, children }) {
  return <div className="heading reveal"><div><p className="kicker">{kicker}</p><h2>{title}</h2></div><p className="intro">{children}</p></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <nav className="container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>Shivam Singh<span>.</span></a>
        <button className="menu" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? "×" : "☰"}</button>
        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="nav-links">
          {["about", "skills", "experience", "projects", "education"].map((item) => <li key={item}><a href={`#${item}`} onClick={closeMenu}>{item[0].toUpperCase() + item.slice(1)}</a></li>)}
          <li><a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk</a></li>
        </ul>
      </nav>
    </header>

    <main id="main">
      <section className="hero" id="home"><div className="hero-grid container">
        <div><p className="eyebrow">Available for new opportunities</p><h1>Shivam <span>Singh.</span></h1><p className="hero-role">Python Full Stack Developer · Django · DRF</p><p className="hero-copy">I build secure, scalable web products—from production REST APIs and role-based systems to real-time applications and complete business platforms.</p><div className="buttons"><a className="button primary" href="#projects">Explore my work →</a><a className="button" href={asset("Shivam%20Singh.pdf")} download>Download resume ↓</a></div><div className="facts" aria-label="Career highlights"><div className="fact"><strong>3+</strong><span>Years of experience</span></div><div className="fact"><strong>50+</strong><span>REST APIs delivered</span></div><div className="fact"><strong>1K+</strong><span>Daily users supported</span></div></div></div>
        <div className="portrait-shell reveal"><figure className="portrait"><img src={asset("shivam-singh-pic.jpg")} alt="Portrait of Shivam Singh" width="796" height="706" fetchPriority="high"/><figcaption><div><strong>Based in Patna, India</strong><span>Backend · Full stack · Real-time</span></div><i className="status" aria-label="Available for work"/></figcaption></figure></div>
      </div></section>

      <section id="about"><div className="container"><SectionHeading kicker="About me" title="Building useful software that lasts.">I focus on clear architecture, reliable APIs, thoughtful security, and interfaces that work smoothly across devices.</SectionHeading><div className="about-grid reveal"><div className="panel about-copy"><p>I’m a <strong>Python full-stack developer with 3+ years of professional experience</strong> building and deploying REST APIs, real-time systems, and scalable web applications. At Rays Edutech, I contribute across the full development cycle—from database design and backend architecture to responsive user interfaces.</p><p>My work includes Django REST Framework, JWT authentication, role-based access control, Django Channels, WebSockets, reusable middleware, and MySQL optimization. I’m also pursuing an <strong>MCA in Artificial Intelligence & Machine Learning at Lovely Professional University</strong> to strengthen my AI/ML and emerging GenAI expertise.</p></div><div className="panel highlights">{[["30%", "faster API response times"], ["<1s", "real-time message latency"], ["10K+", "records handled per day"], ["500+", "concurrent real-time users"]].map(([value, label]) => <div className="highlight" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></div></section>

      <section id="skills"><div className="container"><SectionHeading kicker="Technical toolkit" title="What I work with.">A practical stack shaped by production projects, performance work, application security, and end-to-end delivery.</SectionHeading><div className="skill-grid reveal">{skills.map(([title, items], index) => <article className="panel skill" key={title}><span className="index">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><Tags items={items}/></article>)}</div></div></section>

      <section id="experience"><div className="container"><SectionHeading kicker="Experience" title="Production work, measurable results.">More than three years at Rays Edutech, progressing from a full-stack intern to a backend and full-stack developer.</SectionHeading><div className="timeline reveal">{jobs.map((job) => <article className="panel job" key={job.title}><div className="job-top"><div><h3>{job.title}</h3><p className="company">{job.company}</p></div><span className="date">{job.date}</span></div><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div></div></section>

      <section id="projects"><div className="container"><SectionHeading kicker="Selected projects" title="Platforms built for real users.">Client and production work across assessment, public feedback, manufacturing, education, logistics, and e-commerce.</SectionHeading><div className="projects reveal">{projects.map((project, index) => <article className={`panel project${project.wide ? " project-wide" : ""}`} style={{ "--project-color": project.color }} key={project.name}><div className="project-top"><span className="index">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>{project.link ? <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">Live site ↗</a> : <span className="project-status">{project.status}</span>}</div><h3>{project.name}</h3><div className="project-type">{project.type}</div><p>{project.description}</p><Tags items={project.tags}/></article>)}</div></div></section>

      <section id="education"><div className="container"><SectionHeading kicker="Education & credentials" title="Always learning, always building.">Formal study in computer applications, current specialization in AI and machine learning, and practical technical training.</SectionHeading><div className="education reveal"><div className="panel list">{education.map(([title, place, meta]) => <article className="item" key={title}><h3>{title}</h3><p>{place}</p><div className="meta">{meta}</div></article>)}</div><div className="panel list">{certifications.map(([title, place]) => <article className="item" key={title}><h3>{title}</h3><p>{place}</p></article>)}</div></div></div></section>

      <section id="contact"><div className="container"><div className="panel contact reveal"><p className="kicker">Start a conversation</p><h2>Have a role or project in mind?</h2><p>I’m open to full-time backend and full-stack opportunities. Let’s talk about what you’re building and how I can contribute.</p><div className="contact-links"><a className="button primary" href="mailto:shivamsingh.dev03@gmail.com">Email me</a><a className="button" href="tel:+917617839389">Call me</a><a className="button" href="https://www.linkedin.com/in/shivam-singh-coder/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="button" href="https://github.com/shivam-singh-coder" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a className="button" href={asset("Shivam%20Singh.pdf")} target="_blank" rel="noopener noreferrer">View resume ↗</a></div></div></div></section>
    </main>

    <footer><div className="footer container"><p>© {new Date().getFullYear()} Shivam Singh. Built with React.</p><a href="#home">Back to top ↑</a></div></footer>
  </>;
}

export default App;
