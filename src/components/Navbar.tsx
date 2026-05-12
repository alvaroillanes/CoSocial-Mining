import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mountain, LogIn, User as UserIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useAuth } from './AuthProvider';
import { signInWithGoogle, auth } from '../lib/firebase';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Oportunidad', href: '/oportunidad' },
    { name: 'Proyecto', href: '/proyecto' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
        isScrolled || location.pathname !== '/' ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 py-4 shadow-xl shadow-brand-primary/5" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 xl:px-4 max-w-(--breakpoint-2xl) flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-black text-xl transition-transform group-hover:rotate-6 shadow-lg shadow-brand-primary/20">
            C
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-sans text-lg md:text-xl font-black tracking-tight transition-colors",
              isScrolled || location.pathname !== '/' ? "text-brand-primary" : "text-white"
            )}>
              COSOCIAL <span className="text-brand-accent">MINING</span>
            </span>
            <span className={cn(
              "text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-black",
              isScrolled || location.pathname !== '/' ? "text-slate-400" : "text-white/60"
            )}>Strategic Partners</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-black uppercase tracking-widest transition-colors",
                isScrolled || location.pathname !== '/' ? "text-slate-600 hover:text-brand-accent" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-6 w-[1px] bg-slate-200 hidden xl:block" />
          
          {user ? (
            <div className="flex items-center gap-6">
              <Link to="/due-diligence" className="flex items-center gap-2 group cursor-pointer">
                <img 
                  src={user.photoURL || ''} 
                  alt={user.displayName || 'User'} 
                  className="w-9 h-9 rounded-full border-2 border-brand-accent shadow-lg shadow-brand-accent/20" 
                />
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest transition-colors hidden xl:block",
                  isScrolled || location.pathname !== '/' ? "text-slate-400 group-hover:text-brand-accent" : "text-white/60 group-hover:text-white"
                )}>Perfil / Due Diligence</span>
              </Link>
              <button 
                onClick={() => auth.signOut()}
                className={cn(
                  "text-[10px] font-black uppercase tracking-widest transition-colors",
                  isScrolled || location.pathname !== '/' ? "text-slate-400 hover:text-red-500" : "text-white/60 hover:text-white"
                )}
              >
                Salir
              </button>
            </div>
          ) : (
            <button 
              onClick={signInWithGoogle}
              className={cn(
                "flex items-center gap-2 px-6 py-3 border rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-sm",
                isScrolled || location.pathname !== '/' 
                  ? "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200" 
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
              )}
            >
              <LogIn className="w-4 h-4" />
              Acceder
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 rounded-xl transition-colors",
            isScrolled || location.pathname !== '/' ? "text-brand-primary bg-slate-100" : "text-white bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-4 right-4 bg-white/95 backdrop-blur-2xl border border-slate-200 p-8 rounded-3xl mt-4 lg:hidden flex flex-col gap-8 shadow-2xl shadow-brand-primary/20"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-black text-brand-primary uppercase tracking-widest border-b border-slate-100 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              {user ? (
                <>
                  <Link 
                    to="/due-diligence"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-5 bg-slate-100 text-brand-primary text-center font-black uppercase tracking-widest rounded-2xl"
                  >
                    Perfil / Due Diligence
                  </Link>
                  <button 
                    onClick={() => { auth.signOut(); setIsMobileMenuOpen(false); }}
                    className="w-full py-5 bg-slate-50 text-slate-400 font-black uppercase tracking-widest rounded-2xl"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => { signInWithGoogle(); setIsMobileMenuOpen(false); }}
                  className="w-full py-5 bg-slate-100 text-brand-primary font-black uppercase tracking-widest rounded-2xl border border-slate-200"
                >
                  Identificarse
                </button>
              )}
              <a 
                href="#calendly"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-5 bg-brand-primary text-white text-center font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-brand-primary/20"
              >
                Agendar Reunión
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
