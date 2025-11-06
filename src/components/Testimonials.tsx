import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Luiz Carlos Francisquete",
    text: "Equipe bastante eficaz.",
    rating: 5,
    role: "Cliente desde 2020"
  },
  {
    name: "Adriano Guedes",
    text: "Melhor lugar para validar certificado digital, atendimento nota 10 e rápido, recomendo.",
    rating: 5,
    role: "Empresário"
  },
  {
    name: "Ricardo Souza",
    text: "Ótimo atendimento, com profissionais altamente capacitados que sempre supriram minhas necessidades.",
    rating: 5,
    role: "Profissional Autônomo"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-secondary/30 via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 section-divider pt-8">
          <h2 className="font-black mb-4">
            O Que Dizem Nossos Clientes?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confiança construída através de resultados
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Card className="p-10 md:p-16 shadow-2xl border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative quote background */}
            <Quote className="absolute top-8 right-8 w-32 h-32 text-primary/5 -rotate-12" />
            
            <div className="relative z-10">
              <div className="min-h-[240px] flex flex-col justify-center space-y-8">
                <div className="flex gap-1 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed text-center font-light italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex flex-col items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-6 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full hover-lift border-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-12 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full hover-lift border-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
