"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Shirt, 
  Dumbbell, 
  Apple, 
  Sparkle, 
  Calendar,
  ArrowRight,
  Check,
  Star,
  Zap,
  Target,
  TrendingUp,
  Users,
  Crown,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ElevateLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual");

  const pillars = [
    {
      icon: Shirt,
      title: "Estilo & Moda",
      description: "Guarda-roupa inteligente com IA que monta seus looks diários, semanais e mensais automaticamente",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Dumbbell,
      title: "Fitness & Bem-estar",
      description: "Planos de treino personalizados com vídeos demonstrativos e acompanhamento de progresso",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Apple,
      title: "Nutrição & Dieta",
      description: "Planos alimentares personalizados, listas de compras inteligentes e rastreamento de macros",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Sparkle,
      title: "Beleza & Skincare",
      description: "Análise de pele, rotinas automatizadas e organização de produtos de beleza",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Calendar,
      title: "Organização Pessoal",
      description: "Criador de hábitos inteligente, planejador com IA e calendário integrado",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const features = [
    {
      category: "Super-Recursos de IA",
      items: [
        "Lifestyle AI Coach - Assistente pessoal 24/7",
        "Daily Boost - Rotina matinal automatizada",
        "AutoAdjust - Adaptação inteligente baseada no seu feedback",
        "Scan & Style - IA analisa seu guarda-roupa e monta looks",
        "SkinScan - Diagnóstico de pele com IA"
      ]
    },
    {
      category: "Estilo & Moda",
      items: [
        "Guarda-roupa virtual com categorização por IA",
        "Montagem automática de looks diários, semanais e mensais",
        "Análise de tipo corporal e recomendações personalizadas",
        "Sugestões inteligentes de compras",
        "Checklist de cápsula do guarda-roupa"
      ]
    },
    {
      category: "Fitness",
      items: [
        "Planos de treino personalizados por IA",
        "Biblioteca de vídeos demonstrativos",
        "Agendador semanal de treinos",
        "Acompanhamento de progresso e análises",
        "Sugestões inteligentes baseadas em objetivos"
      ]
    },
    {
      category: "Nutrição",
      items: [
        "Planos de dieta personalizados",
        "Sugestões automáticas de refeições",
        "Listas de compras inteligentes",
        "Receitas rápidas e saudáveis",
        "Rastreamento de calorias e macros"
      ]
    },
    {
      category: "Beleza & Skincare",
      items: [
        "Diagnóstico de pele por foto",
        "Rotinas de skincare automatizadas",
        "Gerenciamento de inventário de produtos",
        "Alertas de validade e reposição",
        "Acompanhamento da evolução da pele"
      ]
    }
  ];

  const plans = [
    {
      name: "Gratuito",
      price: { monthly: 0, annual: 0 },
      description: "Comece sua jornada de transformação",
      features: [
        "Acesso básico ao AI Coach",
        "1 pilar à sua escolha",
        "Sugestões diárias limitadas",
        "Acesso à comunidade",
        "Acompanhamento básico de progresso"
      ],
      cta: "Começar Grátis",
      popular: false
    },
    {
      name: "PRO",
      price: { monthly: 19.90, annual: 9.90 },
      description: "Desbloqueie seu potencial completo",
      features: [
        "AI Coach completo 24/7",
        "Todos os 5 pilares desbloqueados",
        "Sugestões ilimitadas de IA",
        "Análises avançadas",
        "Suporte prioritário",
        "Integrações personalizadas",
        "Revisões semanais com IA",
        "IA monta seus looks diários automaticamente"
      ],
      cta: "Iniciar Teste PRO",
      popular: true
    },
    {
      name: "PREMIUM",
      price: { monthly: 29.90, annual: 19.90 },
      description: "A transformação definitiva do seu estilo de vida",
      features: [
        "Tudo do PRO",
        "Consultoria 1-on-1 com especialistas",
        "Treinamento de modelo de IA personalizado",
        "Compartilhamento familiar (até 5 pessoas)",
        "Biblioteca de conteúdo exclusivo",
        "Acesso antecipado a novos recursos",
        "Acesso VIP à comunidade",
        "Conteúdo em vídeo personalizado",
        "IA monta looks semanais e mensais completos"
      ],
      cta: "Ir Premium",
      popular: false
    }
  ];

  const personas = [
    {
      name: "O Buscador de Estilo",
      goal: "Construir um guarda-roupa coeso e desenvolver estilo pessoal",
      pain: "Armário cheio de roupas mas nada para vestir",
      solution: "IA organiza guarda-roupa + monta looks automaticamente"
    },
    {
      name: "O Entusiasta do Fitness",
      goal: "Alcançar objetivos fitness com treinos estruturados",
      pain: "Treinos inconsistentes e falta de acompanhamento",
      solution: "Planos de treino personalizados + análise de progresso"
    },
    {
      name: "O Guerreiro do Bem-estar",
      goal: "Otimizar nutrição e manter hábitos saudáveis",
      pain: "Dificuldade em planejar refeições e acompanhar nutrição",
      solution: "Planos alimentares personalizados + listas inteligentes"
    },
    {
      name: "O Consciente da Beleza",
      goal: "Rotina de skincare perfeita e gerenciamento de produtos",
      pain: "Sobrecarregado com produtos e rotinas",
      solution: "Análise de pele + rotinas automatizadas"
    },
    {
      name: "O Profissional Ocupado",
      goal: "Equilibrar vida, saúde e desenvolvimento pessoal",
      pain: "Sem tempo para autocuidado e organização",
      solution: "Planejamento diário com IA + automação de hábitos"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                ELEVATE
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Recursos</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Preços</a>
              <Link href="/auth/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  Entrar
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                  Começar Teste Grátis
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Recursos</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Preços</a>
              <Link href="/auth/login">
                <Button variant="ghost" className="w-full text-gray-300 hover:text-white">
                  Entrar
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500">
                  Começar Teste Grátis
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Transformação de Estilo de Vida com IA</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent leading-tight">
            Transforme Sua Vida,<br />Um Dia de Cada Vez
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            O único app que une <span className="text-blue-400 font-semibold">estilo</span>, <span className="text-green-400 font-semibold">fitness</span>, <span className="text-emerald-400 font-semibold">nutrição</span>, <span className="text-cyan-400 font-semibold">beleza</span> e <span className="text-teal-400 font-semibold">organização</span> em uma plataforma inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-lg px-8 py-6">
                Comece Sua Jornada <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
                Ver Demonstração
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "50K+", label: "Usuários Ativos" },
              { value: "4.9/5", label: "Avaliação do App" },
              { value: "2M+", label: "Treinos Completados" },
              { value: "95%", label: "Taxa de Sucesso" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Pillars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Cinco Pilares, Uma Plataforma
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tudo que você precisa para elevar seu estilo de vida, com o poder da IA avançada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <Card key={i} className="bg-slate-800/50 border-white/10 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-gray-400">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Recursos Poderosos, Experiência Perfeita
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ferramentas impulsionadas por IA projetadas para transformar cada aspecto da sua vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((category, i) => (
              <Card key={i} className="bg-slate-800/30 border-white/10 p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Feito Para Todos
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Não importa seus objetivos, o ELEVATE se adapta à sua jornada única
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona, i) => (
              <Card key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 p-6 hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{persona.name}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-blue-400 font-semibold">Objetivo:</span>
                    <p className="text-gray-300 mt-1">{persona.goal}</p>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-semibold">Desafio:</span>
                    <p className="text-gray-300 mt-1">{persona.pain}</p>
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold">Solução:</span>
                    <p className="text-gray-300 mt-1">{persona.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comece grátis, faça upgrade quando estiver pronto
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 bg-slate-800/50 p-1 rounded-full">
              <button
                onClick={() => setSelectedPlan("monthly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedPlan === "monthly"
                    ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                    : "text-gray-400"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setSelectedPlan("annual")}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedPlan === "annual"
                    ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                    : "text-gray-400"
                }`}
              >
                Anual <span className="text-green-400 text-xs ml-1">(Economize 50%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <Card
                key={i}
                className={`relative p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-blue-900/50 to-green-900/50 border-blue-500/50 scale-105"
                    : "bg-slate-800/30 border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Crown className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white">
                      R${selectedPlan === "monthly" ? plan.price.monthly.toFixed(2) : plan.price.annual.toFixed(2)}
                    </span>
                    <span className="text-gray-400">/mês</span>
                  </div>
                  {selectedPlan === "annual" && plan.price.annual > 0 && (
                    <p className="text-sm text-green-400 mt-2">
                      Cobrado R${(plan.price.annual * 12).toFixed(2)} anualmente
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/auth/signup">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Tudo Conectado, Tudo Inteligente
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fitness, dieta, beleza, organização e moda trabalham juntos para criar sua melhor versão
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Shirt className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">IA de Moda Inteligente</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Análise Completa do Guarda-Roupa</p>
                    <p className="text-gray-400 text-sm">A IA analisa todas as suas peças e entende seu estilo pessoal</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Looks Diários Automáticos</p>
                    <p className="text-gray-400 text-sm">Receba sugestões de looks completos todo dia baseados no clima e sua agenda</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Planejamento Semanal e Mensal</p>
                    <p className="text-gray-400 text-sm">Organize seus looks para a semana ou mês inteiro com um clique</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Integração com Fitness</p>
                    <p className="text-gray-400 text-sm">Looks adequados para treino são sugeridos automaticamente nos dias de exercício</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Integração Total dos Pilares</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Fitness + Dieta Sincronizados</p>
                    <p className="text-gray-400 text-sm">Seus treinos ajustam automaticamente suas necessidades nutricionais</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Beleza + Organização</p>
                    <p className="text-gray-400 text-sm">Rotinas de skincare integradas ao seu calendário diário</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Moda + Bem-estar</p>
                    <p className="text-gray-400 text-sm">Looks que combinam com seu humor e energia do dia</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Tudo em Um Só Lugar</p>
                    <p className="text-gray-400 text-sm">Uma única plataforma para gerenciar todos os aspectos da sua vida</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-green-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Pronto Para Elevar Sua Vida?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a mais de 50.000 usuários transformando seu estilo de vida com orientação de IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-lg px-8 py-6">
                Começar Teste Grátis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
                Agendar Demonstração
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Sem cartão de crédito • Teste grátis de 14 dias • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ELEVATE</span>
            </div>

            <p className="text-gray-400 text-sm text-center">
              Transforme sua vida com gerenciamento de estilo de vida impulsionado por IA.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/auth/login" className="text-sm text-gray-400 hover:text-white transition-colors">
                Entrar
              </Link>
              <Link href="/auth/signup" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cadastrar
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ELEVATE. Todos os direitos reservados. Construído com inovação impulsionada por IA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
