import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface CTAHouseProps {
  phoneNumber?: string;
  whatsappNumber?: string;
}

export const CTAHouse = ({ 
  phoneNumber = "32127790", 
  whatsappNumber = "551532127790" 
}: CTAHouseProps) => {
  return <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para Realizar seu Sonho?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Entre em contato com nossos especialistas e descubra a melhor opção de consórcio para você
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="xl" variant="hero" className="group min-w-[200px] hover:scale-105 hover:shadow-lg transition-all duration-300" asChild>
              <a href={`tel:${phoneNumber}`}>
                <Phone className="group-hover:rotate-12 transition-transform duration-300" />
                Telefone
              </a>
            </Button>
            <Button size="xl" variant="outline" className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 min-w-[200px] hover:scale-105 hover:shadow-lg hover:border-primary-foreground/50 transition-all duration-300" asChild>
              <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
