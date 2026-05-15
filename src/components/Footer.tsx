import { Shield, Globe, Linkedin, Mail, Mountain, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CoSocial Mining | Proyecto Maricunga',
          text: 'Plataforma de inversión en activos mineros estratégicos en Chile.',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for desktop: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-(--breakpoint-2xl)">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Logo and About */}
          <div className="md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <Mountain className="text-brand-accent w-8 h-8" />
              <span className="font-sans text-2xl font-black tracking-tight uppercase">COSOCIAL <span className="text-brand-accent">MINING</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 text-lg font-medium leading-relaxed">
              Buscamos democratizar el acceso a la información y oportunidades en el sector minero chileno.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-all group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:contacto@cosocialmining.cl" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-all group">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="font-black mb-8 uppercase text-xs tracking-widest text-slate-500">Navegación</h4>
            <ul className="grid grid-cols-2 gap-4 text-slate-300 font-bold">
              <li><a href="#inicio" className="hover:text-brand-accent transition-colors">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-brand-accent transition-colors">Nosotros</a></li>
              <li><a href="#maricunga" className="hover:text-brand-accent transition-colors">Maricunga</a></li>
              <li><a href="#proyectos" className="hover:text-brand-accent transition-colors">Catálogo</a></li>
              <li><a href="#como-funciona" className="hover:text-brand-accent transition-colors">Proceso</a></li>
            </ul>
          </div>

          {/* Disclaimer (Integrated better) */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="font-black mb-8 uppercase text-xs tracking-widest text-slate-500">Legal & Riesgo</h4>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Este sitio tiene fines informativos. No constituye oferta pública ni recomendación financiera.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                CoSocial Mining actúa como facilitador de contacto entre interesados y responsables de los proyectos. Toda decisión debe ser evaluada de forma independiente.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 COSOCIALMINING.CL • TODOS LOS DERECHOS RESERVADOS</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
