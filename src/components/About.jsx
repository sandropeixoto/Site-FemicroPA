import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Nossa <span className="text-secondary">História</span> & Compromisso</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A Femicro-PA foi fundada para unir, representar e fortalecer os pequenos negócios do Pará. Atuamos na defesa do setor e promovemos um ambiente mais justo e competitivo para quem move a economia do nosso estado.
            </p>
            
            <div className="space-y-4">
              {[
                { title: 'Missão', text: 'Defender as micro e pequenas empresas paraenses, promovendo o associativismo e capacitação.' },
                { title: 'Visão', text: 'Ser a principal referência de apoio e representatividade para as MPEs no Pará.' },
                { title: 'Valores', text: 'Associativismo, Ética, Inovação e Transparência.' }
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6">
                  <h4 className="font-bold text-secondary mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass-card p-8 text-center aspect-square flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold mb-2">2025</h3>
              <p className="text-slate-400 text-sm">Projetos de Expansão</p>
            </div>
            <div className="glass-card p-8 text-center aspect-square flex flex-col justify-center items-center mt-8">
              <h3 className="text-3xl font-bold mb-2 text-accent">500+</h3>
              <p className="text-slate-400 text-sm">Empreendedores Alcançados</p>
            </div>
            <div className="glass-card p-8 text-center aspect-square flex flex-col justify-center items-center -mt-8">
              <h3 className="text-3xl font-bold mb-2">Pará</h3>
              <p className="text-slate-400 text-sm">Atuação em todo Estado</p>
            </div>
            <div className="glass-card p-8 text-center aspect-square flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold mb-2 text-secondary">UNIDOS</h3>
              <p className="text-slate-400 text-sm">Pelo Desenvolvimentoo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
