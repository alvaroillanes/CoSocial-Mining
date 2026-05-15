import { motion } from 'motion/react';
import { ShieldCheck, Users, Link2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Conexión Directa",
      description: "Facilitamos el acceso a información de proyectos mineros y conectamos directamente a los interesados con quienes los desarrollan."
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "Facilitadores",
      description: "CoSocial Mining actúa como puente, permitiendo el acceso a oportunidades reales en el sector minero chileno."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Transparencia Legal",
      description: "No administramos fondos ni realizamos intermediación financiera. Nuestro rol es estrictamente de vitrina y conexión."
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-24 bg-white font-sans">
      <div className="container mx-auto px-6 xl:px-4 max-w-(--breakpoint-2xl)">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              Conectamos personas con <br />
              <span className="text-brand-accent">proyectos mineros reales</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              CoSocial Mining facilita el acceso a información de proyectos mineros y conecta directamente a los interesados con quienes los desarrollan. 
            </p>
            <div className="p-6 bg-slate-50 border-l-4 border-brand-accent rounded-r-2xl mb-8">
              <p className="text-slate-700 font-bold">
                No administramos fondos ni realizamos intermediación financiera.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
