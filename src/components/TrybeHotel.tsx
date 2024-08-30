import { trybeHotel } from '../../public';
import { GithubButton } from './GithubButton';
import '../styles/components/trybeHotel.scss';

export function TrybeHotel() {
  return (
    <div className="trybe-hotel">
      <div className="content">
        <div className="description">
          <h3>Trybe Hotel</h3>
          <p className="text">
            Software de reserva que gerencia diversas redes de hotéis, controlando
            cidades, hotéis e quartos disponíveis, tembém é possível encontrar os
            hotéis mais próximos com base em um endereço. Foi utilizado JWT e
            ASP.NET integrado ao C#.
          </p>
          <GithubButton
            href="https://github.com/KarlaKeurin/trybe-hotel"
          />
        </div>
        <img className="image" src={ trybeHotel } alt="Trybe Hotel" />
      </div>
    </div>
  );
}
