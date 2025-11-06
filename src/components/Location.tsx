import { MapPin, Navigation, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Location = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-success/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 section-divider pt-8">
          <h2 className="font-black mb-4">
            Nossa Equipe Está Pronta Para Te Ajudar!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visite nossa unidade em Sorocaba e conheça nossos serviços
          </p>
        </div>

        <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl border-0">
          <div className="grid md:grid-cols-2">
            {/* Left side - Info */}
            <div className="p-10 md:p-12 bg-gradient-to-br from-primary/5 to-transparent flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Endereço</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Av. Pereira da Silva, 997<br />
                    Santa Rosália - Sorocaba/SP<br />
                    CEP: 18095-310
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-success" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Horário de Atendimento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Segunda à Sexta-feira<br />
                    08h00 às 18h00
                  </p>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full gap-3 hover-lift"
                >
                  <a
                    href="https://www.waze.com/ul?ll=-23.48837630%2C-47.44616710&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-5 h-5" />
                    Abrir no Waze
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full gap-3 hover-lift gradient-primary"
                >
                  <a
                    href="https://goo.gl/maps/pr98EY6oZTrkiNHW9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-5 h-5" />
                    Abrir no Google Maps
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Map */}
            <div className="relative h-[400px] md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8!2d-47.4461671!3d-23.4883763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a1d3a4b8b1b%3A0x1234567890abcdef!2sAv.%20Pereira%20da%20Silva%2C%20997%20-%20Santa%20Ros%C3%A1lia%2C%20Sorocaba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Grupo Confia"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Location;
