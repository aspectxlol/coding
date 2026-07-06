'use client';

import { motion } from 'framer-motion';
import CodingAdventureFlow from '@/components/coding-adventure-flow';

const tools = [
  { name: 'VS Code', description: 'Editor utama untuk menulis kode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Google Colab', description: 'Notebook Python berbasis cloud', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/1280px-Google_Colaboratory_SVG_Logo.svg.png' },
  { name: 'MIT App Inventor', description: 'Membuat aplikasi visual dengan blok', icon: 'https://community.appinventor.mit.edu/uploads/default/original/1X/4d32ecf51304615f4eaf9d1094a15fc3278691f9.png' },
  { name: 'Scratch', description: 'Pemrograman visual untuk pemula', icon: 'https://scratch.mit.edu/images/logo_sm.png' },
  { name: 'PyCharm', description: 'IDE Python yang kuat', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg' },
  { name: 'Python', description: 'Bahasa pemrograman serbaguna', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', description: 'Bahasa pemrograman web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', description: 'JavaScript dengan tipe yang aman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
];

export default function StepFivePage() {
  return (
    <CodingAdventureFlow
      step={5}
      title="Alat & Teknologi"
      subtitle="Perangkat yang mendukung proyek"
      description="Setiap karya kreatif memakai tumpukan teknologi yang kuat. Inilah alat yang membentuk demo coding ini."
      nextRoute="/6"
      prevRoute="/4"
      primaryLabel="Tampilkan pencapaian"
    >
      <div className="max-h-[55vh] overflow-y-auto pr-1 sm:max-h-none sm:overflow-visible">
        <div className="grid gap-3 sm:grid-cols-2">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-3 sm:p-4"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-none border-2 border-cyan-300/70 bg-[#fffef8] p-2 shadow-[3px_3px_0_#232323] sm:h-14 sm:w-14">
                <img src={tool.icon} alt={tool.name} className="h-full w-full object-contain" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">{tool.name}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </CodingAdventureFlow>
  );
}
