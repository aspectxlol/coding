'use client';

import CodingAdventureFlow from '@/components/coding-adventure-flow';

export default function StepSixPage() {
  return (
    <CodingAdventureFlow
      step={6}
      title="Pencapaian"
      subtitle="Hasil dari perjalanan coding"
      description="Project ini udah dapet pengakuan, dan itu bukti ada usaha di balik tiap baris kode."
      nextRoute="/7"
      prevRoute="/5"
      primaryLabel="Buat sertifikat"
    >
      <div className="space-y-3 rounded-none border border-cyan-400/40 bg-slate-900/70 p-4">
        <div className="rounded-none border border-amber-400/40 bg-amber-500/10 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">2x Medali Perunggu</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">My Digital Space Codefest</p>
          <p className="text-sm text-slate-400">Louie Hansen & William Liem</p>
        </div>
        <div className="rounded-none border border-cyan-400/40 bg-cyan-500/10 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Pencapaian bareng</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">Portofolio yang terus berkembang isinya demo yang rapi dan eksperimen coding yang seru.</p>
        </div>
      </div>
    </CodingAdventureFlow>
  );
}
