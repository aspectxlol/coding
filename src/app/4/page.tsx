import CodingAdventureFlow from '@/components/coding-adventure-flow';
import VisualSandbox from '@/components/visual-sandbox';

export default function StepFourPage() {
  return (
    <CodingAdventureFlow
      step={4}
      title="Blockly Demo"
      subtitle="A first coding playground"
      description="Drag a block into the workspace to see how visual coding turns into instructions the computer can understand."
      nextRoute="/5"
      prevRoute="/3"
      primaryLabel="Open tech toolbox"
    >
      <div className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-4">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">Visual coding sandbox</p>
        <VisualSandbox />
      </div>
    </CodingAdventureFlow>
  );
}
