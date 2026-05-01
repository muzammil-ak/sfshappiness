import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Package, User, MapPin, Phone, Coffee } from 'lucide-react';

export default function Donate() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    foodType: '',
    quantity: '',
    contact: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', location: '', foodType: '', quantity: '', contact: '' });
      } else {
        setError('Failed to submit donation. Please check your connection.');
      }
    } catch (error) {
      console.error('Error submitting donation:', error);
      setError('An unexpected error occurred. Please try again.');
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
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
              Become a Hero
            </span>
            <h1 className="text-5xl font-bold text-white mb-8 leading-tight">Donate Food, <br />Save <span className="text-secondary">Lives</span></h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Fill out the form to donate your surplus food. Once submitted, our team or nearby volunteers will contact you for pickup.
            </p>
            
            <div className="space-y-8">
               <div className="flex items-start space-x-6">
                  <div className="glass p-4 rounded-2xl shadow-sm text-secondary"><Package className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Check Quality</h4>
                    <p className="text-slate-400 text-sm">Please ensure the food is fresh and safe for consumption.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6">
                  <div className="glass p-4 rounded-2xl shadow-sm text-primary"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Mark Location</h4>
                    <p className="text-slate-400 text-sm">Be precise with your location for faster pickup.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6">
                  <div className="glass p-4 rounded-2xl shadow-sm text-blue-500"><Phone className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Stay Reachable</h4>
                    <p className="text-slate-400 text-sm">Keep your phone nearby after submission.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="glass-dark p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden border border-white/5 shadow-2xl shadow-primary/5"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10" />
            
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-semibold text-slate-300 flex items-center"><User className="w-4 h-4 mr-2 text-primary" /> Full Name</label>
                       <input 
                         required
                         type="text" 
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-600"
                         placeholder="John Doe"
                       />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300 flex items-center"><Phone className="w-4 h-4 mr-2 text-primary" /> Contact Number</label>
                        <input 
                         required
                         type="tel" 
                         value={formData.contact}
                         onChange={(e) => setFormData({...formData, contact: e.target.value})}
                         className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-600"
                         placeholder="+92 3XX XXX XXXX"
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary" /> Pickup Location</label>
                    <input 
                      required
                      type="text" 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-600"
                      placeholder="e.g. Near City Gate, Tando Muhammad Khan"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300 flex items-center"><Coffee className="w-4 h-4 mr-2 text-primary" /> Food Type</label>
                      <select 
                        required
                        value={formData.foodType}
                        onChange={(e) => setFormData({...formData, foodType: e.target.value})}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white appearance-none h-[60px]"
                      >
                        <option value="" className="bg-slate-900">Select category</option>
                        <option value="Veg" className="bg-slate-900">Vegetarian</option>
                        <option value="Non-Veg" className="bg-slate-900">Non-Vegetarian</option>
                        <option value="Fruits" className="bg-slate-900">Fruits & Veggies</option>
                        <option value="Packed" className="bg-slate-900">Packed / Canned</option>
                        <option value="Bakery" className="bg-slate-900">Bakery Items</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300 flex items-center"><Package className="w-4 h-4 mr-2 text-primary" /> Quantity</label>
                      <input 
                        required
                        type="text" 
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white placeholder:text-slate-600"
                        placeholder="e.g. for 10 people"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-2xl flex items-center justify-center space-x-3 shadow-xl shadow-secondary/20 transition-all active:scale-95 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? 'Submitting...' : 'Submit Donation'}</span>
                    {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="inline-flex p-8 bg-primary/10 rounded-full mb-8 text-primary shadow-2xl shadow-primary/20">
                    <CheckCircle className="w-20 h-20 animate-bounce" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">Goal Reached!</h3>
                  <p className="text-slate-300 mb-10 max-w-sm mx-auto leading-relaxed text-lg">
                    Your kindness is appreciated! We've received your details and will contact you for pickup.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold transition-all"
                  >
                    Donate More Food?
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Why Your Donation Matters Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-white/5"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Your Donation Matters</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Every year, millions of pounds of food are wasted while thousands go hungry. Your surplus can be a lifeline.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-[2rem] hover:scale-105 transition-transform duration-300">
               <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <CheckCircle className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-4">Quality First</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Ensure food is fresh and safe for consumption. We prioritize health and safety for all our recipients.</p>
            </div>
            <div className="glass p-8 rounded-[2rem] hover:scale-105 transition-transform duration-300 border-primary/20">
               <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                  <Package className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-4">Transparent Tracking</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Get updates on where your food goes and its impact. We ensure full transparency in the donation cycle.</p>
            </div>
            <div className="glass p-8 rounded-[2rem] hover:scale-105 transition-transform duration-300">
               <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                  <User className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-4">Community Impact</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Transforming surplus food into hope. We connect donors with communities in need, reducing waste effectively.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
