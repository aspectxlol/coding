import CodingAdventureFlow from '@/components/coding-adventure-flow';
import VisualSandbox from '@/components/visual-sandbox';

export default function StepFourPage() {
  return (
    <CodingAdventureFlow
      step={4}
      title="Coba coding dulu"
      subtitle="Area main coding yang pertama"
      description="Tujuanmu simpel: bikin program ngeprint pesan rahasia saat kondisi benar, supaya pintu digital bisa kebuka."
      nextRoute="/5"
      prevRoute="/3"
      primaryLabel="Buka kotak alat teknologi"
    >
      <div className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-4">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">Misi: buka pintu rahasia</p>
        <p className="mb-4 text-sm leading-7 text-slate-200">
          Bayangin kamu lagi buka kunci digital. Kalau kondisi benar, program harus ngeprint pesan rahasia supaya pintu terbuka. Kalau salah, tampilkan pesan lain.
        </p>
        <VisualSandbox />
      </div>
    </CodingAdventureFlow>
  );
}
