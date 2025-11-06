import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, Bike, DollarSign, Calendar, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroAutomovel from "@/assets/carro-consorcio.jpg";
import { FaMotorcycle, FaTruckPickup } from "react-icons/fa";

const ConsorcioAutomovel = () => {
  const benefits = [{
    icon: DollarSign,
    title: "Sem juros e sem entrada",
    description: "Adquira seu veículo sem taxas abusivas"
  }, {
    icon: Calendar,
    title: "Planos com parcela reduzida",
    description: "Prazos de 24 a 126 meses para você escolher"
  }, {
    icon: TrendingUp,
    title: "Melhor planejamento financeiro",
    description: "Conquiste seu veículo de forma organizada"
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
    description: "Retire seu crédito e compre seu veículo"
  }];
  const vehicleTypes = [{
    name: "Carro",
    description: "Hatches, Sedãs, SUVs e mais",
    icon: Car
  }, {
    name: "Moto",
    description: "Motos de todas as cilindradas",
    icon: FaMotorcycle
  }, {
    name: "Utilitário",
    description: "Vans, Pick-ups e utilitários",
    icon: FaTruckPickup
  }];
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroAutomovel})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Consórcio de Automóvel
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Seu carro novo te espera. Com planejamento, você conquista o seu bem sem imprevistos.
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
              O que é o Consórcio de Automóvel?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-justify">
              O consórcio de veículos permite que você adquira um carro novo ou seminovo de maneira 
              planejada, sem juros e com parcelas econômicas. Os planos variam de 24 a 126 meses, 
              e você não precisa dar entrada para adesão ao consórcio.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-justify">
              Com parcelas reduzidas até a contemplação e a liberdade de escolher o valor do crédito 
              que você precisa, o consórcio oferece diversas vantagens.
            </p>
            <p className="text-lg text-muted-foreground text-justify">
              Além de garantir a menor taxa de administração do mercado, nossos planos oferecem créditos 
              que vão de R$ 25 mil a R$ 350 mil. Você pode escolher entre as melhores marcas e modelos, 
              incluindo hatches, sedãs e SUVs.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Veículos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Escolha o tipo de veículo
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {vehicleTypes.map((type, index) => <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-[#5DBAA6]">
                <type.icon className="w-16 h-16 mx-auto mb-4 text-[#5DBAA6]" />
                <h3 className="text-2xl font-semibold mb-3">{type.name}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-muted/30">
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

      <CTA />
      <Footer />
    </div>;
};
export default ConsorcioAutomovel;