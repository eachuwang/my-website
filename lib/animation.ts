import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const navLinkHover: Variants = {
  rest: { y: 0, textShadow: '0 0 0px transparent' },
  hover: {
    y: -2,
    textShadow: '0 0 10px var(--color-glow)',
    transition: { duration: 0.2 },
  },
};
