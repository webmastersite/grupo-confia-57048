import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Simulator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Simulator states
  const [tipoConsorcio, setTipoConsorcio] = useState("automovel");
  const [valorBem, setValorBem] = useState(25000);
  const [prazo, setPrazo] = useState(60);
  const [isSubmitting, setIsSubmitting] = useState(false);


  // Calculate monthly payment with fixed rate 25.17%
  const calcularParcela = () => {
    const TAXA_FIXA = 0.2517;
    const valorTotal = valorBem * (1 + TAXA_FIXA);
    const parcelaMensal = valorTotal / prazo;
    return {
      parcelaMensal: parcelaMensal.toFixed(2),
      valorTotal: valorTotal.toFixed(2),
      taxaTotal: (valorBem * TAXA_FIXA).toFixed(2)
    };
  };

  // Get values based on consorcio type
  const getValoresPorTipo = () => {
    switch (tipoConsorcio) {
      case "imovel":
        return {
          min: 25000,
          max: 1000000,
          step: 25000,
          minPrazo: 24,
          maxPrazo: 200
        };
      case "automovel":
        return {
          min: 25000,
          max: 350000,
          step: 25000,
          minPrazo: 24,
          maxPrazo: 126
        };
      case "moto":
        return {
          min: 25000,
          max: 200000,
          step: 25000,
          minPrazo: 24,
          maxPrazo: 126
        };
      default:
        return {
          min: 10000,
          max: 500000,
          step: 5000,
          minPrazo: 24,
          maxPrazo: 120
        };
    }
  };
  const valores = getValoresPorTipo();
  const resultados = calcularParcela();

  // Adjust valorBem and prazo when tipoConsorcio changes
  useEffect(() => {
    const novosValores = getValoresPorTipo();
    setValorBem(novosValores.min);
    setPrazo(novosValores.maxPrazo);
  }, [tipoConsorcio]);

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Capture UTM parameters
    const params = new URLSearchParams(window.location.search);
    if (params.get('utm_source')) {
      formData.append('UTMSource', params.get('utm_source')!);
    }
    if (params.get('utm_medium')) {
      formData.append('UTMMedium', params.get('utm_medium')!);
    }
    if (params.get('utm_campaign')) {
      formData.append('UTMCampaing', params.get('utm_campaign')!);
    }
    
    try {
      setIsSubmitting(true);
      console.log('Enviando dados do formulário...');
      
      const response = await fetch('https://app.crmdeconsorcio.com.br/api/v1/Integracao/Formulario', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Authorization': 'Bearer NzIzMjZjMjMtOWUxNC00OGY3LWI3M2UtMTNmMGEzNGU1ZjYyOjE3NjA2MzU0MTM=',
          'Access-Control-Allow-Origin': '*'
        },
        body: formData
      });
      
      console.log('Response status:', response.status);
      
      if (response.ok) {
        console.log('Formulário enviado com sucesso! Redirecionando...');
        navigate('/agradecimento');
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível receber seus dados neste momento. Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 id="simulator" className="text-4xl md:text-5xl font-bold text-foreground mb-4 scroll-mt-16">
              Simule seu Consórcio
            </h2>
            <p className="text-xl text-muted-foreground">
              Calcule sua parcela e faça uma simulação personalizada
            </p>
          </div>

          {/* Interactive Simulator */}
          <Card className="shadow-strong animate-scale-in border-[#e3e3e3] mb-8">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-6 h-6 text-[#5DBAA6]" />
                <h3 className="text-2xl font-semibold text-foreground">Simulador Rápido</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Input Section */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="tipoConsorcio" className="text-sm font-medium mb-3 block">
                      Tipo de Consórcio
                    </Label>
                    <Select value={tipoConsorcio} onValueChange={setTipoConsorcio}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="imovel">Imóvel</SelectItem>
                        <SelectItem value="automovel">Automóvel</SelectItem>
                        <SelectItem value="moto">Moto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="valorBem" className="text-sm font-medium mb-3 block">
                      Valor do Bem: R$ {valorBem.toLocaleString('pt-BR')}
                    </Label>
                    <Slider value={[valorBem]} onValueChange={value => setValorBem(value[0])} min={valores.min} max={valores.max} step={valores.step} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>R$ {valores.min.toLocaleString('pt-BR')}</span>
                      <span>R$ {valores.max.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="prazo" className="text-sm font-medium mb-3 block">
                      Prazo: {prazo} meses ({(prazo / 12).toFixed(1)} anos)
                    </Label>
                    <Slider value={[prazo]} onValueChange={value => setPrazo(value[0])} min={valores.minPrazo} max={valores.maxPrazo} step={12} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{valores.minPrazo} meses</span>
                      <span>{valores.maxPrazo} meses</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button 
                    onClick={() => {
                        const propostaTitle = document.getElementById('proposta-title');
                        propostaTitle?.scrollIntoView({ behavior: "smooth", block: "start" });
                        
                        setTimeout(() => {
                            const inputNome = document.getElementById('input-nome-proposta');
                            inputNome?.focus();
                        }, 250);
                      }}
                      className="w-full bg-[#5DBAA6] hover:bg-[#1ab394] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                      type="button"
                    >
                      Receba uma Proposta
                    </button>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-[#5DBAA6]/10 to-[#1ab394]/10 rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Resultado da Simulação</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-[#5DBAA6]/20">
                      <span className="text-sm text-muted-foreground">Valor do Bem:</span>
                      <span className="text-lg font-semibold text-foreground">
                        R$ {valorBem.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2
                      })}
                      </span>
                    </div>

                    

                    

                    <div className="bg-[#5DBAA6] rounded-lg p-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm font-medium">Parcela Mensal:</span>
                        <span className="text-white text-2xl font-bold">
                          R$ {parseFloat(resultados.parcelaMensal).toLocaleString('pt-BR', {
                          minimumFractionDigits: 2
                        })}
                        </span>
                      </div>
                      <p className="text-white/80 text-xs mt-2">Em {prazo} meses</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4">
                    * Simulação aproximada. Valores podem variar conforme a administradora e condições do grupo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 id="proposta-title" tabIndex={-1} className="text-2xl font-semibold text-foreground mb-2 scroll-mt-16">
                Receba uma Proposta Personalizada
              </h3>
              <p className="text-muted-foreground">
                Preencha o formulário e nossa equipe entrará em contato
              </p>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
              .form-group {
                display: flex;
                margin-bottom: 4px;
              }
              .align-left {
                display: flex;
                justify-content: start;
              }
              .checkbox-group {
                display: flex;
                flex-direction: column;
                align-items: start;
                width: auto;
              }
              .card-integracao input {
                width: 100% !important;
                border: solid 0.2px #E5E6E7;
                border-radius: 6px;
                padding: 8px 0 8px 6px;
              }
              .card-integracao select {
                border: solid 0.2px #E5E6E7;
                border-radius: 6px;
                padding: 6px;
              }
              .card-integracao button {
                border: solid 0.2px #5DBAA6;
                background-color: #5DBAA6;
                color: white;
                border-radius: 4px;
                padding: 12px;
                margin-top: 12px;
              }
              .card-integracao button:hover {
                background-color: #1ab394;
                cursor: pointer;
              }
              .card-integracao input::-webkit-outer-spin-button,
              .card-integracao input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              .card-integracao input[type=number] {
                -moz-appearance: textfield;
              }
              .checkbox {
                display: flex;
                align-items: center;
                color: #5d5d5d;
                font-size: 14px;
              }
              .mr-2 {
                margin-right: 0.75rem;
              }
              .checkbox-label {
                display: flex;
                margin-bottom: 6px;
                font-size: 14px;
                margin-top: 8px
              }
              .select {
                display: flex;
                flex-direction: column;
                margin-bottom: 6px;
              }
              .select-label {
                margin-top: 8px;
                font-size: 14px;
              }
              .card-integracao select {
                border: solid 0.2px #E5E6E7;
                border-radius: 6px;
                padding: 6px;
              }
              .card-integracao {
                display: flex;
                border: solid 1px #e3e3e3;
                border-radius: 6px;
                padding: 24px 36px;
                box-shadow: 0px 0px 20px #00000025;
              }
              form {
                display: flex;
                flex-direction: column;
                width: 100%;
              }
            `}} />

            <div className='card-integracao'>
              <form id='form_integracao_crm' onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input id='input-nome-proposta' type='text' name='Nome' className='form-control' maxLength={80} placeholder='Seu nome completo*' required />
                </div>
                <div className='form-group'>
                  <input type='tel' name='Telefone' className='form-control' maxLength={20} placeholder='Telefone com DDD*' required />
                </div>
                <div className='form-group select'>
                  <label className='select-label'>Bem desejado</label>
                  <select className='form-control' name='Bem desejado'>
                    <option value='' disabled selected>Selecione uma opção</option>
                    <option value='Imóvel'>Imóvel</option>
                    <option value='Automóvel'>Automóvel</option>
                    <option value='Moto'>Moto</option>
                  </select>
                </div>
                <div className='form-group'>
                  <input type='number' className='form-control' name='ParcelaIdeal' placeholder='Parcela Ideal' maxLength={1000} />
                </div>
                <div className='form-group'>
                  <input type='email' className='form-control' name='Email' placeholder='Email' maxLength={1000} />
                </div>
                <button id='btnEnviar' type='submit' className='btn btn-primary' disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};