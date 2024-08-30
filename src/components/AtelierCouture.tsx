import { atelierCouture } from '../../public';
import { GithubButton } from './GithubButton';
import '../styles/components/atelierCouture.scss';

export function AtelierCouture() {
  return (
    <div className="atelier-couture">
      <div className="content">
        <img className="image" src={ atelierCouture } alt="TFC" />
        <div className="description">
          <h3>Atelier Couture</h3>
          <p className="text">
            Site de moda criado para um atelier de costura,
            desenvolvido com TypeScript, Sass e React. O site é responsivo e possui
            uma página de contato com um formulário de envio de mensagens.
          </p>
          <GithubButton
            href="https://github.com/KarlaKeurin/project-trybe-futebol-clube"
          />
        </div>
      </div>
    </div>
  );
}
