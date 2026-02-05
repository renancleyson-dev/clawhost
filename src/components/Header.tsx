"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <Link
          href="/"
          className="font-sans text-lg font-semibold text-zinc-100"
        >
          ClawHost
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="#funcionalidades"
            className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
          >
            Funcionalidades
          </Link>
          <Link
            href="#como-funciona"
            className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
          >
            Como Funciona
          </Link>
          <Link
            href="#comecar"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors"
          >
            Criar Conta
          </Link>
        </div>
      </nav>
    </header>
  );
}
