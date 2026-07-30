import React from 'react';
import { Store, Globe, Rocket, CheckCircle2 } from 'lucide-react';

export default function HistorySection() {
  const steps = [
    {
      number: "01",
      title: "Tienda Física",
      caption: "Primer contacto real con el mundo del comercio.",
      desc: "Experiencia vendiendo productos tradicionales con altos costos fijos, inventarios paralizados y limitaciones de alcance geográfico.",
      icon: Store,
      badge: "Inicios",
    },
    {
      number: "02",
      title: "Dropshipping",
      caption: "El giro. Un modelo escalable y sin límites geográficos.",
      desc: "Descubrimiento de la venta directa sin inventario. Validación de ofertas, testeo constante y dominio del tráfico pago local.",
      icon: Globe,
      badge: "El Cambio",
    },
    {
      number: "03",
      title: "Steve Drop",
      caption: "La formación. Una comunidad enfocada en construir negocios reales.",
      desc: "Creación del sistema definitivo que empaqueta todo el aprendizaje, automatización con IA y acompañamiento en Paraguay.",
      icon: Rocket,
      badge: "Actualidad",
    },
  ];

  return (
    <section id="historia" className="relative py-20 md:py-28 bg-[#090d17] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            <span>Mi Historia</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            De 0 a vivir 100% del <span className="text-gradient-brand">Dropshipping</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Un proceso de aprendizaje real, probando sistemas hasta encontrar la fórmula escalable adaptada al mercado paraguayo.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-3">
                    {item.badge}
                  </span>

                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-cyan-400/90 text-sm font-semibold mb-3">
                    {item.caption}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Etapa completada y validada</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
