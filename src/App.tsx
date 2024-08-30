import './App.scss'
import {
  Header,
  HomePage,
  AboutPage,
  ProjectsPage,
  ContactPage,
  Footer,
} from './pages';

function App() {
  return (
    <main>
      <Header />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </main>
  )
}

export default App
