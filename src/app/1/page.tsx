'use client';

import { useState, useEffect } from 'react';
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
import AnimatedButton from '@/components/animated/button';

export default function Chapter1() {
  const [isDialogOpen, setIsDialogOpen] = useState(true); // Open dialog on page load
  const [playerThoughts, setPlayerThoughts] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);

  const handleThoughtsSubmit = () => {
    setShowExplanation(true);
    setIsDialogOpen(false); // Close the dialog after submission
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {!showExplanation ? (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Apa arti Coding bagimu?</DialogTitle>
            </DialogHeader>
            <div className="p-4 gap-2">
              <Input
                className="outline-none focus:border-none focus:outline-none"
                value={playerThoughts}
                onChange={(e) => setPlayerThoughts(e.target.value)}
                placeholder="Jawabanmu"
              />
              <Button
                className="px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleThoughtsSubmit}
              >
                Submit
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WOI MARCELL
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
          dkk, ini tugas lu bjir, jelaskan arti ekstra coding
          </motion.p>
          <AnimatedButton
            buttonProps={{
              className:
                'text-xl sm:text-2xl md:text-3xl h-fit p-4 px-8 font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] bg-blue-500 text-white rounded hover:bg-blue-600',
              variant: 'default',
              onClick: () => {
                // Handle next action here
                console.log('Next button clicked');
              },
            }}
            motionProps={{
              initial: 'hidden',
              animate: 'visible',
              variants: {
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                  },
                },
              },
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
            }}
          >
            Next
          </AnimatedButton>
        </>
      )}
    </div>
  );
}