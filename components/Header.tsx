export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="group">
          <p className="text-lg font-semibold tracking-wide">Jeffrey Harris</p>
          <p className="text-sm text-white/55 transition group-hover:text-white/75">
            Senior Front-End Developer
          </p>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experience
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
      </div>
    </header>
  );
}