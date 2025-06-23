'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"; // shadcn/ui button
import { cn } from "@/lib/utils"; // shadcn utility for className merge
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const correct_options = [
  'MIT AppInventor',
  'Artificial Intelligence',
  'Python',
  'C++'
];

const incorrect_options = [
  'Bermain Bola',
  'Memasak Kue',
  'Berkebun',
  'Sejarah Dunia',
  'Seni Lukis',
  'Matematika Dasar',
  'Bahasa Jepang',
  'Filsafat',
  'Ekonomi Mikro',
  'Biologi Laut',
  'Teknik Sipil',
  'Ilmu Politik'
];

// 8bit color palette
const optionColors = [
  "bg-[#ff595e]", // red
  "bg-[#ffca3a]", // yellow
  "bg-[#8ac926]", // green
  "bg-[#1982c4]", // blue
  "bg-[#6a4c93]", // purple
];

// Utility to shuffle array
function shuffle<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function Page() {
  const router = useRouter();
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [optionsData, setOptionsData] = useState<string[] | null>(null);

  // Generate options on mount and when questionIdx changes (client only)
  React.useEffect(() => {
    const correct = correct_options[Math.floor(Math.random() * correct_options.length)];
    const incorrects = shuffle(incorrect_options).slice(0, 3);
    setOptionsData(shuffle([correct, ...incorrects]));
    setSelected(null);
    setShowResult(false);
    setShowCongrats(false);
  }, [questionIdx]);

  // Find correct answer for current options
  const correct = optionsData?.find(opt => correct_options.includes(opt)) ?? "";

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setShowResult(true);
    if (optionsData && optionsData[idx] === correct) {
      setTimeout(() => setShowCongrats(true), 400); // show animation
      // Do not auto-advance!
    } else {
      setTimeout(() => setQuestionIdx((q) => q + 1), 1200);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 relative overflow-hidden">
      <h1 className="font-8bit text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-white text-center">
        Coba tebak apa yang kita bakal pelajarin di ekskul coding?
      </h1>
      <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
        {optionsData &&
          optionsData.map((opt, i) => (
            <Button
              key={opt}
              onClick={() => !showResult && handleSelect(i)}
              disabled={showResult}
              className={cn(
                "font-8bit w-full text-base sm:text-lg md:text-xl lg:text-2xl py-8 rounded-2xl border-4 border-black shadow-2xl transition-all duration-200 whitespace-normal break-words",
                optionColors[i % optionColors.length],
                selected === i && (opt === correct
                  ? "ring-4 ring-green-400 scale-105"
                  : "ring-4 ring-red-400 scale-95"),
                "hover:scale-105"
              )}
            >
              {opt}
            </Button>
          ))}
      </div>
      {/* Correct answer animation */}
      <AnimatePresence>
        {showCongrats && (
          <motion.div
            initial={{ y: 400, opacity: 0, scale: 0.7 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -200, opacity: 0, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center"
          >
            <div className="font-8bit text-2xl md:text-3xl text-black mb-4 text-center">
              kita bakal belajar
            </div>
            <ul className="space-y-2 mt-2 mb-6">
              {correct_options.map((item) => (
                <li
                  key={item}
                  className="font-8bit text-lg md:text-xl text-center text-neutral-800 bg-yellow-100 rounded-lg px-4 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="bg-yellow-300 text-black font-8bit font-bold rounded-lg px-8 py-3 text-xl hover:bg-yellow-400 transition"
              onClick={() => router.push("/next-page")}
            >
              Next
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {showResult && !showCongrats && (
        <div className="mt-8 font-8bit text-xl sm:text-2xl md:text-3xl text-white">
          {optionsData && optionsData[selected!] === correct ? "Benar! 🎉" : "Salah! 😅"}
        </div>
      )}
    </div>
  );
}