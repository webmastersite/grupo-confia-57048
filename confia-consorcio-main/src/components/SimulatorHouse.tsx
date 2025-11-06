import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

export const SimulatorHouse = () => {
  // Form states
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [bemDesejado, setBemDesejado] = useState("");
  const [indicacaoCorretor, setIndicacaoCorretor] = useState("");
  const [email, setEmail] = useState("");
  const [parcelaIdeal, setParcelaIdeal] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Nome', nome);
    formData.append('Telefone', telefone);
    formData.append('Bem Desejado', bemDesejado);
    formData.append('Indicação do Corretor', indicacaoCorretor);
    formData.append('Email', email);
    formData.append('ParcelaIdeal', parcelaIdeal);

    // Get UTM parameters from URL
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
      const response = await fetch('https://app.crmdeconsorcio.com.br/api/v1/Integracao/Formulario', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Authorization': 'Bearer MzcxODBkOTktZDNhMi00ZGJjLTk2N2ItYzg1YjM5YWQ5MTkzOjE3NjA2MjU5MzI=',
          'Access-Control-Allow-Origin': '*'
        },
        body: formData
      });
      if (response.ok) {
        window.location.href = 'https://www.confiaconsorcio.com.br/agradecimento-house';
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível receber seus dados neste momento. Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="simulator-house" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="formulario-title" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Receba uma Proposta Personalizada
            </h2>
            <p className="text-xl text-muted-foreground">
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
              width: 100%;
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
              margin-top: 8px;
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
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input 
                  id='input-nome-house'
                  type='text' 
                  name='Nome' 
                  className='form-control' 
                  maxLength={80} 
                  placeholder='Seu nome completo*' 
                  required 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className='form-group'>
                <input 
                  type='tel' 
                  name='Telefone' 
                  className='form-control' 
                  maxLength={20} 
                  placeholder='Telefone com DDD*' 
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className='form-group select'>
                <label className='select-label'>Bem Desejado</label>
                <select 
                  className='form-control' 
                  name='Bem Desejado'
                  value={bemDesejado}
                  onChange={(e) => setBemDesejado(e.target.value)}
                  disabled={isSubmitting}
                >
                  <option value='' disabled>Selecione uma opção</option>
                  <option value='Imóvel'>Imóvel</option>
                  <option value='Automóvel'>Automóvel</option>
                  <option value='Construção'>Construção</option>
                  <option value='Moto'>Moto</option>
                </select>
              </div>
              <div className='form-group'>
                <input 
                  type='text' 
                  className='form-control' 
                  name='Indicação do Corretor' 
                  placeholder='Indicação do Corretor' 
                  maxLength={1000}
                  value={indicacaoCorretor}
                  onChange={(e) => setIndicacaoCorretor(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className='form-group'>
                <input 
                  type='email' 
                  className='form-control' 
                  name='Email' 
                  placeholder='Email' 
                  maxLength={1000}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className='form-group'>
                <input 
                  type='number' 
                  className='form-control' 
                  name='ParcelaIdeal' 
                  placeholder='Valor do Crédito Desejado' 
                  maxLength={1000}
                  value={parcelaIdeal}
                  onChange={(e) => setParcelaIdeal(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button id='btnEnviar' type='submit' className='btn btn-primary' disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
