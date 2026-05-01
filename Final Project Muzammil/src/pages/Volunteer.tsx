import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, Phone, MapPin, Send, CheckCircle, Heart } from 'lucide-react';

export default function Volunteer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    availability: 'Weekend'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', location: '', availability: 'Weekend' });
      } else {
        setError('Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error registering volunteer:', error);
      setError('An error occurred. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-white mb-8 leading-tight">Become a <span className="text-primary underline">Volunteer</span></h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Join our army of heroes who help in logistics, verification, and distribution in Tando Muhammad Khan. Your small effort can feed hundreds.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="p-8 glass rounded-[2.5rem] text-center border-white/5">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2">Impactful</h4>
                  <p className="text-slate-400 text-xs text-center">Transforming lives with every delivery.</p>
               </div>
               <div className="p-8 glass rounded-[2.5rem] text-center border-white/5">
                  <MapPin className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2">Local</h4>
                  <p className="text-slate-400 text-xs text-center">Help within your own neighborhood.</p>
               </div>
            </div>
            
            <div className="mt-12 rounded-[2.5rem] overflow-hidden shadow-2xl h-80">
               <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Volunteer" referrerPolicy="no-referrer" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 w-full glass-dark p-8 md:p-14 rounded-[3.5rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 blur-[100px] -z-10" />
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Volunteer Application</h2>
                  
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-3xl text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center"><User className="w-4 h-4 mr-2 text-primary" /> Full Name</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl focus:bg-white/10 focus:ring-4 focus:ring-primary/10 outline-none text-white placeholder:text-slate-600" placeholder="Enter your name" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center"><Mail className="w-4 h-4 mr-2 text-primary" /> Email</label>
                        <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl focus:bg-white/10 focus:ring-4 focus:ring-primary/10 outline-none text-white placeholder:text-slate-600" placeholder="your@email.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center"><Phone className="w-4 h-4 mr-2 text-primary" /> Phone</label>
                        <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl focus:bg-white/10 focus:ring-4 focus:ring-primary/10 outline-none text-white placeholder:text-slate-600" placeholder="+92 ..." />
                     </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary" /> Your City / Area</label>
                    <input required type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl focus:bg-white/10 focus:ring-4 focus:ring-primary/10 outline-none text-white placeholder:text-slate-600" placeholder="e.g. Tando Muhammad Khan" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest">Availability</label>
                    <select value={formData.availability} onChange={(e) => setFormData({...formData, availability: e.target.value})} className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl focus:bg-white/10 focus:ring-4 focus:ring-primary/10 outline-none appearance-none text-white transition-colors h-[64px]">
                       <option className="bg-slate-900">Weekend</option>
                       <option className="bg-slate-900">Weekday (Morning)</option>
                       <option className="bg-slate-900">Weekday (Evening)</option>
                       <option className="bg-slate-900">Flexible</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full p-6 bg-primary text-white font-bold rounded-3xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center space-x-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? 'Registering...' : 'Register as Volunteer'}</span>
                    {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                   <div className="bg-primary/20 p-10 rounded-full inline-block mb-8 text-primary shadow-2xl shadow-primary/10">
                      <CheckCircle className="w-24 h-24 animate-bounce" />
                   </div>
                   <h3 className="text-4xl font-bold text-white mb-6">Welcome to the Team!</h3>
                   <p className="text-slate-300 leading-relaxed max-w-sm mx-auto mb-10 text-lg">We've received your application. Our coordinator will contact you shortly about joining our mission.</p>
                   <button onClick={() => setIsSubmitted(false)} className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold transition-all">Submit Another?</button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
