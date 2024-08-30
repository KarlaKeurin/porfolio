/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import '../styles/pages/header.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="nav-bar">
        <a href="#home-page" className="logo-text">Karla Keurin</a>
        <button className="menu-toggle" onClick={ toggleMenu }>
          ☰
        </button>
        <div className={ `nav-list ${isMenuOpen ? 'open' : ''}` }>
          <ul>
            <li><a href="#about-page" onClick={ handleMenuItemClick }>Sobre mim</a></li>
            <li><a href="#projects-page" onClick={ handleMenuItemClick }>Projetos</a></li>
            <li><a href="#contact-page" onClick={ handleMenuItemClick }>Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
