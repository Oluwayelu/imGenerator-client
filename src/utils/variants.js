export const stagger = {
  initial: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  animate: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: 1,
      delayChildren: 0.2,
    },
  },
};

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const items = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

export const barVariant = (width) => {
  return {
    initial: {
      width: 0,
    },
    animate: {
      width: width,
      transition: {
        duration: 1,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
};

export const textVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.5,
    },
  },
};

export const textContainer = {
  initial: {
    opacity: 0,
  },
  animate: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const fadeIn = ({ direction, scale, delay }) => ({
  initial: {
    opacity: 0,
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    transition: {
      y: { stiffness: 1000 },
      x: { stiffness: 1000 },
    },
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  whileInView: {
    opacity: [0, 1],
    x:
      direction === "left"
        ? [100, 0]
        : direction === "right"
        ? [-100, 0]
        : [0, 0],
    y:
      direction === "up" ? [100, 0] : direction === "down" ? [-100, 0] : [0, 0],
    scale: scale ? [0, 1] : [1, 1],
    transition: {
      delay,
      duration: 2,
      ease: "easeInOut",
    },
  },
});
