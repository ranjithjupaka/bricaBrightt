import React from 'react';
import { motion } from 'framer-motion';
export function FloatingNav() {
  const navItems = [{
    label: 'HOME',
    emoji: '🏠'
  }, {
    label: 'ABOUT',
    emoji: '🎨'
  }, {
    label: 'CHARACTERS',
    emoji: '⭐'
  }, {
    label: 'VIDEOS',
    emoji: '🎬'
  }, {
    label: 'CONTACT',
    emoji: '📧'
  }];
  return <motion.nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50" initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.8,
    type: 'spring'
  }}>
      <motion.div className="bg-white rounded-full shadow-2xl px-8 py-4 flex gap-6" animate={{
      y: [0, -5, 0]
    }} transition={{
      duration: 3,
      repeat: Infinity
    }}>
        {navItems.map((item, index) => <motion.button key={item.label} className="font-bold text-purple-600 hover:text-orange-500 transition-colors flex items-center gap-2" whileHover={{
        scale: 1.2,
        y: -5
      }} whileTap={{
        scale: 0.95
      }} animate={{
        rotate: [0, 5, -5, 0]
      }} transition={{
        rotate: {
          duration: 2,
          repeat: Infinity,
          delay: index * 0.2
        }
      }}>
            <span className="text-xl">{item.emoji}</span>
            <span className="hidden md:inline">{item.label}</span>
          </motion.button>)}
      </motion.div>
    </motion.nav>;
}