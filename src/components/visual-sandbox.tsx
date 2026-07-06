'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/8bit/button';

type Block = {
  id: string;
  type: 'print';
  text: string;
};

export default function VisualSandbox() {
  const [blocks, setBlocks] = useState<Block[]>(() => {
    try {
      const raw = window.localStorage.getItem('visual-sandbox-blocks');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    try {
      window.localStorage.setItem('visual-sandbox-blocks', JSON.stringify(blocks));
    } catch (e) {}
  }, [blocks]);

  const handleDragStart = (e: React.DragEvent, type: string) => {
    e.dataTransfer.setData('text/plain', type);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain');
    if (type === 'print') {
      const b: Block = { id: String(Date.now()), type: 'print', text: 'hello world' };
      setBlocks((s) => [...s, b]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const updateBlockText = (id: string, text: string) => {
    setBlocks((s) => s.map((b) => (b.id === id ? { ...b, text } : b)));
  };

  const removeBlock = (id: string) => {
    setBlocks((s) => s.filter((b) => b.id !== id));
  };

  const run = () => {
    const out: string[] = [];
    for (const b of blocks) {
      if (b.type === 'print') {
        out.push(String(b.text));
      }
    }
    setOutput(out);
    // detect hello world exactly (case-insensitive)
    if (out.some((o) => String(o).trim().toLowerCase() === 'hello world')) {
      try {
        window.localStorage.setItem('coding-adventure-quest-4', 'complete');
        window.dispatchEvent(new CustomEvent('coding-adventure:quest-complete', { detail: { quest: 4 } }));
      } catch (e) {}
    }
  };

  const clearOutput = () => setOutput([]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 rounded-none border-4 border-[#232323] bg-[#fffef5] p-3">
        <p className="text-xs uppercase tracking-[0.25em] text-[#172a2b]">Blocks</p>
        <div className="mt-3 space-y-3">
          <div draggable onDragStart={(e) => handleDragStart(e, 'print')} className="cursor-grab rounded border p-2 bg-cyan-100 text-sm">Print (drag)</div>
        </div>
      </div>

      <div className="col-span-2 rounded-none border-4 border-[#232323] bg-[#fffef5] p-3">
        <p className="text-xs uppercase tracking-[0.25em] text-[#172a2b]">Workspace</p>
        <div onDrop={handleDrop} onDragOver={handleDragOver} className="min-h-[160px] mt-3 rounded border border-dashed border-[#172a2b] p-3 bg-white/60">
          {blocks.length === 0 ? <div className="text-sm text-[#172a2b]/70">Drop blocks here</div> : null}
          <div className="space-y-2 mt-2">
            {blocks.map((b) => (
              <div key={b.id} className="flex items-start gap-2 rounded border p-2 bg-slate-100">
                <div className="flex-1">
                  <div className="text-xs text-[#172a2b]">Print</div>
                  <input value={b.text} onChange={(e) => updateBlockText(b.id, e.target.value)} className="w-full rounded border p-1 text-sm" />
                </div>
                <div>
                  <button onClick={() => removeBlock(b.id)} className="rounded border px-2 py-1 text-sm">x</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Button font="retro" className="bg-cyan-500 text-slate-950" onClick={run}>Run</Button>
            <Button font="retro" className="bg-fuchsia-500 text-slate-950" onClick={() => setBlocks([])}>Clear</Button>
            <Button font="retro" className="bg-slate-300 text-[#172a2b]" onClick={clearOutput}>Clear Output</Button>
          </div>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#172a2b]">Output</p>
            <div className="mt-2 rounded border bg-[#0f172a] p-3 text-sm text-[#bfefff] min-h-[48px]">
              {output.length === 0 ? <div className="text-[#bfefff]/50">(no output)</div> : output.map((o, i) => <div key={i}>{o}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
