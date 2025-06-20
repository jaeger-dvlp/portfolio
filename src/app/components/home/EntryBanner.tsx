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
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <div className="max-w-app z-[1] flex w-full flex-col items-start justify-center gap-2 p-3 text-shadow-lg/90 text-shadow-black">
            <motion.h1
              animate={{
                opacity: [0, 1],
                y: [30, 0],
                transition: { delay: 1, duration: 1, ease: 'easeOut' },
              }}
              className="-ml-0.5 text-left text-3xl font-extralight text-zinc-300 lg:text-4xl"
            >
              Ömer Kayalar
            </motion.h1>
            <motion.p
              animate={{
                opacity: [0, 1],
                y: [30, 0],
                transition: { delay: 1.3, duration: 1, ease: 'easeOut' },
              }}
              className="text-md mb-14 text-left font-extralight text-zinc-400 lg:text-lg"
            >
              Gerçek dünya problemlerine yazılımla çözüm üretiyorum.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EntryBanner;
