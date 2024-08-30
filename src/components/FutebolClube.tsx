import { tfc } from '../../public';
import { GithubButton } from './GithubButton';
import '../styles/components/futebolClube.scss';

export function FutebolClube() {
  return (
    <div className="futebol-clube">
      <div className="content">
        <div className="description">
          <h3>Trybe Futebol Clube</h3>
          <p className="text">
            Site informativo sobre partidas e classificações de futebol.
            Foi desenvolvido uma API, utilizando o método TDD, e as aplicações foram
            integradas através do Docker Compose para que elas funcionem
            consumindo um banco de dados.
          </p>
          <GithubButton
            href="https://github.com/KarlaKeurin/atelier-couture"
          />
        </div>
        <img className="image" src={ tfc } alt="Atelier Couture" />
      </div>
    </div>
  );
}
