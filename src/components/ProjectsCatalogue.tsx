import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function ProjectsCatalogue() {
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="proyectos" className="py-24 bg-white font-sans">
      <div className="container mx-auto px-6 xl:px-4 max-w-(--breakpoint-2xl)">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Otros proyectos <br /><span className="text-brand-accent">disponibles</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Explora nuestra cartera de activos mineros en distintas etapas de desarrollo a lo largo de Chile.
            </p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-accent">
              <span className="font-black text-xl">{otherProjects.length}</span>
            </div>
            <p className="font-bold text-slate-700">Proyectos activos</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 border border-white/20">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-brand-accent mb-3">
                  <span className="text-xs font-black uppercase tracking-widest">{project.resource}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-brand-accent transition-colors">
                  {project.name}
                </h3>
                
                <div className="flex items-center gap-3 text-slate-500 mb-8">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>

                <button className="w-full py-4 bg-white border border-slate-200 text-slate-900 font-black rounded-xl hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all flex items-center justify-center gap-2">
                  Ver más
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
          
          {/* Global CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-12 bg-brand-accent rounded-3xl text-white text-center"
          >
            <h4 className="text-3xl font-black mb-6">Explora proyectos mineros en desarrollo</h4>
            <p className="text-white/80 mb-10 text-lg">
              Revisa los proyectos disponibles y accede a información detallada de cada uno.
            </p>
            <button className="px-10 py-5 bg-white text-brand-accent font-black rounded-2xl hover:bg-slate-100 transition-colors shadow-2xl shadow-blue-900/40">
              Ver proyectos
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
