import React from 'react';
import { motion } from 'framer-motion';
interface CharacterCardProps {
  name: string;
  color: string;
  delay: number;
}
export function CharacterCard({
  name,
  color,
  delay
}: CharacterCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 100,
    rotate: -10
  }} whileInView={{
    opacity: 1,
    y: 0,
    rotate: 0
  }} transition={{
    duration: 0.6,
    delay
  }} viewport={{
    once: true
  }} whileHover={{
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3
    }
  }}>
      <motion.div className={`bg-gradient-to-br ${color} rounded-3xl p-6 shadow-2xl cursor-pointer`} animate={{
      y: [0, -10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      delay: delay
    }}>
        <div className="bg-white rounded-2xl overflow-hidden mb-4 h-64">
          <motion.img src="/BricaBright-layout.jpg" alt={name} className="w-full h-full object-cover" whileHover={{
          scale: 1.1
        }} transition={{
          duration: 0.3
        }} />
        </div>
        <motion.div className="bg-white rounded-2xl p-4 text-center" whileHover={{
        y: -5
      }}>
          <h3 className="text-2xl font-black text-gray-800">{name}</h3>
        </motion.div>
      </motion.div>
    </motion.div>;
}