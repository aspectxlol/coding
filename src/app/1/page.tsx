'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/8bit/dialog';
import { Button } from '@/components/ui/8bit/button';
import { Input } from '@/components/ui/8bit/input';
import AnimatedButton from '@/components/animated/button';

const ROLLING_WORDS = ['Programmer', 'Codigners', 'Bwinners'];

function RollingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLLING_WORDS.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        display: 'inline-block',
        minWidth: '10ch',
        position: 'relative',
        userSelect: 'none',
        verticalAlign: 'middle',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLLING_WORDS[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'inline-block',
            position: 'absolute',
            left: 0,
            right: 0,
            width: '100%',
            textAlign: 'center',
          }}
        >
          {ROLLING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
      {/* This invisible span keeps the container width stable */}
      <span style={{ opacity: 0, pointerEvents: 'none' }}>
        {ROLLING_WORDS.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}

export default function Chapter1() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [playerThoughts, setPlayerThoughts] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);

  const handleThoughtsSubmit = () => {
    setShowExplanation(true);
    setIsDialogOpen(false);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {!showExplanation ? (
        <Dialog
          modal
          open={isDialogOpen}
          onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open && !showExplanation) {
              setPlayerThoughts('skipped');
              setShowExplanation(true);
            }
          }}
        >
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
                disabled={!playerThoughts}
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
              Coding
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
              style={{ position: 'relative', display: 'inline-block' }}
          >
              Coding itu sebuah aktivitas, dimana kita
              (<RollingText />)
              memberikan instruksi kepada komputer untuk melakukan sesuatu
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