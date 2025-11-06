import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-consorcio.jpg";
import carroImage from "@/assets/carro-consorcio.jpg";
import casaImage from "@/assets/casa-consorcio.jpg";
import servicosLogo from "@/assets/logo-consorcio.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const images = [heroImage, carroImage, casaImage];

export const Hero = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60 z-10" />
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full ml-0 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem 
              key={index}
              className="h-full min-h-[90vh] bg-cover bg-center bg-no-repeat pl-0 md:pl-4"
              style={{ 
                backgroundImage: `url(${image})`,
                imageRendering: 'crisp-edges'
              }}
            />
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="container mx-auto px-4 relative z-20 py-20 max-w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Realize o Sonho da Casa Própria ou Carro Novo
            </h1>
            <img src={servicosLogo} alt="Serviços" className="h-16 md:h-32 lg:h-40 flex-shrink-0" />
          </div>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed">
            Com o consórcio, você planeja seu futuro de forma inteligente e sem juros. 
            Conquiste seus objetivos com parcelas que cabem no seu bolso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="xl" 
              variant="hero"
              className="group hover:scale-105 hover:shadow-lg transition-all duration-300"
              asChild
            >
              <a href="#simulator">
                Simule Agora
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="bg-background/30 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 hover:scale-105 hover:shadow-lg hover:border-primary-foreground/50 transition-all duration-300"
              asChild
            >
              <a href="#how-it-works-home">
                Saiba Como Funciona
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
