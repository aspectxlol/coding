'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/8bit/button';

const DEFAULT_CODE = ``;

export default function VisualSandbox() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState<string[]>([]);

  const run = () => {
    const match = code.trim().match(/^print\((['"])(.*?)\1\)\s*$/);
    if (match) {
      setOutput([match[2]]);
    } else {
      setOutput(['kode tidak valid']);
    }
  };

  const resetCode = () => {
    setCode(DEFAULT_CODE);
    setOutput([]);
  };

  const clearOutput = () => {
    setOutput([]);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-none border-4 border-[#232323] bg-[#fffef5] p-4">
        <p className="text-xs uppercase tracking-[0.25em] text-[#172a2b]">Editor kode teks</p>
        <p className="mt-2 text-sm leading-7 text-[#172a2b]">
          Tulis kode lengkapmu sendiri. Coba contoh sederhana: <span className="font-semibold">print(&quot;flag&quot;)</span>
        </p>

        <textarea
          value={code}
          onChange={(event) => setCode(event.target.value)}
          className="mt-3 min-h-[140px] w-full border-2 border-[#232323] bg-white p-3 font-mono text-sm text-[#172a2b] outline-none"
          spellCheck={false}
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <Button font="retro" className="bg-cyan-500 text-slate-950" onClick={run}>
            Jalankan kode
          </Button>
          <Button font="retro" className="bg-fuchsia-500 text-slate-950" onClick={resetCode}>
            Reset contoh
          </Button>
          <Button font="retro" className="bg-slate-300 text-[#172a2b]" onClick={clearOutput}>
            Bersihkan output
          </Button>
        </div>
      </div>

      <div className="rounded-none border-4 border-[#232323] bg-[#0f172a] p-4">
        <p className="text-xs uppercase tracking-[0.25em] text-[#bfefff]">Output</p>
        <pre className="mt-2 min-h-[72px] whitespace-pre-wrap font-mono text-sm text-[#bfefff]">
          {output.length === 0 ? '(belum ada output)' : output.join('\n')}
        </pre>
      </div>
    </div>
  );
}
