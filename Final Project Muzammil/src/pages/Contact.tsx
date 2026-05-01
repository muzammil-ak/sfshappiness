import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('A connection error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 uppercase tracking-tight">Get in Touch</h1>
          <p className="text-lg text-slate-300">Have questions or want to partner with us? We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 glass rounded-[4rem] p-4 shadow-2xl border border-white/5">
          {/* Info Side */}
          <div className="md:col-span-1 bg-slate-950/40 backdrop-blur-3xl rounded-[3.5rem] p-10 md:p-14 text-white border border-white/5">
            <h3 className="text-3xl font-bold mb-10">Contact Details</h3>
            <div className="space-y-10">
               <div className="flex items-start space-x-6 group">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary transition-colors group-hover:text-white border border-primary/20"><Mail className="w-6 h-6" /></div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1 tracking-widest">Email Us</p>
                    <p className="text-lg font-medium">savefoodpk@gmail.com</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6 group">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary transition-colors group-hover:text-white border border-primary/20"><Phone className="w-6 h-6" /></div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1 tracking-widest">Call Us</p>
                    <p className="text-lg font-medium">+92 3XX XXX XXXX</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6 group">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary transition-colors group-hover:text-white border border-primary/20"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1 tracking-widest">Visit Us</p>
                    <p className="text-lg font-medium leading-relaxed">Tando Muhammad Khan, <br />Sindh, Pakistan</p>
                  </div>
               </div>
            </div>

            <div className="mt-20 flex space-x-4">
               {['Twitter', 'Instagram', 'Github'].map((social) => (
                 <a key={social} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all font-bold text-[10px] uppercase text-slate-400">{social}</a>
               ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-2 p-8 md:p-14">
    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.form 
          key="form"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Send a Message</h2>
            {error && <span className="text-red-500 text-sm font-medium">{error}</span>}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Your Name</label>
                       <input 
                         required
                         type="text" 
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl focus:bg-white/10 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-white placeholder:text-slate-500"
                         placeholder="Enter your name"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Email Address</label>
                       <input 
                         required
                         type="email" 
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl focus:bg-white/10 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-white placeholder:text-slate-500"
                         placeholder="your@email.com"
                       />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Subject</label>
                    <input 
                      required
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl focus:bg-white/10 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-white placeholder:text-slate-500"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl focus:bg-white/10 focus:ring-4 focus:ring-primary/10 h-44 resize-none transition-all outline-none text-white placeholder:text-slate-500"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="group bg-primary text-white p-2 pl-10 pr-2 rounded-full font-bold flex items-center space-x-8 hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <div className="bg-white/20 p-4 rounded-full group-hover:translate-x-2 transition-transform"><Send className="w-6 h-6" /></div>
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="p-8 bg-primary/10 rounded-[3rem] mb-10 text-primary">
                    <MessageCircle className="w-20 h-20" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6">Message Sent!</h3>
                  <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
                    We've received your inquiry and will get back to you as soon as possible. Thank you for reaching out!
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 font-bold text-primary group"
                  >
                    Send another message? <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
