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
      className="flex flex-col items-center gap-10 w-full h-full justify-center mx-auto px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center break-words"
        variants={itemVariants}
      >
        Coding
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-2xl lg:text-4xl text-center"
        variants={itemVariants}
      >
        Let Your Imaginations Become Realities  
      </motion.p>
      <AnimatedButton
        buttonProps={{
          className: "text-xl sm:text-2xl md:text-3xl h-fit p-4 px-8 font-bold",
          variant: "default"
        }}
        motionProps={{
          initial: "hidden",
          animate: "visible",
          variants: {
            hidden: {
              opacity: 0,
              y: 50 // start 50px below
            },
            visible: {
              opacity: 1,
              y: 0, // fly up to original position
              transition: {
                delay: 1,
                type: "spring", // optional: makes the animation a bit bouncy
                stiffness: 100, // controls the speed of the "fly up" effect
                damping: 25, // controls the "bounciness"
              }
            }
          },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 }
        }}
      >
        Play
      </AnimatedButton>


    </motion.div>
  );
}