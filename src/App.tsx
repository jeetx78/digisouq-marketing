import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; 
import ScrollToTop from './components/ScrollToTop';// Ensure you have this, or remove if not
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services'; // <--- IMPORT THIS
import IntroAnimation from './components/IntroAnimation'; // <--- IMPORT THIS

function App() {
  return (
    <Router>
      <ScrollToTop />
      <IntroAnimation /> {/* <--- ADD THIS */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* ADD THIS ROUTE */}
        <Route path="/services" element={<Services />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;