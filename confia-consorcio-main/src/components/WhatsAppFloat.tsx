import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

export const WhatsAppFloat = () => {
  const location = useLocation();
  
  // Não renderizar em /house-campolim (usa WhatsAppFloatHouse)
  if (location.pathname === "/house-campolim") {
    return null;
  }
  
  // Define números por página
  const whatsappNumbers: Record<string, string> = {
    "/": "551532127790",
    "/agradecimento-house": "5515998001647",
  };
  
  // Pega o número baseado na rota, ou usa o padrão
  const phoneNumber = whatsappNumbers[location.pathname] || "551532127790";
  
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-strong hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
