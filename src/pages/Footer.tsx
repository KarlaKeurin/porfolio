import '../styles/pages/footer.scss';

export function Footer() {
  return (
    <footer className="footer-container">
      <p>© Karla Keurin. Todos os direitos reservados.</p>
      <div className="social-media">
        <a href="https://www.instagram.com/karlakeurin/" target="_blank" rel="noreferrer">
          <p className="name">Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/karlakeurin/" target="_blank" rel="noreferrer">
          <p className="name">LinkedIn</p>
        </a>
        <a href="https://github.com/KarlaKeurin" target="_blank" rel="noreferrer">
          <p className="name">GitHub</p>
        </a>
      </div>
    </footer>
  );
}
