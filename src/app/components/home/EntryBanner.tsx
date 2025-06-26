'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PS3WaveBackground from '../main/PS3Waves';

function EntryBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        ease: 'easeOut',
      }}
      className="relative w-full"
    >
      <div className="relative min-h-[calc(100vh_-_50px)] w-full overflow-hidden">
        <PS3WaveBackground />
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-gradient-to-r to-transparent">
          <div className="max-w-app z-[1] flex w-full items-center justify-start text-shadow-lg/90 text-shadow-black">
            <div className="flex w-full max-w-xl flex-col items-start justify-center gap-1 p-3">
              <motion.h1
                animate={{
                  opacity: [0, 1],
                  y: [30, 0],
                  transition: { delay: 1, duration: 1, ease: 'easeOut' },
                }}
                className="text-left text-3xl font-light whitespace-pre-wrap text-zinc-300"
              >
                I build systems, not just code.
              </motion.h1>
              <motion.h2
                animate={{
                  opacity: [0, 1],
                  y: [15, 0],
                  transition: { delay: 2, duration: 0.5, ease: 'easeOut' },
                }}
                className="m-0 p-0 text-left text-sm font-light"
              >
                <span className="text-zinc-300">Ömer F. Kayalar</span>
                <span className="text-zinc-500">{' / '}</span>
                <span className="text-zinc-400">Software Developer</span>
              </motion.h2>
              <motion.h2
                animate={{
                  opacity: [0, 1],
                  y: [30, 0],
                  transition: { delay: 2.2, duration: 1, ease: 'easeOut' },
                }}
                className="m-0 mb-14 p-0 text-left text-sm font-light text-zinc-400"
              ></motion.h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EntryBanner;
