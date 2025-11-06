import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logoSeguros from "@/assets/logo-seguros.png";
import logoCertificado from "@/assets/logo-certificado.png";
export const Footer = () => {
  return <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-3 mb-6 justify-items-start md:justify-items-center">
          <div>
            <h4 className="font-semibold mb-4">Confia Consórcio</h4>
            <p className="text-background/80 text-sm">Realizando sonhos através do consórcio há mais de 40 anos.</p>
            <div className="mt-4 text-sm text-background/80">
              
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre-nos" className="text-background/80 hover:text-background transition-colors">Sobre Nós</Link></li>
              <li><a href="#how-it-works-home" className="text-background/80 hover:text-background transition-colors">
                Como Funciona
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4" />
                <a href="https://api.whatsapp.com/send?phone=551532127790" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:scale-110 transition-transform" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <span>15 3212-7790</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="w-4 h-4" />
                <span>consorcio@grupoconfia.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Pereira+da+Silva,+997+-+Santa+Rosália+-+Sorocaba/SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-background transition-colors group"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 group-hover:text-background" />
                  <span className="hover:underline">Av. Pereira da Silva, 997 - Santa Rosália - Sorocaba/SP</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <span>Grupo Confia: 31.487.359/0001-69
</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-4">
              <a href="https://web.facebook.com/confia" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-white p-2 rounded-full hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/grupoconfia" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#F77737] text-white p-2 rounded-full hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/92823492" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] text-white p-2 rounded-full hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Conheça outros serviços da Confia</h4>
            <div className="flex gap-4 items-center mt-4">
              <a href="https://www.confiaseguros.com.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={logoSeguros} alt="Confia Seguros" className="h-24 w-auto rounded-lg p-2 shadow-md hover:scale-105 transition-transform" />
              </a>
              <a href="https://www.confiacertificadodigital.com.br/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={logoCertificado} alt="Confia Certificado Digital" className="h-24 w-auto rounded-lg p-2 shadow-md hover:scale-105 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} Confia Consórcio. Todos os direitos reservados.</p>
          <p className="mt-2">
            <Link to="/politicaprivacidade" className="hover:text-background transition-colors">Política de Privacidade</Link>
            {" · "}
            
          </p>
        </div>
      </div>
    </footer>;
};