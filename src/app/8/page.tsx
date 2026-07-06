import CodingAdventureFlow from '@/components/coding-adventure-flow';

export default function StepEightPage() {
  return (
    <CodingAdventureFlow
      step={8}
      title="Finale"
      subtitle="Quest complete"
      description="The adventure closes with a burst of light. Your coding journey is only beginning, but this run proves that you can learn, build, and keep going."
      nextRoute="/"
      prevRoute="/7"
      primaryLabel="Play again"
    >
      <div className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-4 text-sm leading-7 text-slate-300">
        You completed the full adventure and earned your first spark of coding confidence.
      </div>
    </CodingAdventureFlow>
  );
}
