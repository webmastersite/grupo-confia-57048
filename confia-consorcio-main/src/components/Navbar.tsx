import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Home, Gift, Calculator, Info, Car, Bike, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import logoConfia from "@/assets/logo-confia.png";
import { FaMotorcycle } from "react-icons/fa";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavClick = (e: React.MouseEvent, link: string) => {
    const currentPath = window.location.pathname;
    const [path, hash] = link.split('#');
    
    // Se estamos na mesma página
    if (currentPath === path || (currentPath === '/' && path === '')) {
      e.preventDefault();
      
      if (hash) {
        // Rolar para seção específica
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
          
          // Atualizar URL sem recarregar
          window.history.replaceState(null, "", `/#${hash}`);
          
          setIsOpen(false);
        }
      } else {
        // Rolar para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };
  const menuItems = [{
    label: "Início",
    icon: Home,
    link: "/"
  }, {
    label: "Benefícios",
    icon: Gift,
    link: "/#benefits"
  }, {
    label: "Simulador",
    icon: Calculator,
    link: "/#simulator"
  }, {
    label: "Sobre Nós",
    icon: Info,
    link: "/sobre-nos"
  }];
  const consorcioTypes = [{
    label: "Consórcio de Imóvel",
    icon: House,
    link: "/consorcio-imovel"
  }, {
    label: "Consórcio de Automóvel",
    icon: Car,
    link: "/consorcio-automovel"
  }, {
    label: "Consórcio de Moto",
    icon: FaMotorcycle,
    link: "/consorcio-moto"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }} className="flex items-center">
              <img 
                src={logoConfia} 
                alt="Confia Consórcios" 
                className="h-12 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Primary links */}
            {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return <Link key={index} to={item.link} onClick={(e) => handleNavClick(e, item.link)}>
                  <Button variant="ghost" className="text-base text-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-300 relative group">
                    <IconComponent className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary group-hover:w-3/4 transition-all duration-300" />
                  </Button>
                </Link>;
          })}

            {/* Tipos de Consórcio dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-base text-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-300 relative group">
                  Tipos de Consórcio
                  <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="z-50 min-w-[16rem] bg-card border-border shadow-lg animate-fade-in p-2">
                {consorcioTypes.map((type, index) => {
                const IconComponent = type.icon;
                return <DropdownMenuItem asChild key={index} className="cursor-pointer rounded-md hover:bg-secondary/10 hover:text-secondary transition-all duration-200 p-3 mb-1 last:mb-0">
                      <Link to={type.link} className="flex items-center group">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center mr-3 group-hover:bg-secondary/20 transition-colors">
                          <IconComponent className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-sm font-medium">{type.label}</span>
                      </Link>
                    </DropdownMenuItem>;
              })}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="https://api.whatsapp.com/send?phone=551532127790" target="_blank" rel="noopener noreferrer">
              <Button className="ml-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                Fale Conosco
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return <Link key={index} to={item.link} onClick={(e) => handleNavClick(e, item.link)}>
                    <Button variant="ghost" className="w-full justify-start text-base text-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-200">
                      <IconComponent className="w-4 h-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>;
          })}
              <div className="px-2 py-3">
                <p className="text-xs font-semibold text-muted-foreground mb-3 px-2">Tipos de Consórcio</p>
                {consorcioTypes.map((type, index) => {
              const IconComponent = type.icon;
              return <Link key={index} to={type.link} onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-base text-foreground hover:text-secondary hover:bg-secondary/10 pl-4 mb-1 transition-all duration-200 group">
                        <div className="w-7 h-7 rounded-md bg-secondary/10 flex items-center justify-center mr-3 group-hover:bg-secondary/20 transition-colors">
                          <IconComponent className="w-4 h-4 text-secondary" />
                        </div>
                        {type.label}
                      </Button>
                    </Link>;
            })}
              </div>
              <a href="https://api.whatsapp.com/send?phone=551532127790" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md hover:shadow-lg transition-all duration-300">
                  Fale Conosco
                </Button>
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};