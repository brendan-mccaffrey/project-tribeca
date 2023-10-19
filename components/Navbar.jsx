'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/freemason.svg"
        alt="search"
        className="w-[48px] h-[48px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        PROJECT TRIBECA
      </h2>
      <img
        src="/freemason.svg"
        alt="menu"
        className="w-[48px] h-[48px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
