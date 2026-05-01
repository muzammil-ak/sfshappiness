import { motion } from 'motion/react';
import { Search, Heart, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Post Food',
    desc: 'Donors list surplus food with details and pickup location.',
    icon: Search,
    color: 'bg-primary'
  },
  {
    title: 'Match & Verify',
    desc: 'Our system matches it with nearby requests or NGOs.',
    icon: Heart,
    color: 'bg-secondary'
  },
  {
    title: 'Pickup & Deliver',
    desc: 'Volunteers or NGOs collect the food for delivery.',
    icon: Truck,
    color: 'bg-blue-500'
  },
  {
    title: 'Success',
    desc: 'Feed the hungry and reduce waste. Happy sharing!',
    icon: CheckCircle,
    color: 'bg-emerald-500'
  }
];

export default function HowItWorks() {
  return (
    <div className="page-transition">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">How It Works</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our platform connects surplus food from donors to those in need through a simple and efficient process.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/5 -z-10 translate-y-[-50%]" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-[2rem] glass-dark ${step.color.replace('bg-', 'text-')} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform border border-white/10 group-hover:border-primary/50`}>
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center glass p-12 md:p-20 rounded-[4rem] border-white/5">
          <div>
             <h2 className="text-3xl font-bold text-white mb-6 italic underline decoration-primary/30">Seamless Logistics</h2>
             <p className="text-slate-300 leading-relaxed mb-6">
                We use real-time tracking and a vast network of local volunteers to ensure that food is delivered while it is still fresh and safe in Tando Muhammad Khan.
             </p>
             <ul className="space-y-4">
               {['Instant notifications', 'Verified delivery partners', 'Quality checkpoints', 'Transparent tracking'].map((item, i) => (
                 <li key={i} className="flex items-center space-x-3 text-slate-200 font-medium">
                   <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-xl h-[400px] border border-white/5">
             <img src="https://images.unsplash.com/photo-1594844115436-f08a8f1ca0b9?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Delivery" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </div>
  );
}
