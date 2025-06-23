"use client";

import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/8bit/button";

const icons = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
    label: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    alt: "VS Code",
    label: "Visual Studio Code",
  },
  {
    src: "https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/Powershell_64.png",
    alt: "PowerShell",
    label: "PowerShell",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    alt: "C++",
    label: "C++",
  },
  {
    src: "https://raw.githubusercontent.com/JetBrains/logos/master/web/pycharm/pycharm.svg",
    alt: "PyCharm",
    label: "PyCharm",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
    alt: "OpenAI",
    label: "OpenAI",
  },
];

export default function Page() {
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
                  className="w-28 h-28 bg-white rounded-lg border-2 border-black shadow transition-transform hover:scale-110"
                  style={{ imageRendering: "pixelated" }}
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
      >
        Next
      </Button>
    </div>
  );
}