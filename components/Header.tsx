"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="/"
          className="group"
          onClick={() => setMenuOpen(false)}
        >
          <p className="text-white text-lg font-semibold tracking-wide">Jeffrey Harris</p>
          <p className="text-sm text-white/55 transition group-hover:text-white/75">
            Senior Front-End Developer
          </p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="/#about" className="transition hover:text-white">
            About
          </a>
          <a href="/#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="/#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="/#contact" className="transition hover:text-white">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/jeffreyharrisdotme"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jeffreyharris"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/35 hover:bg-white/5"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="rounded-xl border border-white/15 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-neutral-950 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4 text-sm text-white/75 lg:px-8">
            <a
              href="/#about"
              className="py-3 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/#projects"
              className="py-3 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/#experience"
              className="py-3 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="/#contact"
              className="py-3 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/jeffreyharrisdotme"
              target="_blank"
              rel="noreferrer"
              className="py-3 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jeffreyharris"
              target="_blank"
              rel="noreferrer"
              className="py-3 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}