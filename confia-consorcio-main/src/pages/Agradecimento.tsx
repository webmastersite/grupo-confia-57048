import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logoConfia from "@/assets/logo-consorcio.png";

const Agradecimento = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-[hsl(210,100%,25%)] flex flex-col items-center pt-32 px-4">
        <div className="text-center space-y-8 max-w-md">
          <img 
            src={logoConfia} 
            alt="Confia Consórcios" 
            className="w-48 mx-auto"
          />
          <h1 className="text-white text-2xl md:text-3xl font-medium">
            Obrigado. Recebemos seus dados com sucesso!
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agradecimento;
