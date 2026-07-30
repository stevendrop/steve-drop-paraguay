import React from 'react';
import { ArrowRight, Users, MessageSquareText, TrendingUp, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';

export default function HeroSection({ onSelectPlan }) {
  const stats = [
    {
      value: "+200",
      label: "Alumnos formados",
      icon: Users,
    },
    {
      value: "+300",
      label: "Testimonios reales",
      icon: MessageSquareText,
    },
    {
      value: "Desde 2025",
      label: "Viviendo exclusivamente del Dropshipping",
      icon: TrendingUp,
    },
    {
      value: "100%",
      label: "Sistema aplicado diariamente",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Formación premium · Paraguay</span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            La formación de{" "}
            <span className="text-gradient-brand">
              Dropshipping
            </span>{" "}
            creada para personas que quieren{" "}
            <span className="text-gradient-brand">
              resultados
            </span>
            , no teoría.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Aprende el mismo sistema que me permitió vivir completamente del Dropshipping desde diciembre de 2025 y que ya ayudó a más de{" "}
            <span className="text-white font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4">
              200 alumnos
            </span>{" "}
            a construir negocios reales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
            <a
              href="#niveles"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 font-bold text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Ver niveles y precios</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#metodo"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/10 font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>Conocer el método</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Hero Key Metrics Bar */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-white/10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-5 rounded-2xl flex flex-col items-center text-center hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
