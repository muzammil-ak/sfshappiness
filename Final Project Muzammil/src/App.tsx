/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Request from './pages/Request';
import Awareness from './pages/Awareness';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Volunteer from './pages/Volunteer';
import Rules from './pages/Rules';
import Feedback from './pages/Feedback';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <div className="site-bg-container">
          <div className="site-bg-image"></div>
          <div className="site-bg-overlay"></div>
          <div className="site-bg-glow"></div>
        </div>
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/request" element={<Request />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
