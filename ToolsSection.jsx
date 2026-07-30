import React, { useState } from 'react';
import { X, ArrowLeft, Copy, Check, Building2, CreditCard, Camera, MessageCircle } from 'lucide-react';

export default function ModalCheckout({ isOpen, onClose, selectedPlan }) {
  const [screen, setScreen] = useState('methods'); // 'methods' | 'transfer'
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gmail, setGmail] = useState('');
  const [copiedAlias, setCopiedAlias] = useState(false);

  if (!isOpen || !selectedPlan) return null;

  const aliasNumber = "0974804611";
  const holderName = "Aún no definido";
  const bankName = "Banco Familiar";

  const handleCopyAlias = () => {
    navigator.clipboard.writeText(aliasNumber);
    setCopiedAlias(true);
    setTimeout(() => setCopiedAlias(false), 2000);
  };

  const handleClose = () => {
    setScreen('methods');
    setFirstName('');
    setLastName('');
    setGmail('');
    onClose();
  };

  const handleSendWhatsapp = (e) => {
    if (!firstName.trim() || !lastName.trim() || !gmail.trim()) {
      e.preventDefault();
      alert('Por favor completa tu Nombre, Apellido y correo de Gmail antes de continuar.');
      return;
    }

    const text = `¡Hola Steve Drop! Acabo de realizar la transferencia para la formación.

📌 *DATOS DE INSCRIPCIÓN:*
• *Plan Seleccionado:* ${selectedPlan.name} (${selectedPlan.price} Gs)
• *Nombre Completo:* ${firstName.trim()} ${lastName.trim()}
• *Correo Gmail de acceso:* ${gmail.trim()}
• *Comprobante:* Adjunto foto a continuación 📷

Por favor validen mi pago para recibir mi acceso a la plataforma. ¡Muchas gracias!`;

    const url = `https://wa.me/595974804611?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-up">
      <div className="relative w-full max-w-md bg-[#0b1220] p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Top Right Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Selected Plan Top Badge (Soft Electric Blue) */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-blue-500/40 flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-slate-300">
            {selectedPlan.name} — Formación
          </span>
          <span className="font-heading text-xl font-bold text-blue-400">
            {selectedPlan.price} Gs
          </span>
        </div>

        {/* SCREEN 1: METODOS DE PAGO */}
        {screen === 'methods' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-1">
                ¿Cómo querés pagar?
              </h3>
              <p className="text-slate-400 text-xs md:text-sm">
                Elegí el método que más te convenga.
              </p>
            </div>

            <div className="space-y-4">
              {/* Transferencia Bancaria Button (Scoped Green Icon & Accent) */}
              <button
                onClick={() => setScreen('transfer')}
                className="w-full p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/90 transition-all text-left flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-white mb-0.5">
                    Transferencia bancaria
                  </h4>
                  <span className="text-xs text-slate-400 block">
                    Banco Familiar · Alias por número
                  </span>
                </div>
              </button>

              {/* Pagopar Button */}
              <button
                onClick={() => alert('Próximamente disponible. Por favor selecciona Transferencia bancaria.')}
                className="w-full p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 opacity-80 hover:opacity-100 transition-all text-left flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading text-base font-bold text-white mb-0.5">
                      Tarjeta / QR / Pagopar
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold uppercase">
                      Próximamente
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block">
                    Todos los medios de pago digitales
                  </span>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 2: TRANSFERENCIA BANCARIA PANEL */}
        {screen === 'transfer' && (
          <div className="space-y-5">
            {/* Back Button */}
            <button
              onClick={() => setScreen('methods')}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver</span>
            </button>

            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-1">
                Transferencia bancaria
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                Realizá la transferencia y enviá el comprobante al mismo número de WhatsApp.
              </p>
            </div>

            {/* Bank Card Details (Soft Electric Blue theme for numbers & alias) */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  ALIAS / NÚMERO
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-blue-400 tracking-wide">
                    {aliasNumber}
                  </span>
                  <button
                    onClick={handleCopyAlias}
                    className="p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 transition-colors"
                    title="Copiar alias"
                  >
                    {copiedAlias ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    TITULAR
                  </span>
                  <span className="font-bold text-white">{holderName}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    BANCO
                  </span>
                  <span className="font-bold text-white">{bankName}</span>
                </div>
              </div>
            </div>

            {/* User Form Inputs */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-300 block uppercase tracking-wider">
                Ingresá tus datos para validar tu pago:
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Nombre *"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Apellido *"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  value={gmail}
                  onChange={(e) => setGmail(e.target.value)}
                  placeholder="Correo Gmail (para habilitarte el acceso) *"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs"
                />
              </div>
            </div>

            {/* GREEN SCOPED AREA 1: Screenshot Info Box */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3">
              <Camera className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-200 leading-relaxed">
                <strong className="text-emerald-400">Tomá una captura del comprobante</strong> y enviala por WhatsApp al <strong>0974 804611</strong>. Te activamos el acceso en minutos.
              </p>
            </div>

            {/* GREEN SCOPED AREA 2: Exact WhatsApp Green CTA Button */}
            <button
              onClick={handleSendWhatsapp}
              className="w-full py-4 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Enviar comprobante por WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
