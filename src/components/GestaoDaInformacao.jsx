import { useState } from "react";

const GestaoDaInformacao = () => {
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
        <h2>GESTÃO DA INFORMAÇÃO</h2>
        <img src="/seta.png" onClick={visualizar} className={classeGirarImg} />
      </div>
      {abrir && (
        <>
          <div>
            <h3>Conceitos Iniciais</h3>
            <p>
              Hoje, a informação é o <strong>principal ativo</strong> de
              qualquer organização. Gerir a informação correta no momento certo
              pode significar a diferença entre sucesso e fracasso. A
              necessidade de informação sempre existiu e foi consolidada pela
              evolução da tecnologia, que permite o armazenamento, processamento
              e uso mais rápido e eficiente das informações.
            </p>
            <p>
              Além da informação, o <strong>conhecimento</strong> também se
              tornou crucial para as empresas, conforme Strauhs et al (2012).
              Estamos em transição da Sociedade Industrial para a Sociedade da
              Informação e, mais adiante, para a{" "}
              <strong>Sociedade do Conhecimento e da Colaboração</strong>. A
              inovação é constante para a competitividade, e a informação e o
              conhecimento são fundamentais em todas as etapas desse processo,
              desde a geração de ideias até a gestão de projetos, levando ao{" "}
              <strong>aprendizado organizacional</strong>.
            </p>
            <p>
              Para profissionais de T.I., a{" "}
              <strong>gestão da informação</strong> é essencial para agregar
              valor às empresas. Planejar o armazenamento de dados para
              facilitar seu uso e garantir a{" "}
              <strong>segurança dos dados</strong> são grandes diferenciais. As
              competências em gestão eficiente da informação são altamente
              procuradas.
            </p>
            <h4>Sistema</h4>
            <p>
              A gestão da informação é um tema complexo, envolvendo a
              organização, armazenamento e uso de dados para agregar valor,
              apoiar a gestão e a tomada de decisão. Entenderemos como sistemas,
              dados, informação e conhecimento se relacionam com a gestão da
              informação em todas as áreas de negócio.
            </p>
            <p>Um sistema, de forma geral, é definido como:</p>
            <blockquote>
              <q>
                É um conjunto de elementos interdisciplinares, ou um todo
                organizado, ou partes que interagem formando um todo unitário e
                complexo.
              </q>
              <cite>- Stair e Reynolds (2006, P.7)</cite>
            </blockquote>
            <p>
              Assim, uma empresa pode ser vista como um sistema, com pessoas,
              áreas, tecnologias e processos interagindo para atingir objetivos.
              A informação também pode ser gerida como um sistema, necessitando
              de organização para agregar valor.
            </p>
            <h4>Classificação de Sistemas:</h4>
            <ul>
              <li>
                <h4>Simples ou complexo:</h4>
                <ul>
                  <li>Depende dos componentes e suas interações.</li>
                </ul>
              </li>
              <li>
                <h4>Aberto ou fechado:</h4>
                <ul>
                  <li>Depende da interação com ambientes externos.</li>
                </ul>
              </li>
              <li>
                <h4>Estável ou dinâmico:</h4>
                <ul>
                  <li>Depende da frequência de mudanças.</li>
                </ul>
              </li>
              <li>
                <h4>Permanente ou temporário:</h4>
                <ul>
                  <li>Depende da sua disponibilidade de uso.</li>
                </ul>
              </li>
            </ul>
            <p>
              No cenário de negócios atual, que exige respostas rápidas, os
              sistemas de informação precisam de <strong>tecnologia</strong>{" "}
              para se manterem atualizados e ágeis. Além de um bom planejamento
              de dados, é preciso usar técnicas que forneçam informações de
              forma rápida e permitam evoluções constantes. A capacidade de uma
              organização de acompanhar a evolução do mundo para se manter
              competitiva está intrinsecamente ligada às suas informações.
            </p>
            <p>
              O <strong>sistema da informação</strong> é um conjunto de
              elementos organizados que fornecem informações relevantes aos
              gestores.
            </p>
            <h4>Um sistema da informação pode ser entendido como:</h4>
            <ul>
              <li>Entrada de dados;</li>
              <li>Processamento de informações;</li>
              <li>Saída de conhecimento.</li>
            </ul>
            <h4>Elementos de um Sistema de Informação</h4>
            <p>
              Para melhor compreensão, é fundamental distinguir{" "}
              <strong>dados, informação e conhecimento</strong>, e como um dado
              evolui até se tornar conhecimento.
            </p>
            <h4>O que é dado?</h4>
            <p>
              É a unidade mais básica de um sistema de informação, uma
              observação ou registro primário de um fato.
            </p>
            <blockquote>
              <q>
                Dados são fatos brutos, que não foram organizados, processados,
                relacionados, avaliados ou interpretados, representando apenas
                partes isoladas de eventos, situações ou ocorrências. Constituem
                as unidades básicas a partir das quais informações poderão ser
                elaboradas ou obtidas
              </q>
              <cite>- Côrtes (2008, P. 26)</cite>
            </blockquote>
            <p>
              Dados são unidades básicas sem tratamento, relacionamento,
              contexto ou significado. Em projetos de software, dados são
              organizados em bancos de dados (tabelas) para armazenamento e
              acesso. Por exemplo, em uma pizzaria, a lista de nomes de
              clientes, endereços, telefones, pedidos, datas, valores e formas
              de pagamento são os <strong>dados</strong>. Desorganizados, esses
              dados não fazem sentido; para serem úteis, precisam ser
              transformados em informação.
            </p>
            <h4>O que é informação?</h4>
            <ul>
              <li>Dados organizados que permitem a interpretação;</li>
              <li>É utilizada por gestores em tomadas de decisão.</li>
            </ul>
            <p>
              A <strong>informação</strong> é o dado organizado, contextualizado
              e que permite interpretação. Quando dados são relacionados e
              organizados, eles se tornam informação relevante para o negócio.
              Conforme Strauhs et al (2012), informação não é apenas uma coleção
              de dados, mas dados processados em um contexto específico para
              resolver um problema. É um conjunto de dados com significado e
              relevância para a tomada de decisão gerencial.
            </p>
            <p>
              Voltando ao exemplo da pizzaria, ao pesquisar o cliente Paulo no
              sistema, a pizzaria acessa informações como endereço, telefone,
              pedidos anteriores, valores e formas de pagamento. Essa
              organização dos dados os transforma em <strong>informação</strong>
              , permitindo a entrega correta da pizza. A desorganização dos
              dados poderia levar a erros na entrega.
            </p>
            <p>
              A informação é vital para o funcionamento da pizzaria. Para ser
              competitiva, aumentar vendas e fidelizar clientes, a pizzaria
              precisa ir além, utilizando o conhecimento.
            </p>
            <h4>O que é conhecimento?</h4>
            <p>
              O <strong>conhecimento</strong> é o nível mais elevado na
              hierarquia da gestão da informação, vindo após dado e informação.
            </p>
            <blockquote>
              <q>
                É a consciência e o entendimento de um conjunto de informações e
                formas de torná-las úteis para apoiar uma tarefa específica ou
                tomar uma decisão.
              </q>
              <cite>- Stair e Reynolds (2006, P.5)</cite>
            </blockquote>
            <p>
              Conhecimento é a capacidade de usar as informações para otimizar o
              desempenho do negócio e a competitividade, proporcionando melhores
              experiências aos clientes. Isso é visto no{" "}
              <strong>marketing digital</strong>, que estuda as preferências de
              compra para oferecer produtos personalizados, algo inviável sem
              uma boa gestão da informação e sistemas de informação baseados em
              tecnologias.
            </p>
            <p>
              No exemplo da pizzaria, Seu José, ao perceber que Paulo não compra
              há algum tempo, pesquisa seus pedidos anteriores e descobre sua
              preferência por pizza portuguesa. Com esse{" "}
              <strong>conhecimento</strong>, Seu José pode enviar uma oferta
              especial por WhatsApp, estimulando Paulo a fazer um novo pedido.
              Esse é um exemplo de como o conhecimento das preferências dos
              clientes pode impulsionar vendas, demonstrando o poder do
              conhecimento para alavancar um negócio. O objetivo do conhecimento
              é permitir a análise de padrões de consumo para oferecer novos
              produtos e criar campanhas de vendas direcionadas.
            </p>
            <h4>Hierarquia da gestão da informação:</h4>
            <p>Essa transformação é um ciclo contínuo:</p>
            <ol>
              <li>
                <h4>Dados:</h4>
                <ul>
                  <li>
                    Armazenados, organizados e avaliados para se tornarem{" "}
                    <strong>informação</strong>;
                  </li>
                </ul>
              </li>
              <li>
                <h4>Informações:</h4>
                <ul>
                  <li>
                    Organizadas, disseminadas e usadas na tomada de decisão para
                    se tornarem <strong>conhecimento</strong>;
                  </li>
                </ul>
              </li>
              <li>
                <h4>Conhecimento:</h4>
                <ul>
                  <li>
                    Pode gerar a necessidade de novos dados, fechando um{" "}
                    <strong>ciclo completo</strong>.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Tipos de informação e conhecimento</h4>
            <p>
              Entendidos os sistemas de informação, seus elementos e
              características, agora abordaremos os diferentes tipos de
              informação e conhecimento.
            </p>
            <p>
              Os gestores dependem da informação para gerenciar os negócios. Por
              isso, a informação precisa ser estruturada para que todos os
              departamentos possam tomar decisões assertivas, tendo acesso às
              informações adequadas para cada nível de decisão.
            </p>
            <p>Os tipos de informação podem ter diferentes níveis:</p>
            <ul>
              <li>
                <h4>Operacional:</h4>
                <ul>
                  <li>
                    Informações diárias para decisões operacionais. Exemplo:
                    "Quantas peças precisam ser produzidas hoje?"
                  </li>
                </ul>
              </li>
              <li>
                <h4>Tática:</h4>
                <ul>
                  <li>
                    Informações para decisões gerenciais. Exemplo: "Em dezembro,
                    com baixa produção, podemos planejar as férias de metade da
                    equipe."
                  </li>
                </ul>
              </li>
              <li>
                <h4>Estratégicas:</h4>
                <ul>
                  <li>
                    Informações para decisões executivas/estratégicas pela alta
                    gestão. Exemplo: "Para aumentar o faturamento em 20%,
                    precisamos conquistar cinco novos clientes com demandas
                    mínimas de R$ 100.000,00/mês."
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Tipos de informação (Formal ou Informal)</h4>
            <p>As informações podem ser formais ou informais:</p>
            <ul>
              <li>
                <h4>Formais:</h4>
                <ul>
                  <li>
                    Origem confiável, como jornais, revistas ou bases de dados
                    da própria empresa.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Informais:</h4>
                <ul>
                  <li>
                    Origem não confiável, mas podem ser relevantes para uma
                    tomada de decisão assertiva.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Independentemente do tipo, a informação precisa ser{" "}
              <strong>estruturada e acessível</strong>. Informações não
              padronizadas não servem para fins de gestão. É crucial organizar a
              gestão de informações, formais e informais, para melhor apoiar a
              organização.
            </p>
            <h4>Tipos de conhecimento</h4>
            <p>
              Organizações maduras utilizam melhor suas informações e geram
              conhecimento a partir delas. Esse conhecimento pode estar em
              bancos de dados ou na experiência dos colaboradores.
            </p>
            <p>
              De acordo com Nonaka e Takeuchi (1997), o conhecimento pode ser
              dividido em tácito e explícito.
            </p>
            <ul>
              <li>
                <h4>Tácito:</h4>
                <ul>
                  <li>
                    Conhecimento individual, presente na "cabeça" dos
                    profissionais e difícil de gerenciar.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Explícito:</h4>
                <ul>
                  <li>
                    Conhecimento disponível e acessível a qualquer profissional
                    da organização, por meio de treinamentos, manuais e
                    procedimentos.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              O grande desafio é transformar o{" "}
              <strong>conhecimento tácito em conhecimento explícito</strong>,
              dependendo da capacidade das pessoas de transmiti-lo. Quando o
              conhecimento é compartilhado, a organização se torna mais rápida e
              assertiva na tomada de decisão, o que é crucial para o sucesso em
              um mundo competitivo.
            </p>
            <p>
              A gestão do conhecimento é de suma importância e deve ser tratada
              com cuidado, utilizando tecnologia adequada.
            </p>
            <blockquote>
              <q>
                As tecnologias da informação (intranet, portais colaborativos,
                gestão eletrônica de documentos, entre outras), por sua vez,
                formam o arcabouço necessário para reunir e armazenar
                informações e experiências que dão suporte às ações e práticas
                de criação gerenciais
              </q>
              <cite>Strauhs Et Al (2012, P.26)</cite>
            </blockquote>
            <h4>Movimento do dado</h4>
            <p>
              A evolução do dado até a geração de conhecimento exige uma análise
              detalhada do que se espera desses dados, como serão usados e para
              quê. Essa análise permite estruturar o dado para facilitar
              armazenamento e, principalmente, acesso.
            </p>
            <p>
              O primeiro movimento é a organização e significação dos dados,
              transformando-os em informação útil, o que requer a definição da
              utilidade do dado.
            </p>
            <h4>Categorização</h4>
            <ul>
              <li>Demanda e análise matemática ou estatística dos dados;</li>
              <li>Possibilita a síntese/condensação e análise dos dados.</li>
            </ul>
            <p>
              A informação pode ser transformada em conhecimento, exigindo que a
              estruturação dos dados seja completa e que eles estejam
              organizados para gerar o conhecimento necessário. Para um
              conhecimento efetivo, as informações devem ser comparáveis, gerar
              conclusões e permitir conexões fáceis com novas informações.
            </p>
            <p>
              O conhecimento, muitas vezes, demanda novas informações, gerando
              um fluxo inverso: o conhecimento exige uma nova informação que,
              por sua vez, necessita de novos dados. Esse é um movimento
              constante, que acompanha a inovação e reinventa as organizações,
              exigindo que os sistemas de informação evoluam rapidamente para
              apoiar o crescimento dos negócios.
            </p>
            <p>
              Podemos resumir o fluxo de transformação do dado até virar
              conhecimento, e o fluxo inverso, do conhecimento demandando novos
              dados, segue uma hierarquia: <strong>Dados</strong> (armazenados,
              organizados, avaliados) se transformam em{" "}
              <strong>Informação</strong> (organizada, disseminada, usada na
              tomada de decisão), que por sua vez gera{" "}
              <strong>Conhecimento</strong> (que pode gerar necessidade de novos
              dados, formando um ciclo completo).
            </p>
            <p>
              A experiência dos gestores no uso das informações torna o fluxo
              mais eficiente, acelerando a transformação de dados em
              conhecimento, que, com base nas necessidades de negócio,
              realimenta a base de dados com novos dados para futuras análises e
              conhecimentos. É um ciclo contínuo que apoia o negócio e permite o
              crescimento da organização.
            </p>
            <p>
              Na Sociedade da Informação, todas as organizações precisam de
              informações bem estruturadas e relevantes para gerar conhecimento,
              permitindo <strong>vantagem competitiva e valor agregado</strong>.
            </p>
            <p>
              A informação de uma organização é seu{" "}
              <strong>principal bem</strong>, superando até mesmo os bens
              materiais. A estratégia organizacional é refletida nas
              informações, que devem ser armazenadas adequadamente,
              disponibilizadas apenas para acesso autorizado e protegidas contra
              perdas e acessos indevidos. A gestão da informação e do
              conhecimento é, portanto, um tema{" "}
              <strong>importante, extenso e complexo</strong>, que será
              aprofundado para compreender suas implicações nas organizações.
            </p>
          </div>
          <div>
            <h3>Sistemas de Informação: Navegando na Era Digital</h3>
            <p>
              Saímos da Sociedade Industrial, vivemos intensamente a Sociedade
              da Informação, e caminhamos rapidamente para a Sociedade do
              Conhecimento e da Colaboração. Essa jornada crescente exige que as
              organizações tenham cada vez mais informações disponíveis e bem
              geridas para o sucesso dos negócios. Os indivíduos, diariamente,
              utilizam e disponibilizam milhares de informações por meio de
              compras online, redes sociais, no trabalho ou na universidade. As
              organizações seguem o mesmo movimento, gerindo e disponibilizando
              informações próprias, de concorrentes, fornecedores, colaboradores
              e clientes. Esse volume crescente exige uma gestão eficiente e
              segura.
            </p>
            <p>
              <strong>OBS:</strong> A informação é inevitável na vida das
              organizações, por isso é fundamental aprender a geri-la, a
              entender os benefícios e os problemas gerados pelo excesso dela.
              Para compreender melhor sobre a sociedade da informação, é
              recomendado buscar conteúdos que discutam a origem desse termo e
              como lidar com a informação presente em todos os momentos da nossa
              vida.
            </p>
            <h4>Diferença entre Técnica e Tecnologia</h4>
            <p>
              Antes de aprofundar nos sistemas de informação, é importante
              relembrar dois conceitos que, embora por vezes usados como
              sinônimos, possuem distinções cruciais em nosso contexto:{" "}
              <strong>Técnica</strong> e<strong>Tecnologia</strong>.
            </p>
            <ul>
              <li>
                <h4>Técnica:</h4>
                <ul>
                  <li>
                    É uma forma específica de executar determinadas tarefas ou
                    processos. Consiste em um conjunto de atividades utilizadas
                    para manipular informações e gerar resultados. É o "como
                    fazer".
                  </li>
                </ul>
              </li>
              <li>
                <h4>Tecnologia:</h4>
                <ul>
                  <li>
                    Pode ser entendida como a técnica evoluída, formalizada e
                    sistematizada. É um conjunto organizado de conhecimento e
                    ferramentas que é empregado na produção e comercialização de
                    produtos e serviços, utilizando a informação disponível em
                    seu processo de criação. É o "conjunto de ferramentas e
                    conhecimentos que otimizam o fazer".
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O que são Sistemas de Informação (SI)?</h4>
            <p>
              Um <strong>Sistema de Informação</strong> pode ser tanto
              automatizado (apoiado em Tecnologia da Informação - TI) quanto
              manual. Ele abrange pessoas e processos organizados para coletar,
              armazenar, processar, transmitir e disseminar dados que são
              transformados em informação. Essa informação é, então, utilizada
              para apoiar a tomada de decisão dos usuários.
            </p>
            <p>
              Em essência, um Sistema de Informação é um conjunto de elementos
              inter-relacionados que, a partir de uma
              <strong>entrada de dados brutos</strong> e seu
              <strong>processamento</strong>, geram como
              <strong>saída uma informação relevante</strong> para a gestão de
              uma organização.
            </p>
            <p>
              Quanto mais valor uma informação agregar ao negócio por meio de
              uma tomada de decisão assertiva, maior será o seu valor para as
              organizações. Para isso, a informação precisa ter
              <strong>qualidade, ser clara e precisa</strong>.
            </p>
            <p>
              As informações podem ser aplicadas de diversas formas para
              impulsionar um negócio:
            </p>
            <ul>
              <li>
                <strong>Como fatores de apoio à decisão:</strong> Reduzem a
                incerteza e minimizam os riscos em uma tomada de decisão.
              </li>
              <li>
                <strong>Como fatores de produção:</strong> São fontes para a
                criação de novos produtos ou para a evolução de produtos já
                existentes.
              </li>
              <li>
                <strong>Como fatores de sinergia ou contribuição:</strong> Podem
                ser compartilhadas entre diferentes departamentos,
                proporcionando intercâmbio de ideias e objetivos.
              </li>
              <li>
                <strong>Como fatores de comportamento:</strong> Influenciam o
                comportamento das pessoas dentro e fora das organizações.
              </li>
            </ul>
            <p>
              Atualmente, para sobreviver às novas demandas de mercado, as
              empresas, por serem sistemas abertos, devem ser flexíveis o
              suficiente para moldar seus processos internos rapidamente, sob
              pena de perder competitividade e clientes. Tais processos são
              definidos com base nos sistemas e na tecnologia da informação de
              que dispõem. É fundamental que elas "ouçam" o mercado e os
              clientes, pois precisam garantir que estejam preparadas para lidar
              com essa dinâmica.
            </p>
            <h4>As Dimensões de um Sistema de Informação</h4>
            <p>
              Os sistemas de informação são construídos sobre três dimensões
              interdependentes: a organizacional, a das pessoas e a da
              tecnologia. Para serem efetivos, eles precisam respeitar a cultura
              da organização, atender às necessidades das pessoas e ter o
              suporte tecnológico adequado.
            </p>
            <h4>Definição de Organização</h4>
            <p>
              Antes de detalhar as dimensões, vamos entender a organização em
              dois sentidos fundamentais:
            </p>
            <ul>
              <li>
                <h4>Institucional:</h4>
                <ul>
                  <li>
                    Trata-se de um grupo de pessoas que trabalham em conjunto
                    com um objetivo comum.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Instrumental:</h4>
                <ul>
                  <li>
                    Refere-se à forma como as tarefas, processos e procedimentos
                    são distribuídos e estruturados na empresa.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Além disso, uma organização está dividida em
              <strong>níveis hierárquicos ou decisórios</strong>: o operacional,
              o tático e o estratégico. Compreendido tudo isso, podemos então
              detalhar as dimensões de um sistema de informação:
            </p>
            <ul>
              <li>
                <h4>Organizacional:</h4>
                <ul>
                  <li>
                    É crucial garantir que o sistema de informação respeite o
                    funcionamento da empresa, oferecendo acesso e entregando a
                    informação específica e necessária para cada nível
                    decisório.
                  </li>
                  <li>
                    É essencial assegurar que a{" "}
                    <strong>cultura organizacional</strong>, suas regras e
                    valores (escritos ou não), sejam considerados para garantir
                    a segurança e o uso adequado dos dados.
                  </li>
                  <li>
                    Os sistemas devem fornecer informações de valor para todos
                    os níveis, não apenas o estratégico, pois o nível
                    operacional também deve ser alimentado com informações
                    relevantes.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Pessoas:</h4>
                <ul>
                  <li>
                    Essa dimensão foca em atender às necessidades e desejos dos
                    usuários, sejam eles colaboradores ou clientes.
                  </li>
                  <li>
                    Envolve treinar os colaboradores para que tenham as
                    habilidades adequadas para desenvolver e manipular os
                    sistemas de informação.
                  </li>
                  <li>
                    Para os clientes, é fundamental que o sistema forneça as
                    informações necessárias para que suas demandas sejam
                    atendidas.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Tecnologia:</h4>
                <ul>
                  <li>
                    É a base de apoio ao sistema de informação, definindo o que
                    será utilizado. Isso inclui o <strong>software</strong> mais
                    adequado para processar as informações exigidas pelo
                    funcionamento da organização e o <strong>hardware</strong>
                    que dará suporte a esse software e ao volume de informações
                    e processamento existentes.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Um sistema de informação deve dar conta dessas três dimensões para
              ter capacidade de atender à organização em todas as suas
              necessidades.
            </p>
            <h4>Classificação dos Sistemas de Informação por Tipo</h4>
            <p>
              Além das dimensões, os sistemas de informação são classificados
              por tipo, e cada um é projetado para atender a diferentes
              necessidades dentro da hierarquia organizacional:
            </p>
            <ul>
              <li>
                <h4>Operacional ou de Processamento de Transações (SPT):</h4>
                <ul>
                  <li>
                    Cuida das operações do dia a dia da organização e das
                    transações rotineiras, monitorando as atividades básicas dos
                    diversos departamentos.
                  </li>
                  <li>
                    <q>
                      Tem por objetivo manipular os dados básicos da organização
                      e armazená-los, de modo a ficarem disponíveis para o nível
                      tático da organização
                    </q>
                    <cite> - Perini, Scaramuzza e Brunetta (2010, P. 27)</cite>
                  </li>
                </ul>
              </li>
              <li>
                <h4>De Informação Gerencial (SIG):</h4>
                <ul>
                  <li>
                    Atende ao nível gerencial das organizações, transformando os
                    dados dos sistemas operacionais em informações que facilitam
                    a tomada de decisão.
                  </li>
                  <li>
                    Normalmente gera relatórios com períodos predefinidos
                    (diário, semanal, mensal, etc.) que demonstram o
                    funcionamento da empresa em seus diversos departamentos.
                    Essas informações apoiam a decisão ao fornecerem dados
                    claros e precisos do desempenho organizacional, permitindo
                    identificar pontos de melhoria para que os objetivos
                    estratégicos sejam atingidos, e tornando possível prever o
                    futuro com base em comportamentos do passado.
                  </li>
                </ul>
              </li>
              <li>
                <h4>De Apoio à Decisão (SAD):</h4>
                <ul>
                  <li>
                    Possui maior poder de análise do que o SIG, permitindo
                    interação com os usuários para criar modelos de solução de
                    problemas.
                  </li>
                  <li>
                    Utiliza informações dos sistemas operacional e gerencial,
                    além de dados externos, e está preparado para examinar
                    grandes volumes de informações. É comum que use ferramentas
                    como <strong>Business Intelligence (BI)</strong> para
                    oferecer um processamento inteligente das informações
                    existentes, apoiando de forma efetiva a tomada de decisão.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Como a Tecnologia da Informação (TI) Apoia Esses Sistemas</h4>
            <h4>Definição de TI:</h4>
            <p>
              A <strong>Tecnologia da Informação</strong> é um conjunto de
              atividades e soluções providas por recursos computacionais. Seus
              objetivos são a produção, o armazenamento, a transmissão, o
              acesso, a segurança e o uso das informações. O foco principal da
              TI é cuidar das informações das organizações, sendo uma área
              essencial para o bom desempenho corporativo.
            </p>
            <p>
              Para resolver a complexidade do volume de informações exigidas e
              alimentar todos os níveis hierárquicos, as organizações utilizam
              sistemas integrados. Três deles são bastante conhecidos e
              amplamente utilizados:
            </p>
            <ul>
              <li>
                <h4>Enterprise Resource Planning (ERP):</h4>
                <ul>
                  <li>
                    Integra o planejamento, o gerenciamento e o uso de todos os
                    recursos da organização de forma centralizada, facilitando o
                    fluxo de informação entre todos os departamentos. É dividido
                    em módulos interdependentes, cada um responsável por
                    fornecer informações para determinado setor da empresa.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Customer Relationship Management (CRM):</h4>
                <ul>
                  <li>
                    Consolida informações para atender às demandas dos clientes
                    e gerenciar o relacionamento com eles. Seu foco é processar
                    informações necessárias para conquistar e manter clientes.
                    Normalmente, o CRM se apoia em um ERP, que possui as
                    informações requeridas para uma gestão adequada dos
                    clientes.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Supply Chain Management (SCM):</h4>
                <ul>
                  <li>
                    Consolida informações relacionadas à cadeia de suprimentos.
                    Apoia a logística da organização, facilitando o
                    gerenciamento de fornecedores e do fluxo das mercadorias
                    desde o recebimento das matérias-primas até a entrega do
                    produto final aos clientes.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>
              Características das Formas de Troca de Informações no Cenário
              Digital
            </h4>
            <p>
              Com a era digital e o incremento dos negócios eletrônicos, os
              sistemas de informação precisam se adaptar a uma nova realidade de
              troca de informações. Nossa vida mudou completamente — e em uma
              velocidade alucinante — assim como a forma de fornecer informações
              para as organizações. Cada vez mais as organizações se apropriam
              da intranet e extranet em seus negócios, além do uso cada vez mais
              intenso da internet no comércio eletrônico. Vamos entender as
              características de cada uma:
            </p>
            <ul>
              <li>
                <h4>Intranet:</h4>
                <ul>
                  <li>
                    É uma rede privada e corporativa que utiliza padrões da
                    internet e todos os serviços disponíveis nela, porém, sem
                    estar acessível a pessoas externas à organização. Seus
                    objetivos incluem aumentar a produtividade ao fornecer
                    informações mais rapidamente que a internet pública,
                    permitir a transferência de conhecimento entre diferentes
                    departamentos (mesmo em localidades remotas, sem necessidade
                    de presença física) e possibilitar acesso rápido à base de
                    dados para tomada de decisão, alimentada por todos os
                    profissionais da organização.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Extranet:</h4>
                <ul>
                  <li>
                    É uma rede que conecta a própria intranet de uma organização
                    com as de seus clientes, fornecedores ou parceiros de
                    negócio. O objetivo é a troca de informações estratégicas de
                    maneira mais rápida e segura, pois pessoas de fora do grupo
                    de organizações pertencentes à extranet não possuem acesso
                    facilitado à rede.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Internet:</h4>
                <ul>
                  <li>
                    É a rede mundial, criada para disponibilizar informações de
                    forma pública. É preciso ter muito cuidado com a segurança
                    do que é obtido ou que trafega por ela, dada a sua natureza
                    aberta e global.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Com o crescimento dos negócios digitais, os sistemas de informação
              tornaram-se mais complexos, exigindo uma arquitetura mais robusta,
              maior capacidade de processamento e a necessidade de lidar com um
              volume exorbitante de informações em cada vez menos tempo, sem
              falar no aumento da preocupação com a segurança dos dados. Toda
              essa inovação e evolução fez crescer a dependência da TI para
              garantir um sistema de informação eficiente e adequado às
              organizações.
            </p>
            <p>
              Como estudamos nesta aula, os sistemas de informação podem ou não
              depender de tecnologia; porém, para suportar a velocidade e o
              grande volume de informações que as organizações demandam para
              gerir os negócios, percebemos cada vez mais a dependência da TI
              para o armazenamento, processamento e disponibilização das
              informações.
            </p>
          </div>{" "}
          <div>
            <h3>A Gestão da Informação</h3>
            <p>
              O uso eficaz da informação disponível é uma
              <strong>
                condição vital para o sucesso de qualquer organização
              </strong>
              . Por isso, devemos estar preparados para fazer uma
              <strong>gestão eficiente dessas informações</strong>, pois elas
              apoiam diretamente a tomada de decisão das organizações.
            </p>
            <h4>O que significa estar vivendo na Sociedade da Informação?</h4>
            <p>
              Atualmente, o volume de informações que circula dentro das
              empresas está cada vez maior. É fundamental, portanto, fazer uma
              <strong>gestão eficiente dessas informações</strong> para que seja
              possível armazená-las e acessá-las sempre que for preciso. Na área
              de Tecnologia da Informação (T.I.), a Gestão da Informação é
              crucial para
              <strong>
                alimentar todas as demais áreas da empresa com dados relevantes,
                organizados e de fácil acesso
              </strong>
              . Um profissional de T.I. com conhecimento em Gestão da Informação
              é capaz de
              <strong>
                catalogar, analisar, armazenar, organizar e distribuir as
                informações
              </strong>
              , mesmo em grandes volumes.
            </p>
            <h4>IMPORTANTE:</h4>
            <p>
              A informação é um <strong>ativo valioso da empresa</strong>, e
              precisa ser cuidada e tratada de forma adequada para que funcione
              bem. Ela também é um <strong>recurso essencial</strong>, que deve
              ser gerenciado para estar sempre disponível, atendendo às
              necessidades da organização.
            </p>
            <h4>Gestão Adequada das Informações</h4>
            <h4>A gestão adequada da informação depende de:</h4>
            <ul>
              <li>
                <strong>Rotinas bem estabelecidas</strong>;
              </li>
              <li>
                <strong>Pessoas especializadas</strong> e capacitadas;
              </li>
              <li>
                <strong>Ferramentas adequadas</strong> para o tratamento e
                armazenamento.
              </li>
            </ul>
            <p>
              Logo, a gestão da informação é um processo organizacional contínuo
              que <strong>precisa ser muito bem gerenciado</strong>.
            </p>
            <h4>O Fluxo da Informação é composto por:</h4>
            <ul>
              <li>
                <strong>Pessoas</strong>: os usuários e geradores da informação;
              </li>
              <li>
                <strong>Fontes de informação</strong>: de onde os dados são
                coletados;
              </li>
              <li>
                <strong>Tecnologias utilizadas</strong>: sistemas e softwares
                que processam a informação;
              </li>
              <li>
                <strong>Produtos e serviços</strong>: como a informação é
                entregue e utilizada.
              </li>
            </ul>
            <p>
              Assim, conseguimos entender como a informação e o conhecimento são
              obtidos, distribuídos e utilizados por toda a organização.
            </p>
            <h4>Para uma Gestão Eficiente da Informação, são necessários:</h4>
            <ul>
              <li>
                <strong>Processos bem definidos</strong>;
              </li>
              <li>
                <strong>Pessoas bem treinadas e comprometidas</strong> com a
                qualidade e o uso da informação.
              </li>
            </ul>
            <p>Isso gera, como resultado:</p>
            <ul>
              <li>
                <strong>Disciplina no armazenamento correto</strong> dos dados;
              </li>
              <li>
                <strong>Acesso seguro</strong> às informações;
              </li>
              <li>
                <strong>Disponibilização no momento correto</strong> e para as
                pessoas certas.
              </li>
            </ul>
            <h4>O Passo a Passo da Gestão da Informação envolve:</h4>
            <ul>
              <li>
                <strong>Entender as necessidades de informação</strong> das
                diversas áreas da organização;
              </li>
              <li>
                <strong>Analisar e processar</strong> essas informações;
              </li>
              <li>
                <strong>
                  Disponibilizá-las para resolver os problemas organizacionais
                </strong>
                .
              </li>
            </ul>
            <p>
              De acordo com Davenport (1998), a gestão da informação pode ser
              organizada nas seguintes fases:
            </p>
            <ul>
              <li>
                <strong>Determinação das exigências de informação</strong>;
              </li>
              <li>
                <strong>Coleta da informação</strong>;
              </li>
              <li>
                <strong>Distribuição da informação</strong>;
              </li>
              <li>
                <strong>Utilização da informação</strong>.
              </li>
            </ul>
            <p>
              Já segundo Choo (2006), em um detalhamento mais aprofundado com a
              gestão do conhecimento, temos:
            </p>
            <ul>
              <li>
                <strong>Necessidade da informação</strong>;
              </li>
              <li>
                <strong>Aquisição da informação</strong>;
              </li>
              <li>
                <strong>Organização e armazenamento da informação</strong>;
              </li>
              <li>
                <strong>Produtos e serviços da informação</strong>;
              </li>
              <li>
                <strong>Distribuição da informação</strong>;
              </li>
              <li>
                <strong>Utilização da informação</strong>;
              </li>
              <li>
                <strong>Comportamento adaptativo</strong>.
              </li>
            </ul>
            <h4>Vamos compreender o objetivo de cada uma dessas fases:</h4>
            <ul>
              <li>
                <strong>Levantamento das informações necessárias</strong> para
                cada área da organização é o ponto de partida;
              </li>
              <li>
                É crucial <strong>conhecer o negócio</strong> para gerir
                informações sobre clientes, fornecedores, concorrentes e tudo o
                mais que a empresa precisa para funcionar;
              </li>
              <li>
                É preciso saber <strong>quem precisa da informação</strong> e
                quais são as <strong>informações essenciais</strong>;
              </li>
              <li>
                A <strong>qualidade da informação</strong> deve ser avaliada
                para garantir que está adequada à necessidade;
              </li>
              <li>
                É preciso
                <strong>identificar onde a informação está localizada</strong>;
              </li>
              <li>
                É fundamental saber
                <strong>
                  por que e como as informações devem ser coletadas
                </strong>
                .
              </li>
            </ul>
            <p>
              Quanto mais crítico for o armazenamento das informações
              essenciais, melhor será o sistema de Gestão da Informação. A
              <strong>qualidade da informação é muito importante</strong> para
              uma tomada de decisão assertiva.
            </p>
            <h4>Fatores que Atrapalham a Boa Gestão da Informação:</h4>
            <ul>
              <li>
                <strong>Falta de exatidão</strong> nos dados;
              </li>
              <li>
                <strong>Formato errado</strong> ou inadequado;
              </li>
              <li>
                <strong>Falta de confiabilidade</strong> na fonte ou no dado;
              </li>
              <li>
                <strong>Dificuldade de utilização</strong> e acesso.
              </li>
            </ul>
            <p>
              Tudo isso pode gerar <strong>sérios problemas</strong> para as
              organizações.
            </p>
            <p>
              As informações podem ser obtidas tanto dentro das organizações
              quanto fora delas. As informações internas precisam ser bem
              divulgadas para que não se perca tempo buscando o que já está
              disponível. As pessoas que buscam informações externas precisam
              ter <strong>certeza e senso de responsabilidade</strong>, agindo
              de maneira rápida, direta e confiável, a fim de agilizar a Gestão.
            </p>
            <blockquote>
              <q>
                A vantagem competitiva surge da habilidade de identificar
                atores, assuntos e fontes de informação relevantes que permitam
                a compreensão das implicações das mudanças ambientais
                anunciadas.
              </q>
              <cite>Strauhs et al (2012, P. 27)</cite>
            </blockquote>
            <h4>Podem Mudar a Necessidade de Informação:</h4>
            <ul>
              <li>
                <strong>Mudanças econômicas</strong>;
              </li>
              <li>
                <strong>Evoluções no mercado</strong>;
              </li>
              <li>
                <strong>Demanda dos clientes</strong>;
              </li>
              <li>
                <strong>Mudanças sociais ou políticas</strong>.
              </li>
            </ul>
            <p>
              Ou seja, a gestão da informação é algo
              <strong>sistêmico e dinâmico</strong>, que não se encerra, mas
              está em constante evolução.
            </p>
            <h4>Organização e Armazenamento das Informações</h4>
            <p>
              A forma de organizar e armazenar a informação deve ser
              <strong>flexível</strong>, para atender às necessidades
              específicas de seus usuários. É importante lembrar que uma mesma
              informação pode ser necessária e útil para mais de um usuário.
            </p>
            <p>É preciso cuidar das diferenças entre:</p>
            <ul>
              <li>
                <strong>Categorias</strong>;
              </li>
              <li>
                <strong>Terminologias</strong>;
              </li>
              <li>
                <strong>Linguagem</strong>;
              </li>
              <li>
                <strong>Forma de indexação</strong>.
              </li>
            </ul>
            <p>
              Portanto, o compartilhamento da informação requer
              <strong>padronização e conscientização</strong> dos usuários sobre
              a necessidade de manter as regras definidas. Isso garante que a
              informação seja compreendida e usada por todos, de forma
              eficiente.
            </p>
            <h4>O que é um banco de dados?</h4>
            <p>
              Um banco de dados é um
              <strong>conjunto de arquivos relacionados entre si</strong> que
              armazena dados sobre pessoas, lugares ou coisas. É uma
              <strong>coleção organizada de dados</strong> que se conectam para
              criar sentido, ou seja, para gerar informação.
            </p>
            <h4>Modelagem de Dados:</h4>
            <ul>
              <li>
                Envolve a <strong>identificação dos objetos de dados</strong>,
                que representam o dado em si e suas dimensões (largura, altura e
                profundidade);
              </li>
              <li>
                Aborda os <strong>atributos dos dados</strong>, que são suas
                propriedades (cor, modelo, ano, etc.);
              </li>
              <li>
                Define o <strong>tipo e o formato</strong> dos dados (numérico,
                alfanumérico, booleano, etc.);
              </li>
              <li>
                Estabelece os <strong>possíveis relacionamentos</strong> entre
                os dados, incluindo a quantidade de ocorrências possíveis entre
                um par de dados (cardinalidade).
              </li>
            </ul>
            <h4>Distribuição e Utilização da Informação</h4>
            <h4>A informação pode ser tratada como:</h4>
            <ul>
              <li>
                <h4>
                  <strong>Produto</strong>:
                </h4>
                <ul>
                  <li>
                    Pode ser produzida, armazenada e avaliada para garantir que
                    esteja <strong>correta e completa</strong>. O foco aqui é na
                    sua geração e integridade.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Serviço</strong>:
                </h4>
                <ul>
                  <li>
                    O foco está no <strong>uso que se dá à informação</strong>.
                    É avaliada com base na <strong>facilidade de acesso</strong>{" "}
                    e na possibilidade de mudança de formato e de relacionamento
                    com outras informações.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Muitas empresas tratam a informação tanto como produto quanto como
              serviço, garantindo
              <strong>flexibilidade e confiabilidade</strong> na hora do uso.
            </p>
            <blockquote>
              <q>
                A garantia de que a informação seja tratada pela empresa como
                produto e como serviço possibilita uma distribuição bem
                sucedida. A distribuição obtém sucesso quando a informação
                necessária é entregue à pessoa que a requisitou, no local e
                momento adequados.
              </q>
              <cite>Strauhs et al (2012, P. 32)</cite>
            </blockquote>
            <h4>IMPORTANTE:</h4>
            <p>
              O <strong>fácil acesso</strong> possibilita que os processos sejam
              executados e que as tomadas de decisão sejam diretas e assertivas.
              Porém, é crucial
              <strong>
                garantir que apenas pessoas autorizadas tenham acesso
              </strong>{" "}
              a tais informações, evitando o risco de divulgação de dados
              confidenciais e estratégias fora da organização. A segurança da
              informação é fundamental.
            </p>
            <h4>Comportamento Adaptativo</h4>
            <p>
              Aqui, é preciso que o modelo de dados tenha sido construído de
              forma <strong>flexível</strong>, permitindo a criação de novas
              tabelas e de novos relacionamentos. Quanto mais independência
              existir entre os objetos de dados, mais fácil será criar novos
              atributos e novas conexões entre esses objetos.
            </p>
            <p>
              Também é importante garantir a
              <strong>padronização de nomes e conceitos</strong>, para evitar
              duplicações e planejar o reúso das informações.
            </p>
            <h4>Onde a T.I. se encaixa em tudo isso?</h4>
            <p>
              A Tecnologia da Informação (T.I.) é o
              <strong>alicerce que apoia a Gestão da Informação</strong>,
              fornecendo a tecnologia para facilitar e trazer eficiência na
              recuperação rápida dos dados. Ela torna possível combinar hardware
              e software para agilizar e facilitar o armazenamento e o acesso às
              informações.
            </p>
            <p>
              A T.I. também é responsável por desenvolver
              <strong>procedimentos e rotinas</strong> para otimizar:
            </p>
            <ul>
              <li>
                A <strong>criação</strong> de informações;
              </li>
              <li>
                O <strong>fluxo</strong> e a movimentação dessas informações;
              </li>
              <li>
                A <strong>aprendizagem</strong> e o uso do conhecimento gerado;
              </li>
              <li>
                A <strong>proteção</strong> dos dados;
              </li>
              <li>
                O <strong>compartilhamento</strong> seguro e eficiente das
                informações.
              </li>
            </ul>
          </div>
          <div>
            <h3>Gestão do Conhecimento</h3>
            <p>
              O grande ganho competitivo das organizações ocorre quando elas
              conseguem
              <strong>
                sistematizar a Gestão da Informação e a Gestão do Conhecimento
              </strong>
              . Essa integração é o que realmente impulsiona o sucesso.
            </p>
            <h4>O que é Gestão do Conhecimento?</h4>
            <p>
              É um conceito abrangente que engloba diversas ações para que o
              <strong>
                conhecimento disponível seja identificado, analisado e utilizado
              </strong>
              de forma estratégica.
            </p>
            <blockquote>
              <q>
                A Gestão do Conhecimento, do inglês KM - knowledge management, é
                o nome dado ao conjunto de tecnologias e processos cujo objetivo
                é apoiar a criação, a transferência e a aplicação do
                conhecimento nas organizações. O conhecimento e a Gestão do
                Conhecimento são conceitos complexos.
              </q>
              <cite>Wikipedia (on-line)</cite>
            </blockquote>
            <blockquote>
              <q>
                É a disciplina que promove, com visão integrada, o gerenciamento
                e o compartilhamento de todo ativo de informação possuído pela
                empresa, em documentos, pessoas, etc.
              </q>
              <cite>Gartner Group (on-line)</cite>
            </blockquote>
            <p>
              Muitas vezes, as pessoas "sabem" o que precisa ser feito, e isso é
              um conhecimento que pode ser subjetivo. A organização passa a
              depender de seus profissionais não só para a execução de tarefas,
              mas também para <strong>treinar novos membros</strong>, apoiando o
              crescimento e a evolução da empresa. O conhecimento, portanto, é
              inerente ao ser humano. Cada indivíduo é o
              <strong>detentor de seu conhecimento</strong> e o aprimora
              conforme melhora sua forma de executar o trabalho.
            </p>
            <h4>Gestão da Informação X Gestão do Conhecimento:</h4>
            <p>
              É importante entender que <strong>não são sinônimos</strong>. São,
              na verdade, conceitos que se
              <strong>complementam e se completam</strong>.
            </p>
            <ul>
              <li>
                <h4>
                  <strong>Gestão da Informação:</strong>
                </h4>
                <ul>
                  <li>
                    Permite <strong>organizar e facilitar o acesso</strong> às
                    informações;
                  </li>
                  <li>
                    Possibilita a <strong>criação de conhecimento</strong> a
                    partir dos dados;
                  </li>
                  <li>
                    Se preocupa em
                    <strong>
                      identificar, armazenar, analisar e disponibilizar
                    </strong>
                    a informação correta e relevante.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Gestão do Conhecimento:</strong>
                </h4>
                <ul>
                  <li>
                    A geração e o uso do conhecimento são fortemente
                    influenciados pela
                    <strong>cultura dos profissionais</strong>. Eles buscam
                    formas de produzir conhecimento com base na integração de
                    novas informações às experiências vividas no dia a dia do
                    trabalho, criando assim novas informações que, por sua vez,
                    alimentarão novos conhecimentos. É um
                    <strong>ciclo contínuo de aprendizado e aplicação</strong>.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Gestão Adequada do Conhecimento</h4>
            <p>
              Segundo Nonaka e Takeuchi (1997), o conhecimento pode ser de dois
              tipos: <strong>tácito</strong> ou <strong>explícito</strong>.
            </p>
            <ul>
              <li>
                <h4>
                  <strong>Tácito:</strong>
                </h4>
                <ul>
                  <li>
                    É o <strong>conhecimento individual</strong>, aquele que
                    está na "cabeça" das pessoas. Corresponde ao que elas já
                    sabem fazer de forma "automática" por terem repetido a
                    tarefa várias vezes. É um tipo de conhecimento
                    <strong>difícil de gerenciar</strong>, pois, frequentemente,
                    os próprios detentores não conseguem explicá-lo, apenas
                    executá-lo.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Explícito:</strong>
                </h4>
                <ul>
                  <li>
                    É o <strong>conhecimento público</strong>, conhecido por
                    todos. Ele já passou do estado tácito para o explícito por
                    meio de explicação e transmissão para outras pessoas.
                    Geralmente, é registrado em manuais, procedimentos ou
                    sistemas.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              É fundamental compreender que
              <strong>nenhum conhecimento é criado explícito</strong>. Primeiro,
              ele é tácito; só depois é explicado, transmitido e então se torna
              explícito. Por isso, quanto mais <strong>explícito</strong>
              estiver o conhecimento,
              <strong>mais independente de pessoas</strong> será o funcionamento
              da empresa. O importante é que o conhecimento seja divulgado e que
              mais pessoas conheçam e saibam o que fazer.
            </p>
            <p>
              O conhecimento tácito não é criado da noite para o dia, ele
              depende de:
            </p>
            <ul>
              <li>
                <strong>Experiências individuais vividas</strong>;
              </li>
              <li>
                <strong>Valores familiares</strong>;
              </li>
              <li>
                <strong>Cultura do grupo</strong> em que a pessoa está inserida;
              </li>
              <li>
                <strong>Educação formal e informal</strong>;
              </li>
              <li>
                É construído com base no
                <strong>reflexo das ações das pessoas no seu ambiente</strong>.
              </li>
            </ul>
            <p>
              A ação de <strong>divulgar o conhecimento tácito</strong> é o que
              o torna explícito, transformando-o em algo tangível que pode ser
              compartilhado. Isso não ocorre de forma linear ou de uma só vez,
              mas sim de maneira <strong>interativa e gradual</strong>, conforme
              o relacionamento e a colaboração entre as pessoas.
            </p>
            <h4>Espiral do Conhecimento (Modelo SECI de Nonaka e Takeuchi):</h4>
            <p>
              Este modelo descreve como o conhecimento é criado e expandido em
              uma organização, através de quatro modos de conversão:
            </p>
            <ul>
              <li>
                <h4>
                  <strong>Socialização:</strong>
                </h4>
                <ul>
                  <li>
                    É a
                    <strong>
                      transformação do conhecimento tácito de uma pessoa em
                      conhecimento tácito de outra
                    </strong>
                    . Acontece quando alguém ensina a outro uma determinada
                    tarefa através da observação e da prática. Quem está
                    aprendendo repete e imita, mas ainda não criou sua própria
                    forma de fazer. É o "aprender fazendo".
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Externalização:</strong>
                </h4>
                <ul>
                  <li>
                    Consiste na
                    <strong>
                      transformação do conhecimento tácito em conhecimento
                      explícito
                    </strong>
                    . Isso ocorre quando a pessoa que aprendeu uma nova tarefa a
                    discute, analisa, e consegue explicar sua forma de
                    executá-la, tornando seu novo conhecimento acessível e
                    formalizado. Tudo isso se baseia na comparação, repetição e
                    na criação de um método próprio para a tarefa.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Combinação:</strong>
                </h4>
                <ul>
                  <li>
                    É a
                    <strong>
                      transformação do conhecimento explícito de uma pessoa em
                      conhecimento explícito de outra
                    </strong>
                    (ou de outros). A forma de execução de uma tarefa é
                    aprimorada através do compartilhamento e análise entre
                    diferentes pessoas, que combinam seus conhecimentos e geram
                    uma forma melhor de executar a tarefa. É a
                    <strong>melhoria contínua</strong> através da integração de
                    saberes.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Internalização:</strong>
                </h4>
                <ul>
                  <li>
                    Corresponde à
                    <strong>
                      transformação do conhecimento explícito em conhecimento
                      tácito
                    </strong>
                    . Quem está aprendendo uma nova tarefa precisa analisá-la
                    para compreendê-la e internalizar esse novo conhecimento.
                    Feito isso, o novo conhecimento passa a fazer sentido, e a
                    pessoa entende o que e por que está fazendo aquilo,
                    incorporando-o à sua prática.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>
              Fatores que Dificultam a Construção/Transformação de Conhecimento:
            </h4>
            <ul>
              <li>
                <strong>Medo de perder o cargo</strong> para outra pessoa
                (cultura de não compartilhamento);
              </li>
              <li>
                <strong>Dificuldade de se expressar e ensinar</strong> o próprio
                conhecimento;
              </li>
              <li>
                <strong>Falta de tempo</strong> e prioridade para o
                compartilhamento.
              </li>
            </ul>
            <h4>Organização do Conhecimento</h4>
            <blockquote>
              <q>
                O papel da Gestão do conhecimento nas organizações é
                proporcionar condições para criar, adquirir, organizar e
                processar informações estratégicas e, assim, gerar benefícios
                (inclusive financeiros), aumentando a competitividade.
              </q>
            </blockquote>
            <p>
              A Gestão do Conhecimento envolve uma
              <strong>infraestrutura física e digital adequada</strong> e um
              processo para <strong>incentivar a troca de conhecimento</strong>
              entre as pessoas. Isso significa ter um processo definido, o
              <strong>apoio da T.I.</strong> (automatizando o armazenamento e o
              acesso ao conhecimento) e a
              <strong>colaboração ativa das pessoas</strong> para transformar o
              conhecimento tácito em explícito.
            </p>
            <h4>Principais Objetivos da Gestão do Conhecimento:</h4>
            <ul>
              <li>
                Fomentar o <strong>aprendizado organizacional</strong>;
              </li>
              <li>
                Estimular o
                <strong>desenvolvimento de novas competências</strong>;
              </li>
              <li>
                Garantir o <strong>mapeamento</strong> do conhecimento
                existente;
              </li>
              <li>
                Promover a <strong>codificação</strong> (registro) do
                conhecimento;
              </li>
              <li>
                Incentivar o <strong>compartilhamento</strong> entre os
                profissionais.
              </li>
            </ul>
            <p>
              A melhor maneira de organizar toda a informação disponível é criar
              um "repositório" onde as experiências possam ser armazenadas,
              formando uma <strong>memória organizacional</strong> que poderá
              ser acessada a qualquer momento. Essa criação de "repositório" é
              uma função essencial da T.I., que desenvolve bancos de dados para
              armazenar informações relevantes e importantes da organização.
            </p>
            <p>
              Outra forma eficaz é criar <strong>mapas do conhecimento</strong>,
              que podem ser automatizados por softwares ou elaborados
              manualmente através de quadros informativos, painéis com
              procedimentos operacionais ou por meio de treinamentos contínuos.
            </p>
            <h4>Técnicas de Compartilhamento do Conhecimento</h4>
            <p>
              Strauhs et al (2012) discute a importância de criar uma
              <strong>memória organizacional</strong> com o objetivo de
              capturar, disseminar e reutilizar as informações de projetos já
              realizados. É como o ditado popular: "Nada se cria, tudo se
              copia". Inclusive, o que deu errado deve ser analisado, com o
              propósito de
              <strong>aprender e evitar cometer o mesmo erro novamente</strong>.
            </p>
            <h4>Algumas técnicas importantes:</h4>
            <ul>
              <li>
                <h4>
                  <strong>
                    Reunião de lições aprendidas (Lessons Learned):
                  </strong>
                </h4>
                <ul>
                  <li>
                    Deve ser realizada ao final de um projeto, ou
                    periodicamente, para
                    <strong>identificar e discutir pontos importantes</strong>.
                    Podem ser situações que deram certo ou que apresentaram
                    problemas. O objetivo é fazer uma
                    <strong>análise crítica</strong> do trabalho realizado e dos
                    resultados obtidos, registrando o que funcionou para
                    replicar e o que falhou para evitar.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Portal de compartilhamento:</strong>
                </h4>
                <ul>
                  <li>
                    Os profissionais são incentivados a "alimentar" esse portal
                    com informações relevantes, fornecendo{" "}
                    <strong>feedback</strong> sobre possíveis melhorias,
                    explicando os motivos e os ganhos esperados. As melhorias
                    são analisadas por um grupo específico, que decide quais
                    serão implantadas, sempre com foco em
                    <strong>melhorar o desempenho organizacional</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Comunidade de Práticas (CoP):</strong>
                </h4>
                <ul>
                  <li>
                    Possuem um <strong>objetivo específico</strong> e um tempo
                    predeterminado, visando analisar um problema e buscar a
                    melhor solução. É importante que essa comunidade seja
                    <strong>multidisciplinar</strong> e que se forme de maneira
                    espontânea, com profissionais se oferecendo voluntariamente
                    para a solução do problema.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Gestão do Conhecimento e Inovação</h4>
            <p>
              Uma empresa que aprende continuamente é uma empresa que
              <strong>melhora seu desempenho</strong>, tornando-se mais
              competitiva e constantemente se reinventando. Isso é
              <strong>inovar</strong>: buscar fazer melhor a cada dia!
            </p>
            <p>
              Um gestor de uma organização deve estar
              <strong>atento a promover a aprendizagem organizacional</strong>,
              incentivando ativamente o compartilhamento do conhecimento.
            </p>
            <h4>
              Algumas habilidades essenciais de um gestor para incentivar o
              conhecimento:
            </h4>
            <ul>
              <li>
                Fazer <strong>uso intenso do diálogo</strong>;
              </li>
              <li>
                <strong>Construir parcerias</strong> e confiança com seus
                subordinados;
              </li>
              <li>
                Ter a <strong>capacidade de superar desafios</strong> para
                promover mudanças no comportamento das pessoas, quebrando
                resistências;
              </li>
              <li>
                <strong>
                  Valorizar a diversidade de formação e de conhecimento
                </strong>
                , para que os mais experientes se sintam motivados a ensinar os
                novatos, e os novatos não se sintam constrangidos em aprender
                com os mais experientes;
              </li>
              <li>
                <strong>Buscar o apoio da T.I.</strong> para facilitar o
                armazenamento, a disseminação e o uso do conhecimento acumulado;
              </li>
              <li>
                Ser <strong>criativo</strong> para estar constantemente buscando
                formas interessantes de capturar e armazenar organizadamente o
                conhecimento criado ao longo do tempo.
              </li>
            </ul>
            <p>
              A Gestão do Conhecimento não é algo isolado, mas sim um
              <strong>processo interconectado</strong> que se relaciona com toda
              a cadeia produtiva, permitindo que a empresa acumule e utilize
              conhecimento continuamente ao longo de seu funcionamento.
            </p>
          </div>
          <div>
            <h3>Segurança da Informação</h3>
            <p>
              A Gestão da Informação é um processo contínuo e dinâmico, sempre
              com novas necessidades de informação surgindo. Informações bem
              trabalhadas e organizadas são um <strong>ativo valioso</strong>{" "}
              para qualquer empresa, e é por isso que a{" "}
              <strong>segurança da informação</strong> se torna essencial.
            </p>
            <p>
              Cada vez mais, as empresas estão contratando profissionais
              <strong>especializados em segurança da informação</strong>. O
              objetivo é buscar soluções seguras para seus negócios e, também,
              identificar falhas ou vulnerabilidades antes que sejam exploradas.
            </p>
            <p>
              Quando falamos em segurança da informação, a
              <strong>norma ISO/IEC 27000</strong> é a grande referência. Ela
              direciona as boas práticas para minimizar riscos associados a
              atividades de computação, interconexão entre computadores e outros
              aspectos físicos e humanos. É crucial definir uma
              <strong>política de segurança</strong> para os controles lógicos e
              físicos, garantindo um determinado nível de
              <strong>disponibilidade dos sistemas</strong> e
              <strong>confiabilidade dos dados</strong>. Essa política também
              serve de base para treinamentos de usuários e outros procedimentos
              de segurança. No entanto, é importante ressaltar que a
              <strong>segurança absoluta não existe</strong>; sempre haverá
              vulnerabilidades.
            </p>
            <p>
              As normas ISO/IEC 27000 estruturam o
              <strong>
                Sistema de Gestão de Segurança da Informação (SGSI)
              </strong>
              . As mais conhecidas são a ISO 27001 e a 27002. Juntas, todas as
              normas 27000 cuidam da segurança de dados digitais e sistemas de
              armazenamento eletrônico. O SGSI busca garantir a segurança para
              todos os tipos de dados e informações de uma empresa, baseando-se
              em três atributos básicos:
              <strong>confidencialidade, integridade e disponibilidade</strong>.
            </p>
            <p>
              Os conceitos de segurança da informação vão além de questões
              puramente tecnológicas, podendo envolver:
            </p>
            <ul>
              <li>
                <strong>Danos materiais</strong>;
              </li>
              <li>
                <strong>Vazamento de informações</strong>;
              </li>
              <li>
                <strong>Violação da integridade</strong> dos dados;
              </li>
              <li>
                <strong>Uso indevido de recursos e dados</strong>;
              </li>
              <li>
                <strong>Interceptação de informações</strong>;
              </li>
              <li>
                <strong>Interrupção de serviços</strong>.
              </li>
            </ul>
            <h4>Confidencialidade, Integridade e Disponibilidade (C-I-D)</h4>
            <p>Até o momento, já aprendemos sobre:</p>
            <ul>
              <li>O que é um sistema;</li>
              <li>Sistemas de informação;</li>
              <li>Gestão da informação;</li>
              <li>
                A importância de uma informação completa e correta no momento do
                uso;
              </li>
              <li>Gestão adequada do conhecimento.</li>
            </ul>
            <p>
              Agora, vamos aprofundar nos
              <strong>conceitos básicos da segurança da informação</strong>:
            </p>
            <ul>
              <li>
                <h4>
                  <strong>Ativo de informação:</strong>
                </h4>
                <ul>
                  <li>
                    Qualquer elemento que tenha <strong>valor</strong> para uma
                    empresa. Isso inclui dados, sistemas, hardware, software,
                    pessoas e até mesmo a reputação.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Valor do ativo:</strong>
                </h4>
                <ul>
                  <li>
                    É a quantificação da <strong>perda</strong> de um
                    determinado ativo caso sua confidencialidade, integridade ou
                    disponibilidade sejam comprometidas.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Vulnerabilidade:</strong>
                </h4>
                <ul>
                  <li>
                    É uma <strong>falha ou fraqueza</strong> no ambiente que
                    pode ser explorada para ameaçar um ativo. Pense em uma porta
                    destrancada.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Ameaça:</strong>
                </h4>
                <ul>
                  <li>
                    É a <strong>possibilidade</strong> de que uma
                    vulnerabilidade seja explorada. No exemplo da porta, seria
                    um ladrão tentando entrar.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Impacto:</strong>
                </h4>
                <ul>
                  <li>
                    É o <strong>resultado negativo</strong> da concretização de
                    uma ameaça que explorou uma vulnerabilidade. Se o ladrão
                    entrar e roubar, isso é o impacto.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              O objetivo principal da segurança da informação é implementar um
              conjunto de medidas para{" "}
              <strong>garantir os princípios básicos</strong>e preservar as
              informações de uma organização ou indivíduo, de acordo com suas
              necessidades específicas.
            </p>
            <h4>Esses princípios são:</h4>
            <ul>
              <li>
                <h4>
                  <strong>Confidencialidade:</strong>
                </h4>
                <ul>
                  <li>
                    Princípio que garante que os dados de uma empresa sejam
                    <strong>acessados somente por pessoas autorizadas</strong>.
                    Uma conversa informal em local público sobre assuntos de
                    trabalho confidenciais, por exemplo, pode ser uma grave
                    quebra de confidencialidade.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Integridade:</strong>
                </h4>
                <ul>
                  <li>
                    Princípio que garante que dados e programas de computador
                    (código) sejam
                    <strong>
                      modificados apenas por pessoas ou atividades autorizadas
                    </strong>
                    . Ele considera todas as possíveis causas de modificação,
                    incluindo falhas de hardware e software, eventos ambientais
                    e intervenção humana. O grande desafio aqui é identificar
                    problemas, pois uma informação acessada pode parecer
                    completa e confiável, mas estar incorreta ou inconsistente,
                    gerando sérias confusões para os negócios.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Disponibilidade:</strong>
                </h4>
                <ul>
                  <li>
                    Princípio que garante que a informação esteja
                    <strong>
                      disponível para o acesso de pessoas e meios autorizados no
                      momento em que for requisitada
                    </strong>
                    . Casos clássicos de falta de disponibilidade incluem
                    "sistemas fora do ar", perdas de documentos ou
                    impossibilidade de acessar informações cruciais.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A segurança da informação não se limita a sistemas de informação e
              dispositivos computacionais, mas abrange
              <strong>qualquer ativo que contenha informação</strong>. Assim,
              instalar um antivírus e implementar controle de acesso em todos os
              sistemas da empresa são medidas de segurança digital, mas a
              segurança vai além.
            </p>
            <h4>Outros ativos que também precisam de proteção:</h4>
            <ul>
              <li>
                <h4>
                  <strong>Pessoas:</strong>
                </h4>
                <ul>
                  <li>
                    Um funcionário adquire muitas informações confidenciais que
                    precisam ser preservadas. Portanto, solicitar que ele assine
                    um <strong>termo de confidencialidade</strong> é uma medida
                    de segurança fundamental.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Documentos impressos:</strong>
                </h4>
                <ul>
                  <li>
                    Em uma empresa, é comum ter documentos administrativos como
                    boletos, notas fiscais, cópias de contracheque, etc. Se
                    esses documentos forem extraviados ou vazados, podem
                    resultar em sérios impactos, como multas e processos
                    judiciais. Administrar tudo isso através de
                    <strong>inventários</strong> que registram e controlam esses
                    ativos é uma forma de segurança.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Ambientes físicos:</strong>
                </h4>
                <ul>
                  <li>
                    Alguns ambientes da empresa podem expor informações de altos
                    níveis de confidencialidade, ou são críticos para a
                    integridade e disponibilidade. Nesses locais, o acesso deve
                    ser restrito <strong>somente a pessoas autorizadas</strong>.
                    Isso também é uma forma crucial de segurança.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Vulnerabilidade e Cibersegurança</h4>
            <ul>
              <li>
                <h4>
                  <strong>Vulnerabilidade:</strong>
                </h4>
                <ul>
                  <li>
                    São <strong>fragilidades</strong> que podem causar danos
                    presentes ou futuros para pessoas e organizações. É uma
                    fraqueza em um ativo ou grupo de ativos que pode ser
                    explorada por uma ou mais ameaças.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Ameaça:</strong>
                </h4>
                <ul>
                  <li>
                    São <strong>agentes externos</strong> ao ativo de informação
                    que exploram as vulnerabilidades para gerar a quebra de um
                    ou mais dos três princípios básicos da segurança da
                    informação (Confidencialidade, Integridade,
                    Disponibilidade).
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Incidente:</strong>
                </h4>
                <ul>
                  <li>
                    É a <strong>ocorrência de um evento</strong> que pode
                    interromper os processos do negócio, resultando da
                    concretização de uma ameaça que explorou uma
                    vulnerabilidade.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Alguns aspectos comuns de vulnerabilidade:</h4>
            <ul>
              <li>
                Instalações físicas desprotegidas contra incêndios, inundações
                ou outros desastres naturais;
              </li>
              <li>Materiais inadequados empregados nas construções;</li>
              <li>Ausência de políticas de segurança para Recursos Humanos;</li>
              <li>
                Funcionários sem treinamento adequado e insatisfeitos nos locais
                de trabalho;
              </li>
              <li>Ausência de procedimentos de utilização de equipamentos;</li>
              <li>
                Equipamentos sem manutenção adequada e sem restrições de uso;
              </li>
              <li>Softwares desatualizados e sem licença de funcionamento.</li>
            </ul>
            <h4>Vulnerabilidade com base em sua origem:</h4>
            <ul>
              <li>Naturais (desastres, etc.);</li>
              <li>Organizacionais (falta de processos, políticas);</li>
              <li>Físicas (infraestrutura, acesso);</li>
              <li>De hardware (falhas em equipamentos);</li>
              <li>De software (bugs, desatualização);</li>
              <li>Meios de armazenamento (mídias, discos);</li>
              <li>Humanas (erros, negligência, má-fé);</li>
              <li>Nas comunicações (redes, protocolos).</li>
            </ul>
            <p>Portanto, a sequência lógica é:</p>
            <ol>
              <li>
                <h4>
                  <strong>Vulnerabilidade:</strong>
                </h4>
                <ul>
                  <li>
                    É a fraqueza existente que
                    <strong>pode ser explorada</strong> por uma ameaça;
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Ameaça:</strong>
                </h4>
                <ul>
                  <li>
                    É o agente que
                    <strong>pode se concretizar</strong> em um incidente ao
                    explorar a vulnerabilidade;
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Incidente:</strong>
                </h4>
                <ul>
                  <li>
                    É o <strong>resultado</strong> da concretização da ameaça
                    que explorou a vulnerabilidade, causando um evento
                    indesejado.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Conceito de cibersegurança ou segurança cibernética:</h4>
            <p>
              É a prática de
              <strong>
                proteger informações e dados que chegam à organização de fontes
                externas
              </strong>{" "}
              por meio de protocolos de internet. É a segurança cibernética que
              busca proteger a rede das empresas de invasões externas. É
              importante notar que nem tudo que é segurança da informação
              envolve a cibersegurança, mas
              <strong>
                toda cibersegurança envolve a segurança da informação
              </strong>
              . A cibersegurança é um subset da segurança da informação, focada
              no ambiente digital e de rede.
            </p>
            <h4>Algumas boas práticas das empresas em cibersegurança:</h4>
            <ul>
              <li>
                Evitar e <strong>combater ataques virtuais</strong>;
              </li>
              <li>
                <strong>Identificar e recuperar vulnerabilidades</strong> nos
                sistemas de T.I.;
              </li>
              <li>
                <strong>Proteger dados armazenados virtualmente</strong>;
              </li>
              <li>
                <strong>Determinar regras para gestão</strong> das informações
                digitais;
              </li>
              <li>
                <strong>Controlar o acesso de usuários</strong> aos dados
                corporativos.
              </li>
            </ul>
            <h3>Segurança Digital</h3>
            <p>
              As ameaças aumentam quase na mesma proporção que as inovações
              tecnológicas. As informações de uma empresa, sejam digitais ou
              não, estão no centro de qualquer negócio, sendo um
              <strong>valoroso ativo e um diferencial competitivo</strong>.
            </p>
            <p>
              É impossível ter <strong>segurança total</strong> contra todas as
              ameaças à segurança da informação devido à constante dinâmica da
              inovação em hardware e software. Por isso, é necessário
              <strong>priorizar o que é mais importante</strong> e possui maior
              risco para a empresa, focando os esforços de segurança nos pontos
              mais críticos.
            </p>
            <h4>Lei Geral de Proteção de Dados Pessoais (LGPD ou LGPDP)</h4>
            <p>
              A <strong>Lei 13.709/2018</strong> é a legislação brasileira que
              regula as atividades de tratamento de dados pessoais. Ela também
              altera os artigos 7º e 16º do Marco Civil da Internet. O objetivo
              da LGPD é criar um cenário de <strong>segurança jurídica</strong>,
              padronizando normas e práticas para promover a proteção, de forma
              igualitária e dentro do país e no mundo, aos dados pessoais de
              todo cidadão que esteja no Brasil.
            </p>
            <p>
              A lei estabelece que
              <strong>
                não importa se a sede de uma organização está localizada no
                Brasil ou no exterior
              </strong>
              . Se houver processamento de informações de pessoas (brasileiras
              ou não) que estão no território nacional, a lei deve ser cumprida
              pela empresa. É permitido compartilhar dados com organismos
              internacionais e com outros países, mas para que isso ocorra,
              devem ser seguidos
              <strong>protocolos seguros</strong> que cumpram as exigências
              legais da LGPD.
            </p>
            <h4>Alguns aspectos importantes da LGPD:</h4>
            <ul>
              <li>
                <h4>
                  <strong>Consentimento:</strong>
                </h4>
                <ul>
                  <li>
                    Envolve a{" "}
                    <strong>autorização expressa do cidadão/cliente</strong>{" "}
                    para que seus dados pessoais possam ser tratados pelas
                    empresas. Sem esse consentimento claro, o tratamento é
                    ilegal.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>
                    Direitos do titular e automatização com autorização:
                  </strong>
                </h4>
                <ul>
                  <li>
                    A LGPD permite que os clientes solicitem que seus dados
                    sejam <strong>deletados</strong>, revoguem um consentimento
                    previamente dado, ou solicitem a
                    <strong>transferência de seus dados</strong> para outro
                    fornecedor de serviços. Isso empodera o titular dos dados.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A garantia do cumprimento da lei é feita pela
              <strong>
                ANPD (Autoridade Nacional de Proteção de Dados Pessoais)
              </strong>
              . A ANPD atua regulando e orientando preventivamente sobre como
              aplicar a lei, fiscalizando as empresas e aplicando punições
              quando há descumprimento.
            </p>
          </div>
          <div>
            <h3>Inteligência do Negócio (Business Intelligence - BI)</h3>
            <p>
              Devido à crescente <strong>competitividade do mercado</strong>, as
              empresas buscam novas maneiras de utilizar seus dados organizados
              para gerar mais valor. É nesse cenário que surge o conceito de
              <strong>Inteligência de Negócios</strong> ou
              <strong>Business Intelligence (BI)</strong>. O BI é uma abordagem
              inteligente para identificar e tratar falhas, mantendo o negócio
              competitivo no mercado.
            </p>
            <p>
              Também conhecido como Inteligência Empresarial, o BI abrange
              <strong>todos os setores da empresa</strong>, como:
            </p>
            <ul>
              <li>Financeiro;</li>
              <li>Operacional;</li>
              <li>Marketing.</li>
            </ul>
            <p>O BI é um conjunto de:</p>
            <ul>
              <li>Práticas;</li>
              <li>Teorias;</li>
              <li>Metodologias;</li>
              <li>Processos;</li>
              <li>Tecnologias.</li>
            </ul>
            <p>
              Ele é capaz de transformar grandes quantidades de
              <strong>dados desorganizados e sem sentido</strong> em
              <strong>informações essenciais</strong> para uma boa gestão e,
              principalmente, para a tomada de decisões. Seu principal objetivo
              é utilizar esse conjunto de técnicas e ferramentas para
              <strong>oferecer suporte à tomada de decisão</strong> e ao
              <strong>monitoramento dos resultados</strong> dos investimentos da
              empresa.
            </p>
            <p>
              Dessa forma, o BI permite agrupar e explorar informações para
              descobrir
              <strong>vantagens competitivas</strong> para o negócio, apoiando a
              interpretação e análise de dados e informações, e identificando
              <strong>oportunidades e riscos</strong>.
            </p>
            <p>O bom funcionamento do BI depende da integração entre:</p>
            <ul>
              <li>
                O <strong>Negócio</strong>;
              </li>
              <li>
                A <strong>Gestão</strong>;
              </li>
              <li>
                A <strong>TI</strong> (Tecnologia da Informação).
              </li>
            </ul>
            <h4>
              O BI é muito flexível na captação e obtenção de informações,
              oferecendo apoio inteligente às decisões, independentemente de
              onde os dados e informações estejam armazenados.
            </h4>
            <p>
              Em resumo, o BI pode ser entendido como um
              <strong>processo orientado por tecnologia</strong> para analisar
              dados e apresentar informações organizadas e úteis, apoiando a
              alta gestão das empresas na tomada de decisões de negócios. Isso é
              possível através de uma variedade de ferramentas, aplicativos e
              metodologias que permitem coletar dados de sistemas internos e
              fontes externas, utilizando até mesmo{" "}
              <strong>inteligência artificial</strong> para realizar análises e
              desenvolver consultas coerentes com a necessidade do negócio.
            </p>
            <h4>Big Data</h4>
            <p>
              <strong>Big Data</strong> é um termo utilizado para descrever
              <strong>grandes conjuntos de dados</strong> que precisam ser
              processados e armazenados para serem posteriormente utilizados. É
              um conceito que identifica dados com maior variedade, que chegam
              em volumes crescentes e com velocidade cada vez maior.
              Inicialmente, esse conceito foi definido por <strong>3 Vs</strong>
              :
            </p>
            <ul>
              <li>
                <strong>Volume</strong>;
              </li>
              <li>
                <strong>Velocidade</strong>;
              </li>
              <li>
                <strong>Variedade</strong>.
              </li>
            </ul>
            <p>
              Porém, devido às necessidades das empresas e do mercado, o
              conceito evoluiu para <strong>5 Vs</strong>:
            </p>
            <ul>
              <li>
                <h4>
                  <strong>Volume</strong>
                </h4>
                <ul>
                  <li>
                    Refere-se à <strong>quantidade de dados</strong>. Com Big
                    Data, é possível processar volumes massivos de dados,
                    incluindo os não estruturados. Isso exige otimização no
                    armazenamento e processamento dessa enorme quantidade de
                    informação.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Variedade</strong>
                </h4>
                <ul>
                  <li>
                    Representa os{" "}
                    <strong>diversos tipos de dados disponíveis</strong>, de
                    fontes e extensões variadas, podendo incluir texto, áudio e
                    vídeo. Enquanto dados tradicionais (estruturados) se
                    encaixam em bancos de dados relacionais, dados não
                    estruturados ou semiestruturados (como textos livres ou
                    mídias) exigem pré-processamento adicional para extrair
                    significado e dar suporte a metadados, o que aumenta a
                    complexidade de armazenamento e processamento.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Velocidade</strong>
                </h4>
                <ul>
                  <li>
                    Foca na <strong>taxa mais rápida</strong> na qual os dados
                    são recebidos, processados e gerenciados. Podemos melhorar a
                    velocidade transmitindo os dados diretamente para a memória
                    (em vez de gravar no disco) e utilizando produtos
                    inteligentes habilitados para internet que operam em tempo
                    real. Isso exige um trabalho dedicado, mas garante maior
                    agilidade.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Veracidade</strong>
                </h4>
                <ul>
                  <li>
                    Devido às fontes variadas e complexas, foi crucial inserir o
                    conceito de <strong>veracidade</strong> para garantir a
                    <strong>fonte e a qualidade dos dados</strong>, pois eles
                    devem ser confiáveis. É preciso checar dados inconsistentes
                    ou até mesmo a disseminação de fake news. Os riscos causados
                    por dados não confiáveis podem ser imensos para os negócios.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Valor</strong>
                </h4>
                <ul>
                  <li>
                    O Big Data se tornou tão necessário que o conceito de
                    <strong>valor</strong> foi criado. Ele está relacionado com
                    os <strong>benefícios</strong> que as soluções de Big Data
                    trazem para as empresas. É fundamental que os dados
                    processados e disponibilizados sejam coerentes e úteis para
                    a necessidade do negócio, agregando, assim, valor à empresa.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Em resumo, Big Data é:</h4>
            <p>
              Um conjunto de dados maior e mais complexo, envolvendo novas
              fontes e tipos de dados. Esses conjuntos de dados costumam ser tão
              volumosos que um software tradicional de processamento não seria
              capaz de gerenciar. O grande objetivo desses volumosos dados é
              <strong>
                resolver problemas de negócios que as empresas não conseguiriam
                resolver antes do Big Data
              </strong>
              .
            </p>
            <h4>Data Warehouse (DW)</h4>
            <p>
              Traduzido como "armazém de dados", um{" "}
              <strong>Data Warehouse</strong> é uma organização de bancos de
              dados voltada para
              <strong>análise e Business Intelligence</strong>. Podemos
              entendê-lo como um <strong>depósito de dados digitais</strong>,
              cujo objetivo é armazenar informações classificadas e organizadas
              de uma empresa, possibilitando análises e a criação de relatórios
              que ajudam na
              <strong>tomada de decisão estratégica</strong>. Possui uma
              arquitetura e um projeto técnico dedicados ao processamento e
              armazenamento de <strong>altos volumes de dados</strong>, sendo
              muito relacionado com o conceito de Big Data.
            </p>
            <p>
              O DW é um sistema de armazenamento de dados que recebe informações
              de
              <strong>diferentes fontes (internas e externas)</strong>, alimenta
              o BI de uma empresa e é usado para uma gestão efetiva.
            </p>
            <h4>OLAP - Online Analytical Processing:</h4>
            <p>
              É uma das ferramentas mais usadas atualmente para a exploração de
              um Data Warehouse. O OLAP permite alterar e analisar grandes
              quantidades de dados sob{" "}
              <strong>várias perspectivas diferentes</strong>. Pode ser aplicado
              em áreas muito distintas. Por exemplo, a área financeira o utiliza
              para apoiar análises de fluxos de caixa, contas e orçamentos; o
              marketing, para análises de preço e volumes de mercado; e os
              processos de vendas, com previsões de faturamento, lucro e
              quantidade de clientes, entre outros.
            </p>
            <h4>Vantagens e Desvantagens do Data Warehouse:</h4>
            <ul>
              <li>
                <h4>
                  <strong>Vantagens:</strong>
                </h4>
                <ul>
                  <li>
                    Várias inconsistências nos dados podem ser
                    <strong>identificadas e solucionadas antes</strong> que
                    sejam carregadas, o que facilita a execução da análise e a
                    geração de relatórios;
                  </li>
                  <li>
                    Contribui para o processo de tomada de decisão, por meio de
                    relatórios de tendências, de exceção e relatórios que
                    comparam{" "}
                    <strong>objetivos previstos versus desempenho real</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Desvantagens:</strong>
                </h4>
                <ul>
                  <li>
                    Não é a solução mais adequada para
                    <strong>dados não estruturados</strong>, por se tratar de
                    uma organização muitas vezes pautada em bancos de dados
                    tradicionais;
                  </li>
                  <li>
                    Podem ter <strong>custos elevados</strong> de implementação
                    e manutenção;
                  </li>
                  <li>
                    Podem ficar <strong>rapidamente desatualizados</strong>
                    devido à alta velocidade da tecnologia e à constante
                    evolução dos dados.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Para resumir, o Data Warehouse pode ser entendido como um banco de
              dados com capacidade de armazenar e organizar um grande volume de
              dados. Ele é responsável por criar análises e organizar relatórios
              por meio de <strong>informações históricas</strong>, que podem
              ajudar as empresas a obterem previsões e auxiliar na tomada de
              decisões importantes.
            </p>
            <h4>Data Mining (Mineração de Dados)</h4>
            <p>
              <strong>Data Mining</strong> é uma estratégia muito utilizada
              pelas empresas, especialmente em marketing, para oferecer produtos
              que te interessam com base em informações coletadas, processadas e
              utilizadas. Em português, a <strong>Mineração de Dados</strong>
              auxilia a identificar e coletar dados relevantes, descartando
              "ruídos" (dados irrelevantes).
            </p>
            <p>
              Esses sistemas são extremamente importantes no mundo dos negócios,
              pois estão preparados para lidar com
              <strong>grandes volumes de informações</strong> disponibilizadas
              na internet. São sistemas computacionais criados para processar um
              volume cada vez maior de dados. Seu principal objetivo é
              <strong>vasculhar grandes repositórios de dados</strong> e tentar
              descobrir algum <strong>conhecimento oculto</strong> neles.
            </p>
            <p>
              Quando se consegue fazer
              <strong>ligações entre as informações</strong> e descobrir os
              <strong>relacionamentos</strong> existentes, é possível definir
              estratégias para otimizar os resultados financeiros das empresas,
              prevendo projeções futuras. O Data Mining tem o propósito de
              identificar{" "}
              <strong>
                padrões existentes, consistências e o relacionamento entre os
                dados
              </strong>
              . Identificados esses pontos, é possível transformar os dados em
              <strong>conhecimento acionável</strong> para ser usado em decisões
              estratégicas.
            </p>
            <p>
              Minar dados é mais do que analisar grandes quantidades de
              informações; envolve{" "}
              <strong>descobrir a relação intrínseca entre elas</strong>. Para
              ser efetivo, o Data Mining precisa ser um processo executado em
              todas as áreas da empresa e cumprir algumas fases:
            </p>
            <ul>
              <li>
                <h4>
                  <strong>Identificação do problema:</strong>
                </h4>
                <ul>
                  <li>
                    Fase responsável por <strong>definir um objetivo</strong>
                    claro a ser alcançado com a análise dos dados.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Descoberta do conhecimento:</strong>
                </h4>
                <ul>
                  <li>
                    Fase responsável por{" "}
                    <strong>identificar as relações entre os dados</strong>{" "}
                    utilizando procedimentos de Inteligência Artificial (IA)
                    para realizar as análises.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Análise das relações descobertas:</strong>
                </h4>
                <ul>
                  <li>
                    Fase onde a{" "}
                    <strong>inteligência sobre as relações descobertas</strong>{" "}
                    é aprofundada, seja manualmente ou com o auxílio de IA.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Uso das relações descobertas:</strong>
                </h4>
                <ul>
                  <li>
                    É o momento em que as empresas
                    <strong>aplicam as descobertas</strong> feitas para gerir
                    seu negócio e tomar decisões estratégicas.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Avaliação dos resultados:</strong>
                </h4>
                <ul>
                  <li>
                    Fase em que se verifica se as descobertas foram realmente
                    <strong>úteis para o negócio</strong> ou se ainda falta
                    alguma informação para atingir o objetivo definido na
                    primeira fase. Este é um ciclo de melhoria contínua.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Tomada de Decisão</h4>
            <p>
              Com o auxílio de sistemas complexos que coletam e analisam dados
              para disponibilizar informações relevantes, os gestores podem
              tomar decisões mais eficazes. As empresas que se destacam no
              mercado geralmente o fazem por tomarem{" "}
              <strong>decisões mais assertivas e rápidas</strong>. Dados reais,
              organizados e relevantes permitem que as empresas descartem
              informações irrelevantes para escolherem as
              <strong>melhores alternativas</strong>.
            </p>
            <p>
              Todas as técnicas e conceitos abordados (Business Intelligence,
              Big Data, Data Warehouse e Data Mining) se complementam, e têm
              como objetivo facilitar a disponibilização de
              <strong>informações coerentes e relevantes</strong> para agregar
              valor ao negócio, apoiando na
              <strong>sustentabilidade e manutenção das empresas</strong>. O
              futuro e a estabilidade de uma organização dependem diretamente da
              sua capacidade de transformar dados em decisões inteligentes.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default GestaoDaInformacao;
