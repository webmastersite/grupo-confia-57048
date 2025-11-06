import { Phone, Shield, FileCheck, Building2 } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import confiaLogo from "@/assets/confia-seguros-logo.png";
import consorcioLogo from "@/assets/confia-consorcio-logo.png";
import certificadoLogo from "@/assets/confia-certificado-logo.png";
import confiaLoja from "@/assets/confia-loja.jpg";
import familyBg from "@/assets/family-background.jpg";
import destaque2 from "@/assets/destaque-2.jpg";
import segurosCard from "@/assets/confia-seguros-card.png";
import consorciosCard from "@/assets/confia-consorcios-card.png";
import certificadoCard from "@/assets/confia-certificado-card.png";
const Hero = () => {
  return <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        <Carousel className="w-full h-full" opts={{
        loop: true
      }} plugins={[Autoplay({
        delay: 4000
      })]}>
          <CarouselContent className="-ml-0">
            <CarouselItem className="pl-0">
              <img src={familyBg} alt="Família feliz" className="w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="pl-0">
              <img src={destaque2} alt="Loja Confia" className="w-full h-full object-cover" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4 animate-fade-in-up">
          <div className="inline-block">
            
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
            Conheça Nossos<br />
            Serviços
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Soluções completas e personalizadas para você e sua empresa
          </p>
          
          {/* Logos dos serviços */}
          <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
            <a 
              href="https://www.confiaseguros.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-200"
            >
              <img 
                src={segurosCard} 
                alt="Confia Seguros" 
                className="h-24 md:h-32 w-auto object-contain"
              />
            </a>
            
            <a 
              href="https://www.confiaconsorcio.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-200"
            >
              <img 
                src={consorciosCard} 
                alt="Confia Consórcios" 
                className="h-24 md:h-32 w-auto object-contain"
              />
            </a>
            
            <a 
              href="https://www.confiacertificadodigital.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-200"
            >
              <img 
                src={certificadoCard} 
                alt="Confia Certificação Digital" 
                className="h-24 md:h-32 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-8 md:mb-10">
          <Carousel className="w-full" opts={{
          align: "start",
          loop: true
        }}>
            <CarouselContent className="-ml-0 gap-1">
              
              
              
              <CarouselItem className="pl-0 basis-full md:basis-1/3">
                
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center animate-fade-in-up" style={{
        animationDelay: '400ms'
      }}>
          <div className="inline-flex flex-col items-center gap-4 md:gap-6 p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
            <div className="text-sm font-medium text-white/90 uppercase tracking-wider">
              Central de Atendimento
            </div>
            <Button size="lg" className="gap-2 md:gap-3 shadow-lg hover-lift bg-white text-accent hover:bg-white/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto">
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-semibold">(15) 3212-7790</span>
            </Button>
            
          </div>
        </div>
      </div>

    </section>;
};
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  delay: string;
  link: string;
}
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  bgColor,
  delay,
  link
}: ServiceCardProps) => {
  const isLogoCard = title === "Confia Seguros" || title === "Confia Consórcios" || title === "Confia Certificação Digital";
  return <a href={link} target="_blank" rel="noopener noreferrer" className={`group block animate-fade-in-up ${isLogoCard ? 'md:col-span-1' : 'md:col-span-3'}`} style={{
    animationDelay: `${delay}ms`
  }}>
      
    </a>;
};
export default Hero;