// components/AnimatedProjectTitle.tsx

"use client";

import { motion } from "framer-motion";

type AnimatedProjectTitleProps = {
  title: string;
};

export default function AnimatedProjectTitle({
  title,
}: AnimatedProjectTitleProps) {
  return (
    <motion.h1
      className="mt-4 text-4xl font-semibold"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.045,
          },
        },
      }}
    >
      {title.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.45,
                ease: "easeOut",
              },
            },
          }}
          className="mr-3 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}