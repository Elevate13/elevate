"use client";

import { useState } from "react";
import { 
  Apple,
  ChevronLeft,
  Plus,
  TrendingUp,
  Target,
  Droplet,
  Flame,
  Clock,
  ChefHat,
  Camera,
  Utensils,
  Coffee,
  Sun,
  Moon,
  Minus,
  X,
  Search,
  Filter,
  BookOpen,
  Heart,
  Star,
  Timer,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function NutritionPage() {
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [waterIntake, setWaterIntake] = useState(1.8);
  const [showCustomMealModal, setShowCustomMealModal] = useState(false);
  const [showAllRecipesModal, setShowAllRecipesModal] = useState(false);
  const [selectedRecipeCategory, setSelectedRecipeCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleScanMeal = () => {
    setIsScanning(true);
    // Simula abertura da câmera
    setTimeout(() => {
      alert("📸 Câmera aberta! Tire uma foto da sua refeição para análise nutricional automática com IA.");
      setIsScanning(false);
    }, 500);
  };

  const handleAddWater = () => {
    const newWater = Math.min(waterIntake + 0.25, 2.5);
    setWaterIntake(newWater);
  };

  const handleRemoveWater = () => {
    const newWater = Math.max(waterIntake - 0.25, 0);
    setWaterIntake(newWater);
  };

  const handleViewAllRecipes = () => {
    setShowAllRecipesModal(true);
  };

  const handleViewRecommendations = () => {
    alert("🤖 Recomendações Personalizadas da IA:\n\n1. Aumente ingestão de água em 700ml\n2. Adicione mais vegetais verdes no jantar\n3. Considere suplementação de Ômega-3\n4. Mantenha consistência no café da manhã\n5. Reduza carboidratos simples à noite\n\nSuas metas estão 84% alinhadas com seu objetivo!");
  };

  const handleViewHydrationDetails = () => {
    alert("💧 Análise de Hidratação:\n\n• Meta diária: 2.5L\n• Consumo atual: " + waterIntake.toFixed(2) + "L (" + Math.round((waterIntake / 2.5) * 100) + "%)\n• Faltam: " + (2.5 - waterIntake).toFixed(2) + "L\n\n💡 Dica: Beba 250ml a cada hora até atingir sua meta!");
  };

  const handleAddCustomMeal = () => {
    setShowCustomMealModal(true);
  };

  const handleSaveCustomMeal = () => {
    setShowCustomMealModal(false);
    alert("✅ Refeição Personalizada Adicionada!\n\n📋 Sua refeição foi salva com sucesso.\n📊 Macros calculados automaticamente pela IA\n📅 Adicionada ao plano de hoje\n\n💡 Você pode editar ou remover a qualquer momento!");
  };

  const handleSelectRecipe = (recipe: any) => {
    setShowAllRecipesModal(false);
    alert(`✅ Receita Selecionada: ${recipe.name}\n\n📋 Ingredientes e modo de preparo disponíveis\n⏱️ Tempo: ${recipe.time}\n🔥 ${recipe.calories} kcal\n💪 ${recipe.protein}g proteína\n\n💡 Deseja adicionar ao seu plano de hoje?`);
  };

  const dailyGoals = {
    calories: { current: 1850, target: 2200, unit: "kcal" },
    protein: { current: 120, target: 150, unit: "g" },
    carbs: { current: 180, target: 250, unit: "g" },
    fats: { current: 55, target: 70, unit: "g" },
    water: { current: waterIntake, target: 2.5, unit: "L" }
  };

  const todayMeals = [
    {
      id: "breakfast",
      name: "Café da Manhã",
      time: "07:30",
      icon: Coffee,
      color: "from-yellow-500 to-orange-500",
      items: [
        { name: "Ovos mexidos (3 unidades)", calories: 210, protein: 18 },
        { name: "Aveia com banana", calories: 280, protein: 8 },
        { name: "Suco de laranja natural", calories: 110, protein: 2 }
      ],
      completed: true
    },
    {
      id: "lunch",
      name: "Almoço",
      time: "12:30",
      icon: Sun,
      color: "from-orange-500 to-red-500",
      items: [
        { name: "Frango grelhado (200g)", calories: 330, protein: 62 },
        { name: "Arroz integral (150g)", calories: 180, protein: 4 },
        { name: "Salada completa", calories: 80, protein: 3 },
        { name: "Feijão (100g)", calories: 130, protein: 8 }
      ],
      completed: false,
      suggested: true
    },
    {
      id: "snack",
      name: "Lanche da Tarde",
      time: "16:00",
      icon: Utensils,
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Iogurte grego natural", calories: 150, protein: 15 },
        { name: "Mix de castanhas (30g)", calories: 180, protein: 5 },
        { name: "Maçã", calories: 95, protein: 0 }
      ],
      completed: false
    },
    {
      id: "dinner",
      name: "Jantar",
      time: "19:30",
      icon: Moon,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "Salmão grelhado (180g)", calories: 360, protein: 40 },
        { name: "Batata doce (150g)", calories: 130, protein: 2 },
        { name: "Brócolis no vapor", calories: 55, protein: 4 }
      ],
      completed: false
    }
  ];

  const stats = [
    { label: "Calorias", value: `${dailyGoals.calories.current}/${dailyGoals.calories.target}`, icon: Flame, color: "text-orange-400", progress: (dailyGoals.calories.current / dailyGoals.calories.target) * 100 },
    { label: "Proteína", value: `${dailyGoals.protein.current}/${dailyGoals.protein.target}g`, icon: Target, color: "text-blue-400", progress: (dailyGoals.protein.current / dailyGoals.protein.target) * 100 },
    { label: "Hidratação", value: `${dailyGoals.water.current.toFixed(1)}/${dailyGoals.water.target}L`, icon: Droplet, color: "text-cyan-400", progress: (dailyGoals.water.current / dailyGoals.water.target) * 100 }
  ];

  const weekProgress = [
    { day: "Seg", adherence: 95 },
    { day: "Ter", adherence: 88 },
    { day: "Qua", adherence: 92 },
    { day: "Qui", adherence: 84 },
    { day: "Sex", adherence: 0 },
    { day: "Sáb", adherence: 0 },
    { day: "Dom", adherence: 0 }
  ];

  const quickRecipes = [
    {
      name: "Smoothie Proteico",
      time: "5 min",
      calories: 320,
      protein: 25,
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop"
    },
    {
      name: "Salada Caesar Fit",
      time: "10 min",
      calories: 380,
      protein: 35,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop"
    },
    {
      name: "Wrap de Frango",
      time: "15 min",
      calories: 420,
      protein: 40,
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop"
    }
  ];

  const recipeCategories = [
    { id: "all", name: "Todas", count: 800 },
    { id: "breakfast", name: "Café da Manhã", count: 120 },
    { id: "lunch", name: "Almoço", count: 250 },
    { id: "dinner", name: "Jantar", count: 200 },
    { id: "snacks", name: "Lanches", count: 150 },
    { id: "desserts", name: "Sobremesas Fit", count: 80 }
  ];

  const allRecipes = [
    {
      id: 1,
      name: "Omelete Proteica com Espinafre",
      category: "breakfast",
      time: "10 min",
      calories: 280,
      protein: 32,
      difficulty: "Fácil",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
      ingredients: ["4 ovos", "100g espinafre", "50g queijo cottage", "Temperos"],
      favorite: true
    },
    {
      id: 2,
      name: "Bowl de Açaí Fitness",
      category: "breakfast",
      time: "5 min",
      calories: 350,
      protein: 18,
      difficulty: "Fácil",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
      ingredients: ["200g açaí", "Banana", "Granola", "Mel"],
      favorite: false
    },
    {
      id: 3,
      name: "Frango Grelhado com Legumes",
      category: "lunch",
      time: "25 min",
      calories: 420,
      protein: 55,
      difficulty: "Médio",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
      ingredients: ["250g peito de frango", "Brócolis", "Cenoura", "Azeite"],
      favorite: true
    },
    {
      id: 4,
      name: "Salada de Quinoa Completa",
      category: "lunch",
      time: "15 min",
      calories: 380,
      protein: 22,
      difficulty: "Fácil",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop",
      ingredients: ["150g quinoa", "Tomate", "Pepino", "Grão de bico"],
      favorite: false
    },
    {
      id: 5,
      name: "Salmão ao Forno com Aspargos",
      category: "dinner",
      time: "30 min",
      calories: 450,
      protein: 48,
      difficulty: "Médio",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      ingredients: ["200g salmão", "Aspargos", "Limão", "Ervas"],
      favorite: true
    },
    {
      id: 6,
      name: "Wrap Integral de Atum",
      category: "snacks",
      time: "8 min",
      calories: 320,
      protein: 28,
      difficulty: "Fácil",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
      ingredients: ["Tortilha integral", "Atum", "Alface", "Tomate"],
      favorite: false
    },
    {
      id: 7,
      name: "Brownie Proteico",
      category: "desserts",
      time: "35 min",
      calories: 180,
      protein: 15,
      difficulty: "Médio",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      ingredients: ["Whey chocolate", "Cacau", "Banana", "Aveia"],
      favorite: true
    },
    {
      id: 8,
      name: "Smoothie Verde Detox",
      category: "snacks",
      time: "5 min",
      calories: 150,
      protein: 8,
      difficulty: "Fácil",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop",
      ingredients: ["Espinafre", "Abacaxi", "Gengibre", "Água de coco"],
      favorite: false
    },
    {
      id: 9,
      name: "Panqueca de Aveia Fitness",
      category: "breakfast",
      time: "12 min",
      calories: 290,
      protein: 24,
      difficulty: "Fácil",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop",
      ingredients: ["Aveia", "Ovos", "Banana", "Canela"],
      favorite: true
    },
    {
      id: 10,
      name: "Risoto de Frango Light",
      category: "dinner",
      time: "40 min",
      calories: 410,
      protein: 38,
      difficulty: "Difícil",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1476124369491-c4ca6e0e3fcd?w=400&h=300&fit=crop",
      ingredients: ["Arroz arbóreo", "Frango", "Cogumelos", "Caldo"],
      favorite: false
    },
    {
      id: 11,
      name: "Tapioca Recheada Fitness",
      category: "snacks",
      time: "10 min",
      calories: 220,
      protein: 18,
      difficulty: "Fácil",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop",
      ingredients: ["Tapioca", "Frango desfiado", "Queijo branco", "Tomate"],
      favorite: false
    },
    {
      id: 12,
      name: "Mousse de Chocolate Proteico",
      category: "desserts",
      time: "15 min",
      calories: 160,
      protein: 20,
      difficulty: "Fácil",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1541599468348-e96984315921?w=400&h=300&fit=crop",
      ingredients: ["Whey chocolate", "Abacate", "Cacau", "Adoçante"],
      favorite: true
    }
  ];

  const filteredRecipes = allRecipes.filter(recipe => {
    const matchesCategory = selectedRecipeCategory === "all" || recipe.category === selectedRecipeCategory;
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Nutrição</h1>
                  <p className="text-xs text-gray-400">Seu plano alimentar</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                onClick={handleScanMeal}
                disabled={isScanning}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50"
              >
                <Camera className="w-4 h-4 mr-2" />
                {isScanning ? "Abrindo..." : "Escanear Refeição"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Nutrition Insight */}
        <Card className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-emerald-500/30 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Análise Nutricional IA 🥗</h3>
              <p className="text-gray-300 mb-4">
                Ótimo progresso! Você está 84% dentro da sua meta calórica. Sua ingestão de proteína está excelente. 
                Lembre-se de beber mais água - você está em {Math.round((waterIntake / 2.5) * 100)}% da meta de hidratação. Sugestão: adicione mais vegetais no jantar.
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={handleViewRecommendations}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  Ver Recomendações Personalizadas
                </Button>
                <Button 
                  onClick={handleScanMeal}
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Escanear Refeição
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
                <span className="text-sm font-semibold text-white">{stat.value}</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${
                    stat.progress >= 100 ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-cyan-500'
                  } rounded-full transition-all`}
                  style={{ width: `${Math.min(stat.progress, 100)}%` }}
                />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Meals */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Refeições de Hoje</h2>
              <div className="space-y-4">
                {todayMeals.map((meal) => (
                  <div 
                    key={meal.id}
                    className={`p-4 rounded-lg border transition-all ${
                      meal.completed 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : meal.suggested
                        ? 'bg-blue-500/10 border-blue-500/30'
                        : 'bg-slate-700/30 border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${meal.color} flex items-center justify-center`}>
                          <meal.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{meal.name}</h3>
                          <p className="text-xs text-gray-400">{meal.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {meal.suggested && (
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                            Sugerido pela IA
                          </span>
                        )}
                        {meal.completed ? (
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                            Completo ✓
                          </span>
                        ) : (
                          <Button 
                            size="sm" 
                            onClick={handleScanMeal}
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                          >
                            <Camera className="w-3 h-3 mr-1" />
                            Registrar
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 ml-13">
                      {meal.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className={meal.completed ? 'text-gray-400' : 'text-gray-300'}>
                            {item.name}
                          </span>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span>{item.calories} kcal</span>
                            <span>•</span>
                            <span>{item.protein}g proteína</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {!meal.completed && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Total da refeição:</span>
                          <span className="text-white font-semibold">
                            {meal.items.reduce((acc, item) => acc + item.calories, 0)} kcal • 
                            {meal.items.reduce((acc, item) => acc + item.protein, 0)}g proteína
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Button 
                onClick={handleAddCustomMeal}
                className="w-full mt-4 bg-slate-700/50 hover:bg-slate-700 text-white border border-white/10"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Refeição Personalizada
              </Button>
            </Card>

            {/* Weekly Adherence */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Aderência Semanal</h3>
              <div className="flex items-end justify-between gap-2 h-48">
                {weekProgress.map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-slate-700/50 rounded-lg overflow-hidden relative" style={{ height: '100%' }}>
                      <div 
                        className={`absolute bottom-0 w-full rounded-lg transition-all ${
                          day.adherence >= 90 
                            ? 'bg-gradient-to-t from-green-500 to-emerald-500'
                            : day.adherence >= 70
                            ? 'bg-gradient-to-t from-yellow-500 to-orange-500'
                            : day.adherence > 0
                            ? 'bg-gradient-to-t from-red-500 to-orange-500'
                            : 'bg-slate-700'
                        }`}
                        style={{ height: `${day.adherence}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{day.day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-400">Média: 90%</span>
                <span className="text-green-400 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +8% vs semana passada
                </span>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Macros Breakdown */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Macronutrientes</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Proteína</span>
                    <span className="text-white font-medium">{dailyGoals.protein.current}/{dailyGoals.protein.target}g</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: `${(dailyGoals.protein.current / dailyGoals.protein.target) * 100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Carboidratos</span>
                    <span className="text-white font-medium">{dailyGoals.carbs.current}/{dailyGoals.carbs.target}g</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: `${(dailyGoals.carbs.current / dailyGoals.carbs.target) * 100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Gorduras</span>
                    <span className="text-white font-medium">{dailyGoals.fats.current}/{dailyGoals.fats.target}g</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" style={{ width: `${(dailyGoals.fats.current / dailyGoals.fats.target) * 100}%` }} />
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Recipes */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Receitas Rápidas</h3>
              <div className="space-y-3">
                {quickRecipes.map((recipe, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                      <img 
                        src={recipe.image} 
                        alt={recipe.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="flex items-center justify-between text-xs text-white">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {recipe.time}
                          </span>
                          <span>{recipe.calories} kcal</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {recipe.name}
                    </h4>
                    <p className="text-xs text-gray-400">{recipe.protein}g proteína</p>
                  </div>
                ))}
              </div>
              <Button 
                onClick={handleViewAllRecipes}
                className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
              >
                Ver Todas as Receitas
              </Button>
            </Card>

            {/* Water Tracker */}
            <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/20 p-6">
              <h3 
                className="text-lg font-bold text-white mb-4 flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={handleViewHydrationDetails}
              >
                <Droplet className="w-5 h-5 text-cyan-400" />
                Hidratação
              </h3>
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl font-bold text-white">{waterIntake.toFixed(1)}L</div>
                <span className="text-gray-400 ml-2">/ {dailyGoals.water.target}L</span>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i}
                    className={`aspect-square rounded-lg ${
                      i < Math.floor((waterIntake / dailyGoals.water.target) * 10)
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-500'
                        : 'bg-slate-700/50'
                    }`}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  onClick={handleRemoveWater}
                  disabled={waterIntake <= 0}
                  className="bg-red-500/20 hover:bg-red-500/30 text-white disabled:opacity-30 disabled:cursor-not-allowed border border-red-500/30"
                >
                  <Minus className="w-4 h-4 mr-1" />
                  -250ml
                </Button>
                <Button 
                  onClick={handleAddWater}
                  disabled={waterIntake >= 2.5}
                  className="bg-cyan-500/20 hover:bg-cyan-500/30 text-white disabled:opacity-30 disabled:cursor-not-allowed border border-cyan-500/30"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  +250ml
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal de Adicionar Refeição Personalizada */}
      {showCustomMealModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Adicionar Refeição Personalizada</h2>
                  <p className="text-sm text-gray-400">Crie sua própria refeição</p>
                </div>
              </div>
              <Button 
                onClick={() => setShowCustomMealModal(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Nome da Refeição */}
                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Nome da Refeição</label>
                  <input
                    type="text"
                    placeholder="Ex: Meu Almoço Especial"
                    className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                {/* Horário */}
                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Horário</label>
                  <input
                    type="time"
                    className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                {/* Alimentos */}
                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Alimentos</label>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Nome do alimento"
                        className="flex-1 bg-slate-800/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
                      />
                      <input
                        type="number"
                        placeholder="Qtd (g)"
                        className="w-24 bg-slate-800/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
                      />
                      <Button 
                        size="icon"
                        className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">💡 A IA calculará automaticamente as calorias e macros</p>
                  </div>
                </div>

                {/* Informações Nutricionais Estimadas */}
                <Card className="bg-slate-800/50 border-white/10 p-4">
                  <h4 className="text-sm font-medium text-white mb-3">📊 Informações Nutricionais (Estimativa IA)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Calorias</p>
                      <p className="text-2xl font-bold text-white">450 kcal</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Proteína</p>
                      <p className="text-2xl font-bold text-blue-400">35g</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Carboidratos</p>
                      <p className="text-xl font-bold text-green-400">48g</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Gorduras</p>
                      <p className="text-xl font-bold text-yellow-400">12g</p>
                    </div>
                  </div>
                </Card>

                {/* Opções Adicionais */}
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-slate-800/50 text-emerald-500 focus:ring-emerald-500" />
                    <span className="text-sm text-gray-300">Adicionar aos favoritos</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-slate-800/50 text-emerald-500 focus:ring-emerald-500" defaultChecked />
                    <span className="text-sm text-gray-300">Repetir esta refeição semanalmente</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-slate-900/50">
              <div className="flex gap-3">
                <Button 
                  onClick={handleSaveCustomMeal}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                >
                  Salvar Refeição
                </Button>
                <Button 
                  onClick={() => setShowCustomMealModal(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Todas as Receitas - CORRIGIDO E HARMONIZADO */}
      {showAllRecipesModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 bg-slate-900/95 flex-shrink-0">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-white">Biblioteca de Receitas</h2>
                    <p className="text-xs sm:text-sm text-gray-400">Mais de 800 receitas personalizadas</p>
                  </div>
                </div>
                <Button 
                  onClick={() => setShowAllRecipesModal(false)}
                  variant="ghost" 
                  size="icon"
                  className="text-gray-400 hover:text-white flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Busca */}
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar receitas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Categorias - Scroll Horizontal */}
            <div className="px-4 sm:px-6 py-3 border-b border-white/10 bg-slate-900/50 overflow-x-auto flex-shrink-0">
              <div className="flex gap-2 min-w-max">
                {recipeCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedRecipeCategory(cat.id)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                      selectedRecipeCategory === cat.id
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {cat.name} <span className="opacity-70">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Receitas - CORRIGIDO */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {filteredRecipes.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-600 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Nenhuma receita encontrada</h3>
                  <p className="text-gray-400">Tente ajustar sua busca ou filtros</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                  {filteredRecipes.map((recipe) => (
                    <Card 
                      key={recipe.id} 
                      className="bg-slate-800/50 border-white/10 overflow-hidden group hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all cursor-pointer flex flex-col h-full"
                      onClick={() => handleSelectRecipe(recipe)}
                    >
                      {/* Imagem */}
                      <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                        <img 
                          src={recipe.image} 
                          alt={recipe.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Badges sobre a imagem */}
                        <div className="absolute top-2 right-2 flex gap-2">
                          {recipe.favorite && (
                            <div className="w-8 h-8 rounded-full bg-red-500/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                              <Heart className="w-4 h-4 text-white fill-white" />
                            </div>
                          )}
                        </div>

                        {/* Info sobre a imagem */}
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="flex items-center justify-between text-xs text-white">
                            <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                              <Timer className="w-3 h-3" />
                              {recipe.time}
                            </span>
                            <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full font-medium">
                              {recipe.calories} kcal
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="p-4 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 flex-1">
                            {recipe.name}
                          </h3>
                          <div className="flex items-center gap-1 text-yellow-400 flex-shrink-0">
                            <Star className="w-3 h-3 fill-yellow-400" />
                            <span className="text-xs font-medium">{recipe.rating}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">
                            {recipe.difficulty}
                          </span>
                          <span className="text-xs text-gray-400">
                            {recipe.protein}g proteína
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                          <Users className="w-3 h-3 flex-shrink-0" />
                          <span>{recipe.ingredients.length} ingredientes</span>
                        </div>

                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectRecipe(recipe);
                          }}
                          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-sm py-2 mt-auto"
                        >
                          Ver Receita
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-900/95 flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-gray-400">
                  Mostrando <span className="text-white font-bold">{filteredRecipes.length}</span> de <span className="text-white font-bold">{allRecipes.length}</span> receitas
                </p>
                <Button 
                  onClick={() => setShowAllRecipesModal(false)}
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                >
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
