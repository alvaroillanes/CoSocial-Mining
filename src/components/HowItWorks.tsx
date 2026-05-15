import { motion } from 'motion/react';
import { Search, MousePointer2, FileSearch, CalendarRange, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Exploras",
      text: "Revisa los proyectos disponibles en nuestra plataforma."
    },
    {
      icon: <MousePointer2 className="w-8 h-8" />,
      title: "Seleccionas",
      text: "Elige el proyecto que mejor se alinee con tus intereses."
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "Accedes",
      text: "Consulta la información específica y ficha técnica del recurso."
    },
    {
      icon: <CalendarRange className="w-8 h-8" />,
      title: "Coordinas",
      text: "Agenda una reunión directa con los responsables (si aplica)."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Evalúas",
      text: "Toma tu decisión de forma independiente con toda la información."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-slate-900 text-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 xl:px-4 max-w-(--breakpoint-2xl)">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-brand-accent uppercase tracking-widest mb-6">Proceso de Conexión</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Conoce antes de tomar <br /><span className="text-brand-accent text-glow">una decisión</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-brand-accent/20 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500 transform group-hover:-rotate-6">
                  <div className="text-brand-accent group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-6 text-xs font-black text-white/50 group-hover:bg-brand-accent group-hover:border-white group-hover:text-white transition-all">
                  {index + 1}
                </div>
                <h4 className="text-2xl font-black mb-4">{step.title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed px-4">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-glow {
          text-shadow: 0 0 30px rgba(37, 99, 235, 0.5);
        }
      `}} />
    </section>
  );
}
