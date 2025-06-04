import React from "react";

const getTodayNumber = () => {
  // Range: 16 - 20 (inclusive)
  const min = 16;
  const max = 20;
  // Use the date as a seed to get a deterministic number per day
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  // Simple deterministic "random" function
  const number = ((seed * 9301 + 49297) % 233280) / 233280;
  return min + Math.floor(number * (max - min + 1));
};

export const metadata = {
  title: "Hi Leon, Hari ini nomor lu" + getTodayNumber(),
  description: "suatu hari lu bakal tau",
};

export default function Page() {
  const todayNumber = getTodayNumber();

  return (
    <main className="min-h-screen bg-[#222] text-white flex flex-col items-center justify-center font-['Press_Start_2P','VT323','Courier_New',monospace] tracking-wider">
      {/* 8-bit font import */}
      <h1 className="text-xl mb-8  text-center">
        Hi Leon, Hari ini nomor lu
      </h1>
      <div className="bg-[#111] border-8 border-yellow-300 rounded-lg shadow-[0_8px_0_#000,0_0_24px_#ff0a] px-16 py-8 mb-6 flex items-center justify-center">
        <span className="font-['Press_Start_2P','VT323','Courier_New',monospace] text-6xl text-cyan-300 [text-shadow:_2px_2px_0_#000,4px_4px_0_#0ff8] tracking-widest bg-[#222] px-6 py-2 rounded border-4 border-cyan-300 shadow-[0_4px_0_#000] select-none">
          {todayNumber}
        </span>
      </div>
      <p className="text-gray-400 text-sm drop-shadow-[1px_1px_0_#000]">
        suatu hari lu bakal tau
      </p>
    </main>
  );
}