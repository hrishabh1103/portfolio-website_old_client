import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Founder',
    company: 'Savingskaro',
    period: 'Present',
    description: 'Building a FinTech platform for automated savings'
  },
  {
    title: 'AI Developer',
    company: 'We360.ai',
    period: 'Present',
    description: 'Developing AI-driven employee monitoring systems'
  },
  {
    title: 'Data Science Intern',
    company: 'Next24 Technology',
    period: '2024',
    description: 'Worked on AI models for analytics'
  },
  {
    title: 'Devops Intern',
    company: 'Cloud Nexus',
    period: '2024',
    description: 'Implemented cloud automation and CI/CD pipelines, optimizing deployment efficiency.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500">
                <div className="absolute -left-1.5 top-0 w-4 h-4 rounded-full bg-purple-500" />
              </div>
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-purple-400">{exp.title}</h3>
                <p className="text-cyan-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}