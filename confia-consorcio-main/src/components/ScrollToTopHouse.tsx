import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTopHouse = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Deixar o HeroHouse.tsx gerenciar o scroll para o formulário
      if (hash === "#simulator-house" || hash === "#formulario-title") {
        return;
      }
      
      setTimeout(() => {
        const target = document.querySelector(hash);
        
        if (target) {
          target.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};
