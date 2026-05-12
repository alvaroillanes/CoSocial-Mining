import { motion } from 'motion/react';
import { Battery, Zap, Globe, ShieldCheck } from 'lucide-react';

export default function ProjectInfo() {
  const features = [
    {
      icon: <Battery className="w-7 h-7 text-brand-accent" />,
      title: "Reserva de Litio",
      description: "Segundo depósito más rico del mundo en concentración."
    },
    {
      icon: <Zap className="w-7 h-7 text-brand-accent" />,
      title: "Alta Pureza",
      description: "Calidad excepcional para máxima rentabilidad operativa."
    },
    {
      icon: <Globe className="w-7 h-7 text-brand-accent" />,
      title: "Sostenibilidad",
      description: "Tecnología DLE certificada para mínimo impacto hídrico."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-brand-accent" />,
      title: "Respaldo Legal",
      description: "Marco jurídico sólido y gestión profesional de CoSocial Mining."
    }
  ];

  return (
    <section id="proyecto" className="py-24 bg-white text-brand-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-sans text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
                Minerales Estratégicos para un <br />
                Mundo en <span className="text-brand-accent italic">Transición</span>.
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                En CoSocial Mining no solo nos enfocamos en el Litio. Nuestra cartera incluye Tierras Raras, Boro y otros recursos críticos esenciales para la industria tecnológica y energética global, operando bajo un modelo de democratización del acceso a activos mineros reales.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-brand-accent/20 hover:bg-brand-bg/50 transition-all">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{feature.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mina_de_Chuquicamata%2C_Calama%2C_Chile%2C_2016-02-01%2C_DD_110-112_PAN.JPG/1280px-Mina_de_Chuquicamata%2C_Calama%2C_Chile%2C_2016-02-01%2C_DD_110-112_PAN.JPG" 
                alt="Operaciones Mineras"
                className="w-full aspect-square object-cover rounded-xl shadow-lg mb-8"
              />
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-brand-accent text-[10px] font-bold uppercase tracking-widest">Capacidad Instalada</span>
                  <span className="text-slate-400 text-[10px]">Actualización Mayo 2024</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-brand-primary">Serie B</span>
                  <span className="text-slate-500 text-sm font-medium">Fase de Capitalización Activa</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
