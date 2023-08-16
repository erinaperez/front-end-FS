import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>
      {isOpen && (
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/add-resource">add resource</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;