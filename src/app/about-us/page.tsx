import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#f0f6ef] p-4 sm:p-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-none border-4 border-[#232323] bg-[#fffef8] p-6 shadow-[10px_10px_0_#232323] sm:p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-600">Tentang kami</p>
        <h1 className="text-3xl font-black uppercase tracking-[0.2em] text-[#172a2b] sm:text-4xl">
          Siapa kami?
        </h1>
        <p className="text-base leading-8 text-[#172a2b]">
          Kami adalah tim yang bikin pengalaman belajar coding terasa lebih santai, visual, dan dekat dengan kehidupan sehari-hari.
        </p>
        <p className="text-base leading-8 text-[#172a2b]">
          Tujuan kami sederhana: bantu orang-orang yang baru mulai merasa kalau coding itu bukan hal yang menakutkan, tapi alat buat bikin ide jadi nyata.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/about-me"
            className="rounded-none border-2 border-[#232323] bg-[#006d77] px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[4px_4px_0_#232323] transition hover:-translate-y-0.5"
          >
            Kenalan dengan Louie
          </Link>
          <Link
            href="/"
            className="rounded-none border-2 border-[#232323] bg-[#fffef8] px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-[#232323] shadow-[4px_4px_0_#232323] transition hover:-translate-y-0.5"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
