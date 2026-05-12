import { Shield, Globe, Linkedin, Mail, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                <Mountain className="text-brand-accent w-5 h-5" />
              </div>
              <span className="font-sans text-xl font-extrabold tracking-tight">COSOCIAL <span className="text-brand-accent">MINING</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 font-medium text-sm leading-relaxed">
              Desarrollando el potencial minero de Chile. 
              Un proyecto de CoSocial Mining centrado en la transición energética global.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contacto@proyectomaricunga.cl" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-500">Navegación</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-semibold">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Inicio</Link></li>
              <li><Link to="/oportunidad" className="hover:text-brand-accent transition-colors">Oportunidad</Link></li>
              <li><Link to="/proyecto" className="hover:text-brand-accent transition-colors">Proyecto</Link></li>
              <li><a href="#calendly" className="hover:text-white transition-colors text-brand-accent">Invertir Ahora</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-500">Certificación</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Protocolos Mineros v2.0 Certificados</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Salar de Maricunga, Atacama</span>
              </li>
              <li className="flex items-center gap-3 text-white font-bold">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Sistemas Operativos 100%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 COSOCIALMINING.CL • DESARROLLADO POR <a href="https://web7.cl" target="_blank" className="text-white hover:text-brand-accent transition-colors">WEB7.CL</a></p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Framework Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad de Datos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
