// import { useState } from 'react'


// import './App.css'
// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     return <h1>(inputs)</h1>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }


// function MyForm() {
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleChange = (event) => {
//     setMyCar(event.target.value)
//     console.log(myCar)
    
//   }

//   return (<> <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//     <p>{myCar}</p>
//   </>
//   )
// }


// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Posts from "./pages/Posts";
// import PostDetails from "./pages/PostDetails";

// export default function App() {
//   return (
//     <div style={{ padding: 20 }}>
//       <nav style={{ marginBottom: 20 }}>
//         <Link to="/">🏠 Home</Link> |{" "}
//         <Link to="/about">📖 About</Link> |{" "}
//         <Link to="/posts">📝 Posts</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/posts" element={<Posts />} />
//         <Route path="/posts/:id" element={<PostDetails />} />
//       </Routes>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
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

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory management and responsive design.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-to-br from-purple-500 to-pink-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "bg-gradient-to-br from-blue-500 to-cyan-500",
      demo: "#",
      github: "#"
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat application with AI integration, featuring message encryption, file sharing, and customizable themes.",
      tech: ["React", "WebSocket", "Python", "OpenAI"],
      image: "bg-gradient-to-br from-green-500 to-teal-500",
      demo: "#",
      github: "#"
    }
  ];

  const skills = [
    { icon: "💻", name: "Frontend Development", desc: "React, Vue, TypeScript" },
    { icon: "⚡", name: "Backend Development", desc: "Node.js, Python, APIs" },
    { icon: "🎨", name: "UI/UX Design", desc: "Figma, Tailwind, Responsive" },
    { icon: "👥", name: "Collaboration", desc: "Git, Agile, Team Leadership" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold shadow-2xl">
              JD
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up-delay">
            Full-Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
            I create beautiful, functional web experiences that solve real problems and delight users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-slate-600 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 text-slate-400 text-2xl">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-slate-700 rounded-full hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-xl">💻</span>
                </a>
                <a href="#" className="p-3 bg-slate-700 rounded-full hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="p-3 bg-slate-700 rounded-full hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-xl">📧</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="p-6 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <skill.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-slate-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`h-48 ${project.image} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-slate-700 text-xs rounded-full text-blue-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.demo} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                    <a href={project.github} className="flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors duration-300">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:john@example.com" 
              className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center space-x-3 px-8 py-4 border border-slate-600 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
          <p>&copy; 2025 John Developer. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}