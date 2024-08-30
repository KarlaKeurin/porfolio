import { tastemade } from '../../public';
import { GithubButton } from './GithubButton';
import '../styles/components/RecipesBlog.scss';

export function RecipesBlog() {
  return (
    <div className="recipes-blog">
      <div className="content">
        <img className="image" src={ tastemade } alt="Project 3" />
        <div className="description">
          <h3>Tastemade</h3>
          <p className="text">
            Tastemade é uma aplicação de receitas online que permite visualizar, buscar,
            filtrar e favoritar receitas. A plataforma integra-se com uma API externa
            para fornecer todas as informações detalhadas das receitas.
          </p>
          <GithubButton
            href="https://github.com/KarlaKeurin/blog-de-receitas"
          />
        </div>
      </div>
    </div>
  );
}
