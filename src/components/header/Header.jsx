import { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo_white.png';
import { FaHome, FaUser, FaProjectDiagram, FaMusic, FaMap, FaEnvelope, FaDesktop } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleMenuItemClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const menuItems = [
    { label: 'Home', href: '#home', icon: FaHome },
    { label: 'About', href: '#about', icon: FaUser },
    /* { label: 'Projects', href: '#projects', icon: FaProjectDiagram }, */
    { label: 'My Setup', href: '#setup', icon: FaDesktop },
    { label: 'My Songs', href: '#flstudio', icon: FaMusic },
    { label: 'My Maps', href: '#maps', icon: FaMap },
    { label: 'Contact', href: '#contact', icon: FaEnvelope }
  ];

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} className="logo-3d" />
        </div>

        {/* Name */}
        <div className="name-container">
          <h1 className="name">Asery</h1>
        </div>

        {/* Hamburger Menu */}
        <div className="menu-container">
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className={`mobile-menu ${isClosing ? 'closing' : ''}`}>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a 
                key={item.label}
                href={item.href} 
                onClick={handleMenuItemClick}
              >
                <IconComponent className="menu-icon" />
                <span className="menu-label">{item.label}</span>
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export default Header;