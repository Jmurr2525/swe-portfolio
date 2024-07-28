import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsGrid from './components/ProjectsGrid';
import AboutMe from './components/AboutMe';
import { ProjectDetail } from './components/ProjectDetails';

function MainContent() {
  return (
    <>
      <TopNav />
      <main>
        <Element name="home">
          <Hero />
        </Element>
        <Element name="skills">
          <SkillsSection />
        </Element>
        <Element name="projects">
          <ProjectsGrid />
        </Element>
        <Element name="about">
          <AboutMe />
        </Element>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 text-white min-h-screen p-4" // Added padding for visibility
      >
        <AnimatePresence>
          <Routes>
            <Route path="/" element={
              <>
                <div>Debug: Main Route</div>
                <MainContent />
              </>
            } />
            <Route path="/project/:id" element={
              <>
                <div>Debug: Project Detail Route</div>
                <ProjectDetail />
              </>
            } />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </Router>
  );
}

export default App;