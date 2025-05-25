'use client';
import { motion } from 'framer-motion';

export default function MapButton({ title }: { title: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 1 }}
      whileTap={{ scale: 0.95, rotate: -1 }}
      className="px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition text-white text-sm md:text-base"
    >
      {title}
    </motion.button>
  );
}
