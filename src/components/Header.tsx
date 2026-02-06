"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center font-sans text-lg font-semibold text-zinc-100"
        >
          <Image
            src="/logo.svg"
            alt="ClawHost"
            width={60}
            height={60}
            className="rounded-md"
          />
          <span className="-ml-2">ClawHost</span>
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
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
          >
            Criar Conta
          </Link>
        </div>
      </nav>
    </header>
  );
}
