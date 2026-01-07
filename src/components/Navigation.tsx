import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-light tracking-wider">
            digisouq
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-light transition-colors ${
                isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-light transition-colors ${
                isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-light transition-colors ${
                isActive('/contact') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
