import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';

export default function MethodSection() {
  return (
    <section id="metodo" class="relative py-14 md:py-16 overflow-hidden">
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center mb-10 reveal-on-scroll">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-3">
            <span>Metodología Steve Drop</span>
          </div>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
            <span class="text-white font-extrabold">Otras formaciones</span> vs. <span class="text-gradient-brand">Steve Drop</span>
          </h2>
          <p class="text-slate-400 text-sm md:text-base">
            No competimos con cursos genéricos. Competimos con la realidad de nuestros alumnos.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* OTHER COURSES CARD */}
          <div class="glass-card p-6 rounded-3xl border-rose-500/35 bg-gradient-to-b from-rose-950/20 via-slate-950/40 to-slate-950/60 shadow-lg shadow-rose-950/20 relative reveal-on-scroll">
            <div class="absolute top-4 right-4">
              <span class="px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-bold uppercase tracking-wider">
                DEFICIENTE / TEÓRICO
              </span>
            </div>

            <div class="flex items-center gap-3 mb-4 pb-3.5 border-b border-rose-500/20">
              <div class="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                <XCircle class="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <h3 class="font-heading text-lg font-bold text-rose-200">Otras formaciones genéricas</h3>
                <p class="text-[11px] text-rose-400/80 font-medium">Modelos obsoletos con alto riesgo de pérdida</p>
              </div>
            </div>

            <ul class="space-y-3 text-slate-300 text-xs md:text-sm">
              <li class="flex items-start gap-2.5">
                <XCircle class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span class="line-through decoration-rose-500/60 text-slate-300 font-medium">Contenido genérico y teoría reciclada</span>
              </li>
              <li class="flex items-start gap-2.5">
                <XCircle class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span class="line-through decoration-rose-500/60 text-slate-300 font-medium">Sin comunidad activa ni soporte real</span>
              </li>
              <li class="flex items-start gap-2.5">
                <XCircle class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span class="line-through decoration-rose-500/60 text-slate-300 font-medium">Estrategias no aplicables en Paraguay</span>
              </li>
              <li class="flex items-start gap-2.5">
                <XCircle class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span class="line-through decoration-rose-500/60 text-slate-300 font-medium">Sin mentorías en vivo</span>
              </li>
              <li class="flex items-start gap-2.5">
                <XCircle class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span class="line-through decoration-rose-500/60 text-slate-300 font-medium">Cero acompañamiento después de la compra</span>
              </li>
              <li class="flex items-start gap-2.5">
                <XCircle class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span class="line-through decoration-rose-500/60 text-slate-300 font-medium">Sin herramientas propias</span>
              </li>
            </ul>
          </div>

          {/* STEVE DROP CARD */}
          <div class="glass-card p-6 rounded-3xl border-blue-500/40 bg-gradient-to-b from-blue-500/[0.08] to-transparent relative shadow-xl shadow-blue-500/10 reveal-on-scroll reveal-delay-150">
            <div class="absolute top-4 right-4">
              <span class="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md shadow-blue-500/30">Recomendado</span>
            </div>
            <div class="flex items-center gap-3 mb-4 pb-3.5 border-b border-white/10">
              <div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <CheckCircle2 class="w-4 h-4 text-sky-400" />
              </div>
              <div>
                <h3 class="font-heading text-lg font-bold text-white">Sistema Steve Drop</h3>
                <p class="text-[11px] text-sky-400/80 font-medium">Método probado en el mercado paraguayo</p>
              </div>
            </div>
            <ul class="space-y-3 text-slate-200 font-medium text-xs md:text-sm">
              <li class="flex items-start gap-2.5"><CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Sistema probado y aplicado diariamente</span></li>
              <li class="flex items-start gap-2.5"><CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Comunidad activa con soporte constante</span></li>
              <li class="flex items-start gap-2.5"><CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Estrategia adaptada al mercado local</span></li>
              <li class="flex items-start gap-2.5"><CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Mentorías grupales y privadas en vivo</span></li>
              <li class="flex items-start gap-2.5"><CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Acompañamiento continuo hasta ver resultados</span></li>
              <li class="flex items-start gap-2.5"><CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>Steve Candia AI incluido en cada nivel</span></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
