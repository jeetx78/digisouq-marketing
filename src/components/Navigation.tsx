import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const [hidden, setHidden] = useState(false);
  // New State for Mobile Menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Helper to close menu when a link is clicked
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
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
          <div className="flex items-center justify-between h-24">
            
            {/* LOGO + SPLIT TEXT */}
            <Link to="/" onClick={closeMenu} className="flex items-center gap-4 group z-50 relative">
              <img 
                src="/logo.png" 
                alt="Digisouq Logo" 
                className="h-16 w-auto object-contain"
              />
              <div className="flex items-baseline group-hover:opacity-80 transition-opacity">
                <span className="text-white text-2xl font-light tracking-wider uppercase">
                  
                </span>
                <span className="text-red-600 text-2xl font-light tracking-wider ml-1">
                  
                </span>
              </div>
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

            {/* Mobile Menu Button (Toggle) */}
            <button 
              className="md:hidden text-white z-50 relative p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 md:hidden flex flex-col justify-center items-center gap-8"
          >
            <Link
              to="/"
              onClick={closeMenu}
              className={`text-3xl font-light tracking-tight ${
                isActive('/') ? 'text-white' : 'text-gray-500'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={`text-3xl font-light tracking-tight ${
                isActive('/about') ? 'text-white' : 'text-gray-500'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className={`text-3xl font-light tracking-tight ${
                isActive('/services') ? 'text-white' : 'text-gray-500'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`text-3xl font-light tracking-tight ${
                isActive('/contact') ? 'text-white' : 'text-gray-500'
              }`}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}