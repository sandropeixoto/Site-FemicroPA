import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Phone, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  companyName: z.string().min(2, 'O nome da empresa é obrigatório'),
  cnpj: z.string().min(18, 'CNPJ incompleto (ex: 00.000.000/0001-00)'),
  responsibleName: z.string().min(2, 'O nome do responsável é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(14, 'Telefone incompleto (ex: (91) 99999-9999)'),
});

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const API_URL = 'https://mail-proxy-has46dauxa-rj.a.run.app';

  const maskCNPJ = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const handleCnpjChange = (e) => {
    const masked = maskCNPJ(e.target.value);
    setValue('cnpj', masked, { shouldValidate: true });
  };

  const handlePhoneChange = (e) => {
    const masked = maskPhone(e.target.value);
    setValue('phone', masked, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setStatus('loading');

    const payload = {
      name: data.responsibleName,
      email: data.email,
      phone: data.phone,
      message: `Pedido de Associação - Empresa: ${data.companyName} | CNPJ: ${data.cnpj}`,
    };

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar mensagem');
      }

      setStatus('success');
      reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-24 px-6 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Pronto para <span className="text-secondary">Fortalecer</span> seu Negócio?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Junte-se à Femicro-PA e conte com uma rede de apoio que trabalha pelo fortalecimento do empreendedorismo no Pará. Preencha o formulário e nossa equipe entrará em contato.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Phone />, label: 'WhatsApp', value: '(91) 98111-4200' },
                { icon: <Mail />, label: 'E-mail', value: 'secretaria@femicropa.com.br' },
                { icon: <MapPin />, label: 'Endereço', value: 'Av. Governador José Malcher, 168 - Nazaré, Belém - PA' }
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
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-12 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center text-center justify-center h-full py-12"
                >
                  <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pedido Enviado!</h3>
                  <p className="text-slate-400 mb-8">Recebemos sua solicitação. Nossa equipe entrará em contato em breve.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all font-semibold"
                  >
                    Enviar Novo Pedido
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="companyName" className="text-sm font-medium text-slate-400">Nome da Empresa</label>
                      <input 
                        id="companyName"
                        {...register('companyName')}
                        className={`w-full bg-white/5 border ${errors.companyName ? 'border-rose-500/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all`} 
                        placeholder="Sua Empresa Ltda" 
                      />
                      {errors.companyName && <p className="text-xs text-rose-500">{errors.companyName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cnpj" className="text-sm font-medium text-slate-400">CNPJ</label>
                      <input 
                        id="cnpj"
                        {...register('cnpj')}
                        onChange={handleCnpjChange}
                        className={`w-full bg-white/5 border ${errors.cnpj ? 'border-rose-500/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all`} 
                        placeholder="00.000.000/0001-00" 
                      />
                      {errors.cnpj && <p className="text-xs text-rose-500">{errors.cnpj.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="responsibleName" className="text-sm font-medium text-slate-400">Nome do Responsável</label>
                    <input 
                      id="responsibleName"
                      {...register('responsibleName')}
                      className={`w-full bg-white/5 border ${errors.responsibleName ? 'border-rose-500/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all`} 
                      placeholder="Seu Nome Completo" 
                    />
                    {errors.responsibleName && <p className="text-xs text-rose-500">{errors.responsibleName.message}</p>}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-400">E-mail</label>
                      <input 
                        id="email"
                        {...register('email')}
                        className={`w-full bg-white/5 border ${errors.email ? 'border-rose-500/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all`} 
                        placeholder="contato@exemplo.com" 
                      />
                      {errors.email && <p className="text-xs text-rose-500">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-400">Telefone/WhatsApp</label>
                      <input 
                        id="phone"
                        {...register('phone')}
                        onChange={handlePhoneChange}
                        className={`w-full bg-white/5 border ${errors.phone ? 'border-rose-500/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all`} 
                        placeholder="(91) 99999-9999" 
                      />
                      {errors.phone && <p className="text-xs text-rose-500">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-rose-500 bg-rose-500/10 p-4 rounded-xl text-sm"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p>Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente ou entre em contato via WhatsApp.</p>
                    </motion.div>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-secondary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Processando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Enviar Pedido de Associação
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
