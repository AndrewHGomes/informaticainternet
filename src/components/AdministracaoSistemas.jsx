import { useState } from "react";

const AdministracaoSistemas = () => {
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
        <h2>ADMINISTRAÇÃO E SISTEMAS</h2>
        <img src="/seta.png" onClick={visualizar} className={classeGirarImg} />
      </div>
      {abrir && (
        <>
          <div>
            <h3>Sistema</h3>
            <p>
              É importante parar pra pensar sobre a complexidade de pequenas
              coisas, sobre as ligações entre as tarefas. Pensar como um pequeno
              sistema interage com outro formando algo maior.
            </p>
            <p>
              Podemos pensar em sistema como um emaranhado de ligações, com:
            </p>
            <ul>
              <li>
                <h4>Dependências</h4>
              </li>
              <ul>
                <li>Tarefas ou elementos que já devem estar prontos</li>
              </ul>
              <li>
                <h4>Dependentes</h4>
              </li>
              <ul>
                <li>
                  Atividades que somente podem acontecer após isso estar
                  concluído.
                </li>
              </ul>
            </ul>
            <p>
              Um sistema é um conjunto de elementos (concretos ou abstratos)
              intelectualmente organizados. Um elemento pode ser caracterizado
              como a menor parte do sistema.
            </p>
          </div>
          <div>
            <h3>Teoria dos sistemas</h3>
            <p>
              Antes de 1950, tinhamos a lógica reducionista. O todo era dividido
              em partes, o que criava estudos separados em áreas distintas. Esse
              método particionava demais os estudos ou problemas, e muitas vezes
              causava um esforço muito grande em pesquisas que já haviam sido
              feitas em outros segmentos.
            </p>
            <p>
              Depois de 1950, veio a Teoria Geral de Sistemas (Ludwig Von
              Bertalanffy). Essa teoria diz que áreas do conhecimento não
              deveriam ser estudadas de forma isolada, mas sim numa perspectiva
              integrada, permitindo sua análise de forma interdependente. Ele
              considerava que cada elemento fazia parte de um conjunto maior.
            </p>
            <p>
              Assim, podemos ver a definição e composição de sistemas. Formados
              por elementos básicos e outros sistemas, podem ser
              interdependentes e formar um novo sistema.
            </p>
            <blockquote>
              <q>Sistema é um conjunto de unidades em inter-relações mútuas</q>
              (Bertalanffy, 1977)
            </blockquote>
            <blockquote>
              <q>
                Sistema é um conjunto de elementos unidos por alguma forma de
                interação ou interdepêndencia
              </q>
              (Chiavenato, 1993)
            </blockquote>
            <blockquote>
              <q>
                Sistema é um conjunto de elementos ou componentes que interagem
                para se atingir objetivos
              </q>
              (Stair e Reynolds, 2011)
            </blockquote>
            <p>
              Com isso podemos ver a definição e composição de sistemas.
              Formados por elementos básicos e outros sistemas, podem ser
              independentes e formar um novo sistema.
            </p>
            <p>Notamos então, a lógica de:</p>
            <ul>
              <li>
                <h4>Entrada:</h4>
              </li>
              <ul>
                <li>
                  É um termo genérico para se referir a tudo que o sistema obtém
                  do seu meio. Suas demandas, informações, meteriais, dinheiro,
                  energia, etc.
                </li>
              </ul>
              <li>
                <h4>Processamento:</h4>
              </li>
              <ul>
                <li>
                  Nessa fase, as entradas são utilizadas, transformadas pelo
                  sistema, criando o que chamamos de saídas do sistema. O
                  processamento varia conforme a quantidade e qualidade das
                  entradas, que são fatores externos, tornando o sistema
                  flexível.
                </li>
              </ul>
              <li>
                <h4>Saída:</h4>
              </li>
              <ul>
                <li>
                  O resultado é a saída, o que foi gerado pelo processamento das
                  entradas. Esse é o propósito do sistema, seu objetivo
                  principal.
                </li>
              </ul>
            </ul>
            <h3>Tipos de sistemas</h3>
            <p>
              Nem todos os sistemas tem a mesma abrangência. Eles tem suas
              limitações e são classificados conforme seus ambientes:
            </p>
            <ul>
              <li>
                <h4>Sistemas abertos:</h4>
              </li>
              <ul>
                <li>
                  Interagem com o ambiente externo, tem uma relação de causa e
                  efeito com o ambiente e podem ser denominados sistemas
                  orgânicos. É necessário ter flexibilidade e adaptar os
                  processos conforme as dificuldades ou obstáculos.
                </li>
              </ul>
              <li>
                <h4>Sistemas fechados:</h4>
              </li>
              <ul>
                <li>
                  Pouca ou nenhuma influência externa, mais focado no
                  processamento interno. Suas entradas e saídas são pequenas ou
                  inexistentes, permitem um certo isolamento. São bem definidos,
                  criando um comportamento padrão na sua ocorrência, por isso
                  são conhecidos como sistemas mecânicos ou determinísticos.
                </li>
              </ul>
            </ul>
            <p>
              Uma característica é a diversidade de entradas e saídas do sistema
              ao ambiente externo. Muitas vezes as movimentações não são
              conhecidas, e seu resultado nem sempre pode ser previsto.
            </p>
            <p>
              Para se ter uma visão mais ampla, devemos olhar mais o todo. Isso
              é comum na administração para se obter melhores resultados. O dado
              isolado pode não retratar uma realidade.
            </p>
            <h3>Tipificando o sistema</h3>
            <p>
              Quando um sitema sofre influência externa é aberto, quando isso
              não ocorre é fechado. A abrangência do sistema se define por sua
              finalidade, e podemos dividi-lo em partes menores sempre que sua
              administração ficar muito complexa.
            </p>
          </div>
          <div>
            <h3>Comunicação e Sabedoria</h3>
            <p>
              Em cada pequena coisa que acontece, vamos coletando dados,
              minúsculas frações de informação. Tudo é armazenado em nosso
              consciente ou subconsciente. E tudo que precessamos vem pela
              comunicação, seja sonora, textual, figural ou por gestos.
            </p>
            <h3>Pirâmide do conhecimento</h3>
            <p>
              Ao analisarmos determinado processo ou informação, devemos iniciar
              sempre coletando a menor fração dessa informação e ler a evolução
              dessa análise. Uma visão amplamente difundida é a pirâmide do
              conhecimento.
            </p>
            <h4>A pirâmide da base ao topo</h4>
            <ol>
              <li>
                <h4>Dados:</h4>
              </li>
              <ul>
                <li>
                  A base da pirâmide. Tudo que armazenamos, obtemos por coleta,
                  pesquisa ou observação. Geralmente são elementos estruturados,
                  podendo ser números, palavras, códigos, sinais, tabelas,
                  imagens, base de dados e outros. Nessa camada ainda não temos
                  resultados, mas podemos visualizar que nos trarão alguma
                  informação quando forem decifrados.
                </li>
              </ul>
              <li>
                <h4>Informação:</h4>
              </li>
              <ul>
                <li>
                  Com os dados adquiridos, podemos interpretá-los, estruturá-los
                  e relacioná-los, obtendo informações. Essa camada é o
                  tratamento da camada anterior e geralmente é apresentada por
                  fórmulas, equações, conceitos e ideias. À partir daqui a
                  informação já nos traz dados tratados e podemos ter análises
                  mais apuradas das coletas feitas. O dado já não está disperso
                  e começa ter significado.
                </li>
              </ul>
              <li>
                <h4>Conhecimento:</h4>
              </li>
              <ul>
                <li>
                  Quando tratamos a informação e começamos a identificar
                  determinados comportamentos, causas e efeitos, adquirimos o
                  conhecimento. Aqui podemos elaborar conclusões com base nas
                  informações anteriores e nos dados coletados. Com esse
                  conhecimento conseguimos maior acerto a respeito de um tema e
                  o relacionamos aos demais conhecimentos acumulados. É um
                  conjunto de informações dentro de um contexto, valores,
                  experiências e regras. Apresentam-se como livros, teorias,
                  conceitos e verdades inquestionáveis (axiomas/obviedades). Com
                  o conhecimento, podemos utilizar experiências preexistentes
                  para resolver ou analisar problemas.
                </li>
              </ul>
              <li>
                <h4>Sabedoria:</h4>
              </li>
              <ul>
                <li>
                  O detentor do conhecimento de um assunto específico conquista
                  a sabedoria de compreender seu valor e quando usá-lo. Ou seja,
                  sabedoria é reconhecer o uso do conhecimento e aplicá-lo no
                  momento adequado às suas informações, o que só é possível com
                  o processo inteiro: a coleta dos dados, sua interpretação,
                  geração do conhecimento e maturidade para utilizá-lo no
                  momento mais oportuno.
                </li>
              </ul>
            </ol>
            <p>
              Somente o acúmulo de dados não nos faz subir de camada. É preciso
              representar a relação entre as camadas, pois somente essa
              interação nos permite subir de camada.
            </p>
            <h3>Comunicação</h3>
            <p>
              A ação de transmitir uma mensagem. Devemos considerar que outra
              mensagem possa ser enviada como resposta. Do latim
              communicationis, "ação de participar", não é um ato isolado, mas
              sim feito para envolver outros grupos e pessoas.
            </p>
            <h4>Etapas:</h4>
            <ul>
              <li>Motivo;</li>
              <li>Composição;</li>
              <li>Codificação;</li>
              <li>Transmissão.</li>
            </ul>
            <h4>Do outro lado temos:</h4>
            <ul>
              <li>Recepção;</li>
              <li>Decodificação;</li>
              <li>Interpretação.</li>
            </ul>
            <p>
              A comunicação ocorre em vários formatos e utiliza vários meios
              para alcançar seu público.
            </p>
            <h4>Classificando comunicação por formato:</h4>
            <ul>
              <li>Biológico;</li>
              <li>Técnico;</li>
              <li>Social.</li>
            </ul>
            <h4>Os meios:</h4>
            <ul>
              <li>Verbalizar;</li>
              <li>Gesticular;</li>
              <li>Desenhar;</li>
              <li>Escrever;</li>
              <li>Presencial;</li>
              <li>Rádio;</li>
              <li>Televisão;</li>
              <li>Jornais;</li>
              <li>Revistas;</li>
              <li>Telefones;</li>
              <li>Computadores.</li>
            </ul>
            <p>
              Toda comunicação necessita de protocolos preestabelecidos e deve
              seguir o mesmo formato para codificar e decodificar, caso
              contrário, pode haver erros na interpretação.
            </p>
            <h4>Comunicação Formal x Informal</h4>
            <ul>
              <li>
                <h4>Formal:</h4>
              </li>
              <ul>
                <li>
                  Quando seguem um fluxo preestabelecido, conteúdo imutável. Ou
                  seja:
                </li>
                <ul>
                  <li>Memorandos;</li>
                  <li>Contratos;</li>
                  <li>Documentos;</li>
                  <li>E-mails;</li>
                  <li>Propagação (hierárquico).</li>
                </ul>
              </ul>
              <li>
                <h4>Informal:</h4>
              </li>
              <ul>
                <li>Mensagens expontâneas;</li>
                <li>Não seguem canais preestabelecidos;</li>
                <li>Não é documentada;</li>
                <li>Sofre alterações cada vez que é repassada.</li>
              </ul>
            </ul>
            <h4>5 questões para descrever a comunicação:</h4>
            <ol>
              <li>Quem?</li>
              <li>Diz o que?</li>
              <li>Em qual canal?</li>
              <li>Para quem?</li>
              <li>Com que efeito?</li>
            </ol>
            <p>
              A mensagem ou comunicação já se inicia com um objetivo. A resposta
              a essas 5 perguntas define o processo, desde o contexto, formação
              e propagação até sua inteção.
            </p>
            <h3>Da coleta à sabedoria</h3>
            <p>
              A pirâmide do conhecimento é um esquema hierárquico que permite
              passar por todas as etapas de um trabalho, embasando o resultado
              final, num processo denominado estratégia profissional, método ou
              processo, que pode ser utilizado com as equipes em variados tipos
              de trabalho, projeto e produto.
            </p>
            <h4>Com isso temos:</h4>
            <ul>
              <li>
                <h4>Dados:</h4>
              </li>
              <ul>
                <li>Fatos, medições ou observações;</li>
                <li>Agrupados, organizados e analisados geram a informação;</li>
              </ul>
              <li>
                <h4>Informação:</h4>
              </li>
              <ul>
                <li>Estruturação. Dados colocados em determinado contexto;</li>
                <li>Que bem interpretada gera o conhecimento;</li>
              </ul>
              <li>
                <h4>Conhecimento:</h4>
              </li>
              <ul>
                <li>
                  Informação combinada com experiências e opiniões,
                  interpretações;
                </li>
                <li>Nos possibilita utilizar bem a informação;</li>
              </ul>
              <li>
                <h4>Sabedoria:</h4>
              </li>
              <ul>
                <li>Justificação;</li>
                <li>
                  Nos mostra a melhor forma de utilizar a informação e o
                  conhecimento em seus contextos.
                </li>
              </ul>
            </ul>
            <h3>Desvendando a comunicação</h3>
            <p>
              Sabemos que a comunicação necessita de dois lados: Emissor e
              Receptor. A mensagem só terá efeito efetivo se quem a receber
              puder decifrá-la. Além da codificação e decodificação dever ser a
              mesma, ainda tem os ruídos que podem interferir na mensagem. A
              falha na interpretação também pode ser considerada ruído.
            </p>
            <p>
              A comunicação por computadores é formal, pois é feita por meio de
              protocolos, cada um com suas características e as garantias de
              envio e recepção visam chegar ao destino mais precisamente.
            </p>
            <p>
              Sabemos da importância de adquirir conhecimento através das
              etapas. O crédito não é somente do resultado ou aplicação da
              sabedoria, mas para toda a geração do conhecimento, pois a
              sabedoria só é possível pelo conjunto das etapas. É preciso
              coletar dados, trabalhar as informações, gerar conhecimento e
              aplicá-lo da forma correta.
            </p>
            <p>
              Agora também sabemos da importância da comunicação, que ela é
              formal ou informal, que devem ser codificadas e decodificadas, que
              devemos reduzir os ruídos para garantir a qualidade da
              interpretação. Toda mensagem já nasce com um propósito, para
              alcançá-lo, remetente e destinatário devem estar preparados para
              ela.
            </p>
            <p>
              O conhecimento depende da comunicação e vice-versa. Precisamos da
              comunicação para obter dados e do conhecimento para aprimorar a
              comunicação. Para tanto, é preciso haver clareza o suficiente para
              interpretar corretamente.
            </p>
          </div>
          <div>
            <h3>Origem dos Dados</h3>
            <p>
              Os dados estão presentes em todas as atividades que realizamos. A
              todo momento estamos gerando dados. Em uma organização, é
              importante que essa geração de dados seja controlada para que eles
              possam responder a questionamentos e amparar tomadas de decisão.
              Por isso é importante criar e utilizar mecanismos que captem de
              maneira correta esses dados gerados, além de uma boa organização e
              um bom armazenamento para que possam ser utilizados de modo
              efetivo.
            </p>
            <p>
              Ao executarmos um processo, temos diversos dados ao seu entorno:
            </p>
            <ul>
              <li>Tempo;</li>
              <li>Recursos;</li>
              <li>Mão de obra;</li>
              <li>Materiais;</li>
              <li>Energia.</li>
            </ul>
            <p>
              Podemos executar uma tarefa e descartar esses dados gerados, ou
              utilizarmos para facilitar a tomada de decisão da próxima vez que
              executarmos essa mesma tarefa ou tarefas similares. Isso nos ajuda
              a elaborar estimativas, cronogramas, orçamentos e muitos outros
              planejamentos com mais assertividade e precisão.
            </p>
            <p>
              Devemos saber que, mesmo sem a cibernética, os dados podem ser
              gerados e coletados, mas o uso desses meios tecnológicos, a
              geração e organização de dados foram muito ampliadas.
            </p>
            <p>
              A correta coleta de dados nos possibilita reastrear anomalias ou
              defeitos, reposição de estoque, tempo de produçao, tempo para
              entrega, precificação, ou seja, os dados gerados se tornam
              importantes para que as decisões sejam tomadas. etc. No dia a dia,
              os celulares ligados à internet nos geram muitos dados, tais como,
              localização, paradas, acessos, pagamentos, etc, nos permitindo
              tomar uma série de decisões ou iniciativas.
            </p>
            <h3>Processos nas organizações</h3>
            <ul>
              <li>
                <h4>Processos:</h4>
              </li>
              <ul>
                <li>
                  São os conjuntos de atividades realizadas em cada um dos
                  diferentes setores de uma organização. Podem ser:
                </li>
                <ul>
                  <li>Produtivos;</li>
                  <li>Administrativos;</li>
                  <li>Financeiros;</li>
                  <li>Outros.</li>
                </ul>
              </ul>
            </ul>
            <p>
              Para realização de um conjunto de atividades, há várias etapas a
              serem cumpridas e de uma maneira organizada. O processo é
              basicamente uma receita a ser seguida, um manual de instruções,
              uma sequência de procediementos. É a forma como realizamos cada
              conjunto de atividades para obtenção de algo. Podemos realizar
              tarefas à partir da leitura de dados que já temos e, ao mesmo
              tempo, gerar novos dados.
            </p>
            <p>
              A repetição dessas tarefas dentro de processos modelados nos
              permite coletar e organizar os dados, e consequentemente, ter
              informações mais amplas sobre o que estamos realizando, bem como
              os resultados que surgem.
            </p>
            <h3>Estruturação de processos</h3>
            <p>
              Há muitas tarefas que realizamos de forma intuitiva, sem uma
              descrição prévia. O grande problema disso é que, se não há um
              planejamento, o resultado pode não ser satisfatório. Para as
              organizações, as coisas devem atender certo padrão, tanto para a
              satisfação do cliente, quanto para que as variáveis analisadas no
              resultado sejam previsíveis.
            </p>
            <p>
              A padronização é um item bastante importante para o gerenciamento,
              pois gera previsibilidade. Além da padronização, encontrar as
              melhores formas ou práticas de execução dos processos, realizando
              ajustes necessários, chegando até a forma mais adequada entre as
              condições de resultados econômicos, com mais segurança, com menos
              falhas e com maior satisfação no contexto esperado.
            </p>
            <p>
              Podemos definir que processo é a organização das atividades para
              obtenção de algo, e essa organização direciona quem executa as
              atividades para que o resultado seja o esperado.
            </p>
            <h3>Tarefas cíclicas ou repetitivas</h3>
            <p>
              Dentro das organizações, muitas tarefas são realizadas apenas um
              única vez, já outras se repetem algumas ou muitas vezes.
              Justamente por funcionar desse modo cíclico, essas tarefas podem
              sofrer sobreposições lógicas, utilização de sistemas
              informatizados, seja na execução ou para controle. Além disso, a
              identificação desses processos repetitivos permite identificar
              falhas ou possibilidades de melhorias, fazendo com que sejam
              aperfeiçoadas as formas de execução ao longo do tempo.
            </p>
            <p>
              A falta dessas repetições no processo nos trariam produtos com
              características e qualidade diferentes e não daria para mensurar
              os custos do que está sendo realizado. Isso impactaria tanto nos
              resultados, como também na satisfação dos clientes. Mesmo tarefas
              não cíclicas devem ser analisadas e interpretadas em cada uma de
              suas partes. Elas só não ocorrem com tanta frequência.
            </p>
            <h3>Melhores práticas para realizar terefas</h3>
            <blockquote>
              <q> A prática leva à perfeição. </q>
            </blockquote>
            <p>
              Isso deve ser levado em consideração, mas com muito cuidado. Tudo
              está em constante evolução e transformação, logo, isso também deve
              ser levado em conta. Devemos estar atentos para melhorar, mudar,
              transformar as atividades que estão sendo realizadas. Por melhor
              que seja a descrição de um processo ou conjunto de atividades,
              devemos estar atentos para práticas melhores que podem já estar
              disponíveis.
            </p>
            <p>
              Isso nos traz ao conceito de melhoria contínua. Um pensamento de
              constante busca por melhorar os resultados das tarefas, passando a
              analisar novas práticas e tecnologias que possam ser aplicáveis,
              além de simples ajustes em procedimentos que causam impactos
              favoráveis.
            </p>
            <p>
              Há vários caminhos para se chegar a um mesmo lugar. Um pode ser
              mais rápido, outro mais econômico, outro mais seguro, etc. Um
              conjunto de escolhas deve ser consideradas para dosar esses itens
              e atingir resultados de acordo com o que foi proposto.
            </p>
            <p>
              Aí que entra a importância do pensamento sistêmico: tudo está
              ligado a tudo e gera influências aos demais itens a que está
              direta ou indiretamente ligado. O ajuste de processos deve
              analisar essas ligações e suas consequências.
            </p>
            <p>
              Em resumo, tudo gera dados que, se coletados, organizados,
              armazenados e tratados corretamente, podem proporcionar
              informações que nos permitem analisar se o que está sendo feito
              pode ser feito de uma forma ainda melhor. Isso é favorecido quando
              temos atividades cíclicas, pois podem ser melhor analisadas para
              se saber se estão sendo repetidas de modo satisfatório.
            </p>
          </div>
          <div>
            <h3>Função da Cibernética</h3>
            <p>
              Sabemos que a informática gera melhores e infinitas
              possibilidades, mas a lógica para seu desenvolvimento é a mesma
              lógica que devemos utilizar para realizar atividades sem seu
              suporte. Por isso, essas atividades devem ser planejadas e
              estruturadas de formas que não dependem da informática.
            </p>
            <p>
              A cibernética serve para dar suporte para coisas que possuem algum
              tipo de padrão lógico. Precisamos saber o que estamos procurando,
              isso demanda conhecimento por parte de quem está estruturando,
              arranjando ou coletando os dados.
            </p>
            <h3>O que é e para que serve a cibernética</h3>
            <p>
              Em primeiro lugar, cibernética é o termo correto para denominar o
              que chamamos de informática. É a ciência que está por trás dos
              estudos sobre os sistemas e mecanismos de controle automático,
              comparando funções tanto em seres humanos como em máquinas. As
              estruturas complexas que envolvem a abordagem sistêmica é a mesma
              na biologia e nas organizações.
            </p>
            <blockquote>
              <q>
                A ciência imita a natureza, pois é o ser humano que a desenvolve
                por meio dos princípios lógicos que já desvendou.
              </q>
            </blockquote>
            <p>
              A cibernética é um modelo matemático ou lógico de processamento
              que utiliza conceitos da elétrica e da eletrônica para compor
              códigos que, ao serem convertidos, apresentam dados que são o
              nosso objeto de interesse. Por isso o conceito de zero (0) e um
              (1), pois ela responde a impulsos elétricos (0 = desliga e 1 =
              liga). Assim, temos uma composição eletrônica que vai formando
              informações. Todo esse processo gera sequências de códigos que vão
              sendo armazenados de forma magnética ou por outros meios
              correlacionados e permitem que os dados sejam resgatados nos
              modelos previamente definidos pelas lógicas de programação.
            </p>
            <p>
              A cibernética tem um aspecto mais importante que é a possibilidade
              de automação de coleta, no tratamento e no armazenamento dos
              dados, permitindo geração de informações e tomada de decisões de
              forma automatizada, garantindo confiabilidade e agilidade nos
              resultados.
            </p>
            <h3>Bacos de dados</h3>
            <p>
              Serve para armazenar os dados. Uma estrutura de controles e
              registros, permitindo que os dados sejam armazenados, organizados
              e processados de forma segura. Segurança é um dos requisitos
              fundamentais também para os bancos de dados, tanto para que não
              ocorram perdas por erros, quanto para que não sejam roubados ou
              alterados por terceiros.
            </p>
            <h3>Estruturação eletrônica de bancos de dados</h3>
            <p>
              Teremos sempre a lógica de colunas e linhas formando as células:
            </p>
            <ul>
              <li>
                <h4>Colunas:</h4>
              </li>
              <ul>
                <li>
                  Vertical - tipo de informação que será registrada em cada
                  célula.
                </li>
              </ul>
              <li>
                <h4>Linhas:</h4>
              </li>
              <ul>
                <li>
                  Horizontal - cada um dos registros que será inserida em cada
                  célula.
                </li>
              </ul>
              <li>
                <h4>Células:</h4>
              </li>
              <ul>
                <li>Cada informação, cada registro em si.</li>
              </ul>
              <li>
                <h4>Inter-relação:</h4>
              </li>
              <ul>
                <li>Aparece quando tabelas chamam dados de outras tabelas.</li>
              </ul>
            </ul>
            <h3>Meios de coleta de dados</h3>
            <p>
              Antigamente, muito dessa coleta era realizada de forma manual,
              sendo anotada em fichas de controle, que só depois era digitada
              nos bancos de dados para que relatórios fossem gerados a partir de
              análises nesses sistemas. Se alguma anomalia fosse identificada no
              relatório, só seria corrigida bem depois por causa da demora,
              fazendo com que o problema já estivesse muito maior. Além da
              quantidade limitada de informações que podiam ser anotadas e
              interferência humana, que podiam distorcer o resultado dos
              registros.
            </p>
            <p>
              Nos tempos atuais, temos meios diversos para captar e coletar
              dados de acordo com cada demanda. Alguns exemplos são os leitores
              de código de barras ou QR-Codes, sensores, nossos próprios
              celulares, etc.
            </p>
            <h3>Relatórios e uso da informação</h3>
            <p>
              Para que uma tomada de decisão possa gerar resultados
              satisfatórios, é importante que as variáveis sejam analisadas com
              critérios bem estabelecidos. Como estamos sempre tendo que decidir
              entre 2 ou mais opções, elas precisam estar bem embasadas. Então,
              se tivermos um levantamento correto de dados e utilizarmos
              corretamente as ferramentas para tratamentos desses dados,
              conseguiremos obter informações úteis.
            </p>
            <p>
              Essas informações normalmente são apresentadas em forma de
              relatórios ou gráficos, os quais precisam ser bem estruturados
              para que apresentem claramente respostas para que as decisões
              sejam tomadas. Claro que, mesmo através de gráficos ou relatórios,
              devemos compreender de forma adequada quais os pontos relevantes
              que devem ser comaparados ou demonstrados.
            </p>
            <p>
              Dentro de uma indústria, podemos ter sensoriamento dos
              equipamentos de produção monitorando cada etapa da produção.
              Conforme a produção vai ocorrendo, os dados coletados vão gerando
              indicadores de eficiência. Tudo isso bem alinhado pode nos
              fornecer informações quanto à quantidade no estoque, prazos dos
              clientes, planejamento de produção, etc.
            </p>
            <p>
              Em resumo, as organizações dependem de boas informações para
              tomadar decisões. A tomada de decisão vai causar impacto nos
              resultados, impactando em questões econômicas ou sociais, já que
              diversas pessoas dependem do bom desempenho da organização.
            </p>
            <p>
              Por isso é imprescindível que sejam utilizados os meios corretos
              para coleta e tratamento de dados, e é nesse sentido que a
              tecnologia da informação desempenha um papel fundamental, não só
              na redução de tempo de processamento, mas também para garantir um
              número maior de dados coletados.
            </p>
          </div>
          <div>
            <h3>Estratégia nas Organizações</h3>
            <p>
              Não há uma única melhor forma de realizar coisas, pois estamos
              falando de um ambiente dinâmico. Uma organização possui clientes,
              fornecedores, concorrentes e muitas outras partes interessadas nas
              transações que estão ocorrendo. A cada mudança de um desses
              elementos demanda mudanças na forma de agir do outro pois causam
              influência em suas atividades.
            </p>
            <p>
              O planejamento estratégico procura prever as ações seguintes para
              preestabelecer ações que deverão ser tomadas em resposta a cada
              uma das possibilidades de ação. Como num jogo de xadrês, não se
              deve tomar decisões sem pensar nas consequências, e sim, pensar
              numa sequência das próximas movimentações, sejam internas ou
              externas.
            </p>
            <p>
              Essa lógica é justamente pensar em mover-se do momento atual até
              uma condição favorável e desejada num momento futuro, é gerenciar
              as variáveis ao longo do trajeto para alcançar resultados
              esperados. Para isso, uma das principais necessidades é ter um bom
              mapeamento das informações sobre o ambiente onde a organização
              está inserida.
            </p>
            <h4>Tipos de ambiente</h4>
            <p>A palavra ambiente aqui se refere:</p>
            <ul>
              <li>
                <h4>Externo</h4>
              </li>
              <ul>
                <li>Ambiente onde a organização atua.</li>
              </ul>
              <li>
                <h4>Interno:</h4>
              </li>
              <ul>
                <li>
                  A própria organização. Tudo aquilo que compõe a organização.
                  Sua estrutura, sua capacidade, recursos físicos, recursos
                  humanos, recursos intelectuais.
                </li>
              </ul>
            </ul>
            <h3>Informações do ambiente interno</h3>
            <p>
              Uma empresa deve dominar seus próprios recursos. Utilizar
              ferramentas e sistemas para organizar a coleta de dados para
              compreender por completo como as coisas estão ocorrendo ou sendo
              utilizadas. Quando uma empresa não dispõe de todos os recursos de
              coleta integral de dados, ela pode recorrer ao uso da estatística,
              que é muito positivo, mas pode esconder algumas informações que
              possibilitariam melhorar os resultados da organização. O ponto é
              que informações do ambiente interno são mais fácilmente acessadas,
              pois são gerados pela própria organização.
            </p>
            <h3>Informações do ambiente externo</h3>
            <p>
              Esse ambiente é o entorno da organização. Ele conta com 2
              ambientes:
            </p>
            <ul>
              <li>
                Ambiente de tarefa, que influencia mais diretamente a
                organização;
              </li>
              <li>
                Ambiente geral ou macroambiente, que é comum a todos, mas
                influencia mais ou menos cada negócio de acordo com influências
                que geram no ambiente de tarefa.
              </li>
            </ul>
            <h4>Ambiente de tarefa</h4>
            <p>
              O ambiente de tarefa é composto por elementos do setor onde a
              organização atua, como seus clientes, fornecedores, concorrentes e
              agências reguladoras. É chamado de ambiente de tarefa justamente
              por essa atuação. As ações realizadas pelos demais elementos
              afetam diretamente os resultados da organização. Coletar dados e
              informações desse ambiente demanda muito relacionamento com os
              diversos elementos, demanda cruzamento de várias fontes de
              consulta.
            </p>
            <h4>Ambiente geral</h4>
            <p>
              Também conhecido como macroambiente ou ambiente macroeconômico. É
              composto por informações políticas, ambientais, sociais,
              tecnológicas e econômicas. Essas informações e projeções futuras
              são extremamente importantes. São condições variáveis, que
              permitem o uso da estatística para projeções futuras ou fatores
              predeterminados, nos quais hipóteses são apresentadas. Não se deve
              apenas compreender informação fixa, mas também tendências futuras
              em acordo com todas as possibilidades apresentadas pelas condições
              de mercado.
            </p>
            <p>
              A coleta, a análise e a projeção dessas informações permitem o
              estabelecimento de cenários com os quais os gestores poderão
              identificar possibilidades estratégicas.
            </p>
            <h3>Cenários para estratégia</h3>
            <p>
              Para qualquer tipo de tomada de decisão, é necessário informações
              completas, também chamadas de imparciais, que permitam compreender
              um cenário atual e outro futuro.
            </p>
            <p>
              Cenário atual é embasado nas informações coletadas sobre o que
              veio ocorrendo historicamente e a condição de trabalho no momento.
              Cenários futuros envolvem compreender essas condições do passado,
              analisar probabilidades futuras e realizar projeções estruturadas.
            </p>
            <p>
              Como não há uma exatidão nas projeções futuras, costumamos
              projetar 3 cenários:
            </p>
            <ul>
              <li>
                <h4>Mediano:</h4>
              </li>
              <ul>
                <li>
                  De acordo com tendências futuras médias, que envolvem a
                  interpretação dos fatores predeterminados em condições
                  medianas, de modo a não significar condições mais favoráveis,
                  nem condições mais desfavoráveis. Utilizar fatores variáveis
                  com suas projeções estastísticas, interpretando uma situação
                  regular que possa ocorrer no futuro.
                </li>
              </ul>
              <li>
                <h4>Otimista:</h4>
              </li>
              <ul>
                <li>
                  Prevê a proposição de condições mais favoráveis à empresa,
                  quando analisados os fatores predeterminados, e ainda a adoção
                  de condições a maior ou a menor nas projeções de indicadores
                  variáveis, de acordo com aquilo que indique melhores
                  perpectivas de resultados.
                </li>
              </ul>
              <li>
                <h4>Pessimista:</h4>
              </li>
              <ul>
                <li>
                  É o contrário do anterior, levando todos os fatores
                  predeterminados e as variáveis a condições que representam um
                  quadro futuro pior para o ambiente onde a empresa irá atual.
                </li>
              </ul>
            </ul>
            <p>
              A interpretação sobre ser otimista e pessimista é diferente para
              cada organização, de acordo com seu tipo de negócio. Uma análise
              criteriosa identificará o que vai ocorrer em cada uma das
              situações e permitir criar estratégias para agir em cada uma
              delas. Deve-se ter estratégias para aproveitar todas as situações
              mais otimistas, e ao mesmo tempo desviar dos riscos das situações
              mais pessimistas, fazendo com que realmente seja possível atingir
              um resultado médio conhecido.
            </p>
            <h3>Dicisões e atualização das informações</h3>
            <p>
              O processo decisório nas organizações deve ser sustentado com
              informações que permitam a compreensão das melhores possibilidades
              para os resultados com a escolha. Ter uma estrutura de dados
              coletados, armazenados e tratados corretamente permite estruturar
              bons cenários e consequentemente tomar decisões mais assertivas.
            </p>
            <h4>Etapas de um processo decisório:</h4>
            <ul>
              <li>
                <h4>identificar a situação:</h4>
              </li>
              <ul>
                <li>
                  Analisar os acontecimentos na organização para saber se há um
                  problema ou oportunidade. São muitos os processos que demandam
                  a tomada de decisão. O fato de apenas não modificar uma
                  situação já é uma decisão.
                </li>
              </ul>
              <li>
                <h4>Obter informações:</h4>
              </li>
              <ul>
                <li>
                  Quanto melhor a qualidade dos dados e informações obtidos,
                  maior a possibilidade de sucesso na tomada de decisão.
                </li>
              </ul>
              <li>
                <h4>
                  Gerar soluções alternativas, avaliar e escolher soluções:
                </h4>
              </li>
              <ul>
                <li>
                  Avaliar e escolher a solução mais adequada de acordo com os
                  objetivos organizacionais
                </li>
              </ul>
              <li>
                <h4>
                  Tranformar a solução em ação e avaliar os resultados obtidos:
                </h4>
              </li>
              <ul>
                <li>
                  Colocar a decisão em prática. Avaliar os resultados obtidos, o
                  que ainda irá auxiliar para decisões futuras.
                </li>
              </ul>
              <li>
                <h4>Atualizar informações:</h4>
              </li>
              <ul>
                <li>
                  Tanto para a composição dos cenários, como para a tomada de
                  decisão, os dados foram coletados e projetaram uma situação
                  futura, montando a base para o planejamento estratégico. Mas o
                  ambiente é dinâmico, coisas vão ocorrendo. Frequentemente é
                  preciso atualizar e continuar sempre atualizando as
                  informações.
                </li>
              </ul>
            </ul>
            <p>
              Algumas informações terão demanda quase que diária de atualização,
              outras terão demanda mensal, muito poucas terão demanda anual ou
              esporádica. Deve-se estar atento o tempo todo a atualizações.
            </p>
            <p>
              Um planejamento deve ser modificado sempre que necessário, tomando
              cuidado para que a organização não perca seu foco, mas também
              considerando o ambiente dinâmico, precisa-se reavaliar
              planejamentos para não deixá-los fora do contexto atual.
            </p>
          </div>
          <div>
            <h3>Gerenciamento das Informações</h3>
            <p>Iremos tocar em alguns conceitos como:</p>
            <ul>
              <li>TIC</li>
              <li>SPT</li>
              <li>ERP</li>
              <li>SIG</li>
              <li>CRM</li>
            </ul>
            <h4>Obsolescelecência programada</h4>
            <p>
              Algumas coisas no meio organizacional são criadas com vida útil
              pré-definida. São principalmente produtos que envolvem as mais
              novas tecnologias. Isso é lançado no mercado com predisposição de
              se tornarem obsoletos ou não funcionais, demandando sua
              substituição por modelos mais novos. Isso está ligado a uma lógica
              de faturamento e lucro das organizações, mas também promove o
              desenvolvimento tecnológico.
            </p>
            <p>
              Nos sistemas não é diferente. O uso das novas tecnologias
              proporcionou e impulsionou novas estruturas e conceitos:
            </p>
            <ul>
              <li>
                <h4>Cloud computing:</h4>
              </li>
              <ul>
                <li>
                  Computação em núvem. Disponibilidade e demanda dos recursos de
                  computadores, como armazenamento e processamento pela
                  internet.
                </li>
              </ul>
              <li>
                <h4>Big data:</h4>
              </li>
              <ul>
                <li>
                  Grande massa de dados. Mecanismo estratégico que usa a
                  constante e crescente captação de dados (principalmente
                  geradas por dispositivos móveis), e possibilita analisar e
                  interpretar esses dados.
                </li>
              </ul>
              <li>
                <h4>Business intelligence:</h4>
              </li>
              <ul>
                <li>
                  Inteligência de negócios. Processo de coleta, organização,
                  análise, compartilhamento e monitoramento das informações que
                  auxiliam o processo de gestão e estratégia da organização.
                </li>
              </ul>
            </ul>
            <p>
              Tudo isso está ligado à importância e à lógica do gerenciamento de
              informações, daquilo que precisamos cuidar e resguardar para obter
              respostas na tomada de decisão.
            </p>
            <h3>TIC - Tecnologia da informação e comunicação</h3>
            <p>
              Um sistema de informação pode ser manual ou informatizado. A
              função de um sistema informatizado e coletar, organizar e
              transmitir dados, possibilitando a análise e o posterior uso das
              informações na tomada de decisão, aprimorando os resultados.
            </p>
            <p>
              As TIC's integram hardware e software com elementos de
              comunicação, gerando modernas tecnoçogias. Plataforma tecnológica
              que nos permite sair dos sistemas manuais para os eletrônicos.
              Elas contemplam a lógica do conceito de entrada, processamento e
              saída. Para isso temos hardware, software, bancos de dados e a
              rede de dados.
            </p>
            <h4>As 3 camadas do software:</h4>
            <ul>
              <li>
                <h4>Interface do usuário:</h4>
              </li>
              <ul>
                <li>
                  Meio que proporciona uma ligação lógica da máquina com o
                  usuário. Podem ser telas, botões, teclados, sinais de áudio e
                  vídeo, ou qualquer meio que possa ser compreendido pelo
                  usuário quando emitido pela máquina, ou compreendido pela
                  máquina quando a origem é o usuário.
                </li>
              </ul>
              <li>
                <h4>O código:</h4>
              </li>
              <ul>
                <li>
                  Linhas programadas com funções específicas para cada
                  ação/reação. É a tradução em linguagem de máquina para aquilo
                  que se espera que seja realizado pelo software.
                </li>
              </ul>
              <li>
                <h4>O banco de dados:</h4>
              </li>
              <ul>
                <li>
                  Uma estrutura lógica para o armazenamento dos dados, que
                  permite fácil acesso e compreensão de acordo com os tipos de
                  dados envolvidos.
                </li>
              </ul>
            </ul>
            <h3>Objetivos dos sistemas de informação</h3>
            <p>Os sistemas devem atingir 5 objetivos organizacionais:</p>
            <ol>
              <li>Atingir excelência operacional;</li>
              <li>Desenvolver novos produtos e serviços;</li>
              <li>Melhorar a qualidade das decisões gerencias;</li>
              <li>Aprimorar o relacionamento com os clientes;</li>
              <li>Assegurar a sustentabilidade do negócio.</li>
            </ol>
            <p>Os sistemas podem ser:</p>
            <ul>
              <li>
                <h4>Departamentais:</h4>
              </li>
              <ul>
                <li>
                  Com função única ou específica de um departamento/setor da
                  organização, gerando informações usadas somente para
                  finalidades específicas do setor.
                </li>
              </ul>
              <li>
                <h4>Integrados:</h4>
              </li>
              <ul>
                <li>
                  Que se interligam entre diversos departamentos, gerando
                  informações compartilhadas que vão somando a cada ação de cada
                  departamento.
                </li>
              </ul>
            </ul>
            <h3>SIG - Sistema de informação gerencial</h3>
            <p>
              Há uma importante separação para a compreensão entre SPTs
              (Sistemas de Processamento de Transações) e os SIGs (Sistemas de
              Informação Gerencial). Os SPTs apenas processam determinado tipo
              de transação, cumprindo uma determinada função operacional, é com
              eles que são registradas as transações rotineiras da organização.
            </p>
            <p>
              Os SIGs têm a função de organizar os dados coletados e promover a
              interpretação de informações que permitam o gerenciamento da
              organização. Apesar de fazermos distinção entre os tipos de
              sistemas, o ideal é ocorrer integração entre os diversos SPTs para
              podermos ter bons SIGs. Isto é, ter um número grande de transações
              registradas nos diversos setores e usar essa informação para o
              apoio gerencial.
            </p>
            <p>
              Foi dessa lógica que surgiram os ERPs (Planejamento dos Recursos
              Empresariais). O ERP interliga dados e processos em um sistema
              único, permitindo gerenciar bem todos os recursos. A lógica de
              módulos do ERP deve atuar sobre todos os pontos fundamentais
              garantindo a sua efetividade. Assim, ele integra os diferentes
              setores e dá ao gestor um panorama geral da organização. O
              importante é compreender que precisamos da lógica do processamento
              de transações e da geração de informações gerenciais para evoluir
              aos conceitos de ERP.
            </p>
            <h3>Sistema para estratégia e decisão</h3>
            <p>
              O gestor tem acesso a relatórios gerenciais, que são a condensação
              das informações atualizadas e confiáveis, estruturadas de forma
              clara e objetiva, normalmente convertidas em modelos gráficos,
              para facilitar a análise. Para isso, é necessário identificar os
              principais pontos de atenção sobre cada tipo de informação.
            </p>
            <p>Esses relatórios são caracterizados em 3 tipos:</p>
            <ul>
              <li>
                <h4>Programados:</h4>
              </li>
              <ul>
                <li>
                  Relatórios periódicos, como demostrativos diários ou mensais.
                </li>
              </ul>
              <li>
                <h4>Sob demanda:</h4>
              </li>
              <ul>
                <li>
                  Relatórios solicitados pelo usuário para algo específico, como
                  um histórico de pagamentos ou de vendas específicos em
                  determinado período.
                </li>
              </ul>
              <li>
                <h4>Exceção:</h4>
              </li>
              <ul>
                <li>
                  Relatórios gerados quando são identificados eventos fora do
                  padrão esperado, como algum identificador de produção que
                  ficou abaixo do programado, alguma anomalia em algum processo,
                  etc. Serve para tomar decisões no sentido de resolver
                  problemas ocorridos.
                </li>
              </ul>
            </ul>
            <p>
              Temos também os SIS (Strategic Information Systems), que são
              divididos em SAD (Sistema de Apoio à Decisão) e SAE (Sistemas de
              Apoio Executivo). Ambos contam com possibilidades de simulação de
              resultados a partir da junção de informações históricas, somadas a
              eventos propostos pelo usuário, permitindo compreender as
              possibilidades de resultados em diferentes cenários. São muitas as
              opções para auxiliar o uso das informações.
            </p>
            <p>
              Em resumo, o SIG para finanças envolve todos os registros das
              informações de movimentações financeiras, como entradas e saídas
              de valores, gerando relatórios que permitem compreender as
              demandas de recursos, resultados e muitas outras coisas.
            </p>
            <p>
              Áreas de vendas e atendimento ao cliente contam com as diversas
              possibilidades de um CRM (Gerenciamento de relacionamento ao
              cliente), é um SIG para compreender as ações tomadas e as demandas
              específicas, seja de cada cliente ou de grupos de clientes.
            </p>
            <p>
              Na produção, as empresas utilizam SIG para manufatura, para
              compreender as demandas por matéria-prima, disponibilidade e uso
              de equipamentos, alocação de mão de obra e outras condições para a
              produção.
            </p>
            <p>
              Na gestão de pessoas, o SIG vai além de folha de pagamento, mas
              passa pelas diversas condições e demandas que envolvem
              colaboradores, inclusive a análise de desempenho dos
              trabalhadores.
            </p>
            <p>
              Para gestão de projetos, o SIG auxilia na interpretação da
              aplicação dos recursos no projeto, confrontando planejamento com a
              realização das atividades.
            </p>
            <p>
              O grande propósito é melhorar a coleta de dados, ampliar a geração
              de informações e permitir a melhor aplicação dessas informações
              para obtenção de resultados.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default AdministracaoSistemas;
