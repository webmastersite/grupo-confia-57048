import { Calculator, UserPlus, Banknote, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const steps = [{
  icon: Calculator,
  title: "Escolha o Valor e o Prazo",
  description: "Escolha o valor do crédito, o prazo e comece a pagar mensalidades."
}, {
  icon: UserPlus,
  title: "Entre para um Grupo",
  description: "Entre para um grupo de pessoas que, assim como você, também querem comprar um imóvel."
}, {
  icon: Banknote,
  title: "Receba o Crédito",
  description: "Todos os meses, membros do grupo recebem o crédito, por sorteio ou lance."
}, {
  icon: Award,
  title: "Conquiste seu Objetivo",
  description: "Todo mês é uma chance de ganhar. Garantimos a entrega do seu crédito até o final do prazo."
}];
export const HowItWorks = () => {
  return <section id="how-it-works" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem Planeja, Conquista!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda como funciona
          </p>
        </div>

        <Carousel opts={{
        align: "start",
        loop: true
      }} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {steps.map((step, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group hover:shadow-medium transition-all duration-300 border-border h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>;
};