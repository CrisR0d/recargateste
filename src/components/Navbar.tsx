// src/components/Navbar.tsx
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '@/providers/AuthProvider'

type Props = {
  onSearch?: (q: string) => void;
};

export default function Navbar({ onSearch }: Props) {

  const { user, signOut } = useAuth();

  const [q, setQ] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch?.(q.trim());
  };

  return (
    <header>
      <div className="bg-primary p-4 sm:p-3 rounded-2xl">
        <div className="mx-auto flex items-center justify-between sm:gap-5 px-2">

          <Link
            to="/"
            className="select-none rounded-lg px-3 py-2 text-lg font-extrabold tracking-wide text-white"
          >
            LOGO
          </Link>

          <form onSubmit={handleSubmit} className="flex flex-1 justify-center sm:justify-start">
            <label htmlFor="navbar-search" className="sr-only">
              Search
            </label>
            <div
              className="relative w-full  overflow-hidden rounded-xl
                         bg-white/10 backdrop-blur-sm
                         ring-1 ring-white/15 focus-within:ring-white/30
                         transition"
            >
              <input
                id="navbar-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Busca juegos o gif cards"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/60
                           outline-none"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl" />
            </div>
          </form>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {
            user && (
              <div className="hidden sm:flex gap-4">
                <span>bienvenido: {user.email}</span>

                <button
                  onClick={signOut}
                  className="shrink-0 bg-secondary rounded-xl px-4 py-2 text-sm font-semibold text-white
                            transition hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Cerrar sesion
                </button>
              </div>
            )

          }

          {
            !user && (
              <div className="hidden sm:flex gap-4">
                <Link
                  to="/login"
                  className="shrink-0 bg-secondary rounded-xl px-4 py-2 text-sm font-semibold text-white
                            transition hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Iniciar sesión
                </Link>

                <Link
                  to="/register"
                  className="shrink-0 bg-secondary rounded-xl px-4 py-2 text-sm font-semibold text-white
                            transition hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Registrarse
                </Link>
              </div>
            )

          }
          
        </div>

        {/* Mobile Menu - Conditional rendering */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 flex flex-col gap-4 px-2">
            <Link
              to="/login"
              className="bg-secondary rounded-xl px-4 py-2 text-sm font-semibold text-white"
            >
              Iniciar sesión
            </Link>

            <Link
              to="/register"
              className="bg-secondary rounded-xl px-4 py-2 text-sm font-semibold text-white"
            >
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
