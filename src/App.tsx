import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { FloatingNav } from "./components/ui/floating-navbar";
import { FloatingDock } from "./components/ui/floating-dock";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";
import NumberTicker from "./components/ui/number-ticker";
import { TracingBeam } from "./components/ui/tracing-beam";
import { EvervaultCard } from "./components/ui/evervault-card";
import { MultiStepLoader } from "./components/ui/multi-step-loader";
import { ShimmerButton } from "./components/ui/shimmer-button";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import { GlareCard } from "./components/ui/glare-card";
import { Lens } from "./components/ui/lens";
import { Building2, Phone, BookOpen, Wrench, ShieldCheck, Ruler, MessageSquare, Instagram } from "lucide-react";

const projects = [
  {
    title: "Portas de ACM",
    description: "Design imponente e durabilidade extrema para entradas principais.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2",
  },
  {
    title: "Fachadas Glazing",
    description: "Pele de vidro com isolamento térmico e acústico superior.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1",
  },
  {
    title: "Janelas Integradas",
    description: "Controle de luminosidade com persianas automatizadas.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1",
  },
  {
    title: "Guarda-corpos em Vidro",
    description: "Segurança e transparência com fixação em alumínio maciço.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2",
  },
];

const navItems = [
  { name: "Projetos", link: "#projetos", icon: <Building2 className="w-4 h-4" /> },
  { name: "Processo", link: "#processo", icon: <Wrench className="w-4 h-4" /> },
  { name: "Contato", link: "#contato", icon: <Phone className="w-4 h-4" /> },
];

const dockItems = [
  { title: "Projetos", icon: <Building2 className="w-full h-full" />, href: "#projetos" },
  { title: "Catálogo", icon: <BookOpen className="w-full h-full" />, href: "#catalogo" },
  { title: "WhatsApp", icon: <MessageSquare className="w-full h-full" />, href: "#whatsapp" },
];

const loadingStates = [
  { text: "Analisando projeto..." },
  { text: "Verificando disponibilidade técnica..." },
  { text: "Calculando dimensões e vãos..." },
  { text: "Selecionando perfis de alumínio..." },
  { text: "Preparando orçamento detalhado..." },
  { text: "Orçamento pronto!" },
];

export default function App() {
  const [loading, setLoading] = useState(false);
  const [hoveringLens, setHoveringLens] = useState(false);

  const handleSolicitarOrcamento = () => {
    window.open("https://wa.me/553534332186?text=Ol%C3%A1%2C%20gostei%20do%20seu%20servi%C3%A7o%2C%20gostaria%20de%20um%20or%C3%A7amento%20personalizado%21", "_blank");
  };

  return (
    <div className="bg-[#09090b] min-h-screen text-zinc-50 font-sans selection:bg-blue-500/30 relative">
      {/* Flickering Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <FloatingNav navItems={navItems} />
      
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[5000] md:hidden">
        <FloatingDock items={dockItems} />
      </div>

      <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={2000} loop={false} />

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern house with aluminum frames" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/50 via-[#09090b]/80 to-[#09090b]"></div>
        </div>
        <BackgroundBeamsWithCollision className="h-full relative z-10 bg-transparent">
          <div className="flex flex-col items-center justify-center text-center px-4 z-20">
          <div className="inline-block mb-4 px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Exata Esquadrias de Alumínio</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight max-w-5xl">
            <TextGenerateEffect words="Exclusividade em Esquadrias em Camanducaia." />
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light">
            Transformamos visões arquitetônicas em realidade com esquadrias de alumínio de alto desempenho, unindo sofisticação, engenharia de ponta e o rigor técnico que sua residência merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ShimmerButton onClick={handleSolicitarOrcamento} shimmerColor="#3b82f6" background="#09090b" className="font-semibold text-lg">
              Solicitar Orçamento
            </ShimmerButton>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      </div>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10 bg-zinc-950/50 backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2 flex items-center justify-center">
              +<NumberTicker value={500} />
            </div>
            <p className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Obras Entregues</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2 flex items-center justify-center">
              <NumberTicker value={100} />%
            </div>
            <p className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Alumínio Premium</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2 flex items-center justify-center">
              +<NumberTicker value={15} />
            </div>
            <p className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Anos de Experiência</p>
          </div>
        </div>
      </section>

      {/* Gallery - Bento Grid */}
      <section id="projetos" className="py-32 relative z-20 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfólio de Excelência</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Nossos projetos refletem a união perfeita entre engenharia de precisão e estética industrial.</p>
          </div>

          <BentoGrid className="max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <BentoGridItem
                key={i}
                title={project.title}
                description={project.description}
                className={project.className}
                header={
                  <CardContainer containerClassName="w-full h-full flex-1 py-0" className="w-full h-full">
                    <CardBody className="bg-transparent relative group/card w-full h-full rounded-xl p-0">
                      <CardItem translateZ="50" className="w-full h-full">
                        <GlareCard className="w-full h-full flex flex-col items-center justify-center rounded-xl overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </GlareCard>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                }
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Inspection Section - Lens */}
      <section className="py-24 relative z-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Inspecione o Acabamento</h2>
            <p className="text-zinc-400 text-lg mb-6">
              Passe o mouse sobre a imagem para inspecionar de perto a qualidade das nossas juntas, a pintura eletrostática e a precisão dos cortes. Na Exata, não há margem para erros.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-300">
                <ShieldCheck className="text-blue-500 w-5 h-5" /> Pintura Eletrostática de Alta Resistência
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <Ruler className="text-blue-500 w-5 h-5" /> Cortes a Laser com Precisão Milimétrica
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Lens hovering={hoveringLens} setHovering={setHoveringLens} zoomFactor={2} lensSize={200}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="Detalhe Esquadria"
                className="rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </Lens>
          </div>
        </div>
      </section>

      {/* Process - Tracing Beam */}
      <section id="processo" className="py-32 bg-[#09090b] relative z-20">
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            <div className="mb-16">
              <h2 className="bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold tracking-wider uppercase w-fit px-4 py-1 mb-4 border border-blue-500/30">
                Processo de Fabricação
              </h2>
              <p className="text-4xl font-bold mb-8 text-white">
                Da concepção à instalação.
              </p>
              
              <div className="space-y-12 text-zinc-400">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-3">1. Medição e Projeto Executivo</h3>
                  <p>
                    Nossa equipe técnica realiza medições a laser no local da obra. Desenvolvemos o projeto executivo detalhado, garantindo que cada esquadria se encaixe perfeitamente no vão, considerando dilatação e vedação.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-3">2. Usinagem e Montagem</h3>
                  <p>
                    Utilizamos centros de usinagem CNC para cortes precisos. A montagem é feita por profissionais altamente qualificados, utilizando componentes e acessórios de primeira linha (roldanas, fechos, borrachas EPDM).
                  </p>
                  <div className="my-6 rounded-xl overflow-hidden border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
                      alt="Usinagem CNC" 
                      className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-3">3. Instalação Especializada</h3>
                  <p>
                    A instalação é a etapa final e crucial. Nossa equipe própria garante o prumo, nível e esquadro perfeitos, além de uma vedação impecável com silicone estrutural, entregando a obra limpa e pronta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      </section>

      {/* Contact - Evervault Card */}
      <section id="contato" className="py-32 relative z-20 border-t border-white/10 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Especificações Técnicas</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Passe o mouse sobre o cartão para revelar as ligas de alumínio utilizadas, normas técnicas atendidas (ABNT NBR 10821) e detalhes de isolamento acústico.
            </p>
            <div className="flex gap-4">
              <ShimmerButton onClick={handleSolicitarOrcamento} shimmerColor="#3b82f6" background="#09090b">
                Falar com Especialista
              </ShimmerButton>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] flex justify-center">
            <EvervaultCard text="AL-6060 T5" className="w-[300px]" />
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section id="localizacao" className="py-20 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Visite nosso Showroom em Camanducaia</h2>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.076859345025!2d-46.31302832467362!3d-22.75476317933979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce99615a1132e5%3A0x6b4f74d0d81005a3!2sAv.%20Gen%C3%A9sio%20Vargas%2C%20450%20-%20Camanducaia%2C%20MG%2C%2037650-000!5e0!3m2!1spt-BR!2sbr!4v1711291326000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#09090b] relative z-20 text-center text-zinc-500">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <div className="flex items-center justify-center gap-2">
            <Building2 className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl text-white tracking-widest uppercase">Exata</span>
          </div>
          <a 
            href="https://www.instagram.com/exataesquadriasdealuminio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <p>© 2026 Exata Esquadrias de Alumínio. Todos os direitos reservados.</p>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/553534332186?text=Ol%C3%A1%2C%20gostei%20do%20seu%20servi%C3%A7o%2C%20gostaria%20de%20um%20or%C3%A7amento%20personalizado%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] group"
        aria-label="Falar no WhatsApp"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 group-hover:animate-none"></div>
        <div className="relative bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
      </a>
    </div>
  );
}
