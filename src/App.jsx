import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import About from './components/About';
import Materials from './components/Materials';
import Social from './components/Social';
import Representation from './components/Representation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-secondary/30">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Representation />
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
