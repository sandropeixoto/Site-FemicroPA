import { motion } from 'framer-motion';
import { ExternalLink, Handshake } from 'lucide-react';

const partners = [
  {
    name: "COMICRO",
    role: "Confederação Nacional",
    desc: "Confederação Nacional das Microempresas e Empresas de Pequeno Porte, nossa voz em Brasília.",
    link: "https://comicro.org.br/"
  },
  {
    name: "Sindiclubes",
    role: "Parceiro Institucional",
    desc: "Sindicato dos Clubes Sociais do Pará, parceria estratégica para o desenvolvimento regional.",
    link: "https://sindiclubespa.com.br/"
  },
  {
    name: "ADVB-PA",
    role: "Marketing & Vendas",
    desc: "Associação dos Dirigentes de Vendas e Marketing do Brasil, fortalecendo a gestão comercial.",
    link: "https://advbpa.com.br/"
  },
  {
    name: "Nano Tecnologia",
    role: "Soluções Digitais",
    desc: "Empresa focada no desenvolvimento web de soluções personalizadas e inovação tecnológica.",
    link: "https://nano.net.br/"
  }
];

export default function Partners() {
  return (
    <section id="parceiros" className="py-24 px-6 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
              <Handshake className="text-secondary w-10 h-10" />
              Parceiros <span className="text-secondary">Estratégicos</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Trabalhamos em conjunto com as principais entidades e empresas para fortalecer o ecossistema empresarial do Pará.
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-secondary font-semibold flex items-center gap-2 hover:text-accent transition-colors"
          >
            Seja um parceiro <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group hover:border-accent/40 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Handshake className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 py-1 px-3 rounded-full">
                  Partner
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight">{partner.name}</h3>
              <p className="text-secondary text-sm font-semibold mb-4 uppercase tracking-tighter">{partner.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {partner.desc}
              </p>
              <div className="pt-4 border-t border-white/5">
                <a 
                  href={partner.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  VER MAIORES DETALHES <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
