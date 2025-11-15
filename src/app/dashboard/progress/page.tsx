"use client";

import { useState } from "react";
import { 
  BarChart3,
  ChevronLeft,
  TrendingUp,
  TrendingDown,
  Calendar,
  Target,
  Award,
  Zap,
  Flame,
  Dumbbell,
  Apple,
  Shirt,
  Sparkle,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ProgressPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"week" | "month" | "year">("month");
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);

  const overallStats = [
    { 
      label: "Streak Atual", 
      value: "12 dias", 
      change: "+2 dias", 
      trend: "up",
      icon: Flame,
      color: "text-orange-400"
    },
    { 
      label: "Taxa de Conclusão", 
      value: "82%", 
      change: "+15%", 
      trend: "up",
      icon: Target,
      color: "text-green-400"
    },
    { 
      label: "Pontos Totais", 
      value: "2.847", 
      change: "+324", 
      trend: "up",
      icon: Award,
      color: "text-yellow-400"
    },
    { 
      label: "Nível", 
      value: "15", 
      change: "85% para 16", 
      trend: "up",
      icon: Zap,
      color: "text-blue-400"
    }
  ];

  const pillarProgress = [
    {
      name: "Fitness",
      icon: Dumbbell,
      color: "from-green-500 to-emerald-500",
      current: 85,
      goal: 100,
      weeklyChange: 12,
      achievements: ["15 dias de streak", "50 treinos completos"],
      stats: {
        workouts: "4/5 esta semana",
        calories: "1.8k queimadas",
        time: "3h 45min"
      }
    },
    {
      name: "Nutrição",
      icon: Apple,
      color: "from-emerald-500 to-teal-500",
      current: 78,
      goal: 100,
      weeklyChange: 8,
      achievements: ["Meta calórica 7 dias", "90% aderência"],
      stats: {
        meals: "28/28 registradas",
        protein: "Média 145g/dia",
        water: "2.3L média"
      }
    },
    {
      name: "Estilo & Moda",
      icon: Shirt,
      color: "from-blue-500 to-cyan-500",
      current: 92,
      goal: 100,
      weeklyChange: 5,
      achievements: ["45 looks criados", "Guarda-roupa organizado"],
      stats: {
        looks: "28 este mês",
        scans: "12 peças adicionadas",
        favorites: "23 salvos"
      }
    },
    {
      name: "Beleza",
      icon: Sparkle,
      color: "from-cyan-500 to-blue-500",
      current: 88,
      goal: 100,
      weeklyChange: 10,
      achievements: ["Rotina consistente", "Pele 15% melhor"],
      stats: {
        routines: "14/14 completas",
        products: "8 em uso",
        hydration: "+12% esta semana"
      }
    }
  ];

  // Dados dinâmicos baseados no período selecionado
  const getDataForPeriod = () => {
    if (selectedPeriod === "week") {
      return [
        { label: "Seg", score: 85 },
        { label: "Ter", score: 92 },
        { label: "Qua", score: 88 },
        { label: "Qui", score: 90 },
        { label: "Sex", score: 87 },
        { label: "Sáb", score: 75 },
        { label: "Dom", score: 70 }
      ];
    } else if (selectedPeriod === "month") {
      return [
        { label: "Sem 1", score: 78 },
        { label: "Sem 2", score: 82 },
        { label: "Sem 3", score: 85 },
        { label: "Sem 4", score: 88 }
      ];
    } else {
      return [
        { label: "Jan", score: 65 },
        { label: "Fev", score: 72 },
        { label: "Mar", score: 78 },
        { label: "Abr", score: 82 },
        { label: "Mai", score: 85 },
        { label: "Jun", score: 88 },
        { label: "Jul", score: 90 },
        { label: "Ago", score: 87 },
        { label: "Set", score: 89 },
        { label: "Out", score: 91 },
        { label: "Nov", score: 93 },
        { label: "Dez", score: 95 }
      ];
    }
  };

  const periodData = getDataForPeriod();

  const achievements = [
    {
      title: "Mestre da Consistência",
      description: "15 dias de streak em todos os pilares",
      icon: Flame,
      color: "from-orange-500 to-red-500",
      unlocked: true,
      date: "Há 2 dias"
    },
    {
      title: "Fashionista Digital",
      description: "50 looks criados com IA",
      icon: Shirt,
      color: "from-blue-500 to-cyan-500",
      unlocked: true,
      date: "Há 5 dias"
    },
    {
      title: "Atleta Dedicado",
      description: "100 treinos completos",
      icon: Dumbbell,
      color: "from-green-500 to-emerald-500",
      unlocked: false,
      progress: 50
    },
    {
      title: "Nutricionista Expert",
      description: "30 dias de meta calórica",
      icon: Apple,
      color: "from-emerald-500 to-teal-500",
      unlocked: false,
      progress: 23
    }
  ];

  const weeklyComparison = [
    { day: "Seg", thisWeek: 85, lastWeek: 78 },
    { day: "Ter", thisWeek: 92, lastWeek: 82 },
    { day: "Qua", thisWeek: 88, lastWeek: 85 },
    { day: "Qui", thisWeek: 90, lastWeek: 80 },
    { day: "Sex", thisWeek: 87, lastWeek: 88 },
    { day: "Sáb", thisWeek: 75, lastWeek: 75 },
    { day: "Dom", thisWeek: 70, lastWeek: 70 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Progresso</h1>
                  <p className="text-xs text-gray-400">Sua evolução completa</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg">
              <button
                onClick={() => setSelectedPeriod("week")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  selectedPeriod === "week"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Semana
              </button>
              <button
                onClick={() => setSelectedPeriod("month")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  selectedPeriod === "month"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Mês
              </button>
              <button
                onClick={() => setSelectedPeriod("year")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  selectedPeriod === "year"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Ano
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Insights Banner */}
        <Card className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border-blue-500/30 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Análise de Progresso IA 📊</h3>
              <p className="text-gray-300 mb-4">
                Parabéns! Você está 18% melhor que no mês passado. Seu pilar mais forte é Estilo & Moda (92%). 
                Oportunidade de melhoria: Fitness - adicione mais um treino por semana para atingir 100%. 
                No ritmo atual, você vai subir de nível em 3 dias!
              </p>
              <Button 
                onClick={() => setShowDetailedAnalysis(true)}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                Ver Análise Detalhada
              </Button>
            </div>
          </div>
        </Card>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {overallStats.map((stat, i) => (
            <Card key={i} className="bg-slate-800/50 border-white/10 p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                {stat.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
              <div className={`text-xs ${stat.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                {stat.change}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pillar Progress */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Progresso por Pilar</h2>
              {pillarProgress.map((pillar, i) => (
                <Card key={i} className="bg-slate-800/50 border-white/10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center`}>
                        <pillar.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{pillar.name}</h3>
                        <p className="text-sm text-gray-400">{pillar.current}% completo</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        +{pillar.weeklyChange}%
                      </div>
                      <p className="text-xs text-gray-400">esta semana</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${pillar.color} rounded-full transition-all`}
                        style={{ width: `${pillar.current}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(pillar.stats).map(([key, value], j) => (
                      <div key={j} className="text-center p-2 rounded-lg bg-slate-700/30">
                        <div className="text-sm font-semibold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pillar.achievements.map((achievement, j) => (
                      <span key={j} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                        ✓ {achievement}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Dynamic Period Chart */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Evolução {selectedPeriod === "week" ? "Semanal" : selectedPeriod === "month" ? "Mensal" : "Anual"}
              </h3>
              <div className="flex items-end justify-between gap-2 h-64">
                {periodData.map((data, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-slate-700/50 rounded-lg overflow-hidden relative" style={{ height: '100%' }}>
                      <div 
                        className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-cyan-500 rounded-lg transition-all"
                        style={{ height: `${data.score}%` }}
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-400">{data.label}</div>
                      <div className="text-xs font-semibold text-white">{data.score}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Weekly Comparison */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Comparação Semanal</h3>
              <div className="space-y-4">
                {weeklyComparison.map((day, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">{day.day}</span>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-cyan-400">Esta semana: {day.thisWeek}%</span>
                        <span className="text-gray-500">Semana passada: {day.lastWeek}%</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{ width: `${day.thisWeek}%` }}
                        />
                      </div>
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-600 rounded-full"
                          style={{ width: `${day.lastWeek}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Level Progress */}
            <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/20 p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl font-bold text-white">15</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Nível 15</h3>
                <p className="text-sm text-gray-400">Lifestyle Master</p>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>2.847 XP</span>
                  <span>3.350 XP</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <p className="text-xs text-center text-gray-400 mt-3">
                503 XP para o próximo nível
              </p>
            </Card>

            {/* Achievements */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Conquistas
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, i) => (
                  <div 
                    key={i}
                    className={`p-3 rounded-lg border ${
                      achievement.unlocked 
                        ? 'bg-yellow-500/10 border-yellow-500/30'
                        : 'bg-slate-700/30 border-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 ${
                        !achievement.unlocked && 'opacity-50'
                      }`}>
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white mb-1">{achievement.title}</h4>
                        <p className="text-xs text-gray-400 mb-2">{achievement.description}</p>
                        {achievement.unlocked ? (
                          <span className="text-xs text-yellow-400">{achievement.date}</span>
                        ) : (
                          <div>
                            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${achievement.color} rounded-full`}
                                style={{ width: `${achievement.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 mt-1">{achievement.progress}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Estatísticas Rápidas</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Total de dias ativos</span>
                  <span className="text-sm font-semibold text-white">87</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Melhor streak</span>
                  <span className="text-sm font-semibold text-white">21 dias</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Tarefas completas</span>
                  <span className="text-sm font-semibold text-white">342</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Horas investidas</span>
                  <span className="text-sm font-semibold text-white">48h 30m</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Detailed Analysis Modal */}
      {showDetailedAnalysis && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Análise Detalhada de Progresso</h2>
                  <p className="text-sm text-gray-400">Insights completos da IA sobre sua evolução</p>
                </div>
              </div>
              <Button 
                onClick={() => setShowDetailedAnalysis(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Overall Performance */}
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Performance Geral
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  Você está tendo um desempenho excepcional! Sua consistência aumentou 18% comparado ao mês passado, 
                  e você está mantendo uma taxa de conclusão de 82% em todas as atividades.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">+18%</div>
                    <div className="text-xs text-gray-400">vs mês passado</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">82%</div>
                    <div className="text-xs text-gray-400">Taxa conclusão</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="text-xs text-gray-400">Dias de streak</div>
                  </div>
                </div>
              </div>

              {/* Pillar Analysis */}
              <div>
                <h3 className="font-bold text-white mb-3">📊 Análise por Pilar</h3>
                <div className="space-y-3">
                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shirt className="w-5 h-5 text-blue-400" />
                      <h4 className="font-semibold text-white">Estilo & Moda (92%)</h4>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded ml-auto">
                        Pilar Mais Forte
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Excelente! Você está criando looks consistentemente e explorando bem seu guarda-roupa. 
                      Continue assim para manter a criatividade em alta.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkle className="w-5 h-5 text-cyan-400" />
                      <h4 className="font-semibold text-white">Beleza (88%)</h4>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded ml-auto">
                        Muito Bom
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Sua rotina de skincare está consistente! A hidratação melhorou 12% esta semana. 
                      Mantenha o foco nos produtos noturnos.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Dumbbell className="w-5 h-5 text-green-400" />
                      <h4 className="font-semibold text-white">Fitness (85%)</h4>
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded ml-auto">
                        Oportunidade
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Bom progresso! Sugestão: adicione mais um treino por semana para atingir 100%. 
                      Você está próximo de completar 50 treinos totais.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Apple className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-semibold text-white">Nutrição (78%)</h4>
                      <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded ml-auto">
                        Atenção
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Área com mais potencial de melhoria. Foque em aumentar a ingestão de proteínas no café da manhã 
                      e manter a hidratação acima de 2L por dia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h3 className="font-bold text-white mb-3">💡 Recomendações Personalizadas</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Adicione um treino extra na semana</h4>
                      <p className="text-xs text-gray-400">
                        Impacto estimado: +15% no pilar Fitness, chegando a 100% de conclusão
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Aumente proteína no café da manhã</h4>
                      <p className="text-xs text-gray-400">
                        Meta: 30g de proteína pela manhã. Isso vai melhorar saciedade e energia durante o dia.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Mantenha consistência nos finais de semana</h4>
                      <p className="text-xs text-gray-400">
                        Sábado e domingo têm 15% menos aderência. Planeje atividades leves para manter o ritmo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Milestone */}
              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-400" />
                  Próxima Meta
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  Você está a apenas 503 XP do Nível 16! No ritmo atual, você vai alcançar em aproximadamente 3 dias. 
                  Continue focado e mantenha a consistência!
                </p>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-900 p-6 border-t border-white/10">
              <Button 
                onClick={() => setShowDetailedAnalysis(false)}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              >
                Entendi, Vamos Lá!
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
