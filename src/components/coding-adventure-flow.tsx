"use client";

import { type ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/8bit/button";

type QuestFlowProps = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  nextRoute: string;
  prevRoute?: string;
  primaryLabel: string;
  secondaryLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  children: ReactNode;
};

export default function CodingAdventureFlow({
  step,
  title,
  subtitle,
  description,
  nextRoute,
  prevRoute,
  primaryLabel,
  secondaryLabel,
  onPrimaryAction,
  onSecondaryAction,
  children,
}: QuestFlowProps) {
  const router = useRouter();

  const handlePrimaryAction = onPrimaryAction ?? (() => router.push(nextRoute));
  const handleSecondaryAction = onSecondaryAction ?? (() => router.push('/1'));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "7") {
        const target = Number(event.key);
        if (target !== step) {
          router.push(`/${target}`);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, step]);

  return (
    <div className="min-h-screen bg-[#f0f6ef] px-4 py-8 text-[#172a2b] sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center border-4 border-[#232323] bg-[#fffef8] p-6 shadow-[12px_12px_0_#232323] sm:p-8 lg:p-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.35em] text-[#1e90ff] sm:text-xs">
          <span>Quest {step}/7</span>
          <span>Press 1-7 to jump</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">{children}</div>

          <motion.div
            className="space-y-4 border-4 border-[#232323] bg-[#fffef8] p-5 shadow-[8px_8px_0_#232323]"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.16 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.25em] text-[#1e90ff]">Adventure brief</p>
              <div className="border-2 border-[#232323] bg-[#f6f6f6] px-2 py-1 text-xs uppercase tracking-[0.2em] text-[#232323]">
                Live demo
              </div>
            </div>

            <div className="space-y-3 text-sm leading-7 text-[#172a2b]">
              <motion.div
                className="inline-flex items-center border-2 border-[#232323] bg-[#bfe9ff] px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#052a31]"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 }}
              >
                {subtitle}
              </motion.div>
              <h1 className="text-2xl font-black uppercase tracking-[0.2em] text-[#172a2b] sm:text-3xl">
                {title}
              </h1>
              <p>{description}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {prevRoute && (
                <Button font="retro" variant="outline" className="border-2 border-[#232323] bg-[#fffef8] text-[#232323]" onClick={() => router.push(prevRoute)}>
                  Back
                </Button>
              )}
              <Button font="retro" className="border-2 border-[#232323] bg-[#006d77] text-white" onClick={handlePrimaryAction}>
                {primaryLabel}
              </Button>
              {secondaryLabel && (
                <Button font="retro" variant="outline" className="border-2 border-[#232323] bg-[#fffef8] text-[#232323]" onClick={handleSecondaryAction}>
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
