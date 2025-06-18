'use client';

import React from 'react';

import 'aos/dist/aos.css';

function AOS() {
  React.useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
      });
    });
  }, []);
  return <></>;
}

export default AOS;
