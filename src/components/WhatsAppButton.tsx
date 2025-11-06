import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=551532127790"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-strong hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-success rounded-full animate-ping opacity-20" />
        
        <Button
          size="lg"
          className="relative rounded-full w-14 h-14 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 text-white p-0"
        >
          <MessageCircle className="w-7 h-7" fill="currentColor" />
        </Button>
      </div>
      
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="bg-card px-5 py-3 rounded-xl shadow-xl border border-border/50 whitespace-nowrap">
          <p className="text-sm font-semibold text-foreground">Fale conosco</p>
          <p className="text-xs text-muted-foreground">Resposta rápida garantida</p>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
