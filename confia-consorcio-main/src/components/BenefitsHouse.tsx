import { Percent, Shield, TrendingUp, Clock, Wallet, Award } from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "Sem Juros",
    description: "Pague apenas taxa administrativa, sem juros sobre o valor do bem",
  },
  {
    icon: Shield,
    title: "Seguro e Regulamentado",
    description: "Administrado por empresas autorizadas pelo Banco Central",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Financeiro",
    description: "Parcelas fixas que cabem no seu orçamento mensal",
  },
  {
    icon: Clock,
    title: "Flexibilidade",
    description: "Escolha o prazo que melhor se adapta à sua realidade",
  },
  {
    icon: Wallet,
    title: "Economia Real",
    description: "Economize significativamente comparado ao financiamento tradicional",
  },
  {
    icon: Award,
    title: "Diversas Chances",
    description: "Sorteios mensais e possibilidade de lances para antecipação",
  },
];

export const BenefitsHouse = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="benefits" className="text-4xl md:text-5xl font-bold text-foreground mb-4 scroll-mt-16">
            Vantagens do Consórcio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra por que milhões de brasileiros escolhem o consórcio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-card hover:shadow-medium transition-all duration-300 animate-fade-in-up border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
