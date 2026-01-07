// src/components/Reveal.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    // FIX: Add 'as const' here
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }} 
    className={className}
  >
    {children}
  </motion.div>
);