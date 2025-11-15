"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Shirt, 
  Dumbbell, 
  Apple, 
  Sparkle, 
  Calendar,
  TrendingUp,
  Target,
  Zap,
  ChevronRight,
  Bell,
  Settings,
  User,
  Home,
  BarChart3,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [showGeneralSettings, setShowGeneralSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFullRecommendations, setShowFullRecommendations] = useState(false);

  const pillars = [
    {
      id: "style",
      icon: Shirt,
      title: "Estilo & Moda",
      description: "Looks montados para hoje",
      stats: "3 looks prontos",
      gradient: "from-blue-500 to-cyan-500",
      href: "/dashboard/style"
    },
    {
      id: "fitness",
      icon: Dumbbell,
      title: "Fitness",
      description: "Treino de hoje",
      stats: "45 min • Peito e Tríceps",
      gradient: "from-green-500 to-emerald-500",
      href: "/dashboard/fitness"
    },
    {
      id: "nutrition",
      icon: Apple,
      title: "Nutrição",
      description: "Plano alimentar",
      stats: "1.850 / 2.200 kcal",
      gradient: "from-emerald-500 to-teal-500",
      href: "/dashboard/nutrition"
    },
    {
      id: "beauty",
      icon: Sparkle,
      title: "Beleza",
      description: "Rotina de skincare",
      stats: "Manhã completa ✓",
      gradient: "from-cyan-500 to-blue-500",
      href: "/dashboard/beauty"
    },
    {
      id: "organization",
      icon: Calendar,
      title: "Organização",
      description: "Agenda do dia",
      stats: "5 tarefas pendentes",
      gradient: "from-teal-500 to-green-500",
      href: "/dashboard/organization"
    }
  ];

  const todayTasks = [
    { time: "07:00", task: "Rotina matinal de skincare", pillar: "Beleza", done: true },
    { time: "08:30", task: "Treino: Peito e Tríceps", pillar: "Fitness", done: false },
    { time: "09:00", task: "Café da manhã: Ovos e aveia", pillar: "Nutrição", done: false },
    { time: "12:30", task: "Almoço: Frango grelhado com salada", pillar: "Nutrição", done: false },
    { time: "19:00", task: "Look para jantar preparado", pillar: "Moda", done: false }
  ];

  const weeklyProgress = [
    { day: "Seg", value: 85 },
    { day: "Ter", value: 92 },
    { day: "Qua", value: 78 },
    { day: "Qui", value: 95 },
    { day: "Sex", value: 88 },
    { day: "Sáb", value: 70 },
    { day: "Dom", value: 65 }
  ];

  const notifications = [
    { id: 1, title: "Meta de treino atingida!", description: "Você completou 4 treinos esta semana", time: "Há 2 horas", read: false },
    { id: 2, title: "Novo look sugerido", description: "A IA criou um look perfeito para amanhã", time: "Há 5 horas", read: false },
    { id: 3, title: "Lembrete de hidratação", description: "Você bebeu apenas 60% da meta hoje", time: "Há 8 horas", read: true },
    { id: 4, title: "Parabéns! Streak de 12 dias", description: "Continue assim para manter o ritmo", time: "Ontem", read: true }
  ];

  const fullRecommendations = [
    {
      category: "Hidratação",
      priority: "high",
      icon: "💧",
      title: "Aumente sua ingestão de água",
      description: "Você bebeu apenas 60% da meta ontem (1.2L de 2L). Hidratação adequada melhora energia, pele e performance nos treinos.",
      impact: "Alto impacto em energia e recuperação",
      action: "Beba 500ml agora e configure lembretes a cada 2 horas"
    },
    {
      category: "Treino",
      priority: "medium",
      icon: "💪",
      title: "Treino intenso hoje - prepare-se",
      description: "Seu treino de Peito e Tríceps hoje é 15% mais intenso que a média. Sugerimos um lanche pré-treino 30min antes.",
      impact: "Melhora performance e previne fadiga",
      action: "Coma banana com pasta de amendoim às 8h"
    },
    {
      category: "Estilo",
      priority: "low",
      icon: "👔",
      title: "Look confortável preparado",
      description: "Baseado no seu treino intenso, preparamos um look confortável e estiloso para o resto do dia.",
      impact: "Conforto e estilo garantidos",
      action: "Veja o look completo na aba Estilo & Moda"
    },
    {
      category: "Nutrição",
      priority: "medium",
      icon: "🥗",
      title: "Refeição pós-treino otimizada",
      description: "Após o treino, priorize proteínas (30-40g) e carboidratos complexos para recuperação muscular ideal.",
      impact: "Acelera recuperação em 25%",
      action: "Prepare frango grelhado com batata doce"
    },
    {
      category: "Bem-estar",
      priority: "low",
      icon: "🧘",
      title: "Reserve 10min para alongamento",
      description: "Após treinos intensos, alongamento reduz dor muscular em 30% e melhora flexibilidade.",
      impact: "Previne lesões e melhora mobilidade",
      action: "Faça alongamento às 9h30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  ELEVATE
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                <Link href="/dashboard" className="flex items-center gap-2 text-white font-medium">
                  <Home className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link href="/dashboard/ai-coach" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Sparkles className="w-4 h-4" />
                  AI Coach
                </Link>
                <Link href="/dashboard/progress" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <BarChart3 className="w-4 h-4" />
                  Progresso
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                onClick={() => setShowNotifications(true)}
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-white relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button 
                onClick={() => setShowGeneralSettings(true)}
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-white"
              >
                <Settings className="w-5 h-5" />
              </Button>
              <button
                onClick={() => setShowAccountSettings(true)}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                <User className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Bem-vindo de volta! 👋
          </h1>
          <p className="text-gray-400 text-lg">
            Aqui está seu resumo de hoje. Você está 85% mais perto dos seus objetivos esta semana!
          </p>
        </div>

        {/* AI Daily Boost */}
        <Card className="bg-gradient-to-r from-blue-900/40 to-green-900/40 border-blue-500/30 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                Daily Boost da IA
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Novo</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Bom dia! Baseado no seu progresso, sugiro focar em hidratação hoje (você bebeu apenas 60% da meta ontem). 
                Seu treino de hoje é mais intenso, então preparei um look confortável e um lanche pré-treino rico em energia. 
                Você está arrasando! 💪
              </p>
              <Button 
                onClick={() => setShowFullRecommendations(true)}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                Ver Recomendações Completas
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Streak Diário</span>
              <Target className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">12 dias</div>
            <div className="text-xs text-green-400 mt-1">+2 esta semana</div>
          </Card>

          <Card className="bg-slate-800/50 border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Treinos</span>
              <Dumbbell className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">4/5</div>
            <div className="text-xs text-green-400 mt-1">80% esta semana</div>
          </Card>

          <Card className="bg-slate-800/50 border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Looks Criados</span>
              <Shirt className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white">28</div>
            <div className="text-xs text-green-400 mt-1">Este mês</div>
          </Card>

          <Card className="bg-slate-800/50 border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Meta Calórica</span>
              <Apple className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-white">84%</div>
            <div className="text-xs text-green-400 mt-1">Hoje</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* 5 Pillars Grid */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Seus Pilares</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {pillars.map((pillar) => (
                  <Link key={pillar.id} href={pillar.href}>
                    <Card className="bg-slate-800/50 border-white/10 p-6 hover:bg-slate-800/70 transition-all cursor-pointer group">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center`}>
                          <pillar.icon className="w-6 h-6 text-white" />
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{pillar.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{pillar.description}</p>
                      <p className="text-sm text-blue-400 font-medium">{pillar.stats}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Weekly Progress Chart */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Progresso Semanal</h3>
              <div className="flex items-end justify-between gap-2 h-48">
                {weeklyProgress.map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-slate-700/50 rounded-lg overflow-hidden relative" style={{ height: '100%' }}>
                      <div 
                        className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-green-500 rounded-lg transition-all"
                        style={{ height: `${day.value}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{day.day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-400">Média: 82%</span>
                <span className="text-green-400 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +5% vs semana passada
                </span>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Agenda de Hoje</h3>
              <div className="space-y-3">
                {todayTasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      task.done ? 'bg-green-500 border-green-500' : 'border-gray-600'
                    }`}>
                      {task.done && <span className="text-white text-xs">✓</span>}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-500">{task.time}</span>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                          {task.pillar}
                        </span>
                      </div>
                      <p className={`text-sm ${task.done ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                        {task.task}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Ações Rápidas</h3>
              <div className="space-y-2">
                <Link href="/dashboard/ai-coach" className="block">
                  <Button className="w-full justify-start bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Falar com AI Coach
                  </Button>
                </Link>
                <Link href="/dashboard/style" className="block">
                  <Button className="w-full justify-start bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
                    <Shirt className="w-4 h-4 mr-2" />
                    Montar Look Agora
                  </Button>
                </Link>
                <Link href="/dashboard/organization" className="block">
                  <Button className="w-full justify-start bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/20">
                    <Calendar className="w-4 h-4 mr-2" />
                    Ver Calendário Completo
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Account Settings Modal */}
      {showAccountSettings && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-md">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Configurações da Conta</h2>
              <Button 
                onClick={() => setShowAccountSettings(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Usuário Premium</h3>
                  <p className="text-sm text-gray-400">usuario@email.com</p>
                </div>
              </div>

              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                  Editar Perfil
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                  Alterar Senha
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                  Preferências de Privacidade
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                  Gerenciar Assinatura
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors">
                  Sair da Conta
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* General Settings Modal */}
      {showGeneralSettings && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-white/10 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-white">Configurações Gerais</h2>
              <Button 
                onClick={() => setShowGeneralSettings(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Aparência</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                    Tema: Escuro
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                    Tamanho da Fonte: Médio
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Notificações</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-800">
                    <span className="text-white">Push Notifications</span>
                    <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-800">
                    <span className="text-white">Email Notifications</span>
                    <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-800">
                    <span className="text-white">Lembretes de Treino</span>
                    <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Idioma e Região</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                    Idioma: Português (BR)
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                    Fuso Horário: GMT-3
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Dados e Privacidade</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                    Exportar Dados
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                    Limpar Cache
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors">
                    Deletar Conta
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Notifications Modal */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold text-white">Notificações</h2>
              </div>
              <Button 
                onClick={() => setShowNotifications(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-3">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                    notification.read 
                      ? 'bg-slate-800/30 border-white/5' 
                      : 'bg-blue-500/10 border-blue-500/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{notification.title}</h4>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{notification.description}</p>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-slate-900 p-6 border-t border-white/10">
              <Button 
                onClick={() => setShowNotifications(false)}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white"
              >
                Marcar Todas como Lidas
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Full Recommendations Modal */}
      {showFullRecommendations && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Recomendações Completas do Daily Boost</h2>
                  <p className="text-sm text-gray-400">Insights personalizados para seu dia</p>
                </div>
              </div>
              <Button 
                onClick={() => setShowFullRecommendations(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-4">
              {fullRecommendations.map((rec, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border ${
                    rec.priority === 'high' 
                      ? 'bg-red-500/10 border-red-500/30' 
                      : rec.priority === 'medium'
                      ? 'bg-yellow-500/10 border-yellow-500/30'
                      : 'bg-blue-500/10 border-blue-500/30'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{rec.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-white">{rec.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          rec.priority === 'high'
                            ? 'bg-red-500/20 text-red-400'
                            : rec.priority === 'medium'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {rec.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">{rec.description}</p>
                      <p className="text-xs text-gray-400 mb-3">
                        <strong>Impacto:</strong> {rec.impact}
                      </p>
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-white/10">
                        <p className="text-sm text-white">
                          <strong>Ação recomendada:</strong> {rec.action}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-slate-900 p-6 border-t border-white/10">
              <Button 
                onClick={() => setShowFullRecommendations(false)}
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
              >
                Entendi, Vamos Começar!
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
