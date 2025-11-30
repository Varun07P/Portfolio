import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
