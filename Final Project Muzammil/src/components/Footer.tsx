import { Link } from 'react-router-dom';
import { Utensils, Github, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary p-2.5 rounded-xl shadow-lg shadow-primary/20">
                <Utensils className="text-white w-6 h-6" />
              </div>
              <span className="text-3xl font-bold tracking-tighter text-white">
                Save<span className="text-primary italic">Food</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Transforming surplus food into hope. We connect donors with communities in need, reducing waste and fighting hunger across India.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"><Github className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link to="/feedback" className="hover:text-primary transition-colors">Feedback</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-primary">Get Involved</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/donate" className="hover:text-primary transition-colors">Donate Food</Link></li>
              <li><Link to="/request" className="hover:text-primary transition-colors">Request Food</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary transition-colors">Become a Volunteer</Link></li>
              <li><Link to="/rules" className="hover:text-primary transition-colors">Rules & Guidelines</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary"><MapPin className="w-4 h-4 shrink-0" /></div>
                <div>
                   <p className="text-white font-semibold">Location</p>
                   <p className="text-slate-500">Tando Muhammad Khan, Sindh, Pakistan</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-2 rounded-lg text-secondary"><Phone className="w-4 h-4 shrink-0" /></div>
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <p className="text-slate-500">+92 3XX XXX XXXX</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-2 rounded-lg text-blue-500"><Mail className="w-4 h-4 shrink-0" /></div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <p className="text-slate-500">savefoodpk@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium uppercase tracking-tight">
            © 2026 Save Food. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs font-medium uppercase tracking-tight">
             <Link to="/rules" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/rules" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
