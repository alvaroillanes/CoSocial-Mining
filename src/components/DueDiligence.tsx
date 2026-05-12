import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { db, signInWithGoogle, auth } from '../lib/firebase';
import { useAuth } from './AuthProvider';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { ShieldCheck, Loader2, LogIn } from 'lucide-react';
import SEO from './SEO';

export default function DueDiligence() {
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    rut: '',
    address: '',
    occupation: '',
    sourceOfFunds: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, 'dueDocs', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data() as any);
          setStatus(docSnap.data().status);
        }
      } catch (error) {
        console.error("Error fetching due diligence:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    try {
      await setDoc(doc(db, 'dueDocs', user.uid), {
        ...formData,
        userId: user.uid,
        status: status || 'pending',
        updatedAt: serverTimestamp()
      });
      alert("Información guardada correctamente. Nuestro equipo la revisará.");
    } catch (error) {
      console.error("Error saving due diligence:", error);
      alert("Error al guardar la información.");
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 animate-spin text-brand-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="pt-40 pb-20 bg-slate-50 min-h-screen">
        <SEO title="Acceso Requerido" description="Inicia sesión para completar tu due diligence." />
        <div className="container mx-auto px-6 max-w-lg text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl shadow-brand-primary/5 border border-slate-100">
            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-8 text-slate-400">
              <LogIn className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-black text-brand-primary mb-4">Acceso Reservado</h1>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              Para completar los datos de Due Diligence y acceder a la documentación técnica, es necesario identificarse.
            </p>
            <button
              onClick={signInWithGoogle}
              className="w-full py-5 bg-brand-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-brand-primary/20 hover:bg-brand-accent transition-all flex items-center justify-center gap-3"
            >
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              Ingresar con Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <SEO 
        title="Due Diligence" 
        description="Completa tu información para participar en el proyecto Maricunga." 
        url="/due-diligence"
      />
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-brand-primary/5 border border-slate-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-brand-primary tracking-tight">Due Diligence</h1>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Información para Inversores</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-2">RUT / Identificación</label>
              <input
                required
                type="text"
                value={formData.rut}
                onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-accent/20 focus:border-brand-accent transition-all outline-hidden font-medium"
                placeholder="Ex: 12.345.678-9"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-2">Dirección de Domicilio</label>
              <input
                required
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-accent/20 focus:border-brand-accent transition-all outline-hidden font-medium"
                placeholder="Escriba su dirección completa"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-2">Profesión / Ocupación</label>
              <input
                required
                type="text"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-accent/20 focus:border-brand-accent transition-all outline-hidden font-medium"
                placeholder="Su cargo o profesión"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-2">Origen de los Fondos</label>
              <textarea
                required
                value={formData.sourceOfFunds}
                onChange={(e) => setFormData({ ...formData, sourceOfFunds: e.target.value })}
                rows={3}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-accent/20 focus:border-brand-accent transition-all outline-hidden font-medium resize-none"
                placeholder="Describa brevemente el origen de su capital de inversión"
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full py-5 bg-brand-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-brand-primary/20 hover:bg-brand-accent transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Guardar Información'}
            </button>
          </form>

          {status && (
            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <p className="text-blue-700 text-sm font-bold">Estado del trámite: <span className="uppercase">{status}</span></p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
