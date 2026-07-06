'use client';

import { useEffect, useState } from 'react';
import CodingAdventureFlow from '@/components/coding-adventure-flow';
import { Button } from '@/components/ui/8bit/button';

const buildShareText = (name: string) => {
  return `Saya baru aja selesai petualangan coding! 🎉\nNama saya ${name} dan saya berhasil menyelesaikan misi coding hari ini.\nYuk cek petualangannya!`;
};

export default function StepSevenPage() {
  const [name, setName] = useState('Coder Masa Depan');
  const [issuedAt, setIssuedAt] = useState('');
  const [copied, setCopied] = useState(false);

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

  const handleShare = async () => {
    const shareText = buildShareText(name);
    const shareUrl = window.location.origin;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Sertifikat Petualangan Coding',
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // ignore if cancelled
      }
    }

    const shareLink = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
    window.open(shareLink, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = async () => {
    const shareText = buildShareText(name);
    await navigator.clipboard.writeText(`${shareText}\n${window.location.origin}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <CodingAdventureFlow
      step={7}
      title="Sertifikat"
      subtitle="Hadiah yang worth it"
      description="Perjalananmu berakhir dengan sertifikat khusus yang nyatat namamu dan momen kamu selesaiin petualangan ini."
      nextRoute="/"
      prevRoute="/6"
      primaryLabel="Kembali ke awal"
    >
      <div className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-4">
        <div className="rounded-none border border-amber-400/40 bg-gradient-to-br from-slate-950 via-[#102a43] to-cyan-800 p-5 text-center text-white shadow-[0_0_0_4px_rgba(255,255,255,0.08)] sm:p-8">
          <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-cyan-200">
            Official Codingers BW
          </div>
          <h2 className="mt-4 text-2xl font-black uppercase tracking-[0.25em] text-amber-300 sm:text-3xl">Sertifikat selesai</h2>
          <p className="mt-6 text-sm text-slate-200 sm:text-base">Menerangkan bahwa</p>
          <p className="mt-3 text-2xl font-black uppercase tracking-[0.18em] text-cyan-200 sm:text-3xl">{name}</p>
          <div className="mx-auto mt-6 h-px w-20 bg-cyan-300/70" />
          <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">
            telah menyelesaikan perjalanan Petualangan Coding, melihat konsep coding dari dekat, dan membuka percikan pertama buat jadi creator.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-slate-400">Diterbitkan pada {issuedAt || 'hari ini'}</p>
          <div className="mt-6 rounded-none border border-amber-300/40 bg-amber-400/10 p-3 text-sm text-amber-100">
            Selamat! Kamu udah menyelesaikan misi pertama dengan percaya diri.
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <Button font="retro" className="bg-cyan-500 text-slate-950" onClick={handleShare}>
            Bagikan ke WhatsApp
          </Button>
          <Button font="retro" className="bg-amber-400 text-slate-950" onClick={handleCopy}>
            {copied ? 'Tersalin!' : 'Salin pesan'}
          </Button>
          <Button font="retro" className="bg-slate-300 text-[#172a2b]" onClick={() => window.location.assign('/')}>
            Kembali ke rumah
          </Button>
        </div>
      </div>
    </CodingAdventureFlow>
  );
}
