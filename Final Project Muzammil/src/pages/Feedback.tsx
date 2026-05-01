import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Send, CheckCircle, MessageSquare, User, Mail, Sparkles } from 'lucide-react';

export default function Feedback() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, rating }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setRating(5);
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('A connection error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition relative overflow-hidden">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex p-3 bg-primary/10 rounded-2xl text-primary mb-6">
             <Sparkles className="w-8 h-8" />
          </motion.div>
          <h1 className="text-5xl font-bold text-white mb-6 font-sans">Share Your <span className="text-primary italic">Feedback</span></h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Your feedback helps us improve the network and serve the community better. We read every message!
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-dark rounded-[4rem] p-8 md:p-20 relative overflow-hidden border border-white/5 shadow-2xl">
           <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[100px] -z-10" />
           <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  <div className="flex flex-col items-center space-y-4 mb-8">
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Rate your experience</p>
                     <div className="flex space-x-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                           <button 
                             key={star} 
                             type="button" 
                             onClick={() => setRating(star)}
                             className="transition-all active:scale-90 hover:scale-110"
                           >
                              <Star className={`w-12 h-12 transition-colors ${star <= rating ? 'fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]' : 'text-white/10'}`} />
                           </button>
                        ))}
                     </div>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-3xl text-sm font-medium text-center">
                      {error}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-10">
                     <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-slate-300 ml-1 flex items-center"><User className="w-4 h-4 mr-2 text-primary" /> Full Name</label>
                        <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-6 bg-white/5 border border-white/10 rounded-3xl outline-none focus:bg-white/10 focus:ring-4 focus:ring-primary/10 text-white placeholder:text-slate-600" placeholder="Enter your name" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-slate-300 ml-1 flex items-center"><Mail className="w-4 h-4 mr-2 text-primary" /> Email</label>
                        <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-6 bg-white/5 border border-white/10 rounded-3xl outline-none focus:bg-white/10 focus:ring-4 focus:ring-primary/10 text-white placeholder:text-slate-600" placeholder="your@email.com" />
                     </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-300 ml-1 flex items-center"><MessageSquare className="w-4 h-4 mr-2 text-primary" /> Your Experience</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-6 bg-white/5 border border-white/10 rounded-[2rem] outline-none h-44 resize-none focus:bg-white/10 focus:ring-4 focus:ring-primary/10 text-white placeholder:text-slate-600" placeholder="What's on your mind?" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full group bg-primary text-white p-2 pl-10 pr-2 rounded-full font-bold flex items-center justify-between hover:bg-primary/90 transition-all active:scale-95 shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="uppercase tracking-widest text-sm font-bold">{loading ? 'Submitting...' : 'Submit Feedback'}</span>
                    <div className="bg-white/20 p-4 rounded-full group-hover:translate-x-2 transition-transform"><Send className="w-6 h-6 text-white" /></div>
                  </button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                   <div className="inline-flex p-10 bg-primary/20 rounded-[3rem] mb-10 text-primary shadow-2xl shadow-primary/10">
                      <CheckCircle className="w-24 h-24 animate-bounce" />
                   </div>
                   <h3 className="text-4xl font-bold text-white mb-6">Thanks for the Love!</h3>
                   <p className="text-lg text-slate-300 max-w-sm mx-auto leading-relaxed mb-12">We truly appreciate you taking the time to share your experience with us.</p>
                   <button onClick={() => setIsSubmitted(false)} className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold transition-all">Submit another feedback?</button>
                </motion.div>
              )}
           </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
