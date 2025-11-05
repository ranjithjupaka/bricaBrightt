import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircleIcon } from 'lucide-react';
interface VideoCardProps {
  title: string;
  description: string;
  color: string;
  rotation: number;
}
export function VideoCard({
  title,
  description,
  color,
  rotation
}: VideoCardProps) {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.8
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.6
  }} viewport={{
    once: true
  }} whileHover={{
    scale: 1.05,
    rotate: 0,
    transition: {
      duration: 0.3
    }
  }} style={{
    rotate: rotation
  }}>
      <motion.div className={`bg-gradient-to-br ${color} rounded-3xl overflow-hidden shadow-2xl cursor-pointer`} animate={{
      y: [0, -8, 0]
    }} transition={{
      duration: 3,
      repeat: Infinity,
      delay: Math.random()
    }}>
        <div className="relative h-48 bg-white overflow-hidden">
          <img src="/BricaBright-layout.jpg" alt={title} className="w-full h-full object-cover" />
          <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30" whileHover={{
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
            <motion.div whileHover={{
            scale: 1.2
          }} animate={{
            scale: [1, 1.1, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
              <PlayCircleIcon size={64} className="text-white" fill="white" />
            </motion.div>
          </motion.div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-black text-gray-800 mb-2">{title} 🎵</h3>
          <p className="text-gray-600 font-semibold">{description}</p>
          <motion.button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }}>
            WATCH NOW! 👀
          </motion.button>
        </div>
      </motion.div>
    </motion.div>;
}
