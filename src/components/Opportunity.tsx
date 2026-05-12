import { motion } from 'motion/react';
import { Shield, Briefcase, Globe, ArrowRight } from 'lucide-react';

export default function Opportunity() {
  const points = [
    {
      title: "Respaldo CoSocial",
      tagline: "Gestión Directa",
      description: "Conectamos capital con propiedad minera real, democratizando el acceso a activos críticos en Chile.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Participación Real",
      tagline: "Equity Minero",
      description: "Inversión a través de acciones en sociedad legal minera constituida sobre pertenencias estratégicas.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Cumplimiento Ambiental",
      tagline: "Minería v2.0",
      description: "Protocolos estrictos de cumplimiento regidos por normativas internacionales de sostenibilidad.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section id="inversion" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-brand-primary rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200 mb-6">
            Estructura de Capital
          </div>
          <h2 className="font-sans text-4xl md:text-5xl text-brand-primary font-extrabold mb-6 tracking-tight">Oportunidad de <br/><span className="text-brand-accent">Crecimiento Asegurado</span></h2>
          <p className="text-slate-600 font-medium text-lg leading-relaxed">
            Nuestra estructura de inversión está diseñada para fondos y capitales privados que buscan exposición en minerales estratégicos con un riesgo gestionado por tecnología líder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                {point.icon}
              </div>
              <h3 className="text-brand-primary text-2xl font-bold mb-1">{point.title}</h3>
              <p className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{point.tagline}</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">{point.description}</p>
              <div className="pt-6 border-t border-slate-50">
                <button className="text-brand-primary text-sm font-bold inline-flex items-center gap-2 hover:text-brand-accent transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Solicitar Dossier Serie B
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
