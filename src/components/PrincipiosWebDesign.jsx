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
          <div>
            <h3>Elementos Visuais e a Psicologia das Cores no Web Design</h3>
            <h4>A Importância da Estética Visual</h4>
            <ul>
              <li>
                Sites e portais utilizam <strong>elementos visuais</strong> para
                facilitar a navegação e a compreensão, assim como o Windows 1.0
                simplificou a interação com computadores.
              </li>
              <li>
                O design visual, através de{" "}
                <strong>cores, linhas e formas</strong>, cria ambientes,
                sensações e significados, indo além da mera funcionalidade.
              </li>
            </ul>
            <h4>Cores como Ferramenta de Comunicação e Significado</h4>
            <ul>
              <li>
                O <strong>design e a estética</strong> comunicam informações
                sobre o produto e o usuário.
              </li>
              <li>
                As <strong>cores</strong> não são apenas decorativas, mas
                carregam <strong>significados</strong>, influenciam emoções e
                comportamentos.
              </li>
              <li>
                A influência da cor pode ser <strong>convencionada</strong> (ex:
                semáforo vermelho para "pare") ou <strong>velada</strong>,
                introjetada culturalmente.
              </li>
            </ul>
            <h4>Temperatura e Sinestesia das Cores</h4>
            <ul>
              <li>
                A <strong>sinestesia das cores</strong> refere-se à capacidade
                da cor de afetar outras sensações.
              </li>
              <li>
                A <strong>temperatura da cor</strong> (quente/amarelada ou
                fria/azulada) impacta a atmosfera e a percepção psicológica.
                <ul>
                  <li>
                    <strong>Cores quentes</strong> (vermelho, laranja, amarelo)
                    transmitem dinamicidade, energia e juventude. São usadas em
                    elementos chamativos como menus e banners.
                  </li>
                  <li>
                    <strong>Cores frias</strong> (azul, verde, violeta)
                    transmitem calma, tranquilidade e confiança, sendo ideais
                    para reforçar profissionalismo e segurança, especialmente em
                    layouts de empresas.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Cores como Identidade de Marca</h4>
            <ul>
              <li>
                As cores podem ser <strong>elementos de identidade</strong> para
                marcas e empresas.
              </li>
              <li>
                A escolha da cor deve considerar a{" "}
                <strong>dimensão cultural</strong> e os significados{" "}
                <strong>socialmente construídos</strong>.
              </li>
              <li>
                Exemplos: Laranja pode remeter a um banco; vermelho e amarelo a
                lanchonetes, sem precisar de nome explícito. O{" "}
                <strong>contexto</strong> é crucial para a atribuição de
                significado às cores.
              </li>
            </ul>
            <h4>Modelos de Cores Digitais: RGB e Hexadecimal</h4>
            <p>
              No design digital, as cores possuem dimensões{" "}
              <strong>culturais, psicológicas e técnicas</strong>. Focaremos nos
              aspectos técnicos de como as cores são formadas e representadas em
              meios digitais, essenciais para quem trabalha com design e
              desenvolvimento web.
            </p>
            <h4>Cor-luz vs. Cor Pigmento</h4>
            <ul>
              <li>
                <strong>Cor-luz:</strong>
                <ul>
                  <li>
                    Formada pela emissão direta de luz (monitores, telas).
                    Utiliza a <strong>síntese aditiva</strong>, onde a soma das
                    cores primárias (vermelho, verde, azul) resulta em branco. É
                    o foco no design para ambientes digitais.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cor Pigmento:</strong>
                <ul>
                  <li>
                    Cores usadas em tintas. Utiliza a{" "}
                    <strong>síntese subtrativa</strong>, onde a sobreposição
                    resulta em preto.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Modelo RGB</h4>
            <ul>
              <li>
                <strong>Base:</strong>
                <ul>
                  <li>Vermelho (Red), Verde (Green), Azul (Blue).</li>
                </ul>
              </li>
              <li>
                <strong>Funcionamento:</strong>
                <ul>
                  <li>
                    Baseado na <strong>visão tricromática</strong> humana, que
                    percebe essas três cores primárias. A mistura dessas em
                    diferentes proporções gera todas as outras cores.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Representação:</strong>
                <ul>
                  <li>
                    Cada cor (R, G, B) tem uma variação de 0 a 255. A combinação
                    dessas variações permite criar mais de 16 milhões de cores.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Uso:</strong>
                <ul>
                  <li>
                    Principal modelo em editores de imagem (Photoshop,
                    Illustrator, Gimp, Inkscape) para criação de conteúdo para
                    web.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Modelo Hexadecimal</h4>
            <ul>
              <li>
                <strong>Representação:</strong>
                <ul>
                  <li>
                    Uma sequência de seis dígitos após o símbolo "#" (ex:
                    #RRGGBB). Cada dígito pode ser de 0 a 9 ou de A a F.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Estrutura:</strong>
                <ul>
                  <li>
                    Os dois primeiros dígitos representam a intensidade do
                    <strong>Vermelho</strong>.
                  </li>
                  <li>
                    Os dois do meio representam a intensidade do{" "}
                    <strong>Verde</strong>.
                  </li>
                  <li>
                    Os dois últimos representam a intensidade do{" "}
                    <strong>Azul</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Uso:</strong>
                <ul>
                  <li>
                    Comum em programação (HTML, CSS) para identificar cores de
                    forma mais concisa e facilitar a codificação.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conversão:</strong>
                <ul>
                  <li>
                    Programas de edição de imagem e sites especializados
                    facilitam a conversão entre RGB e hexadecimal.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Imagem Digital: Da Prevalência do Texto à Era da Imagem</h4>
            <p>
              No início da web (anos 90), o conteúdo era majoritariamente
              textual devido às limitações de organização de código e à baixa
              velocidade da internet. Comparativamente, a velocidade da internet
              evoluiu de 100 Mbps na década de 1990 para 301 Tbps em 2024.
              Atualmente, a <strong>imagem</strong> domina, com redes sociais
              como Instagram e TikTok centradas em conteúdo visual estático e
              animado.
            </p>
            <h4>Tipos de Imagens Digitais: Vetor vs. Raster</h4>
            <p>
              Existem dois tipos principais de imagens digitais:{" "}
              <strong>vetor e raster</strong>.
            </p>
            <h4>Imagens Vetoriais</h4>
            <ul>
              <li>
                <strong>Formação:</strong>
                <ul>
                  <li>
                    Criadas digitalmente a partir de{" "}
                    <strong>
                      dimensões geométricas e expressões matemáticas
                    </strong>{" "}
                    (pontos, linhas, curvas) baseadas em coordenadas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Características:</strong>
                <ul>
                  <li>
                    <strong>Redimensionáveis</strong> em qualquer escala sem
                    perda de qualidade (escalabilidade).
                  </li>
                  <li>
                    Linhas <strong>exatas</strong> e nítidas.
                  </li>
                  <li>
                    Arquivos <strong>leves</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Aplicações:</strong>
                <ul>
                  <li>
                    Layouts web, elementos visuais que precisam de
                    redimensionamento (menus, botões), logotipos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Limitações:</strong>
                <ul>
                  <li>Menor complexidade de cores, não ideais para fotos.</li>
                </ul>
              </li>
              <li>
                <strong>Softwares:</strong>
                <ul>
                  <li>Adobe Illustrator, Corel Draw, Inkscape.</li>
                </ul>
              </li>
            </ul>
            <h4>Imagens Raster (Bitmap)</h4>
            <ul>
              <li>
                <strong>Formação:</strong>
                <ul>
                  <li>
                    Criadas por uma grade de <strong>pontos (pixels)</strong>,
                    cada um com uma cor específica.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Características:</strong>
                <ul>
                  <li>Alta riqueza de detalhes e simulação da realidade.</li>
                  <li>Grande variedade de cores.</li>
                </ul>
              </li>
              <li>
                <strong>Desvantagens:</strong>
                <ul>
                  <li>
                    <strong>Perda de qualidade</strong> ao serem
                    redimensionadas.
                  </li>
                  <li>
                    Arquivos com <strong>maior peso</strong> devido à
                    complexidade de cada pixel.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Aplicações:</strong>
                <ul>
                  <li>Fotos e elementos com alta complexidade visual.</li>
                </ul>
              </li>
              <li>
                <strong>Conceito:</strong>
                <ul>
                  <li>Bitmap (mapa de bits).</li>
                </ul>
              </li>
            </ul>
            <p>
              Para a produção web, compreender as características técnicas de
              imagens vetoriais e raster é crucial para a criação e edição
              eficazes de conteúdo visual.
            </p>
            <h4>Qualidade e Resolução de Imagens Digitais</h4>
            <p>
              A <strong>qualidade</strong> de uma imagem raster é avaliada de
              duas formas:
            </p>
            <ol>
              <li>
                <strong>Conteúdo da Imagem:</strong>
                <ul>
                  <li>
                    Refere-se à qualidade da captação da foto, como nitidez,
                    riqueza de cores, foco e exposição. Uma foto bem capturada
                    tem melhor conteúdo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Aspecto Técnico:</strong>
                <ul>
                  <li>
                    Relaciona-se ao <strong>peso</strong> da imagem, medido pela{" "}
                    <strong>resolução</strong> e pela{" "}
                    <strong>quantidade de pixels</strong>.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Resolução e Pixels</h4>
            <ul>
              <li>
                <strong>Resolução:</strong>
                <ul>
                  <li>
                    É a dimensão da imagem, calculada pela sua{" "}
                    <strong>largura x altura</strong>
                    em pixels. Quanto maiores a largura e a altura, maior a
                    resolução.
                    <ul>
                      <li>
                        <strong>Imagens pequenas:</strong> Cerca de 150 pixels
                        de largura (ex: miniaturas).
                      </li>
                      <li>
                        <strong>Imagens médias:</strong> 800 a 1200 pixels de
                        largura para boa qualidade e detalhes.
                      </li>
                      <li>
                        <strong>Imagens grandes:</strong> 1920 pixels de
                        largura, comum em monitores.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Quantidade de Pixels (DPI):</strong>
                <ul>
                  <li>
                    Refere-se à densidade de pixels em uma área, medida em{" "}
                    <strong>Dots Per Inch (DPI)</strong>. Quanto maior o DPI,
                    mais detalhes e nitidez a imagem exibe.
                    <ul>
                      <li>
                        <strong>Web:</strong> 72 DPI é suficiente para
                        visualização em telas e garante carregamento rápido.
                      </li>
                      <li>
                        <strong>Impressão:</strong> Demanda maior quantidade de
                        pixels, sendo 300 DPI o padrão de qualidade.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              É crucial equilibrar a qualidade (DPI) com o tempo de
              carregamento, especialmente para conteúdos online. Para telas
              digitais, um DPI excessivo nem sempre melhora a qualidade
              percebida.
            </p>
            <h4>Compactação e Formatos de Imagens Raster</h4>
            <p>
              Imagens raster pesadas podem ser <strong>compactadas</strong> para
              carregarem mais rápido. Isso envolve redimensionar a imagem ou
              reduzir o número de pixels. Existem dois tipos de compactação:
            </p>
            <ul>
              <li>
                <strong>Lossy (com perda):</strong>
                <ul>
                  <li>
                    Reduz a qualidade da imagem ao remover informações que o
                    olho humano dificilmente percebe, como variações sutis de
                    cor. Quanto mais se comprime, maior a perda de qualidade.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Lossless (sem perda):</strong>
                <ul>
                  <li>
                    Minimiza o peso da imagem sem perda perceptível de qualidade
                    (não abordado diretamente no texto, mas implícito na
                    discussão sobre formatos).
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Formatos de Imagem Raster:</h4>
            <ul>
              <li>
                <strong>JPEG/JPG:</strong>
                <ul>
                  <li>
                    Popular, oferece boa compactação com qualidade razoável e
                    ampla gama de cores. Ideal para fotografias.
                  </li>
                </ul>
              </li>
              <li>
                <strong>PNG:</strong>
                <ul>
                  <li>
                    Similar ao JPEG em cores, mas com suporte a{" "}
                    <strong>transparência</strong>
                    (canal alpha).
                  </li>
                </ul>
              </li>
              <li>
                <strong>GIF:</strong>
                <ul>
                  <li>
                    Suporta <strong>animações</strong> e transparência, mas é
                    limitado a 256 cores. Melhor para imagens simples com cores
                    sólidas, não para fotos.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Conclusão sobre Elementos Visuais</h4>
            <p>
              O entendimento de <strong>elementos visuais</strong> como cores,
              linhas e pontos é crucial no web design. As cores não só adicionam
              apelo visual, mas também transmitem informações culturais e
              psicológicas, conferindo significado às peças digitais.
            </p>
            <ul>
              <li>
                <strong>Sites institucionais:</strong> Usar cores frias (ex:
                azul) para transmitir solidez e confiança.
              </li>
              <li>
                <strong>Identidade visual:</strong> Ampliar o uso das cores da
                marca para reforçar a identidade da empresa.
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default PrincipiosWebDesign;
