import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export function Counter({ value, label, suffix = "" }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Spring physics make the numbers feel weighted and premium
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <div ref={ref} className="text-center group">
      <div className="flex justify-center items-baseline mb-2">
        <motion.span className="text-5xl font-light block text-white">
          {display}
        </motion.span>
        <span className="text-5xl font-light text-gray-500 group-hover:text-white transition-colors duration-500">{suffix}</span>
      </div>
      <p className="text-sm text-gray-500 font-light">{label}</p>
    </div>
  );
}