import {
  instagramIcon,
  githubIcon,
  linkedinIcon,
  shineIcon,
} from '../../public';
import '../styles/pages/homePage.scss';

export function HomePage() {
  return (
    <section id="home-page" className="home-page">
      <div className="background-title">
        <h1 className="title-home-page">OIE, ME CHAMO KARLA KEURIN!</h1>
        <img src={ shineIcon } alt="Shine Icon" className="shine-icon" />
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/karlakeurin/" target="_blank" rel="noreferrer">
          <img className="social-icon" src={ instagramIcon } alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/karlakeurin/" target="_blank" rel="noreferrer">
          <img className="social-icon" src={ linkedinIcon } alt="LinkedIn" />
        </a>
        <a href="https://github.com/KarlaKeurin" target="_blank" rel="noreferrer">
          <img className="social-icon" src={ githubIcon } alt="GitHub" />
        </a>
      </div>
    </section>
  );
}
