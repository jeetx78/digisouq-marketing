// src/pages/Home.tsx
import { Building2, Utensils, Gem, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

export default function Home() {
  const services = [
    {
      icon: Building2,
      title: 'Real Estate Marketing',
      description: 'Elevate your property listings with strategic campaigns that capture attention and drive qualified leads.',
    },
    {
      icon: Utensils,
      title: 'Restaurant Marketing',
      description: 'Transform your culinary brand with compelling storytelling and digital strategies that fill tables.',
    },
    {
      icon: Gem,
      title: 'Beauty Marketing',
      description: 'Showcase elegance and style with captivating visuals that define your brand and attract a loyal following.',
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Craft premium digital experiences with clean, functional websites that convert visitors into customers.',
    },
    {
      icon: Sparkles,
      title: 'AI Automation',
      description: 'Streamline operations and enhance efficiency with intelligent automation solutions tailored to your business.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.21, 0.47, 0.32, 0.98] as const 
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-none"
            >
              Marketing that
              <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="italic font-extralight text-gray-300 block mt-2"
              >
                moves minds.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl"
            >
              We blend strategic thinking with creative execution to help your business stand out in the digital marketplace.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            // Changed gap to accommodate the new box padding
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                // Added group, padding, border, and the hover:bg-white transition
                className="group p-8 border border-white/10 rounded-sm hover:bg-white transition-colors duration-300 cursor-default"
              >
                <div className="mb-6 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {/* Icon turns black on hover */}
                    <service.icon className="w-12 h-12 text-white/80 stroke-[1.5] group-hover:text-black transition-colors duration-300" />
                  </motion.div>
                </div>
                {/* Title turns black on hover */}
                <h3 className="text-3xl font-light mb-4 tracking-tight group-hover:text-black transition-colors duration-300">
                    {service.title}
                </h3>
                {/* Description turns dark gray on hover */}
                <p className="text-gray-400 leading-relaxed font-light text-lg group-hover:text-black/70 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRECISION SECTION */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8 leading-tight">
                  Precision meets creativity
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                  At digisouq, we don't just follow trends—we set them. Our approach combines data-driven insights with bold creative vision to deliver campaigns that resonate and results that matter.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  Whether you're launching a new property, building a restaurant brand, or transforming your digital presence, we bring the expertise and innovation you need to succeed.
                </p>
              </Reveal>
            </div>
            
            <Reveal delay={0.4}>
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-gray-800/20 rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-sm overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-black to-black"></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <Reveal>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Ready to elevate your brand?
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your marketing goals.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-black text-sm font-light tracking-wide hover:bg-gray-200 transition-colors"
            >
              Get in touch
            </motion.a>
          </div>
        </Reveal>
      </section>

      <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">© 2024 digisouq. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="/about" className="text-gray-500 text-sm font-light hover:text-white transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-500 text-sm font-light hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}