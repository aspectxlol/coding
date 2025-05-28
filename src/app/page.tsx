'use client';

import { useEffect, useState } from 'react';
import AnimatedButton from '@/components/animated/button';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/8bit/dialog';
import { Button } from '@/components/ui/8bit/button';
import { Input } from '@/components/ui/8bit/input';
import Link from 'next/link';

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [playerName, setPlayerName] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = '/images/background.jpg'; // Path to your background image
    img.onload = () => setBgLoaded(true);
  }, []);

  const handlePlayClick = () => {
    setIsDialogOpen(true);
  };

  const handleNameSubmit = () => {
    console.log(`Player's name: ${playerName}`);
    setIsDialogOpen(false);
  };

  if (!bgLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        <svg
          className="animate-spin h-10 w-10 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <motion.div
        className="flex flex-col items-center gap-10 w-full h-full justify-center mx-auto px-4 bg-black/20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
          variants={itemVariants}
        >
          Coding
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-2xl lg:text-4xl text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          variants={itemVariants}
        >
          Let Your Imaginations Become Realities  
        </motion.p>

        <AnimatedButton
          buttonProps={{
            className:
              "text-xl sm:text-2xl md:text-3xl h-fit p-4 px-8 font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]",
            variant: "default",
            onClick: handlePlayClick,
          }}
          motionProps={{
            initial: "hidden",
            animate: "visible",
            variants: {
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                },
              },
            },
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.95 },
          }}
        >
          Play
        </AnimatedButton>
      </motion.div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className=''>Enter Your Name</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <Input
              type="text"
              className=""
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Your name"
            />
            <DialogFooter className='flex flex-row justify-between mt-5 w-full'>
              <DialogClose asChild>
                <Button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 sm:mx-2">
                  Cancel
                </Button>
              </DialogClose>
              <Link href="/1">
                <Button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handleNameSubmit}
                >
                  Submit
                </Button>
              </Link>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
