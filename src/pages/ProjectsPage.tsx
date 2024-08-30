import {
  AtelierCouture,
  FutebolClube,
  RecipesBlog,
  TrybeHotel,
} from '../components';
import '../styles/pages/projectPage.scss';
import '../styles/components/githubButton.scss';

export function ProjectsPage() {
  return (
    <section id="projects-page" className="projects-page">
      <h2 className="title">Projetos</h2>
      <div className="projects-list">
        <AtelierCouture />
        <FutebolClube />
        <RecipesBlog />
        <TrybeHotel />
      </div>
    </section>
  );
}
