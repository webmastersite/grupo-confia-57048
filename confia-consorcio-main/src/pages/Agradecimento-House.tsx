import logoHouse from "@/assets/logo-house.png";

const AgradecimentoHouse = () => {
  return (
    <div className="min-h-screen bg-[hsl(210,100%,25%)] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        <img 
          src={logoHouse} 
          alt="House Consórcios" 
          className="w-64 mx-auto"
        />
        <h1 className="text-white text-2xl md:text-3xl font-medium">
          Obrigado. Recebemos seus dados com sucesso!
        </h1>
      </div>
    </div>
  );
};

export default AgradecimentoHouse;
