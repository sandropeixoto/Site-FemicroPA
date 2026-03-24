import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, FileCheck, Landmark } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Representatividade",
    desc: "Atuação direta junto a órgãos governamentais e participação no FEMEP."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Capacitação",
    desc: "Cursos especializados via PROMEI Mais, marketing, gestão e atendimento."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Networking",
    desc: "Eventos e encontros para troca de experiências e parcerias estratégicas."
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Consultoria",
    desc: "Assessoria estratégica em gestão financeira e acesso a crédito."
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Convênios",
    desc: "Acesso a condições especiais e descontos em produtos e serviços essenciais."
  }
];

export default function Services() {
  return (
    <section id="serviços" className="py-24 px-6 relative bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Nossos <span className="text-secondary">Serviços</span> & Benefícios
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Impulsionamos o crescimento e a sustentabilidade do seu negócio através de suporte especializado e representatividade forte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 hover:border-secondary/40 transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
