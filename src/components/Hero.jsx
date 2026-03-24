import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import logosSistemas from '../assets/logos-sistemas.png';

export default function Hero() {
  return (
    <section id="início" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Entrepreneurship in Para" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold border border-secondary/20 mb-6"
          >
            FORTALECENDO O PARÁ
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Femicro-PA: O Futuro do <span className="text-accent">Empreendedorismo</span> Paraense.
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-xl">
            A sua voz na defesa e no desenvolvimento das micro e pequenas empresas do Pará. Unindo forças para um ambiente de negócios próspero.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-secondary text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20">
              Conheça Nossos Serviços
            </button>
            <button className="px-8 py-4 glass-card font-bold hover:bg-white/10 transition-all">
              Sobre a Federação
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-8 relative overflow-hidden group flex flex-col items-center text-center">
            {/* Background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/30 transition-all duration-500"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 blur-3xl rounded-full group-hover:bg-secondary/20 transition-all duration-500"></div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs font-bold tracking-[0.25em] text-secondary uppercase mb-6"
            >
              Sistema de Representação
            </motion.p>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="absolute inset-0 rounded-2xl bg-secondary/10 blur-2xl scale-110 group-hover:bg-secondary/20 transition-all duration-500"></div>
              <img
                src={logosSistemas}
                alt="Logomarcas do Sistema COMICRO-FEMICRO-AMICRO"
                className="relative w-full max-w-xs mx-auto drop-shadow-2xl rounded-xl"
              />
            </motion.div>

            <p className="relative z-10 mt-6 text-sm text-slate-400 leading-relaxed max-w-xs">
              Estrutura integrada que une <span className="text-secondary font-semibold">COMICRO</span>, <span className="text-accent font-semibold">FEMICRO</span> e <span className="text-white/80 font-semibold">AMICRO</span> em prol do empreendedorismo paraense.
            </p>
          </div>


          {/* Floating Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 glass-card p-6 border-secondary/30 hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-slate-400">Empresas Capacitadas</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
