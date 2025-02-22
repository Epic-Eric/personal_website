import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white px-24">
      {/* Subtle yellow gradient in background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-yellow-400/10 blur-[100px] h-[50vh] w-[50vw] mx-auto rounded-full"></div>
      </div>
      {showIntro ? <IntroAnimation /> : <MainContent />}
    </div>
  );
}

function IntroAnimation() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <svg 
          className="w-[600px] h-[300px]"
          viewBox="0 0 600 300"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* E path - adjusted translation */}
          <path
            d="M 50,40 
               L 160,40 
               L 160,70 
               L 70,70 
               L 70,84 
               L 140,84 
               L 140,114 
               L 70,114 
               L 70,130 
               L 160,130 
               L 160,160 
               L 50,160 
               L 50,40"
            className="traced-letter-e"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            transform="scale(1.5) translate(0, 0)"
          />
          
          {/* X path - adjusted translation */}
          <path
            d="M 235,70
               L 270,40
               L 300,40
               L 255,100
               L 300,160
               L 270,160
               L 235,130
               L 200,160
               L 170,160
               L 215,100
               L 170,40
               L 200,40
               L 235,70"
            className="traced-letter-x"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            transform="scale(1.5) translate(10, 0)"
          />
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative z-10">
      {/* Navbar - removed top margin completely */}
      <nav className="flex items-center justify-between p-6 rounded-3xl bg-black/30 backdrop-blur-sm border border-white/5">
        <div className="text-xl font-mono text-white">eric</div>
        <div className="space-x-6 py-2">
          <a href="#home" className="text-white hover:text-yellow-300 transition-colors py-1">Home</a>
          <a href="#education" className="text-white hover:text-yellow-300 transition-colors py-1">Education</a>
          <a href="#publications" className="text-white hover:text-yellow-300 transition-colors py-1">Publications</a>
          <a href="#projects" className="text-white hover:text-yellow-300 transition-colors py-1">Projects</a>
          <a href="#contact" className="text-white hover:text-yellow-300 transition-colors py-1">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-7/12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <TypeAnimation
                sequence={[
                  'Hello,',
                  400,
                  "Hello, I'm Eric!",
                ]}
                speed={50}
                className="text-8xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                cursor={true}
                style={{ 
                  display: 'inline-block',
                  fontSize: '5em',
                  lineHeight: '1.2',
                }}
              />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-xl text-white/80 mb-6"
            >
              I'm a 1st year <a href="https://engsci.utoronto.ca/program/what-is-engsci/" className="gradient-text underline-animation"> Engineering Science </a> student at the University of Toronto.
              <i> I'm passionate about Robotics, RL, and Software Engineering.</i>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <a 
                href="/Eric Tao Xie Master Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-2 rounded-full bg-black/30 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all group"
              >
                <span>View Resume</span>
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
            className="md:w-5/12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 blur-2xl opacity-20"></div>
              <img 
                src="/Eric Formal Close Up Bright.png"
                alt="Eric Xie"
                className="relative rounded-2xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Team cards on the left */}
            <div className="md:w-7/12">
              <div className="course-cards">
                <motion.div 
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-4 border border-white/5 relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative z-10">
                    <h4 className="text-xl text-white mb-2">UofT Formula Racing</h4>
                    <h5 className="text-yellow-400/70">Braking Team - Brake Piston Design</h5>
                    <p className="text-white/60 mt-2">
                      Designing brake piston components using Solidworks for the 2024 FSAE competition vehicle.
                    </p>
                  </div>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <img 
                      src="/2.Piston_Spring_Cap.jpg" 
                      alt="Brake Piston Design"
                      className="w-64 h-64 object-cover rounded-xl shadow-2xl hover-image"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-4 border border-white/5"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl text-white mb-2">UofT Aerospace Team</h4>
                  <h5 className="text-yellow-400/70">Software Team - Camera Simulation</h5>
                  <p className="text-white/60 mt-2">
                    Developing camera simulation and localization systems in Gazebo for autonomous drone navigation.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Education text on the right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:w-5/12"
            >
              <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-xl mb-4 text-white/80">
                Love the breath and depth of different engineering disciplines that EngSci offers. Passionate about combining theoretical knowledge with practical hands-on experience.
              </p>
              <p className="text-xl text-white/80">
                Check out the design teams I'm a part of!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          >
            Publications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            My research interests lie in Computer Vision and Machine Learning.
          </motion.p>
          <div className="publications-grid">
            {/* Add your publications here */}
            <p className="text-yellow-400/70">Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12"
          >
            I'm always looking to build cool things!
          </motion.p>

          {/* Project Cards */}
          <div className="space-y-20">
            {/* Project 1 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-12 hover:bg-black/10 p-6 rounded-xl transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Project Title</h3>
                <p className="text-lg mb-6">
                  Project description goes here...
                </p>
                <div className="flex gap-4">
                  <a href="#" className="btn-primary">View Project</a>
                  <a href="#" className="btn-secondary">GitHub</a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/project-image.jpg" 
                  alt="Project"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          >
            Contact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Feel free to reach out at ericxie [at] gmail [dot] com
          </motion.p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                {/* LinkedIn icon path */}
              </svg>
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                {/* GitHub icon path */}
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm font-mono">
        built by eric in react, © 2024
      </footer>
    </div>
  );
}

export default App; 

<style jsx>{`
  .overlay {
    transition: opacity 0.3s ease;
  }
  .content {
    transition: opacity 0.3s ease;
  }
  .group:hover ~ .content {
    opacity: 0.2;
  }
  .group:hover .overlay {
    opacity: 1;
  }
`}</style> 