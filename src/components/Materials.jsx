import { motion } from 'framer-motion';
import { BookOpen, Download, FileText, PieChart } from 'lucide-react';

const materials = [
  {
    title: "Gestão Financeira",
    category: "E-book",
    link: "https://materiais.comicro.org.br/ebook-gestao-financeira",
    icon: <PieChart className="w-6 h-6" />
  },
  {
    title: "Atendimento com Qualidade",
    category: "E-book",
    link: "https://materiais.comicro.org.br/material-rico-e-book-atendimento-com-qualidade",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Dicas de Negociação",
    category: "E-book",
    link: "https://materiais.comicro.org.br/material-rico-e-book-dicas-e-praticas-de-negociacao",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Marketing para Negócios",
    category: "E-book",
    link: "https://materiais.comicro.org.br/material-rico-e-book-marketing-para-seu-negocio",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Estratégia de Vendas",
    category: "E-book",
    link: "https://materiais.comicro.org.br/material-rico-e-book-poderosas-dicas-de-estrategia-de-vendas",
    icon: <PieChart className="w-6 h-6" />
  },
  {
    title: "Biblioteca COMICRO",
    category: "Recursos",
    link: "https://comicro.org.br/materiais",
    icon: <Download className="w-6 h-6" />
  }
];

export default function Materials() {
  return (
    <section id="materiais" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Materiais <span className="text-secondary">Diversos</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Acesso exclusivo a E-books, Cartilhas, Planilhas e muito mais para impulsionar a gestão do seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6 flex items-center gap-6 group hover:border-secondary/40 transition-all"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.category}</span>
                <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">{item.title}</h4>
                <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                  <span>Acessar agora</span>
                  <Download className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://comicro.org.br/arquivos/81f220e40d95c410b9a7ab4832359f833d6c676e3ff90.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <FileText className="w-4 h-4" /> Ver Estatuto e Outros Arquivos Oficiais
          </a>
        </div>
      </div>
    </section>
  );
}
