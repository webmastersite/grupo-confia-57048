import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bike, DollarSign, Calendar, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroMoto from "@/assets/moto-consorcio.jpg";
const ConsorcioMoto = () => {
  const benefits = [{
    icon: DollarSign,
    title: "Sem juros e sem entrada",
    description: "Realize o sonho da moto nova sem comprometer seu orçamento"
  }, {
    icon: Calendar,
    title: "Prazos flexíveis",
    description: "Planos de 24 a 126 meses para você escolher"
  }, {
    icon: TrendingUp,
    title: "Menor taxa de administração",
    description: "Economia garantida com as melhores taxas do mercado"
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
    description: "Retire seu crédito e compre sua moto"
  }];
  const motoTypes = ["Motos de Entrada (até 150cc)", "Motos Street e Naked", "Motos Esportivas", "Motos Adventure", "Motos Custom e Touring", "Scooters"];
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroMoto})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Consórcio de Moto
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Conquiste a liberdade sobre duas rodas com planejamento e sem juros
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
              O que é o Consórcio de Moto?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-justify">
              O consórcio de motos é a forma mais inteligente de adquirir sua motocicleta sem 
              comprometer seu orçamento. Com parcelas que cabem no seu bolso e sem juros, você 
              planeja sua conquista de forma organizada e segura.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-justify">
              Os planos variam de 24 a 126 meses, oferecendo flexibilidade total para escolher 
              o prazo que melhor se adapta ao seu perfil financeiro. Você não precisa dar entrada 
              e pode escolher entre todas as marcas e modelos disponíveis no mercado.
            </p>
            <p className="text-lg text-muted-foreground text-justify">
              Com créditos que vão de R$ 10 mil a R$ 200 mil, você pode adquirir desde motos de 
              entrada até modelos premium, incluindo sport, custom, adventure e muito mais.
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

      {/* Tipos de Motos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Tipos de Motos que você pode adquirir
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {motoTypes.map((tipo, index) => <Card key={index} className="p-6 flex items-center hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-[#5DBAA6] mr-4 flex-shrink-0" />
                <span className="text-lg font-medium">{tipo}</span>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Por que escolher o Consórcio de Moto?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Bike className="w-6 h-6 text-[#5DBAA6] mr-3" />
                Liberdade de Escolha
              </h3>
              <p className="text-muted-foreground">
                Escolha qualquer marca, modelo e cilindrada. Das econômicas às premium, 
                você tem total liberdade para realizar seu sonho.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <DollarSign className="w-6 h-6 text-[#5DBAA6] mr-3" />
                Economia Garantida
              </h3>
              <p className="text-muted-foreground">
                Sem juros e com as menores taxas de administração do mercado. Você economiza 
                muito mais comparado ao financiamento tradicional.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <TrendingUp className="w-6 h-6 text-[#5DBAA6] mr-3" />
                Planejamento Financeiro
              </h3>
              <p className="text-muted-foreground">
                Organize suas finanças com parcelas fixas e previsíveis. Ideal para quem 
                pensa no futuro e quer realizar sonhos com responsabilidade.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>;
};
export default ConsorcioMoto;