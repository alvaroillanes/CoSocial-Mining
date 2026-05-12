import { motion } from 'motion/react';
import { Calendar, Users, Briefcase, TrendingUp, Loader2 } from 'lucide-react';

export default function CalendlySection() {
  return (
    <section id="calendly" className="py-24 bg-white text-brand-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Protocolo de Inversión
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Agenda una <span className="text-brand-accent italic">Reunión Privada</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              Requisito obligatorio para la adquisición de acciones Serie B. Nuestro equipo revisará su perfil y resolverá dudas técnicas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Benefits Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-5 hover:bg-white hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                <Users className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-brand-primary">Asesoría Directa</h3>
                <p className="text-slate-500 text-sm font-medium">Análisis detallado de proyecciones y balances trimestrales.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-5 hover:bg-white hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                <Briefcase className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-brand-primary">Estructura Serie B</h3>
                <p className="text-slate-500 text-sm font-medium">Detalles sobre tickets mínimos y salida estratégica.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-5 hover:bg-white hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                <TrendingUp className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-brand-primary">Growth Roadmap</h3>
                <p className="text-slate-500 text-sm font-medium">Hitos operativos para el periodo 2025-2030.</p>
              </div>
            </div>

            <div className="pt-8 pl-4 border-l-2 border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">Sede Central</p>
              <p className="text-brand-primary font-extrabold text-lg">Av. Apoquindo 3000</p>
              <p className="text-slate-500 font-medium tracking-tight">Las Condes, Santiago • Chile</p>
            </div>
          </div>

          {/* Calendly Widget Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-brand-primary/10 overflow-hidden min-h-[650px] relative">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-0">
               <Loader2 className="w-8 h-8 text-brand-accent animate-spin" />
            </div>
            {/* Inline Widget Embed */}
            <iframe
              src="https://calendly.com/alvaroillanes/reunion-proyecto-maricunga?embed_domain=proyectomaricunga.cl&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              className="relative z-10 w-full h-[650px]"
              title="Calendly Scheduling"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
