'use client';
import AnimatedButton from '@/components/animated/button';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      className="flex flex-col items-center gap-10 w-full h-full justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-9xl md:text-5xl font-bold text-center"
        variants={itemVariants}
      >
        Coding
      </motion.h1>

      <motion.p
        className="text-center text-4xl"
        variants={itemVariants}
      >
        Let Your Imaginations Become Realities  
      </motion.p>
      <AnimatedButton
        buttonProps={{
          className: "text-5xl h-fit p-4 px-10",
          variant: "default"
        }}
        motionProps={{

        }}
      >
        Play
      </AnimatedButton>
    </motion.div>
  );
}