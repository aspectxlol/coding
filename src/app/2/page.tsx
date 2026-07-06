'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CodingAdventureFlow from '@/components/coding-adventure-flow';
import { Button } from '@/components/ui/8bit/button';

// TODO: upgrade this to personalized quotes based on the user's belief using AI or another smarter approach.
const quotePool = [
  '{name}, kamu punya cara pikir yang bikin ide jadi sesuatu yang nyata.',
  '{name}, yang bikin coding seru justru saat kamu bisa bikin solusi dari hal yang tadinya bingung.',
  '{name}, bukan cuma soal nulis kode, tapi soal bikin langkah kecil yang akhirnya jadi hasil besar.',
  '{name}, kadang yang paling penting bukan syntax, tapi cara kamu lihat masalah dari sudut lain.',
];

function getPersonalizedQuote(name: string, belief: string) {
  const normalized = `${name} ${belief}`.toLowerCase();
  const keywordMap = [
    /game|app|web|robot|musik|gambar|visual|produk|alat|sistem/i,
    /masalah|solusi|logika|pikir|cara|berpikir|struktur/i,
    /cerita|desain|tampilan|warna|ui|ux/i,
    /susah|bingung|takut|rumit|sulit/i,
  ];

  const matchedIndex = keywordMap.findIndex((pattern) => pattern.test(normalized));
  const displayName = name.trim() || 'Coder masa depan';
  const seed = normalized.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const index = matchedIndex >= 0 ? matchedIndex : seed % quotePool.length;

  return quotePool[index].replace('{name}', displayName);
}

export default function StepTwoPage() {
  const [name, setName] = useState('');
  const [belief, setBelief] = useState('');
  const [quote, setQuote] = useState('');
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const storedName = window.localStorage.getItem('coding-adventure-name') ?? '';
    const storedBelief = window.localStorage.getItem('coding-adventure-belief') ?? '';
    setName(storedName);
    setBelief(storedBelief);
    setQuote(getPersonalizedQuote(storedName, storedBelief));
  }, []);

  return (
    <CodingAdventureFlow
      step={2}
      title="Mentor muncul"
      subtitle="Ada mentor keren yang ikut gabung"
      description="Sebuah sosok mentor muncul di depan kamu dan siap nemenin di tantangan berikutnya."
      nextRoute="/3"
      prevRoute="/1"
      primaryLabel="Ikuti kuis"
    >
      <motion.div className="space-y-4 rounded-none border border-fuchsia-400/40 bg-slate-900/70 p-4">
        <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Mentor kamu</p>
        <motion.div
          className="rounded-none border border-fuchsia-400/60 bg-gradient-to-br from-fuchsia-600/30 to-cyan-600/20 p-4"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: revealed ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-none border border-white/20 bg-slate-950/80 p-4 text-slate-100">
            {revealed ? (
              <div className="space-y-3 text-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Profil mentor</p>
                <h2 className="text-2xl font-black text-white">Esther Rouli</h2>
                <p className="text-slate-300">Kelas: Pandu Logika • Spesialis: Debugging & design</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs uppercase">
                  <div className="border border-cyan-400/40 p-2"><div className="text-cyan-300">Serangan</div><div className="text-xl font-black">100</div></div>
                  <div className="border border-cyan-400/40 p-2"><div className="text-cyan-300">Logika</div><div className="text-xl font-black">100</div></div>
                  <div className="border border-cyan-400/40 p-2"><div className="text-cyan-300">Kecepatan</div><div className="text-xl font-black">100</div></div>
                </div>
                <p className="rounded-none border border-cyan-400/40 bg-cyan-500/10 p-3 text-cyan-100">
                  “{quote}”
                </p>
              </div>
            ) : (
              <div className="flex min-h-48 items-center justify-center text-center text-sm uppercase tracking-[0.25em] text-cyan-200">
                Buka profil mentor buat lihat siapa yang bakal nemenin kamu
              </div>
            )}
          </div>
        </motion.div>
        <Button font="retro" className="bg-fuchsia-500 text-slate-950" onClick={() => setRevealed(true)}>
          {revealed ? 'Profil udah kebuka' : 'Buka profil'}
        </Button>
      </motion.div>
    </CodingAdventureFlow>
  );
}
