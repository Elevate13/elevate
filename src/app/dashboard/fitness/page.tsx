"use client";

import { useState } from "react";
import { 
  Dumbbell,
  ChevronLeft,
  Play,
  Clock,
  Flame,
  Target,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Circle,
  Award,
  Zap,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function FitnessPage() {
  const [selectedDay, setSelectedDay] = useState("hoje");
  const [isStarting, setIsStarting] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleStartWorkout = () => {
    setIsStarting(true);
    setTimeout(() => {
      alert("🏋️ Treino iniciado! Siga as instruções da IA para cada exercício. Ela vai monitorar sua forma, contar repetições e dar feedback em tempo real!");
      setIsStarting(false);
    }, 500);
  };

  const handleViewAnalysis = () => {
    alert("📊 Análise Completa de Performance:\n\n✅ Força: +15% vs mês passado\n✅ Resistência: +22% de melhora\n✅ Consistência: 12 dias de streak\n✅ Volume total: 18.5 toneladas esta semana\n✅ Tempo médio: 52 minutos por treino\n\n🎯 Recomendação: Aumente carga em 5% no supino\n💪 Próximo objetivo: 20 dias de streak");
  };

  const todayWorkout = {
    name: "Treino de Peito e Tríceps",
    duration: "45-60 min",
    calories: "420 kcal",
    difficulty: "Intermediário",
    exercises: [
      { name: "Supino Reto", sets: "4x12", rest: "90s", completed: true },
      { name: "Supino Inclinado", sets: "3x12", rest: "90s", completed: true },
      { name: "Crucifixo", sets: "3x15", rest: "60s", completed: false },
      { name: "Tríceps Testa", sets: "3x12", rest: "60s", completed: false },
      { name: "Tríceps Corda", sets: "3x15", rest: "60s", completed: false },
      { name: "Mergulho", sets: "3x máx", rest: "90s", completed: false }
    ]
  };

  const weekSchedule = [
    { day: "Seg", name: "Peito/Tríceps", done: true },
    { day: "Ter", name: "Costas/Bíceps", done: true },
    { day: "Qua", name: "Pernas", done: true },
    { day: "Qui", name: "Ombros/Abs", done: false, today: true },
    { day: "Sex", name: "Full Body", done: false },
    { day: "Sáb", name: "Cardio", done: false },
    { day: "Dom", name: "Descanso", done: false }
  ];

  const stats = [
    { label: "Treinos esta semana", value: "3/5", icon: Target, color: "text-blue-400" },
    { label: "Calorias queimadas", value: "1.2k", icon: Flame, color: "text-orange-400" },
    { label: "Tempo total", value: "2h 15m", icon: Clock, color: "text-green-400" },
    { label: "Streak", value: "12 dias", icon: Award, color: "text-yellow-400" }
  ];

  const achievements = [
    { title: "Primeira Semana", description: "Complete 5 treinos", progress: 60 },
    { title: "Maratonista", description: "30 dias consecutivos", progress: 40 },
    { title: "Força Total", description: "100 treinos completos", progress: 23 }
  ];

  const fullCalendar = [
    { week: "Esta Semana", days: [
      { date: "Seg 20", workout: "Peito/Tríceps", duration: "50min", done: true },
      { date: "Ter 21", workout: "Costas/Bíceps", duration: "55min", done: true },
      { date: "Qua 22", workout: "Pernas", duration: "65min", done: true },
      { date: "Qui 23", workout: "Ombros/Abs", duration: "45min", done: false, today: true },
      { date: "Sex 24", workout: "Full Body", duration: "60min", done: false },
      { date: "Sáb 25", workout: "Cardio HIIT", duration: "30min", done: false },
      { date: "Dom 26", workout: "Descanso Ativo", duration: "20min", done: false }
    ]},
    { week: "Próxima Semana", days: [
      { date: "Seg 27", workout: "Peito/Tríceps", duration: "50min", done: false },
      { date: "Ter 28", workout: "Costas/Bíceps", duration: "55min", done: false },
      { date: "Qua 29", workout: "Pernas", duration: "65min", done: false },
      { date: "Qui 30", workout: "Ombros/Abs", duration: "45min", done: false },
      { date: "Sex 31", workout: "Full Body", duration: "60min", done: false },
      { date: "Sáb 01", workout: "Cardio", duration: "30min", done: false },
      { date: "Dom 02", workout: "Descanso", duration: "-", done: false }
    ]},
    { week: "Semana 3", days: [
      { date: "Seg 03", workout: "Peito/Tríceps", duration: "50min", done: false },
      { date: "Ter 04", workout: "Costas/Bíceps", duration: "55min", done: false },
      { date: "Qua 05", workout: "Pernas", duration: "65min", done: false },
      { date: "Qui 06", workout: "Ombros/Abs", duration: "45min", done: false },
      { date: "Sex 07", workout: "Full Body", duration: "60min", done: false },
      { date: "Sáb 08", workout: "Cardio", duration: "30min", done: false },
      { date: "Dom 09", workout: "Descanso", duration: "-", done: false }
    ]},
    { week: "Semana 4", days: [
      { date: "Seg 10", workout: "Peito/Tríceps", duration: "50min", done: false },
      { date: "Ter 11", workout: "Costas/Bíceps", duration: "55min", done: false },
      { date: "Qua 12", workout: "Pernas", duration: "65min", done: false },
      { date: "Qui 13", workout: "Ombros/Abs", duration: "45min", done: false },
      { date: "Sex 14", workout: "Full Body", duration: "60min", done: false },
      { date: "Sáb 15", workout: "Cardio", duration: "30min", done: false },
      { date: "Dom 16", workout: "Descanso", duration: "-", done: false }
    ]}
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Fitness</h1>
                  <p className="text-xs text-gray-400">Seu plano de treino</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleStartWorkout}
              disabled={isStarting}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:opacity-50"
            >
              <Play className="w-4 h-4 mr-2" />
              {isStarting ? "Iniciando..." : "Iniciar Treino"}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Motivation Banner */}
        <Card className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-500/30 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Motivação do Dia 💪</h3>
              <p className="text-gray-300 mb-4">
                Você está arrasando! Já completou 3 treinos esta semana. Seu desempenho está 15% melhor que na semana passada. 
                Continue assim e você vai atingir sua meta mensal com folga!
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={handleViewAnalysis}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  Ver Análise Completa
                </Button>
                <Button 
                  onClick={handleStartWorkout}
                  disabled={isStarting}
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-slate-800/50 border-white/10 p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Workout */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{todayWorkout.name}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {todayWorkout.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      {todayWorkout.calories}
                    </span>
                    <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">
                      {todayWorkout.difficulty}
                    </span>
                  </div>
                </div>
                <Button 
                  onClick={handleStartWorkout}
                  disabled={isStarting}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:opacity-50"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isStarting ? "Iniciando..." : "Começar"}
                </Button>
              </div>

              {/* Exercise List */}
              <div className="space-y-3">
                {todayWorkout.exercises.map((exercise, i) => (
                  <div 
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                      exercise.completed 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : 'bg-slate-700/30 border-white/10 hover:border-green-500/30'
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {exercise.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${exercise.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                        {exercise.name}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                        <span>{exercise.sets}</span>
                        <span>•</span>
                        <span>Descanso: {exercise.rest}</span>
                      </div>
                    </div>
                    {!exercise.completed && (
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Iniciar
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-sm text-blue-400">
                  💡 <strong>Dica da IA:</strong> Mantenha a forma correta no supino. Seus ombros devem estar retraídos e o movimento controlado.
                </p>
              </div>
            </Card>

            {/* Weekly Progress */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Progresso Semanal</h3>
              <div className="grid grid-cols-7 gap-2">
                {weekSchedule.map((day, i) => (
                  <div 
                    key={i}
                    className={`p-3 rounded-lg text-center transition-all ${
                      day.today 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white' 
                        : day.done 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                        : 'bg-slate-700/30 border border-white/10 text-gray-400'
                    }`}
                  >
                    <div className="text-xs font-medium mb-1">{day.day}</div>
                    <div className="text-xs">{day.name}</div>
                    {day.done && !day.today && (
                      <CheckCircle2 className="w-4 h-4 mx-auto mt-2" />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Estatísticas</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Meta Semanal</span>
                    <span className="text-white font-medium">60%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Calorias Hoje</span>
                    <span className="text-white font-medium">0 / 420</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: '0%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Tempo Hoje</span>
                    <span className="text-white font-medium">0 / 60 min</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '0%' }} />
                  </div>
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Conquistas
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-white">{achievement.title}</h4>
                      <span className="text-xs text-gray-400">{achievement.progress}%</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{achievement.description}</p>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Next Workout */}
            <Card className="bg-gradient-to-br from-blue-900/30 to-green-900/30 border-blue-500/20 p-6">
              <h3 className="text-lg font-bold text-white mb-2">Próximo Treino</h3>
              <p className="text-gray-300 text-sm mb-4">Amanhã • Costas e Bíceps</p>
              <Button 
                onClick={() => setShowCalendar(true)}
                className="w-full bg-white/10 hover:bg-white/20 text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Ver Calendário Completo
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Calendário Completo de Treinos</h2>
                <p className="text-sm text-gray-400 mt-1">Próximos 30 dias de planejamento</p>
              </div>
              <Button 
                onClick={() => setShowCalendar(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {fullCalendar.map((week, weekIndex) => (
                <div key={weekIndex}>
                  <h3 className="text-lg font-bold text-white mb-4">{week.week}</h3>
                  <div className="grid gap-3">
                    {week.days.map((day, dayIndex) => (
                      <div 
                        key={dayIndex}
                        className={`p-4 rounded-lg border transition-all ${
                          day.today
                            ? 'bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-500/30'
                            : day.done
                            ? 'bg-green-500/10 border-green-500/30'
                            : 'bg-slate-800/50 border-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            {day.done ? (
                              <CheckCircle2 className="w-6 h-6 text-green-400" />
                            ) : (
                              <Circle className="w-6 h-6 text-gray-400" />
                            )}
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-white">{day.date}</h4>
                                {day.today && (
                                  <span className="px-2 py-0.5 rounded text-xs bg-green-500 text-white">
                                    Hoje
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-400 mt-1">{day.workout}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400">{day.duration}</span>
                            {!day.done && day.workout !== "Descanso" && day.workout !== "Descanso Ativo" && (
                              <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                                <Play className="w-3 h-3 mr-1" />
                                Iniciar
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-slate-900 border-t border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  <span className="text-white font-semibold">20 treinos</span> programados • 
                  <span className="text-white font-semibold ml-1">8 dias</span> de descanso
                </div>
                <Button 
                  onClick={() => setShowCalendar(false)}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  Fechar
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
