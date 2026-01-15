import { useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js-na2.hsforms.net/forms/embed/244873659.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm text-gray-500 font-light tracking-widest uppercase mb-6"
            >
              Get in Touch
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-none"
            >
              Let's create
              <br />
              <span className="italic font-extralight text-gray-300">something great.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16 lg:gap-24">
            
            {/* CONTACT INFO (Left Side) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:col-span-2 space-y-12"
            >
              <div>
                <h2 className="text-3xl font-light tracking-tight mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gray-500 mt-1 stroke-[1.5]" />
                    <div>
                      <p className="text-sm text-gray-500 font-light mb-1">Email</p>
                      <a href="mailto:digisouq.in@gmail.com" className="text-white font-light hover:text-gray-300 transition-colors">
                        digisouq.in@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gray-500 mt-1 stroke-[1.5]" />
                    <div>
                      <p className="text-sm text-gray-500 font-light mb-1">Phone</p>
                      <a href="tel:8447240544" className="text-white font-light hover:text-gray-300 transition-colors">
                        84472 40544
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gray-500 mt-1 stroke-[1.5]" />
                    <div>
                      <p className="text-sm text-gray-500 font-light mb-1">Office</p>
                      <p className="text-white font-light">
                        123 Business District
                        <br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORM SECTION - UPDATED TO WHITE THEME */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               // CHANGED: bg-white, text-black, light borders
               className="md:col-span-3 bg-white p-8 rounded-sm border border-gray-200 text-black shadow-xl"
            >
              <h3 className="text-xl font-light mb-6 text-black">Send us a message</h3>
              
              <div 
                className="hs-form-frame" 
                data-region="na2" 
                data-form-id="7b603c18-6b77-4ba4-8ad8-cd72b9cd5ba2" 
                data-portal-id="244873659"
              >
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">© 2024 digisouq. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="/" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Home</a>
              <a href="/about" className="text-gray-500 text-sm font-light hover:text-white transition-colors">About</a>
              <a href="/contact" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}