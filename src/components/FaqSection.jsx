import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "¿Cuánto tiempo tengo acceso al contenido?",
      a: "El acceso al curso es de por vida. La comunidad, soporte y mentorías dependen del nivel que elijas (Inicio, Impulso o Elite).",
    },
    {
      q: "¿Las mentorías son en vivo?",
      a: "Sí. Cada nivel incluye mentorías grupales o privadas en vivo, donde resolvemos casos reales y bloqueos concretos.",
    },
    {
      q: "¿Funciona en Paraguay?",
      a: "Sí. El sistema está adaptado al mercado local, incluyendo pasarela de pago, logística, productos y estrategias de tráfico.",
    },
    {
      q: "¿Qué es Steve Candia AI?",
      a: "Son tres herramientas de inteligencia artificial propias (Copy, Hunter y Builder) que te acompañan en copywriting, búsqueda de productos y construcción de tienda.",
    },
    {
      q: "¿Cómo puedo pagar?",
      a: "El pago se realiza mediante transferencia bancaria directa. Luego envías el comprobante por WhatsApp y validamos tu acceso.",
    },
    {
      q: "¿Puedo cambiar de nivel más adelante?",
      a: "Sí. Puedes iniciar en un nivel y avanzar al siguiente pagando la diferencia.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Resuelve todas <span className="text-gradient-brand">tus dudas</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Respuestas claras y directas sobre el sistema, los módulos y la comunidad.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-card rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'border-cyan-500/40 bg-white/[0.04]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-heading font-bold text-base md:text-lg text-white"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-sm md:text-base leading-relaxed border-t border-white/5 mt-2 animate-fade-up">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Box */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            ¿Tienes otra pregunta sobre la formación?
          </p>
          <a
            href="https://wa.me/?text=Hola%20Steve%20Drop,%20tengo%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Hablar con un asesor por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
