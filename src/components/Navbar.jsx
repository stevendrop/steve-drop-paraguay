import React, { useState, useEffect } from 'react';
import { Menu, X, Headphones } from 'lucide-react';

export default function Navbar({ onOpenCheckout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = (winScroll / height) * 100;
      setScrollProgress(scrolledPct);

      const sections = ['inicio', 'historia', 'metodo', 'herramientas', 'niveles', 'resultados', 'preguntas'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Mi Historia', href: '#historia', id: 'historia' },
    { name: 'Método', href: '#metodo', id: 'metodo' },
    { name: 'Herramientas', href: '#herramientas', id: 'herramientas' },
    { name: 'Niveles', href: '#niveles', id: 'niveles' },
    { name: 'Resultados', href: '#resultados', id: 'resultados' },
    { name: 'Preguntas', href: '#preguntas', id: 'preguntas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050811]/90 backdrop-blur-md border-b border-white/10 py-2.5 shadow-xl'
          : 'py-3.5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Brand Logo with Pure DJ Headphones Icon (No flame) */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#050811] rounded-[11px] flex items-center justify-center">
              <Headphones className="w-5 h-5 text-sky-400" />
            </div>
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-white">
            Steve<span className="text-sky-400">Drop</span>
          </span>
        </a>

        {/* Compact Nav Pill Container with Scroll Progress Bar */}
        <div className="hidden lg:block relative">
          <nav className="relative flex items-center gap-0.5 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md overflow-hidden">
            
            {/* Scroll Fill Bar Indicator */}
            <div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-[11px] font-semibold py-1 px-2.5 rounded-full transition-all relative z-10 ${
                    isActive
                      ? 'text-sky-300 bg-sky-500/15 border border-sky-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Interactive "Unirme ahora" CTA Button with Gentle Wiggle Shake */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => onOpenCheckout('Impulso', '527.000')}
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none animate-gentle-shake"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-full group-hover:opacity-90 transition-opacity"></span>
            <span className="relative px-4 py-2 rounded-full bg-[#050811] flex items-center gap-2 text-xs font-bold text-white transition-colors group-hover:bg-transparent">
              <span>Unirme ahora</span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] bg-[#050811]/95 backdrop-blur-xl border-b border-white/10 p-5 shadow-2xl animate-fade-up">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-1.5 border-b border-white/5 transition-colors ${
                  activeSection === link.id ? 'text-sky-400 font-bold' : 'text-slate-200 hover:text-sky-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout('Impulso', '527.000');
              }}
              className="mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 font-bold text-white text-center text-xs shadow-lg shadow-sky-500/25 animate-gentle-shake"
            >
              Unirme a la comunidad
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
