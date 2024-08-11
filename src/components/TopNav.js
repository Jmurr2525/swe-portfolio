import React from 'react';
import { Link } from 'react-scroll';

const NavItem = ({ to, children }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    className="text-white hover:text-purple-400 transition-all duration-300 cursor-pointer"
  >
    {children}
  </Link>
);

function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="home" smooth={true} duration={500} className="text-white text-2xl font-bold cursor-pointer">
            JM
          </Link>
          <div className="space-x-6">
            <NavItem to="skills">Skills</NavItem>
            <NavItem to="projects">Projects</NavItem>
            <NavItem to="about">About</NavItem>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;