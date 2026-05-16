import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Code, Cloud, BarChart, Award, Briefcase, ExternalLink } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    languages: ['Python', 'Java', 'JavaScript', 'C++', 'C', 'SQL'],
    webTech: ['HTML', 'CSS', 'JavaScript', 'React.js','Vue.js'],
    tools: ['Power BI', 'Excel', 'MySQL', 'GitHub', 'VS Code', 'PyCharm', 'Jupyter Notebook', 'IntelliJ IDEA','Cypress'],
    platforms: ['Azure', 'MongoDB', 'Appwrite', 'Supabase'],
  };

  const projects = [
    {
      title: 'CashFlow - Smart Expense Tracker',
      description: 'A modern web-based expense tracking application with secure user authentication, income & expense management, borrow-lend tracking, and interactive financial dashboards powered by Supabase backend.',
      tech: ['React', 'TypeScript', 'Supabase', 'Netlify', 'Tailwind CSS', 'Vite'],
      link: 'https://cashesflow.netlify.app/',
      year: '2026',
      features: [
        'User Authentication',
        'Income & Expense Tracking',
        'Borrow & Lend Management',
        'Interactive Dashboard & Charts',
        'Category Management',
        'Secure Row Level Security (RLS)',
        'Responsive Modern UI',
      ],
    },
    {
      title: 'Suraksha Path - Disaster Response Platform',
      description: 'An end-to-end AI-powered disaster management platform for state-level disaster response. Built with a real-time WebSocket architecture, it enables citizens to send geo-tagged SOS signals, administrators to manage live shelter capacity, and AI modules to predict flood risks, assess damage costs, and optimise resource allocation.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'Supabase', 'Leaflet.js', 'WebSocket', 'Docker', 'JWT'],
      link: null,
      year: '2025-26',
      features: [
        'Real-Time SOS Distress Signals via Interactive Map',
        'Live Shelter Capacity & Resource Dashboard',
        'AI Flood Risk Prediction (24-hour district-level forecasting)',
        'Automated Damage Assessment & Cost Estimation',
        'Volunteer Management with Skill-Matched Dispatch',
        'Role-Based Access Control (Citizens & Admins)',
        'Post-Flood Disease Trend Monitoring',
        'GeoJSON Risk Zone Overlays with Leaflet.js',
      ],
    },
    {
      title: 'BlinkIT Data Analysis',
      description: 'Comprehensive sales data analysis using Power BI to identify trends in sales, product types, and outlet performance.',
      tech: ['Power BI', 'Data Analysis', 'Excel'],
      link: null,
      year: '2024',
      features: ['Interactive Dashboards', 'Sales Trends', 'Business Insights'],
    },
  ];

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
      issuer: 'Oracle',
      year: '2025',
      description: 'Fundamental knowledge of cloud computing concepts and AI basics on Oracle Cloud.',
    },
    {
      title: 'Cloud Computing Fundamentals',
      issuer: 'IBM',
      year: '2024',
      description: 'Hands-on knowledge of cloud models, services (IaaS, PaaS, SaaS), and core IBM Cloud tools.',
    },
    {
      title: 'Qlik Sense Qualification Exam – Business Analyst 2025',
      issuer: 'Qlik',
      year: '2026',
      description: 'Qualified as a Qlik Sense Business Analyst, demonstrating proficiency in data visualisation, dashboard design, and analytics using the Qlik Sense platform. Completed April 2026 with a score of 72.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white text-gray-900">
      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              HP
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Harsh Panchani</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
              Cloud & AI Developer | Full Stack Enthusiast
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Computer Science Engineering student passionate about cloud computing, artificial intelligence, and building innovative solutions. Currently working as a Software Development Intern at UClockIt and specializing in Azure Cloud services.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/50"
              >
                View Projects
              </button>
              <a
                href="/Harsh_Panchani_final_resume_2.0.pdf"
                download
                className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-medium transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 rounded-lg font-medium transition-all"
              >
                Contact Me
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Harshp729" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all hover:scale-110 text-gray-700">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/harshpanchani/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all hover:scale-110 text-gray-700">
                <Linkedin size={24} />
              </a>
              <a href="mailto:harshpanchani7238@gmail.com" className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all hover:scale-110 text-gray-700">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="/my_profile_lagan.jpeg"
                alt="Harsh Panchani"
                className="relative rounded-2xl shadow-2xl max-w-md w-full object-cover border-4 border-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4 bg-gray-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm a Computer Science Engineering student at REVA University, Bengaluru, with a deep passion for cloud computing and artificial intelligence. Currently pursuing my B.Tech degree, I'm focused on building expertise in Azure Cloud services and developing AI-driven applications.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm currently working as a Software Development Intern at UClockIt, where I enhance and optimize systems using Python and Vue.js, improve platform scalability, and contribute to admin portal development and automation testing.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through my academic internship at REVA Academy for Corporate Excellence (RACE), I've gained hands-on experience supporting Azure Cloud training, assisting with practical lab sessions, and mentoring students through certification paths like AZ-900.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all shadow-sm">
                <Cloud className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cloud Computing</h3>
                <p className="text-gray-600 text-sm">Azure Cloud expertise with hands-on experience in VM management, networking, and storage solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-cyan-500 transition-all shadow-sm">
                <Code className="text-cyan-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Full Stack Dev</h3>
                <p className="text-gray-600 text-sm">Building dynamic web applications with modern technologies and best practices</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 transition-all shadow-sm">
                <BarChart className="text-green-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Data Analysis</h3>
                <p className="text-gray-600 text-sm">Creating insights through Power BI dashboards and data visualization</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-500 transition-all shadow-sm">
                <Award className="text-pink-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">AI/ML</h3>
                <p className="text-gray-600 text-sm">Developing intelligent systems with machine learning and AI algorithms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 transition-all shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-blue-600">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-50 rounded-lg text-sm font-medium text-blue-700 hover:bg-blue-100 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-500 transition-all shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-purple-600">Web Tech</h3>
              <div className="flex flex-wrap gap-3">
                {skills.webTech.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-50 rounded-lg text-sm font-medium text-purple-700 hover:bg-purple-100 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-cyan-500 transition-all shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-cyan-600">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-cyan-50 rounded-lg text-sm font-medium text-cyan-700 hover:bg-cyan-100 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500 transition-all shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-green-600">Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {skills.platforms.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-50 rounded-lg text-sm font-medium text-green-700 hover:bg-green-100 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-4 bg-gray-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all overflow-hidden group shadow-sm"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors text-gray-900">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 font-medium">{project.year}</p>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-blue-600 font-medium hover:underline"
                      >
                        Visit Project
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">

            {/* UClockIt */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-500 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-100 rounded-lg">
                  <Briefcase className="text-cyan-600" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-cyan-600">UClockIt</h3>
                      <p className="text-gray-600 mt-1">Internship — Software Development Intern</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-700">Sept 2025 – Present</p>
                      <p className="text-sm text-gray-500">Bengaluru, Karnataka</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Enhancing and optimizing the system using Python and Vue.js to improve application efficiency and performance</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Improving platform scalability and responsiveness to ensure a smooth user experience</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Contributing to the development, testing, and maintenance of the admin portal</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Working on automation testing to validate system functionality, catch regressions early, and ensure reliable end-to-end workflows across the platform</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Collaborating with the team to resolve issues and maintain reliable system functionality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RACE */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-500 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="text-blue-600" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-600">REVA Academy for Corporate Excellence (RACE)</h3>
                      <p className="text-gray-600 mt-1">Academic Internship — Teaching Assistant, Azure Cloud Training</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-700">June 2024 – Present</p>
                      <p className="text-sm text-gray-500">Bengaluru, Karnataka</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Supported the delivery of Azure Cloud training by assisting in core topics such as virtual machines, networking, storage solutions, and identity management</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Assisted in practical lab sessions using Azure Portal and Azure CLI to help learners build and deploy real-world cloud solutions</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Mentored students during Capstone Projects focused on secure, scalable Azure architectures and guided them through certification paths like AZ-900</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-20 px-4 bg-gray-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all p-6 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <Award className="text-blue-600" size={32} />
                  <span className="text-sm font-medium text-gray-500">{cert.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                <p className="text-blue-600 text-sm font-medium">{cert.issuer}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:harshpanchani7238@gmail.com" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all group shadow-sm">
              <Mail className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600 text-sm">harshpanchani7238@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/harshpanchani/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all group shadow-sm">
              <Linkedin className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold mb-2 text-gray-900">LinkedIn</h3>
              <p className="text-gray-600 text-sm">Harsh Panchani</p>
            </a>
            <a href="https://github.com/Harshp729" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all group shadow-sm">
              <Github className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold mb-2 text-gray-900">GitHub</h3>
              <p className="text-gray-600 text-sm">Harshp729</p>
            </a>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-xl p-8">
            <p className="text-gray-800 mb-4">Currently based in Bengaluru, Karnataka</p>
            <p className="text-gray-700 text-sm">Available for internships, collaborations, and full-time opportunities</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-700">Designed & Built by Harsh Panchani</p>
          <p className="text-gray-500 text-sm mt-2">Cloud & AI Developer | Full Stack Enthusiast</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
