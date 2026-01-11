import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Search, Layers, LineChart } from 'lucide-react'; // Icons for the process section
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';

// 1. Reusable Card Component (Same as Home)
function ServiceCard({ service, isActive, onClick }: { service: any, isActive: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`
        relative shrink-0 cursor-pointer transition-all duration-500 ease-out
        ${isActive ? 'w-[350px] md:w-[450px] scale-100 opacity-100 z-10' : 'w-[300px] md:w-[350px] scale-90 opacity-60 grayscale-[50%] z-0'}
      `}
    >
      <div className={`
        bg-white text-black rounded-[2rem] p-4 flex flex-col h-[600px] shadow-2xl overflow-hidden
        ${isActive ? 'shadow-white/10' : ''}
      `}>
        {/* Image Area */}
        <div className="h-[60%] w-full rounded-[1.5rem] overflow-hidden mb-6 bg-gray-100 relative">
           <img 
             src={service.img} 
             alt={service.title} 
             className="w-full h-full object-cover"
             draggable="false"
           />
           {/* Shine effect for active card */}
           {isActive && (
             <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
           )}
        </div>

        {/* Text Area */}
        <div className="flex flex-col flex-grow px-2 pb-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{service.title}</h3>
          <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base line-clamp-5">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  // 2. Data with Images
  const sliderServices = [
    {
      id: 1,
      title: "Product Brochures",
      desc: "Elegant brochures showcasing your property's location, floor plans, and amenities, designed to leave a lasting impression.",
      img: "/pb.jpg"
    },
    {
      id: 2,
      title: "Branding Strategy",
      desc: "Where precision meets distinction. We craft unparalleled brand narratives and visual identities, ensuring unwavering consistency.",
      img: "/images.jpg"
    },
    {
      id: 3,
      title: "Digital Creatives",
      desc: "Compelling social posts, ads, videos, and landing pages that build trust, capture attention, and generate leads.",
      img: "/dc.jpg"
    },
    {
      id: 4,
      title: "Website Development",
      desc: "From dynamic WordPress sites to high-end custom experiences—we build flexible, secure, and user-friendly platforms.",
      img: "/fd.jpg"
    },
    {
      id: 5,
      title: "Social Media Marketing",
      desc: "Boost your online presence with strategic marketing. We craft tailored campaigns for genuine engagement.",
      img: "/smm.jpg"
    },
    {
      id: 6,
      title: "Research & Story",
      desc: "To lead the market, you must understand it. We continuously monitor trends to refine your brand's positioning.",
      img: "/bs.jpg"
    },
    {
      id: 7,
      title: "Photography & Videos",
      desc: "A visual journey where every click is an artful expression. Transforming moments into immersive experiences.",
      img: "/fv.jpeg"
    },
    {
      id: 8,
      title: "AI Automation",
      desc: "Streamline operations and enhance efficiency with intelligent automation solutions tailored to your business.",
      img: "/ai.png"
    }
  ];

  // 3. Scroll & Snap Logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const centerPoint = container.scrollLeft + (container.clientWidth / 2);
    
    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + (child.clientWidth / 2);
      const distance = Math.abs(childCenter - centerPoint);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    const target = children[index];
    const scrollPos = target.offsetLeft - (container.clientWidth / 2) + (target.clientWidth / 2);
    
    container.scrollTo({ left: scrollPos, behavior: 'smooth' });
  };

  // Center initial card
  useEffect(() => {
    setTimeout(() => scrollToCard(0), 100);
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

      {/* CAROUSEL SECTION */}
      <section className="py-24 border-t border-white/10 overflow-hidden bg-black relative">
        <div className="px-6 lg:px-8 mb-12 relative z-10">
           <div className="max-w-7xl mx-auto text-center">
             <Reveal>
               <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">What we do</h2>
               <p className="text-gray-400">Swipe to explore our services</p>
             </Reveal>
           </div>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 px-[50vw] pb-12 snap-x snap-mandatory scrollbar-hide items-center"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            paddingLeft: '50vw',
            paddingRight: '50vw'
          }}
        >
          {sliderServices.map((service, index) => (
            <div key={service.id} className="snap-center">
              <ServiceCard 
                service={service} 
                isActive={index === activeIndex} 
                onClick={() => scrollToCard(index)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION (Unique to Services Page) */}
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