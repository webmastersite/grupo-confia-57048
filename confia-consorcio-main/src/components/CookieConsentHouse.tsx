import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

export const CookieConsentHouse = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground">Este site utiliza cookies</h3>
              <p className="text-sm text-muted-foreground">
                Utilizamos cookies para fornecer uma melhor experiência de navegação, analisar o tráfego 
                do site e personalizar conteúdo. Para saber mais sobre o uso de cookies, consulte nossa{" "}
                <Link 
                  to="/politica-privacidade" 
                  className="text-primary hover:underline font-medium"
                >
                  Política de Privacidade
                </Link>.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="flex-1 md:flex-none"
            >
              Rejeitar
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleAccept}
              className="flex-1 md:flex-none"
            >
              Aceitar todos
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReject}
              className="flex-shrink-0"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
