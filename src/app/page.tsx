import { Header, Hero, Features, Footer } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
