'use client';

import { useEffect, useState } from 'react';
import CodingAdventureFlow from '@/components/coding-adventure-flow';
import { Button } from '@/components/ui/8bit/button';

const questionBank = [
  {
    prompt: 'Kalimat mana yang paling tepat menggambarkan coding?',
    options: [
      'Ini adalah kumpulan instruksi untuk komputer.',
      'Ini hanya untuk menggambar gambar.',
      'Ini adalah jenis musik.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa satu hal yang bisa dilakukan kode?',
    options: [
      'Memberi tahu komputer cara memecahkan masalah.',
      'Membuat sandwich secara otomatis.',
      'Menumbuhkan tanaman dengan musik.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Siapa yang menggunakan coding?',
    options: [
      'Orang-orang yang membuat website, aplikasi, dan alat.',
      'Hanya musisi.',
      'Hanya pemain game.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa itu program?',
    options: [
      'Sekumpulan instruksi yang diikuti komputer.',
      'Jenis layar komputer.',
      'Tikus komputer.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa itu bug dalam pemrograman?',
    options: [
      'Kesalahan atau error dalam kode.',
      'Serangga di dalam komputer.',
      'Komputer yang cepat.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa arti debugging?',
    options: [
      'Mencari dan memperbaiki kesalahan dalam kode.',
      'Menghapus proyekmu.',
      'Membuat komputermu lebih cepat.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Mana di antara ini yang merupakan bahasa pemrograman?',
    options: ['JavaScript', 'Keyboard', 'Monitor'],
    correctIndex: 0,
  },
  {
    prompt: 'Apa fungsi variabel?',
    options: [
      'Menyimpan informasi yang bisa berubah.',
      'Mematikan komputer.',
      'Menggambar gambar secara otomatis.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa itu algoritma?',
    options: [
      'Rencana langkah demi langkah untuk menyelesaikan masalah.',
      'Permainan komputer.',
      'Jenis keyboard.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa fungsi pernyataan "if"?',
    options: [
      'Membuat keputusan dalam kode.',
      'Memutar musik.',
      'Mengisi daya laptop.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Mengapa programmer memakai loop?',
    options: [
      'Agar instruksi diulang secara otomatis.',
      'Agar monitor lebih besar.',
      'Agar terhubung ke Wi-Fi.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa yang terjadi jika program memiliki syntax error?',
    options: [
      'Kode tidak bisa berjalan dengan benar.',
      'Komputer meledak.',
      'Internet menjadi lebih cepat.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa tujuan komentar dalam kode?',
    options: [
      'Untuk menjelaskan kode kepada orang lain.',
      'Agar program berjalan lebih cepat.',
      'Untuk menyimpan kata sandi.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Perangkat mana yang bisa menjalankan program?',
    options: ['Komputer atau smartphone.', 'Pensil.', 'Buku catatan.'],
    correctIndex: 0,
  },
  {
    prompt: 'Apa hal pertama yang dilakukan komputer?',
    options: [
      'Mengikuti instruksi yang diberikan.',
      'Menebak apa yang kamu inginkan.',
      'Menulis pekerjaan rumah sendiri.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa tujuan coding?',
    options: [
      'Membuat program yang memecahkan masalah atau melakukan tugas.',
      'Membuat komputer lebih berat.',
      'Mengganti keyboard.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Keterampilan mana yang penting untuk coding?',
    options: ['Pemecahan masalah.', 'Berlari cepat.', 'Memainkan semua alat musik.'],
    correctIndex: 0,
  },
  {
    prompt: 'Apa itu aplikasi?',
    options: [
      'Program yang dirancang untuk menjalankan tugas tertentu.',
      'Kabel komputer.',
      'Jenis printer.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Mengapa pengujian kode penting?',
    options: [
      'Agar memastikan kode bekerja sesuai harapan.',
      'Agar komputer lebih keras.',
      'Agar warna keyboard berubah.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Apa yang bisa dibuat dengan coding?',
    options: ['Game, website, aplikasi, dan robot.', 'Hanya kalkulator.', 'Hanya spreadsheet.'],
    correctIndex: 0,
  },
];

export default function StepThreePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('Pilih jawaban terbaik untuk meraih lencana berikutnya.');
  const [question, setQuestion] = useState<{
    prompt: string;
    options: string[];
    correctIndex: number;
  } | null>(null);

  const shuffleWithIndex = <T,>(arr: T[]) => {
    const a = arr.map((v, i) => ({ v, i }));
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  useEffect(() => {
    const idx = Math.floor(Math.random() * questionBank.length);
    const q = questionBank[idx];
    const shuffled = shuffleWithIndex(q.options);
    const options = shuffled.map((s) => s.v);
    const correctIndex = shuffled.findIndex((s) => s.i === q.correctIndex);
    setQuestion({ prompt: q.prompt, options, correctIndex });
    setSelected(null);
    setFeedback('Pilih jawaban terbaik untuk meraih lencana berikutnya.');
  }, []);

  const handleCheck = () => {
    if (!question) return;
    if (selected === question.options[question.correctIndex]) {
      setFeedback('Benar! Kerja bagus — itu penjelasan yang tepat.');
      return;
    }
    setFeedback('Hampir — jawaban terbaik adalah yang menggambarkan coding sebagai instruksi untuk komputer.');
  };

  return (
    <CodingAdventureFlow
      step={3}
      title="Kuis Singkat"
      subtitle="Tebak ide yang benar"
      description="Esther menantangmu dengan teka-teki pilihan ganda kecil untuk menguji pemahamanmu tentang coding."
      nextRoute="/4"
      prevRoute="/2"
      primaryLabel="Masuk ke demo"
    >
      <div className="space-y-4 rounded-none border border-cyan-400/40 bg-slate-900/70 p-4">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Pertanyaan</p>
        <p className="text-lg font-semibold text-white">{question ? question.prompt : 'Memuat pertanyaan...'}</p>
        <div className="space-y-2">
          {question && question.options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`w-full rounded-none border p-3 text-left text-sm transition ${selected === option ? 'border-cyan-300 bg-cyan-500/20 text-cyan-100' : 'border-slate-700 bg-slate-950/70 text-slate-200'}`}
            >
              {option}
            </button>
          ))}
        </div>
        <Button font="retro" className="bg-cyan-500 text-slate-950" onClick={handleCheck}>
          Periksa jawaban
        </Button>
        <p className="text-sm leading-7 text-slate-300">{feedback}</p>
      </div>
    </CodingAdventureFlow>
  );
}
