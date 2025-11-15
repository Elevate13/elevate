"use client";

import { useState } from "react";
import { 
  Sparkle,
  ChevronLeft,
  Camera,
  Wand2,
  Sun,
  Moon,
  Droplet,
  Heart,
  Star,
  Clock,
  CheckCircle2,
  Circle,
  TrendingUp,
  Zap,
  Plus,
  X,
  Package,
  Calendar,
  AlertCircle,
  Check,
  Undo2,
  Activity,
  Target,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface RoutineStep {
  name: string;
  time: string;
  product: string;
  completed: boolean;
}

interface Product {
  id: string;
  name: string;
  brand: string;
  usage: string;
  expires: string;
  image: string;
}

export default function BeautyPage() {
  const [selectedRoutine, setSelectedRoutine] = useState<"morning" | "night">("morning");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showAiTipActions, setShowAiTipActions] = useState(false);
  const [showUncompleteConfirm, setShowUncompleteConfirm] = useState<number | null>(null);
  const [showFullAnalysisModal, setShowFullAnalysisModal] = useState(false);

  const [morningRoutine, setMorningRoutine] = useState<RoutineStep[]>([
    { name: "Limpeza Facial", time: "2 min", product: "Gel de limpeza suave", completed: true },
    { name: "Tônico", time: "1 min", product: "Tônico hidratante", completed: true },
    { name: "Sérum Vitamina C", time: "1 min", product: "Sérum antioxidante", completed: false },
    { name: "Hidratante", time: "2 min", product: "Creme facial FPS 30", completed: false },
    { name: "Protetor Solar", time: "1 min", product: "FPS 50+ PA++++", completed: false }
  ]);

  const [nightRoutine, setNightRoutine] = useState<RoutineStep[]>([
    { name: "Demaquilante", time: "3 min", product: "Óleo de limpeza", completed: false },
    { name: "Limpeza Profunda", time: "2 min", product: "Gel de limpeza", completed: false },
    { name: "Esfoliante", time: "2 min", product: "Esfoliante químico (2x semana)", completed: false },
    { name: "Sérum Retinol", time: "1 min", product: "Sérum anti-idade", completed: false },
    { name: "Hidratante Noturno", time: "2 min", product: "Creme nutritivo", completed: false },
    { name: "Creme para Olhos", time: "1 min", product: "Contorno de olhos", completed: false }
  ]);

  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Sérum Vitamina C",
      brand: "The Ordinary",
      usage: "Manhã",
      expires: "6 meses",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop"
    },
    {
      id: "2",
      name: "Protetor Solar FPS 50",
      brand: "La Roche-Posay",
      usage: "Manhã",
      expires: "8 meses",
      image: "https://images.unsplash.com/photo-1556228852-80c3b5e1c2c5?w=200&h=200&fit=crop"
    },
    {
      id: "3",
      name: "Retinol 0.5%",
      brand: "CeraVe",
      usage: "Noite",
      expires: "4 meses",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop"
    }
  ]);

  const handleAnalyzeSkin = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      alert("📸 Câmera aberta! Tire uma selfie para análise completa da sua pele. A IA vai identificar tipo de pele, hidratação, textura e dar recomendações personalizadas!");
      setIsAnalyzing(false);
    }, 500);
  };

  const handleViewFullAnalysis = () => {
    setShowFullAnalysisModal(true);
  };

  const handleCompleteStep = (index: number) => {
    if (selectedRoutine === "morning") {
      const updatedRoutine = [...morningRoutine];
      updatedRoutine[index].completed = true;
      setMorningRoutine(updatedRoutine);
    } else {
      const updatedRoutine = [...nightRoutine];
      updatedRoutine[index].completed = true;
      setNightRoutine(updatedRoutine);
    }

    // Mostrar mensagem de sucesso
    setSuccessMessage(`✅ ${selectedRoutine === "morning" ? morningRoutine[index].name : nightRoutine[index].name} concluído!`);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleUncompleteStep = (index: number) => {
    if (selectedRoutine === "morning") {
      const updatedRoutine = [...morningRoutine];
      updatedRoutine[index].completed = false;
      setMorningRoutine(updatedRoutine);
    } else {
      const updatedRoutine = [...nightRoutine];
      updatedRoutine[index].completed = false;
      setNightRoutine(updatedRoutine);
    }

    // Mostrar mensagem de sucesso
    setSuccessMessage(`↩️ ${selectedRoutine === "morning" ? morningRoutine[index].name : nightRoutine[index].name} desmarcado!`);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
    setShowUncompleteConfirm(null);
  };

  const handleAddProduct = () => {
    setShowAddProductModal(true);
    setShowAiTipActions(false);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.get("productName") as string,
      brand: formData.get("productBrand") as string,
      usage: formData.get("productUsage") as string,
      expires: formData.get("productExpires") as string,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop"
    };

    setProducts([...products, newProduct]);
    setShowAddProductModal(false);
    setShowAiTipActions(false);

    // Mostrar mensagem de sucesso
    setSuccessMessage(`✅ Produto "${newProduct.name}" adicionado com sucesso!`);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleApplyAiTip = () => {
    // Simula a aplicação da dica da IA (tirar foto/escanear código de barras)
    alert("📸 Câmera aberta! Tire uma foto do produto ou escaneie o código de barras para adicionar automaticamente todas as informações.");
    setShowAiTipActions(false);
  };

  const handleCancelAiTip = () => {
    setShowAiTipActions(false);
  };

  const skinAnalysis = {
    type: "Mista",
    concerns: ["Oleosidade na zona T", "Poros dilatados", "Linhas finas"],
    hydration: 72,
    texture: 85,
    radiance: 68
  };

  const weeklyProgress = [
    { day: "Seg", morning: true, night: true },
    { day: "Ter", morning: true, night: true },
    { day: "Qua", morning: true, night: false },
    { day: "Qui", morning: true, night: true },
    { day: "Sex", morning: false, night: false },
    { day: "Sáb", morning: false, night: false },
    { day: "Dom", morning: false, night: false }
  ];

  const recommendations = [
    {
      title: "Hidratação Intensiva",
      description: "Sua pele está 28% menos hidratada que o ideal. Adicione um sérum de ácido hialurônico.",
      priority: "high"
    },
    {
      title: "Proteção Solar",
      description: "Você aplicou protetor solar apenas 4 de 7 dias. Lembre-se: é essencial todos os dias!",
      priority: "medium"
    },
    {
      title: "Esfoliação",
      description: "Está na hora da esfoliação semanal. Isso vai melhorar a textura da sua pele.",
      priority: "low"
    }
  ];

  const currentRoutine = selectedRoutine === "morning" ? morningRoutine : nightRoutine;

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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Sparkle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Beleza & Skincare</h1>
                  <p className="text-xs text-gray-400">Sua rotina de cuidados</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                onClick={handleAnalyzeSkin}
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50"
              >
                <Camera className="w-4 h-4 mr-2" />
                {isAnalyzing ? "Abrindo..." : "Analisar Pele"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Success Message Toast */}
      {showSuccessMessage && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-top-5">
          <Card className="bg-green-500/20 border-green-500/50 p-4 backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <p className="text-sm font-medium text-white">{successMessage}</p>
            </div>
          </Card>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Skin Analysis Banner */}
        <Card className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-cyan-500/30 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Análise de Pele com IA ✨</h3>
              <p className="text-gray-300 mb-4">
                Sua pele está melhorando! A consistência na rotina aumentou sua hidratação em 12% esta semana. 
                Continue assim e você verá resultados ainda melhores. A IA detectou que você precisa de mais hidratação na zona T.
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={handleAnalyzeSkin}
                  disabled={isAnalyzing}
                  className="bg-white/10 hover:bg-white/20 text-white disabled:opacity-50"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  {isAnalyzing ? "Abrindo..." : "Analisar Agora"}
                </Button>
                <Button 
                  onClick={handleViewFullAnalysis}
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Ver Análise Completa
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Skin Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <Droplet className="w-5 h-5 text-cyan-400" />
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{skinAnalysis.hydration}%</div>
            <div className="text-xs text-gray-400">Hidratação</div>
          </Card>

          <Card className="bg-slate-800/50 border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{skinAnalysis.texture}%</div>
            <div className="text-xs text-gray-400">Textura</div>
          </Card>

          <Card className="bg-slate-800/50 border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <Sparkle className="w-5 h-5 text-blue-400" />
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{skinAnalysis.radiance}%</div>
            <div className="text-xs text-gray-400">Luminosidade</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Routine Selector */}
            <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg w-fit">
              <button
                onClick={() => setSelectedRoutine("morning")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedRoutine === "morning"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Sun className="w-4 h-4" />
                Rotina Matinal
              </button>
              <button
                onClick={() => setSelectedRoutine("night")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedRoutine === "night"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Moon className="w-4 h-4" />
                Rotina Noturna
              </button>
            </div>

            {/* Routine Steps */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {selectedRoutine === "morning" ? "Rotina Matinal" : "Rotina Noturna"}
                </h2>
                <div className="text-sm text-gray-400">
                  {currentRoutine.filter(s => s.completed).length}/{currentRoutine.length} completos
                </div>
              </div>

              <div className="space-y-3">
                {currentRoutine.map((step, i) => (
                  <div 
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                      step.completed 
                        ? 'bg-cyan-500/10 border-cyan-500/30' 
                        : 'bg-slate-700/30 border-white/10 hover:border-cyan-500/30'
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {step.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-semibold ${step.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                          {step.name}
                        </h4>
                        <span className="text-xs text-gray-500">• {step.time}</span>
                      </div>
                      <p className="text-sm text-gray-400">{step.product}</p>
                    </div>
                    {!step.completed ? (
                      <Button 
                        size="sm" 
                        onClick={() => handleCompleteStep(i)}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                      >
                        Concluir
                      </Button>
                    ) : (
                      <>
                        {showUncompleteConfirm === i ? (
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              onClick={() => handleUncompleteStep(i)}
                              className="bg-orange-500 hover:bg-orange-600 text-white"
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Confirmar
                            </Button>
                            <Button 
                              size="sm" 
                              onClick={() => setShowUncompleteConfirm(null)}
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button 
                            size="sm" 
                            onClick={() => setShowUncompleteConfirm(i)}
                            variant="outline"
                            className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                          >
                            <Undo2 className="w-4 h-4 mr-1" />
                            Cancelar
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-sm text-blue-400">
                  💡 <strong>Dica da IA:</strong> {selectedRoutine === "morning" 
                    ? "Aplique o protetor solar 15 minutos antes de sair. Reaplique a cada 2 horas se estiver ao sol."
                    : "O retinol pode causar sensibilidade. Comece usando 2-3x por semana e aumente gradualmente."}
                </p>
              </div>
            </Card>

            {/* Weekly Consistency */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Consistência Semanal</h3>
              <div className="grid grid-cols-7 gap-2">
                {weeklyProgress.map((day, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs text-gray-400 mb-2">{day.day}</div>
                    <div className="space-y-1">
                      <div className={`h-8 rounded ${day.morning ? 'bg-gradient-to-br from-yellow-500 to-orange-500' : 'bg-slate-700/50'}`} />
                      <div className={`h-8 rounded ${day.night ? 'bg-gradient-to-br from-blue-500 to-purple-500' : 'bg-slate-700/50'}`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-br from-yellow-500 to-orange-500" />
                  <span className="text-gray-400">Manhã</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-br from-blue-500 to-purple-500" />
                  <span className="text-gray-400">Noite</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skin Profile */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Perfil da Pele</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Tipo de Pele</div>
                  <div className="text-lg font-semibold text-white">{skinAnalysis.type}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Preocupações Principais</div>
                  <div className="space-y-2">
                    {skinAnalysis.concerns.map((concern, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {concern}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Recommendations */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Recomendações IA
              </h3>
              <div className="space-y-3">
                {recommendations.map((rec, i) => (
                  <div 
                    key={i}
                    className={`p-3 rounded-lg border ${
                      rec.priority === 'high' 
                        ? 'bg-red-500/10 border-red-500/30'
                        : rec.priority === 'medium'
                        ? 'bg-yellow-500/10 border-yellow-500/30'
                        : 'bg-blue-500/10 border-blue-500/30'
                    }`}
                  >
                    <h4 className="text-sm font-semibold text-white mb-1">{rec.title}</h4>
                    <p className="text-xs text-gray-400">{rec.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Products */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Meus Produtos</h3>
              <div className="space-y-3">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate">{product.name}</h4>
                      <p className="text-xs text-gray-400">{product.brand}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded">
                          {product.usage}
                        </span>
                        <span className="text-xs text-gray-500">Expira: {product.expires}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                onClick={handleAddProduct}
                className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Produto
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal de Análise Completa */}
      {showFullAnalysisModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Análise Completa da Pele</h2>
                  <p className="text-sm text-gray-400">Resultados detalhados da sua última análise</p>
                </div>
              </div>
              <Button 
                onClick={() => setShowFullAnalysisModal(false)}
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
                {/* Métricas Principais */}
                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-slate-800/50 border-cyan-500/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Droplet className="w-6 h-6 text-cyan-400" />
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">72%</div>
                    <div className="text-sm text-gray-400 mb-2">Hidratação</div>
                    <div className="text-xs text-green-400">+12% vs mês passado</div>
                  </Card>

                  <Card className="bg-slate-800/50 border-yellow-500/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Star className="w-6 h-6 text-yellow-400" />
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">85%</div>
                    <div className="text-sm text-gray-400 mb-2">Textura</div>
                    <div className="text-xs text-green-400">+8% vs mês passado</div>
                  </Card>

                  <Card className="bg-slate-800/50 border-blue-500/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Sparkle className="w-6 h-6 text-blue-400" />
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">68%</div>
                    <div className="text-sm text-gray-400 mb-2">Luminosidade</div>
                    <div className="text-xs text-green-400">+5% vs mês passado</div>
                  </Card>
                </div>

                {/* Tipo de Pele */}
                <Card className="bg-slate-800/50 border-white/10 p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyan-400" />
                    Tipo de Pele Identificado
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-bold text-cyan-400">Mista</div>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: '75%' }} />
                    </div>
                    <div className="text-sm text-gray-400">75% confiança</div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Sua pele apresenta características mistas, com oleosidade na zona T (testa, nariz e queixo) 
                    e tendência à secura nas bochechas. Este é um dos tipos de pele mais comuns.
                  </p>
                </Card>

                {/* Preocupações Identificadas */}
                <Card className="bg-slate-800/50 border-white/10 p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-400" />
                    Preocupações Identificadas
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5" />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white mb-1">Oleosidade na zona T</h4>
                        <p className="text-xs text-gray-400">Produção excessiva de sebo na testa, nariz e queixo. Recomenda-se uso de produtos matificantes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5" />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white mb-1">Poros dilatados</h4>
                        <p className="text-xs text-gray-400">Poros visíveis principalmente na zona T. Esfoliação regular e niacinamida podem ajudar.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5" />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white mb-1">Linhas finas ao redor dos olhos</h4>
                        <p className="text-xs text-gray-400">Sinais iniciais de envelhecimento. Retinol e creme para os olhos são recomendados.</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Recomendações Personalizadas */}
                <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-cyan-500/30 p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    Recomendações Personalizadas da IA
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-cyan-400">1</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Sérum de Niacinamida pela Manhã</h4>
                        <p className="text-xs text-gray-400">Ajuda a controlar oleosidade e minimizar poros. Aplique após a limpeza e antes do hidratante.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-cyan-400">2</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Retinol à Noite (2-3x por semana)</h4>
                        <p className="text-xs text-gray-400">Combate linhas finas e melhora textura. Comece devagar e aumente gradualmente a frequência.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-cyan-400">3</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Hidrate Mais a Região dos Olhos</h4>
                        <p className="text-xs text-gray-400">Use creme específico para contorno dos olhos com ácido hialurônico e peptídeos.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-cyan-400">4</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Protetor Solar FPS 50+ Diariamente</h4>
                        <p className="text-xs text-gray-400">Essencial para prevenir envelhecimento precoce. Reaplique a cada 2 horas se exposto ao sol.</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Progresso */}
                <Card className="bg-slate-800/50 border-white/10 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Progresso Geral</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Melhora vs mês passado</span>
                        <span className="text-lg font-bold text-green-400">+12%</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '82%' }} />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    🎉 Parabéns! Sua consistência na rotina está trazendo resultados visíveis. Continue assim!
                  </p>
                </Card>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 flex gap-3">
              <Button 
                onClick={() => {
                  setShowFullAnalysisModal(false);
                  handleAnalyzeSkin();
                }}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                <Camera className="w-4 h-4 mr-2" />
                Nova Análise
              </Button>
              <Button 
                onClick={() => setShowFullAnalysisModal(false)}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Adicionar Produto */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Adicionar Produto</h2>
                  <p className="text-sm text-gray-400">Adicione um novo produto à sua rotina</p>
                </div>
              </div>
              <Button 
                onClick={() => {
                  setShowAddProductModal(false);
                  setShowAiTipActions(false);
                }}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Conteúdo */}
            <form onSubmit={handleSaveProduct} className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Nome do Produto */}
                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Nome do Produto *</label>
                  <input
                    type="text"
                    name="productName"
                    required
                    placeholder="Ex: Sérum de Vitamina C"
                    className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                {/* Marca */}
                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Marca *</label>
                  <input
                    type="text"
                    name="productBrand"
                    required
                    placeholder="Ex: The Ordinary"
                    className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                {/* Quando Usar */}
                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Quando Usar *</label>
                  <select
                    name="productUsage"
                    required
                    className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
                  >
                    <option value="Manhã">Manhã</option>
                    <option value="Noite">Noite</option>
                    <option value="Manhã e Noite">Manhã e Noite</option>
                  </select>
                </div>

                {/* Validade */}
                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Validade *</label>
                  <input
                    type="text"
                    name="productExpires"
                    required
                    placeholder="Ex: 6 meses"
                    className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                {/* Dica da IA com Ações */}
                <Card className="bg-blue-500/10 border-blue-500/20 p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Camera className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white mb-1">💡 Dica da IA</h4>
                      <p className="text-xs text-gray-400">
                        Você pode tirar uma foto do produto ou escanear o código de barras para adicionar automaticamente todas as informações!
                      </p>
                    </div>
                  </div>
                  
                  {/* Botões de Ação da Dica */}
                  {!showAiTipActions ? (
                    <Button
                      type="button"
                      onClick={() => setShowAiTipActions(true)}
                      className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Usar Câmera/Scanner
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        onClick={handleApplyAiTip}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Abrir Câmera
                      </Button>
                      <Button
                        type="button"
                        onClick={handleCancelAiTip}
                        variant="outline"
                        className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancelar
                      </Button>
                    </div>
                  )}
                </Card>
              </div>

              {/* Footer */}
              <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                <Button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Produto
                </Button>
                <Button 
                  type="button"
                  onClick={() => {
                    setShowAddProductModal(false);
                    setShowAiTipActions(false);
                  }}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
