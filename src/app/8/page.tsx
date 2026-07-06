import CodingAdventureFlow from '@/components/coding-adventure-flow';

export default function StepEightPage() {
  return (
    <CodingAdventureFlow
      step={8}
      title="Penutup"
      subtitle="Misi selesai"
      description="Petualangan ini ditutup dengan kilatan cahaya. Perjalanan codingmu baru saja dimulai, namun lintasan ini membuktikan bahwa kamu bisa belajar, membangun, dan terus maju."
      nextRoute="/"
      prevRoute="/7"
      primaryLabel="Main lagi"
    >
      <div className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-4 text-sm leading-7 text-slate-300">
        Kamu menyelesaikan seluruh petualangan dan meraih percikan pertama rasa percaya diri dalam coding.
      </div>
    </CodingAdventureFlow>
  );
}
