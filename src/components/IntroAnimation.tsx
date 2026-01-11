import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already visited in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');

    if (!hasSeenIntro) {
      setShow(true);
    }
  }, []);

  const handleVideoEnd = () => {
    // 1. Hide the video
    setShow(false);
    // 2. Set the flag so it doesn't show again on refresh
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          // Exit animation: Fade out slowly
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <video
            autoPlay
            muted // Muted is usually required for browsers to allow autoplay
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-contain" // object-contain keeps the aspect ratio
          >
            <source src="/ani.mov" type="video/quicktime" />
            <source src="/ani.mov" type="video/mp4" />
            {/* Fallback */}
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}