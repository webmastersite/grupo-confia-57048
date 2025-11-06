import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
const Footer = () => {
  return <footer className="bg-card">
      {/* CTA Section */}
      <div className="border-t border-border bg-gradient-to-b from-background to-muted/30">
        
      </div>

      {/* Main Footer with 3 columns */}
      <div className="border-t border-border" style={{
      backgroundColor: '#1b2632'
    }}>
          <div className="container mx-auto px-4 py-8 md:py-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-white">
              {/* Atendimento Column */}
              <div>
                <h4 className="font-semibold mb-4">Atendimento</h4>
                <p className="text-background/80 text-sm">
                  Segunda à Sexta das 08h00 às 18h00
                </p>
              </div>

              {/* Contato Column */}
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4" />
                <a href="https://api.whatsapp.com/send?phone=551532127790" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:scale-110 transition-transform" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <span className="text-background/80 text-sm">15 3212-7790</span>
                  </li>
                  
                  <li className="flex items-center gap-2 text-background/80">
                <span className="text-background/80 text-sm">Confia Corretora de Seguros LTDA
                       09.125.842.0001/44</span>
              </li>
                  <li className="flex items-center gap-2 text-background/80">
                    
                    <div className="text-white text-sm md:text-base">
                      
                      
                    </div>
                  </li>
                </ul>
              </div>

              {/* Redes Sociais Column */}
              <div className="flex flex-col items-end justify-end mt-8">
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
            </div>
          </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              © {new Date().getFullYear()} Confia Consórcio. Todos os direitos reservados.
            </div>

            <div className="flex items-center gap-2">
              <a href="/politicaprivacidade" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <span>·</span>
              

            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
