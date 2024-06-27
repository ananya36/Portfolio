import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-lavender text-gray-900 py-4 px-8 shadow-md">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Ananya Bundela</Link>
        <div>
          <Link to="/about" className="mx-4 hover:text-lavender-dark">About</Link>
          <Link to="/projects" className="mx-4 hover:text-lavender-dark">Projects</Link>
          <Link to="/resume" className="mx-4 hover:text-lavender-dark">Resume</Link>
          <Link to="/contact" className="mx-4 hover:text-lavender-dark">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
