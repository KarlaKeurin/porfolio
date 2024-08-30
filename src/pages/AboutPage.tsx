import {
  javascript,
  typescript,
  react,
  python,
  csharp,
  figma,
  nodejs,
  sequelize,
  docker,
  mysql,
  html,
  css,
  photoAbout,
} from '../../public';
import '../styles/pages/aboutPage.scss';

export function AboutPage() {
  return (
    <section id="about-page" className="about-page">
      <div className="phrase-about">
        <h2>
          Sou uma desenvolvedora web apaixonada por tudo que envolve tecnologia e criatividade.
        </h2>
      </div>

      <div className="about">
        <div className="about-me-box">
          <img src={ photoAbout } alt="Foto de Karla Keurin" />
          <div className="text">
            <p>
              Iniciei nesse mundo da programação em 2022, quando comecei a estudar Desenvolvimento
              Web Full Stack na Trybe. Estou sempre buscando aprender cada vez mais sobre esse
              universo. Além de codar, também gosto de desenhar, cozinhar e conhecer novos lugares.
            </p>
            <p>
              Meu maior objetivo é contribuir para o desenvolvimento de soluções que impactem positivamente
              o mundo e vejo a tecnologia como um meio de influenciar e transformar a vida das pessoas.
            </p>
          </div>
        </div>

        <div className="my-skills">
          <h2>Minhas Skills</h2>
          <div className="icons">
            <img src={ javascript } alt="JavaScript icon" />
            <img src={ react } alt="" />
            <img src={ typescript } alt="TypeScript icon" />
            <img src={ python } alt="Python icon" />
            <img src={ csharp } alt="C# icon" />
            <img src={ figma } alt="Figma icon" />
            <img src={ css } alt="CSS icon" />
            <img src={ nodejs } alt="NodeJs icon" />
            <img src={ sequelize } alt="Sequelize icon" />
            <img src={ docker } alt="Docker icon" />
            <img src={ mysql } alt="MySQL icon" />
            <img src={ html } alt="HTML icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
