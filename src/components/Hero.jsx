import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

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
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/30 transition-all duration-500"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-secondary rounded-full"></span>
              Últimas Notícias
            </h3>
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors cursor-pointer">
                <p className="text-xs text-secondary font-bold mb-1 uppercase tracking-wider">Fórum Estadual</p>
                <h4 className="font-semibold">Femicro-PA leva demandas dos pequenos negócios ao FEMEP.</h4>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors cursor-pointer">
                <p className="text-xs text-secondary font-bold mb-1 uppercase tracking-wider">Capacitação</p>
                <h4 className="font-semibold">Parceria com Sindiclubes capacitará 500+ empreendedores em 2025.</h4>
              </div>
            </div>
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
