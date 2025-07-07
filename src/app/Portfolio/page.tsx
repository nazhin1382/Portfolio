"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Code, ExternalLink, Menu, X, Star, Users, Clock, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "AI Smart Study Planner",
      description: "An intelligent study planner application integrated with AI to optimize learning schedules and track progress.",
      tech: ["React", "TypeScript", "AI Integration", "Node.js"],
      category: "AI Application",
      year: "2025"
    },
    {
      title: "Agent Dashboard",
      description: "Comprehensive dashboard for managing customer service agents with real-time analytics and performance tracking.",
      tech: ["React", "Dashboard UI", "Real-time Data", "Charts"],
      category: "Dashboard",
      year: "2024-2025"
    },
    {
      title: "Customer Service Chatbot",
      description: "Interactive chatbot for customer support with natural language processing and automated responses.",
      tech: ["React", "NLP", "Chat Interface", "API Integration"],
      category: "Chatbot",
      year: "2024-2025"
    },
    {
      title: "CPU Scheduler Simulator",
      description: "Educational tool for visualizing different CPU scheduling algorithms with interactive animations.",
      tech: ["C++", "Algorithm Visualization"],
      category: "Academic Project",
      year: "2023"
    }
  ];

  const skills = [
    "React", "TypeScript", "Next.js", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Node.js", "Git", "API Integration", "Responsive Design", "UI/UX Design"
  ];

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const FloatingParticles = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${10 + (i * 12)}%`,
            animation: `float ${3 + (i * 0.5)}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
    </div>
  );

  const CustomCursor = () => (
    <div
      className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 opacity-30 blur-sm transition-all duration-100"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transform: 'translate(0, 0)'
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.4); }
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out; }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <FloatingParticles />
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Nazhin.dev
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 animate-slideInUp">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-slideInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Nazhin Abdolbaghi
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slideInLeft">
              Frontend Developer & Software Engineer
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slideInRight">
              Crafting exceptional digital experiences with modern technologies. 
              Passionate about creating innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Who I Am</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate Frontend Developer with a Bachelor&apos;s degree in Software Engineering 
                  from Cyprus International University. With over a year of professional experience at 
                  Comtech Company, I specialize in creating intuitive and dynamic user interfaces.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  My journey in software development has led me to work on diverse projects, from 
                  AI-integrated applications to customer service solutions. I'm constantly learning 
                  and exploring new technologies to stay at the forefront of web development.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Education & Achievements</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Bachelor of Software Engineering</h4>
                      <p className="text-gray-300">Cyprus International University</p>
                      <p className="text-gray-400 text-sm">Graduated with strong foundation in software development as high honor student</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Professional Experience</h4>
                      <p className="text-gray-300">1+ Year in Industry</p>
                      <p className="text-gray-400 text-sm">Specialized in frontend development and user experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Key Strengths</h4>
                      <p className="text-gray-300">Problem Solving & Innovation</p>
                      <p className="text-gray-400 text-sm">Passionate about creating efficient, scalable solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl animate-slideInUp">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer</h3>
                  <p className="text-cyan-400 text-lg font-medium">Comtech Company</p>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>2023 - Present</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>1+ Year</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Key Responsibilities</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Developing responsive web applications using React and TypeScript</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Collaborating with cross-functional teams to deliver high-quality products</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Briefcase className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Implementing modern UI/UX designs with attention to detail</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Notable Projects</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">AI Smart Study Planner</h5>
                      <p className="text-gray-300 text-sm">Integrated AI technology to create personalized study schedules</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">Agent Dashboard</h5>
                      <p className="text-gray-300 text-sm">Built comprehensive analytics dashboard for customer service management</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">Customer Service Chatbot</h5>
                      <p className="text-gray-300 text-sm">Developed interactive chatbot interface for automated customer support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-cyan-400 font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">{project.year}</span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                or just connecting with fellow developers. Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">nazhin.abdolbaghi@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+90 533 844 8379</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-pink-400" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Cyprus, Nicosia</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-6 mt-8">
                <button className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 transform hover:scale-110">
                  <Github className="w-6 h-6 text-cyan-400" />
                </button>
                <button className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-purple-400/30 rounded-full hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </button>
                <button className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-pink-400/30 rounded-full hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 transform hover:scale-110">
                  <Mail className="w-6 h-6 text-pink-400" />
                </button>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="glass-card p-8 rounded-2xl space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  onClick={() => alert('Contact form functionality would be implemented with a backend service!')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-glow font-medium"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800/50 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Nazhin Abdolbaghi. Designed and built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;