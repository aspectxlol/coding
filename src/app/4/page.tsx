import CodingAdventureFlow from '@/components/coding-adventure-flow';
import VisualSandbox from '@/components/visual-sandbox';

export default function StepFourPage() {
  return (
    <CodingAdventureFlow
      step={4}
      title="Demo Blockly"
      subtitle="Area bermain coding pertama"
      description="Tujuanmu adalah membuka pintu rahasia dengan kode: buat program yang menampilkan pesan yang benar saat kondisi tertentu terpenuhi."
      nextRoute="/5"
      prevRoute="/3"
      primaryLabel="Buka kotak alat teknologi"
    >
      <div className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-4">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">Misi: buka pintu rahasia</p>
        <p className="mb-4 text-sm leading-7 text-slate-200">
          Bayangkan kamu sedang memecahkan kunci digital. Kalau kondisi benar, program harus memunculkan pesan yang membuka pintu. Kalau salah, tampilkan pesan lain.
        </p>
        <VisualSandbox />
      </div>
    </CodingAdventureFlow>
  );
}
