import { motion } from 'framer-motion';
import logoFemicro from '../assets/LOGO-FEMICRO-PA.png';
import logoComicro from '../assets/logo-comicro.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="max-w-7xl mx-auto glass-card px-6 py-3 flex justify-between items-center backdrop-blur-xl bg-slate-950/50"
      >
        <div className="flex items-center">
          <img src={logoFemicro} alt="Femicro-PA Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-accent transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <img src={logoComicro} alt="Comicro Logo" className="hidden md:block h-10 w-auto object-contain" />
          <button className="hidden md:block bg-secondary hover:bg-emerald-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
            Associar-se
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass-card p-6 flex flex-col gap-4"
        >
          {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg">{item}</a>
          ))}
          <div className="flex items-center justify-center gap-4 py-2 border-t border-white/10">
            <img src={logoComicro} alt="Comicro Logo" className="h-8 w-auto object-contain" />
          </div>
          <button className="w-full bg-secondary py-3 rounded-xl font-bold">Associar-se</button>
        </motion.div>
      )}
    </nav>
  );
}
