"use client";

import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/8bit/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/8bit/dialog";
import { useRouter } from "next/navigation";

const icons = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
    label: "Python",
    explanation: "Python adalah bahasa pemrograman yang mudah dipelajari dan digunakan untuk berbagai tujuan, seperti pengembangan web, data science, dan automasi. Kita pakai Python karena sintaksnya sederhana dan cocok untuk pemula.",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    alt: "VS Code",
    label: "Visual Studio Code",
    explanation: "Visual Studio Code adalah code editor modern yang ringan, cepat, dan punya banyak ekstensi. Kita pakai VS Code untuk menulis, mengedit, dan menjalankan kode dengan nyaman.",
  },
  {
    src: "https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/Powershell_64.png",
    alt: "PowerShell",
    label: "PowerShell",
    explanation: "PowerShell adalah terminal/command line dari Windows. Kita pakai PowerShell untuk menjalankan perintah, mengelola file, dan menjalankan program Python dari terminal.",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    alt: "C++",
    label: "C++",
    explanation: "C++ adalah bahasa pemrograman tingkat lanjut yang sering digunakan untuk aplikasi performa tinggi. Kita pelajari C++ untuk memahami konsep dasar pemrograman dan algoritma.",
  },
  {
    src: "https://raw.githubusercontent.com/JetBrains/logos/master/web/pycharm/pycharm.svg",
    alt: "PyCharm",
    label: "PyCharm",
    explanation: "PyCharm adalah IDE khusus untuk Python dari JetBrains. Kita gunakan PyCharm untuk proyek Python yang lebih besar karena fiturnya lengkap dan mendukung debugging.",
  },
  {
    src: "https://user-images.githubusercontent.com/57292172/223011977-371c1677-a8f3-4c06-87fb-b774243b0545.svg",
    alt: "OpenAI",
    label: "OpenAI",
    explanation: "OpenAI menyediakan teknologi AI seperti ChatGPT. Kita gunakan OpenAI untuk membantu mencari solusi, belajar konsep baru, dan mendapatkan bantuan pemrograman secara interaktif.",
  },
];

export default function Page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<typeof icons[0] | null>(null);

  const handleIconClick = (icon: typeof icons[0]) => {
    setSelected(icon);
    setOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dot-neutral-200/60">
      <div className="font-bold text-4xl mb-4 text-center text-white">
        apa yang dipakai?
      </div>
      <TooltipProvider>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {icons.map((icon) => (
            <Tooltip key={icon.alt}>
              <TooltipTrigger asChild>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-28 h-28 bg-white rounded-lg border-2 border-black shadow transition-transform hover:scale-110 cursor-pointer"
                  style={{ imageRendering: "pixelated" }}
                  onClick={() => handleIconClick(icon)}
                />
              </TooltipTrigger>
              <TooltipContent side="top" className="font-mono text-xs px-2 py-1 rounded border-2 border-black bg-yellow-100 shadow-2xl">
                {icon.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
      <Button
        className="bg-yellow-300 text-black font-bold rounded-lg px-8 py-2 text-lg hover:bg-yellow-400 transition border-2 border-black shadow"
        onClick={() => {
          router.push('/6')
        }}
      >
        Next
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl mb-2">{selected?.label}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center">
            {selected && (
              <>
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-48 h-48 mb-4 bg-white rounded-lg border-2 border-black"
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="text-base text-black text-center">{selected.explanation}</div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}