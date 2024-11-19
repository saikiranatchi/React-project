import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isAuthenticated, handleLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleProtectedLink = (e, path) => {
    if (!isAuthenticated) {
      e.preventDefault();
      alert('Please log in to access this page');
      navigate('/login');
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
    setIsMenuOpen(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">CitySanctum</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'} {/* Toggle between open and close icons */}
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={(e) => handleProtectedLink(e, '/home')}>Home</Link></li>
        <li><Link to="/destination" onClick={(e) => handleProtectedLink(e, '/destination')}>Destinations</Link></li>
        <li><Link to="/contact" onClick={(e) => handleProtectedLink(e, '/contact')}>Contact</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        ) : (
          <li onClick={handleLogoutClick} className="logout-button">Logout</li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
