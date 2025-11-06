import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Heart, Shield, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
const SobreNos = () => {
  return <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Sobre a Confia Consórcio
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up">
              Há mais de 40 anos realizando sonhos através do consórcio, 
              com transparência, segurança e compromisso com nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Nossa História
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="text-justify">
                A Confia Consórcio, nasceu em agosto de 1984 tendo sua sede administrativa localizada 
                em Sorocaba, São Paulo. Consolidou suas parcerias estratégicas em diversos segmentos. 
                Com experiência e diferencial no seu sistema de vendas e Pós-venda.
                Atualmente comercializa cotas de consórcios de todos os segmentos: Imóveis, automóveis, motocicletas, 
                caminhões, máquinas e equipamentos, produtos e serviços. Atuando em todo o território Nacional, 
                 através de parcerias com representantes.
                Com gestão da informação totalmente informatizada, garante um atendimento personalizado com informações 
                rápidas, precisas e seguras.
                Sempre trazendo constantes inovações e planos atraentes, cresce consolidando-se cada vez mais como uma
                das mais respeitadas empresas no setor.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-medium transition-shadow">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Atender com ética e transparência, priorizando com qualidade a máxima 
                satisfação de nossos clientes e parceiros, auxiliando-os na aquisição 
                de seus bens móveis e serviços através do sistema de consórcio.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-medium transition-shadow">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground">
                Ser a empresa de consórcios mais confiável e inovadora do Brasil, 
                reconhecida pela excelência e pela transformação positiva na vida 
                das pessoas.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-medium transition-shadow">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Nossos Valores</h3>
              <p className="text-muted-foreground">
                Obter reconhecimento pelos serviços aos nossos clientes, garantindo a realização, 
                concretização de seus sonhos e enriquecendo sua qualidade de vida através de nossa
                parceria na gestão para aquisição de seus bens, com transparência, relacionamento 
                benéfico, prosperidade, integridade, confiança, espírito de equipe, evolução Humana 
                e comprometimento.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Nossos Diferenciais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Segurança e Confiabilidade
                </h3>
                <p className="text-muted-foreground">
                  Trabalhamos com administradora regulamentada pelo Banco Central, garantindo total 
                  segurança nas operações.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Atendimento Personalizado
                </h3>
                <p className="text-muted-foreground">
                  Equipe especializada pronta para atender suas necessidades e tirar 
                  todas as dúvidas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Experiência Comprovada
                </h3>
                <p className="text-muted-foreground">
                  Mais de 40 anos de história e milhares de clientes satisfeitos em 
                  todo o Brasil.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Target className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Planos Flexíveis
                </h3>
                <p className="text-muted-foreground">
                  Diversas opções de prazos e valores para se adequar ao seu perfil 
                  e necessidade.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Taxas Competitivas
                </h3>
                <p className="text-muted-foreground">
                  As melhores taxas de administração do mercado, sem comprometer a 
                  qualidade do serviço.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Heart className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Compromisso Social
                </h3>
                <p className="text-muted-foreground">
                  Atuamos com responsabilidade social, contribuindo para o 
                  desenvolvimento das comunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Realizar Seu Sonho?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como o consórcio pode ser a 
            solução ideal para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover:scale-105 hover:shadow-lg transition-all duration-300" asChild>
              <a href="https://api.whatsapp.com/send?phone=551532127790" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/30 hover:bg-background/20 hover:scale-105 hover:shadow-lg hover:border-primary-foreground/50 transition-all duration-300" asChild>
              <Link to="/">
                Voltar ao Início
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default SobreNos;