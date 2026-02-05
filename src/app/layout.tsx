import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClawHost - Seu Assistente IA 24/7 no WhatsApp, Telegram e X",
  description:
    "Deploy seu próprio assistente de IA em menos de 1 minuto. Automatize respostas, agende compromissos e tenha um bot inteligente disponível 24 horas por dia, 7 dias por semana.",
  keywords: [
    "assistente IA",
    "bot WhatsApp",
    "bot Telegram",
    "automação",
    "OpenClaw",
    "inteligência artificial",
    "chatbot Brasil",
    "assistente virtual",
  ],
  authors: [{ name: "ClawHost" }],
  openGraph: {
    title: "ClawHost - Seu Assistente IA 24/7",
    description:
      "Deploy seu próprio assistente de IA em menos de 1 minuto. Automatize respostas no WhatsApp, Telegram e X.",
    url: "https://clawhost.com.br",
    siteName: "ClawHost",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawHost - Seu Assistente IA 24/7",
    description:
      "Deploy seu próprio assistente de IA em menos de 1 minuto. Automatize respostas no WhatsApp, Telegram e X.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
