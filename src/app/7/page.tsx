'use client';

import { useEffect, useRef, useState } from 'react';
import { Press_Start_2P } from 'next/font/google';
import CodingAdventureFlow from '@/components/coding-adventure-flow';
import { Button } from '@/components/ui/8bit/button';

const pressStart = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
});

export default function StepSevenPage() {
  const [name, setName] = useState('Coder Masa Depan');
  const [issuedAt, setIssuedAt] = useState('');
  const [shareLabel, setShareLabel] = useState('Bagikan Pencapaianmu!');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const storedName = window.localStorage.getItem('coding-adventure-name');
    if (storedName) {
      setName(storedName);
    }
    setIssuedAt(new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1200;
    const height = 675;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = '#07131f';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(40, 40, width - 80, height - 80);

    for (let x = 40; x < width - 40; x += 40) {
      ctx.fillStyle = '#1d4ed8';
      ctx.fillRect(x, 40, 8, 8);
      ctx.fillRect(x, height - 48, 8, 8);
    }

    for (let y = 40; y < height - 40; y += 40) {
      ctx.fillStyle = '#22d3ee';
      ctx.fillRect(40, y, 8, 8);
      ctx.fillRect(width - 48, y, 8, 8);
    }

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#0f766e');
    gradient.addColorStop(1, '#1d4ed8');
    ctx.fillStyle = gradient;
    ctx.fillRect(80, 80, width - 160, height - 160);

    ctx.fillStyle = '#facc15';
    ctx.font = `bold 25px ${pressStart.style.fontFamily}`;
    ctx.fillText('OFFICIAL CODINGERS BW', 100, 150);

    ctx.fillStyle = '#f8fafc';
    ctx.font = `bold 84px ${pressStart.style.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.fillText('SERTIFIKAT', width / 2, 255);

    ctx.font = `bold 42px ${pressStart.style.fontFamily}`;
    ctx.fillText('PENCAPAIAN', width / 2, 325);

    ctx.font = `bold 56px ${pressStart.style.fontFamily}`;
    ctx.fillStyle = '#5eead4';
    ctx.fillText(name.toUpperCase(), width / 2, 420);

    ctx.font = `24px ${pressStart.style.fontFamily}`;
    ctx.fillStyle = '#e2e8f0';
    ctx.fillText('Kamu berhasil menyelesaikan misi coding', width / 2, 495);
    ctx.fillText(`Diterbitkan pada ${issuedAt || 'hari ini'}`, width / 2, 540);
  }, [name, issuedAt]);

  const handleShare = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) return;

    const file = new File([blob], `sertifikat-${name}.png`, { type: 'image/png' });

    if (typeof navigator.share === 'function' && typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: 'Sertifikat Petualangan Coding',
        text: 'Lihat Kawan! aku telah berhasil menyelesaikan misi Coding Adventure!',
        files: [file],
      });
      setShareLabel('Terkirim!');
      window.setTimeout(() => setShareLabel('Bagikan Pencapaianmu!'), 1800);
      return;
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sertifikat-${name}.png`;
    link.click();
    URL.revokeObjectURL(url);
    setShareLabel('Gambar siap diunduh');
    window.setTimeout(() => setShareLabel('Bagikan Pencapaianmu!'), 1800);
  };

  return (
    <CodingAdventureFlow
      step={7}
      title="Sertifikat"
      subtitle="Hadiah yang worth it"
      description="Perjalananmu berakhir dengan sertifikat khusus yang menandai pencapaianmu."
      nextRoute="/"
      prevRoute="/6"
      primaryLabel="Kembali ke awal"
    >
      <div className="w-full min-w-0 rounded-none border border-cyan-400/40 bg-slate-900/70 p-3 sm:p-4">
        <div className="rounded-none border border-amber-400/40 bg-slate-950 p-3 text-center text-white shadow-[0_0_0_4px_rgba(255,255,255,0.08)] sm:p-4">
          <canvas ref={canvasRef} className="w-full rounded-none border-2 border-cyan-300/40 bg-slate-950" />
          <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-cyan-300">Preview sertifikat</p>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button font="retro" className="bg-cyan-500 text-slate-950" onClick={handleShare}>
            {shareLabel}
          </Button>
          <Button font="retro" className="bg-slate-300 text-[#172a2b]" onClick={() => window.location.assign('/')}>
            Kembali ke rumah
          </Button>
        </div>
      </div>
    </CodingAdventureFlow>
  );
}
