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
            <h4>Sistema</h4>
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
            <h4>Podemos classificar os sistemas como:</h4>
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
            <h4>Podemos entender sistema da informação como sendo:</h4>
            <ul>
              <li>Entrada de dados;</li>
              <li>Processamento de informações;</li>
              <li>Saída de conhecimento.</li>
            </ul>

            <h4>Elementos de um sistema de informação</h4>
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
            <h4>Hierarquia da gestão da informação:</h4>
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
            <h4>Tipos de informação e conhecimento</h4>
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
            <h4>Tipos de informação</h4>
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
            <h4>Tipos de conhecimento</h4>
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
            <h4>Movimento do dado</h4>
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
            <h4>Categorização</h4>
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
            <h4>Diferença entre Técnica e Tecnologia</h4>
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
            <h4>O que são Sistemas de Informação (SI)?</h4>
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
                    como **Business Intelligence (BI)** para oferecer um
                    processamento inteligente das informações existentes,
                    apoiando de forma efetiva a tomada de decisão.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Como a Tecnologia da Informação (TI) Apoia Esses Sistemas</h4>
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
          </div>
          <div>
            <h3>A Gestão da Informação</h3>
            <p>
              O uso eficaz da informação disponível é uma{" "}
              <strong>
                condição vital para o sucesso de qualquer organização
              </strong>
              . Por isso, devemos estar preparados para fazer uma{" "}
              <strong>gestão eficiente dessas informações</strong>, pois elas
              apoiam diretamente a tomada de decisão das organizações.
            </p>
            <h4>O que significa estar vivendo na Sociedade da Informação?</h4>
            <p>
              Atualmente, o volume de informações que circula dentro das
              empresas está cada vez maior. É fundamental, portanto, fazer uma{" "}
              <strong>gestão eficiente dessas informações</strong> para que seja
              possível armazená-las e acessá-las sempre que for preciso. Na área
              de Tecnologia da Informação (T.I.), a Gestão da Informação é
              crucial para{" "}
              <strong>
                alimentar todas as demais áreas da empresa com dados relevantes,
                organizados e de fácil acesso
              </strong>
              . Um profissional de T.I. com conhecimento em Gestão da Informação
              é capaz de{" "}
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
                É preciso{" "}
                <strong>identificar onde a informação está localizada</strong>;
              </li>
              <li>
                É fundamental saber{" "}
                <strong>
                  por que e como as informações devem ser coletadas
                </strong>
                .
              </li>
            </ul>
            <p>
              Quanto mais crítico for o armazenamento das informações
              essenciais, melhor será o sistema de Gestão da Informação. A{" "}
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
              Ou seja, a gestão da informação é algo{" "}
              <strong>sistêmico e dinâmico</strong>, que não se encerra, mas
              está em constante evolução.
            </p>
            <h4>Organização e Armazenamento das Informações</h4>
            <p>
              A forma de organizar e armazenar a informação deve ser{" "}
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
              Portanto, o compartilhamento da informação requer{" "}
              <strong>padronização e conscientização</strong> dos usuários sobre
              a necessidade de manter as regras definidas. Isso garante que a
              informação seja compreendida e usada por todos, de forma
              eficiente.
            </p>
            <h4>O que é um banco de dados?</h4>
            <p>
              Um banco de dados é um{" "}
              <strong>conjunto de arquivos relacionados entre si</strong> que
              armazena dados sobre pessoas, lugares ou coisas. É uma{" "}
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
              serviço, garantindo{" "}
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
              Porém, é crucial{" "}
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
              Também é importante garantir a{" "}
              <strong>padronização de nomes e conceitos</strong>, para evitar
              duplicações e planejar o reúso das informações.
            </p>
            <h4>Onde a T.I. se encaixa em tudo isso?</h4>
            <p>
              A Tecnologia da Informação (T.I.) é o{" "}
              <strong>alicerce que apoia a Gestão da Informação</strong>,
              fornecendo a tecnologia para facilitar e trazer eficiência na
              recuperação rápida dos dados. Ela torna possível combinar hardware
              e software para agilizar e facilitar o armazenamento e o acesso às
              informações.
            </p>
            <p>
              A T.I. também é responsável por desenvolver{" "}
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
              conseguem{" "}
              <strong>
                sistematizar a Gestão da Informação e a Gestão do Conhecimento
              </strong>
              . Essa integração é o que realmente impulsiona o sucesso.
            </p>
            <h4>O que é Gestão do Conhecimento?</h4>
            <p>
              É um conceito abrangente que engloba diversas ações para que o{" "}
              <strong>
                conhecimento disponível seja identificado, analisado e utilizado
              </strong>{" "}
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
              inerente ao ser humano. Cada indivíduo é o{" "}
              <strong>detentor de seu conhecimento</strong> e o aprimora
              conforme melhora sua forma de executar o trabalho.
            </p>
            <h4>Gestão da Informação X Gestão do Conhecimento:</h4>
            <p>
              É importante entender que <strong>não são sinônimos</strong>. São,
              na verdade, conceitos que se{" "}
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
                    Se preocupa em{" "}
                    <strong>
                      identificar, armazenar, analisar e disponibilizar
                    </strong>{" "}
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
                    influenciados pela{" "}
                    <strong>cultura dos profissionais</strong>. Eles buscam
                    formas de produzir conhecimento com base na integração de
                    novas informações às experiências vividas no dia a dia do
                    trabalho, criando assim novas informações que, por sua vez,
                    alimentarão novos conhecimentos. É um{" "}
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
                    tarefa várias vezes. É um tipo de conhecimento{" "}
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
              É fundamental compreender que{" "}
              <strong>nenhum conhecimento é criado explícito</strong>. Primeiro,
              ele é tácito; só depois é explicado, transmitido e então se torna
              explícito. Por isso, quanto mais <strong>explícito</strong>{" "}
              estiver o conhecimento,{" "}
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
                É construído com base no{" "}
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
                    É a{" "}
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
                    Consiste na{" "}
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
                    É a{" "}
                    <strong>
                      transformação do conhecimento explícito de uma pessoa em
                      conhecimento explícito de outra
                    </strong>{" "}
                    (ou de outros). A forma de execução de uma tarefa é
                    aprimorada através do compartilhamento e análise entre
                    diferentes pessoas, que combinam seus conhecimentos e geram
                    uma forma melhor de executar a tarefa. É a{" "}
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
                    Corresponde à{" "}
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
              A Gestão do Conhecimento envolve uma{" "}
              <strong>infraestrutura física e digital adequada</strong> e um
              processo para <strong>incentivar a troca de conhecimento</strong>{" "}
              entre as pessoas. Isso significa ter um processo definido, o{" "}
              <strong>apoio da T.I.</strong> (automatizando o armazenamento e o
              acesso ao conhecimento) e a{" "}
              <strong>colaboração ativa das pessoas</strong> para transformar o
              conhecimento tácito em explícito.
            </p>
            <h4>Principais Objetivos da Gestão do Conhecimento:</h4>
            <ul>
              <li>
                Fomentar o <strong>aprendizado organizacional</strong>;
              </li>
              <li>
                Estimular o{" "}
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
              Strauhs et al (2012) discute a importância de criar uma{" "}
              <strong>memória organizacional</strong> com o objetivo de
              capturar, disseminar e reutilizar as informações de projetos já
              realizados. É como o ditado popular: "Nada se cria, tudo se
              copia". Inclusive, o que deu errado deve ser analisado, com o
              propósito de{" "}
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
                    periodicamente, para{" "}
                    <strong>identificar e discutir pontos importantes</strong>.
                    Podem ser situações que deram certo ou que apresentaram
                    problemas. O objetivo é fazer uma{" "}
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
                    com informações relevantes, fornecendo **feedback** sobre
                    possíveis melhorias, explicando os motivos e os ganhos
                    esperados. As melhorias são analisadas por um grupo
                    específico, que decide quais serão implantadas, sempre com
                    foco em{" "}
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
                    melhor solução. É importante que essa comunidade seja{" "}
                    <strong>multidisciplinar</strong> e que se forme de maneira
                    espontânea, com profissionais se oferecendo voluntariamente
                    para a solução do problema.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Gestão do Conhecimento e Inovação</h4>
            <p>
              Uma empresa que aprende continuamente é uma empresa que{" "}
              <strong>melhora seu desempenho</strong>, tornando-se mais
              competitiva e constantemente se reinventando. Isso é{" "}
              <strong>inovar</strong>: buscar fazer melhor a cada dia!
            </p>
            <p>
              Um gestor de uma organização deve estar{" "}
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
              A Gestão do Conhecimento não é algo isolado, mas sim um{" "}
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
              para qualquer empresa, e é por isso que a **segurança da
              informação** se torna essencial.
            </p>
            <p>
              Cada vez mais, as empresas estão contratando profissionais
              **especializados em segurança da informação**. O objetivo é buscar
              soluções seguras para seus negócios e, também, identificar falhas
              ou vulnerabilidades antes que sejam exploradas.
            </p>
            <p>
              Quando falamos em segurança da informação, a **norma ISO/IEC
              27000** é a grande referência. Ela direciona as boas práticas para
              minimizar riscos associados a atividades de computação,
              interconexão entre computadores e outros aspectos físicos e
              humanos. É crucial definir uma **política de segurança** para os
              controles lógicos e físicos, garantindo um determinado nível de
              **disponibilidade dos sistemas** e **confiabilidade dos dados**.
              Essa política também serve de base para treinamentos de usuários e
              outros procedimentos de segurança. No entanto, é importante
              ressaltar que a **segurança absoluta não existe**; sempre haverá
              vulnerabilidades.
            </p>
            <p>
              As normas ISO/IEC 27000 estruturam o **Sistema de Gestão de
              Segurança da Informação (SGSI)**. As mais conhecidas são a ISO
              27001 e a 27002. Juntas, todas as normas 27000 cuidam da segurança
              de dados digitais e sistemas de armazenamento eletrônico. O SGSI
              busca garantir a segurança para todos os tipos de dados e
              informações de uma empresa, baseando-se em três atributos básicos:
              **confidencialidade, integridade e disponibilidade**.
            </p>
            <p>
              Os conceitos de segurança da informação vão além de questões
              puramente tecnológicas, podendo envolver:
            </p>
            <ul>
              <li>**Danos materiais**;</li>
              <li>**Vazamento de informações**;</li>
              <li>**Violação da integridade** dos dados;</li>
              <li>**Uso indevido de recursos e dados**;</li>
              <li>**Interceptação de informações**;</li>
              <li>**Interrupção de serviços**.</li>
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
              Agora, vamos aprofundar nos **conceitos básicos da segurança da
              informação**:
            </p>
            <ul>
              <li>
                <h4>
                  <strong>Ativo de informação:</strong>
                </h4>
                <ul>
                  <li>
                    Qualquer elemento que tenha **valor** para uma empresa. Isso
                    inclui dados, sistemas, hardware, software, pessoas e até
                    mesmo a reputação.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Valor do ativo:</strong>
                </h4>
                <ul>
                  <li>
                    É a quantificação da **perda** de um determinado ativo caso
                    sua confidencialidade, integridade ou disponibilidade sejam
                    comprometidas.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Vulnerabilidade:</strong>
                </h4>
                <ul>
                  <li>
                    É uma **falha ou fraqueza** no ambiente que pode ser
                    explorada para ameaçar um ativo. Pense em uma porta
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
                    É a **possibilidade** de que uma vulnerabilidade seja
                    explorada. No exemplo da porta, seria um ladrão tentando
                    entrar.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Impacto:</strong>
                </h4>
                <ul>
                  <li>
                    É o **resultado negativo** da concretização de uma ameaça
                    que explorou uma vulnerabilidade. Se o ladrão entrar e
                    roubar, isso é o impacto.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              O objetivo principal da segurança da informação é implementar um
              conjunto de medidas para **garantir os princípios básicos** e
              preservar as informações de uma organização ou indivíduo, de
              acordo com suas necessidades específicas.
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
                    **acessados somente por pessoas autorizadas**. Uma conversa
                    informal em local público sobre assuntos de trabalho
                    confidenciais, por exemplo, pode ser uma grave quebra de
                    confidencialidade.
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
                    (código) sejam **modificados apenas por pessoas ou
                    atividades autorizadas**. Ele considera todas as possíveis
                    causas de modificação, incluindo falhas de hardware e
                    software, eventos ambientais e intervenção humana. O grande
                    desafio aqui é identificar problemas, pois uma informação
                    acessada pode parecer completa e confiável, mas estar
                    incorreta ou inconsistente, gerando sérias confusões para os
                    negócios.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Disponibilidade:</strong>
                </h4>
                <ul>
                  <li>
                    Princípio que garante que a informação esteja **disponível
                    para o acesso de pessoas e meios autorizados no momento em
                    que for requisitada**. Casos clássicos de falta de
                    disponibilidade incluem "sistemas fora do ar", perdas de
                    documentos ou impossibilidade de acessar informações
                    cruciais.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A segurança da informação não se limita a sistemas de informação e
              dispositivos computacionais, mas abrange **qualquer ativo que
              contenha informação**. Assim, instalar um antivírus e implementar
              controle de acesso em todos os sistemas da empresa são medidas de
              segurança digital, mas a segurança vai além.
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
                    um **termo de confidencialidade** é uma medida de segurança
                    fundamental.
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
                    judiciais. Administrar tudo isso através de **inventários**
                    que registram e controlam esses ativos é uma forma de
                    segurança.
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
                    ser restrito **somente a pessoas autorizadas**. Isso também
                    é uma forma crucial de segurança.
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
                    São **fragilidades** que podem causar danos presentes ou
                    futuros para pessoas e organizações. É uma fraqueza em um
                    ativo ou grupo de ativos que pode ser explorada por uma ou
                    mais ameaças.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Ameaça:</strong>
                </h4>
                <ul>
                  <li>
                    São **agentes externos** ao ativo de informação que exploram
                    as vulnerabilidades para gerar a quebra de um ou mais dos
                    três princípios básicos da segurança da informação
                    (Confidencialidade, Integridade, Disponibilidade).
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Incidente:</strong>
                </h4>
                <ul>
                  <li>
                    É a **ocorrência de um evento** que pode interromper os
                    processos do negócio, resultando da concretização de uma
                    ameaça que explorou uma vulnerabilidade.
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
                    É a fraqueza existente que **pode ser explorada** por uma
                    ameaça;
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Ameaça:</strong>
                </h4>
                <ul>
                  <li>
                    É o agente que **pode se concretizar** em um incidente ao
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
                    É o **resultado** da concretização da ameaça que explorou a
                    vulnerabilidade, causando um evento indesejado.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Conceito de cibersegurança ou segurança cibernética:</h4>
            <p>
              É a prática de **proteger informações e dados que chegam à
              organização de fontes externas** por meio de protocolos de
              internet. É a segurança cibernética que busca proteger a rede das
              empresas de invasões externas. É importante notar que nem tudo que
              é segurança da informação envolve a cibersegurança, mas **toda
              cibersegurança envolve a segurança da informação**. A
              cibersegurança é um subset da segurança da informação, focada no
              ambiente digital e de rede.
            </p>
            <h4>Algumas boas práticas das empresas em cibersegurança:</h4>
            <ul>
              <li>Evitar e **combater ataques virtuais**;</li>
              <li>
                **Identificar e recuperar vulnerabilidades** nos sistemas de
                T.I.;
              </li>
              <li>**Proteger dados armazenados virtualmente**;</li>
              <li>
                **Determinar regras para gestão** das informações digitais;
              </li>
              <li>
                **Controlar o acesso de usuários** aos dados corporativos.
              </li>
            </ul>
            <h3>Segurança Digital</h3>
            <p>
              As ameaças aumentam quase na mesma proporção que as inovações
              tecnológicas. As informações de uma empresa, sejam digitais ou
              não, estão no centro de qualquer negócio, sendo um **valoroso
              ativo e um diferencial competitivo**.
            </p>
            <p>
              É impossível ter **segurança total** contra todas as ameaças à
              segurança da informação devido à constante dinâmica da inovação em
              hardware e software. Por isso, é necessário **priorizar o que é
              mais importante** e possui maior risco para a empresa, focando os
              esforços de segurança nos pontos mais críticos.
            </p>
            <h4>Lei Geral de Proteção de Dados Pessoais (LGPD ou LGPDP)</h4>
            <p>
              A **Lei 13.709/2018** é a legislação brasileira que regula as
              atividades de tratamento de dados pessoais. Ela também altera os
              artigos 7º e 16º do Marco Civil da Internet. O objetivo da LGPD é
              criar um cenário de **segurança jurídica**, padronizando normas e
              práticas para promover a proteção, de forma igualitária e dentro
              do país e no mundo, aos dados pessoais de todo cidadão que esteja
              no Brasil.
            </p>
            <p>
              A lei estabelece que **não importa se a sede de uma organização
              está localizada no Brasil ou no exterior**. Se houver
              processamento de informações de pessoas (brasileiras ou não) que
              estão no território nacional, a lei deve ser cumprida pela
              empresa. É permitido compartilhar dados com organismos
              internacionais e com outros países, mas para que isso ocorra,
              devem ser seguidos **protocolos seguros** que cumpram as
              exigências legais da LGPD.
            </p>
            <h4>Alguns aspectos importantes da LGPD:</h4>
            <ul>
              <li>
                <h4>
                  <strong>Consentimento:</strong>
                </h4>
                <ul>
                  <li>
                    Envolve a **autorização expressa do cidadão/cliente** para
                    que seus dados pessoais possam ser tratados pelas empresas.
                    Sem esse consentimento claro, o tratamento é ilegal.
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
                    sejam **deletados**, revoguem um consentimento previamente
                    dado, ou solicitem a **transferência de seus dados** para
                    outro fornecedor de serviços. Isso empodera o titular dos
                    dados.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A garantia do cumprimento da lei é feita pela **ANPD (Autoridade
              Nacional de Proteção de Dados Pessoais)**. A ANPD atua regulando e
              orientando preventivamente sobre como aplicar a lei, fiscalizando
              as empresas e aplicando punições quando há descumprimento.
            </p>
          </div>
          <div>
            <h3>Inteligência do Negócio (Business Intelligence - BI)</h3>
            <p>
              Devido à crescente **competitividade do mercado**, as empresas
              buscam novas maneiras de utilizar seus dados organizados para
              gerar mais valor. É nesse cenário que surge o conceito de
              **Inteligência de Negócios** ou **Business Intelligence (BI)**. O
              BI é uma abordagem inteligente para identificar e tratar falhas,
              mantendo o negócio competitivo no mercado.
            </p>
            <p>
              Também conhecido como Inteligência Empresarial, o BI abrange
              **todos os setores da empresa**, como:
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
              Ele é capaz de transformar grandes quantidades de **dados
              desorganizados e sem sentido** em **informações essenciais** para
              uma boa gestão e, principalmente, para a tomada de decisões. Seu
              principal objetivo é utilizar esse conjunto de técnicas e
              ferramentas para **oferecer suporte à tomada de decisão** e ao
              **monitoramento dos resultados** dos investimentos da empresa.
            </p>
            <p>
              Dessa forma, o BI permite agrupar e explorar informações para
              descobrir **vantagens competitivas** para o negócio, apoiando a
              interpretação e análise de dados e informações, e identificando
              **oportunidades e riscos**.
            </p>
            <p>O bom funcionamento do BI depende da integração entre:</p>
            <ul>
              <li>O **Negócio**;</li>
              <li>A **Gestão**;</li>
              <li>A **TI** (Tecnologia da Informação).</li>
            </ul>
            <h4>
              O BI é muito flexível na captação e obtenção de informações,
              oferecendo apoio inteligente às decisões, independentemente de
              onde os dados e informações estejam armazenados.
            </h4>
            <p>
              Em resumo, o BI pode ser entendido como um **processo orientado
              por tecnologia** para analisar dados e apresentar informações
              organizadas e úteis, apoiando a alta gestão das empresas na tomada
              de decisões de negócios. Isso é possível através de uma variedade
              de ferramentas, aplicativos e metodologias que permitem coletar
              dados de sistemas internos e fontes externas, utilizando até mesmo
              **inteligência artificial** para realizar análises e desenvolver
              consultas coerentes com a necessidade do negócio.
            </p>
            <h4>Big Data</h4>
            <p>
              **Big Data** é um termo utilizado para descrever **grandes
              conjuntos de dados** que precisam ser processados e armazenados
              para serem posteriormente utilizados. É um conceito que identifica
              dados com maior variedade, que chegam em volumes crescentes e com
              velocidade cada vez maior. Inicialmente, esse conceito foi
              definido por **3 Vs**:
            </p>
            <ul>
              <li>**Volume**;</li>
              <li>**Velocidade**;</li>
              <li>**Variedade**.</li>
            </ul>
            <p>
              Porém, devido às necessidades das empresas e do mercado, o
              conceito evoluiu para **5 Vs**:
            </p>
            <ul>
              <li>
                <h4>
                  <strong>Volume</strong>
                </h4>
                <ul>
                  <li>
                    Refere-se à **quantidade de dados**. Com Big Data, é
                    possível processar volumes massivos de dados, incluindo os
                    não estruturados. Isso exige otimização no armazenamento e
                    processamento dessa enorme quantidade de informação.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Variedade</strong>
                </h4>
                <ul>
                  <li>
                    Representa os **diversos tipos de dados disponíveis**, de
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
                    Foca na **taxa mais rápida** na qual os dados são recebidos,
                    processados e gerenciados. Podemos melhorar a velocidade
                    transmitindo os dados diretamente para a memória (em vez de
                    gravar no disco) e utilizando produtos inteligentes
                    habilitados para internet que operam em tempo real. Isso
                    exige um trabalho dedicado, mas garante maior agilidade.
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
                    conceito de **veracidade** para garantir a **fonte e a
                    qualidade dos dados**, pois eles devem ser confiáveis. É
                    preciso checar dados inconsistentes ou até mesmo a
                    disseminação de fake news. Os riscos causados por dados não
                    confiáveis podem ser imensos para os negócios.
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
                    **valor** foi criado. Ele está relacionado com os
                    **benefícios** que as soluções de Big Data trazem para as
                    empresas. É fundamental que os dados processados e
                    disponibilizados sejam coerentes e úteis para a necessidade
                    do negócio, agregando, assim, valor à empresa.
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
              **resolver problemas de negócios que as empresas não conseguiriam
              resolver antes do Big Data**.
            </p>
            <h4>Data Warehouse (DW)</h4>
            <p>
              Traduzido como "armazém de dados", um **Data Warehouse** é uma
              organização de bancos de dados voltada para **análise e Business
              Intelligence**. Podemos entendê-lo como um **depósito de dados
              digitais**, cujo objetivo é armazenar informações classificadas e
              organizadas de uma empresa, possibilitando análises e a criação de
              relatórios que ajudam na **tomada de decisão estratégica**. Possui
              uma arquitetura e um projeto técnico dedicados ao processamento e
              armazenamento de **altos volumes de dados**, sendo muito
              relacionado com o conceito de Big Data.
            </p>
            <p>
              O DW é um sistema de armazenamento de dados que recebe informações
              de **diferentes fontes (internas e externas)**, alimenta o BI de
              uma empresa e é usado para uma gestão efetiva.
            </p>
            <h4>OLAP - Online Analytical Processing:</h4>
            <p>
              É uma das ferramentas mais usadas atualmente para a exploração de
              um Data Warehouse. O OLAP permite alterar e analisar grandes
              quantidades de dados sob **várias perspectivas diferentes**. Pode
              ser aplicado em áreas muito distintas. Por exemplo, a área
              financeira o utiliza para apoiar análises de fluxos de caixa,
              contas e orçamentos; o marketing, para análises de preço e volumes
              de mercado; e os processos de vendas, com previsões de
              faturamento, lucro e quantidade de clientes, entre outros.
            </p>
            <h4>Vantagens e Desvantagens do Data Warehouse:</h4>
            <ul>
              <li>
                <h4>
                  <strong>Vantagens:</strong>
                </h4>
                <ul>
                  <li>
                    Várias inconsistências nos dados podem ser **identificadas e
                    solucionadas antes** que sejam carregadas, o que facilita a
                    execução da análise e a geração de relatórios;
                  </li>
                  <li>
                    Contribui para o processo de tomada de decisão, por meio de
                    relatórios de tendências, de exceção e relatórios que
                    comparam **objetivos previstos versus desempenho real**.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Desvantagens:</strong>
                </h4>
                <ul>
                  <li>
                    Não é a solução mais adequada para **dados não
                    estruturados**, por se tratar de uma organização muitas
                    vezes pautada em bancos de dados tradicionais;
                  </li>
                  <li>
                    Podem ter **custos elevados** de implementação e manutenção;
                  </li>
                  <li>
                    Podem ficar **rapidamente desatualizados** devido à alta
                    velocidade da tecnologia e à constante evolução dos dados.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Para resumir, o Data Warehouse pode ser entendido como um banco de
              dados com capacidade de armazenar e organizar um grande volume de
              dados. Ele é responsável por criar análises e organizar relatórios
              por meio de **informações históricas**, que podem ajudar as
              empresas a obterem previsões e auxiliar na tomada de decisões
              importantes.
            </p>
            <h4>Data Mining (Mineração de Dados)</h4>
            <p>
              **Data Mining** é uma estratégia muito utilizada pelas empresas,
              especialmente em marketing, para oferecer produtos que te
              interessam com base em informações coletadas, processadas e
              utilizadas. Em português, a **Mineração de Dados** auxilia a
              identificar e coletar dados relevantes, descartando "ruídos"
              (dados irrelevantes).
            </p>
            <p>
              Esses sistemas são extremamente importantes no mundo dos negócios,
              pois estão preparados para lidar com **grandes volumes de
              informações** disponibilizadas na internet. São sistemas
              computacionais criados para processar um volume cada vez maior de
              dados. Seu principal objetivo é **vasculhar grandes repositórios
              de dados** e tentar descobrir algum **conhecimento oculto** neles.
            </p>
            <p>
              Quando se consegue fazer **ligações entre as informações** e
              descobrir os **relacionamentos** existentes, é possível definir
              estratégias para otimizar os resultados financeiros das empresas,
              prevendo projeções futuras. O Data Mining tem o propósito de
              identificar **padrões existentes, consistências e o relacionamento
              entre os dados**. Identificados esses pontos, é possível
              transformar os dados em **conhecimento acionável** para ser usado
              em decisões estratégicas.
            </p>
            <p>
              Minar dados é mais do que analisar grandes quantidades de
              informações; envolve **descobrir a relação intrínseca entre
              elas**. Para ser efetivo, o Data Mining precisa ser um processo
              executado em todas as áreas da empresa e cumprir algumas fases:
            </p>
            <ul>
              <li>
                <h4>
                  <strong>Identificação do problema:</strong>
                </h4>
                <ul>
                  <li>
                    Fase responsável por **definir um objetivo** claro a ser
                    alcançado com a análise dos dados.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Descoberta do conhecimento:</strong>
                </h4>
                <ul>
                  <li>
                    Fase responsável por **identificar as relações entre os
                    dados** utilizando procedimentos de Inteligência Artificial
                    (IA) para realizar as análises.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Análise das relações descobertas:</strong>
                </h4>
                <ul>
                  <li>
                    Fase onde a **inteligência sobre as relações descobertas** é
                    aprofundada, seja manualmente ou com o auxílio de IA.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Uso das relações descobertas:</strong>
                </h4>
                <ul>
                  <li>
                    É o momento em que as empresas **aplicam as descobertas**
                    feitas para gerir seu negócio e tomar decisões estratégicas.
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
                    **úteis para o negócio** ou se ainda falta alguma informação
                    para atingir o objetivo definido na primeira fase. Este é um
                    ciclo de melhoria contínua.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Tomada de Decisão</h4>
            <p>
              Com o auxílio de sistemas complexos que coletam e analisam dados
              para disponibilizar informações relevantes, os gestores podem
              tomar decisões mais eficazes. As empresas que se destacam no
              mercado geralmente o fazem por tomarem **decisões mais assertivas
              e rápidas**. Dados reais, organizados e relevantes permitem que as
              empresas descartem informações irrelevantes para escolherem as
              **melhores alternativas**.
            </p>
            <p>
              Todas as técnicas e conceitos abordados (Business Intelligence,
              Big Data, Data Warehouse e Data Mining) se complementam, e têm
              como objetivo facilitar a disponibilização de **informações
              coerentes e relevantes** para agregar valor ao negócio, apoiando
              na **sustentabilidade e manutenção das empresas**. O futuro e a
              estabilidade de uma organização dependem diretamente da sua
              capacidade de transformar dados em decisões inteligentes.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default GestaoDaInformacao;
