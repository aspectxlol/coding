'use client';

import CodingAdventureFlow from '@/components/coding-adventure-flow';

export default function StepSixPage() {
  return (
    <CodingAdventureFlow
      step={6}
      title="Achievements"
      subtitle="Wins from the coding journey"
      description="The project has already earned recognition, and those milestones speak for the effort behind every line."
      nextRoute="/7"
      prevRoute="/5"
      primaryLabel="Craft certificate"
    >
      <div className="space-y-3 rounded-none border border-cyan-400/40 bg-slate-900/70 p-4">
        <div className="rounded-none border border-amber-400/40 bg-amber-500/10 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">2x Bronze Medalist</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">My Digital Space Codefest</p>
          <p className="text-sm text-slate-400">Louie Hansen & William Liem</p>
        </div>
        <div className="rounded-none border border-cyan-400/40 bg-cyan-500/10 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Community milestone</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">A growing portfolio of polished demos and creative coding experiments.</p>
        </div>
      </div>
    </CodingAdventureFlow>
  );
}
