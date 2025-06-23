"use client";

import React from "react";

const projects = [
  {
    src: "https://i.imgur.com/8pQeK7F.png",
    label: "Calvin & Louie",
    desc: "Calvin & Louie's Blogsite",
    section: "calvin",
    style: "rotate-[-10deg] z-10 animate-bounce-slow",
  },
  {
    src: "https://i.imgur.com/3yQF1vC.png",
    label: "The World's Best Website",
    desc: "",
    section: "calvin",
    style: "rotate-[8deg] -mt-8 ml-8 z-0 animate-bounce-slower",
  },
  {
    src: "https://i.imgur.com/6QfQw8u.png",
    label: "Raymond's Cool Design",
    desc: "Raymond's Cool Design",
    section: "raymond",
    style: "rotate-[-12deg] animate-bounce-slow",
  },
  {
    src: "https://i.imgur.com/2yQwQ1v.png",
    label: "Other Project",
    desc: "",
    section: "raymond",
    style: "rotate-[7deg] ml-8 animate-bounce-slower",
  },
  {
    src: "https://i.imgur.com/4QfQw8u.png",
    label: "Coding",
    desc: "The very website you are looking at",
    section: "other",
    style: "rotate-[-7deg] animate-bounce-slow",
  },
  {
    src: "https://i.imgur.com/5QfQw8u.png",
    label: "At Reddit in the School Coding",
    desc: "",
    section: "other",
    style: "rotate-[10deg] ml-8 animate-bounce-slower",
  },
];

export default function Page() {
  return (
    <div className="w-full h-full bg-dot-neutral-200/60 overflow-x-hidden scroll-smooth snap-y snap-mandatory">
      {/* Section 1: Calvin & Louie's Blogsite */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start">
        <h1 className="font-bold text-3xl text-center text-black mb-4" style={{ fontFamily: "monospace" }}>
          Hasil Karya
        </h1>
        <h2
          className="font-extrabold text-2xl mb-8 text-center text-black drop-shadow animate-pulse"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          CALVIN &amp; LOUIE'S BLOGSITE
        </h2>
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-3xl mb-8">
          {projects
            .filter((p) => p.section === "calvin")
            .map((p, i) => (
              <Polaroid key={i} {...p} />
            ))}
        </div>
        <span className="text-sm text-black font-mono">Scroll down ↓</span>
      </section>

      {/* Section 2: Raymond's Cool Design */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start">
        <h2
          className="font-extrabold text-2xl mb-8 text-center text-black drop-shadow animate-pulse"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          RAYMOND'S COOL DESIGN
        </h2>
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-3xl mb-8">
          {projects
            .filter((p) => p.section === "raymond")
            .map((p, i) => (
              <Polaroid key={i} {...p} />
            ))}
        </div>
        <span className="text-sm text-black font-mono">Scroll down ↓</span>
      </section>

      {/* Section 3: Other Cool Projects */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start">
        <h2
          className="font-extrabold text-xl mb-4 text-center text-black"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          AND OTHER COOL PROJECTS LIKE...
        </h2>
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-3xl mb-4">
          {projects
            .filter((p) => p.section === "other")
            .map((p, i) => (
              <Polaroid key={i} {...p} />
            ))}
        </div>
        <div
          className="font-bold text-xs text-center mb-8"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          ADMITTEDLY WE
          <br />
          HAVEN'T DONE MUCH
        </div>
        <button
          className="bg-yellow-300 text-black font-bold rounded-lg px-8 py-2 text-lg hover:bg-yellow-400 transition border-2 border-black shadow animate-wiggle"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
          onClick={() => alert("Next! (implement navigation)")}
        >
          Next
        </button>
        <div className="mt-4 text-center text-black font-mono">
          <div className="text-sm">Chapter 6</div>
        </div>
      </section>
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg);}
          50% { transform: rotate(2deg);}
        }
        .animate-wiggle {
          animation: wiggle 0.3s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        @keyframes bounce-slower {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-4px);}
        }
        .animate-bounce-slower {
          animation: bounce-slower 3s infinite;
        }
      `}</style>
    </div>
  );
}

function Polaroid({
  src,
  label,
  desc,
  style,
}: {
  src: string;
  label: string;
  desc?: string;
  style?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center bg-white border-2 border-black rounded-lg shadow-lg p-2 w-[110px] h-[110px] mb-2 cursor-pointer hover:scale-105 transition-transform ${style}`}
      tabIndex={0}
      title={desc || label}
      style={{ imageRendering: "pixelated" }}
      onClick={() => window.open(src, "_blank")}
    >
      <img
        src={src}
        alt={label}
        className="w-[80px] h-[60px] object-cover rounded mb-1 border border-black"
      />
      <span
        className="text-[10px] font-bold text-black text-center"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        {label}
      </span>
    </div>
  );
}