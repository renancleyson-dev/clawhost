"use client";

import { MessageCircle, Zap, Clock, Shield, Bot, Cpu } from "lucide-react";

const platforms = [
  {
    name: "WhatsApp",
    description: "O mensageiro mais usado no Brasil. Seu assistente responde automaticamente.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "text-green-500",
  },
  {
    name: "Telegram",
    description: "Integração nativa com bots do Telegram. Configure em segundos.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    color: "text-blue-400",
  },
  {
    name: "X (Twitter)",
    description: "Responda menções e DMs automaticamente. Sua presença 24/7.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "text-zinc-100",
  },
];

const models = [
  {
    name: "Claude Opus",
    description: "O modelo mais avançado da Anthropic. Raciocínio complexo e respostas naturais.",
    provider: "Anthropic",
    badge: "Recomendado",
  },
  {
    name: "GPT-5",
    description: "A mais nova geração da OpenAI. Excelente para tarefas criativas.",
    provider: "OpenAI",
    badge: "Novo",
  },
  {
    name: "Gemini Pro",
    description: "O modelo multimodal do Google. Ótimo para análise de imagens e documentos.",
    provider: "Google",
    badge: null,
  },
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Deploy em 1 minuto",
    description: "Sem configuração técnica. Escolha o modelo, conecte sua rede social e pronto.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Disponível 24/7",
    description: "Seu assistente nunca dorme. Responde clientes e contatos a qualquer hora.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Respostas inteligentes",
    description: "IA de última geração que entende contexto e responde de forma natural.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Seguro e privado",
    description: "Seus dados ficam protegidos. Você tem controle total sobre o assistente.",
  },
];

export default function Features() {
  return (
    <>
      {/* How it works section */}
      <section id="como-funciona" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Como funciona
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Em apenas 3 passos, você tem seu assistente de IA funcionando
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-100 font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                Crie sua conta
              </h3>
              <p className="text-zinc-500">
                Entre com Google ou GitHub em segundos. Sem cartão de crédito.
              </p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-100 font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                Escolha o modelo e plataforma
              </h3>
              <p className="text-zinc-500">
                Selecione Claude, GPT ou Gemini e conecte WhatsApp, Telegram ou X.
              </p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-100 font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                Pronto! Seu bot está ativo
              </h3>
              <p className="text-zinc-500">
                Seu assistente começa a responder automaticamente. Acompanhe tudo pelo painel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section id="funcionalidades" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Por que escolher o ClawHost?
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Simplicidade para você, inteligência para seus clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 text-zinc-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-zinc-500 pl-14">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 mb-4">
              <Bot className="w-4 h-4" />
              Plataformas Suportadas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Conecte onde você precisa
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Seu assistente funciona nas redes sociais mais populares do Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1"
              >
                <div className={`mb-4 ${platform.color}`}>{platform.icon}</div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                  {platform.name}
                </h3>
                <p className="text-zinc-500">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models section */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 mb-4">
              <Cpu className="w-4 h-4" />
              Modelos de IA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Escolha sua inteligência
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Os modelos de IA mais avançados do mundo, prontos para usar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {models.map((model, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">
                    {model.provider}
                  </span>
                  {model.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-xs text-zinc-300">
                      {model.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                  {model.name}
                </h3>
                <p className="text-zinc-500">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
