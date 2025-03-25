import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    color: 'from-green-500 to-green-700',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLP', 'LLMs', 'Transformers']
  },
  {
    title: 'Data Science',
    color: 'from-yellow-500 to-yellow-700',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Data Analysis', 'Statistics', 'Data Visualization']
  },
  {
    title: 'Software Development',
    color: 'from-red-500 to-red-700',
    skills: ['Java', 'Python', 'JavaScript', 'System Design', 'Design Patterns', 'APIs']
  },
  {
    title: 'Blockchain & Web3',
    color: 'from-orange-500 to-orange-700',
    skills: ['Solidity', 'Ethereum', 'Hardhat', 'IPFS', 'Polygon', 'Smart Contracts']
  },
  {
    title: 'Cybersecurity & DevOps',
    color: 'from-blue-500 to-blue-700',
    skills: ['Ethical Hacking', 'Burp Suite', 'Metasploit', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Web Development',
    color: 'from-purple-500 to-purple-700',
    skills: ['Next.js', 'React.js', 'Tailwind CSS', 'Three.js', 'GSAP']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="skill-card bg-white/5 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white/5 rounded-lg p-3 text-gray-300 text-center hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}