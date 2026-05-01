import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Package, AlertTriangle, Truck, Clock } from 'lucide-react';

const ruleSections = [
  {
    title: 'For Donors',
    icon: Package,
    color: 'text-primary',
    rules: [
      'Food must be fresh and fit for human consumption.',
      'Pack food items separately if they are of different types.',
      'Always mention the expiry or preparation date clearly.',
      'No partially eaten food is accepted.',
      'Wait for a verified volunteer or NGO for pickup.'
    ]
  },
  {
    title: 'Logistics & Security',
    icon: ShieldCheck,
    color: 'text-blue-500',
    rules: [
      'Volunteers must carry their digital ID at all times.',
      'Pickup locations should be clearly accessible.',
      'Delivery should be completed within 2 hours of pickup.',
      'Report any suspicious activity through the feedback form.'
    ]
  },
  {
    title: 'For Receivers',
    icon: Truck,
    color: 'text-secondary',
    rules: [
      'Verify the food quality immediately upon receipt.',
      'Consumed food should not be stored for more than 4 hours.',
      'Keep the delivery area clean and ready.',
      'Prioritize children and elderly for distribution.'
    ]
  }
];

export default function Rules() {
  return (
    <div className="page-transition">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">Rules & Guidelines</h1>
          <p className="text-lg text-slate-400 leading-relaxed italic">
            Safety and hygiene are our top priorities. Please follow these guidelines to ensure a smooth sharing experience for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {ruleSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-dark p-10 rounded-[3rem] border border-white/5 h-full hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5 group"
            >
              <div className={`mb-8 flex items-center space-x-3 ${section.color}`}>
                 <section.icon className="w-8 h-8" />
                 <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{section.title}</h3>
              </div>
              <ul className="space-y-6">
                 {section.rules.map((rule, i) => (
                   <li key={i} className="flex items-start space-x-3 text-slate-400 text-sm leading-relaxed">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${section.color.replace('text', 'bg')}`} />
                      <span>{rule}</span>
                   </li>
                 ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-red-500/5 border border-red-500/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
           <AlertTriangle className="absolute top-0 right-0 w-64 h-64 text-red-500/10 translate-x-1/4 -translate-y-1/4 -z-0" />
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold text-red-500 mb-6 uppercase tracking-tighter">Strict Termination Policy</h2>
              <p className="text-slate-300 leading-relaxed mb-10 italic">
                 Any user (Donor/Receiver/Volunteer) found violating food safety standards or engaging in misconduct will be permanently banned from the platform. We maintain a zero-tolerance policy for compromising safety.
              </p>
              <div className="grid grid-cols-2 gap-8 text-white font-bold">
                 <div className="flex items-center space-x-3"><Clock className="w-5 h-5 text-red-500" /> <span>24/7 Quality Check</span></div>
                 <div className="flex items-center space-x-3"><Calendar className="w-5 h-5 text-red-500" /> <span>Weekly Audits</span></div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
