import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Package, User, MapPin, Phone, MessageSquare, Users } from 'lucide-react';

export default function Request() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    peopleCount: '',
    reason: '',
    contact: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', location: '', peopleCount: '', reason: '', contact: '' });
      } else {
        setError('Failed to submit request. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      setError('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="order-2 md:order-1"
          >
            <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6 italic">Request Food Form</h2>
                    
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl text-sm font-medium">
                        {error}
                      </div>
                    )}

                    <div className="space-y-2">
                       <label className="text-sm font-semibold text-slate-300 flex items-center"><User className="w-4 h-4 mr-2 text-primary" /> Full Name / Organization</label>
                       <input 
                         required
                         type="text" 
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-500"
                         placeholder="Your name"
                       />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300 flex items-center"><Phone className="w-4 h-4 mr-2 text-primary" /> Contact Number</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.contact}
                          onChange={(e) => setFormData({...formData, contact: e.target.value})}
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-500"
                          placeholder="+92 3XX XXX XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300 flex items-center"><Package className="w-4 h-4 mr-2 text-primary" /> No. of People</label>
                        <input 
                          required
                          type="number" 
                          value={formData.peopleCount}
                          onChange={(e) => setFormData({...formData, peopleCount: e.target.value})}
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-500"
                          placeholder="e.g. 5"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300 flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary" /> Delivery Address</label>
                      <input 
                        required
                        type="text" 
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-500"
                        placeholder="Where should we deliver?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300 flex items-center"><MessageSquare className="w-4 h-4 mr-2 text-primary" /> Reason for Request (Optional)</label>
                      <textarea 
                        value={formData.reason}
                        onChange={(e) => setFormData({...formData, reason: e.target.value})}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none h-32 text-white placeholder:text-slate-500"
                        placeholder="Briefly explain your need..."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full py-5 bg-primary text-white font-bold rounded-2xl flex items-center justify-center space-x-2 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{loading ? 'Sending Request...' : 'Send Request'}</span>
                      {!loading && <Send className="w-5 h-5" />}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="inline-flex p-6 bg-primary/10 rounded-full mb-8 text-primary">
                      <CheckCircle className="w-16 h-16" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Request Received</h3>
                    <p className="text-slate-300 mb-8 max-w-sm mx-auto leading-relaxed">
                      We've logged your request. Our team will verify it and match you with a nearby donation as soon as possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold hover:underline"
                    >
                      Need More Help?
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          <div className="order-1 md:order-2">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Need Help? We're Here
            </span>
            <h1 className="text-5xl font-bold text-white mb-8 leading-tight">No One Should <br />Go <span className="text-primary">Hungry</span></h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              If you or someone you know is struggling to find food, please fill out the request form. Our network of donors is ready to help.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 glass rounded-3xl border border-white/10 shadow-sm flex items-center space-x-5">
                <div className="bg-primary/10 p-3 rounded-xl text-primary"><Users className="w-6 h-6" /></div>
                <p className="text-slate-200 font-medium italic">"Over 5000 families were helped through this platform last month."</p>
              </div>
              <div className="p-6 glass rounded-3xl border border-white/10 shadow-sm flex items-center space-x-5">
                <div className="bg-secondary/10 p-3 rounded-xl text-secondary"><Package className="w-6 h-6" /></div>
                <p className="text-slate-200 font-medium italic">"Available for large groups, schools, and local charities."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
