import React, { useState } from 'react';
import './Header.css';
import { useTranslation } from "react-i18next";
import LngSwitch from '../translateResourses/LngSwitch';

const LINKS = [
  { name: 'about', section: 'about-us' },
  { name: 'philosophy', section: 'philosophy' },
  { name: 'contacts', section: 'contacts' },
  { name: 'join', section: 'join' },
  { name: 'projects', section: 'projects' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "navigation" });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="navigation" className="App">
      <div className="desktop">
        <a href="/" className="active-btn">ACTIVE G</a>
        <nav className={`header-navbar ${isOpen ? 'open' : ''}`}>
          <tr className="header-navbar__links-list">
            {LINKS.map(({ name, section }) => (
              <td key={name}>
                <a href={`#${section}`} className="header-navbar__link">
                  {t(name)}
                </a>
              </td>
            ))}
          </tr>
        </nav>
        <LngSwitch /> 
      </div>

      <div className="mob-div">
        <a href="/" className="ag-btn">AG</a>
        <div className="burger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {isOpen && (
        <nav className="mobile-navbar">
          <LngSwitch />
          <tr className="header-navbar__links-list">
            {LINKS.map(({ name, section }) => (
              <td key={name}>
                <a href={`#${section}`} className="header-navbar__link">
                  {t(name)}
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
