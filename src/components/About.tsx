import React from 'react';
import { motion } from 'framer-motion';
import { Award, Rocket, Code2, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <p className="text-2xl text-gray-300 font-semibold">
                Hi, I'm Hrishabh Gupta – AI Developer & SDE 🚀
              </p>
              <p className="text-gray-400">
                Passionate about AI, Blockchain, Cybersecurity, and DevOps, I love building cutting-edge 
                AI-powered applications, Web3 solutions, and security tools. I thrive in hackathons and 
                tech competitions, constantly innovating and solving real-world problems using Machine 
                Learning, NLP, and Smart Contracts.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-white/10 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <Award className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Hackathon Winner</h3>
                <p className="text-gray-400">Multiple national-level achievements</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <Rocket className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Founder</h3>
                <p className="text-gray-400">Leading FinTech innovation</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Full Stack</h3>
                <p className="text-gray-400">End-to-end development</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <Brain className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">AI Expert</h3>
                <p className="text-gray-400">Deep learning specialist</p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Founder of Savingskaro</h3>
              <p className="text-gray-400 mb-4">Leading innovation in FinTech with automated savings solutions</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Developed AI-powered financial analysis tools</li>
                <li>Led a team of developers and designers</li>
                <li>Implemented secure payment processing systems</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI Developer at We360.ai</h3>
              <p className="text-gray-400 mb-4">Building the future of employee productivity monitoring</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Designed and implemented ML algorithms</li>
                <li>Created real-time analytics dashboards</li>
                <li>Optimized system performance and scalability</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}