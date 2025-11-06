import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, DollarSign, Calendar, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImovel from "@/assets/casa-consorcio.jpg";
const ConsorcioImovel = () => {
  const benefits = [{
    icon: DollarSign,
    title: "Sem juros e sem entrada",
    description: "Parcelas que cabem no seu bolso, sem juros abusivos"
  }, {
    icon: Calendar,
    title: "Prazos flexíveis",
    description: "Planos de 24 a 200 meses para você escolher"
  }, {
    icon: TrendingUp,
    title: "Melhor planejamento financeiro",
    description: "Conquiste seu imóvel de forma organizada e segura"
  }];
  const steps = [{
    title: "Escolha seu plano",
    description: "Selecione o valor e prazo ideal"
  }, {
    title: "Contribua mensalmente",
    description: "Pague suas parcelas todos os meses"
  }, {
    title: "Acompanhe os sorteios",
    description: "Participe das assembleias mensais"
  }, {
    title: "Realização da sua conquista",
    description: "Retire seu crédito e compre seu imóvel"
  }];
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImovel})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Consórcio de Imóvel
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Realize o sonho da casa própria com planejamento e sem juros
          </p>
          <Link to="/#simulator">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
              Simule Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* Sobre o Consórcio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              O que é o Consórcio de Imóvel?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg text-justify">
              O consórcio de imóveis é uma forma inteligente e planejada de conquistar o seu 
              patrimônio. Por meio dele, você pode adquirir a casa, o apartamento, o terreno ou ainda realizar a construção ou reforma do seu imóvel, 
              tudo isso sem pagar juros e com parcelas acessíveis que cabem no seu orçamento.
              Os planos disponíveis variam de 24 a 200 meses, oferecendo flexibilidade para diferentes perfis e objetivos. Além disso, 
              não é necessário dar entrada para participar — basta escolher o plano que melhor se encaixa nas suas necessidades e começar a investir no seu futuro.
 
            </p>
            <p className="text-lg text-muted-foreground text-justify">
              
             Com o consórcio, você planeja, contribui mensalmente e quando contemplado, 
             utiliza a carta de crédito para realizar o seu sonho, seja ele comprar, construir ou reformar o seu imóvel.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Como Funciona</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#5DBAA6] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Confira e aproveite as vantagens
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="w-16 h-16 mx-auto mb-4 text-[#5DBAA6]" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Tipos de Imóveis */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Tipos de Imóveis que você pode adquirir
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Casa", "Apartamento", "Terreno", "Sala Comercial", "Galpão", "Chácara"].map((tipo, index) => <Card key={index} className="p-6 flex items-center hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-[#5DBAA6] mr-4 flex-shrink-0" />
                <span className="text-lg font-medium">{tipo}</span>
              </Card>)}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>;
};
export default ConsorcioImovel;