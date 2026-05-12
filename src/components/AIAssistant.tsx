import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';
import { useAuth } from './AuthProvider';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SYSTEM_INSTRUCTION = `
You are the Official AI Assistant for "CoSocial Mining - Proyecto Maricunga".
Your goal is to inform potential investors about our strategic mineral projects and guide them to schedule a meeting via Calendly.

Key Background Information:
- Project: Strategic mining exploration (Lithium, Rare Earths, Boron) in Salar de Maricunga, Atacama, and other regions in Chile.
- Tagline: "Minería con sentido, desde el territorio".
- Why Invest: We connect capital with real mining property, democratizing access to strategic assets.
- Focus: We prioritize high-purity minerals for the global clean energy transition.
- Ownership: This is a project by CoSocial Mining.
- Technology: Management and infrastructure are developed for maximum security.
- Developers: web7.cl is the technical partner.
- Goal: Get users to schedule a private 15-minute call using the "Agendar Reunión" button.
- Tone: Sophisticated, institutional, yet approachable.
`;

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AIAssistant() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { 
      role: 'assistant', 
      content: 'Hola, soy tu guía para CoSocial Mining y el Proyecto Maricunga. ¿Te gustaría conocer más sobre nuestra cartera de minerales estratégicos o prefieres agendar una llamada directa?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const saveLead = async () => {
    if (!user || leadSubmitted || isSubmittingLead) return;
    
    setIsSubmittingLead(true);
    const path = 'leads';
    try {
      await addDoc(collection(db, path), {
        email: user.email,
        name: user.displayName,
        userId: user.uid,
        createdAt: serverTimestamp(),
        interestLevel: 'high'
      });
      setLeadSubmitted(true);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Toda nuestra infraestructura está alojada en entornos certificados con seguridad perimetral. He registrado tu interés prioritario; podemos revisar el roadmap detallado durante nuestra reunión en Calendly.' 
      }]);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.role === 'assistant' ? m.content : m.content }]
          })).slice(-6), 
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const assistantContent = response.text || "Lo siento, tuve un problema procesando tu solicitud. Por favor, intenta de nuevo.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Hubo un error al conectar con el servicio de IA. ¿Podemos agendar una reunión directa mejor?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-brand-primary text-white shadow-2xl transition-all hover:scale-105 active:scale-95 group",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <div className="relative">
          <Bot className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-brand-primary rounded-full animate-pulse"></div>
        </div>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-slate-100">
          Asistente IA • Online
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            id="ia"
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[420px] h-[600px] bg-white border border-slate-200 rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.1)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-brand-primary font-bold text-sm">Asistente Maricunga IA</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter font-bold">Activo • Consultas Técnicas</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-brand-primary transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar">
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex flex-col gap-1.5 max-w-[85%]",
                    m.role === 'user' ? "ml-auto" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "px-4 py-3 text-sm font-medium",
                    m.role === 'user' 
                      ? "bg-brand-accent text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl shadow-md shadow-brand-accent/10" 
                      : "bg-slate-100 text-slate-700 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-l-4 border-brand-accent"
                  )}>
                    <div className="markdown-body prose prose-slate prose-sm max-w-none">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              
              {user && !leadSubmitted && messages.length > 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mr-auto flex flex-col gap-2 max-w-[85%] items-start"
                >
                  <button 
                    onClick={saveLead}
                    disabled={isSubmittingLead}
                    className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-brand-accent border border-blue-100 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all"
                  >
                    {isSubmittingLead ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                    Me interesa invertir
                  </button>
                </motion.div>
              )}

              {leadSubmitted && (
                <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-bold uppercase tracking-widest bg-emerald-50 w-fit px-4 py-2 rounded-full border border-emerald-100">
                  <CheckCircle2 className="w-3 h-3" />
                  Interés registrado correctamente
                </div>
              )}
              {isLoading && (
                <div className="bg-slate-100 px-4 py-3 rounded-2xl w-fit">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-slate-50">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu duda aquí..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 px-5 pr-12 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-accent focus:bg-white transition-all text-slate-800"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1.5 p-2 bg-brand-accent text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-primary transition-colors shadow-lg shadow-brand-accent/20"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
                {['¿Cómo invertir?', 'Serie B', 'Tierras Raras'].map((q) => (
                  <button
                    key={q}
                    onClick={() => { setInput(q); }}
                    className="text-[10px] px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 font-bold uppercase tracking-tighter hover:bg-slate-100 whitespace-nowrap transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
