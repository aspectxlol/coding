'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import CodingAdventureFlow from '@/components/coding-adventure-flow';
import { Button } from '@/components/ui/8bit/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/8bit/dialog';
import { Input } from '@/components/ui/8bit/input';

export default function StepOnePage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [belief, setBelief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isTruthOpen, setIsTruthOpen] = useState(false);

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
    <>
      <CodingAdventureFlow
        step={1}
        title="First Step"
        subtitle="What do you think coding is?"
        description="Tell us your name and your first idea about coding, then we will reveal the real meaning behind it."
        nextRoute="/2"
        primaryLabel="Reveal the truth"
        onPrimaryAction={() => setIsTruthOpen(true)}
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

      <Dialog open={isTruthOpen} onOpenChange={setIsTruthOpen}>
        <DialogContent font="retro" className="border-4 border-[#232323] bg-[#fffef8] p-6 text-[#172a2b] sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl uppercase tracking-[0.2em] text-[#172a2b]">The truth</DialogTitle>
            <DialogDescription className="text-sm leading-7 text-[#172a2b]">
              Coding is really about turning ideas into clear, testable steps that a machine can follow. It is equal parts logic, creativity, patience, and problem-solving.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 rounded-none border-2 border-[#232323] bg-[#f0f6ef] p-4 text-sm leading-7 text-[#172a2b]">
            <p>Every line of code is a tiny decision that helps shape a bigger experience.</p>
            <p>Sometimes the magic is not the syntax, but the way you break a problem into smaller, solvable parts.</p>
          </div>

          <div className="flex justify-end pt-2">
            <Button
              font="retro"
              className="border-2 border-[#232323] bg-[#006d77] text-white"
              onClick={() => {
                setIsTruthOpen(false);
                router.push('/2');
              }}
            >
              Next
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
