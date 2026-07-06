'use client';

import { useEffect, useState } from 'react';
import CodingAdventureFlow from '@/components/coding-adventure-flow';
import { Button } from '@/components/ui/8bit/button';

export default function StepSevenPage() {
  const [name, setName] = useState('Coder Masa Depan');
  const [issuedAt, setIssuedAt] = useState('');

  useEffect(() => {
    const storedName = window.localStorage.getItem('coding-adventure-name');
    if (storedName) {
      setName(storedName);
    }
    setIssuedAt(new Date().toLocaleString());
  }, []);

  return (
    <CodingAdventureFlow
      step={7}
      title="Sertifikat"
      subtitle="Hadiah yang layak dibanggakan"
      description="Perjalananmu berakhir dengan sertifikat khusus yang mencatat namamu dan momen kamu menyelesaikan petualangan ini."
      nextRoute="/"
      prevRoute="/6"
      primaryLabel="Kembali ke awal"
    >
      <div className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-4">
        <div className="rounded-none border border-amber-400/40 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 p-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Official Codingers BW</p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.2em] text-white">Sertifikat Penyelesaian</h2>
          <p className="mt-6 text-lg text-slate-200">Menerangkan bahwa</p>
          <p className="mt-2 text-2xl font-black text-cyan-200">{name}</p>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            telah menyelesaikan perjalanan Petualangan Coding, menjelajahi konsep coding, dan membuka percikan pertama jalan menjadi pencipta.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-slate-400">Diterbitkan pada {issuedAt || 'hari ini'}</p>
        </div>
        <div className="mt-4">
          <Button font="retro" className="bg-cyan-500 text-slate-950" onClick={() => window.location.assign('/')}>
            Kembali ke rumah
          </Button>
        </div>
      </div>
    </CodingAdventureFlow>
  );
}
