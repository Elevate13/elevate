"use client";

import { useState } from "react";
import { 
  Sparkles, 
  MessageSquare,
  Send,
  Mic,
  Image as ImageIcon,
  Zap,
  TrendingUp,
  Target,
  Calendar,
  ChevronLeft,
  Lightbulb,
  Heart,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AICoachPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Olá! Sou seu Lifestyle AI Coach. Estou aqui para ajudar você a alcançar seus objetivos em todos os aspectos da sua vida. Como posso te ajudar hoje?",
      timestamp: "09:00"
    },
    {
      role: "user",
      content: "Quero melhorar minha rotina matinal",
      timestamp: "09:02"
    },
    {
      role: "assistant",
      content: "Ótimo! Baseado no seu histórico, vejo que você tem dificuldade em acordar cedo. Vou criar uma rotina matinal personalizada:\n\n1. **6:30** - Acordar com alarme progressivo\n2. **6:35** - 5 min de alongamento na cama\n3. **6:40** - Rotina de skincare (já configurada)\n4. **6:55** - Café da manhã saudável\n5. **7:15** - Look do dia já preparado pela IA\n6. **7:30** - Pronto para começar o dia!\n\nQuer que eu ative essa rotina automaticamente?",
      timestamp: "09:02"
    }
  ]);

  const quickActions = [
    { icon: Target, label: "Definir Meta", color: "from-blue-500 to-cyan-500" },
    { icon: Calendar, label: "Planejar Semana", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, label: "Ver Progresso", color: "from-cyan-500 to-blue-500" },
    { icon: Lightbulb, label: "Dica do Dia", color: "from-yellow-500 to-orange-500" }
  ];

  const suggestions = [
    "Como melhorar meu estilo pessoal?",
    "Crie um plano de treino para mim",
    "Sugira receitas saudáveis",
    "Organize minha rotina de skincare"
  ];

  const aiInsights = [
    {
      title: "Padrão Identificado",
      description: "Você treina melhor às 8h da manhã. Seus treinos matinais têm 30% mais eficiência.",
      icon: Brain,
      color: "text-blue-400"
    },
    {
      title: "Oportunidade de Melhoria",
      description: "Você tem 18 peças não usadas. Posso criar looks novos com elas?",
      icon: Lightbulb,
      color: "text-yellow-400"
    },
    {
      title: "Conquista Desbloqueada",
      description: "15 dias de streak! Você está no top 10% dos usuários mais consistentes.",
      icon: Heart,
      color: "text-green-400"
    }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, {
      role: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }]);

    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Entendi! Deixe-me analisar seus dados e criar uma solução personalizada para você...",
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">AI Coach</h1>
                  <p className="text-xs text-gray-400">Seu assistente pessoal 24/7</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-white/10 flex flex-col h-[calc(100vh-12rem)]">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`rounded-2xl p-4 ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                          : 'bg-slate-700/50 text-gray-200'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{msg.content}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 px-2">{msg.timestamp}</p>
                    </div>
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center mr-2 flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Suggestions */}
              <div className="px-6 py-3 border-t border-white/10">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {suggestions.map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => setMessage(suggestion)}
                      className="px-3 py-1.5 rounded-full bg-slate-700/50 text-gray-300 text-xs whitespace-nowrap hover:bg-slate-700 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white flex-shrink-0">
                    <ImageIcon className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white flex-shrink-0">
                    <Mic className="w-5 h-5" />
                  </Button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-slate-700/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 flex-shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Ações Rápidas</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700 transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-300 text-center">{action.label}</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="bg-slate-800/50 border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-400" />
                Insights da IA
              </h3>
              <div className="space-y-4">
                {aiInsights.map((insight, i) => (
                  <div key={i} className="p-4 rounded-lg bg-slate-700/30 border border-white/5">
                    <div className="flex items-start gap-3">
                      <insight.icon className={`w-5 h-5 ${insight.color} flex-shrink-0 mt-0.5`} />
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">{insight.title}</h4>
                        <p className="text-xs text-gray-400">{insight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Stats */}
            <Card className="bg-gradient-to-br from-blue-900/30 to-green-900/30 border-blue-500/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">AI Power</h3>
                  <p className="text-xs text-gray-400">Nível de personalização</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Dados Coletados</span>
                    <span className="text-white font-medium">87%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{ width: '87%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Precisão das Sugestões</span>
                    <span className="text-white font-medium">94%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Adaptação ao Seu Estilo</span>
                    <span className="text-white font-medium">91%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{ width: '91%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Quanto mais você usa, mais inteligente a IA fica!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
