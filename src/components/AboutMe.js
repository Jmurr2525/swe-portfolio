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
          I am a young software engineer all about using cool tech to make my life just a little bit easier.
          As a recent Computer Science graduate from the University of Kansas, I've already accumulated a year of hands-on experience as a professional developer. I thrive on versatility,
          constantly expanding my skill set to become a 'swiss army knife' in the tech industry. 
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-300">
          Outside of coding, I'm an avid outdoor enthusiast—hiking trails, scaling mountains, and enjoying nature.
           I also cherish quality time with friends and family, often over a home-cooked meal. Last but not least, I am a french fry enthusiast.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8">
            <a 
              href="/Murray_Joe_Resume.pdf" 
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