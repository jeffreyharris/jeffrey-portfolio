export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Jeffrey Harris. Built with Next.js, Tailwind CSS and Vercel.</p>

        <div className="flex gap-4">
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
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}