import { motion } from 'framer-motion';
import logosSistemas from '../assets/logos-sistemas.png';

export default function Representation() {
  return (
    <section id="representação" className="py-24 px-6 relative overflow-hidden bg-[#0a0f1e]/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 relative overflow-hidden group flex flex-col items-center text-center shadow-2xl"
        >
          {/* Background glow effects */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full group-hover:bg-accent/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full group-hover:bg-secondary/20 transition-all duration-700"></div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-8 relative z-10"
          >
            Sistema de Representação
          </motion.p>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 mb-8"
          >
            <div className="absolute inset-0 rounded-2xl bg-secondary/10 blur-3xl scale-125 group-hover:bg-secondary/20 transition-all duration-500"></div>
            <img
              src={logosSistemas}
              alt="Logomarcas do Sistema COMICRO-FEMICRO-AMICRO"
              className="relative w-full max-w-sm mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl"
            />
          </motion.div>

          <p className="relative z-10 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
            Estrutura integrada que une <span className="text-secondary font-bold">COMICRO</span>, <span className="text-accent font-bold">FEMICRO</span> e <span className="text-white/90 font-bold">AMICRO</span> em prol do empreendedorismo paraense.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
