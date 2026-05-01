import { motion } from 'motion/react';
import { ArrowRight, Utensils, Users, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Donations Made', value: '12K+', icon: Utensils, color: 'text-primary' },
  { label: 'Families Fed', value: '8.5K', icon: Users, color: 'text-secondary' },
  { label: 'Cities Covered', value: '45+', icon: Globe, color: 'text-blue-500' },
  { label: 'Verified Partners', value: '120+', icon: ShieldCheck, color: 'text-emerald-500' },
];

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Save Food, Share Happiness
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-8">
                Stop Food Waste, <span className="text-secondary italic">Share</span> Happiness
              </h1>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
                Join our mission to bridge the gap between surplus food and those in need. Every donation counts in the fight against hunger.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/donate"
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold flex items-center group shadow-xl shadow-primary/20 transition-all active:scale-95"
                >
                  Donate Food
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/request"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all active:scale-95"
                >
                  Request Food
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&q=80&w=2070" 
                  alt="Sharing food" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-8 rounded-3xl text-center hover:scale-105 transition-transform border border-white/5"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-white/5 mb-6 ${stat.color} shadow-lg shadow-black/20`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <img src="https://images.unsplash.com/photo-1488459739572-428174523c6a?auto=format&fit=crop&q=80&w=2070" className="rounded-2xl shadow-lg border border-white/5 w-full aspect-video object-cover" alt="Food" referrerPolicy="no-referrer" />
                   <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2070" className="rounded-2xl shadow-lg border border-white/5 w-full aspect-square object-cover" alt="Market" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4">
                   <img src="https://images.unsplash.com/photo-1594844115436-f08a8f1ca0b9?auto=format&fit=crop&q=80&w=2070" className="rounded-2xl shadow-lg border border-white/5" alt="Grains" referrerPolicy="no-referrer" />
                   <div className="glass-primary rounded-2xl p-6 aspect-square flex flex-col justify-end">
                      <p className="text-primary font-bold text-xl leading-snug">Empowering thousands in Tando Muhammad Khan.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Why Should We <span className="text-primary underline decoration-primary/30 underline-offset-4 tracking-tighter">Save Food</span>?
              </h2>
              <div className="space-y-8">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Approximately 1.3 billion tonnes of food is wasted every year. Our mission is to transform this surplus into sustenance for our local community.
                </p>
                <div className="grid grid-cols-1 gap-6">
                   {[
                     { t: 'Donate', d: 'Share your surplus food easily through our platform.', c: 'primary' },
                     { t: 'Reach', d: 'We ensure food reaches the right families in time.', c: 'secondary' },
                     { t: 'Impact', d: 'Reducing waste while fighting hunger effectively.', c: 'blue-500' }
                   ].map((item, i) => (
                     <div key={i} className="flex items-start space-x-4 glass-dark p-4 rounded-2xl border-white/5 group hover:border-white/10 transition-colors">
                        <div className={`p-2 rounded-lg bg-${item.c}/10 text-${item.c}`}><ArrowRight className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-white mb-1">{item.t}</h4>
                           <p className="text-slate-400 text-sm">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
                <Link to="/how-it-works" className="inline-flex items-center space-x-2 text-primary font-bold group">
                  <span>See How It Works</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
