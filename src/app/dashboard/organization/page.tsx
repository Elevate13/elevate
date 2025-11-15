"use client";

import { useState } from "react";
import { 
  Calendar,
  ChevronLeft,
  Plus,
  Clock,
  CheckCircle2,
  Circle,
  Flag,
  Tag,
  Filter,
  ChevronRight,
  Zap,
  TrendingUp,
  Target,
  X,
  Play,
  Undo2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function OrganizationPage() {
  const [selectedView, setSelectedView] = useState<"today" | "week" | "month">("today");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showOptimizeModal, setShowOptimizeModal] = useState(false);
  const [showSuggestionsModal, setShowSuggestionsModal] = useState(false);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [tasks, setTasks] = useState([
    { 
      id: 1,
      title: "Treino de Peito e Tríceps",
      time: "08:30",
      duration: "60 min",
      category: "Fitness",
      priority: "high",
      completed: false,
      color: "from-green-500 to-emerald-500"
    },
    { 
      id: 2,
      title: "Almoço: Frango com salada",
      time: "12:30",
      duration: "30 min",
      category: "Nutrição",
      priority: "medium",
      completed: false,
      color: "from-emerald-500 to-teal-500"
    },
    { 
      id: 3,
      title: "Revisar metas da semana",
      time: "20:00",
      duration: "30 min",
      category: "Organização",
      priority: "high",
      completed: false,
      color: "from-teal-500 to-green-500"
    }
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    time: "",
    duration: "",
    category: "Fitness",
    priority: "medium"
  });

  const [filterOptions, setFilterOptions] = useState({
    category: "all",
    priority: "all",
    status: "all"
  });

  const [selectedSuggestions, setSelectedSuggestions] = useState<number[]>([]);

  const suggestions = [
    {
      id: 1,
      title: "Mova treino de sexta para sábado",
      description: "Dados mostram que você tem 23% melhor performance em treinos aos sábados pela manhã.",
      category: "Produtividade"
    },
    {
      id: 2,
      title: "Agrupe tarefas similares",
      description: "Economize 45 minutos agrupando tarefas relacionadas em um único bloco.",
      category: "Produtividade"
    },
    {
      id: 3,
      title: "Reserve buffers entre compromissos",
      description: "30 minutos de intervalo reduzem stress e aumentam foco em 18%.",
      category: "Produtividade"
    },
    {
      id: 4,
      title: "Tarefas criativas pela manhã",
      description: "Seu pico de criatividade é entre 9h-11h. Agende atividades criativas nesse horário.",
      category: "Energia"
    },
    {
      id: 5,
      title: "Exercícios após 16h",
      description: "Treinar no final da tarde melhora qualidade do sono em 34%.",
      category: "Energia"
    },
    {
      id: 6,
      title: "Pausas estratégicas",
      description: "10 minutos de pausa a cada 2h aumenta produtividade em 15%.",
      category: "Energia"
    },
    {
      id: 7,
      title: "Adicione meditação diária",
      description: "15 minutos de meditação reduzem ansiedade em 28% e melhoram foco.",
      category: "Bem-estar"
    },
    {
      id: 8,
      title: "Mantenha 8h de sono",
      description: "Sono consistente melhora recuperação muscular e humor em 42%.",
      category: "Bem-estar"
    },
    {
      id: 9,
      title: "Hidratação regular",
      description: "Beber água a cada hora melhora concentração e energia em 21%.",
      category: "Bem-estar"
    }
  ];

  const handleOptimizeWeek = () => {
    setShowOptimizeModal(true);
  };

  const handleViewSuggestions = () => {
    setShowSuggestionsModal(true);
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.time) {
      const categoryColors: Record<string, string> = {
        "Fitness": "from-green-500 to-emerald-500",
        "Nutrição": "from-emerald-500 to-teal-500",
        "Organização": "from-teal-500 to-green-500"
      };

      setTasks([...tasks, {
        id: tasks.length + 1,
        title: newTask.title,
        time: newTask.time,
        duration: newTask.duration || "30 min",
        category: newTask.category,
        priority: newTask.priority as "high" | "medium" | "low",
        completed: false,
        color: categoryColors[newTask.category] || "from-gray-500 to-gray-600"
      }]);

      setNewTask({
        title: "",
        time: "",
        duration: "",
        category: "Fitness",
        priority: "medium"
      });
      setShowNewTaskModal(false);
    }
  };

  const handleToggleSuggestion = (suggestionId: number) => {
    setSelectedSuggestions(prev => 
      prev.includes(suggestionId) 
        ? prev.filter(id => id !== suggestionId)
        : [...prev, suggestionId]
    );
  };

  const handleApplyAllSuggestions = () => {
    setSelectedSuggestions(suggestions.map(s => s.id));
    // NÃO fecha o modal automaticamente
  };

  const handleApplySelectedSuggestions = () => {
    // Aplica as sugestões selecionadas
    setShowSuggestionsModal(false);
    setSelectedSuggestions([]);
  };

  const filteredTasks = tasks.filter(task => {
    if (filterOptions.category !== "all" && task.category !== filterOptions.category) return false;
    if (filterOptions.priority !== "all" && task.priority !== filterOptions.priority) return false;
    if (filterOptions.status === "completed" && !task.completed) return false;
    if (filterOptions.status === "pending" && task.completed) return false;
    return true;
  });

  const upcomingEvents = [
    { date: "Amanhã", title: "Consulta nutricionista", time: "14:00" },
    { date: "Sábado", title: "Compras de roupas", time: "10:00" },
    { date: "Próxima semana", title: "Avaliação física", time: "09:00" }
  ];

  const stats = [
    { label: "Tarefas Hoje", value: tasks.length.toString(), completed: tasks.filter(t => t.completed).length.toString(), icon: CheckCircle2, color: "text-green-400" },
    { label: "Esta Semana", value: "28", completed: "18", icon: Calendar, color: "text-blue-400" },
    { label: "Taxa de Conclusão", value: `${Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}%`, trend: "+12%", icon: TrendingUp, color: "text-cyan-400" }
  ];

  const categories = [
    { name: "Fitness", count: 8, color: "bg-green-500" },
    { name: "Nutrição", count: 12, color: "bg-emerald-500" },
    { name: "Organização", count: 5, color: "bg-teal-500" }
  ];

  const weekDays = [
    { day: "Seg", tasks: 6, completed: 5 },
    { day: "Ter", tasks: 5, completed: 4 },
    { day: "Qua", tasks: 7, completed: 6 },
    { day: "Qui", tasks: tasks.length, completed: tasks.filter(t => t.completed).length, today: true },
    { day: "Sex", tasks: 4, completed: 0 },
    { day: "Sáb", tasks: 3, completed: 0 },
    { day: "Dom", tasks: 2, completed: 0 }
  ];

  const fullCalendar = [
    { week: "Esta Semana", days: [
      { date: "Seg 20", tasks: ["Treino Peito", "Reunião 10h", "Almoço saudável", "Skincare noite", "Estudar 2h", "Planejar semana"], completed: 5, total: 6 },
      { date: "Ter 21", tasks: ["Treino Costas", "Consulta médica 14h", "Preparar jantar", "Lavar roupas", "Ler 30min"], completed: 4, total: 5 },
      { date: "Qua 22", tasks: ["Treino Pernas", "Compras mercado", "Organizar closet", "Skincare completo", "Yoga 20min", "Meditar 10min", "Journaling"], completed: 6, total: 7 },
      { date: "Qui 23", tasks: ["Treino Ombros", "Almoço: Frango salada", "Skincare matinal", "Montar look jantar", "Revisar metas"], completed: tasks.filter(t => t.completed).length, total: tasks.length, today: true },
      { date: "Sex 24", tasks: ["Treino Full Body", "Preparar marmitas", "Manicure 16h", "Jantar com amigos"], completed: 0, total: 4 },
      { date: "Sáb 25", tasks: ["Cardio HIIT", "Compras roupas", "Spa day"], completed: 0, total: 3 },
      { date: "Dom 26", tasks: ["Descanso ativo", "Meal prep semana"], completed: 0, total: 2 }
    ]},
    { week: "Próxima Semana", days: [
      { date: "Seg 27", tasks: ["Treino Peito", "Trabalho 9h-18h", "Curso online 20h", "Skincare", "Planejar semana", "Meditar"], completed: 0, total: 6 },
      { date: "Ter 28", tasks: ["Treino Costas", "Consulta nutricionista 14h", "Preparar jantar", "Estudar inglês", "Ler"], completed: 0, total: 5 },
      { date: "Qua 29", tasks: ["Treino Pernas", "Reunião importante 10h", "Almoço networking", "Organizar documentos", "Yoga", "Journaling"], completed: 0, total: 6 },
      { date: "Qui 30", tasks: ["Treino Ombros", "Dentista 15h", "Compras farmácia", "Skincare completo", "Revisar metas"], completed: 0, total: 5 },
      { date: "Sex 31", tasks: ["Treino Full Body", "Happy hour 19h", "Preparar fim de semana"], completed: 0, total: 3 },
      { date: "Sáb 01", tasks: ["Cardio", "Limpeza casa", "Lavar carro", "Cinema noite"], completed: 0, total: 4 },
      { date: "Dom 02", tasks: ["Descanso", "Família almoço", "Meal prep"], completed: 0, total: 3 }
    ]},
    { week: "Semana 3", days: [
      { date: "Seg 03", tasks: ["Treino Peito", "Trabalho", "Curso", "Skincare", "Planejar", "Meditar"], completed: 0, total: 6 },
      { date: "Ter 04", tasks: ["Treino Costas", "Trabalho", "Estudar", "Preparar jantar", "Ler"], completed: 0, total: 5 },
      { date: "Qua 05", tasks: ["Treino Pernas", "Trabalho", "Yoga", "Organizar", "Journaling"], completed: 0, total: 5 },
      { date: "Qui 06", tasks: ["Treino Ombros", "Trabalho", "Skincare", "Revisar metas"], completed: 0, total: 4 },
      { date: "Sex 07", tasks: ["Treino Full Body", "Trabalho", "Preparar fim de semana"], completed: 0, total: 3 },
      { date: "Sáb 08", tasks: ["Cardio", "Compras", "Lazer"], completed: 0, total: 3 },
      { date: "Dom 09", tasks: ["Descanso", "Família", "Meal prep"], completed: 0, total: 3 }
    ]},
    { week: "Semana 4", days: [
      { date: "Seg 10", tasks: ["Treino Peito", "Avaliação física 9h", "Trabalho", "Curso", "Planejar"], completed: 0, total: 5 },
      { date: "Ter 11", tasks: ["Treino Costas", "Trabalho", "Estudar", "Preparar jantar"], completed: 0, total: 4 },
      { date: "Qua 12", tasks: ["Treino Pernas", "Trabalho", "Yoga", "Organizar"], completed: 0, total: 4 },
      { date: "Qui 13", tasks: ["Treino Ombros", "Trabalho", "Skincare", "Revisar metas"], completed: 0, total: 4 },
      { date: "Sex 14", tasks: ["Treino Full Body", "Trabalho", "Evento 20h"], completed: 0, total: 3 },
      { date: "Sáb 15", tasks: ["Cardio", "Spa day", "Jantar especial"], completed: 0, total: 3 },
      { date: "Dom 16", tasks: ["Descanso", "Família", "Meal prep"], completed: 0, total: 3 }
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Organização</h1>
                  <p className="text-xs text-gray-400">Sua agenda inteligente</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                onClick={() => setShowNewTaskModal(true)}
                className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nova Tarefa
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Planning Assistant */}
        <Card className="bg-gradient-to-r from-teal-900/40 to-green-900/40 border-teal-500/30 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Assistente de Planejamento IA 📅</h3>
              <p className="text-gray-300 mb-4">
                Bom dia! Sua agenda está otimizada para hoje. Sugiro fazer o treino às 8h30 (seu horário de melhor performance). 
                Deixei 30 minutos livres entre o almoço e a próxima tarefa para digestão. Você tem {tasks.length} tarefas hoje - todas alcançáveis!
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={handleOptimizeWeek}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Otimizar Semana
                </Button>
                <Button 
                  onClick={handleViewSuggestions}
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Ver Sugestões
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-slate-800/50 border-white/10 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
                {stat.trend && (
                  <span className="text-xs text-green-400">{stat.trend}</span>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                {stat.completed && (
                  <span className="text-sm text-gray-400">de {stat.completed}</span>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* View Selector */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg">
                <button
                  onClick={() => setSelectedView("today")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedView === "today"
                      ? "bg-gradient-to-r from-teal-500 to-green-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Hoje
                </button>
                <button
                  onClick={() => setSelectedView("week")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedView === "week"
                      ? "bg-gradient-to-r from-teal-500 to-green-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Semana
                </button>
                <button
                  onClick={() => setSelectedView("month")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedView === "month"
                      ? "bg-gradient-to-r from-teal-500 to-green-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Mês
                </button>
              </div>

              <Button 
                onClick={() => setShowFilterModal(true)}
                variant="outline" 
                size="icon" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Filter className="w-4 h-4" />
              </Button>
            </div>

            {/* Today's Tasks */}
            {selectedView === "today" && (
              <Card className="bg-slate-800/50 border-white/10 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Tarefas de Hoje</h2>
                <div className="space-y-3">
                  {filteredTasks.map((task) => (
                    <div 
                      key={task.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                        task.completed 
                          ? 'bg-green-500/10 border-green-500/30' 
                          : 'bg-slate-700/30 border-white/10 hover:border-teal-500/30'
                      }`}
                    >
                      <button
                        onClick={() => handleToggleComplete(task.id)}
                        className="flex-shrink-0 hover:scale-110 transition-transform"
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-6 h-6 text-green-400" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-400 hover:text-teal-400" />
                        )}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-semibold ${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                            {task.title}
                          </h4>
                          {task.priority === 'high' && !task.completed && (
                            <Flag className="w-4 h-4 text-red-400" />
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {task.time}
                          </span>
                          <span>•</span>
                          <span>{task.duration}</span>
                          <span>•</span>
                          <span className={`px-2 py-0.5 rounded text-xs bg-gradient-to-r ${task.color} text-white`}>
                            {task.category}
                          </span>
                        </div>
                      </div>

                      {task.completed && (
                        <Button 
                          onClick={() => handleToggleComplete(task.id)}
                          size="sm" 
                          variant="outline"
                          className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                        >
                          <Undo2 className="w-4 h-4 mr-2" />
                          Desfazer
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => setShowNewTaskModal(true)}
                  className="w-full mt-4 bg-slate-700/50 hover:bg-slate-700 text-white border border-white/10"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Tarefa
                </Button>
              </Card>
            )}

            {/* Week View */}
            {selectedView === "week" && (
              <Card className="bg-slate-800/50 border-white/10 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Visão Semanal Detalhada</h2>
                <div className="space-y-4">
                  {fullCalendar[0].days.map((day, i) => (
                    <div 
                      key={i}
                      className={`p-4 rounded-lg border ${
                        day.today 
                          ? 'bg-gradient-to-r from-teal-900/40 to-green-900/40 border-teal-500/30' 
                          : 'bg-slate-700/30 border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-white">{day.date}</h3>
                          {day.today && (
                            <span className="px-2 py-0.5 rounded text-xs bg-teal-500 text-white">
                              Hoje
                            </span>
                          )}
                        </div>
                        <div className="text-sm">
                          <span className="text-green-400 font-semibold">{day.completed}</span>
                          <span className="text-gray-400"> de </span>
                          <span className="text-white font-semibold">{day.total}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {day.tasks.map((task, taskIndex) => (
                          <div 
                            key={taskIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            {taskIndex < day.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            )}
                            <span className={taskIndex < day.completed ? 'text-gray-400 line-through' : 'text-gray-300'}>
                              {task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Month View */}
            {selectedView === "month" && (
              <Card className="bg-slate-800/50 border-white/10 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Visão Mensal</h2>
                <div className="space-y-6">
                  {fullCalendar.map((week, weekIndex) => (
                    <div key={weekIndex}>
                      <h3 className="text-lg font-bold text-white mb-3">{week.week}</h3>
                      <div className="grid grid-cols-7 gap-2">
                        {week.days.map((day, dayIndex) => (
                          <div 
                            key={dayIndex}
                            className={`p-3 rounded-lg text-center transition-all ${
                              day.today 
                                ? 'bg-gradient-to-br from-teal-500 to-green-500 text-white' 
                                : 'bg-slate-700/30 border border-white/10 hover:border-teal-500/30'
                            }`}
                          >
                            <div className="text-xs font-medium mb-2">{day.date.split(' ')[0]}</div>
                            <div className="text-lg font-bold">{day.completed}/{day.total}</div>
                            <div className="text-xs mt-1 opacity-70">
                              {Math.round((day.completed / day.total) * 100)}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Weekly Overview */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Resumo Semanal</h3>
              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((day, i) => (
                  <div 
                    key={i}
                    className={`p-3 rounded-lg text-center transition-all ${
                      day.today 
                        ? 'bg-gradient-to-br from-teal-500 to-green-500 text-white' 
                        : 'bg-slate-700/30 border border-white/10'
                    }`}
                  >
                    <div className="text-xs font-medium mb-2">{day.day}</div>
                    <div className="text-lg font-bold">{day.completed}/{day.tasks}</div>
                    <div className="text-xs mt-1 opacity-70">tarefas</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Categorias</h3>
              <div className="space-y-3">
                {categories.map((category, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setFilterOptions({...filterOptions, category: category.name});
                      setSelectedView("today");
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`} />
                      <span className="text-sm text-gray-300">{category.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">{category.count}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Próximos Eventos</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-700/30 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">{event.date}</span>
                      <span className="text-xs text-gray-400">{event.time}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">{event.title}</h4>
                  </div>
                ))}
              </div>
              <Button 
                onClick={() => setShowCalendar(true)}
                className="w-full mt-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600"
              >
                Ver Calendário Completo
              </Button>
            </Card>

            {/* Productivity Stats */}
            <Card className="bg-gradient-to-br from-teal-900/30 to-green-900/30 border-teal-500/20 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-400" />
                Produtividade
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Meta Diária</span>
                    <span className="text-white font-medium">{Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full" style={{ width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Meta Semanal</span>
                    <span className="text-white font-medium">64%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full" style={{ width: '64%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Meta Mensal</span>
                    <span className="text-white font-medium">58%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full" style={{ width: '58%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Você está 12% mais produtivo que na semana passada! 🎉
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Optimize Week Modal */}
      {showOptimizeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Otimização Semanal IA</h2>
                  <p className="text-sm text-gray-400">Análise completa da sua agenda</p>
                </div>
              </div>
              <Button 
                onClick={() => setShowOptimizeModal(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-teal-900/30 to-green-900/30 border border-teal-500/20 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Análise Concluída
                </h3>
                <p className="text-gray-300 text-sm">
                  Sua semana foi analisada e otimizada com sucesso! Encontrei 8 oportunidades de melhoria.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-3">✨ Otimizações Aplicadas:</h3>
                <div className="space-y-3">
                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Treinos Reagendados</h4>
                        <p className="text-sm text-gray-400">Movidos para horários de pico de energia (8h-10h e 17h-19h)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Tarefas Agrupadas</h4>
                        <p className="text-sm text-gray-400">Atividades similares organizadas em blocos de contexto</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Tempo de Descanso</h4>
                        <p className="text-sm text-gray-400">Intervalos estratégicos adicionados entre tarefas intensas</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Conflitos Resolvidos</h4>
                        <p className="text-sm text-gray-400">3 sobreposições de horário foram automaticamente ajustadas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">+28%</div>
                  <div className="text-xs text-gray-400">Produtividade</div>
                </div>
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">3h 15min</div>
                  <div className="text-xs text-gray-400">Tempo Livre</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">94%</div>
                  <div className="text-xs text-gray-400">Otimização</div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-900 p-6 border-t border-white/10">
              <Button 
                onClick={() => setShowOptimizeModal(false)}
                className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600"
              >
                Aplicar Otimizações
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Suggestions Modal */}
      {showSuggestionsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Sugestões Personalizadas</h2>
                  <p className="text-sm text-gray-400">Selecione as sugestões que deseja aplicar</p>
                </div>
              </div>
              <Button 
                onClick={() => setShowSuggestionsModal(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Produtividade
                </h3>
                <div className="space-y-3">
                  {suggestions.filter(s => s.category === "Produtividade").map((suggestion) => (
                    <div 
                      key={suggestion.id}
                      className={`bg-slate-800/50 border rounded-lg p-4 transition-all cursor-pointer ${
                        selectedSuggestions.includes(suggestion.id)
                          ? 'border-green-500/50 bg-green-500/10'
                          : 'border-white/10 hover:border-green-500/30'
                      }`}
                      onClick={() => handleToggleSuggestion(suggestion.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                          selectedSuggestions.includes(suggestion.id)
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-400'
                        }`}>
                          {selectedSuggestions.includes(suggestion.id) && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2">{suggestion.title}</h4>
                          <p className="text-sm text-gray-400">{suggestion.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Energia
                </h3>
                <div className="space-y-3">
                  {suggestions.filter(s => s.category === "Energia").map((suggestion) => (
                    <div 
                      key={suggestion.id}
                      className={`bg-slate-800/50 border rounded-lg p-4 transition-all cursor-pointer ${
                        selectedSuggestions.includes(suggestion.id)
                          ? 'border-yellow-500/50 bg-yellow-500/10'
                          : 'border-white/10 hover:border-yellow-500/30'
                      }`}
                      onClick={() => handleToggleSuggestion(suggestion.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                          selectedSuggestions.includes(suggestion.id)
                            ? 'bg-yellow-500 border-yellow-500'
                            : 'border-gray-400'
                        }`}>
                          {selectedSuggestions.includes(suggestion.id) && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2">{suggestion.title}</h4>
                          <p className="text-sm text-gray-400">{suggestion.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-pink-400">💖</span>
                  Bem-estar
                </h3>
                <div className="space-y-3">
                  {suggestions.filter(s => s.category === "Bem-estar").map((suggestion) => (
                    <div 
                      key={suggestion.id}
                      className={`bg-slate-800/50 border rounded-lg p-4 transition-all cursor-pointer ${
                        selectedSuggestions.includes(suggestion.id)
                          ? 'border-pink-500/50 bg-pink-500/10'
                          : 'border-white/10 hover:border-pink-500/30'
                      }`}
                      onClick={() => handleToggleSuggestion(suggestion.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                          selectedSuggestions.includes(suggestion.id)
                            ? 'bg-pink-500 border-pink-500'
                            : 'border-gray-400'
                        }`}>
                          {selectedSuggestions.includes(suggestion.id) && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2">{suggestion.title}</h4>
                          <p className="text-sm text-gray-400">{suggestion.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-900 p-6 border-t border-white/10 flex gap-3">
              <Button 
                onClick={() => setShowSuggestionsModal(false)}
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Fechar
              </Button>
              <Button 
                onClick={handleApplyAllSuggestions}
                variant="outline"
                className="flex-1 border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
              >
                Selecionar Todas
              </Button>
              <Button 
                onClick={handleApplySelectedSuggestions}
                disabled={selectedSuggestions.length === 0}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Aplicar ({selectedSuggestions.length})
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* New Task Modal */}
      {showNewTaskModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-md">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Nova Tarefa</h2>
              <Button 
                onClick={() => setShowNewTaskModal(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Título da Tarefa</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  placeholder="Ex: Treino de Peito"
                  className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Horário</label>
                  <input
                    type="time"
                    value={newTask.time}
                    onChange={(e) => setNewTask({...newTask, time: e.target.value})}
                    className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Duração</label>
                  <input
                    type="text"
                    value={newTask.duration}
                    onChange={(e) => setNewTask({...newTask, duration: e.target.value})}
                    placeholder="Ex: 60 min"
                    className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Categoria</label>
                <select
                  value={newTask.category}
                  onChange={(e) => setNewTask({...newTask, category: e.target.value})}
                  className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="Fitness">Fitness</option>
                  <option value="Nutrição">Nutrição</option>
                  <option value="Organização">Organização</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Prioridade</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setNewTask({...newTask, priority: "low"})}
                    className={`flex-1 py-2 rounded-lg border transition-all ${
                      newTask.priority === "low"
                        ? "bg-blue-500/20 border-blue-500 text-blue-400"
                        : "bg-slate-800 border-white/10 text-gray-400 hover:border-blue-500/50"
                    }`}
                  >
                    Baixa
                  </button>
                  <button
                    onClick={() => setNewTask({...newTask, priority: "medium"})}
                    className={`flex-1 py-2 rounded-lg border transition-all ${
                      newTask.priority === "medium"
                        ? "bg-yellow-500/20 border-yellow-500 text-yellow-400"
                        : "bg-slate-800 border-white/10 text-gray-400 hover:border-yellow-500/50"
                    }`}
                  >
                    Média
                  </button>
                  <button
                    onClick={() => setNewTask({...newTask, priority: "high"})}
                    className={`flex-1 py-2 rounded-lg border transition-all ${
                      newTask.priority === "high"
                        ? "bg-red-500/20 border-red-500 text-red-400"
                        : "bg-slate-800 border-white/10 text-gray-400 hover:border-red-500/50"
                    }`}
                  >
                    Alta
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-white/10 flex gap-3">
              <Button 
                onClick={() => setShowNewTaskModal(false)}
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Cancelar
              </Button>
              <Button 
                onClick={handleAddTask}
                disabled={!newTask.title || !newTask.time}
                className="flex-1 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Adicionar
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 p-6 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-teal-400" />
                <h2 className="text-xl font-bold text-white">Filtros</h2>
              </div>
              <Button 
                onClick={() => setShowFilterModal(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-3 block">Categoria</label>
                <div className="space-y-2">
                  {["all", "Fitness", "Nutrição", "Organização"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilterOptions({...filterOptions, category: cat})}
                      className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
                        filterOptions.category === cat
                          ? "bg-teal-500/20 border-teal-500 text-teal-400"
                          : "bg-slate-800 border-white/10 text-gray-400 hover:border-teal-500/50"
                      }`}
                    >
                      {cat === "all" ? "Todas as Categorias" : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-3 block">Prioridade</label>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "Todas as Prioridades" },
                    { value: "high", label: "Alta" },
                    { value: "medium", label: "Média" },
                    { value: "low", label: "Baixa" }
                  ].map((priority) => (
                    <button
                      key={priority.value}
                      onClick={() => setFilterOptions({...filterOptions, priority: priority.value})}
                      className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
                        filterOptions.priority === priority.value
                          ? "bg-teal-500/20 border-teal-500 text-teal-400"
                          : "bg-slate-800 border-white/10 text-gray-400 hover:border-teal-500/50"
                      }`}
                    >
                      {priority.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-3 block">Status</label>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "Todas as Tarefas" },
                    { value: "pending", label: "Pendentes" },
                    { value: "completed", label: "Concluídas" }
                  ].map((status) => (
                    <button
                      key={status.value}
                      onClick={() => setFilterOptions({...filterOptions, status: status.value})}
                      className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
                        filterOptions.status === status.value
                          ? "bg-teal-500/20 border-teal-500 text-teal-400"
                          : "bg-slate-800 border-white/10 text-gray-400 hover:border-teal-500/50"
                      }`}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-900 p-6 border-t border-white/10 flex gap-3">
              <Button 
                onClick={() => {
                  setFilterOptions({ category: "all", priority: "all", status: "all" });
                }}
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Limpar Filtros
              </Button>
              <Button 
                onClick={() => setShowFilterModal(false)}
                className="flex-1 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600"
              >
                Aplicar
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold text-white">Calendário Completo</h2>
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
                            ? 'bg-gradient-to-r from-teal-900/40 to-green-900/40 border-teal-500/30'
                            : 'bg-slate-800/50 border-white/10'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-white">{day.date}</h4>
                              {day.today && (
                                <span className="px-2 py-0.5 rounded text-xs bg-teal-500 text-white">
                                  Hoje
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-green-400 font-semibold">{day.completed}</span>
                              <span className="text-gray-400">de</span>
                              <span className="text-white font-semibold">{day.total}</span>
                              <span className="text-gray-400">tarefas concluídas</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">
                              {Math.round((day.completed / day.total) * 100)}%
                            </div>
                            <div className="text-xs text-gray-400">completo</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {day.tasks.map((task, taskIndex) => (
                            <div 
                              key={taskIndex}
                              className="flex items-center gap-2 text-sm"
                            >
                              {taskIndex < day.completed ? (
                                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                              )}
                              <span className={taskIndex < day.completed ? 'text-gray-400 line-through' : 'text-gray-300'}>
                                {task}
                              </span>
                            </div>
                          ))}
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
                  <span className="text-white font-semibold">98 tarefas</span> totais • 
                  <span className="text-white font-semibold ml-1">20 treinos</span> • 
                  <span className="text-white font-semibold ml-1">8 eventos</span>
                </div>
                <Button 
                  onClick={() => setShowCalendar(false)}
                  className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600"
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
