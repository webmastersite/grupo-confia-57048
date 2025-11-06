import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Viviane Brito",
    text: "Excelente empresa. Sou cliente há 10 Anos já!"
  },
  {
    name: "Marcelo Augusto Travagini",
    text: "Atendimento personalizado. Profissionalismo refinado. Super indico!"
  },
  {
    name: "William Massarotti",
    text: "Muito organizado e pessoas educadíssimas!"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que dizem os nossos clientes?
          </h2>
          <p className="text-xl text-muted-foreground">
            Depoimentos de quem já conquistou seus sonhos com a gente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-strong transition-shadow duration-300 animate-scale-in border-[#e3e3e3]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-[#5DBAA6] mb-4" />
                <p className="text-foreground text-lg mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
