
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1915] px-6 py-8 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-bold text-white">
            Nexa<span className="text-emerald-400">Tech</span>
          </p>
          <p className="mt-1 text-xs">
            Building digital solutions for tomorrow.
          </p>
        </div>

        <p className="text-xs">
          © 2026 NexaTech. All rights reserved.
        </p>

        <Link
          href="#home"
          className="text-xs font-semibold transition hover:text-emerald-300"
        >
          Back to Top ↑
        </Link>
      </div>
    </footer>
  );
}
