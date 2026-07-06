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
    window.localStorage.removeItem('coding-adventure-name');
    window.localStorage.removeItem('coding-adventure-belief');
    setName('');
    setBelief('');
    setSubmitted(false);
  }, []);

  const handleSubmit = () => {
    if (!name.trim() || !belief.trim()) return;
    window.localStorage.setItem('coding-adventure-name', name.trim());
    window.localStorage.setItem('coding-adventure-belief', belief.trim());
    setSubmitted(true);
  };

  return (
    <>
      <CodingAdventureFlow
        step={1}
        title="Langkah Pertama"
        subtitle="Menurutmu, coding itu apa?"
        description="Ceritakan namamu dan gagasan pertamamu tentang coding, lalu kami akan mengungkap arti sebenarnya di baliknya."
        nextRoute="/2"
        primaryLabel="Ungkap kebenarannya"
        onPrimaryAction={() => setIsTruthOpen(true)}
      >
        <motion.div className="space-y-4 rounded-none border-4 border-[#232323] bg-[#fffef5] p-4">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Pemicu awal</p>
          {!submitted ? (
            <div className="space-y-4">
              <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Namamu" />
              <textarea
                value={belief}
                onChange={(event) => setBelief(event.target.value)}
                className="min-h-24 w-full border-2 border-[#232323] bg-white p-3 text-sm text-[#172a2b] outline-none"
                placeholder="Menurut aku Coding itu..."
              />
              <Button font="retro" className="bg-cyan-500 text-slate-950" onClick={handleSubmit}>
                Kirim jawaban
              </Button>
            </div>
          ) : (
            <div className="rounded-none border-2 border-[#232323] bg-[#172a2b] p-4 text-sm leading-7 text-[#fef3c7] shadow-[4px_4px_0_#232323]">
              <p className="text-xl font-black uppercase tracking-[0.2em] text-[#fffef8]">Selamat datang, {name}.</p>
              <p className="mt-2 text-sm font-semibold text-[#ffe082]">Keyakinanmu: {belief}</p>
            </div>
          )}
        </motion.div>
      </CodingAdventureFlow>

      <Dialog open={isTruthOpen} onOpenChange={setIsTruthOpen}>
        <DialogContent font="retro" className="border-4 border-[#232323] bg-[#fffef8] p-6 text-[#172a2b] sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl uppercase tracking-[0.2em] text-[#172a2b]">Kebenarannya</DialogTitle>
            <DialogDescription className="text-sm leading-7 text-[#172a2b]">
              Coding sebenarnya adalah mengubah ide menjadi langkah-langkah yang jelas dan bisa diuji agar mesin bisa mengikuti. Ini adalah perpaduan logika, kreativitas, kesabaran, dan pemecahan masalah.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 rounded-none border-2 border-[#232323] bg-[#f0f6ef] p-4 text-sm leading-7 text-[#172a2b]">
            <p>Setiap baris kode adalah keputusan kecil yang membantu membentuk pengalaman yang lebih besar.</p>
            <p>Terkadang keajaiban bukan ada di sintaksnya, melainkan di cara kamu memecah masalah menjadi bagian-bagian yang lebih kecil dan bisa diselesaikan.</p>
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
              Lanjut
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
