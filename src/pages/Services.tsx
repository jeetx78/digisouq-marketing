import { 
  BookOpen, 
  Palette, 
  PenTool, 
  Globe, 
  Share2, 
  Search, 
  Camera, 
  ArrowRight,
  Layers,
  LineChart
} from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';

export default function Services() {
  // detailed services based on Proposal PDF Content
  const services = [
    {
      icon: BookOpen,
      title: 'Project Brochures',
      description: 'Elegant brochures showcasing your property\'s location, floor plans, amenities, and lifestyle. We design tangible assets that leave a lasting impression and drive engagement for real estate developers.',
    },
    {
      icon: Palette,
      title: 'Branding Strategy',
      description: 'Your visual identity is the soul of your business. We craft impactful logos and develop cohesive visuals that tell your story, build trust, and make your brand stand out in a competitive market.',
    },
    {
      icon: PenTool,
      title: 'Digital Creatives',
      description: 'Compelling online visuals—social posts, ads, videos, and landing pages—that build brand trust, capture attention, and generate leads across all digital touchpoints.',
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'We build dynamic WordPress sites for easy content management, fast static websites for performance, and high-end custom web experiences with advanced animations to make a powerful brand statement.',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build brand personality and drive direct customer engagement. We manage your presence on Instagram, Facebook, and YouTube to drive website traffic and build a loyal community.',
    },
    {
      icon: Search,
      title: 'Research & Story',
      description: 'To lead the market, you must understand it. We continuously monitor competitors and industry trends to refine your positioning and narrative, keeping you one step ahead.',
    },
    {
      icon: Camera,
      title: 'Photography & Videos',
      description: 'High-quality visuals are essential. We produce a suite of professional photos and videos designed to showcase your offerings and tell your brand\'s story in a visually stunning way.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
              Our Expertise
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-none"
            >
              Holistic
              <br />
              <span className="italic font-extralight text-gray-300">solutions.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
            >
              From strategic positioning to high-end production, we provide end-to-end marketing services tailored for growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID (The "Boxes Type Nav") */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Tilt
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                  perspective={1000}
                  scale={1.01}
                  transitionSpeed={1000}
                  className="h-full"
                >
                  <div className="group p-8 border border-white/10 rounded-sm hover:bg-white transition-colors duration-500 cursor-default relative overflow-hidden h-full flex flex-col min-h-[320px]">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-block p-3 border border-white/10 rounded-sm group-hover:border-black/10 transition-colors duration-500">
                        <service.icon className="w-8 h-8 text-white stroke-[1.5] group-hover:text-black transition-colors duration-500" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-light mb-4 tracking-tight group-hover:text-black transition-colors duration-500">
                        {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-black/70 transition-colors duration-500 flex-grow">
                      {service.description}
                    </p>

                    {/* Arrow Indicator (adds to the "Nav" feel) */}
                    <div className="mt-8 flex justify-end">
                       <ArrowRight className="w-6 h-6 text-transparent -translate-x-4 group-hover:text-black group-hover:translate-x-0 transition-all duration-500" />
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION (Holistic Approach) */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
                How we work
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                We believe in a structured yet flexible approach that puts your brand's unique needs at the center of every strategy.
              </p>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={0.2}>
                <div className="flex gap-6">
                  <div className="mt-2"><Search className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="text-xl text-white font-light mb-2">Discovery & Research</h3>
                    <p className="text-gray-400 font-light">We dive deep into your market, competitors, and audience to uncover the insights that will drive your success.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex gap-6">
                  <div className="mt-2"><Layers className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="text-xl text-white font-light mb-2">Strategy & Design</h3>
                    <p className="text-gray-400 font-light">We craft a comprehensive roadmap and visual identity that aligns with your business goals and resonates with your customers.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex gap-6">
                  <div className="mt-2"><LineChart className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="text-xl text-white font-light mb-2">Execution & Growth</h3>
                    <p className="text-gray-400 font-light">We launch your campaigns with precision and continuously optimize performance to ensure maximum ROI.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <Reveal>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Start your project
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
              Ready to see what holistic marketing can do for your business?
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-white text-black text-sm font-light tracking-wide hover:bg-gray-200 transition-colors"
              >
                Get in touch
              </motion.button>
            </Link>
          </div>
        </Reveal>
      </section>

      <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">© 2024 digisouq. All rights reserved.</p>
            <div className="flex gap-8">
              <Link to="/" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-500 text-sm font-light hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}