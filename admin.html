import React, { useState, useEffect } from 'react';
import { Check, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react';

// Default Seed Data Fallback
const DEFAULT_PLANS = [
  {
    id: "inicio",
    name: "Inicio",
    tagline: "Aprende el sistema",
    price: "167.000",
    oldPrice: "",
    currency: "Gs",
    badge: "Formación Básica",
    highlight: false,
    active: true,
    features: [
      "Curso completo paso a paso",
      "Meta Ads para Paraguay",
      "Configuración de Shopify",
      "Landing Pages de alta conversión",
      "Copywriting persuasivo",
      "Edición de videos publicitarios",
      "Más de 10 horas de respuestas a dudas",
      "30 días de acceso a comunidad",
      "4 mentorías grupales en vivo",
      "Acceso a Steve Candia AI Copy"
    ]
  },
  {
    id: "impulso",
    name: "Impulso",
    tagline: "Acelera tus resultados",
    price: "527.000",
    oldPrice: "",
    currency: "Gs",
    badge: "Más Vendido",
    highlight: false,
    active: true,
    features: [
      "Todo lo incluido en nivel Inicio",
      "3 meses de acceso a comunidad",
      "30 días de soporte privado 1 a 1",
      "3 mentorías privadas en vivo",
      "Productos ganadores constantemente",
      "Acceso a Steve Candia AI Hunter"
    ]
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "Escala tu negocio",
    price: "1.300.000",
    oldPrice: "",
    currency: "Gs",
    badge: "Acompañamiento VIP",
    highlight: true,
    active: true,
    features: [
      "Todo lo incluido en nivel Impulso",
      "6 meses de acceso a comunidad",
      "6 meses de soporte prioritario",
      "9 mentorías privadas 1 a 1 en vivo",
      "Catálogo VIP de productos ganadores",
      "Acceso completo a Steve Candia AI Builder"
    ]
  }
];

export default function PricingSection({ onSelectPlan }) {
  const [plans, setPlans] = useState(DEFAULT_PLANS);

  // Sync with Shared Database
  useEffect(() => {
    const loadPlans = () => {
      const stored = localStorage.getItem('STEVE_DROP_DB_V1');
      if (stored) {
        try {
          const db = JSON.parse(stored);
          if (db && db.plans && Array.isArray(db.plans)) {
            const activePlans = db.plans.filter(p => p.active !== false);
            if (activePlans.length > 0) {
              setPlans(activePlans);
            }
          }
        } catch (e) {
          console.error("DB Load Error", e);
        }
      }
    };

    loadPlans();

    window.addEventListener('storage', loadPlans);
    return () => window.removeEventListener('storage', loadPlans);
  }, []);

  const getIcon = (plan) => {
    if (plan.highlight) return Crown;
    if (plan.badge === 'Más Vendido') return Sparkles;
    return Zap;
  };

  return (
    <section id="niveles" className="relative pt-12 pb-6 md:pt-14 md:pb-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-3">
            <span>Niveles de Formación</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-2">
            Elige el nivel que mejor <span className="text-gradient-brand">se adapta a tu objetivo</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Todos los niveles incluyen acceso al sistema Steve Drop. La diferencia está en el nivel de acompañamiento.
          </p>
        </div>

        {/* Dynamic Plans Grid */}
        <div className={`grid md:grid-cols-${Math.min(plans.length, 3)} gap-6 items-stretch max-w-6xl mx-auto mb-0`}>
          {plans.map((plan) => {
            const Icon = getIcon(plan);
            const isHighlight = plan.highlight;

            return (
              <div
                key={plan.id || plan.name}
                className={`glass-card rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'border-blue-500/60 bg-gradient-to-b from-blue-500/15 via-indigo-500/10 to-transparent shadow-2xl shadow-blue-500/20 relative md:-translate-y-3'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-lg shadow-blue-500/40">
                      Nivel Más Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isHighlight ? 'bg-blue-500/20 border border-blue-500/40' : 'bg-blue-500/10 border border-blue-500/20'}`}>
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                    {plan.badge && (
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${isHighlight ? 'bg-blue-500/20 border border-blue-500/40 text-sky-300' : 'bg-white/5 border border-white/10 text-slate-300'}`}>
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl font-extrabold text-white mb-0.5">{plan.name}</h3>
                  <p className="text-slate-400 text-xs font-medium mb-4">{plan.tagline}</p>

                  <div className="mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-3xl md:text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-sky-400 font-bold text-base">{plan.currency || 'Gs'}</span>
                      {plan.oldPrice && (
                        <span className="text-xs text-slate-500 line-through ml-2">{plan.oldPrice} Gs</span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">Pago único · Acceso completo</span>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs text-slate-200">
                    {plan.features && plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectPlan ? onSelectPlan(plan.name, plan.price) : window.openCheckout && window.openCheckout(plan.name, plan.price)}
                  className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 group transition-all ${
                    isHighlight
                      ? 'bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] animate-gentle-shake'
                      : 'bg-white/10 border border-white/15 text-white hover:bg-white/20'
                  }`}
                >
                  <span>{plan.ctaText || `Seleccionar ${plan.name}`}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
