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
              A informação tem tanto valor hoje que se tornou o
              <strong>principal ativo</strong> de qualquer organização. Possuir
              e gerir a informação certa no momento certo pode representar a
              diferença entre lucro e prejuízo, entre a decisão correta e a
              errada, entre sucesso e fracasso. A necessidade da informação
              sempre existiu, mas está cada vez mais consolidada e facilitada
              pela evolução da tecnologia, que permite que as informações sejam
              armazenadas, processadas e utilizadas de forma mais rápida e
              eficiente.
            </p>
            <p>
              De acordo com Strauhs et al (2012), atualmente, além da
              informação, o<strong>conhecimento</strong> também adquiriu enorme
              importância no dia a dia das empresas. O que percebemos é uma
              evolução: a transição da Sociedade Industrial para a Sociedade da
              Informação, e indo mais adiante, para a Sociedade do Conhecimento
              e da Colaboração. As organizações precisam inovar constantemente
              para se manter competitivas no mercado. Dessa forma, informação e
              conhecimento são fundamentais em todas as etapas do processo de
              inovação. É possível ver a gestão da informação e do conhecimento
              na geração e seleção de ideias, na escolha dos recursos mais
              apropriados e na gestão dos projetos, tudo isso levando a um
              aprendizado organizacional.
            </p>
            <p>
              Para nós, profissionais de T.I., pensar em
              <strong>gestão da informação</strong> é fundamental para agregar
              valor nas empresas onde atuamos. Planejar como armazenar os dados
              de forma a facilitar seu uso é um grande diferencial em um sistema
              de software, além, é claro, de pensar na{" "}
              <strong>segurança dos dados</strong>. As competências ligadas à
              gestão eficiente da informação estão sendo muito procuradas pelas
              organizações.
            </p>

            <h3>Sistema</h3>
            <p>
              É possível perceber que a gestão da informação é um assunto
              extenso e complexo, pois envolve organizar os dados, armazenar e
              utilizá-los de forma a agregar valor para as organizações,
              apoiando a gestão e a tomada de decisão. Dessa forma, vamos
              discutir como sistemas, dados, informação e conhecimento estão
              relacionados com a gestão da informação de todas as organizações,
              independentemente da área de negócio.
            </p>
            <p>
              Sistema é um termo muito amplo, usado até em outras disciplinas
              além da TI. O mais comum é escutarmos sobre sistema digestivo e
              sistema respiratório, por exemplo. Mas, de uma forma bem geral, é
              possível afirmar que:
            </p>
            <blockquote>
              <q>
                É um conjunto de elementos interdisciplinares, ou um todo
                organizado, ou partes que interagem formando um todo unitário e
                complexo.
              </q>
              <cite> - Stair e Reynolds (2006, P.7)</cite>
            </blockquote>
            <p>
              Considerando esta definição, portanto, uma empresa pode ser
              entendida como um sistema, pois é composta por pessoas, áreas ou
              departamentos, tecnologias, processos e outros elementos que
              trabalham juntos para atingir os objetivos estratégicos definidos
              pela diretoria. A informação também pode ser gerida como um
              sistema, pois é composta por elementos que precisam estar
              organizados para que agreguem valor para uma organização.
            </p>
            <h3>Podemos classificar os sistemas como:</h3>
            <ul>
              <li>
                <h4>Simples ou complexo:</h4>
                <ul>
                  <li>
                    dependendo dos componentes e das interações entre eles.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Aberto ou fechado:</h4>
                <ul>
                  <li>
                    dependendo da interação ou não com ambientes externos à
                    organização.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Estável ou dinâmico:</h4>
                <ul>
                  <li>
                    dependendo da frequência de mudanças a que está exposto.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Permanente ou temporário:</h4>
                <ul>
                  <li>dependendo da sua disponibilidade para uso.</li>
                </ul>
              </li>
            </ul>
            <p>
              O mundo dos negócios está cada vez mais exigindo velocidade nas
              respostas e ações. Dessa forma, os sistemas de informação precisam
              de tecnologia como base para se manter atualizados e ágeis. Ou
              seja, além de um bom planejamento dos dados necessários para gerar
              o conhecimento usado pelos gestores, é preciso usar técnicas que
              forneçam as informações de forma mais rápida e permitam evoluções
              que alimentam as organizações com novas informações. O mundo está
              em constante evolução e as organizações precisam acompanhar este
              movimento para se manter competitivas e a base para tudo isso está
              nas informações.
            </p>
            <p>
              O <strong>sistema da informação</strong> é formado por um conjunto
              de elementos organizados, que disponibilizam informações
              relevantes para os gestores.
            </p>
            <h3>Podemos entender sistema da informação como sendo:</h3>
            <ul>
              <li>Entrada de dados;</li>
              <li>Processamento de informações;</li>
              <li>Saída de conhecimento.</li>
            </ul>

            <h3>Elementos de um sistema de informação</h3>
            <p>
              Para compreender melhor os elementos que compõem um sistema de
              informação, vamos discutir o que são dados, informação e
              conhecimento, a diferença entre eles e como um dado pode evoluir
              até gerar conhecimento.
            </p>
            <h4>O que é dado?</h4>
            <p>
              A unidade mais básica de um sistema de informação, ou seja, pode
              ser entendido como a observação de um fato, como um registro em
              forma primária de um fato.
            </p>
            <blockquote>
              <q>
                Dados são fatos brutos, que não foram organizados, processados,
                relacionados, avaliados ou interpretados, representando apenas
                partes isoladas de eventos, situações ou ocorrências. Constituem
                as unidades básicas a partir das quais informações poderão ser
                elaboradas ou obtidas
              </q>
              <cite> - Côrtes (2008, P. 26)</cite>
            </blockquote>
            <p>
              Podemos entender que dados são unidades básicas, sem nenhum
              tratamento, relacionamento, contexto ou atribuição de significado.
              Em um projeto de software, quando vamos projetar um programa de
              computador, organizamos os dados em banco de dados, ou seja, em
              tabelas modeladas para organizar os dados, seu armazenamento e o
              acesso para uso nestes programas de computador.
            </p>
            <p>
              Vamos analisar o exemplo de uma pizzaria, a qual tem um sistema de
              computador que armazena nome de clientes, endereço, telefone,
              pedido, data do pedido, valor do pedido e forma de pagamento. Toda
              essa lista são os <strong>dados</strong> da pizzaria, armazenados
              ao longo do tempo, com base em cada pedido feito por um cliente.
              Esses dados podem não fazer sentido se os pegarmos de forma
              desorganizada e fora de contexto. Para que eles sejam utilizados
              nas vendas para os clientes, é preciso que sejam transformados em
              informação.
            </p>
            <h4>O que é informação?</h4>
            <ul>
              <li>Dados organizados que permitem a interpretação;</li>
              <li>É utilizada por gestores em tomadas de decisão.</li>
            </ul>
            <p>
              A <strong>informação</strong> é o dado organizado. Explicando um
              pouco melhor, podemos entender que quando os dados estão
              relacionados, organizados, contextualizados e permitem uma
              interpretação, eles são classificados como informação, pois fazem
              sentido para quem os usa. Dessa forma, é possível relacionar o
              nome do cliente com o pedido que ele faz em determinada data. Esse
              é um conjunto de dados organizado, que faz sentido para ser usado
              como uma informação relevante para o negócio.
            </p>
            <p>
              De acordo com Strauhs et al (2012), a informação não é uma coleção
              de dados qualquer, mas sim um dado processado, organizado em um
              contexto específico com o objetivo de fornecer solução para um
              problema. Definindo de outra forma, podemos afirmar que a
              informação é um conjunto de dados com significado e relevância que
              podem ser utilizados por gestores em um processo de tomada de
              decisão.
            </p>
            <p>
              Vamos analisar o exemplo da pizzaria novamente. Quando pesquisamos
              o cliente Paulo no banco de dados, podemos verificar onde ele
              mora, o número do telefone, qual pedido que ele fez em determinado
              dia, o valor e a forma de pagamento que ele escolheu. Dessa forma,
              a pizzaria está pronta para fazer a entrega da pizza solicitada,
              ou seja, o dado se transformou em <strong>informação</strong>, uma
              vez que passou a ter um significado e movimenta o negócio. A
              pizzaria precisa da informação para fazer a entrega do pedido
              certo para o cliente certo. Se os dados não estiverem organizados,
              podemos entregar a pizza com sabor errado ou até mesmo para o
              cliente errado. Uma confusão só.
            </p>
            <p>
              Com esse exemplo, podemos perceber que a informação permite o
              funcionamento da pizzaria. Para que ela seja competitiva, aumente
              suas vendas e fidelize seus clientes, ela precisa utilizar o
              conhecimento.
            </p>
            <h4>O que é conhecimento?</h4>
            <p>
              O <strong>conhecimento</strong> é o nível mais alto em uma
              hierarquia de gestão da informação, em que temos como níveis
              inferiores o dado e a informação, nesta ordem.
            </p>
            <blockquote>
              <q>
                É a consciência e o entendimento de um conjunto de informações e
                formas de torná-las úteis para apoiar uma tarefa específica ou
                tomar uma decisão.
              </q>
              <cite> - Stair e Reynolds (2006, P.5)</cite>
            </blockquote>
            <p>
              Ou seja, o conhecimento é saber usar as informações para melhorar
              o desempenho dos negócios, para ser mais competitivo e oferecer
              aos seus clientes melhores experiências. É o que vemos em vários
              sites de comércio eletrônico que estudam nossas preferências de
              compras e nos oferecem vários produtos de acordo com estas
              preferências. É o novo marketing, o que chamamos de{" "}
              <strong>marketing digital</strong>, o qual não é possível sem uma
              boa gestão da informação e de sistemas de informação apoiados em
              tecnologias.
            </p>
            <p>
              Vamos voltar ao exemplo da pizzaria. Seu José, o dono da pizzaria,
              percebe que o Paulo não compra pizza há algum tempo. Com isso, seu
              José pesquisa em seu sistema de computador sobre os últimos
              pedidos do Paulo e descobre que ele, na maior parte das vezes,
              pede pizza portuguesa, ou seja, essa é sua preferência. Conhecendo
              essa preferência do Paulo, seu José pode lhe enviar um WhatsApp
              ofertando a pizza portuguesa por um preço especial para pedidos
              realizados neste final de semana. O WhatsApp recebido estimula o
              Paulo a pedir uma pizza, afinal de contas, o preço está especial.
              Olha como o <strong>conhecimento</strong> das preferências dos
              clientes fez com que seu José vendesse mais uma pizza para o
              Paulo.
            </p>
            <p>
              Este é um exemplo de bom uso das informações, criando um
              conhecimento capaz de aumentar vendas e melhorar um negócio. É o
              poder do conhecimento sendo usado para alavancar o negócio. Este é
              o objetivo do conhecimento, sendo possível analisar, por exemplo,
              o padrão de consumo dos clientes, a fim de oferecer novos
              produtos, com base no gosto deles, ou ainda, criar campanhas de
              vendas baseadas nas preferências dos clientes.
            </p>
            <h3>Hierarquia da gestão da informação:</h3>
            <p>Isso tudo se torna um ciclo contínuo, uma corrente.</p>
            <ol>
              <li>
                <h4>Dados:</h4>
                <ul>
                  <li>
                    os quais são armazenados, organizados, avaliados, etc, para
                    se tornarem <strong>informação</strong>;
                  </li>
                </ul>
              </li>
              <li>
                <h4>Informações:</h4>
                <ul>
                  <li>
                    as quais são organizadas, disseminadas, difundidas, tomada
                    de decisão, etc, para se tornarem{" "}
                    <strong>conhecimento</strong>;
                  </li>
                </ul>
              </li>
              <li>
                <h4>Conhecimento:</h4>
                <ul>
                  <li>
                    que por sua vez pode gerar necessidade de novos dados,
                    formando um
                    <strong>ciclo completo</strong>.
                  </li>
                </ul>
              </li>
            </ol>
            <h3>Tipos de informação e conhecimento</h3>
            <p>
              Até aqui entendemos o que são sistemas de informação, como eles
              são compostos e discutimos as características de cada elemento que
              compõe um sistema de informação. Vamos agora discutir um pouco
              sobre os diferentes tipos de informação e de conhecimento.
            </p>
            <p>
              Já conversamos que os gestores não conseguem gerir os negócios sem
              informação. Dessa forma, é preciso estruturar a informação a fim
              de permitir que todas os departamentos da empresa possam tomar
              decisões de maneira mais assertiva possível, tendo acesso às
              informações adequadas para o seu nível de tomada de decisão.
            </p>
            <p>
              Os tipos de informação podem ter diferentes níveis, tais como:
            </p>
            <ul>
              <li>
                <h4>Operacional:</h4>
                <ul>
                  <li>
                    São as informações necessárias para que as decisões em nível
                    operacional sejam tomadas. Informações do dia a dia.
                    Exemplo: "Quantas peças precisam ser produzidas no dia de
                    hoje?"
                  </li>
                </ul>
              </li>
              <li>
                <h4>Tática:</h4>
                <ul>
                  <li>
                    São as informações necessárias para que as decisões em nível
                    gerencial sejam tomadas. De nível gerencial. Exemplo: "No
                    mês de dezembro, como teremos uma baixa de produção, podemos
                    planejar as férias de metade da equipe de produção."
                  </li>
                </ul>
              </li>
              <li>
                <h4>Estratégicas:</h4>
                <ul>
                  <li>
                    São as informações necessárias para que as decisões em nível
                    executivo/estratégico sejam tomadas. Utilizadas pela alta
                    gestão da empresa. Exemplo: "Para aumentar o faturamento em
                    20%, baseado no faturamento atual da empresa, precisamos
                    conquistar cinco novos clientes com demandas de no mínimo R$
                    100.000,00/ mês."
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Tipos de informação</h3>
            <p>As informações podem ainda ser formais ou informais.</p>
            <ul>
              <li>
                <h4>Formais:</h4>
                <ul>
                  <li>
                    São aquelas que temos confiança na origem, ou seja, vieram
                    de jornais, revistas ou mesmo geradas pela base de dados da
                    própria empresa.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Informais:</h4>
                <ul>
                  <li>
                    São aquelas que não podemos confiar na origem, mas que podem
                    ser relevantes para uma tomada de decisão assertiva.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Formal ou informal, é fundamental que a informação esteja
              estruturada e que possa ser acessada. Uma informação não
              estruturada não está padronizada e, portanto, não serve para fins
              de gestão de uma organização. É preciso organizar a gestão das
              informações, tanto formais quanto informais, para melhor apoiar a
              gestão da organização.
            </p>
            <h3>Tipos de conhecimento</h3>
            <p>
              Quanto mais madura for uma organização, melhor uso ela faz das
              suas informações, assim como gera conhecimento com base neste uso.
              Este conhecimento pode estar armazenado em um banco de dados ou
              ser de conhecimento das pessoas que trabalham na organização e que
              são responsáveis por executar as tarefas que fazem o negócio
              acontecer.
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
                    É o individual, que os profissionais possuem e que
                    dificilmente podem ser gerenciados, pois são conhecimentos
                    que estão “na cabeça” dos indivíduos.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Explícito:</h4>
                <ul>
                  <li>
                    Que já está disponível para ser acessado por qualquer
                    profissional em uma organização, seja por meio de
                    treinamento ou de manuais e procedimentos de trabalho.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Nesse assunto, o grande desafio é conseguir transformar
              <strong>conhecimento tácito em conhecimento explícito</strong>,
              pois depende das pessoas conseguir passar esse conhecimento
              adiante, para outras pessoas. Quando o conhecimento é
              disponibilizado para todos os profissionais, isso permite que a
              organização seja mais rápida e mais assertiva em sua tomada de
              decisão, o que em um mundo competitivo como o que estamos vivendo,
              pode ser a diferença entre o sucesso e o fracasso de um negócio.
            </p>
            <p>
              Dessa forma, a gestão do conhecimento de uma organização é algo
              bastante importante e que precisa ser tratada com cuidado, com
              tecnologia adequada.
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
            <h3>Movimento do dado</h3>
            <p>
              A evolução do dado até a geração de conhecimento requer uma
              análise detalhada do que se espera destes dados, de como eles
              serão usados e para quê. Com essa análise, é possível estruturar o
              dado de forma que seja mais fácil de ser armazenado e,
              principalmente, acessado para uso.
            </p>
            <p>
              Organização e significação de dados, transformando-os em
              informação útil. Logo, este primeiro movimento de transformação do
              dado em informação requer a definição da utilidade do dado.
            </p>
            <h3>Categorização</h3>
            <ul>
              <li>Demanda e análise matemática ou estatística dos dados;</li>
              <li>Possibilita a síntese/condensação e análise dos dados.</li>
            </ul>
            <p>
              A informação também pode ser transformada em conhecimento, o que
              requer que a análise para estruturação dos dados tenha sido
              completa e adequada e que os dados estejam organizados de forma a
              conter todas as informações necessárias para gerar o conhecimento.
              Para que o conhecimento seja efetivo, é preciso que as informações
              possam ser comparadas para gerar conclusões e permitam conexões
              fáceis com novas informações que surgem ao longo do tempo.
            </p>
            <p>
              Muitas vezes, o conhecimento requer novas informações e o fluxo
              pode então ser realizado de forma inversa. Ou seja, o conhecimento
              exige uma nova informação que, por sua vez, precisa de novos dados
              para ser gerada. E este é um movimento constante, que deve
              acompanhar o movimento das organizações, que estão o tempo todo
              inovando e se reinventando e, para isso, precisam que os sistemas
              de informação também evoluam com rapidez para apoiar o crescimento
              dos negócios.
            </p>
            <p>
              Dessa forma, podemos resumir o fluxo de transformação do dado até
              virar conhecimento, e o fluxo inverso, do conhecimento demandando
              novos dados, da seguinte forma:
            </p>
            <p>
              O fluxo de transformação do dado até virar conhecimento, e o fluxo
              inverso, do conhecimento demandando novos dados, segue uma
              hierarquia: **Dados** (armazenados, organizados, avaliados) se
              transformam em **Informação** (organizada, disseminada, usada na
              tomada de decisão), que por sua vez gera **Conhecimento** (que
              pode gerar necessidade de novos dados, formando um ciclo
              completo).
            </p>
            <p>
              A experiência dos gestores no uso das informações torna o fluxo
              mais eficiente, pois mais rapidamente os dados são transformados
              em conhecimento, que, com base nas necessidades de negócio,
              alimenta novamente a base de dados com novos dados necessários
              para novas análises e conhecimentos. É um ciclo contínuo, que
              apoia o negócio e permite o crescimento da organização.
            </p>
            <p>
              Como estudamos nesta aula, por estarmos vivendo em uma Sociedade
              da Informação, é possível afirmar que todas as organizações
              precisam de informações bem estruturadas e relevantes, de forma
              que gerem conhecimento que permita vantagem competitiva e valor
              agregado para os negócios? Pense sobre isso.
            </p>
            <p>
              A informação de uma organização é o seu principal bem, acima até
              mesmo dos bens materiais. Toda a estratégia organizacional
              definida está refletida nas suas informações, que precisam estar
              armazenadas de forma adequada, precisam ser disponibilizadas
              apenas para pessoas com o devido acesso e precisam estar seguras
              contra perdas e acessos indevidos. Gestão da informação e do
              conhecimento é, portanto, um assunto bastante importante, extenso
              e complexo. Mais adiante nos aprofundaremos ainda mais na gestão
              da informação e suas implicações para uma organização.
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
            <h3>Diferença entre Técnica e Tecnologia</h3>
            <p>
              Antes de aprofundar nos sistemas de informação, é importante
              relembrar dois conceitos que, embora por vezes usados como
              sinônimos, possuem distinções cruciais em nosso contexto:
              **Técnica** e **Tecnologia**.
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
            <h3>O que são Sistemas de Informação (SI)?</h3>
            <p>
              Um **Sistema de Informação** pode ser tanto automatizado (apoiado
              em Tecnologia da Informação - TI) quanto manual. Ele abrange
              pessoas e processos organizados para coletar, armazenar,
              processar, transmitir e disseminar dados que são transformados em
              informação. Essa informação é, então, utilizada para apoiar a
              tomada de decisão dos usuários.
            </p>
            <p>
              Em essência, um Sistema de Informação é um conjunto de elementos
              inter-relacionados que, a partir de uma **entrada de dados
              brutos** e seu **processamento**, geram como **saída uma
              informação relevante** para a gestão de uma organização.
            </p>
            <p>
              Quanto mais valor uma informação agregar ao negócio por meio de
              uma tomada de decisão assertiva, maior será o seu valor para as
              organizações. Para isso, a informação precisa ter **qualidade, ser
              clara e precisa**.
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
            <h3>As Dimensões de um Sistema de Informação</h3>
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
              Além disso, uma organização está dividida em **níveis hierárquicos
              ou decisórios**: o operacional, o tático e o estratégico.
              Compreendido tudo isso, podemos então detalhar as dimensões de um
              sistema de informação:
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
                    É essencial assegurar que a **cultura organizacional**, suas
                    regras e valores (escritos ou não), sejam considerados para
                    garantir a segurança e o uso adequado dos dados.
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
                    será utilizado. Isso inclui o **software** mais adequado
                    para processar as informações exigidas pelo funcionamento da
                    organização e o **hardware** que dará suporte a esse
                    software e ao volume de informações e processamento
                    existentes.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Um sistema de informação deve dar conta dessas três dimensões para
              ter capacidade de atender à organização em todas as suas
              necessidades.
            </p>
            <h3>Classificação dos Sistemas de Informação por Tipo</h3>
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
                    como **Business Intelligence (BI)** para oferecer um
                    processamento inteligente das informações existentes,
                    apoiando de forma efetiva a tomada de decisão.
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Como a Tecnologia da Informação (TI) Apoia Esses Sistemas</h3>
            <h4>Definição de TI:</h4>
            <p>
              A **Tecnologia da Informação** é um conjunto de atividades e
              soluções providas por recursos computacionais. Seus objetivos são
              a produção, o armazenamento, a transmissão, o acesso, a segurança
              e o uso das informações. O foco principal da TI é cuidar das
              informações das organizações, sendo uma área essencial para o bom
              desempenho corporativo.
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

            <h3>
              Características das Formas de Troca de Informações no Cenário
              Digital
            </h3>
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
          </div>
          <div>
            <h3>A Gestão da Informação</h3>
            <p>
              O uso eficaz da informação disponível é condição vital para o
              sucesso de qualquer organização. Por isso, devemos estar
              preparados para fazer uma gestão eficiente dessas informações que
              apoiam a tomada de decisão das organizações.
            </p>
            <h4>O que significa estar vivendo na Sociedade da Informação?</h4>
            <p>
              O volume das informações que circula dentro das empresas está cada
              vez maior, e é fundamental fazer uma gestão eficiente dessas
              informações, de forma que seja possível armazená-las e acessá-las
              sempre que for preciso. Na T.I., a Gestão da Informação é
              fundamental para alimentar todas as demais áreas da empresa com
              informações relevantes, organizadas e de fácil acesso. Um
              profissional de T.I. que tem conhecimento sobre Gestão de T.I. é
              capaz de catalogar, discutir, armazanar, organizar e distribuir as
              informações, mesmo em grandes volumes.
            </p>
            <h4>IMPORTANTE:</h4>
            <p>
              A informação é um ativo da empresa, precisa ser cuidada e tratada
              de forma adequada para que funcione bem. Ela também é um recurso,
              precisa ser gerenciada para estar sempre disponível para atender
              às necessidades da empresa.
            </p>
            <h3>Gestão adequada das informações</h3>
            <h4>Depende de:</h4>
            <ul>
              <li>Rotina;</li>
              <li>Pessoas especializadas;</li>
              <li>Ferramentas adequadas.</li>
            </ul>
            <p>
              Logo, a gestão da informação é um processo organizacional que
              precisa ser bem gerido.
            </p>
            <h4>Fluxo da informação é composto por:</h4>
            <ul>
              <li>Pessoas;</li>
              <li>Fontes de informação;</li>
              <li>Tecnologias utilizadas;</li>
              <li>Produtos e serviços;</li>
            </ul>
            <p>
              Assim, temos como a informação e o conhecimento são obtidos,
              distribuídos e utilizados pela organização.
            </p>
            <h4>Gestão eficiente da informação:</h4>
            <ul>
              <li>Processos bem definidos;</li>
              <li>Pessoas bem treinadas e comprometidas;</li>
            </ul>
            <p>Isso gera:</p>
            <ul>
              <li>Disciplina do armazenamento correto;</li>
              <li>Acesso seguro;</li>
              <li>
                Disponibilização no momento correto e para as pessoas corretas.
              </li>
            </ul>
            <h4>Passo a passo da Gestão da Informação:</h4>
            <ul>
              <li>
                Entender as necessidades de informação das diversas áreas de uma
                organização;
              </li>
              <li>Analizar e processar essas informações;</li>
              <li>
                Disponibilizá-las para resolver os problemas organizacionais.
              </li>
            </ul>
            <p>
              De acordo com Davenport (1998), a gestão da informação pode ser
              organizada nas seguintes fases:
            </p>
            <ul>
              <li>Determinação das exigências de informação;</li>
              <li>Coleta da informação;</li>
              <li>Distribuição da informação;</li>
              <li>Utilização da informação.</li>
            </ul>
            <p>
              De acordo com Choo (2006), temos um melhor detalhamento com a
              gestão do conhecimento:
            </p>
            <ul>
              <li>Necessidade da informação;</li>
              <li>Aquisição da informação;</li>
              <li>Organização e armazenamento da informação;</li>
              <li>Produtos e serviços da informação;</li>
              <li>Distribuição da informação;</li>
              <li>Utilização da informação;</li>
              <li>Comportamento adaptativo.</li>
            </ul>
            <h4>Vamos compreender o objetivo de cada uma dessas fases:</h4>
            <ul>
              <li>
                Levantamento das informações que são necessárias para cada uma
                das áreas da organização;
              </li>
              <li>
                É preciso conhecer o negócio para fazer a gestão de clientes,
                fornecedores, concorrentes e todas as demais informações
                necessárias para manter a empresa em funcionamento;
              </li>
              <li>
                É preciso saber quem precisa da informação e quais são as
                informações essenciais;
              </li>
              <li>
                É preciso avaliar se a qualidade da informação está adequada à
                necessidade;
              </li>
              <li>É preciso identificar onde está a informação;</li>
              <li>
                É preciso conhecer por que e como as informação devem ser
                coletadas.
              </li>
            </ul>
            <p>
              Quanto mais crítico for no armazenamento das informações
              essenciais, melhor será o sistema de Gestão da Informação. A
              qualidade da informação é muito importante para uma tomada de
              decisão assertiva.
            </p>
            <h4>Atrapalham a boa gestão da informação:</h4>
            <ul>
              <li>Falta de exatidão;</li>
              <li>Formato errado;</li>
              <li>Falta de confiabilidade;</li>
              <li>Dificuldade de utilização</li>
            </ul>
            <p>Tudo isso pode gerar sérios problemas para as organizações.</p>
            <p>
              As informações podem ser obtidas tanto dentro das organizações
              quanto fora delas. As que estão dentro precisam ser divulgadas
              para que não se perca tempo buscando informações já disponíveis.
              As pessoas que buscam informação fora da organização precisam ter
              certeza, senso de responsabilidade, e isso de maneira rápida,
              direta e confiável, a fim de agilizar a Gestão.
            </p>
            <blockquote>
              <q>
                A vantagem competitiva surge da habilidade de identifificar
                atores, assuntos e fontes de informação relevantes que permitam
                a compreensão das implicações das mudanças ambientais anunciadas
              </q>
              <cite>Strauhs et al (2012, P. 27)</cite>
            </blockquote>
            <h4>Podem mudar a necessidade de informação:</h4>
            <ul>
              <li>Mudanças econômicas;</li>
              <li>Evoluções no mercado;</li>
              <li>Demanda de clientes;</li>
              <li>Mudanças sociais ou políticas.</li>
            </ul>
            <p>
              Ou seja, a gestão da informação é algo sistêmico, que não acaba,
              mas está em constante evolução.
            </p>
            <h3>Organização e armazenamento das informações</h3>
            <p>
              A forma de organizar e armazenar a informação deve ser flexível,
              para atender as necessidades específicas de seus usuários. Uma
              mesma informação pode ser necessária e útil para mais de um
              usuário.
            </p>
            <p>É preciso cuidar das diferenças entre:</p>
            <ul>
              <li>Categorias;</li>
              <li>Terminologias;</li>
              <li>Linguagem;</li>
              <li>Forma de indexação.</li>
            </ul>
            <p>
              Logo, o compartilhamento da informação requer padronização e
              conscientização dos usuários sobre a necessidade de manter as
              regras definidas para garantir que a informação seja compreendida
              e usada por todos.
            </p>
            <h4>O que é um banco de dados?</h4>
            <p>
              Um conjunto de arquivos relacionados entre si que armazena dados
              sobre pessoas, lugares ou coisas. É uma coleção organizada de
              dados que se relacionam para criar algum sentido, para criar
              informação.
            </p>
            <h4>Modelagem de dados</h4>
            <ul>
              <li>
                Envolve a identificação dos objetos de dados, que são uma
                representação do dado, sua dimensão - largura, altura e
                profundidade;
              </li>
              <li>
                Envolve os atributos dos dados, suas propriedades - cor, modelo,
                ano, etc;
              </li>
              <li>
                Envolve o tipo, o formato - numérico, alfanumérico, booleano,
                etc;
              </li>
              <li>
                Envolve os possíveis relacionamentos entre eles, quantidade de
                ocorrências possíveis entre um par de dados - cardinalidade.
              </li>
            </ul>
            <h3>Distribuição e utilização da informação</h3>
            <h4>Informação pode ser tratada como:</h4>
            <ul>
              <li>
                <h4>Produto:</h4>
              </li>
              <ul>
                <li>
                  Pode ser produzida, armazenada e avaliada para garantir se
                  está correta e completa.
                </li>
              </ul>
              <li>
                <h4>Serviço:</h4>
              </li>
              <ul>
                <li>
                  O foco está no uso que se dá à informação. É avaliada com base
                  na facilidade de acesso e na possibilidade de mudança de
                  formato e de relacionamento com outras informações.
                </li>
              </ul>
            </ul>
            <p>
              Muitas empresas tratam a informação como produto e serviço,
              garantindo flexibilidade e confiabilidade na hora do uso.
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
              O fácil acesso possibilita que os processos sejam executados e que
              as tomadas de decisão sejam diretas e assertivas. Porém, é preciso
              garantir que apenas pessoas autorizadas tenham acesso a tais
              informações, evitando o risco de divulgação de informações
              confidenciais e estratégias fora da organização.
            </p>
            <h3>Comportamento adaptativo</h3>
            <p>
              Aqui, é preciso que o modelo de dados tenha sido construído de
              forma flexível, permitindo a criação de novas tabelas e de novos
              relacionamentos. Quanto mais independência existir entre os
              objetos de dados, mais fácil será criar novos atributos e novos
              relacionamentos entre esses objetos.
            </p>
            <p>
              Também é importante garantir a padronização de nomes e conceitos,
              para evitar duplicações e planejar o reúso das informações.
            </p>
            <h4>Onde a T.I. se encaixa em tudo isso?</h4>
            <p>
              Ela apoia a Gestão da Informação com tecnologia, para facilitar e
              trazer eficiência à recuperação rápida das informações. Torna
              possível combinar hardware e software para agilizar e facilitar a
              armazenamento e o acesso às informações.
            </p>
            <p>
              Também é responsável por desenvolver procedimentos e rotinas para
              otimizar:
            </p>
            <ul>
              <li>A criação;</li>
              <li>O fluxo;</li>
              <li>A aprendizagem;</li>
              <li>A proteção;</li>
              <li>O compartilhamento das informações.</li>
            </ul>
          </div>
          <div>
            <h3>Gestão do Conhecimento</h3>
            <p>
              O grande ganho competitivo das organizações ocorre quando elas
              conseguem sistematizar a Gestão da Informação e a Gestão do
              Conhecimento.
            </p>
            <h3>O que é Gestão do Conhecimento?</h3>
            <p>
              Um conceito amplo, que engloba uma série de ações para possiblitar
              que o conhecimento disponível seja identificado e analisado.
            </p>
            <blockquote>
              <q>
                A Gestão do Conhecimento, do inglês KM - knowledge management, é
                o nome dado ao conjunto de tecnologias e processos cujo objetivo
                é apoiar a criação, a transferência e a aplicação do
                conhecimento nas organizações. O conhecimento e a Gestão do
                Conhecimento são conceitos complexos
              </q>
              <cite>Wikipedia (on-line)</cite>
            </blockquote>
            <blockquote>
              <q>
                É a disciplina que promove, com visão integrada, o gerenciamento
                e o compartilhamento de todo ativo de informação possuído pela
                empresa, em documentos, pessoas, etc
              </q>
              <cite>Gartner Group (on-line)</cite>
            </blockquote>
            <p>
              As pessoas "sabem" o que precisa ser feito, e isso é muito
              subjetivo, pois a organização passa a depender de seus
              profissionais para que tarefas sejam realizadas, e também treinar
              novos profissionais que vão apoiar o crescimento e a evolução da
              empresa. Então, o conhecimento faz parte do ser humano. Ele é o
              dententor do conhecimento, e evolui esse conhecimento conforme
              aprimora sua forma de executar o trabalho.
            </p>
            <h4>Gestão da Informação X Gestão do Conhecimento:</h4>
            <p>
              Não são sinônimos, são assuntos que se complementam, que se
              completam.
            </p>
            <ul>
              <li>
                <h4>Gestão da Informação:</h4>
              </li>
              <ul>
                <li>Permite organizar e facilitar o acesso às informações;</li>
                <li>Possibilita a criação de conhecimento;</li>
                <li>
                  Se preocupa em identificar, armazenar, analisar e
                  disponibilizar a informação correta e relevante.
                </li>
              </ul>
              <li>
                <h4>Gestão do Conhecimento:</h4>
              </li>
              <ul>
                <li>
                  A geração e o uso do conhecimento são influenciados pela
                  cultura dos profissionais, que buscam formas de produzir
                  conhecimento com base na integração de novas informações às
                  experiências vividas no dia a dia do trabalho, criando novas
                  informações que vão alimentar novos conhecimentos.
                </li>
              </ul>
            </ul>
            <h3>Gestão Adequada do Conhecimento</h3>
            <p>
              Segundo Nonaka e Takeuchi (1997), o conhecimento pode ser tácito
              ou explícito:
            </p>
            <ul>
              <li>
                <h4>Tácito:</h4>
              </li>
              <ul>
                <li>
                  Conhecimento individual, que está na "cabeça" das pessoas. O
                  que já sabem fazer por fazerem repetidas vezes, no
                  "automático". É difícil de gerenciar, pois frequentemente não
                  sabem explicar, apenas fazer.
                </li>
              </ul>
              <li>
                <h4>Explícito:</h4>
              </li>
              <ul>
                <li>
                  Conhecimento público, conhecido por todos. Já passou de tácito
                  para explícito através de explicação e transmissão desse
                  conhecimento para outros.
                </li>
              </ul>
            </ul>
            <p>
              Nenhum conhecimento é criado explícito. Primeiro ele é tácito,
              depois é explicado e transmitido, e se torna explícito. Logo,
              entendemos que quanto mais explícito estiver o conhecimento, mais
              independente de pessoas será o funcionamento da empresa. O
              importante é que o conhecimento seja divulgado e que mais pessoas
              conheçam e saibam o que fazer.
            </p>
            <p>
              Conhecimento tácito não é criado de um dia para o outro, depende
              de:
            </p>
            <ul>
              <li>Experiências individuais vividas;</li>
              <li>Valores familiares;</li>
              <li>Cultura do grupo em que está inserido;</li>
              <li>Educação formal e informal;</li>
              <li>
                É criado com base no reflexo das ações das pessoas no seu
                ambiente.
              </li>
            </ul>
            <p>
              A ação de divulgar conhecimento tácito é o que o torna explícito,
              em algo tangível que pode ser compartilhado. Isso não ocorre de
              forma linear, de uma só vez, ocorre de forma interativa, gradual,
              conforme o relacionamento entre as pessoas.
            </p>
            <h4>Espiral do conhecimento:</h4>
            <ul>
              <li>
                <h4>Socialização:</h4>
              </li>
              <ul>
                <li>
                  Transformação do conhecimento tácito de uma pessoa em
                  conhecimento tácito de outra. Quando alguém ensina para outro
                  determinada tarefa. O que está aprendendo repete, imita, mas
                  ainda não criou sua forma de fazer.
                </li>
              </ul>
              <li>
                <h4>Externalização:</h4>
              </li>
              <ul>
                <li>
                  Transformação do conhecimento tácito em conhecimento
                  explícito. Quando a pessoa aprendeu a nova tarefa, discutiu
                  sobre ela, criou sua forma de executá-la, consegue explicá-la
                  e externalizar seu novo conhecimento. Tudo isso com base na
                  comparação, na repetição e na criação da sua própria forma de
                  executar a tarefa.
                </li>
              </ul>
              <li>
                <h4>Combinação:</h4>
              </li>
              <ul>
                <li>
                  Transformação do conhecimento explícito de uma pessoa em
                  conhecimento explícito de outra. A forma de execução de uma
                  tarefa é feita através do compartilhamento entre duas pessoas,
                  que analisam diferentes formas, combinam seus jeitos e geram
                  uma forma melhor de executar a tarefa. Melhoria contínua.
                </li>
              </ul>
              <li>
                <h4>Internalização:</h4>
              </li>
              <ul>
                <li>
                  Transformação do conhecimento explícito em conhecimento
                  tácito. Quem está aprendendo uma nova tarefa, precisa
                  analisá-la para compreender e internalizar esse novo
                  conhecimento. Feito isso, o novo conhecimento passa a fazer
                  sentido, e a pessoa entende o que e porque está fazendo
                  aquilo.
                </li>
              </ul>
            </ul>
            <h4>Dificultam a constução/transformação de conhecimento:</h4>
            <ul>
              <li>Medo de perder o cargo para outra pessoa;</li>
              <li>Dificuldade de se expressar e ensinar;</li>
              <li>Falta de tempo.</li>
            </ul>
            <h3>Organização do conhecimento</h3>
            <blockquote>
              <q>
                O papel da Gestão do conhecimento nas organizações é
                proporcionar condições para criar, adquirir, organizar e
                processar informações estratégicas e, assim, gerar benefícios
                (inclusive financeiros), aumentando a competitividade.
              </q>
            </blockquote>
            <p>
              A Gestão do Conhecimento envolve uma infraestrutura física e
              digital adequada e um processo para incentivar a troca do
              conhecimento entre as pessoas. Ou seja, um processo definido, o
              apoio da T.I., automatizando o armazenamento e o acesso ao
              conhecimento e a colaboração das pessoas para transformar
              conhecimento tácito em explícito.
            </p>
            <h4>Principais objetivos da Gestão do Conhecimento:</h4>
            <ul>
              <li>Aprendizado organizacional;</li>
              <li>Desenvolvimento de novas competências;</li>
              <li>Mapeamento;</li>
              <li>Codificação;</li>
              <li>Compartilhamento entre os profissionais.</li>
            </ul>
            <p>
              A maneira de organizar toda a informação disponível é criar um
              "repositório" onde as experiências possam ser armazenadas, criando
              uma memória organizacional, que poderá ser acessada a qualquer
              momento. Essa criação de "repositório" é função da T.I., que cria
              um banco de dados para armazenar informações relevantes e
              importantes da organização.
            </p>
            <p>
              Uma outra forma é criar mapas do conhecimento, que podem ser
              automatizados através de softwares ou manuais através de quadros
              informativos, painéis com procedimentos operacionais ou por meio
              de treinamentos contínuos.
            </p>
            <h3>Técnicas de compartilhamento do conhecimento</h3>
            <p>
              Strauhs et al (2012) discute a importância de criar uma memória
              organizacional com o objetivo de capturar, disseminar e reutilizar
              as informações de projetos já realizados.
              <q>Nada se cria, tudo se copia</q>. Até mesmo o que deu errado
              deve ser analisado, com o propósito de aprender e de não cometer o
              mesmo erro novamente.
            </p>
            <h4>Algumas técnicas:</h4>
            <ul>
              <li>
                <h4>Reunião de lições aprendidas:</h4>
              </li>
              <ul>
                <li>
                  Deve ser realizada ao final de um projeto, ou de tempos em
                  tempos, para identificar e discutir pontos importantes no
                  projeto. Podem ser situações que deram certo ou que deram
                  errado. É fazer uma análise crítica do trabalho realizado e
                  dos resultados obtidos. Registrar o que deu certo para poder
                  repetir, e o que deu errado para evitar.
                </li>
              </ul>
              <li>
                <h4>Portal de compartilhamento:</h4>
              </li>
              <ul>
                <li>
                  Os profissionais são incentivados a "alimentar" esse portal
                  com informações relevantes, dando feedback de possíveis
                  melhorias, explicando os motivos e ganhos dessas melhorias. As
                  melhorias são analisadas por um grupo específico, que dicide
                  quais implantar, com foco em melhorar o desempenho
                  organizacional.
                </li>
              </ul>
              <li>
                <h4>Comunidade de práticas:</h4>
              </li>
              <ul>
                <li>
                  Tem um objetivo específico, por um tempo predeterminado, e
                  visam analisar um problema e buscar a melhor solução. É
                  importante que essa comunidade seja multidisciplinar e se
                  forme de maneira espontânea, com profissionais se oferecendo
                  para a solução do problema.
                </li>
              </ul>
            </ul>
            <h3>Gestão do Conhecimento e Inovação</h3>
            <p>
              Uma empresa que aprende é uma empresa que melhora seu desempenho,
              que é mais competitiva, que está o tempo todo se reinventando e
              fazendo melhor o seu trabalho. Isto é inovar: buscar fazer melhor
              a cada dia!
            </p>
            <p>
              Um gestor de uma organização deve estar atento a promover a
              aprendizagem organizacional, pelo incentivo ao compartilhamento do
              conhecimento.
            </p>
            <h4>Algumas habilidades de um gestor para incentivar:</h4>
            <ul>
              <li>Fazer uso intenso do diálogo;</li>
              <li>Construir parcerias com seus subordinados;</li>
              <li>
                Capacidade de superar desafios para promover mudanças no
                comportamento das pessoas;
              </li>
              <li>
                Valorizar a diversidade de formação e de conhecimento, para que
                os mais experiêntes se sintam motivados a ensinar os novatos, e
                os novatos não se sintam constrangidos em aprender com os mais
                experiêntes;
              </li>
              <li>
                Buscar o apoio da T.I. para facilitar o armazenamento, a
                disseminação e o uso do conhecimento acumulado;
              </li>
              <li>
                Ser criativo para estar constantemente buscando formas
                interessantes de capturar e armazenar organizadamente o
                conhecimento criado ao longo do tempo.
              </li>
            </ul>
            <p>
              A Gestão do Conhecimento não é algo isolado, mas um processo que
              se relaciona com toda a cadeia produtiva, podendo acumular
              conhecimento ao longo do funcionamento da empresa.
            </p>
          </div>
          <div>
            <h3>Segurança da Informação</h3>
            <p>
              A Gestão da Informação é um processo composto por várias etapas e
              não é algo estático, pois novas necessidades de informação surgem
              a todo momento. Essas informações bem trabalhadas, organizadas,
              são um grande bem para qualquer empresa. Daí a necessidade da
              segurança da informação.
            </p>
            <p>
              Cada vez mais as empresas estão contratando profissionais
              especializados em segurança da informação, seja para buscar
              soluções seguras para seus negócios, seja para tentar encontrar
              falhas ou vulnerabilidades.
            </p>
            <p>
              Quando falamos em segurança da informação, existe uma norma que é
              especializada no assunto e direciona as boas práticas para
              minimizar riscos, é a norma ISO/IEC 27000. Ela diz respeito a
              riscos associados à atividades de computação, interconexão entre
              computadores e demais aspéctos físicos e humanos. É importante
              definir uma política de segurança para os controles lógicos e
              físicos necessários para assegurar um determinado nível de
              disponibilidade dos sistemas, confiabilidade dos dados e servir de
              referência para ações de treinamento dos usuários e demais
              procedimentos de segurança. Porém, não existe segurança absoluta,
              sempre existiram vulnerabilidades.
            </p>
            <p>
              As normas ISO/IEC 27000 estruturam o Sistema de Gestão de
              Segurança da Informação (SGSI). As mais conhecidas são as ISO
              27001 e 27002. Todas as normas 27000 juntas cuidam de assuntos
              relacionados à segurança de dados digitais ou sistemas de
              armazenamento eletrônico. O SGSI busca uma forma segura para todos
              os tipos de dados e informações de uma empresa e possui atributos
              básicos como confidencialidade, integridade e disponibilidade.
            </p>
            <p>
              Os conceitos de segurança da informação vão além de questões
              tecnológicas, podem envolver:
            </p>
            <ul>
              <li>Danos materiais;</li>
              <li>Vazamento de informações;</li>
              <li>Violação da integridade;</li>
              <li>Uso indevido de recusos e dados;</li>
              <li>Interceptação de informações;</li>
              <li>Interrupção de serviços.</li>
            </ul>
            <h3>Confidencialidade, Integridade e Disponibilidade</h3>
            <p>Até o momento sabemos sobre:</p>
            <ul>
              <li>O que é um sistema;</li>
              <li>Sistemas de informação;</li>
              <li>Gestão da informação;</li>
              <li>
                Importância de uma informação completa e correta no momento do
                uso;
              </li>
              <li>Gestão adequada do conhecimento.</li>
            </ul>
            <p>
              Agora vamos discutir sobre alguns conceitos básicos sobre
              segurança da informação:
            </p>
            <ul>
              <li>
                <h4>Ativo de informação:</h4>
              </li>
              <ul>
                <li>Qualquer elemento que tenha valor para uma empresa.</li>
              </ul>
              <li>
                <h4>Valor do ativo:</h4>
              </li>
              <ul>
                <li>
                  Quantificação de perda de determinado ativo quando esse tem
                  sua confidencialidade, integridade ou disponibilidade
                  afetadas.
                </li>
              </ul>
              <li>
                <h4>Vulnerabilidade:</h4>
              </li>
              <ul>
                <li>Falha no ambiente que ameace algum ativo.</li>
              </ul>
              <li>
                <h4>Ameaça:</h4>
              </li>
              <ul>
                <li>Possibilidade de exploração de uma vulnerabilidade.</li>
              </ul>
              <li>
                <h4>Impacto:</h4>
              </li>
              <ul>
                <li>
                  Resultado da concretização de uma ameaça contra a
                  vulnerabilidade de um ativo.
                </li>
              </ul>
            </ul>
            <p>
              O objetivo principal da segurança da informação é tomar um
              conjunto de medidas para garantir os princípios básicos e
              preservar informações de uma organização ou indivíduo, de acordo
              com necessidades específicas.
            </p>
            <h4>Esses princípios são:</h4>
            <ul>
              <li>
                <h4>Confidencialidade:</h4>
              </li>
              <ul>
                <li>
                  Princípio que garante que os dados disponíveis em uma empresa
                  somente sejam acessados por pessoas autorizadas. Até mesmo uma
                  simples conversa em lugares públicos sobre assuntos
                  confidenciais de trabalho pode ser um problema muito sério.
                </li>
              </ul>
              <li>
                <h4>Integridade:</h4>
              </li>
              <ul>
                <li>
                  Princípio que garante que dados e programas de computador
                  (código) somente sejam modificados por pessoas ou atividades
                  autorizadas. Ainda considera todas as possíveis causas de
                  modificação, incluindo falhas de hardware e software, eventos
                  ambientais e intervenção humana. O grande problema é a
                  dificuldade de encontrar o problema, pois uma informação
                  acessada pode estar completa e aparentemente confiável, só que
                  errada ou inconsistente, o que gera muita confusão para os
                  negócios.
                </li>
              </ul>
              <li>
                <h4>Disponibilidade:</h4>
              </li>
              <ul>
                <li>
                  Princípio que garante que a informação esteja disponível para
                  o acesso de pessoas e meios autorizados no momento em que
                  forem requisitadas. Alguns casos clássicos de falta de
                  disponibilidade podem ser entendidos como "sistemas fora do
                  ar", perdas de documentos ou perda de acesso à informação.
                </li>
              </ul>
            </ul>
            <p>
              A segurança da informação não está relacionada somente com
              sistemas de informação e dispositivos computacionais, mas a
              qualquer ativo que tenha informação. Assim, instalar um antivírus
              e inserir controle de acesso em todos os sistemas da empresa, são
              medidas de segurança.
            </p>
            <h4>Outros ativos que devem ter proteção:</h4>
            <ul>
              <li>
                <h4>Pessoas:</h4>
              </li>
              <ul>
                <li>
                  Um funcionário adquire muitas informações confidenciais que
                  precisam ser preservadas. Portanto, solicitar que este
                  funcionário assine um termo de confidencialidade é uma medida
                  de segurança.
                </li>
              </ul>
              <li>
                <h4>Documentos impressos:</h4>
              </li>
              <ul>
                <li>
                  É normal em uma empresa ter documentos administrativos como
                  boletos, notas fiscais, cópias de contracheque, etc. Isso pode
                  ser extraviado ou vazado, resultando em sérios impactos como
                  multas e processos judiciais. Então, administrar tudo isso
                  através de inventários que registram todo o controle desses
                  ativos é uma forma de segurança.
                </li>
              </ul>
              <li>
                <h4>Ambientes:</h4>
              </li>
              <ul>
                <li>
                  Alguns ambientes de uma empresa nos quais podem ser expostas
                  informações de altos níveis de confidencialidade, outros
                  ambientes relacionados a integridade e disponibilidade, devem
                  acessados somente por pessoas autorizadas. Isso também é uma
                  forma de segurança.
                </li>
              </ul>
            </ul>
            <h3>Vulnerabilidade e Cibersegurança</h3>
            <ul>
              <li>
                <h4>Vulnerabilidade:</h4>
              </li>
              <ul>
                <li>
                  São fragilidades que podem provocar danos presentes ou futuros
                  para as pessoas e as organizações. É uma fragilidade de um
                  ativo ou grupo de ativos que pode ser explorada por uma ou
                  mais ameaças.
                </li>
              </ul>
              <li>
                <h4>Ameaça:</h4>
              </li>
              <ul>
                <li>
                  São agentes externos ao ativo de informação que exploram as
                  vulnerabilidades para gerar a quebra de um ou mais dos três
                  princípios básicos da segurança da informação
                  (Confidencialidade, integridade, disponibilidade)
                </li>
              </ul>
              <li>
                <h4>Incidente:</h4>
              </li>
              <ul>
                <li>
                  É a ocorrência de um evento que possa interromper os processos
                  do negócio.
                </li>
              </ul>
            </ul>
            <h4>Alguns aspectos da vulnerabilidade:</h4>
            <ul>
              <li>
                Instalações físicas desprotegidas contra incêndios, inundações
                ou outros desastres naturais;
              </li>
              <li>Materiais inadequados empregados nas construções;</li>
              <li>Ausência de políticas de segurança para RH;</li>
              <li>
                Funcionários sem treinamento e insatisfeitos nos locais de
                trabalho;
              </li>
              <li>Ausência de procedimentos de utilização de equipamentos;</li>
              <li>
                Equipamentos sem manutenção adequada e sem restrições para
                utilização;
              </li>
              <li>Softwares desatualizados e sem licença de funcionamento;</li>
            </ul>
            <h4>Vulnerabilidade com base em sua origem:</h4>
            <ul>
              <li>Naturais;</li>
              <li>Organizacionais;</li>
              <li>Físicas</li>
              <li>De hardware</li>
              <li>De software;</li>
              <li>Meios de armazenamento;</li>
              <li>Humanas;</li>
              <li>Nas comunicações.</li>
            </ul>
            <p>Logo, vulnerabilidade tem uma sequência:</p>
            <ol>
              <li>
                <h4>Vulnerabilidade:</h4>
              </li>
              <ul>
                <li>que pode ser explorada por uma ameaça;</li>
              </ul>
              <li>
                <h4>Ameaça:</h4>
              </li>
              <ul>
                <li>que pode se concretizar em um incidente;</li>
              </ul>
              <li>
                <h4>Incidente:</h4>
              </li>
              <ul>
                <li>
                  resultado da concretização da ameaça que explorou a
                  vulnerabilidade.
                </li>
              </ul>
            </ol>
            <h4>Conceito de cibersegurança ou segurança cibernética:</h4>
            <p>
              É a prática de proteger informações e dados que chegam à
              organização, vindas de fontes externas por meio de protocolos de
              internet. É a segurança cibernética que busca proteger a rede das
              empresas de invasões externas. Logo, nem tudo que é segurança da
              informação envolve a cibersegurança, mas toda cibersegurança
              envolve a segurança da informação.
            </p>
            <h4>Algumas boas práticas das empresas:</h4>
            <ul>
              <li>Evitar e combater ataques virtuais;</li>
              <li>
                Identificar e recuperar vulnerabilidades nos sistemas de T.I.;
              </li>
              <li>Proteger dados armazenados virtualmente;</li>
              <li>Determinar regras para gestão das informações;</li>
              <li>Controlar o acesso de usuários aos dados corporativos.</li>
            </ul>
            <h3>Segurança digital</h3>
            <p>
              As ameaças aumentam quase que na mesma proporção que as inovações.
              As informações de uma empresa, sejam digitais ou não, estão no
              centro de qualquer negócio, sendo um valoroso ativo e um
              diferencial competitivo.
            </p>
            <p>
              É impossível ter segurança total das ameaças à segurança da
              informação por causa da constante dinâmica da inovação na evolução
              de hardwares e softwares. Por isso é necessário priorizar o que é
              mais importante e possui maior risco para a empresa.
            </p>
            <h3>Lei Geral de Proteção de Dados Pessoais (LGPD ou LGPDP)</h3>
            <p>
              Lei 13.709/2018 é a legislação que regula as atividades de
              tratamento de dados pessoais e que também altera os atigos 7º e
              16º do Marco Civil da Internet. A lei busca criar um cenário de
              segurança jurídica, com a padronização de normas e práticas, para
              promover a proteção, de forma igualitária e dentro do país e no
              mundo, aos dados pessoais de todo cidadão que esteja no Brasil.
              Ainda estabelece que não importa se a sede de uma organização está
              localizada no Brasil ou no exterior. Havendo processamento de
              informações de pessoas, brasileiras ou não, que estão no
              território nacional, a lei deve ser cumprida pela empresa. Pela
              lei, é permitido compartilhar dados com organismos internacionais
              e com outros países, mas para que isso ocorra, devem ser seguidos
              protocolos seguros que cumpram as exigencias legais.
            </p>
            <h4>Alguns aspectos importantes são:</h4>
            <ul>
              <li>
                <h4>Consentimento:</h4>
              </li>
              <ul>
                <li>
                  Envolve o consentimento do cidadão/cliente para que os dados
                  pessoais possam ser tratados pelas empresas;
                </li>
              </ul>
              <li>
                <h4>Automatização com autorização:</h4>
              </li>
              <ul>
                <li>
                  Permite aos clientes solicitar que dados sejam deletados,
                  solicitar revogação de um consentimento, solicitar
                  transferência de dados para outro fornecedor de serviços;
                </li>
              </ul>
            </ul>
            <p>
              A garantia do cumprimento da lei é feito pala ANPD (Autoridade
              Nacional de Proteção de Dados Pessoais), que regula e orienta,
              preventivamente, sobre como aplicar a lei, fiscaliza as empresas e
              puni ao notar descumprimento da lei.
            </p>
          </div>
          <div>
            <h3>Inteligência do Negócio</h3>
            <p>
              Devido à competitividade, a exigência do mercado tem se voltado a
              novas formas de utilizar os dados organizados. É fundamental e
              importante que essas novas formas tragam mais valor aos negócios.
              Com isso, as empresas estão buscando o que o mercado chama de
              Inteligência dos Negócios ou Business Intelligence (BI), que é uma
              forma inteligente de identificar e tratar as falhas e manter o
              negócio competitivo.
            </p>
            <p>
              Esse conceito também é conhecido como Inteligência Empresarial e
              abrange todos os setores da empresa, tais como:
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
              O BI é capaz de transformar grandes quantidades de dados
              desorganizados e sem sentido em informações essenciais para uma
              boa gestão e principalmente para a tomada de decisão. Seu
              principal objetivo é utilizar esse conjunto de técnicas e
              ferramentas para oferecer suporte à tomada de decisão e ao
              monitoramento de resultados dos investimentos da empresa.
            </p>
            <p>
              Dessa forma, o BI permite agrupar e explorar informações para
              descobrir vantagens para o negócio, apoiando na interpretação e
              análise de dados e informações, identificando oportunidades e
              riscos.
            </p>
            <p>O bom funcionamento do BI depende de integrar:</p>
            <ul>
              <li>O negócio;</li>
              <li>A gestão;</li>
              <li>A TI.</li>
            </ul>
            <h4>
              O BI é muito flexível em captar e obter informações e oferecer
              apoio nas decisões de forma inteligente, estejam as informações e
              dados onde estiverem.
            </h4>
            <p>
              Resumindo, o BI pode ser entendido com um processo orientado por
              tecnologia para analisar dados e apresentar informações
              organizadas e úteis para apoiar a alta gestão das empresas a tomar
              decisões de negócios. O que possibilita isso é uma variedade de
              ferramentas, aplicativos e metodologias que permitem coletar dados
              de sistemas internos e fontes externas, usando até inteligência
              artificial para realizar análises e desenvolver consultas
              coerentes com a necessidade do negócio.
            </p>
            <h3>Big Data</h3>
            <p>
              É um termo utilizado para tratar grandes conjuntos de dados que
              precisam ser processados e armazenados para depois serem usados. É
              um conceito para identificar dados com maior variedade que chegam
              em volumes crescentes e com velocidade cada vez maior. Esse
              conceito foi iniado com 3Vs:
            </p>
            <ul>
              <li>Velocidade;</li>
              <li>Volume;</li>
              <li>Variedade.</li>
            </ul>
            <p>
              Mas por conta das necessidades das empresas e do mercado, o
              conceito evoluiu para 5Vs:
            </p>
            <ul>
              <li>
                <h4>Volume</h4>
              </li>
              <ul>
                <li>
                  A quantidade de dados é o que importa. Com Big Data é possível
                  processar grandes volumes de dados não estruturados. Isso
                  envolve pensar em maneiras de otimizar o armazenamento e o
                  processamento deste enorme volume de dados.
                </li>
              </ul>
              <li>
                <h4>Variedade</h4>
              </li>
              <ul>
                <li>
                  São os vários tipos de dados disponíveis, de fontes e
                  extensões diversas, podendo variar entre texto, áudio e vídeo.
                  Os tipos de dados tradicionais podem ser estruturados e se
                  adequam perfeitamente a um banco de dados relacional, mas os
                  dados não estruturados ou semiestruturados, como texto, áudio
                  e vídeo, exigem um pre-processamento adicional para obter
                  significado e dar suporte a metadados, o que aumenta também a
                  complexidade do armazenamento e do processamento.
                </li>
              </ul>
              <li>
                <h4>Velocidade</h4>
              </li>
              <ul>
                <li>
                  O foco é a taxa mais rápida na qual os dados são recebidos,
                  processados e administrados. Podemos melhorar a velocidade
                  transmitindo os dados diretamente para a memória, em vez de
                  gravar no disco, utilizar produtos inteligentes habilitados
                  para internet que operam em tempo real. Isso tudo exige um
                  trabalho dedicado, mas garante maior velocidade.
                </li>
              </ul>
              <li>
                <h4>Veracidade</h4>
              </li>
              <ul>
                <li>
                  Como as fontes são variadas e complexas, foi necessário
                  inserir o conceito de veracidade para garantir a fonte e a
                  qualidade dos dados, pois eles devem ser confiáveis. É preciso
                  checar a questão de dados inconsistentes ou até mesmo fake
                  news. Os riscos causados por dados não confiáveis podem ser
                  imensos para os negócios.
                </li>
              </ul>
              <li>
                <h4>Valor</h4>
              </li>
              <ul>
                <li>
                  O Big Data se tornou tão necessário que o conceito de valor
                  foi criado. Está relacionado com os benefícios que as soluções
                  de Big Data estão trazendo para as empresas. É preciso que os
                  dados processados e disponibilizados sejam coerentes e úteis
                  para a necessidade do negócio, dessa forma, será agregado
                  valor para a empresa.
                </li>
              </ul>
            </ul>
            <h4>Em resumo, Big Data é:</h4>
            <p>
              Um conjunto de dados maior e mais complexo, envolvendo novas
              fontes e tipos de dados. Esses conjuntos de dados costumam ser tão
              volumosos que um software tradicional de processamento não seria
              capaz de genrenciar. O grande objetivo desses volumosos dados é
              poder resolver problemas de negócios que as empresas não
              conseguiriam resolver antes dos Big Data.
            </p>
            <h3>Data Warehouse</h3>
            <p>
              Traduzido seria armazém de dados. É uma organização de bancos de
              dados para análise e Business Intelligence. Podemos entender como
              um depósito de dados digitais, com o objetivo de armazenar
              informações classificadas e organizadas de uma empresa,
              possibilitar análises e criação de relatórios que ajudam na tomada
              de decisão estratégica. Possui uma arquitetura e um projeto
              técnico voltados para o processamento e o armazenamento de altos
              volumes de dados. É muito relacionado com Big Data.
            </p>
            <p>
              Trata de um sistema de armazenamento de dados, recebendo
              informações de diferentes fontes, internas e externas, que
              alimenta o BI de uma empresa, e é usado para uma efetiva gestão.
            </p>
            <h4>OLAP - Online Analytical Processing:</h4>
            <p>
              É uma das ferramentas mais usadas hoje em dia para exploração de
              um Data Warehouse. Ele possibilita alterar e analisar grandes
              quantidades de dados em várias perspectivas diferentes. Pode ser
              aplicado em áreas muito distintas. Uma das que mais se utilizam
              dessa ferramenta é a área financeira para apoio em análises,
              fluxos de caixa, contas, orçamentos, passando por marketing,
              apoiando a análise de preço e volumes de mercado, indo até os
              processos de vendas, com previsões de faturamento, lucro e
              quantidade de clientes, entre outros.
            </p>
            <h4>Vantagens e Desvantagens do Data Warehouse:</h4>
            <ul>
              <li>
                <h4>Vantagens:</h4>
              </li>
              <ul>
                <li>
                  Várias inconsistências podem ser identificadas e solucionadas
                  antes de os dados serem carregados, o que facilita a execução
                  da análise e de relatórios;
                </li>
                <li>
                  Contribui para o processo de tomada de decisão, por meio de
                  relatórios de tendências, de exceção e relatórios que mostram
                  os objetivos previstos versus desempenho real.
                </li>
              </ul>
              <li>
                <h4>Desvantagens:</h4>
              </li>
              <ul>
                <li>
                  Não é a solução adequada para dados não estruturados, por se
                  tratar de uma organização pautada, muitas vezes, em bancos de
                  dados tradicionais;
                </li>
                <li>Podem ter custos elevados;</li>
                <li>
                  Podem ficar ultrapassados com alguma rapidez, por conta da
                  velocidade da tecnologia.
                </li>
              </ul>
            </ul>
            <p>
              Para resumir, Data Warehouse pode ser entendido como um banco de
              dados com capacidade de armazenar e organizar um grande volume de
              dados, sendo responsável por criar análise e organizar relatórios
              por meio de informações históricas, que podem ajudar as empresas a
              obterem previsões e auxiliar na tomada de decisões importantes.
            </p>
            <h3>Data Mining</h3>
            <p>
              É uma estratégia de marketing muito usada pelas empresas para
              oferecer produtos que te interessam através de informações
              coletadas, processadas e utilizadas por essas empresas. Em
              português, a Mineração de Dados auxilia a identificar e coletar
              dados e descartar ruídos, ou seja, coletar dados relevantes e
              descartar dados irrelevantes.
            </p>
            <p>
              Esses sistemas são muito importantes no mundo dos negócios, pois
              estão preparados para lidar com grandes volumes de informações
              disponibilizadas por todos e para todos na internet. São sistemas
              computacionais criados para processar em volume cada vez maior de
              informações. Seu principal objetivo é vasculhar grandes
              repositórios de dados e tentar descobrir se há algum conhecimento
              escondido neles.
            </p>
            <p>
              Quando se consegue fazer ligações entre as informações e se
              descobre os relacionamentos, é possível definir estratégias para
              otimizar os resultados financeiros das empresas, prevendo
              projeções futuras. Data Mining tem o propósito identificar padrões
              existentes, as consistências e o relacionamento entre os dados.
              Identificados esses pontos, é possível transformar os dados em
              conhecimento para ser usado em decisões estratégicas.
            </p>
            <p>
              Minerar dados é mais do que analisar grandes quantidades de
              informações, envolve descobrir a relação entre as informações.
              Para ser efetivo, o Data Mining precisa ser um processo executado
              em todas as áreas da empresa e cumprir algumas fases:
            </p>
            <ul>
              <li>
                <h4>Identificação do problema:</h4>
              </li>
              <ul>
                <li>
                  Fase responsável por definir um objetivo a ser alcançado.
                </li>
              </ul>
              <li>
                <h4>Descoberta do conhecimento:</h4>
              </li>
              <ul>
                <li>
                  Fase responsável por identificar as relações entre os dados
                  com procedimentos de IA para realizar as análises.
                </li>
              </ul>
              <li>
                <h4>Análise das relações descobertas:</h4>
              </li>
              <ul>
                <li>
                  Fase onde está a inteligência de relações descobertas, o que é
                  feito manualmente ou também com IA.
                </li>
              </ul>
              <li>
                <h4>Uso das relações descobertas:</h4>
              </li>
              <ul>
                <li>
                  É quando as empresas usam as descobertas feitas para gerir seu
                  negócio e tomar as decisões.
                </li>
              </ul>
              <li>
                <h4>Avaliação dos resultados:</h4>
              </li>
              <ul>
                <li>
                  Fase em que se verifica se as descobertas foram realmente
                  úteis para o negócio ou se falta ainda alguma informação para
                  atingir o objetivo que foi definido na 1ª fase.
                </li>
              </ul>
            </ul>
            <h3>Tomada de decisão</h3>
            <p>
              Com o auxílio de sistemas complexos que fazem coletas e análises
              de dados para disponibilizar informações relevantes, os gestores
              tomam decisões. As empresas que se destacam é porque tomaram
              decisões mais assertivas e mais rapidamente. Dados reias,
              organizados, etc, fazem as empresas descartarem informações
              irrelevantes para escolherem as melhores alternativas. Todas as
              técnicas até aqui se complementam entre si, e tem por objetivo
              facilitar a disponibilização de informação coerente e relevante
              para agregar valor ao negócio, apoiando na sustentabilidade e
              manutenção das empresas. O futuro e a estabilidade de uma
              organização dependem disso.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default GestaoDaInformacao;
