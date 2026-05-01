import { motion } from 'motion/react';
import { Target, Heart, Scale, Users } from 'lucide-react';

const missionCards = [
  { title: 'Our Goal', text: 'To eliminate hunger and reduce food waste by building a robust logistics network between donors and receivers.', icon: Target },
  { title: 'Zero Waste', text: 'Promoting a sustainable lifestyle where no edible food is thrown into the trash.', icon: Scale },
  { title: 'Community Support', text: 'Strengthening local communities through the simple act of sharing and kindness.', icon: Users },
  { title: 'Kindness', text: 'Creating a culture of empathy where everyone looks out for the less fortunate.', icon: Heart },
];

export default function About() {
  return (
    <div className="page-transition">
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About the Project</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Save Food was born out of a simple observation: there's plenty of food in our world; it's just not distributed well.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 underline decoration-secondary decoration-4 underline-offset-8">What is Food Waste?</h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Food waste refers to food that is fit for consumption but consciously discarded at the retail or consumption phases. This happens in homes, restaurants, and at events where surplus food is thrown away.
              </p>
              <p>
                It's not just the food itself that's wasted; it's also the water, energy, land, and labor that went into producing it. Food waste is a major contributor to climate change, producing greenhouse gases when it rots in landfills.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl h-96 border border-white/5 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2013" 
              className="w-full h-full object-cover" 
              alt="Food waste problem"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
          </motion.div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why is it a problem?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-dark p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-white/5 hover:border-primary/50 group">
               <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Economic Loss</h3>
               <p className="text-slate-400 text-sm leading-relaxed">The global economic cost of food waste is estimated to be $1 trillion annually. This is a massive drain on resources that could be used for education, healthcare, and infrastructure.</p>
            </div>
            <div className="glass-dark p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-white/5 hover:border-secondary/50 group">
               <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">Environmental Impact</h3>
               <p className="text-slate-400 text-sm leading-relaxed">If food waste were a country, it would be the third-largest greenhouse gas emitter in the world. It contributes significantly to global warming and deforestation.</p>
            </div>
            <div className="glass-dark p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-white/5 hover:border-blue-500/50 group">
               <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">Ethical Concerns</h3>
               <p className="text-slate-400 text-sm leading-relaxed">While millions go to bed hungry, we discard perfectly good nutrition. Distributing this surplus is not just an environmental necessity, but a moral imperative.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px]" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-16 text-center">Our Mission</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {missionCards.map((card, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-2">
                    <card.icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold">{card.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-8 md:p-16 rounded-[4rem] border border-white/10"
        >
          <div className="w-full relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] -z-10" />
             <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Meet the Visionary</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Muzammil Akbar</h2>
             <p className="text-xl text-slate-100 leading-relaxed mb-8 font-light max-w-4xl">
              "Save Food is not just a project; it's a commitment to humanity. My goal is to ensure that every surplus meal finds a plate, and no individual goes to bed hungry."
             </p>
             <div className="space-y-6 text-slate-400 leading-relaxed max-w-4xl text-lg">
                <p>
                  Muzammil Akbar is a visionary technologist and the founder of Save Food. Driven by a deep commitment to social welfare and environmental sustainability, he established this platform to bridge the gap between food surplus and food scarcity, ensuring that no meal goes to waste in Tando Muhammad Khan and beyond.
                </p>
                <p>
                  With a background in software engineering and a passion for community building, Muzammil leads the mission to transform our relationship with food resources through innovative logistics and a volunteer-driven network.
                </p>
             </div>
             <div className="mt-8 pt-8 border-t border-white/10 flex items-center space-x-6">
                <div>
                   <p className="text-white font-bold">Muzammil Akbar</p>
                   <p className="text-slate-500 text-sm uppercase tracking-tighter">Founder & CEO, Save Food</p>
                </div>
             </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
