import { motion } from 'framer-motion';

export default function Marquee() {
  return (
    <div className="w-full py-16 border-y border-white/10 overflow-hidden bg-black relative z-10">
      {/* Gradients to fade text at edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* We repeat the content twice to loop it seamlessly */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center px-8">
             {["STRATEGY", "DESIGN", "DEVELOPMENT", "GROWTH"].map((text) => (
               <div key={text} className="flex items-center gap-16">
                 {/* Text is now solid white */}
                 <span className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                   {text}
                 </span>
                 
                 {/* White Dot Separator */}
                 <div className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full" />
               </div>
             ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}