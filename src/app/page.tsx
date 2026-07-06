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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#f0f6ef]">
      <motion.div
        className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-4 px-3 py-8 sm:gap-6 sm:px-4 sm:py-10 md:gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="w-full max-w-[min(100%,34rem)] border-4 border-[#232323] bg-[#ff8fb1] px-4 py-4 shadow-[8px_8px_0_#232323] sm:px-6 sm:py-5 sm:shadow-[12px_12px_0_#232323]" variants={itemVariants}>
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-[#fffef8] sm:text-xs">Demo Game Retro</p>
          <h1 className="mt-2 text-center text-2xl font-black uppercase leading-[1.05] tracking-[0.2em] text-[#fffef8] sm:text-3xl md:text-4xl lg:text-5xl">
            Petualangan Coding
          </h1>
        </motion.div>

        <motion.div className="w-full max-w-2xl border-4 border-[#232323] bg-[#fffef8] p-4 shadow-[8px_8px_0_#232323] sm:p-5 sm:shadow-[12px_12px_0_#232323]" variants={itemVariants}>
          <p className="text-center text-sm leading-7 text-[#172a2b] sm:text-base md:text-lg">
            Mulai ceritanya, buka lencana coding pertama kamu, dan rasain misi retro yang santai dan seru.
          </p>
        </motion.div>

        <div className="flex w-full justify-center">
          <AnimatedButton
            buttonProps={{
              className: 'w-full max-w-[16rem] sm:max-w-[18rem] text-base sm:text-lg md:text-xl h-fit px-4 py-3 sm:px-6 sm:py-4 font-black uppercase tracking-[0.12em] leading-tight border-4 border-[#232323] bg-[#006d77] text-white shadow-[8px_8px_0_#232323] sm:shadow-[12px_12px_0_#232323]',
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
            Mulai sekarang
          </AnimatedButton>
        </div>
      </motion.div>
    </div>
  );
}
