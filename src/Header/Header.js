import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);  // Стан для меню

  const LINKS = [
    { name: 'About us', section: 'about-us' },
    { name: 'Philosophy', section: 'philosophy' },
    { name: 'Contacts', section: 'contacts' },
    { name: 'Join us!', section: 'join' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Перемикаємо стан меню
  };

  return (
    <div className="App">
      <div className='desktop'>
        <a href="/" className="active-btn">ACTIVE G</a>
        <nav className={`header-navbar ${isOpen ? 'open' : ''}`}>
          <tr className="header-navbar__links-list">
            {LINKS.map(({ name, section }) => (
              <td key={name}>
                <a href={`#${section}`} className="header-navbar__link">
                  {name}
                </a>
              </td>
            ))}
          </tr>
        </nav>
        <button className="lang-btn">ENG</button>
      </div>

      <div className='mob-div'>
        <a href="/" className="ag-btn">AG</a>
        <div className="burger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {isOpen && (
        <nav className="mobile-navbar">
        <button className="lang-btn">ENG</button>
          <tr className="header-navbar__links-list">
            {LINKS.map(({ name, section }) => (
              <td key={name}>
                <a href={`#${section}`} className="header-navbar__link">
                  {name}
                </a>
              </td>
            ))}
          </tr>
        </nav>
      )}
    </div>
  );
}

export default Header;
