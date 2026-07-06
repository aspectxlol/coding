'use client';

import { useEffect, useState } from 'react';
import AnimatedButton from '@/components/animated/button';
import { motion } from 'framer-motion';
import { PropagateLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src = '/images/background.jpg';
    img.onload = () => setBgLoaded(true);
  }, []);

  if (!bgLoaded) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black text-white">
        <PropagateLoader color="white" loading />
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#f0f6ef]">
      <motion.div
        className="mx-auto flex h-full w-full flex-col items-center justify-center gap-8 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="border-4 border-[#232323] bg-[#ff8fb1] px-6 py-5 shadow-[12px_12px_0_#232323] sm:px-8" variants={itemVariants}>
          <p className="text-center text-xs uppercase tracking-[0.35em] text-[#fffef8]">Retro Game Demo</p>
          <h1 className="mt-2 text-center text-5xl font-black uppercase tracking-[0.2em] text-[#fffef8] sm:text-6xl md:text-7xl lg:text-8xl">
            Coding Adventure
          </h1>
        </motion.div>

        <motion.div className="max-w-2xl border-4 border-[#232323] bg-[#fffef8] p-4 shadow-[12px_12px_0_#232323]" variants={itemVariants}>
          <p className="text-center text-base text-[#172a2b] sm:text-lg md:text-2xl">
            Start the story, meet Esther Rouli, and unlock your first coding badge in a bright retro quest.
          </p>
        </motion.div>

        <AnimatedButton
          buttonProps={{
            className: 'text-xl sm:text-2xl md:text-3xl h-fit p-4 px-8 font-black uppercase tracking-[0.2em] border-4 border-[#232323] bg-[#006d77] text-white shadow-[12px_12px_0_#232323]',
            variant: 'default',
            onClick: () => router.push('/1'),
          }}
          motionProps={{
            initial: 'hidden',
            animate: 'visible',
            variants: {
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 1, type: 'spring', stiffness: 100, damping: 25 },
              },
            },
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
          }}
        >
          Begin Adventure
        </AnimatedButton>
      </motion.div>
    </div>
  );
}
