import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Pronto para <span className="text-secondary">Fortalecer</span> seu Negócio?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Junte-se à Femicro-PA e conte com uma rede de apoio que trabalha pelo fortalecimento do empreendedorismo no Pará. Preencha o formulário e nossa equipe entrará em contato.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Phone />, label: 'WhatsApp', value: '(91) 98258-8888' },
                { icon: <Mail />, label: 'E-mail', value: 'contato@femicropa.com.br' },
                { icon: <MapPin />, label: 'Endereço', value: 'Avenida 16 de Novembro, nº 389, Cidade Velha - Belém/PA' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-8 lg:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Nome da Empresa</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all" placeholder="Sua Empresa Ltda" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">CNPJ</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all" placeholder="00.000.000/0001-00" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Nome do Responsável</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all" placeholder="Seu Nome Completo" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">E-mail</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all" placeholder="contato@exemplo.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Telefone/WhatsApp</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all" placeholder="(91) 99999-9999" />
                </div>
              </div>
              <button className="w-full bg-secondary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/20">
                <Send className="w-5 h-5" /> Enviar Pedido de Associação
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
