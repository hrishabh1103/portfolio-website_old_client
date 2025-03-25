import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Genius AI',
    description: 'AI-powered voice assistant with automation and IOT using LLM & NLP',
    tech: ['Python', 'NLP', 'VOSK', 'Speech Recognition'],
    github: 'https://github.com/hrishabh1103/Minor2_Genius_2.0'
  },
  {
    title: 'ATLAS',
    description: 'Automated penetration testing tool for cybersecurity',
    tech: ['Python', 'Ethical Hacking', 'Automation'],
    github: 'https://github.com/hrishabh1103'
  },
  {
    title: 'Telegram AI Chatbot',
    description: 'Telegram chatbot powered by AI, which includes features such as AI chat, web search, image analysis, and sentiment analysis',
    tech: ['MongoDB', 'TensorFlow', 'Python'],
    github: 'https://github.com/hrishabh1103/Telegram_AI_Bot'
  },
  {
    title: 'Computer Vision',
    description: 'Computer_Vision_Therapist_and_Child_Detection_and_Tracking',
    tech: ['YOLOv5', 'Python', 'OpenCV'],
    github: 'https://github.com/hrishabh1103/Computer_Vision_Therapist_and_Child_Detection_and_Tracking'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}