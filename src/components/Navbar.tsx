// src/components/Navbar.tsx
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

type Props = {
  onSearch?: (q: string) => void;
};

export default function Navbar({ onSearch }: Props) {
  const [q, setQ] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch?.(q.trim());
  };

  return (
    <header className="w-full">
      <div
        className="mx-auto mt-4 w-[95%] rounded-2xl
                   bg-gradient-to-b from-violet-600 to-indigo-800
                   p-3 shadow-lg ring-1 ring-white/10"
      >
        <div className="flex items-center gap-3 sm:gap-5">
          {/* LOGO */}
          <Link
            to="/"
            className="select-none rounded-lg px-3 py-2 text-lg font-extrabold tracking-wide text-white"
          >
            LOGO
          </Link>

          {/* Search */}
          <form onSubmit={handleSubmit} className="flex-1">
            <label htmlFor="navbar-search" className="sr-only">
              Search
            </label>
            <div
              className="relative w-full overflow-hidden rounded-xl
                         bg-white/10 backdrop-blur-sm
                         ring-1 ring-white/15 focus-within:ring-white/30
                         transition"
            >
              <input
                id="navbar-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search..."
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/60
                           outline-none"
              />
              {/* subtle inner highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent" />
            </div>
          </form>

          {/* Log in button */}
          <Link
            to="/login"
            className="shrink-0 rounded-xl px-4 py-2 text-sm font-semibold text-white
                       bg-gradient-to-b from-pink-500 to-fuchsia-600
                       shadow-md ring-1 ring-white/10
                       transition hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
}
