'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CodingAdventureFlow from '@/components/coding-adventure-flow';
import { Button } from '@/components/ui/8bit/button';

export default function StepTwoPage() {
  const [name, setName] = useState('');
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const storedName = window.localStorage.getItem('coding-adventure-name') ?? '';
    setName(storedName);
  }, []);

  return (
    <CodingAdventureFlow
      step={2}
      title="Teacher Reveal"
      subtitle="A card game mentor joins the room"
      description="A shimmering TCG card appears from the neon fog. Esther Rouli, your coding mentor, is ready to guide the next challenge."
      nextRoute="/3"
      prevRoute="/1"
      primaryLabel="Take the quiz"
    >
      <motion.div className="space-y-4 rounded-none border border-fuchsia-400/40 bg-slate-900/70 p-4">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">TCG mentor card</p>
        <motion.div
          className="rounded-none border border-fuchsia-400/60 bg-gradient-to-br from-fuchsia-600/30 to-cyan-600/20 p-4"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: revealed ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-none border border-white/20 bg-slate-950/80 p-4 text-slate-100">
            {revealed ? (
              <div className="space-y-3 text-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Mentor card</p>
                <h2 className="text-2xl font-black text-white">Esther Rouli</h2>
                <p className="text-slate-300">Class: Logic Guide • Speciality: Debugging & design</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs uppercase">
                  <div className="border border-cyan-400/40 p-2"><div className="text-cyan-300">Attack</div><div className="text-xl font-black">100</div></div>
                  <div className="border border-cyan-400/40 p-2"><div className="text-cyan-300">Logic</div><div className="text-xl font-black">100</div></div>
                  <div className="border border-cyan-400/40 p-2"><div className="text-cyan-300">Speed</div><div className="text-xl font-black">100</div></div>
                </div>
                <p className="rounded-none border border-cyan-400/40 bg-cyan-500/10 p-3 text-cyan-100">
                  “{name || 'Future coder'}, your next challenge is to think like a builder."
                </p>
              </div>
            ) : (
              <div className="flex min-h-48 items-center justify-center text-center text-sm uppercase tracking-[0.25em] text-cyan-200">
                Reveal mentor card
              </div>
            )}
          </div>
        </motion.div>
        <Button font="retro" className="bg-fuchsia-500 text-slate-950" onClick={() => setRevealed(true)}>
          {revealed ? 'Card revealed' : 'Reveal card'}
        </Button>
      </motion.div>
    </CodingAdventureFlow>
  );
}
