import CodingAdventureFlow from '@/components/coding-adventure-flow';

export default function StepEightPage() {
  return (
    <CodingAdventureFlow
      step={8}
      title="Penutup"
      subtitle="Misi selesai"
      description="Petualangan ini ditutup dengan kilatan cahaya. Perjalanan coding kamu baru dimulai, tapi lewat misi ini kamu udah buktiin kalau kamu bisa belajar, bikin, dan terus maju."
      nextRoute="/"
      prevRoute="/7"
      primaryLabel="Main lagi"
    >
      <div className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-4 text-sm leading-7 text-slate-300">
        Kamu selesaiin semua petualangan ini dan dapet percikan pertama rasa percaya diri buat coding.
      </div>
    </CodingAdventureFlow>
  );
}
