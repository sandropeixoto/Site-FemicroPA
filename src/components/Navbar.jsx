import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="max-w-7xl mx-auto glass-card px-6 py-3 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center font-bold text-white text-xl">
            F
          </div>
          <span className="text-xl font-bold tracking-tight">Femicro-PA</span>
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          {['Início', 'Notícias', 'Serviços', 'Sobre', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-accent transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-secondary hover:bg-emerald-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
          Associar-se
        </button>

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
          {['Início', 'Notícias', 'Serviços', 'Sobre', 'Contato'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg">{item}</a>
          ))}
          <button className="w-full bg-secondary py-3 rounded-xl font-bold">Associar-se</button>
        </motion.div>
      )}
    </nav>
  );
}
