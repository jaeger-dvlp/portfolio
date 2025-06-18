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
        <div className="bg-black-default/25 absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="max-w-app z-[1] flex h-full w-full flex-col items-start justify-center gap-2 p-3 font-light text-shadow-lg/50 text-shadow-black"
          >
            <h1 className="text-left text-3xl text-zinc-300 lg:text-5xl">
              Ömer Kayalar
            </h1>
            <p className="text-md mb-14 text-left text-zinc-400 lg:text-lg">
              Gerçek dünya problemlerine yazılımla çözüm üretiyorum.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default EntryBanner;
