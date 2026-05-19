"use client";

import { motion } from "framer-motion";

const aboutHeadline =
  "Front-end developer with deep CMS experience and a modern, adaptable approach to building responsive websites.";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            About
          </p>

          <motion.h2
            className="mt-4 text-3xl font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {aboutHeadline.split(" ").map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div className="space-y-6 text-white/70 leading-8">
          <p>
            I’m a Front-End Developer with 15+ years of experience building
            responsive, user-focused websites and digital experiences across
            WordPress, Sitefinity, NopCommerce, and other custom web platforms.
          </p>

          <p>
            My background includes front-end architecture, CMS implementation,
            e-commerce experiences, component-based UI development, and close
            collaboration with designers, strategists, project managers, and
            clients.
          </p>

          <p>
            I’m currently expanding my modern front-end skillset through hands-on
            development with React, Next.js, TypeScript, and Tailwind CSS while
            continuing to deliver strong UX and business-focused solutions.
          </p>
        </div>
      </div>
    </section>
  );
}