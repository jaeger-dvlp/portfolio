'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AnimatePresence, motion } from 'framer-motion';

const NavbarRoutes: Array<{
  text: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}> = [
  {
    text: 'Projeler',
    href: '/#projects',
  },
  {
    text: 'Deneyim',
    href: '/#experience',
  },
  {
    text: 'İletişim',
    href: '/#contact',
  },
];

function Navbar() {
  const pathname = useSearchParams();
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenu]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header className="bg-black-default/75 sticky top-0 z-[98] flex w-full items-center justify-center border-b border-b-zinc-800 backdrop-blur-sm">
        <div className="max-w-app flex w-full items-center justify-between p-3">
          <Link href="/" className="logo font-extralight text-white">
            ÖK
          </Link>
          <ul className="hidden flex-row items-center justify-end gap-5 md:flex lg:flex">
            {NavbarRoutes.map((route, i) => (
              <li className="m-0 p-0" key={`navbar-desktop-route-${i}`}>
                <Link
                  className="text-sm font-light text-zinc-300 transition-all duration-150 hover:text-white"
                  href={route.href}
                  target={route.target}
                >
                  {route.text}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="block cursor-pointer text-xl text-zinc-300 md:hidden lg:hidden"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            key={'mobile-navbar'}
            initial={{
              opacity: 0,
              x: '100%',
            }}
            animate={{
              opacity: 1,
              x: '0',
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              opacity: 0,
            }}
            className="mobile-menu bg-black-default/70 fixed z-[98] flex h-screen w-full items-start justify-center p-3 pt-5 backdrop-blur-sm md:hidden lg:hidden"
          >
            <ul className="m-0 flex w-full flex-col items-start justify-center gap-2 overflow-hidden p-0">
              {NavbarRoutes.map((route, i) => (
                <motion.li
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.2 + 0.4,
                    ease: 'easeInOut',
                  }}
                  key={`navbar-mobile-route-${i}`}
                  className="m-0 flex w-full p-0"
                >
                  <Link
                    className="w-full border-b border-b-zinc-300/10 pb-2 text-left text-lg font-extralight text-zinc-300"
                    href={route.href}
                    target={route.target}
                  >
                    {route.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
