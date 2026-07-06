'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CodingAdventureFlow from '@/components/coding-adventure-flow';
import { Button } from '@/components/ui/8bit/button';
import { Input } from '@/components/ui/8bit/input';

export default function StepOnePage() {
  const [name, setName] = useState('');
  const [belief, setBelief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedName = window.localStorage.getItem('coding-adventure-name') ?? '';
    const savedBelief = window.localStorage.getItem('coding-adventure-belief') ?? '';
    setName(savedName);
    setBelief(savedBelief);
    setSubmitted(Boolean(savedName || savedBelief));
  }, []);

  const handleSubmit = () => {
    if (!name.trim()) return;
    window.localStorage.setItem('coding-adventure-name', name.trim());
    window.localStorage.setItem('coding-adventure-belief', belief.trim());
    setSubmitted(true);
  };

  return (
    <CodingAdventureFlow
      step={1}
      title="First Step"
      subtitle="What do you think coding is?"
      description="Tell us your name and your first idea about coding, then we will reveal the real meaning behind it."
      nextRoute="/2"
      primaryLabel="Reveal the truth"
    >
      <motion.div className="space-y-4 rounded-none border-4 border-[#232323] bg-[#fffef5] p-4">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Starter prompt</p>
        {!submitted ? (
          <div className="space-y-4">
            <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
            <textarea
              value={belief}
              onChange={(event) => setBelief(event.target.value)}
              className="min-h-24 w-full border-2 border-[#232323] bg-white p-3 text-sm text-[#172a2b] outline-none"
              placeholder="I think coding means..."
            />
            <Button font="retro" className="bg-cyan-500 text-slate-950" onClick={handleSubmit}>
              Submit answer
            </Button>
          </div>
        ) : (
          <div className="space-y-3 text-sm leading-7 text-slate-200">
            <p className="text-lg font-semibold text-white">Welcome, {name}.</p>
            <p>
              Coding is the art of giving clear instructions to a computer so it can solve problems, create experiences,
              and build things that people can use.
            </p>
            <p className="rounded-none border border-fuchsia-400/40 bg-fuchsia-500/10 p-3 text-fuchsia-100">
              Your first idea was: “{belief || 'a spark of curiosity'}”. That is already the start of a coder mindset.
            </p>
          </div>
        )}
      </motion.div>
    </CodingAdventureFlow>
  );
}
