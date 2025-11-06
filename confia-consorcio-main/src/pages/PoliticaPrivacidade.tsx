import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, FileText, Users, Database } from "lucide-react";
const PoliticaPrivacidade = () => {
  return <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Política de Privacidade e Cookies</h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Introdução
              </h2>
              <p className="text-foreground/90">
                Nós da Confia Consórcios estamos comprometidos com a prática contínua dos nossos valores 
                corporativos e com a confiança de nosso público como base de todas nossas atividades.
              </p>
              <p className="text-foreground/90 mt-4">
                Esta Política de Privacidade destina-se a ajudar você a entender quais informações coletamos, 
                por qual motivo as coletamos, se as compartilhamos e com quem, além de informar seus direitos 
                relativos a essas informações e como exercê-los.
              </p>
              <p className="text-foreground/90 mt-4">
                Quando você simula ou contrata nossos consórcios, acessa nosso website ou entra em contato 
                conosco, está confiando a nós informações a seu respeito. Entendemos que isso é uma grande 
                responsabilidade e dedicamos os melhores esforços para proteger essas informações e garantir 
                a sua privacidade.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">1. O que é a LGPD?</h2>
              <p className="text-foreground/90">
                A Lei Geral de Proteção de Dados – Lei nº 13.709/18 regula o tratamento dos dados pessoais, 
                por pessoas físicas ou jurídicas, de modo a proteger os seus direitos fundamentais de liberdade 
                e de privacidade e a livre formação da personalidade de cada indivíduo.
              </p>
              <p className="text-foreground/90 mt-4">
                O tratamento de dados pessoais consiste em qualquer atividade que utilize os seus dados pessoais 
                para a execução final do serviço solicitado e apenas poderá ser usado para tais solicitações.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-primary" />
                2. Quais informações coletamos?
              </h2>
              <p className="text-foreground/90 mb-4">
                Coletamos e utilizamos informações pessoais de forma legal e adequada conforme necessidade 
                dos nossos serviços. Podemos coletar os seguintes dados:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li><strong>Dados de identificação:</strong> Nome e Telefone</li>
                <li><strong>Dados de contato:</strong> E-mail</li>
                
                <li><strong>Dados de preferências:</strong> Tipo de consórcio de interesse e Valor desejado</li>
              </ul>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">3. Como coletamos os seus dados?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Informações fornecidas diretamente por você</h3>
                  <p className="text-foreground/90">
                    Durante a simulação de consórcio, preenchimento de formulários de contato ou solicitação 
                    de propostas, você compartilha conosco diversos dados pessoais necessários para a prestação 
                    dos nossos serviços.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Informações coletadas automaticamente</h3>
                  <p className="text-foreground/90">
                    Quando você navega em nosso website, podemos coletar automaticamente informações sobre 
                    o seu dispositivo, navegação e interação com o site através de cookies e tecnologias similares.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                4. Como obtemos seu consentimento?
              </h2>
              <p className="text-foreground/90">
                Obtemos seu consentimento quando você preenche formulários em nosso website, solicita 
                simulações ou propostas de consórcio. O consentimento é livre, informado e inequívoco.
              </p>
              <p className="text-foreground/90 mt-4">
                Seus dados serão utilizados apenas para as finalidades informadas. Para ações de marketing, 
                solicitaremos autorização específica, e você poderá, a qualquer tempo, solicitar a retirada 
                de seus dados das nossas comunicações publicitárias.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">5. Como utilizamos suas informações?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prestação de serviços</h3>
                  <p className="text-foreground/90">
                    Para processar simulações, elaborar propostas, administrar sua participação em consórcios 
                    e prestar suporte ao cliente.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cumprimento de obrigações legais</h3>
                  <p className="text-foreground/90">
                    Para atender obrigações legais e regulatórias, incluindo comunicações aos órgãos competentes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Melhoria dos serviços</h3>
                  <p className="text-foreground/90">
                    Para análise e melhoria contínua dos nossos produtos e serviços, sempre respeitando sua 
                    privacidade e expectativas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comunicações e marketing</h3>
                  <p className="text-foreground/90">
                    Para enviar comunicações sobre nossos produtos, ofertas e promoções, quando autorizado 
                    por você. Você pode cancelar o recebimento a qualquer momento.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">6. O que são e como utilizamos os Cookies?</h2>
              <p className="text-foreground/90 mb-4">
                Cookie é um pequeno arquivo de texto enviado ao seu navegador por um site que você visita. 
                Ele ajuda o website a se lembrar de informações sobre a visita, tornando sua navegação mais 
                fácil e o site mais útil.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border mt-4">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Tipo de Cookie</th>
                      <th className="border border-border p-3 text-left">O que fazem?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3"><strong>Necessários</strong></td>
                      <td className="border border-border p-3">
                        Essenciais para que o website carregue adequadamente e permita navegação correta 
                        e uso de todas as funcionalidades disponíveis.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>Desempenho</strong></td>
                      <td className="border border-border p-3">
                        Ajudam a entender como os visitantes interagem com o website, fornecendo informações 
                        sobre áreas visitadas e tempo de permanência.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>Funcionais</strong></td>
                      <td className="border border-border p-3">
                        Permitem que o site se lembre de escolhas anteriores para proporcionar experiência 
                        personalizada.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>Marketing</strong></td>
                      <td className="border border-border p-3">
                        Utilizados para fornecer conteúdo mais relevante e medir eficácia de campanhas 
                        publicitárias.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-foreground/90 mt-4">
                Solicitamos sua autorização para uso de cookies na primeira navegação. Os cookies necessários 
                são essenciais para o funcionamento normal do website.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                7. Com quem compartilhamos seus dados?
              </h2>
              <p className="text-foreground/90">
                Compartilhamos seus dados pessoais com parceiros de negócio, fornecedores de serviço, 
                administradoras de consórcio e órgãos governamentais quando necessário para prestação 
                dos nossos serviços ou cumprimento de obrigações legais.
              </p>
              <p className="text-foreground/90 mt-4">
                Quando houver compartilhamento, isso acontecerá para cumprir alguma finalidade específica 
                informada a você, sempre com medidas adequadas de proteção dos seus dados.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">8. Como mantemos seus dados seguros?</h2>
              <p className="text-foreground/90 mb-4">
                Adotamos medidas técnicas e organizacionais para manter seus dados pessoais seguros e 
                protegidos de acessos não autorizados:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li>Proteção contra acesso não autorizado aos sistemas</li>
                <li>Criptografia de dados sensíveis</li>
                <li>Acesso restrito apenas a pessoas autorizadas</li>
                <li>Compromisso de confidencialidade de funcionários e parceiros</li>
                <li>Monitoramento contínuo de segurança</li>
              </ul>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                9. Quais são seus direitos?
              </h2>
              <p className="text-foreground/90 mb-4">
                Você tem os seguintes direitos relativos aos seus dados pessoais:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li>Confirmar se tratamos seus dados pessoais</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Solicitar portabilidade dos dados a outro fornecedor</li>
                <li>Eliminar dados tratados com seu consentimento</li>
                <li>Obter informações sobre compartilhamento de dados</li>
                <li>Revogar consentimento a qualquer momento</li>
              </ul>
              <p className="text-foreground/90 mt-4">
                Para exercer seus direitos, entre em contato através dos nossos canais de atendimento.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">10. Atualização da Política</h2>
              <p className="text-foreground/90">
                Esta Política de Privacidade poderá ser alterada a qualquer momento para garantir nosso 
                compromisso de máxima transparência. Recomendamos que você a revise periodicamente.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">11. Contato</h2>
              <p className="text-foreground/90">
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados 
                pessoais, entre em contato conosco através do WhatsApp disponível no site ou pelos canais 
                de atendimento informados em nossa página.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">12. Glossário</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-foreground">Consentimento:</dt>
                  <dd className="text-foreground/90 mt-1">
                    Manifestação livre, informada e inequívoca que autoriza o tratamento dos dados pessoais 
                    para finalidade específica.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Dado Pessoal:</dt>
                  <dd className="text-foreground/90 mt-1">
                    Qualquer informação relacionada a pessoa natural identificada ou identificável.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Titular:</dt>
                  <dd className="text-foreground/90 mt-1">
                    Pessoa natural a quem se referem os dados pessoais.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Tratamento:</dt>
                  <dd className="text-foreground/90 mt-1">
                    Toda operação realizada com dados pessoais, como coleta, armazenamento, uso, 
                    compartilhamento ou eliminação.
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default PoliticaPrivacidade;