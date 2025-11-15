"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Shirt, 
  Camera,
  Wand2,
  Calendar,
  ChevronLeft,
  Plus,
  Filter,
  Search,
  Sun,
  Cloud,
  Heart,
  Share2,
  Download,
  Shuffle,
  X,
  Check,
  Clock,
  MapPin,
  ShoppingBag,
  BookOpen,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function StylePage() {
  const [selectedView, setSelectedView] = useState<"today" | "week" | "month">("today");
  const [isScanning, setIsScanning] = useState(false);
  const [showAILooksModal, setShowAILooksModal] = useState(false);
  const [isGeneratingLooks, setIsGeneratingLooks] = useState(false);
  const [generatedLooks, setGeneratedLooks] = useState<any[]>([]);
  const [showOutfitDetailsModal, setShowOutfitDetailsModal] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState<any>(null);
  const [showTutorialModal, setShowTutorialModal] = useState(false);
  const [showOptimizeModal, setShowOptimizeModal] = useState(false);
  const [showSuggestionsModal, setShowSuggestionsModal] = useState(false);

  const handleAddPiece = () => {
    setIsScanning(true);
    setTimeout(() => {
      alert("📸 Câmera aberta! Tire fotos das suas roupas para adicionar ao guarda-roupa virtual. A IA vai categorizar automaticamente!");
      setIsScanning(false);
    }, 500);
  };

  const handleScanWardrobe = () => {
    setIsScanning(true);
    setTimeout(() => {
      alert("📸 Modo Scan ativado! Tire várias fotos do seu guarda-roupa. A IA vai organizar tudo automaticamente por categoria, cor e estilo!");
      setIsScanning(false);
    }, 500);
  };

  const handleGenerateLooks = () => {
    setShowAILooksModal(true);
    setIsGeneratingLooks(true);
    
    // Simula geração de looks pela IA
    setTimeout(() => {
      const aiGeneratedLooks = [
        {
          id: 1,
          name: "Look Executivo Moderno",
          occasion: "Reunião Importante",
          weather: "22°C • Ensolarado",
          items: [
            { name: "Blazer azul marinho", category: "Casacos", available: true },
            { name: "Camisa branca", category: "Camisas", available: true },
            { name: "Calça alfaiataria", category: "Calças", available: true },
            { name: "Sapato social preto", category: "Sapatos", available: true }
          ],
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
          aiScore: 97,
          style: "Formal",
          tips: [
            "Combine com relógio prateado para um toque sofisticado",
            "Evite acessórios muito chamativos",
            "Mantenha o visual clean e profissional"
          ],
          whereToWear: ["Reuniões de negócios", "Entrevistas", "Eventos corporativos"],
          alternatives: [
            { item: "Blazer azul marinho", alternative: "Blazer cinza carvão" },
            { item: "Camisa branca", alternative: "Camisa azul clara" }
          ]
        },
        {
          id: 2,
          name: "Look Casual Chic",
          occasion: "Almoço com Amigos",
          weather: "22°C • Ensolarado",
          items: [
            { name: "Camisa polo", category: "Camisas", available: true },
            { name: "Jeans escuro", category: "Calças", available: true },
            { name: "Tênis branco", category: "Sapatos", available: true },
            { name: "Relógio casual", category: "Acessórios", available: true }
          ],
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
          aiScore: 94,
          style: "Casual",
          tips: [
            "Perfeito para ambientes descontraídos",
            "Adicione um cinto de couro para elevar o look",
            "Mantenha o tênis sempre limpo"
          ],
          whereToWear: ["Almoços casuais", "Passeios no shopping", "Encontros informais"],
          alternatives: [
            { item: "Camisa polo", alternative: "Camiseta lisa premium" },
            { item: "Jeans escuro", alternative: "Calça chino bege" }
          ]
        },
        {
          id: 3,
          name: "Look Esportivo Premium",
          occasion: "Academia VIP",
          weather: "Ambiente climatizado",
          items: [
            { name: "Regata dry-fit", category: "Roupas Esportivas", available: true },
            { name: "Bermuda esportiva", category: "Roupas Esportivas", available: true },
            { name: "Tênis de corrida", category: "Sapatos", available: true },
            { name: "Boné", category: "Acessórios", available: true }
          ],
          image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=600&fit=crop",
          aiScore: 96,
          style: "Esportivo",
          tips: [
            "Tecidos respiráveis são essenciais",
            "Leve uma toalha e garrafa de água",
            "Use meias esportivas adequadas"
          ],
          whereToWear: ["Academia", "Corrida ao ar livre", "Esportes em geral"],
          alternatives: [
            { item: "Regata dry-fit", alternative: "Camiseta dry-fit manga curta" },
            { item: "Bermuda esportiva", alternative: "Calça legging esportiva" }
          ]
        },
        {
          id: 4,
          name: "Look Noturno Elegante",
          occasion: "Jantar Romântico",
          weather: "18°C • Noite fresca",
          items: [
            { name: "Camisa social preta", category: "Camisas", available: true },
            { name: "Calça social", category: "Calças", available: true },
            { name: "Sapato social", category: "Sapatos", available: true },
            { name: "Cinto de couro", category: "Acessórios", available: true }
          ],
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
          aiScore: 99,
          style: "Elegante",
          tips: [
            "Use perfume discreto e sofisticado",
            "Mantenha barba bem feita ou aparada",
            "Considere adicionar um blazer se o ambiente for mais formal"
          ],
          whereToWear: ["Jantares românticos", "Eventos noturnos", "Festas elegantes"],
          alternatives: [
            { item: "Camisa social preta", alternative: "Camisa social vinho" },
            { item: "Calça social", alternative: "Calça de alfaiataria slim" }
          ]
        },
        {
          id: 5,
          name: "Look Street Style",
          occasion: "Passeio no Shopping",
          weather: "22°C • Ensolarado",
          items: [
            { name: "Camiseta oversized", category: "Camisetas", available: true },
            { name: "Calça cargo", category: "Calças", available: true },
            { name: "Tênis chunky", category: "Sapatos", available: true },
            { name: "Boné snapback", category: "Acessórios", available: true }
          ],
          image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop",
          aiScore: 92,
          style: "Urbano",
          tips: [
            "Adicione uma pochete ou shoulder bag",
            "Combine cores neutras com um item colorido",
            "Óculos escuros complementam o visual"
          ],
          whereToWear: ["Shopping", "Passeios urbanos", "Encontros casuais"],
          alternatives: [
            { item: "Camiseta oversized", alternative: "Moletom oversized" },
            { item: "Calça cargo", alternative: "Calça jogger" }
          ]
        },
        {
          id: 6,
          name: "Look Business Casual",
          occasion: "Trabalho Remoto",
          weather: "Ambiente interno",
          items: [
            { name: "Camisa social sem gravata", category: "Camisas", available: true },
            { name: "Calça chino", category: "Calças", available: true },
            { name: "Mocassim", category: "Sapatos", available: true },
            { name: "Relógio minimalista", category: "Acessórios", available: true }
          ],
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop",
          aiScore: 95,
          style: "Business",
          tips: [
            "Ideal para videochamadas profissionais",
            "Mantenha a parte superior impecável",
            "Conforto é essencial para trabalho em casa"
          ],
          whereToWear: ["Home office", "Reuniões virtuais", "Coworking"],
          alternatives: [
            { item: "Camisa social sem gravata", alternative: "Polo premium" },
            { item: "Calça chino", alternative: "Calça de sarja" }
          ]
        }
      ];
      
      setGeneratedLooks(aiGeneratedLooks);
      setIsGeneratingLooks(false);
    }, 2000);
  };

  const handleUseOutfit = (outfit: any) => {
    setSelectedOutfit(outfit);
    setShowOutfitDetailsModal(true);
  };

  const handleConfirmOutfit = () => {
    if (!selectedOutfit) return;
    
    // Fecha os modais
    setShowOutfitDetailsModal(false);
    setShowAILooksModal(false);
    
    // Mostra confirmação com ações
    setTimeout(() => {
      alert(`✅ Look "${selectedOutfit.name}" Confirmado!\n\n📅 Adicionado ao calendário de hoje\n📸 Foto salva no histórico de looks\n🔔 Lembrete criado para 30 minutos antes\n\n💡 Próximos passos:\n• Vá para Organização → Ver agenda do dia\n• Confira dicas de estilo no perfil\n• Compartilhe seu look nas redes sociais\n\n🛍️ Faltam peças? Veja sugestões de compra!`);
    }, 300);
  };

  const handleShuffleOutfit = () => {
    alert("🎲 Embaralhando Look...\n\n🔄 A IA está criando uma nova combinação aleatória com as mesmas peças!\n\n✨ Novo look gerado!\n• Mesma ocasião\n• Estilo diferente\n• Cores harmonizadas\n• Acessórios sugeridos\n\n💡 Gostou? Salve nos favoritos!");
  };

  const handleOptimizeWeek = () => {
    console.log("🔧 Abrindo modal de otimização semanal...");
    setShowOptimizeModal(true);
  };

  const handleViewSuggestions = () => {
    console.log("🛍️ Abrindo modal de sugestões...");
    setShowSuggestionsModal(true);
  };

  const todayOutfits = [
    {
      id: 1,
      name: "Look Casual Manhã",
      occasion: "Trabalho",
      weather: "22°C • Ensolarado",
      items: [
        { name: "Camisa branca", category: "Camisas", available: true },
        { name: "Calça jeans", category: "Calças", available: true },
        { name: "Tênis branco", category: "Sapatos", available: true },
        { name: "Relógio", category: "Acessórios", available: true }
      ],
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop",
      aiScore: 95,
      style: "Casual",
      tips: [
        "Perfeito para um dia produtivo",
        "Combine com uma mochila minimalista",
        "Adicione óculos de sol se for sair"
      ],
      whereToWear: ["Trabalho", "Reuniões casuais", "Coworking"],
      alternatives: []
    },
    {
      id: 2,
      name: "Look Academia",
      occasion: "Treino",
      weather: "Ambiente fechado",
      items: [
        { name: "Regata fitness", category: "Roupas Esportivas", available: true },
        { name: "Legging", category: "Roupas Esportivas", available: true },
        { name: "Tênis de corrida", category: "Sapatos", available: true },
        { name: "Garrafa", category: "Acessórios", available: true }
      ],
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=600&fit=crop",
      aiScore: 92,
      style: "Esportivo",
      tips: [
        "Hidrate-se antes, durante e depois",
        "Use meias adequadas para evitar bolhas",
        "Leve uma toalha"
      ],
      whereToWear: ["Academia", "Treino funcional", "Yoga"],
      alternatives: []
    },
    {
      id: 3,
      name: "Look Jantar",
      occasion: "Social",
      weather: "18°C • Noite fresca",
      items: [
        { name: "Blazer", category: "Casacos", available: true },
        { name: "Camisa social", category: "Camisas", available: true },
        { name: "Calça alfaiataria", category: "Calças", available: true },
        { name: "Sapato social", category: "Sapatos", available: true }
      ],
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=600&fit=crop",
      aiScore: 98,
      style: "Elegante",
      tips: [
        "Use perfume discreto",
        "Mantenha postura elegante",
        "Considere adicionar gravata se necessário"
      ],
      whereToWear: ["Jantares", "Eventos sociais", "Festas"],
      alternatives: []
    }
  ];

  const weekOutfits = [
    { day: "Segunda", outfit: "Look Business Casual", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop", weather: "22°C", event: "Reunião Online" },
    { day: "Terça", outfit: "Look Executivo Moderno", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop", weather: "24°C", event: "Apresentação" },
    { day: "Quarta", outfit: "Look Casual Chic", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop", weather: "21°C", event: "Almoço" },
    { day: "Quinta", outfit: "Look Esportivo", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=600&fit=crop", weather: "23°C", event: "Academia" },
    { day: "Sexta", outfit: "Look Street Style", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop", weather: "25°C", event: "Happy Hour" },
    { day: "Sábado", outfit: "Look Confortável", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop", weather: "26°C", event: "Passeio" },
    { day: "Domingo", outfit: "Look Elegante", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop", weather: "20°C", event: "Jantar" }
  ];

  const monthOutfits = [
    { week: "Semana 1", looks: 7, favorite: "Look Executivo Moderno", usage: "100%", mostUsed: "Blazer azul marinho" },
    { week: "Semana 2", looks: 7, favorite: "Look Casual Chic", usage: "95%", mostUsed: "Jeans escuro" },
    { week: "Semana 3", looks: 7, favorite: "Look Street Style", usage: "98%", mostUsed: "Tênis chunky" },
    { week: "Semana 4", looks: 7, favorite: "Look Elegante", usage: "92%", mostUsed: "Camisa social preta" }
  ];

  const wardrobeStats = [
    { label: "Peças Totais", value: "127", color: "text-blue-400" },
    { label: "Looks Criados", value: "45", color: "text-green-400" },
    { label: "Favoritos", value: "23", color: "text-cyan-400" },
    { label: "Não Usados", value: "18", color: "text-yellow-400" }
  ];

  const categories = [
    { name: "Todas", count: 127, active: true },
    { name: "Camisas", count: 24, active: false },
    { name: "Calças", count: 18, active: false },
    { name: "Vestidos", count: 15, active: false },
    { name: "Sapatos", count: 22, active: false },
    { name: "Acessórios", count: 28, active: false }
  ];

  const tutorialSteps = [
    {
      number: 1,
      title: "Escanear Guarda-Roupa",
      description: "Tire fotos de cada peça de roupa. A IA categoriza automaticamente por tipo, cor e estilo.",
      icon: Camera,
      tips: [
        "Use iluminação natural para melhores resultados",
        "Fundo neutro ajuda a IA identificar melhor",
        "Fotografe peças limpas e bem passadas"
      ]
    },
    {
      number: 2,
      title: "Adicionar Peças Individuais",
      description: "Fotografe uma roupa específica e confirme a categoria sugerida pela IA.",
      icon: Plus,
      tips: [
        "Uma foto por peça para melhor resultado",
        "A IA detecta automaticamente a categoria",
        "Você pode editar informações depois"
      ]
    },
    {
      number: 3,
      title: "Gerar Looks com IA",
      description: "A IA cria combinações personalizadas baseadas no clima, ocasião e seu estilo pessoal.",
      icon: Wand2,
      tips: [
        "Looks adaptados ao clima do dia",
        "Sugestões para diferentes ocasiões",
        "Score de compatibilidade para cada look"
      ]
    },
    {
      number: 4,
      title: "Usar e Salvar Looks",
      description: "Escolha um look gerado, confirme e adicione ao seu calendário de outfits.",
      icon: Check,
      tips: [
        "Looks salvos no histórico",
        "Lembretes automáticos",
        "Compartilhe nas redes sociais"
      ]
    },
    {
      number: 5,
      title: "Organizar Guarda-Roupa",
      description: "Navegue por categorias, busque peças específicas e marque seus favoritos.",
      icon: Target,
      tips: [
        "Filtros por cor, estilo e categoria",
        "Veja estatísticas de uso",
        "Identifique peças não utilizadas"
      ]
    }
  ];

  const shoppingSuggestions = [
    {
      category: "Peças Essenciais Faltando",
      items: [
        { name: "Blazer cinza carvão", price: "R$ 349,90", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=400&fit=crop", store: "Zara", distance: "2km" },
        { name: "Calça chino bege", price: "R$ 159,90", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop", store: "H&M", distance: "2km" },
        { name: "Tênis casual branco", price: "R$ 299,90", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop", store: "Nike Store", distance: "3km" },
        { name: "Camisa social azul clara", price: "R$ 129,90", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop", store: "Renner", distance: "2km" }
      ]
    },
    {
      category: "Tendências para Você",
      items: [
        { name: "Jaqueta jeans oversized", price: "R$ 279,90", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop", store: "C&A", distance: "2km" },
        { name: "Moletom premium", price: "R$ 189,90", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop", store: "Adidas", distance: "3km" },
        { name: "Tênis chunky", price: "R$ 399,90", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop", store: "Puma", distance: "3km" },
        { name: "Óculos de sol aviador", price: "R$ 149,90", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=400&fit=crop", store: "Chilli Beans", distance: "2km" }
      ]
    }
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
                  <Shirt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Estilo & Moda</h1>
                  <p className="text-xs text-gray-400">Guarda-roupa Inteligente</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                onClick={handleAddPiece}
                disabled={isScanning}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50"
              >
                <Camera className="w-4 h-4 mr-2" />
                {isScanning ? "Abrindo..." : "Adicionar Peça"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Scan & Style Banner */}
        <Card className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border-blue-500/30 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Scan & Style AI</h3>
              <p className="text-gray-300 mb-4">
                Tire fotos das suas roupas e deixe a IA organizar seu guarda-roupa automaticamente. 
                Ela vai categorizar, sugerir combinações e montar looks perfeitos para você!
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={handleScanWardrobe}
                  disabled={isScanning}
                  className="bg-white/10 hover:bg-white/20 text-white disabled:opacity-50"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  {isScanning ? "Abrindo..." : "Escanear Guarda-Roupa"}
                </Button>
                <Button 
                  onClick={() => setShowTutorialModal(true)}
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ver Tutorial
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {wardrobeStats.map((stat, i) => (
            <Card key={i} className="bg-slate-800/50 border-white/10 p-4">
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* View Selector */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg">
            <button
              onClick={() => setSelectedView("today")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedView === "today"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Hoje
            </button>
            <button
              onClick={() => setSelectedView("week")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedView === "week"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Esta Semana
            </button>
            <button
              onClick={() => setSelectedView("month")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedView === "month"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Este Mês
            </button>
          </div>

          <Button 
            onClick={handleGenerateLooks}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
          >
            <Wand2 className="w-4 h-4 mr-2" />
            Gerar Looks com IA
          </Button>
        </div>

        {/* Today's Outfits */}
        {selectedView === "today" && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Looks de Hoje</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {todayOutfits.map((outfit) => (
                <Card key={outfit.id} className="bg-slate-800/50 border-white/10 overflow-hidden group hover:border-blue-500/30 transition-all">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={outfit.image} 
                      alt={outfit.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
                        <Heart className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
                        <Share2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                        <div className="flex items-center gap-2 text-white text-xs mb-1">
                          <Sun className="w-3 h-3" />
                          {outfit.weather}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-xs font-medium">{outfit.occasion}</span>
                          <div className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                            <span className="text-white text-xs font-bold">{outfit.aiScore}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2">{outfit.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {outfit.items.map((item, i) => (
                        <span key={i} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                          {item.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleUseOutfit(outfit)}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                      >
                        Usar Este Look
                      </Button>
                      <Button 
                        onClick={handleShuffleOutfit}
                        variant="outline" 
                        size="icon" 
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Shuffle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Week View */}
        {selectedView === "week" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Planejamento Semanal</h2>
              <div className="flex gap-2">
                <Button 
                  onClick={handleOptimizeWeek}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  Otimizar Semana
                </Button>
                <Button 
                  onClick={handleViewSuggestions}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Ver Sugestões
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-7 gap-4">
              {weekOutfits.map((item, i) => (
                <Card key={i} className="bg-slate-800/50 border-white/10 overflow-hidden hover:border-blue-500/30 transition-all cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.outfit}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-xs font-bold mb-1">{item.day}</p>
                      <p className="text-white text-xs mb-1">{item.outfit}</p>
                      <div className="flex items-center gap-1 text-blue-300 text-xs">
                        <Sun className="w-3 h-3" />
                        <span>{item.weather}</span>
                      </div>
                      <p className="text-gray-300 text-xs mt-1">{item.event}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Month View */}
        {selectedView === "month" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Resumo Mensal</h2>
              <Button 
                onClick={handleViewSuggestions}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Ver Sugestões
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {monthOutfits.map((item, i) => (
                <Card key={i} className="bg-slate-800/50 border-white/10 p-6 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{item.week}</h3>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-400 text-sm">{item.looks} looks</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Look Favorito:</span>
                      <span className="text-white font-medium text-sm">{item.favorite}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Taxa de Uso:</span>
                      <span className="text-green-400 font-bold text-sm">{item.usage}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Peça Mais Usada:</span>
                      <span className="text-blue-400 font-medium text-sm">{item.mostUsed}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Wardrobe Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Meu Guarda-Roupa</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar peças..."
                  className="bg-slate-800/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                />
              </div>
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  cat.active
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "bg-slate-800/50 text-gray-400 hover:text-white"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Wardrobe Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <Card key={i} className="bg-slate-800/50 border-white/10 overflow-hidden group cursor-pointer hover:border-blue-500/30 transition-all">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1490481651871 + i}-ab68de25d43d?w=300&h=300&fit=crop`}
                    alt={`Peça ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-medium">Camisa Branca</p>
                      <p className="text-gray-300 text-xs">Usado 12x</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Otimizar Semana */}
      {showOptimizeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Planejamento Semanal Otimizado</h2>
                  <p className="text-sm text-gray-400">IA analisou seus compromissos e clima</p>
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

            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {weekOutfits.map((day, i) => (
                  <Card key={i} className="bg-slate-800/50 border-white/10 p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={day.image} alt={day.outfit} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-white">{day.day}</h3>
                          <div className="flex items-center gap-2 text-blue-400 text-sm">
                            <Sun className="w-4 h-4" />
                            <span>{day.weather}</span>
                          </div>
                        </div>
                        <p className="text-white font-medium mb-1">{day.outfit}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{day.event}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                            <Check className="w-3 h-3 mr-1" />
                            Confirmar
                          </Button>
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            <Shuffle className="w-3 h-3 mr-1" />
                            Trocar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-white/10 bg-slate-900/50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  ✨ Planejamento completo para 7 dias com base em clima e compromissos
                </p>
                <Button 
                  onClick={() => {
                    setShowOptimizeModal(false);
                    alert("✅ Planejamento semanal confirmado!\n\n📅 Todos os looks foram adicionados ao seu calendário.\n🔔 Você receberá lembretes 30 minutos antes de cada compromisso.");
                  }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Confirmar Todos
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Sugestões de Compra */}
      {showSuggestionsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Sugestões de Compra Personalizadas</h2>
                  <p className="text-sm text-gray-400">Baseado na análise do seu guarda-roupa</p>
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

            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-8">
                {shoppingSuggestions.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold text-white mb-4">{section.category}</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      {section.items.map((item, i) => (
                        <Card key={i} className="bg-slate-800/50 border-white/10 overflow-hidden hover:border-green-500/30 transition-all">
                          <div className="aspect-[3/4] overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                          </div>
                          <div className="p-3">
                            <h4 className="text-white font-medium text-sm mb-1">{item.name}</h4>
                            <p className="text-green-400 font-bold text-lg mb-2">{item.price}</p>
                            <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                              <span>{item.store}</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{item.distance}</span>
                              </div>
                            </div>
                            <Button size="sm" className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                              <ShoppingBag className="w-3 h-3 mr-1" />
                              Ver na Loja
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border-blue-500/30 p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">💡 Benefícios de Completar Seu Guarda-Roupa</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">+15 Combinações</h4>
                      <p className="text-sm text-gray-300">Novas possibilidades de looks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Todas Ocasiões</h4>
                      <p className="text-sm text-gray-300">Cobertura completa de eventos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Versatilidade Máxima</h4>
                      <p className="text-sm text-gray-300">Estilo para qualquer momento</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="p-6 border-t border-white/10 bg-slate-900/50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  💳 Parcelamento em até 10x sem juros em todas as lojas parceiras
                </p>
                <Button 
                  onClick={() => setShowSuggestionsModal(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Tutorial */}
      {showTutorialModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Tutorial Completo</h2>
                  <p className="text-sm text-gray-400">Scan & Style AI - Passo a Passo</p>
                </div>
              </div>
              <Button 
                onClick={() => setShowTutorialModal(false)}
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
                {tutorialSteps.map((step, index) => (
                  <Card key={index} className="bg-slate-800/50 border-white/10 p-6">
                    <div className="flex items-start gap-4">
                      {/* Número e Ícone */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-2">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center">
                          <span className="text-2xl font-bold text-white">{step.number}</span>
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        
                        {/* Dicas */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-blue-400 flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            Dicas Importantes:
                          </h4>
                          {step.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start gap-2 text-sm text-gray-400">
                              <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Recursos Avançados */}
                <Card className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border-blue-500/30 p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                    Recursos Avançados
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Shuffle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Embaralhar Looks</h4>
                        <p className="text-sm text-gray-300">Crie novas combinações com as mesmas peças</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Share2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Compartilhar</h4>
                        <p className="text-sm text-gray-300">Compartilhe seus looks nas redes sociais</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShoppingBag className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Sugestões de Compra</h4>
                        <p className="text-sm text-gray-300">Veja peças para completar seus looks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Planejamento Semanal</h4>
                        <p className="text-sm text-gray-300">Organize seus outfits da semana</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-slate-900/50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  💡 Pronto para começar? Clique em <span className="text-white font-semibold">"Escanear Guarda-Roupa"</span> agora!
                </p>
                <Button 
                  onClick={() => {
                    setShowTutorialModal(false);
                    handleScanWardrobe();
                  }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Looks Gerados pela IA */}
      {showAILooksModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header do Modal */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Looks Gerados pela IA</h2>
                  <p className="text-sm text-gray-400">Combinações personalizadas para você</p>
                </div>
              </div>
              <Button 
                onClick={() => setShowAILooksModal(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="flex-1 overflow-y-auto p-6">
              {isGeneratingLooks ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 animate-pulse">
                    <Wand2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Gerando Looks com IA...</h3>
                  <p className="text-gray-400 text-center max-w-md">
                    Analisando seu guarda-roupa, clima, compromissos e preferências para criar as melhores combinações
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {generatedLooks.map((look) => (
                    <Card key={look.id} className="bg-slate-800/50 border-white/10 overflow-hidden group hover:border-blue-500/30 transition-all">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img 
                          src={look.image} 
                          alt={look.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 flex gap-2">
                          <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
                            <Heart className="w-4 h-4 text-white" />
                          </button>
                          <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
                            <Share2 className="w-4 h-4 text-white" />
                          </button>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {look.style}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                            <div className="flex items-center gap-2 text-white text-xs mb-1">
                              <Sun className="w-3 h-3" />
                              {look.weather}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white text-xs font-medium">{look.occasion}</span>
                              <div className="flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-yellow-400" />
                                <span className="text-white text-xs font-bold">{look.aiScore}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white mb-2">{look.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {look.items.map((item: any, i: number) => (
                            <span key={i} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                              {item.name}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            onClick={() => handleUseOutfit(look)}
                            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                          >
                            Usar Este Look
                          </Button>
                          <Button 
                            onClick={handleShuffleOutfit}
                            variant="outline" 
                            size="icon" 
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            <Shuffle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Footer do Modal */}
            {!isGeneratingLooks && (
              <div className="p-6 border-t border-white/10 bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    <span className="text-white font-bold">{generatedLooks.length}</span> looks gerados com sucesso
                  </p>
                  <Button 
                    onClick={handleGenerateLooks}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Wand2 className="w-4 h-4 mr-2" />
                    Gerar Novos Looks
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal de Detalhes do Outfit */}
      {showOutfitDetailsModal && selectedOutfit && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Shirt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedOutfit.name}</h2>
                  <p className="text-sm text-gray-400">Detalhes do Look</p>
                </div>
              </div>
              <Button 
                onClick={() => setShowOutfitDetailsModal(false)}
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Imagem */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <img 
                    src={selectedOutfit.image} 
                    alt={selectedOutfit.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      {selectedOutfit.style}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Informações */}
                <div className="space-y-6">
                  {/* Score e Clima */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-slate-800/50 border-white/10 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm text-gray-400">Score IA</span>
                      </div>
                      <div className="text-3xl font-bold text-white">{selectedOutfit.aiScore}%</div>
                    </Card>
                    <Card className="bg-slate-800/50 border-white/10 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-gray-400">Clima</span>
                      </div>
                      <div className="text-lg font-bold text-white">{selectedOutfit.weather}</div>
                    </Card>
                  </div>

                  {/* Ocasião */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Ocasião</h3>
                    <div className="flex items-center gap-2 bg-slate-800/50 border border-white/10 rounded-lg p-3">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">{selectedOutfit.occasion}</span>
                    </div>
                  </div>

                  {/* Peças do Look */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-3">Peças do Look</h3>
                    <div className="space-y-2">
                      {selectedOutfit.items.map((item: any, i: number) => (
                        <div key={i} className="flex items-center justify-between bg-slate-800/50 border border-white/10 rounded-lg p-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                              <Shirt className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-medium text-sm">{item.name}</p>
                              <p className="text-gray-400 text-xs">{item.category}</p>
                            </div>
                          </div>
                          {item.available && (
                            <div className="flex items-center gap-1 text-green-400">
                              <Check className="w-4 h-4" />
                              <span className="text-xs font-medium">Disponível</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dicas de Estilo */}
                  {selectedOutfit.tips && selectedOutfit.tips.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">💡 Dicas de Estilo</h3>
                      <div className="space-y-2">
                        {selectedOutfit.tips.map((tip: string, i: number) => (
                          <div key={i} className="flex items-start gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                            <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-gray-300">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Onde Usar */}
                  {selectedOutfit.whereToWear && selectedOutfit.whereToWear.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">📍 Onde Usar</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedOutfit.whereToWear.map((place: string, i: number) => (
                          <span key={i} className="bg-slate-800/50 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-sm">
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer com Ações */}
            <div className="p-6 border-t border-white/10 bg-slate-900/50">
              <div className="flex gap-3">
                <Button 
                  onClick={handleConfirmOutfit}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Confirmar e Usar Este Look
                </Button>
                <Button 
                  onClick={() => {
                    setShowOutfitDetailsModal(false);
                    setShowSuggestionsModal(true);
                  }}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Ver Sugestões de Compra
                </Button>
                <Button 
                  onClick={() => setShowOutfitDetailsModal(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Voltar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
