import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useGSAP } from './hooks/useGSAP';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  useGSAP(mainRef);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Hrishabh Gupta
          </motion.h1>
          <div className="flex gap-6">
            {[
              { Icon: Github, href: 'https://github.com/hrishabh1103' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/hrishabh1103' },
              { Icon: Twitter, href: 'https://twitter.com/hrishabh1103' },
              { Icon: Mail, href: 'mailto:hrishabhgupta.dev@gmail.com' }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:text-cyan-400 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;