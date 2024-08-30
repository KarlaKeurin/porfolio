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
              Iniciei nesse mundo da programação em 2022, quando comecei a estudar Desenvolvimento Web Full Stack na
              Trybe. Estou sempre buscando aprender cada vez mais sobre esse universo. Além de programar,
              também gosto de desenhar, cozinhar e conhecer novos lugares.
            </p>
            <p>
              Eu vejo a tecnologia como um meio de influenciar e mudar a vida das pessoas e meu objetivo é
              contribuir para isso, seja desenvolvendo aplicações que facilitem a vida das pessoas ou
              criando interfaces que proporcionem uma experiência agradável e intuitiva.
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
