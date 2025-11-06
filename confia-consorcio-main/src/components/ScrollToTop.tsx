import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Não executar em /house-campolim (usa ScrollToTopHouse)
  if (pathname === "/house-campolim") {
    return null;
  }

  useEffect(() => {
    if (hash) {
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
  }, [pathname, hash]);

  return null;
};
