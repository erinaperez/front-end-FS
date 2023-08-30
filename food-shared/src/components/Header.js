import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-logo">
        <Link to= "/">
        <img style={{ width: "100%", height: "50%" }} src="header.png" alt="Food Shared header logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;


