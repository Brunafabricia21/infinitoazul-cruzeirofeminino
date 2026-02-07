import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Users, 
  X, 
  ArrowRight, 
  Menu, 
  Heart, 
  Star, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram 
} from 'lucide-react';
import { Destination, Feature } from './types';

// --- Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinos', href: '#destinos' },
    { name: 'A Essência', href: '#essencia' },
    { name: 'Sobre', href: '#empresa' }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? 'bg-[#000a1a]/90 backdrop-blur-md shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center group cursor-pointer" 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}
          >
            <span className="text-2xl font-geometric font-black uppercase tracking-tighter text-white transition-colors duration-500">
              Infinito <span className="text-cyan-400">Azul</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-bold uppercase tracking-widest text-xs transition-all text-white/80 hover:text-cyan-400 relative overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            ))}
            <a 
              href="#contato-final"
              onClick={(e) => handleSmoothScroll(e, '#contato-final')}
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2"
            >
              Fale Conosco
            </a>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[40] transition-all duration-500 md:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-blue-900/95 backdrop-blur-xl" onClick={closeMenu}></div>
        <div className={`absolute top-0 right-0 h-full w-[80%] bg-[#000a1a] shadow-2xl transition-transform duration-500 ease-out flex flex-col p-12 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex-1 flex flex-col gap-8 justify-center">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-2xl font-geometric font-black text-white hover:text-cyan-500 transition-all transform hover:translate-x-2"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato-final"
              onClick={(e) => handleSmoothScroll(e, '#contato-final')}
              className="mt-4 bg-cyan-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl"
            >
              Fale Conosco
            </a>
          </div>
          <div className="pt-8 border-t border-white/10">
             <div className="flex gap-4">
                <span className="text-white font-geometric font-black uppercase tracking-tighter">Infinito Azul</span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero: React.FC = () => {
  const scrollToDestinos = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.getElementById('destinos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1920" 
          alt="Cruzeiro de Luxo Feminino" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000a1a]/40 via-transparent to-[#000a1a]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <span className="font-bold uppercase tracking-widest text-xs mb-6 inline-block px-6 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 animate-fade-in">
          Exclusivo para mulheres
        </span>
        <h1 className="text-6xl md:text-9xl font-geometric font-black uppercase tracking-tighter mb-8 animate-fade-in leading-[0.9]">
          NAVEGUE NO <br />
          <span className="text-cyan-400">INFINITO AZUL</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-slate-200 leading-relaxed font-light tracking-wide animate-fade-in-up">
          Rotina cansa, navegar cura. <span className="text-cyan-400 font-bold italic">Te vejo a bordo</span>
        </p>
        <div className="flex justify-center animate-fade-in-up delay-300">
          <a 
            href="#destinos" 
            onClick={scrollToDestinos}
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-12 py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all hover:-translate-y-1 hover:shadow-cyan-400/20 active:scale-95"
          >
            Explorar Destinos
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

const FinalContactSection: React.FC = () => {
  return (
    <section id="contato-final" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Lado Esquerdo - Info de Contato (Simétrico) */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <span className="text-[#00AEEF] font-bold uppercase tracking-widest text-xs mb-6 block">FALE CONOSCO</span>
              <h2 className="text-4xl md:text-6xl font-geometric font-black uppercase tracking-tighter text-white leading-tight mb-8">
                PRONTO PARA SUA <br />
                <span className="text-[#00AEEF]">PRÓXIMA AVENTURA?</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed max-w-md">
                 Entre em contato e receba uma consultoria personalizada.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#001B48] flex items-center justify-center text-[#00AEEF] shadow-lg border border-white/5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-geometric font-black uppercase text-sm tracking-tight">Telefone / WhatsApp</h4>
                  <p className="text-slate-400 text-sm font-medium">+55 (91) 98904-5703</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#001B48] flex items-center justify-center text-[#00AEEF] shadow-lg border border-white/5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-geometric font-black uppercase text-sm tracking-tight">E-mail</h4>
                  <p className="text-slate-400 text-sm font-medium">contato@agenciainfinitoazul.com.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#001B48]/30 border border-white/10 rounded-[3rem] p-10 md:p-14 backdrop-blur-xl shadow-2xl relative">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="font-bold uppercase tracking-widest text-xs mb-3 block text-[#00AEEF]/80 ml-1">NOME COMPLETO</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-[#000a1a]/50 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-[#00AEEF] transition-all text-white placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-bold uppercase tracking-widest text-xs mb-3 block text-[#00AEEF]/80 ml-1">E-MAIL</label>
                  <input 
                    type="email" 
                    placeholder="exemplo@email.com"
                    className="w-full bg-[#000a1a]/50 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-[#00AEEF] transition-all text-white placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-bold uppercase tracking-widest text-xs mb-3 block text-[#00AEEF]/80 ml-1">CONTATO (TEL/WHATSAPP)</label>
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full bg-[#000a1a]/50 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-[#00AEEF] transition-all text-white placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-bold uppercase tracking-widest text-xs mb-3 block text-[#00AEEF]/80 ml-1">VALOR POR PESSOA A PARTIR DE:</label>
                  <select 
                    className="w-full bg-[#000a1a]/50 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-[#00AEEF] transition-all text-white appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#001B48]">Selecione um valor</option>
                    <option value="5000" className="bg-[#001B48]">R$ 6.000,00</option>
                    <option value="7500" className="bg-[#001B48]">R$ 7.500,00</option>
                    <option value="10000" className="bg-[#001B48]">R$ 10.000,00</option>
                    <option value="15000" className="bg-[#001B48]">R$ 15.000,00+</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="font-bold uppercase tracking-widest text-xs mb-3 block text-[#00AEEF]/80 ml-1">ESCOLHA SUA SAÍDA</label>
                  <select 
                    className="w-full bg-[#000a1a]/50 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-[#00AEEF] transition-all text-white appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#001B48]">Selecione uma saída</option>
                    <option value="santos" className="bg-[#001B48]">Santos - 05/12</option>
                    <option value="salvador" className="bg-[#001B48]">Salvador - 08/12</option>
                    <option value="maceio" className="bg-[#001B48]">Maceió - 09/12</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-[#00AEEF] hover:bg-[#0092c8] text-white py-6 rounded-2xl font-geometric font-black uppercase text-base transition-all shadow-xl shadow-cyan-500/10 flex items-center justify-center gap-3 group active:scale-[0.98]">
                    Enviar Solicitação
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="empresa" className="py-24 relative overflow-hidden scroll-mt-24 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div>
              <span className="font-bold uppercase tracking-widest text-xs mb-6 block text-cyan-400">Sobre nós</span>
              <h2 className="text-4xl md:text-5xl font-geometric font-black uppercase tracking-tighter leading-tight mb-6 animate-fade-in text-white">
                O comando delas. <br /><span className="text-cyan-400">Uma jornada 100% feminina.</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed italic">
                " Atendimento especializado. Cuidamos de cada detalhe para que você só viva a experiência. Cuidamos de tudo com profissionalismo e carinho, para você viajar com tranquilidade. Planejamento impecável, suporte completo e atenção personalizada para você. Você merece um atendimento à altura dos seus sonhos. Nós entregamos."
              </p>
            </div>

            <div className="flex gap-16 pt-4 border-t border-white/10">
              <div className="transform hover:scale-110 transition-transform">
                <p className="text-5xl font-geometric font-black text-cyan-400 mb-1">100%</p>
                <p className="font-bold uppercase tracking-widest text-[10px] text-slate-500">Equipe Feminina</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative flex flex-col items-center lg:items-center gap-10 w-full">
            {/* Logo da Agência */}
            <div className="flex flex-col items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
              <div className="text-center">
                <h3 className="text-2xl font-geometric font-black uppercase tracking-tighter text-white">Infinito <span className="text-cyan-400">Azul</span></h3>
                <p className="font-bold uppercase tracking-[0.3em] text-[8px] text-slate-500">Viagens Exclusivas</p>
              </div>
            </div>

            {/* Imagem Estática e Reduzida - Selo removido conforme solicitado */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-3xl w-full max-w-xs lg:max-w-sm border border-white/10 relative">
              <img 
                src="https://i.imgur.com/SY8SAhK.png" 
                alt="Equipe Infinito Azul" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  const items: Feature[] = [
    {
      title: 'Sororidade',
      description: 'Programação voltada para a troca de experiências, workshops de liderança e círculos de fala.',
      icon: <Heart className="w-7 h-7 text-cyan-500" />
    },
    {
      title: 'Segurança',
      description: 'Tripulação treinada em protocolos de acolhimento e proteção específica para o público feminino.',
      icon: <ShieldCheck className="text-cyan-400 w-7 h-7" />
    },
    {
      title: 'Bem-Estar',
      description: 'Spas, yoga ao pôr do sol e gastronomia pensada para o equilíbrio da mente feminina.',
      icon: <Star className="w-7 h-7 text-cyan-500" />
    },
    {
      title: 'Conexões',
      description: 'Viaje acompanhada ou sozinha. Criamos pontes seguras entre mulheres inspiradoras.',
      icon: <Users className="w-7 h-7 text-cyan-500" />
    }
  ];

  return (
    <section id="essencia" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <span className="font-bold uppercase tracking-widest text-xs mb-6 block text-cyan-400">A Essência Infinito Azul</span>
          <h2 className="text-4xl md:text-5xl font-geometric font-black uppercase tracking-tighter mb-6 text-white">Por que um cruzeiro <span className="text-cyan-400">exclusivo</span>?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light tracking-wide italic">
            Para que você possa ser quem você é, sem julgamentos, em total liberdade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {items.map((feat, i) => (
            <div key={i} className="text-center p-10 bg-white/5 rounded-[3rem] shadow-sm hover:shadow-2xl hover:bg-white/[0.08] transition-all cursor-default group border border-white/5 transform hover:-translate-y-2 duration-500 backdrop-blur-sm">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner transform group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-lg font-geometric font-black uppercase tracking-tight text-white mb-4">{feat.title}</h3>
              <p className="text-slate-400 text-[13px] leading-relaxed font-light tracking-wide">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Destinations: React.FC = () => {
  const items: Destination[] = [
    {
      id: '1',
      title: 'Saída de: Santos',
      description: 'Explore o litoral paulista com paradas exclusivas e jantares sofisticados a bordo.',
      image: 'https://i.imgur.com/3biuXaC.jpeg',
      price: 'a partir de: R$ 6.000',
      duration: '07 Dias'
    },
    {
      id: '2',
      title: 'SAIDA DE: Salvador',
      description: 'Uma imersão na cultura e energia baiana, com workshops de dance e bem-estar.',
      image: 'https://i.imgur.com/iLR0bcS.jpeg',
      price: 'a partir de: R$ 6.000',
      duration: '07 Dias'
    },
    {
      id: '3',
      title: 'SAIDA DE: Maceió',
      description: 'O paraíso das águas cristalinas combinado com meditação matinal exclusiva.',
      image: 'https://i.imgur.com/qNWvGXv.jpeg',
      price: 'a partir de: R$ 6.000',
      duration: '07 Dias'
    }
  ];

  return (
    <section id="destinos" className="py-32 relative overflow-hidden scroll-mt-24 border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 animate-fade-in">
          <div className="max-w-xl">
            <span className="font-bold uppercase tracking-widest text-xs mb-6 block text-cyan-400">DESTINOS</span>
            <h2 className="text-4xl md:text-5xl font-geometric font-black uppercase tracking-tighter text-white mb-5 leading-tight">Experiências Desenhadas <br /><span className="text-cyan-400">para Você</span></h2>
            <p className="text-slate-400 text-lg font-light italic tracking-wide">Conheça vários destinos em uma única viagem</p>
          </div>
          <button className="bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white/10 transition-all border border-white/10 group transform active:scale-95">
            Ver Catálogo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((dest, index) => (
            <div 
              key={dest.id} 
              className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-700 flex flex-col h-full"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-[3rem] mb-8 shadow-2xl aspect-[3/4] sm:aspect-[4/5] bg-white/5 flex-shrink-0">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-[#000a1a]/80 backdrop-blur-md px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-[10px] text-white shadow-xl">
                    {dest.duration}
                  </span>
                </div>
                <div className="absolute inset-x-8 bottom-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a 
                    href="#contato-final" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contato-final')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-center w-full bg-cyan-500 text-white py-4.5 rounded-[1.5rem] text-xs font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-cyan-400 transition-all"
                  >
                    Garantir Vaga
                  </a>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-geometric font-black uppercase tracking-tight text-white mb-3 group-hover:text-cyan-400 transition-colors">{dest.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light tracking-wide line-clamp-3">{dest.description}</p>
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="font-bold uppercase tracking-widest text-[10px] text-slate-500">Investimento</span>
                  <span className="text-xl font-geometric font-black text-cyan-400 tracking-tighter">{dest.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:col-span-4 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-10">
              <span className="text-2xl font-geometric font-black uppercase tracking-tighter text-white">Infinito <span className="text-cyan-400">Azul</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-10 font-light italic text-slate-400 pr-4">
              "A rotina pesa. O mar abraça. Vem viver o seu infinito azul. Te espero a bordo. Desacelere a rotina. Desperte sua essência. Navegue com a Infinito Azul empoderar e encantar mulheres em alto mar."
            </p>
            <div className="flex gap-5">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all cursor-pointer shadow-lg group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all cursor-pointer shadow-lg group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 block text-white">A Jornada</h4>
            <ul className="space-y-5 text-xs font-light tracking-widest text-slate-400">
              <li><a href="#destinos" className="hover:text-cyan-400 transition-colors">Destinos 2025</a></li>
              <li><a href="#essencia" className="hover:text-cyan-400 transition-colors">A Essência</a></li>
              <li><a href="#comunidade" className="hover:text-cyan-400 transition-colors">Viajar Sozinha</a></li>
              <li><a href="#empresa" className="hover:text-cyan-400 transition-colors">Comunidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 block text-white">Apoio</h4>
            <ul className="space-y-5 text-xs font-light tracking-widest text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Central da Viajante</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Políticas</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 block text-white">Fique por dentro</h4>
            <p className="text-xs mb-8 font-light leading-relaxed tracking-wide text-slate-400">Receba convites exclusivos para nossos encontros pré-viagem.</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex-1 text-xs focus:ring-1 focus:ring-cyan-400 outline-none text-white placeholder:text-slate-600"
              />
              <button className="bg-cyan-500 text-white px-5 py-4 rounded-xl hover:bg-cyan-400 transition-all shadow-lg active:scale-95">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center">
          <p className="font-bold uppercase tracking-widest text-[9px] text-slate-700">© 2025 Infinito Azul Viagens Exclusivas. Juntas navegamos mais longe.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Seção 2: Introdução / Comunidade */}
      <section id="comunidade" className="py-32 relative overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
            <img 
              src="https://i.imgur.com/AE3qTqL.jpeg" 
              alt="Mulheres celebrando" 
              className="rounded-[4rem] shadow-3xl relative z-10 border-8 border-white/5 group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute -bottom-10 -right-10 bg-[#001B48] text-white p-10 rounded-[2.5rem] z-20 shadow-2xl max-w-xs border border-white/5 transform group-hover:-translate-y-2 transition-transform duration-500 backdrop-blur-md">
               <p className="text-lg italic mb-4 leading-relaxed font-light">"Aqui, eu não era apenas uma passageira. Eu era parte de algo maior."</p>
               <p className="font-geometric font-black uppercase tracking-widest text-[10px] text-cyan-400">— Cliente Infinito Azul</p>
            </div>
          </div>
          <div className="space-y-10">
            <span className="font-bold uppercase tracking-widest text-xs mb-6 block text-cyan-400 animate-pulse">Liberdade Feminina</span>
            <h2 className="text-4xl md:text-6xl font-geometric font-black uppercase tracking-tighter text-white leading-[1.15]">Um oceano de <br /> possibilidades para <span className="text-cyan-400">você</span> ser você.</h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed tracking-wide">
              Na Infinito Azul, entendemos que viajar é mais do que conhecer novos lugares; é sobre se reconectar consigo mesma. Nossos cruzeiros eliminam preocupações com segurança e isolamento, criando um ecossistema de apoio.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-6">
              <div className="flex gap-4 group">
                <div className="bg-white/5 p-3 rounded-2xl h-fit shadow-sm group-hover:bg-white/10 transition-colors border border-white/5">
                  <ShieldCheck className="text-cyan-400 w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-geometric font-black uppercase text-sm tracking-tight text-white">100% Feminino</h4>
                  <p className="text-slate-500 text-xs font-medium">Da tripulação à consultoria.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-white/5 p-3 rounded-2xl h-fit shadow-sm group-hover:bg-white/10 transition-colors border border-white/5">
                  <Users className="text-cyan-400 w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-geometric font-black uppercase text-sm tracking-tight text-white">Círculos de Fala</h4>
                  <p className="text-slate-500 text-xs font-medium">Trocas genuínas a bordo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Destinos */}
      <Destinations />

      {/* Seção 4: A Essência */}
      <Features />

      {/* Seção Final com Formulário Integrado */}
      <FinalContactSection />

      {/* Seção Sobre a Empresa */}
      <AboutSection />

      <Footer />
    </div>
  );
}

export default App;