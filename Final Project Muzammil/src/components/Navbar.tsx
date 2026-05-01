import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, Utensils, Info, BookOpen, Mail, Home, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Info },
  { name: 'How It Works', path: '/how-it-works', icon: Utensils },
  { name: 'Donate', path: '/donate', icon: Heart },
  { name: 'Volunteer', path: '/volunteer', icon: Users },
  { name: 'Awareness', path: '/awareness', icon: BookOpen },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="bg-primary p-2.5 rounded-xl shadow-lg shadow-primary/20 transition-transform"
            >
              <Utensils className="text-white w-6 h-6" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Save<span className="text-primary group-hover:text-secondary transition-colors">Food</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-primary relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-slate-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-secondary text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 hover:scale-105 active:scale-95"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-4 py-3 border-b border-white/5 font-bold uppercase tracking-widest text-xs transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-slate-400'
                  }`}
                >
                  <link.icon className={`w-5 h-5 ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'}`} />
                  <span>{link.name}</span>
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block bg-secondary text-white text-center py-5 rounded-2xl font-bold mt-8 shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
