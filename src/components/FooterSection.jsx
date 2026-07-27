import React from 'react';
import { Headphones, Lock } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/stevecandiadj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/stevecandiadj/about",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@stevecandiadj?is_from_webapp=1&sender_device=pc",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      )
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@stevecandia1272?si=565jQKG-pwKS8gj3",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    },
    {
      label: "WhatsApp Soporte",
      href: "https://wa.me/595974804611",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      label: "Correo Hotmail",
      href: "mailto:estebangabriel46@hotmail.com",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative pt-14 pb-8 bg-[#03060d] border-t border-white/10 text-slate-400 z-10">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Brand & Social Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-8 border-b border-white/10">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#050811] rounded-[11px] flex items-center justify-center">
                <Headphones className="w-5 h-5 text-sky-400" />
              </div>
            </div>
            <span className="font-heading font-extrabold text-xl text-white">
              Steve<span className="text-sky-400">Drop</span>
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:bg-white/10 hover:border-sky-500/30 transition-all"
              >
                {s.svg}
              </a>
            ))}
          </div>

        </div>

        {/* Legal Disclaimers Block */}
        <div className="py-8 text-xs text-slate-400 leading-relaxed space-y-3 max-w-4xl mx-auto border-b border-white/5">
          <p>
            Steve Drop es una formación educativa. Los resultados mostrados y los logros de los alumnos son casos individuales que dependen del esfuerzo, dedicación, contexto y aplicación de cada persona.
          </p>
          <p>
            No garantizamos resultados económicos específicos. Compartimos el sistema, las herramientas y el acompañamiento; el trabajo diario y la ejecución dependen de cada alumno.
          </p>
          <p>
            Debido a la naturaleza digital de la formación, una vez otorgado el acceso a la plataforma, comunidad y herramientas, no se realizan reembolsos.
          </p>
          <p>
            Antes de realizar el pago te invitamos a revisar el contenido de cada nivel y, si tienes dudas, contactar por WhatsApp para que podamos orientarte a elegir el plan adecuado.
          </p>
        </div>

        {/* Copyright Footer Bar with Discrete Low-Opacity Lock Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <p>© {currentYear} Steve Drop · Asunción, Paraguay</p>
            <a
              href="admin.html"
              title="Acceso Administración Privada"
              className="opacity-20 hover:opacity-100 text-slate-400 hover:text-sky-400 transition-all duration-300 p-1"
              aria-label="Panel de Administración"
            >
              <Lock className="w-3.5 h-3.5" />
            </a>
          </div>
          <p>Diseñado para construir negocios reales.</p>
        </div>

      </div>
    </footer>
  );
}
