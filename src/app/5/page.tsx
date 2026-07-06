'use client';

import { motion } from 'framer-motion';
import CodingAdventureFlow from '@/components/coding-adventure-flow';

const tools = [
  { name: 'Next.js', description: 'Build fast app experiences' },
  { name: 'TypeScript', description: 'Catch bugs early' },
  { name: 'Tailwind CSS', description: 'Style interfaces quickly' },
  { name: 'Framer Motion', description: 'Add polished motion' },
  { name: 'Shadcn UI', description: 'Reusable polished components' },
];

export default function StepFivePage() {
  return (
    <CodingAdventureFlow
      step={5}
      title="Tools & Tech"
      subtitle="The toolkit behind the project"
      description="Every creative build uses a strong stack. Here are the tools shaping this coding demo."
      nextRoute="/6"
      prevRoute="/4"
      primaryLabel="Show achievements"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-none border border-cyan-400/40 bg-slate-900/70 p-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{tool.name}</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">{tool.description}</p>
          </motion.div>
        ))}
      </div>
    </CodingAdventureFlow>
  );
}
