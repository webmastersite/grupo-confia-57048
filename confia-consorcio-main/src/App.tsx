import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SobreNos from "./pages/SobreNos";
import ConsorcioImovel from "./pages/ConsorcioImovel";
import ConsorcioAutomovel from "./pages/ConsorcioAutomovel";
import ConsorcioMoto from "./pages/ConsorcioMoto";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import Agradecimento from "./pages/Agradecimento";
import AgradecimentoHouse from "./pages/Agradecimento-House";
import HouseCampolim from "./pages/HouseCampolim";
import NotFound from "./pages/NotFound";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/consorcio-imovel" element={<ConsorcioImovel />} />
          <Route path="/consorcio-automovel" element={<ConsorcioAutomovel />} />
          <Route path="/consorcio-moto" element={<ConsorcioMoto />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/agradecimento" element={<Agradecimento />} />
          <Route path="/agradecimento-house" element={<AgradecimentoHouse />} />
          <Route path="/house-campolim" element={<HouseCampolim />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
