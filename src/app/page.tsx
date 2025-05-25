'use client';
import { motion } from 'framer-motion';
import MapButton from '@/components/MapButton';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center gap-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center"
        variants={itemVariants}
      >
        Ekskul Coding - Petualangan Interaktif
      </motion.h1>

      <motion.p
        className="text-center max-w-xl"
        variants={itemVariants}
      >
        Jelajahi dunia coding sekolahmu melalui map interaktif dan temukan dunia baru dari dunia pemrograman!
      </motion.p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
        variants={itemVariants}
      >
        <MapButton title="Apa itu Ekskul Coding" />
        <MapButton title="Bahasa & Tools" />
        <MapButton title="Hasil Karya" />
        <MapButton title="Kompetisi" />
        <MapButton title="Kolaborasi" />
        <MapButton title="Keuntungan" />
      </motion.div>

      <motion.div
        className="mt-10 p-4 bg-gray-800 rounded-xl shadow-md"
        variants={itemVariants}
      >
        <p className="text-center text-sm">
          💡 Tips: Klik setiap tombol untuk menjelajahi dunia coding-mu! Animasi dan kejutan menunggu!
        </p>
      </motion.div>
    </motion.div>
  );
}