import { Home, Car, Bike } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import casaImage from "@/assets/casa-consorcio.jpg";
import carroImage from "@/assets/carro-consorcio.jpg";
import motoImage from "@/assets/moto-consorcio.jpg";

const types = [
  {
    icon: Home,
    image: casaImage,
    title: "Imóveis",
    description: "Realize o sonho da casa própria, apartamento ou terreno sem juros e com parcelas planejadas.",
    benefits: ["Créditos a partir de R$ 100 mil", "Prazo de até 200 meses", "Sem juros"],
    color: "bg-primary",
  },
  {
    icon: Car,
    image: carroImage,
    title: "Automóveis",
    description: "Conquiste seu carro novo ou seminovo de forma inteligente e sem comprometer seu orçamento.",
    benefits: ["Carros de todas as marcas", "Prazo de até 126 meses", "Sem entrada"],
    color: "bg-primary",
  },
  {
    icon: Bike,
    image: motoImage,
    title: "Motos",
    description: "A forma mais acessível de ter sua moto, seja para trabalho ou lazer.",
    benefits: ["Motos de todas as cilindradas", "Prazo de até 126 meses", "Parcelas a partir de R$ 150"],
    color: "bg-primary",
  },
];

export const ConsortiumTypesHouse = () => {
  return (
    <section id="consortium-types" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tipos de Consórcio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o consórcio ideal para realizar seus sonhos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <Card 
              key={index}
              className="group hover:shadow-strong transition-all duration-300 animate-scale-in border-border overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className={`${type.color} pb-8 transition-colors`}>
                {type.image ? (
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden shadow-soft group-hover:scale-105 transition-transform">
                    <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft">
                    <type.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                )}
                <CardTitle className="text-center text-2xl text-primary-foreground">
                  {type.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 text-center">
                  {type.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="default" 
                  className="w-full hover:scale-105 hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <a 
                    href="https://api.whatsapp.com/send?phone=5515998001647" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Saiba Mais
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
