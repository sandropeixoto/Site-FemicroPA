import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import About from './components/About';
import Materials from './components/Materials';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-secondary/30">
      <Navbar />
      <main>
        <Hero />
        <Social />
        <Services />
        <Partners />
        <About />
        <Materials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
