import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { Counter } from '../components/Counter';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We are committed to creating beautiful, memorable images and campaigns with absolute attention to detail.',
    },
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'Our team of experienced professionals brings fresh, innovative ideas to every project.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We act as strategic partners, working closely with you to understand your audience and goals.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive to offer exceptional service and deliver timeless results that drive engagement.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } }
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
              About Us
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-none"
            >
              We are
              <br />
              <span className="italic font-extralight text-gray-300">digisouq.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
            >
              A professional creative agency dedicated to capturing your special moments and defining your brand's core values.
            </motion.p>
          </div>
        </div>
      </section>

      {/* STORY SECTION - Content aligned with Crawl Digitally's "History and Commitment" */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
                  Our commitment
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6">
              <Reveal delay={0.2}>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  We have become a trusted name in the creative sector by offering a holistic approach that tackles every aspect of your brand story. We don't just deliver services; we build relationships.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  Conveniently located and client-focused, we strive to offer exceptional service. Our expertise spans a variety of needs—from weddings and corporate events to comprehensive digital marketing strategies.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  With a team of skilled photographers, designers, and strategists known for their exceptional skills, we ensure every client leaves with results they will cherish for a lifetime.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-center">
              What drives us
            </h2>
          </Reveal>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <value.icon className="w-10 h-10 text-white/80 stroke-[1.5] group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-light mb-3 tracking-tight">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE SECTION (With Animated Counters) */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
                Our impact
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                We are dedicated to delivering high-quality services that capture the essence of every special moment and brand story.
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <Counter value={50} label="Projects Delivered" suffix="+" />
                <Counter value={15} label="Team Members" suffix="+" />
                <Counter value={98} label="Client Satisfaction" suffix="%" />
                <Counter value={24} label="Support Available" suffix="/7" />
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
              Let's work together
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
              Ready to transform your brand? Get in touch and let's start a conversation.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-white text-black text-sm font-light tracking-wide hover:bg-gray-200 transition-colors"
              >
                Contact us
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
              <Link to="/contact" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}