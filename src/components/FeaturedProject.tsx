import { motion } from 'motion/react';
import { Calendar, MapPin, Gauge, Briefcase, FileText, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section id="maricunga" className="py-24 bg-slate-50 font-sans">
      <div className="container mx-auto px-6 xl:px-4 max-w-(--breakpoint-2xl)">
        <div className="mb-16">
          <h2 className="text-sm font-black text-brand-accent uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-brand-accent" />
            Proyecto Destacado
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            {project.name}
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Info Column */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm mb-8">
              <p className="text-xl text-slate-700 leading-relaxed mb-12">
                {project.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Ubicación</p>
                    <p className="text-slate-900 font-bold">{project.location}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Recurso</p>
                    <p className="text-slate-900 font-bold">{project.resource}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Gauge className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Etapa</p>
                    <p className="text-slate-900 font-bold">{project.status}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Vehículo</p>
                    <p className="text-slate-900 font-bold">{project.vehicle}</p>
                  </div>
                </div>
              </div>

              {/* Participation Specifics */}
              {project.hasParticipation && (
                <div className="p-8 bg-brand-accent/5 rounded-2xl border border-brand-accent/10">
                  <h4 className="text-xl font-black text-slate-900 mb-4">
                    Participación mediante acciones de una sociedad constituida
                  </h4>
                  <p className="text-slate-600 mb-6">
                    La alternativa considerada corresponde a acciones de una sociedad por acciones ya constituida.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-t border-brand-accent/10 pt-6">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Valor Referencial</p>
                      <p className="text-2xl font-black text-brand-accent">{project.participationPrice} <span className="text-sm">/ acción</span></p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 italic">
                    * La disponibilidad puede variar según el avance del proyecto. Existe un número limitado de acciones.
                  </p>
                </div>
              )}
            </div>

            {/* Downloads Section */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-3xl text-white">
              <h4 className="text-2xl font-black mb-4">Solicita información del proyecto</h4>
              <p className="text-slate-400 mb-8 max-w-lg">
                Puedes acceder a material informativo del proyecto antes o después de la reunión.
              </p>
              <button className="px-8 py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-3">
                Solicitar Material
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="mt-6 text-xs text-white/40">
                * No incluye proyecciones financieras públicas de acuerdo a normativa vigente.
              </p>
            </div>
          </div>

          {/* CTA / Calendly Column */}
          <div className="lg:col-span-12 xl:col-span-5 sticky top-28">
            <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-brand-accent shadow-2xl shadow-brand-accent/5">
              <h4 className="text-2xl font-black text-slate-900 mb-4">
                Agenda una reunión sobre este proyecto
              </h4>
              <p className="text-slate-600 mb-8">
                Coordina una reunión informativa y conversa directamente con al menos un dueño del proyecto.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-accent shadow-sm">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-slate-700">Reunión con fundadores</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-accent shadow-sm">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-slate-700">Horarios flexibles</p>
                </div>
              </div>

              <a 
                href="#agendar"
                className="w-full py-5 bg-brand-accent text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-brand-accent/30"
              >
                Agendar reunión (Maricunga)
                <ArrowRight className="w-6 h-6" />
              </a>
              
              <p className="mt-8 text-center text-sm font-medium text-slate-500">
                Este campo es solo referencial y no constituye compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );
}
