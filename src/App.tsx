import React from 'react';
import { FloatingNav } from './components/FloatingNav';
import { CharacterCard } from './components/CharacterCard';
import { VideoCard } from './components/VideoCard';
import { motion } from 'framer-motion';
import { StarIcon, SparklesIcon } from 'lucide-react';
export function App() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 overflow-hidden'>
      <FloatingNav />
      {/* Decorative floating elements */}
      <motion.div
        className='fixed top-20 left-10 text-yellow-400'
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <StarIcon size={40} fill='currentColor' />
      </motion.div>
      <motion.div
        className='fixed top-40 right-20 text-pink-400'
        animate={{
          y: [0, 20, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <SparklesIcon size={50} fill='currentColor' />
      </motion.div>
      {/* Hero Section - Diagonal */}
      <motion.div
        className='relative mt-20 ml-10 mr-10'
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className='relative'>
          <motion.div
            className='absolute -top-10 -left-10 w-64 h-64 bg-orange-400 rounded-full opacity-20'
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          <div className='relative bg-white rounded-[3rem] p-8 shadow-2xl transform -rotate-2 max-w-2xl'>
            <motion.div
              animate={{
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <h1 className='text-5xl font-black text-purple-600 mb-4'>
                🌟 WELCOME TO BRICA BRIGHT!
              </h1>
              <p className='text-xl text-gray-700 mb-6'>
                Join the fun with our colorful friends! Learn, play, and explore
                amazing adventures together!
              </p>
              <motion.button
                className='bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg'
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                LET'S PLAY! 🎉
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Main Image - Circular with rotation */}
      <motion.div
        className='flex justify-end mr-20 -mt-20'
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      >
        <motion.div
          className='w-[500px] h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl'
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <img
            src='/BricaBright-layout.jpg'
            alt='Brica Bright Characters'
            className='w-full h-full object-cover'
          />
        </motion.div>
      </motion.div>
      {/* About Section - Wavy background */}
      <motion.div
        className='relative mt-20 px-10'
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className='bg-gradient-to-r from-blue-400 to-purple-500 rounded-[4rem] p-12 transform rotate-1 shadow-2xl'>
          <div className='flex items-center gap-8 flex-wrap'>
            <motion.div
              className='flex-1 min-w-[300px]'
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <h2 className='text-4xl font-black text-white mb-4'>
                🎨 ABOUT US
              </h2>
              <h3 className='text-3xl font-bold text-yellow-300 mb-4'>
                We Bricabright Bunch!
              </h3>
              <p className='text-white text-lg leading-relaxed'>
                We're more than just a show—we're a community that celebrates
                learning, kindness, and the unique brilliance of every child,
                building confidence and sparking curiosity through fun,
                educational experiences!
              </p>
              <motion.button
                className='mt-6 bg-yellow-400 text-purple-600 px-6 py-3 rounded-full font-bold shadow-lg'
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                LEARN MORE! 📚
              </motion.button>
            </motion.div>
            <motion.div
              className='w-80 h-80 bg-white rounded-full overflow-hidden shadow-2xl'
              animate={{
                y: [0, -20, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <img
                src='/BricaBright-layout.jpg'
                alt='About'
                className='w-full h-full object-cover'
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Characters Section - Scattered layout */}
      <motion.div
        className='relative mt-32 px-10'
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <motion.div
          className='text-center mb-16'
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <h2 className='text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4'>
            ⭐ MEET OUR CHARACTERS ⭐
          </h2>
          <p className='text-2xl text-gray-700 font-bold'>
            Each character brings their own fun and flair!
          </p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto'>
          <CharacterCard
            name='Character Name'
            color='from-pink-400 to-red-400'
            delay={0}
          />
          <CharacterCard
            name='Character Name'
            color='from-blue-400 to-cyan-400'
            delay={0.2}
          />
          <CharacterCard
            name='Character Name'
            color='from-green-400 to-emerald-400'
            delay={0.4}
          />
        </div>
      </motion.div>
      {/* Videos Section - Tilted cards */}
      <motion.div
        className='relative mt-32 px-10 pb-20'
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <motion.div
          className='text-center mb-16'
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <h2 className='text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 mb-4'>
            🎬 LATEST VIDEOS 🎬
          </h2>
          <p className='text-2xl text-gray-700 font-bold'>
            Check out our latest video's!
          </p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto'>
          <VideoCard
            title="Holly's Giggle Time"
            description='Get ready to laugh out loud with this hilarious moment!'
            color='from-orange-400 to-red-500'
            rotation={-2}
          />
          <VideoCard
            title="Holly's Giggle Time"
            description='Get ready to laugh out loud with this hilarious moment!'
            color='from-blue-400 to-purple-500'
            rotation={2}
          />
          <VideoCard
            title="Holly's Giggle Time"
            description='Get ready to laugh out loud with this hilarious moment!'
            color='from-pink-400 to-purple-500'
            rotation={-2}
          />
        </div>
      </motion.div>
      {/* Footer - Wavy */}
      <motion.div
        className='bg-gradient-to-r from-orange-500 to-yellow-500 py-12 px-10 rounded-t-[5rem]'
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className='max-w-6xl mx-auto text-center'>
          <motion.h3
            className='text-4xl font-black text-white mb-6'
            animate={{
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            🌈 FOLLOW US! 🌈
          </motion.h3>
          <div className='flex justify-center gap-6'>
            {['📘', '🐦', '📷', '🎵'].map((emoji, i) => (
              <motion.button
                key={i}
                className='w-16 h-16 bg-white rounded-full shadow-lg text-3xl flex items-center justify-center'
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  },
                }}
              >
                {emoji}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}