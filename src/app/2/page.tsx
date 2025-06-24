'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/8bit/button';
import { Box } from '@/components/ui/8bit/box';
// import confetti from 'canvas-confetti';

const teachers = [
  "Mr. Alan Turing",
  "Ms. Grace Hopper",
  "Mr. Linus Torvalds",
  "Ms. Margaret Hamilton",
  "Mr. Donald Knuth",
  "Bu Ester", // The fixed winner
  "Ms. Radia Perlman",
  "Mr. Tim Berners-Lee",
  "Ms. Karen Sparck Jones"
];

const winnerIndex = 5; // Bu Ester

export default function Page() {
  const [rolling, setRolling] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [carousel, setCarousel] = useState([...teachers, ...teachers, ...teachers]);

  // Card and container sizes (bigger now)
  const cardWidth = 160;
  const cardHeight = 140;
  const cardMargin = 4;
  const visibleCards = 3;

  // The winner should be in the center (index 1 of visible 3)
  const winnerGlobalIndex = teachers.length * 2 + winnerIndex; // 2nd repetition, winnerIndex
  const router = useRouter();

  const getTargetX = () => {
    const centerIndex = Math.floor(visibleCards / 2);
    return -(winnerGlobalIndex - centerIndex) * (cardWidth + cardMargin * 2);
  };

  const rollCards = () => {
    setRolling(true);
    setRevealed(false);

    setTimeout(() => {
      setRolling(false);
      setRevealed(true);
      setCarousel([teachers[winnerIndex]]);
      // confetti({
      //   particleCount: 120,
      //   spread: 70,
      //   origin: { y: 0.6 }
      // });
    }, 2200);

    setCarousel([...teachers, ...teachers, ...teachers]);
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="font-bold text-white text-5xl mb-6">Pembina Ekskul</h1>
      {!revealed ? (
        <div className="relative w-[540px] h-[160px] overflow-hidden my-10">
          <motion.div
            key={rolling ? 'rolling' : 'stopped'}
            initial={{ x: 0 }}
            animate={{
              x: rolling ? getTargetX() : 0
            }}
            transition={{
              duration: rolling ? 2 : 0.3,
              ease: rolling ? [0.22, 1, 0.36, 1] : 'easeOut'
            }}
            className="flex items-center absolute"
          >
            {carousel.map((name, i) => (
              <Box
                key={i + name}
                className="bg-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center font-mono text-2xl font-semibold shadow-lg mx-1 transition-all duration-200"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  minWidth: cardWidth,
                  minHeight: cardHeight,
                }}
              >
                {name}
              </Box>
            ))}
          </motion.div>
          {/* Center highlight removed */}
        </div>
      ) : (
        // Final reveal card with pop-out animation
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-[340px] bg-gray-200 rounded-2xl p-8 flex flex-col items-center shadow-2xl"
        >
          <img
              src="/images/bu-ester.jpg"
            alt="Bu Ester"
              className="w-[200px] h-[140px] object-cover object-top rounded-xl bg-white mb-6"
          />
          <div className="font-bold text-3xl mb-6 text-black">Bu Ester</div>
            <Button
            className="bg-yellow-300 text-black font-bold rounded-lg px-8 py-3 text-xl hover:bg-yellow-400 transition"
              onClick={() =>
                router.push('/3')
              }
          >
            Next
            </Button>
        </motion.div>
      )}
      {!revealed && (
        <Button
          onClick={rollCards}
          disabled={rolling}
          className="mt-10 px-10 py-4 text-3xl font-mono font-bold rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 transition disabled:opacity-60"
        >
          {rolling ? 'Rolling...' : 'Roll the Cards!'}
        </Button>
      )}
    </div>
  );
}