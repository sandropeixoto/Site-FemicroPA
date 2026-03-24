import { Globe, Mail, MessageCircle, ExternalLink, Phone, MapPin } from 'lucide-react';
import logoIcon from '../assets/LOGO-FEMICRO-PA-icon.png';

export default function Footer() {
  return (
    <footer className="bg-primary py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl overflow-hidden glass-card flex items-center justify-center p-2">
                <img src={logoIcon} alt="Femicro-PA Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Femicro-PA</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              A Federação das Associações e Entidades de Microempresas e Empresas de Pequeno Porte do Pará atua desde a fundação no fortalecimento do setor produtivo paraense.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, MessageCircle].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 glass-card flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Parceiros Estratégicos</h4>
            <ul className="space-y-3 text-slate-400">
              {['COMICRO', 'Sindiclubes', 'ADVB-PA', 'Nano Tecnologia'].map((item) => (
                <li key={item} className="flex gap-2 items-center hover:text-accent transition-colors cursor-pointer">
                  <a href="#parceiros" className="flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-3 text-slate-400">
              {['Início', 'Notícias', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                <li key={item} className="hover:text-accent transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-slate-500">
          <p>© 2025 Femicro-PA. Todos os direitos reservados. Desenvolvido com foco no empreendedorismo paraense.</p>
        </div>
      </div>
    </footer>
  );
}
