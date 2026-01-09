// src/pages/Contact.tsx
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
            >
              Have a project in mind? We'd love to hear about it. Share your vision and let's explore how we can bring it to life.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16 lg:gap-24">
            
            {/* CONTACT INFO */}
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
                      <a href="tel:+1234567890" className="text-white font-light hover:text-gray-300 transition-colors">
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

              <div>
                <h3 className="text-xl font-light tracking-tight mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light">Monday - Friday</span>
                    <span className="text-white font-light">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light">Saturday</span>
                    <span className="text-white font-light">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light">Sunday</span>
                    <span className="text-white font-light">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORM SECTION */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               className="md:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-gray-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-light focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-light focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-light text-gray-400 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-light focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-light text-gray-400 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      // Added [&>option]:bg-black to ensure dropdown options have a black background
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-light focus:outline-none focus:border-white/30 transition-colors [&>option]:bg-black"
                    >
                      <option value="">Select a service</option>
                      <option value="real-estate">Real Estate Marketing</option>
                      <option value="restaurant">Restaurant Marketing</option>
                      <option value="beauty">Beauty Marketing</option>
                      <option value="website">Website Development</option>
                      <option value="ai">AI Automation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-light focus:outline-none focus:border-white/30 transition-colors resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-8 py-4 bg-white text-black text-sm font-light tracking-wide hover:bg-gray-200 transition-colors"
                >
                  Send message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">© 2024 digisouq. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="/" className="text-gray-500 text-sm font-light hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-500 text-sm font-light hover:text-white transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}