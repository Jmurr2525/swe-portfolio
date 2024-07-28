import React from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-white">
            About Me
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-300">
            I'm a passionate software developer with a keen interest in creating efficient and innovative solutions. 
            My journey in tech has led me to explore various areas including machine learning, data manipulation, and process automation.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            and staying up-to-date with the latest trends in software development.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8">
            <a 
              href="/path-to-your-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              View My Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;