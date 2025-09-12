import { useState } from "react";

const PrincipiosWebDesign = () => {
  const [abrir, setAbrir] = useState(false);
  const [girarImg, setGirarImg] = useState(false);

  const visualizar = () => {
    setAbrir(!abrir);
    setGirarImg(!girarImg);
  };

  const classeGirarImg = girarImg ? "girarImg" : "";
  return (
    <section>
      <div id="div-titulo">
        <h2>PRINCÍPIOS DE WEB DESIGN</h2>
        <img src="/seta.png" onClick={visualizar} className={classeGirarImg} />
      </div>
      {abrir && (
        <>
          <div>
            <h3>Produção Web</h3>
            <p>
              <strong>Planejamento:</strong> A produção web exige conhecimentos
              de programação e design, com foco em planejamento e
              previsibilidade para criar a "sede virtual" de uma empresa.
            </p>
            <h4>Página web, Sites e Portais</h4>
            <ul>
              <li>
                <strong>Página web:</strong>
                <ul>
                  <li>
                    Um único documento digital acessível por um endereço. É a
                    base da internet. Pode ser um artigo de blog ou uma{" "}
                    <strong>landing page</strong> (página única e
                    verticalizada).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Site (website):</strong>
                <ul>
                  <li>
                    Um conjunto de páginas web conectadas sob um mesmo domínio.
                    É a estrutura mais comum na internet, com uma página inicial
                    (<strong>homepage</strong>) que leva a páginas internas (ex:
                    sobre a empresa, serviços, contato).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Portal:</strong>
                <ul>
                  <li>
                    Um site complexo que agrega informações e conteúdos de
                    diversas fontes. Funciona como uma vitrine, reunindo
                    notícias, serviços e outros conteúdos em um só lugar.
                    Exemplos incluem Terra e Yahoo.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Briefing para Desenvolvimento de Sites</h4>
            <strong>O que é?</strong>
            <p>
              <strong>Briefing</strong> ou{" "}
              <strong>levantamento de requisitos</strong> é um documento que
              coleta informações detalhadas sobre um projeto de desenvolvimento
              web. Seu objetivo é guiar todas as etapas do processo, desde o
              planejamento até a finalização, garantindo que o resultado atenda
              às necessidades do cliente.
            </p>
            <strong>Conteúdo do Briefing</strong>
            <p>
              O briefing é dividido em quatro partes principais para reunir
              dados essenciais:
            </p>
            <ol>
              <li>
                <strong>Dados sobre o Cliente:</strong>
                <ul>
                  <li>
                    <strong>Informações básicas:</strong> Nome, contato.
                  </li>
                  <li>
                    <strong>Histórico e objetivos:</strong> Resumo da empresa,
                    prêmios, missão, valores.
                  </li>
                  <li>
                    <strong>Público-alvo:</strong> Idade, gênero, classe social
                    do público que irá navegar no site.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dados sobre o Projeto:</strong>
                <ul>
                  <li>
                    <strong>Objetivos do site:</strong> O que o cliente quer
                    alcançar? (Ex: vitrine virtual, e-commerce, etc.).
                  </li>
                  <li>
                    <strong>Funcionalidades:</strong> Quais recursos
                    tecnológicos são necessários (linguagens de programação,
                    sistemas acoplados).
                  </li>
                  <li>
                    <strong>Elementos visuais:</strong> Paleta de cores, logo e
                    outros elementos estéticos para manter a coerência com a
                    identidade da empresa.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cenário e Concorrência:</strong>
                <ul>
                  <li>
                    <strong>Análise da concorrência:</strong> Estudar como os
                    concorrentes se comportam, o que oferecem em seus sites, e
                    quais estratégias podem ser úteis para o projeto.
                  </li>
                  <li>
                    <strong>Familiaridade do usuário:</strong> Entender o padrão
                    de design e funcionalidades do mercado (ex: sites de
                    e-commerce) para criar uma experiência familiar para o
                    usuário.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Demandas de Pessoal e Tecnologia:</strong>
                <ul>
                  <li>
                    <strong>Recursos:</strong> Quais profissionais e tecnologias
                    serão necessários para o projeto.
                  </li>
                  <li>
                    <strong>Cronograma:</strong> Prazos de desenvolvimento.
                  </li>
                  <li>
                    <strong>Diferenciais:</strong> Quais vantagens e qualidades
                    podem ser reforçadas na solução final.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Etapas da Produção Web</h4>
            <p>
              <strong>Visão Geral:</strong> O desenvolvimento de soluções web
              exige uma estrutura de produção dividida em etapas, o que garante
              a organização e o alinhamento de projetos, especialmente os mais
              complexos, como portais. Essa abordagem ajuda a integrar
              programação e design de forma coesa.
            </p>
            <strong>Etapas do Processo de Produção Web</strong>
            <ol>
              <li>
                <strong>Programação e Arquitetura:</strong>
                <ul>
                  <li>É o esqueleto do projeto.</li>
                  <li>
                    Baseia-se no <strong>levantamento de requisitos</strong>{" "}
                    (briefing).
                  </li>
                  <li>
                    Define a estrutura e a navegação (quantas páginas, como se
                    conectam).
                  </li>
                  <li>
                    Quanto maior a complexidade (mais páginas), mais robusta
                    deve ser a estrutura de código.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Definição de Layout e Navegabilidade:</strong>
                <ul>
                  <li>É a interface visual, a parte que o usuário vê.</li>
                  <li>
                    Usa conhecimentos de <strong>design</strong> e{" "}
                    <strong>estética</strong> para criar a aparência do site.
                  </li>
                  <li>
                    É nesta fase que se define a linguagem{" "}
                    <strong>front-end</strong>, responsável pelos elementos
                    visuais.
                  </li>
                  <li>
                    A programação por trás da interface, que se conecta à
                    hospedagem e às funcionalidades, é o{" "}
                    <strong>back-end</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conteúdo e Prototipagem:</strong>
                <ul>
                  <li>
                    <strong>Prototipagem:</strong> Criação de um modelo ou
                    rascunho do site para testar a funcionalidade e o fluxo de
                    navegação antes do desenvolvimento final.
                  </li>
                  <li>
                    Esta etapa garante que tudo funcione como planejado e evita
                    problemas futuros.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Publicação e Avaliação:</strong>
                <ul>
                  <li>
                    <strong>Publicação:</strong> O site é lançado e fica
                    disponível ao público.
                  </li>
                  <li>
                    <strong>Avaliação e Manutenção:</strong> O site é monitorado
                    para garantir seu bom funcionamento. Esta fase inclui a
                    análise de desempenho, correção de erros e atualizações.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Storyboard e Fluxograma de Páginas</h4>
            <strong>O que são e para que servem?</strong>
            <p>
              O <strong>storyboard</strong> e o <strong>fluxograma</strong> são
              ferramentas essenciais na fase de planejamento da produção web.
              Eles ajudam a organizar a estrutura, a navegação e o layout de um
              site de forma visual, garantindo que todas as páginas se
              comuniquem e funcionem como uma unidade.
            </p>
            <strong>Storyboard</strong>
            <ul>
              <li>
                <strong>Definição:</strong> Representação visual e esquemática
                que mostra a disposição dos elementos de uma página em
                sequência.
              </li>
              <li>
                <strong>Função:</strong> Ajuda a organizar o layout e o design
                de cada componente do site. É usado para criar um esquema básico
                de onde cada elemento (texto, imagem, botão) será posicionado.
              </li>
              <li>
                <strong>Como usar:</strong>
                <ol>
                  <li>
                    <strong>Defina o tema principal:</strong> Cores, linhas
                    gerais da imagem e propósito visual. A homepage (página
                    inicial) geralmente serve como base visual para as demais
                    páginas.
                  </li>
                  <li>
                    <strong>Identifique o público-alvo:</strong> Entenda os
                    usuários para criar um design alinhado com suas expectativas
                    de navegação.
                  </li>
                  <li>
                    <strong>Liste os elementos:</strong> Defina quais conteúdos
                    e funcionalidades farão parte da página.
                  </li>
                </ol>
              </li>
            </ul>
            <strong>Fluxograma</strong>
            <ul>
              <li>
                <strong>Definição:</strong> Representação gráfica que mapeia as
                entradas e saídas da navegação do site, mostrando como as
                páginas se conectam.
              </li>
              <li>
                <strong>Função:</strong> Organiza a relação entre as páginas,
                ajudando a visualizar o fluxo do usuário. Isso permite
                identificar caminhos lógicos e gargalos na experiência de
                navegação, otimizando a arquitetura do site.
              </li>
              <li>
                <strong>Como usar:</strong>
                <ol>
                  <li>
                    <strong>Conte as páginas:</strong> Mapeie o número total de
                    páginas do projeto para ter previsibilidade.
                  </li>
                  <li>
                    <strong>Mapeie as conexões:</strong> Identifique os pontos
                    de entrada e saída e as ligações entre as páginas.
                  </li>
                  <li>
                    <strong>Convencione elementos:</strong> Use um padrão visual
                    (ex: cores diferentes para tipos de páginas) para
                    simplificar a visualização.
                  </li>
                  <li>
                    <strong>Refine e revise:</strong> Revise o fluxograma para
                    garantir que a estrutura esteja clara e otimizada.
                  </li>
                </ol>
              </li>
            </ul>
            <h4>Estrutura da Página</h4>
            <strong>O que é?</strong>
            <p>
              A estrutura da página (ou anatomia) é a organização padrão dos
              elementos visuais. Aderir a essa rotina ajuda a criar um ambiente
              familiar e de fácil acesso para os usuários, independentemente de
              sua experiência com tecnologia.
            </p>
            <strong>Elementos Principais</strong>
            <ol>
              <li>
                <strong>Cabeçalho:</strong>
                <ul>
                  <li>Localização: Geralmente no topo da página.</li>
                  <li>
                    Função: Identificação e reforço da identidade visual da
                    empresa (logo, nicho de mercado).
                  </li>
                  <li>
                    Características: Costuma ser um espaço fixo, não interativo,
                    mas pode conter elementos multimídia como banners digitais.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Menu:</strong>
                <ul>
                  <li>
                    Localização: Comumente na lateral direita, mas pode estar no
                    cabeçalho ou nas duas laterais (em portais).
                  </li>
                  <li>
                    Função: Guiar o usuário, reunindo pontos de acesso a todas
                    as páginas do site.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conteúdo:</strong>
                <ul>
                  <li>Localização: Miolo da página (área nobre).</li>
                  <li>
                    Função: Publicar as informações variáveis e principais da
                    página. É a única seção que muda de uma página para outra.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Rodapé:</strong>
                <ul>
                  <li>Localização: Fim da página.</li>
                  <li>
                    Função: Reunir elementos de identificação e navegação, como
                    o mapa do site, informações de contato e créditos do design.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              O ambiente digital é a sede virtual de empresas, e a escolha da
              solução (página, site ou portal) deve ser baseada na complexidade
              e no custo-benefício. O processo de criação de um site começa com
              um <strong>briefing</strong> detalhado, que serve de guia para
              todas as etapas:{" "}
              <strong>
                programação e arquitetura, design e navegabilidade, prototipagem
                e testes, e publicação e avaliação
              </strong>
              . Ferramentas como <strong>storyboard e fluxograma</strong> são
              essenciais para organizar o layout e o fluxo de navegação,
              enquanto a <strong>estrutura padrão</strong> (cabeçalho, menu,
              conteúdo e rodapé) garante uma experiência de usuário familiar e
              intuitiva.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default PrincipiosWebDesign;
