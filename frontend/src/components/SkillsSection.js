import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { motion } from 'framer-motion';

function SkillCard({ title, items }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="p-[2px] rounded-lg overflow-hidden relative"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.8) 0%, rgba(147, 51, 234, 0.8) 50%, rgba(236, 72, 153, 0.8) 100%)`,
      }}
    >
      <div className="bg-gray-900 p-4 rounded-lg h-full"> {/* Changed to bg-gray-900 */}
        <h3 className="text-lg font-bold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          {title}
        </h3>
        <ul className="list-none space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-gray-300 text-center text-sm">{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function SkillsSection() {
  const skills = [
    {
      title: "Dev Tools",
      items: ["Git", "Linux", "PyTorch", "Firebase", "Flutter"]
    },
    {
      title: "Languages",
      items: ["Python", "C++", "React", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Areas of Interest",
      items: [" - Machine Learning/AI applications", " - Data extraction and manipulation", " - Process Automation", " - Natural Language Processing (NLP)"," - Computer Vision"]
    } 
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Skills
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <ScrollAnimation key={index}>
              <SkillCard title={skill.title} items={skill.items} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;