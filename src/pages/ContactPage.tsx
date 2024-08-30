import {
  instagramIcon,
  githubIcon,
  linkedinIcon,
  emailIcon,
} from '../../public';
import '../styles/pages/contactPage.scss';

export function ContactPage() {
  return (
    <section id="contact-page" className="contact-page">
      <div className="contact-box">
        <h2>Vamos nos conectar!</h2>
        <p>
          Se sinta à vontade para me seguir nas redes sociais e enviar uma mensagem.
          Vamos construir algo incrível juntos!
        </p>
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
          <a href="mailto:devkarlakeurin@gmail.com" target="_blank" rel="noreferrer">
            <img className="social-icon" src={ emailIcon } alt="Email" />
          </a>
        </div>
      </div>
    </section>
  );
}
