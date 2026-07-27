import React from 'react';
import { Sparkles, FileText, Search, LayoutGrid, Cpu, CheckCircle2 } from 'lucide-react';

export default function ToolsSection() {
  const tools = [
    {
      name: "Steve Candia AI Copy",
      tag: "Copywriting",
      desc: "Genera textos, anuncios y guiones de venta en el tono que mejor convierte para tu producto.",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      badgeColor: "text-purple-300 bg-purple-950/40 border-purple-500/30",
      features: ["Guiones para TikTok y Reels", "Textos persuasivos de Landing Page", "Copies publicitarios para Meta Ads"],
    },
    {
      name: "Steve Candia AI Hunter",
      tag: "Product Research",
      desc: "Detecta productos con potencial real basándose en tendencias, demanda y competencia.",
      icon: Search,
      color: "from-purple-600 to-indigo-600",
      badgeColor: "text-purple-300 bg-purple-950/40 border-purple-500/30",
      features: ["Filtro de productos ganadores", "Análisis de demanda local", "Estimación de márgenes reales"],
    },
    {
      name: "Steve Candia AI Builder",
      tag: "Store Building",
      desc: "Construye tu tienda y estructura tus campañas siguiendo el sistema Steve Drop.",
      icon: LayoutGrid,
      color: "from-fuchsia-600 to-purple-600",
      badgeColor: "text-purple-300 bg-purple-950/40 border-purple-500/30",
      features: ["Estructura de tienda de alta conversión", "Plantillas optimizadas", "Funnel de ventas automatizado"],
    },
  ];

  return (
    <section id="herramientas" className="relative py-16 md:py-20 overflow-hidden">
      
      {/* Soft Radial Ambient Purple Glow - Seamlessly blended into Aurora Boreal */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.14)_0%,rgba(147,51,234,0.04)_45%,transparent_75%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-3 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Herramientas Exclusivas</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Steve Candia AI
          </h2>

          <p className="text-slate-300 text-sm md:text-base">
            Inteligencia artificial <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent font-bold">al servicio de tu negocio.</span>
          </p>
        </div>

        {/* AI Tools Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between border-purple-500/20"
              >
                {/* Internal Card Ambient Glow */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${tool.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${tool.badgeColor}`}>
                      {tool.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {tool.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-purple-500/10">
                    {tool.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-purple-500/10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-purple-300 font-semibold">Incluido con acceso a la plataforma</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
