import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-secondary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Partners />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
