"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Sparkles,
  ArrowRight,
  Chrome,
  Apple as AppleIcon,
  User,
  Check
} from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [step, setStep] = useState(1);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Redirect to dashboard (in real app, would create account first)
      window.location.href = "/dashboard";
    }
  };

  const benefits = [
    "Guarda-roupa inteligente com IA",
    "Planos de treino personalizados",
    "Nutrição adaptada aos seus objetivos",
    "Rotinas de beleza customizadas",
    "Organização completa da sua vida",
    "AI Coach disponível 24/7"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Benefits */}
        <div className="hidden md:block">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              ELEVATE
            </span>
          </Link>

          <h2 className="text-3xl font-bold text-white mb-4">
            Transforme sua vida com IA
          </h2>
          <p className="text-gray-400 mb-8">
            Junte-se a mais de 50 mil pessoas que já estão elevando seu estilo de vida com tecnologia de ponta.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-blue-400">
              💎 <strong>Oferta especial:</strong> Primeiros 30 dias grátis para novos usuários!
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <Card className="bg-slate-800/50 border-white/10 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">
              {step === 1 ? "Crie sua conta" : "Personalize sua experiência"}
            </h1>
            <p className="text-gray-400">
              {step === 1 ? "Comece sua jornada de transformação" : "Conte-nos mais sobre você"}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className={`h-2 w-16 rounded-full ${step >= 1 ? 'bg-gradient-to-r from-blue-500 to-green-500' : 'bg-slate-700'}`} />
            <div className={`h-2 w-16 rounded-full ${step >= 2 ? 'bg-gradient-to-r from-blue-500 to-green-500' : 'bg-slate-700'}`} />
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            {step === 1 ? (
              <>
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome completo
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Seu nome"
                      className="w-full bg-slate-700/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="seu@email.com"
                      className="w-full bg-slate-700/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      placeholder="Mínimo 8 caracteres"
                      className="w-full bg-slate-700/50 border border-white/10 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirmar senha
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      placeholder="Repita sua senha"
                      className="w-full bg-slate-700/50 border border-white/10 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Step 2 - Preferences */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Quais são seus principais objetivos?
                  </label>
                  <div className="space-y-2">
                    {["Melhorar meu estilo", "Ficar em forma", "Comer melhor", "Cuidar da pele", "Ser mais organizado"].map((goal) => (
                      <label key={goal} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 cursor-pointer transition-colors">
                        <input type="checkbox" className="rounded border-gray-600 bg-slate-700" />
                        <span className="text-gray-300">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Qual seu nível de experiência?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Iniciante", "Intermediário", "Avançado"].map((level) => (
                      <button
                        key={level}
                        type="button"
                        className="p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 text-gray-300 text-sm transition-colors"
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Terms */}
            {step === 1 && (
              <label className="flex items-start gap-2 text-sm text-gray-400 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-600 bg-slate-700 mt-1" required />
                <span>
                  Concordo com os{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300">Termos de Serviço</a>
                  {" "}e{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300">Política de Privacidade</a>
                </span>
              </label>
            )}

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-6 text-base font-semibold"
            >
              {step === 1 ? "Continuar" : "Criar Conta"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>

          {step === 1 && (
            <>
              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-slate-800/50 text-gray-400">Ou cadastre-se com</span>
                </div>
              </div>

              {/* Social Signup */}
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="border-white/10 text-white hover:bg-white/5"
                  type="button"
                >
                  <Chrome className="w-5 h-5 mr-2" />
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/10 text-white hover:bg-white/5"
                  type="button"
                >
                  <AppleIcon className="w-5 h-5 mr-2" />
                  Apple
                </Button>
              </div>
            </>
          )}

          {/* Login Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Já tem uma conta?{" "}
            <Link href="/auth/login" className="text-blue-400 hover:text-blue-300 font-medium">
              Fazer login
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
