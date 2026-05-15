import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Desierto_florido.jpg", // Desierto Florido Atacama
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Guanaco_%28Lama_guanicoe%29_Leona_Amarga.jpg/1280px-Guanaco_%28Lama_guanicoe%29_Leona_Amarga.jpg", // Guanaco/Alpaca
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mina_de_Chuquicamata%2C_Calama%2C_Chile%2C_2016-02-01%2C_DD_110-112_PAN.JPG/1280px-Mina_de_Chuquicamata%2C_Calama%2C_Chile%2C_2016-02-01%2C_DD_110-112_PAN.JPG"  // Minería / Chuquicamata
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900 font-sans">
      {/* High-Impact Professional Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={images[currentImageIndex]}
            alt="Minería en Chile"
            className="absolute inset-0 w-full h-full object-cover grayscale-[10%]"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-transparent to-slate-900" />
      </div>

      <div className="container relative z-10 mx-auto px-6 xl:px-4 max-w-(--breakpoint-2xl)">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-accent/20 text-brand-accent rounded-full text-xs md:text-sm font-bold uppercase tracking-widest border border-brand-accent/30 mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              Proyecto destacado: Salar de Maricunga (Tierras Raras)
            </div>
            
            <h1 className="font-sans text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Conoce proyectos <br/><span className="text-brand-accent">mineros en desarrollo</span> en Chile
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl xl:text-2xl text-slate-200 font-medium leading-relaxed mb-12">
              Accede a información y coordina reuniones directas con los responsables de cada proyecto.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#maricunga" 
                className="w-full sm:w-auto px-10 py-5 bg-brand-accent hover:bg-blue-500 text-white font-black rounded-2xl shadow-2xl shadow-brand-accent/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 text-lg"
              >
                Ver proyecto destacado
                <ArrowRight className="w-6 h-6" />
              </a>
              <a 
                href="#proyectos" 
                className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 shadow-sm transition-all text-center text-lg"
              >
                Otros proyectos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
