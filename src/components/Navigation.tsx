import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  // State to track if navbar should be hidden
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Logic: Hide nav if scrolling down > 150px, Show if scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO + TEXT SECTION */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Digisouq Logo" 
              className="h-10 w-auto object-contain" // Adjust h-10 to h-12 if you want it bigger
            />
            <span className="text-white text-2xl font-light tracking-wider group-hover:opacity-80 transition-opacity">
              digisouq
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                isActive('/services') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Services
            </Link>
            
            <Link
              to="/contact"
              className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                isActive('/contact') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden">
            <Link to="/contact" className="text-sm font-light text-white">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}