import { motion } from 'motion/react';
import { Lightbulb, Droplets, Trash2, ShoppingCart, Apple, Wind } from 'lucide-react';

const tips = [
  { 
    title: 'Shelf Life Savvy', 
    text: 'Understand the difference between "use-by" and "best-before" dates. Many foods are still safe to eat after the best-before date.', 
    icon: Lightbulb, 
    color: 'bg-yellow-500' 
  },
  { 
    title: 'Smart Shopping', 
    text: 'Plan your meals for the week and make a list. Avoid impulse buying large quantities of perishable items.', 
    icon: ShoppingCart, 
    color: 'bg-blue-500' 
  },
  { 
    title: 'Proper Storage', 
    text: 'Store fruits and vegetables correctly. Some items (like bananas) should be kept away from others to prevent early ripening.', 
    icon: Apple, 
    color: 'bg-red-500' 
  },
  { 
    title: 'Compost It', 
    text: 'Instead of throwing scraps in the trash, start a compost bin. It turns waste into nutrient-rich soil for your garden.', 
    icon: Trash2, 
    color: 'bg-emerald-500' 
  },
  { 
    title: 'Rescue Water', 
    text: 'Wasting food also wastes the thousands of gallons of water used to grow and process it. Save one, save both.', 
    icon: Droplets, 
    color: 'bg-sky-500' 
  },
  { 
    title: 'Less Air Flow', 
    text: 'Freeze leftovers or herbs in airtight containers. Freezing acts as a "pause button" on food expiration.', 
    icon: Wind, 
    color: 'bg-slate-500' 
  },
];

export default function Awareness() {
  return (
    <div className="page-transition">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:w-1/2 relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2070" 
                alt="Awareness" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-[100px] -z-0" />
          </motion.div>
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">Be Aware, <br /><span className="text-primary italic">Act Now</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Every small action contributes to a larger movement. Raising awareness is the first step toward a sustainable future for our planet.
            </p>
            <div className="p-8 glass-dark rounded-[2rem] border-l-8 border-primary italic text-slate-300">
               "We don't need a few people doing zero waste perfectly. We need millions of people doing it imperfectly."
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-12 text-center">Tips to Reduce Food Waste</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 glass-dark rounded-[3rem] hover:scale-105 transition-all duration-300 border border-white/5 hover:border-primary/30"
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white ${tip.color} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                <tip.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{tip.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{tip.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 glass-primary rounded-[4rem] text-center border border-primary/20 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/10 blur-[100px]" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Knowledge Is Power</span>
            <h2 className="text-4xl font-bold text-white mb-8 max-w-2xl mx-auto">Did you know that 25% of the food we buy is thrown away?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
               Imagine buying four bags of groceries and leaving one at the store exit. That's essentially what we do every week. By following simple storage and shopping hacks, you can save up to $1,500 a year while helping the planet.
            </p>
            <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all hover:bg-primary/90 active:scale-95">
               Share these tips with friends
            </button>
        </div>
      </section>
    </div>
  );
}
