import React from 'react';
import { Code, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Passionate Developer with 5+ Years Experience
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a full-stack developer who loves creating innovative solutions and bringing ideas to life. 
              With expertise in modern web technologies, I focus on building scalable applications that 
              provide exceptional user experiences.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">JavaScript</span>
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">React</span>
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">Node.js</span>
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">Python</span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200">
              <Code className="text-blue-400 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2 text-white">Clean Code</h4>
              <p className="text-gray-300">
                Writing maintainable, scalable code following best practices and industry standards.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200">
              <Zap className="text-blue-400 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2 text-white">Fast Learning</h4>
              <p className="text-gray-300">
                Quickly adapting to new technologies and frameworks to stay current with industry trends.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200">
              <Users className="text-blue-400 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2 text-white">Team Player</h4>
              <p className="text-gray-300">
                Collaborating effectively with cross-functional teams to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;