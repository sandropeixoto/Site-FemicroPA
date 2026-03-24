import { motion } from 'framer-motion';
import { Camera, Play, Heart, ExternalLink } from 'lucide-react';

const feeds = [
  {
    id: "DMfWFWlxH-t",
    type: "Reel",
    link: "https://www.instagram.com/reel/DMfWFWlxH-t/?igsh=MWR4Zm9iN2t0YzAyMA=="
  },
  {
    id: "DNHHe1ENHXR",
    type: "Reel",
    link: "https://www.instagram.com/reel/DNHHe1ENHXR/?igsh=dDgxZWJkMXU1em1o"
  },
  {
    id: "DNA7pQhOVXE",
    type: "Post",
    link: "https://www.instagram.com/p/DNA7pQhOVXE/?igsh=MWtmMTBkenpvd2xzOA=="
  }
];

export default function Social() {
  return (
    <section className="py-24 px-6 bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <Camera className="text-pink-500 w-10 h-10" />
              Siga @<span className="text-secondary text-pink-500">FemicroPA</span>
            </h2>
            <p className="text-slate-400">
              Acompanhe nossas atividades diárias e novidades do setor através das redes sociais.
            </p>
          </div>
          
          <a 
            href="https://www.instagram.com/femicropa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 glass-card flex items-center gap-2 hover:bg-pink-500/10 transition-all font-bold group"
          >
            Abrir Instagram <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {feeds.map((feed, idx) => (
            <motion.a
              key={idx}
              href={feed.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl glass-card group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent z-10"></div>
              
              {/* Fake Preview Background */}
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                 <Camera className="w-16 h-16 text-white/10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white">
                    {feed.type === "Reel" ? <Play className="w-4 h-4" /> : <Heart className="w-4 h-4" />}
                  </div>
                  <span className="font-bold text-sm tracking-widest">{feed.type}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">Destaque Femicro-PA</h4>
                <p className="text-sm text-slate-400">Clique para visualizar o conteúdo completo no Instagram.</p>
              </div>

              <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-pink-500 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
