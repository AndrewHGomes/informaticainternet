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
              É importante parar para pensar sobre a
              <strong>complexidade de pequenas coisas</strong> e sobre as
              <strong>ligações intrínsecas</strong> entre as tarefas. Ao
              observar o mundo ao nosso redor, percebemos que tudo, desde o
              funcionamento de um relógio até a interação de órgãos em um corpo
              humano, pode ser compreendido como um sistema. Essa perspectiva
              nos permite ver como um pequeno sistema interage com outro,
              formando algo muito maior e mais complexo, onde a{" "}
              <strong>interconectividade</strong> é a chave.
            </p>
            <p>
              Podemos pensar em um sistema como um
              <strong>emaranhado dinâmico de ligações</strong>, composto por:
            </p>
            <ul>
              <li>
                <h4>Dependências</h4>
                <ul>
                  <li>
                    São as tarefas, informações ou elementos que
                    <strong>já devem estar completos e disponíveis</strong>
                    para que outra parte do sistema possa iniciar ou funcionar
                    corretamente. Pense em um projeto de software: o
                    desenvolvimento da interface do usuário pode ter uma
                    dependência na conclusão do backend que fornece os dados.
                    Sem os dados, a interface não pode ser testada ou funcionar
                    plenamente.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Dependentes</h4>
                <ul>
                  <li>
                    São as atividades, processos ou elementos que
                    <strong>somente podem acontecer ou ser concluídos</strong>
                    após suas dependências estarem satisfeitas. No exemplo do
                    software, a fase de testes de integração é dependente da
                    conclusão do desenvolvimento tanto do frontend quanto do
                    backend.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Um sistema, em sua essência, é um
              <strong>conjunto de elementos</strong> (sejam eles concretos, como
              peças de uma máquina, ou abstratos, como ideias em um fluxo de
              trabalho) <strong>inteligentemente organizados</strong> e
              inter-relacionados para atingir um objetivo comum ou realizar uma
              função específica. Um elemento, nesse contexto, pode ser
              caracterizado como a <strong>menor parte indivisível</strong> do
              sistema, que ainda possui alguma relevância ou função dentro do
              todo. A compreensão dessas interações e da hierarquia de elementos
              é fundamental para analisar, projetar ou otimizar qualquer
              sistema.
            </p>
          </div>
          <div>
            <h3>Teoria dos Sistemas</h3>
            <p>
              Antes de 1950, a abordagem predominante era a
              <strong>lógica reducionista</strong>. Nela, para entender um
              fenômeno complexo, o todo era meticulosamente dividido em partes
              menores, o que fomentava estudos separados em áreas distintas do
              conhecimento. Embora útil para aprofundar o entendimento de
              componentes individuais, esse método de particionamento excessivo
              dos estudos ou problemas muitas vezes gerava um esforço redundante
              em pesquisas que já haviam sido realizadas ou abordadas em outros
              segmentos, dificultando uma visão holística e a integração do
              conhecimento.
            </p>
            <p>
              A partir de 1950, surgiu um novo paradigma com a
              <strong>Teoria Geral dos Sistemas (TGS)</strong>, proposta pelo
              biólogo Ludwig Von Bertalanffy. Essa teoria revolucionou a forma
              de pensar, argumentando que as áreas do conhecimento não deveriam
              ser estudadas de forma isolada, mas sim sob uma
              <strong>perspectiva integrada</strong>. Ou seja, fazia parte de um
              conjunto maior, e o comportamento do todo não poderia ser
              compreendido apenas pela soma de suas partes, mas sim pela
              interação entre elas.
            </p>
            <p>
              Com essa nova lente, podemos aprofundar a definição e a composição
              de sistemas. Eles são formados tanto por
              <strong>elementos básicos</strong> (as menores unidades
              funcionais) quanto por outros sistemas (subsistemas), que, por sua
              vez, são interdependentes e podem se combinar para formar um novo
              sistema ainda mais abrangente.
            </p>
            <blockquote>
              <q>Sistema é um conjunto de unidades em inter-relações mútuas</q>
              (Bertalanffy, 1977)
            </blockquote>
            <blockquote>
              <q>
                Sistema é um conjunto de elementos unidos por alguma forma de
                interação ou interdependência
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
              Notamos então, a lógica fundamental de um sistema, composta por
              três fases cíclicas:
            </p>
            <ul>
              <li>
                <h4>Entrada (Input):</h4>
                <ul>
                  <li>
                    É um termo genérico que se refere a
                    <strong>
                      tudo que o sistema obtém do seu meio ambiente
                    </strong>
                    . Isso inclui uma vasta gama de recursos, como demandas de
                    clientes, informações brutas, materiais, capital financeiro
                    (dinheiro), energia, recursos humanos e até mesmo feedback.
                    As entradas são o ponto de partida para qualquer operação do
                    sistema.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Processamento (Throughput):</h4>
                <ul>
                  <li>
                    Nesta fase crucial, as entradas são
                    <strong>utilizadas, transformadas e convertidas</strong>
                    pelo sistema. É o coração do sistema, onde ocorre a
                    manipulação dos recursos de entrada para criar algo novo ou
                    de valor. O processamento é altamente dinâmico e flexível,
                    variando conforme a quantidade e a qualidade das entradas,
                    que são fatores externos. Essa adaptabilidade permite que o
                    sistema responda às mudanças do ambiente.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Saída (Output):</h4>
                <ul>
                  <li>
                    O resultado final do processamento das entradas é a
                    <strong>saída</strong>. Este é o produto, serviço,
                    informação ou qualquer outro bem gerado pelo sistema. A
                    saída representa o <strong>propósito principal</strong> do
                    sistema e seu objetivo final, sendo o elemento que justifica
                    sua existência e operação.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Tipos de Sistemas</h4>
            <p>
              Nem todos os sistemas possuem a mesma abrangência ou grau de
              interação com o seu entorno. Eles são classificados conforme suas
              características de fronteira e o nível de intercâmbio com seus
              ambientes:
            </p>
            <ul>
              <li>
                <h4>Sistemas Abertos:</h4>
                <ul>
                  <li>
                    Caracterizam-se por uma
                    <strong>intensa interação com o ambiente externo</strong>,
                    estabelecendo uma relação contínua de causa e efeito. São
                    frequentemente denominados
                    <strong>sistemas orgânicos</strong> devido à sua capacidade
                    de se adaptar e evoluir. A flexibilidade é essencial para
                    esses sistemas, pois eles precisam ajustar seus processos e
                    estruturas conforme as dificuldades, obstáculos, novas
                    oportunidades ou demandas do ambiente. Exemplos incluem uma
                    empresa no mercado, um organismo vivo ou um ecossistema.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Sistemas Fechados:</h4>
                <ul>
                  <li>
                    Apresentam
                    <strong>pouca ou nenhuma influência externa</strong>,
                    focando predominantemente no processamento interno. Suas
                    entradas e saídas são mínimas ou inexistentes, o que permite
                    um certo grau de isolamento do ambiente. Por serem bem
                    definidos e operarem com base em regras fixas, tendem a
                    criar um comportamento padrão e previsível em sua
                    ocorrência, sendo por isso conhecidos como
                    <strong>sistemas mecânicos ou determinísticos</strong>. Um
                    relógio de corda ou um circuito eletrônico simples são
                    exemplos clássicos.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Uma característica distintiva dos sistemas abertos, e que merece
              atenção especial, é a{" "}
              <strong>diversidade e a imprevisibilidade</strong> das entradas e
              saídas que podem ocorrer em relação ao ambiente externo. Muitas
              vezes, as movimentações do ambiente não são totalmente conhecidas,
              e seu resultado nem sempre pode ser previsto com precisão.
            </p>
            <p>
              Para se ter uma visão mais ampla e eficaz, especialmente em campos
              como a administração, é fundamental adotar uma
              <strong>abordagem sistêmica</strong>, ou seja, olhar mais para o
              todo e para as interconexões. Um dado isolado ou uma parte
              analisada separadamente pode não retratar a realidade completa ou
              levar a conclusões equivocadas. A compreensão do sistema em sua
              totalidade permite identificar padrões, otimizar fluxos e obter
              melhores resultados.
            </p>
            <h4>Tipificando o Sistema</h4>
            <p>
              A tipificação de um sistema é relativamente direta: quando um
              sistema sofre{" "}
              <strong>influência externa e interage com o ambiente</strong>, ele
              é considerado <strong>aberto</strong>; quando essa interação é
              <strong>mínima ou inexistente</strong>, ele é
              <strong>fechado</strong>. A abrangência de um sistema é definida
              por sua finalidade e seus objetivos específicos. Se a complexidade
              da administração de um sistema se torna muito alta, uma estratégia
              eficaz é <strong>dividí-lo em partes menores</strong> ou
              subsistemas. Isso facilita o gerenciamento, a análise e a
              otimização de cada componente, ao mesmo tempo em que se mantém a
              compreensão de como essas partes se integram para formar o todo.
            </p>
          </div>
          <div>
            <h3>Comunicação e Sabedoria</h3>
            <p>
              No fluxo contínuo da vida, cada pequena coisa que acontece se
              traduz em uma oportunidade de coletar <strong>dados</strong>,
              minúsculas frações de informação. Esse vasto volume de dados é
              constantemente armazenado em nosso{" "}
              <strong>consciente ou subconsciente</strong>. É crucial entender
              que todo o processamento desses dados e a consequente construção
              de nosso entendimento acontecem por meio da
              <strong>comunicação</strong>, que pode se manifestar em diversas
              formas: sonora (audição), textual (leitura), figural (imagens e
              símbolos) ou por gestos (linguagem corporal). A comunicação é,
              portanto, a porta de entrada para a aquisição e o processamento da
              realidade.
            </p>
            <h4>Pirâmide do Conhecimento (DIKW Pyramid)</h4>
            <p>
              Ao analisar qualquer processo ou conjunto de informações, é
              essencial começar pela <strong>menor fração</strong> dessa
              informação e seguir a evolução dessa análise de forma estruturada.
              Uma visão amplamente difundida e fundamental para compreender esse
              processo é a<strong>Pirâmide do Conhecimento</strong>, também
              conhecida como Pirâmide DIKW (Dados, Informação, Conhecimento,
              Sabedoria). Ela ilustra a hierarquia e a interdependência entre
              esses níveis, desde a matéria-prima bruta até a aplicação prática
              e estratégica.
            </p>
            <h4>A Pirâmide: da Base ao Topo</h4>
            <ol>
              <li>
                <h4>Dados:</h4>
                <ul>
                  <li>
                    Constituem a <strong>base da pirâmide</strong>, a camada
                    mais fundamental. São elementos brutos, fatos isolados, que
                    coletamos por meio de observação, pesquisa ou qualquer forma
                    de armazenamento. Geralmente são elementos estruturados, mas
                    sem contexto, como números, palavras soltas, códigos,
                    sinais, valores em tabelas, imagens ou registros em bases de
                    dados. Nesta camada, ainda não temos resultados ou
                    significados imediatos, mas podemos visualizar que, quando
                    organizados e interpretados, nos trarão alguma informação
                    relevante.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Informação:</h4>
                <ul>
                  <li>
                    Com os dados adquiridos na camada anterior, podemos começar
                    a{" "}
                    <strong>
                      interpretá-los, estruturá-los e relacioná-los
                    </strong>
                    , transformando-os em informação. Esta camada é o resultado
                    do tratamento dos dados, conferindo-lhes contexto e
                    relevância. A informação é frequentemente apresentada por
                    meio de fórmulas, equações, gráficos, conceitos e ideias que
                    dão sentido aos dados. A partir daqui, a informação já nos
                    traz dados tratados e podemos realizar análises mais
                    apuradas das coletas feitas. O dado já não está disperso e
                    começa a ter um significado claro.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Conhecimento:</h4>
                <ul>
                  <li>
                    Quando tratamos a informação, não apenas a compreendemos,
                    mas começamos a{" "}
                    <strong>
                      identificar padrões, comportamentos, causas e efeitos
                    </strong>
                    . É nesse ponto que adquirimos o conhecimento. Aqui, podemos
                    elaborar conclusões robustas com base nas informações
                    anteriores e nos dados coletados. Com esse conhecimento,
                    conseguimos maior precisão e acerto a respeito de um tema
                    específico e podemos relacioná-lo aos demais conhecimentos
                    já acumulados em nossa experiência. O conhecimento é um
                    conjunto de informações contextualizadas, enriquecidas por
                    valores, experiências e regras, manifestando-se em livros,
                    teorias, conceitos e até verdades inquestionáveis (axiomas
                    ou obviedades). Com o conhecimento, somos capazes de
                    utilizar experiências preexistentes para resolver problemas
                    complexos ou analisar situações de forma aprofundada.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Sabedoria:</h4>
                <ul>
                  <li>
                    Representa o <strong>ápice da pirâmide</strong>. O detentor
                    do conhecimento aprofundado de um assunto específico
                    conquista a sabedoria ao compreender o
                    <strong>
                      valor intrínseco do seu conhecimento e, mais importante,
                      quando e como usá-lo
                    </strong>
                    . Ou seja, sabedoria é a capacidade de reconhecer o uso
                    ideal do conhecimento e aplicá-lo no momento mais adequado
                    às suas informações e objetivos. Isso só é possível por meio
                    de um processo completo e amadurecido: a coleta precisa dos
                    dados, sua interpretação cuidadosa, a geração de
                    conhecimento relevante e a maturidade para utilizá-lo de
                    forma oportuna e eficaz. É a aplicação estratégica do que se
                    sabe.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              É fundamental notar que o simples acúmulo de dados não nos faz
              subir de camada na pirâmide. É preciso estabelecer e entender a
              <strong>relação entre as camadas</strong>, pois somente essa
              interação dinâmica e progressiva nos permite transformar dados
              brutos em sabedoria aplicada.
            </p>
            <h4>Comunicação</h4>
            <p>
              A <strong>comunicação</strong> é a ação de
              <strong>transmitir uma mensagem</strong>, implicando sempre a
              possibilidade de que outra mensagem (uma resposta) possa ser
              enviada em retorno. Derivada do latim <em>communicationis</em>,
              que significa "ação de participar", a comunicação não é um ato
              isolado, mas sim um processo intrinsecamente social, feito para
              envolver e interagir com outros grupos e pessoas.
            </p>
            <h4>Etapas do Emissor:</h4>
            <ul>
              <li>
                <strong>Motivo:</strong> A razão ou intenção por trás da
                mensagem.
              </li>
              <li>
                <strong>Composição:</strong> A formulação da ideia ou conteúdo
                da mensagem.
              </li>
              <li>
                <strong>Codificação:</strong> A conversão da mensagem em um
                formato (linguagem, símbolos) que possa ser transmitido.
              </li>
              <li>
                <strong>Transmissão:</strong> O envio da mensagem através de um
                canal.
              </li>
            </ul>
            <h4>Etapas do Receptor:</h4>
            <ul>
              <li>
                <strong>Recepção:</strong> O ato de receber a mensagem
                transmitida.
              </li>
              <li>
                <strong>Decodificação:</strong> A interpretação do formato da
                mensagem para extrair seu significado.
              </li>
              <li>
                <strong>Interpretação:</strong> A compreensão do conteúdo da
                mensagem e sua contextualização.
              </li>
            </ul>
            <p>
              A comunicação ocorre em múltiplos formatos e utiliza diversos
              meios para alcançar seu público-alvo, adaptando-se às necessidades
              e ao contexto.
            </p>
            <h4>Classificação da Comunicação por Formato:</h4>
            <ul>
              <li>
                <strong>Biológico:</strong> Comunicação entre seres vivos (ex:
                feromônios, linguagem corporal).
              </li>
              <li>
                <strong>Técnico:</strong> Comunicação mediada por tecnologia ou
                sistemas formais (ex: protocolos de rede, códigos de
                programação).
              </li>
              <li>
                <strong>Social:</strong> Comunicação entre indivíduos ou grupos
                sociais (ex: conversas, redes sociais).
              </li>
            </ul>
            <h4>Os Meios de Comunicação:</h4>
            <ul>
              <li>Verbalizar (fala)</li>
              <li>Gesticular (linguagem corporal, sinais)</li>
              <li>Desenhar (imagens, diagramas)</li>
              <li>Escrever (textos, documentos)</li>
              <li>Presencial (interação face a face)</li>
              <li>Rádio (som, broadcast)</li>
              <li>Televisão (imagem e som, broadcast)</li>
              <li>Jornais (texto impresso)</li>
              <li>Revistas (texto e imagem impressos)</li>
              <li>Telefones (voz, texto digital)</li>
              <li>Computadores (texto, imagem, áudio, vídeo digital)</li>
            </ul>
            <p>
              É vital entender que toda comunicação eficaz necessita de
              <strong>protocolos preestabelecidos</strong>. Para que a
              codificação e a decodificação da mensagem sejam bem-sucedidas,
              elas devem seguir o<strong>mesmo formato e regras</strong>. Caso
              contrário, há um alto risco de erros na interpretação, resultando
              em falhas na comunicação.
            </p>
            <h4>Comunicação Formal x Informal</h4>
            <ul>
              <li>
                <h4>Formal:</h4>
                <ul>
                  <li>
                    Caracteriza-se por seguir um
                    <strong>fluxo preestabelecido</strong> e ter um
                    <strong>
                      conteúdo geralmente imutável ou rigidamente controlado
                    </strong>
                    . Este tipo de comunicação é essencial em contextos
                    organizacionais ou legais, onde a precisão e a documentação
                    são cruciais. Exemplos incluem:
                    <ul>
                      <li>Memorandos</li>
                      <li>Contratos</li>
                      <li>Documentos oficiais</li>
                      <li>
                        E-mails corporativos (muitas vezes com diretrizes de
                        formalidade)
                      </li>
                      <li>
                        Comunicação hierárquica (propagação de informações
                        seguindo uma estrutura de autoridade)
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Informal:</h4>
                <ul>
                  <li>
                    Refere-se a <strong>mensagens espontâneas</strong> que
                    <strong>não seguem canais preestabelecidos</strong> nem
                    regras rígidas. Geralmente, não é documentada e pode sofrer
                    alterações ou distorções cada vez que é repassada. Embora
                    possa ser rápida e flexível, sua falta de estrutura pode
                    levar a mal-entendidos. Exemplos incluem conversas de
                    corredor, fofocas e bate-papos informais.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>
              5 Questões Essenciais para Descrever a Comunicação (Modelo de
              Lasswell):
            </h4>
            <ol>
              <li>
                <strong>Quem?</strong> (Emissor: o comunicador)
              </li>
              <li>
                <strong>Diz o quê?</strong> (Mensagem: o conteúdo)
              </li>
              <li>
                <strong>Em qual canal?</strong> (Meio: o veículo de transmissão)
              </li>
              <li>
                <strong>Para quem?</strong> (Receptor: o público-alvo)
              </li>
              <li>
                <strong>Com que efeito?</strong> (Efeito: o impacto ou resultado
                da mensagem)
              </li>
            </ol>
            <p>
              A mensagem ou comunicação já se inicia com um
              <strong>objetivo claro</strong>. A resposta a essas 5 perguntas
              define o processo comunicativo em sua totalidade, desde o contexto
              e a formação da mensagem até sua propagação e a intenção
              subjacente.
            </p>
            <h4>Da Coleta à Sabedoria: A Síntese</h4>
            <p>
              A Pirâmide do Conhecimento é um{" "}
              <strong>esquema hierárquico e processual</strong> que permite
              percorrer todas as etapas essenciais de um trabalho ou análise,
              desde a base de dados até a tomada de decisão estratégica. Esse
              processo, que pode ser denominado
              <strong>estratégia profissional, método ou processo</strong>, é
              aplicável em variados tipos de trabalhos, projetos e produtos,
              sendo fundamental para equipes que buscam resultados embasados e
              eficientes.
            </p>
            <h4>Revisão: A Jornada do Conhecimento</h4>
            <ul>
              <li>
                <h4>Dados:</h4>
                <ul>
                  <li>
                    Fatos brutos, medições ou observações sem contexto
                    intrínseco.
                  </li>
                  <li>
                    Quando agrupados, organizados e analisados, geram a
                    <strong>informação</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Informação:</h4>
                <ul>
                  <li>
                    Dados estruturados e colocados em um determinado contexto,
                    conferindo-lhes significado.
                  </li>
                  <li>
                    Quando bem interpretada, a informação gera o
                    <strong>conhecimento</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Conhecimento:</h4>
                <ul>
                  <li>
                    Informação combinada com experiências prévias, opiniões
                    qualificadas e interpretações aprofundadas.
                  </li>
                  <li>
                    Nos possibilita utilizar a informação de forma eficaz e
                    estratégica, compreendendo o "como".
                  </li>
                </ul>
              </li>
              <li>
                <h4>Sabedoria:</h4>
                <ul>
                  <li>
                    Atingida pela justificação e avaliação do conhecimento; é a
                    capacidade de discernimento.
                  </li>
                  <li>
                    Nos mostra a <strong>melhor forma de utilizar</strong> a
                    informação e o conhecimento em seus respectivos contextos,
                    compreendendo o "porquê" e o "quando".
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Desvendando a Comunicação: Aspectos Cruciais</h4>
            <p>
              Sabemos que a comunicação, para ser completa e eficaz, necessita
              de dois polos essenciais: o <strong>Emissor</strong> e o
              <strong>Receptor</strong>. A mensagem só terá um efeito efetivo se
              quem a recebe puder decifrá-la corretamente. Além da necessidade
              de que a codificação pelo emissor e a decodificação pelo receptor
              utilizem o mesmo "idioma" ou protocolo, ainda existem os
              <strong>ruídos</strong> que podem interferir na mensagem. Uma
              falha na interpretação, mesmo que a transmissão seja tecnicamente
              perfeita, também pode ser considerada um tipo de ruído,
              comprometendo a clareza.
            </p>
            <p>
              No contexto da tecnologia, a comunicação por computadores é
              predominantemente <strong>formal</strong>, pois é realizada por
              meio de protocolos padronizados. Cada protocolo possui suas
              características específicas e garante o envio e a recepção dos
              dados com o objetivo de chegar ao destino de forma mais precisa e
              íntegra possível, minimizando as chances de ruído e erro.
            </p>
            <p>
              Compreendemos a importância de adquirir conhecimento através da
              progressão pelas etapas da Pirâmide DIKW. É crucial reconhecer que
              o crédito pelo sucesso não pertence apenas ao resultado final ou à
              aplicação da sabedoria, mas sim a todo o processo de geração do
              conhecimento. A sabedoria só é possível pelo conjunto harmonioso e
              bem executado de todas as etapas: é preciso coletar dados de forma
              cuidadosa, trabalhar as informações com rigor, gerar conhecimento
              relevante e aplicá-lo da forma correta e no momento oportuno.
            </p>
            <p>
              Agora também temos clareza sobre a importância vital da
              <strong>comunicação</strong>. Sabemos que ela pode ser formal ou
              informal, que as mensagens devem ser codificadas e decodificadas
              de forma compatível, e que devemos nos esforçar para reduzir os
              ruídos a fim de garantir a qualidade da interpretação. Toda
              mensagem nasce com um propósito intrínseco; para alcançá-lo
              plenamente, tanto o remetente quanto o destinatário devem estar
              preparados para o processo comunicativo em todas as suas nuances.
            </p>
            <p>
              Em última análise, o{" "}
              <strong>
                conhecimento depende intrinsecamente da comunicação e vice-versa
              </strong>
              . Precisamos da comunicação para obter dados e informações que
              formam a base do conhecimento, e precisamos do conhecimento para
              aprimorar a forma como comunicamos, tornando-a mais clara, eficaz
              e estratégica. Para que essa sinergia funcione, é fundamental que
              haja clareza suficiente em todo o processo para permitir uma
              interpretação correta e uma construção sólida de entendimento.
            </p>
          </div>
          <div>
            <h3>Origem dos Dados</h3>
            <p>
              Os <strong>dados</strong> são uma constante em todas as atividades
              que realizamos, inerentes à nossa existência e interação com o
              mundo. A cada instante, estamos gerando uma vasta quantidade de
              dados, muitas vezes sem perceber. Em um contexto organizacional, a
              <strong>gestão controlada</strong> dessa geração de dados é de
              suma importância. Ela permite que esses dados respondam a
              questionamentos estratégicos e sirvam de base sólida para a tomada
              de decisões eficazes. Por isso, é essencial criar e utilizar
              <strong>mecanismos robustos</strong> que captem corretamente os
              dados gerados, além de garantir uma
              <strong>boa organização e armazenamento</strong> para que possam
              ser utilizados de modo efetivo quando necessário.
            </p>
            <p>
              Ao executarmos um processo, seja ele qual for, diversos dados são
              gerados em seu entorno. Alguns exemplos incluem:
            </p>
            <ul>
              <li>
                <strong>Tempo:</strong> Duração da tarefa, tempo de ciclo,
                atrasos.
              </li>
              <li>
                <strong>Recursos:</strong> Quantidade de insumos utilizados,
                máquinas envolvidas.
              </li>
              <li>
                <strong>Mão de obra:</strong> Horas trabalhadas, número de
                pessoas envolvidas.
              </li>
              <li>
                <strong>Materiais:</strong> Consumo de matéria-prima, resíduos
                gerados.
              </li>
              <li>
                <strong>Energia:</strong> Consumo energético durante o processo.
              </li>
            </ul>
            <p>
              Temos a escolha de simplesmente executar uma tarefa e descartar
              esses dados gerados, ou podemos utilizá-los de forma inteligente
              para
              <strong>facilitar a tomada de decisões</strong> na próxima vez que
              executarmos essa mesma tarefa ou tarefas similares. Essa abordagem
              nos ajuda a elaborar estimativas, cronogramas, orçamentos e muitos
              outros planejamentos com maior{" "}
              <strong>assertividade e precisão</strong>, transformando a
              experiência passada em vantagem futura.
            </p>
            <p>
              É fundamental reconhecer que, mesmo antes da era da cibernética,
              os dados já eram gerados e coletados. No entanto, com o avanço e o
              uso massivo de <strong>meios tecnológicos</strong>, a capacidade
              de geração, coleta e organização de dados foi exponencialmente
              ampliada, permitindo níveis de análise e automação antes
              impensáveis.
            </p>
            <p>
              A <strong>correta coleta de dados</strong> nos possibilita uma
              série de insights valiosos: rastrear anomalias ou defeitos em
              produtos, otimizar a reposição de estoque, determinar o tempo
              exato de produção, estimar prazos de entrega com maior precisão,
              definir estratégias de precificação, entre outros. Em outras
              palavras, os dados gerados se tornam cruciais para que as decisões
              sejam tomadas de forma informada e estratégica. No nosso dia a
              dia, por exemplo, os celulares conectados à internet geram uma
              quantidade imensa de dados (localização, histórico de paradas,
              acessos a aplicativos, registros de pagamentos), o que nos
              permite, muitas vezes, tomar uma série de decisões ou iniciativas
              pessoais com base nessas informações.
            </p>
            <h4>Processos nas Organizações</h4>
            <ul>
              <li>
                <h4>Processos:</h4>
                <ul>
                  <li>
                    São os <strong>conjuntos estruturados de atividades</strong>
                    realizadas em cada um dos diferentes setores ou
                    departamentos de uma organização. Eles representam o "como"
                    as coisas são feitas para atingir objetivos específicos.
                    Podem ser classificados de diversas formas, dependendo da
                    sua finalidade:
                    <ul>
                      <li>
                        <strong>Produtivos:</strong> Relacionados à fabricação
                        de bens ou prestação de serviços.
                      </li>
                      <li>
                        <strong>Administrativos:</strong> Envolvem a gestão e
                        organização interna (ex: recursos humanos, finanças).
                      </li>
                      <li>
                        <strong>Financeiros:</strong> Ligados à movimentação e
                        controle de recursos monetários.
                      </li>
                      <li>
                        <strong>Outros:</strong> Marketing, vendas, pesquisa e
                        desenvolvimento, etc.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Para a realização eficiente de um conjunto de atividades, há
              várias etapas a serem cumpridas de uma maneira
              <strong>organizada e sequencial</strong>. O processo é basicamente
              uma
              <strong>"receita a ser seguida"</strong>, um manual de instruções
              detalhado ou uma sequência de procedimentos bem definida. É a
              forma padronizada como realizamos cada conjunto de atividades para
              a obtenção de um resultado ou produto específico. Além disso, ao
              executar tarefas dentro de um processo, podemos tanto utilizar
              dados preexistentes para guiar nossas ações quanto gerar novos
              dados que, por sua vez, enriquecerão o ciclo de informações.
            </p>
            <p>
              A repetição consistente dessas tarefas dentro de
              <strong>processos modelados e padronizados</strong> nos permite
              coletar e organizar dados de forma sistemática. Consequentemente,
              obtemos informações mais abrangentes e insights profundos sobre o
              que estamos realizando, bem como sobre os resultados que surgem.
              Isso é crucial para a melhoria contínua e a otimização.
            </p>
            <h4>Estruturação de Processos</h4>
            <p>
              Muitas das tarefas que realizamos, tanto na vida pessoal quanto
              profissional, são feitas de forma intuitiva, sem uma descrição
              prévia ou um plano formal. O grande problema dessa abordagem é
              que, na ausência de um planejamento claro e de um processo
              estruturado, o resultado pode não ser satisfatório, ser
              inconsistente ou até mesmo inesperado. Para as organizações, é
              imperativo que as atividades atendam a um{" "}
              <strong>certo padrão</strong>, tanto para garantir a
              <strong>satisfação do cliente</strong> (oferecendo produtos ou
              serviços de qualidade consistente) quanto para assegurar que as
              variáveis analisadas nos resultados sejam
              <strong>previsíveis e controláveis</strong>.
            </p>
            <p>
              A <strong>padronização</strong> é um item de extrema importância
              para o gerenciamento eficaz, pois ela gera{" "}
              <strong>previsibilidade</strong>e consistência. Além da
              padronização, a busca contínua por encontrar as{" "}
              <strong>melhores formas ou práticas de execução</strong> dos
              processos é vital. Isso envolve realizar ajustes necessários,
              experimentar novas abordagens e, eventualmente, chegar à forma
              mais adequada que equilibre condições de resultados econômicos
              favoráveis, maior segurança nas operações, redução de falhas e
              maximização da satisfação dentro do contexto esperado.
            </p>
            <p>
              Podemos, portanto, definir que um <strong>processo</strong> é a
              <strong>organização estruturada das atividades</strong> visando a
              obtenção de algo específico. Essa organização é fundamental, pois
              direciona quem executa as atividades, assegurando que o resultado
              final seja o esperado e consistente com os objetivos definidos.
            </p>
            <h4>Tarefas Cíclicas ou Repetitivas</h4>
            <p>
              Dentro das organizações, algumas tarefas são realizadas apenas uma
              única vez, sendo eventos pontuais. No entanto, muitas outras se
              repetem, seja algumas ou muitas vezes, em intervalos regulares ou
              sob certas condições. Justamente por funcionar de modo
              <strong>cíclico e repetitivo</strong>, essas tarefas se beneficiam
              imensamente da <strong>otimização</strong>. Elas podem sofrer
              sobreposições lógicas, o que permite a aplicação de sistemas
              informatizados tanto na sua execução quanto no controle e
              monitoramento. Além disso, a identificação clara desses processos
              repetitivos permite <strong>identificar falhas</strong> com maior
              facilidade ou reconhecer{" "}
              <strong>oportunidades de melhorias</strong>, fazendo com que as
              formas de execução sejam continuamente aperfeiçoadas ao longo do
              tempo.
            </p>
            <p>
              A falta dessas repetições ou a ausência de padronização em
              processos cíclicos resultaria em produtos com características e
              qualidade inconsistentes, dificultando enormemente a mensuração
              precisa dos custos envolvidos na sua realização. Isso impactaria
              negativamente tanto nos resultados financeiros da organização
              quanto na satisfação dos clientes. É importante ressaltar que,
              mesmo tarefas não cíclicas, que não ocorrem com tanta frequência,
              devem ser analisadas e interpretadas cuidadosamente em cada uma de
              suas partes, pois cada etapa contribui para o resultado final.
            </p>
            <h4>Melhores Práticas para Realizar Tarefas (Melhoria Contínua)</h4>
            <blockquote>
              <q>A prática leva à perfeição.</q>
            </blockquote>
            <p>
              Embora o ditado popular "A prática leva à perfeição" contenha uma
              verdade fundamental, ele deve ser interpretado com
              <strong>muito cuidado e uma visão moderna</strong>. Vivemos em um
              mundo onde tudo está em constante evolução e transformação –
              tecnologias, metodologias e expectativas mudam rapidamente. Logo,
              essa dinamicidade também deve ser levada em conta. Precisamos
              estar constantemente atentos para{" "}
              <strong>melhorar, mudar e transformar</strong> as atividades que
              estão sendo realizadas. Por melhor que seja a descrição atual de
              um processo ou conjunto de atividades, devemos estar sempre
              abertos a identificar e implementar
              <strong>práticas melhores</strong> que podem já estar disponíveis
              no mercado ou que surjam através da inovação.
            </p>
            <p>
              Essa mentalidade nos conduz diretamente ao conceito de
              <strong>melhoria contínua (Kaizen)</strong>. Trata-se de um
              pensamento de constante busca por aprimorar os resultados das
              tarefas e processos. Isso envolve analisar novas práticas e
              tecnologias que possam ser aplicáveis, além de identificar e
              implementar simples ajustes em procedimentos existentes que podem
              causar impactos favoráveis significativos.
            </p>
            <p>
              Existem, de fato, vários caminhos para se chegar a um mesmo
              objetivo ou resultado. Um caminho pode ser mais rápido, outro mais
              econômico, outro mais seguro, e assim por diante. Um conjunto de
              escolhas estratégicas deve ser cuidadosamente considerado para
              dosar esses itens, buscando atingir os resultados de acordo com o
              que foi proposto, alinhando eficiência, custo, qualidade e
              segurança.
            </p>
            <p>
              É aí que entra a importância do{" "}
              <strong>pensamento sistêmico</strong>: a compreensão de que{" "}
              <strong>tudo está ligado a tudo</strong> e que cada ajuste, por
              menor que seja, gera influências nos demais itens a que está
              direta ou indiretamente conectado. O ajuste de processos deve ser
              realizado com essa visão integrada, analisando cuidadosamente
              essas ligações e suas potenciais consequências, tanto positivas
              quanto negativas, para o sistema como um todo.
            </p>
            <p>
              Em resumo, todas as nossas ações geram <strong>dados</strong> que,
              se coletados, organizados, armazenados e tratados corretamente,
              podem proporcionar <strong>informações valiosas</strong>. Essas
              informações, por sua vez, nos permitem analisar criticamente se o
              que está sendo feito pode ser realizado de uma forma ainda melhor.
              Esse ciclo de aprimoramento é especialmente favorecido quando
              temos
              <strong>atividades cíclicas</strong>, pois a repetição permite uma
              análise mais aprofundada e contínua para determinar se as tarefas
              estão sendo executadas de modo satisfatório e se há oportunidades
              para otimização constante.
            </p>
          </div>
          <div>
            <h3>Função da Cibernética</h3>
            <p>
              É inegável que a informática, hoje mais amplamente entendida como
              parte da <strong>Cibernética</strong>, gera possibilidades quase
              infinitas para otimização e inovação. No entanto, é crucial
              compreender que a<strong>lógica subjacente</strong> ao
              desenvolvimento e funcionamento desses sistemas tecnológicos é a
              mesma lógica que devemos aplicar ao planejar e executar atividades
              mesmo sem suporte computacional. Por essa razão, todas as
              atividades, digitais ou analógicas, devem ser primeiramente{" "}
              <strong>planejadas e estruturadas</strong> de formas que não
              dependam exclusivamente da informática para sua concepção,
              garantindo que a base conceitual seja sólida e adaptável.
            </p>
            <p>
              A cibernética atua como um poderoso suporte para processos que
              possuem algum tipo de{" "}
              <strong>padrão lógico ou comportamento previsível</strong>. Para
              extrair valor dela, precisamos saber exatamente o que estamos
              procurando. Isso exige um
              <strong>conhecimento aprofundado</strong> por parte de quem está
              estruturando, arranjando ou coletando os dados. Sem clareza sobre
              o objetivo, a tecnologia por si só não pode gerar informações
              significativas.
            </p>
            <h4>O que é e para que serve a Cibernética</h4>
            <p>
              Em sua essência, <strong>Cibernética</strong> é o termo mais
              abrangente e correto para definir a ciência por trás do que
              comumente chamamos de informática. Ela é a ciência que estuda os
              <strong>
                sistemas e mecanismos de controle automático e comunicação
              </strong>
              , tanto em seres vivos (biologia) quanto em máquinas (engenharia,
              computação). Essa disciplina notavelmente compara e abstrai
              funções entre esses domínios, evidenciando que as estruturas
              complexas que envolvem a abordagem sistêmica são análogas na
              biologia, nas organizações humanas e nos sistemas artificiais.
            </p>
            <blockquote>
              <q>
                A ciência imita a natureza, pois é o ser humano que a desenvolve
                por meio dos princípios lógicos que já desvendou.
              </q>
            </blockquote>
            <p>
              A cibernética, em sua aplicação prática, fundamenta-se em um
              <strong>modelo matemático ou lógico de processamento</strong> que
              utiliza conceitos da elétrica e da eletrônica. Isso se manifesta
              na composição de códigos (linguagens de programação) que, ao serem
              convertidos, representam e manipulam os dados de nosso interesse.
              É por isso que o conceito binário de zero (0) e um (1) é tão
              central: ele responde a impulsos elétricos (0 = desliga, sem
              pulso; 1 = liga, com pulso). Assim, a partir dessa composição
              eletrônica fundamental, formam-se informações complexas. Todo esse
              processo gera sequências de códigos que são armazenados de forma
              magnética ou por outros meios correlacionados, permitindo que os
              dados sejam resgatados e interpretados conforme os modelos
              previamente definidos pelas lógicas de programação.
            </p>
            <p>
              Um dos aspectos mais importantes e transformadores da cibernética
              é a sua <strong>capacidade de automação</strong>. Ela permite a
              automação da coleta, do tratamento e do armazenamento de dados, o
              que, por sua vez, possibilita a geração de informações e a tomada
              de decisões de forma automatizada. Isso não apenas garante
              <strong>confiabilidade e agilidade</strong> nos resultados, mas
              também libera recursos humanos para tarefas mais estratégicas e
              criativas.
            </p>
            <h4>Bancos de Dados</h4>
            <p>
              Os <strong>Bancos de Dados</strong> são sistemas essenciais que
              servem para <strong>armazenar dados de forma organizada</strong>.
              Funcionam como uma estrutura de controles e registros, permitindo
              que os dados sejam armazenados, organizados, acessados e
              processados de maneira segura e eficiente. A{" "}
              <strong>segurança</strong> é um dos requisitos fundamentais para
              os bancos de dados, sendo crucial tanto para prevenir perdas de
              informação causadas por erros ou falhas do sistema quanto para
              proteger contra acessos não autorizados, roubo ou alteração por
              terceiros. A integridade e a confidencialidade dos dados são
              prioritárias.
            </p>
            <h4>Estruturação Eletrônica de Bancos de Dados</h4>
            <p>
              A base da estruturação eletrônica de muitos bancos de dados,
              especialmente os relacionais, segue uma lógica de
              <strong>
                tabelas compostas por colunas e linhas que formam células
              </strong>
              , similar a uma planilha. Essa organização permite um
              armazenamento e recuperação de dados eficientes:
            </p>
            <ul>
              <li>
                <h4>Colunas (Campos/Atributos):</h4>
                <ul>
                  <li>
                    Representam a estrutura vertical da tabela e definem o
                    <strong>tipo de informação</strong> que será registrada em
                    cada célula específica. Por exemplo, em uma tabela de
                    clientes, você teria colunas como "Nome", "CPF", "Endereço".
                  </li>
                </ul>
              </li>
              <li>
                <h4>Linhas (Registros/Tuplas):</h4>
                <ul>
                  <li>
                    Representam a estrutura horizontal e correspondem a
                    <strong>cada um dos registros individuais</strong> que serão
                    inseridos nas células, seguindo os tipos definidos pelas
                    colunas. Cada linha é uma entrada completa de dados (ex: um
                    cliente específico).
                  </li>
                </ul>
              </li>
              <li>
                <h4>Células:</h4>
                <ul>
                  <li>
                    São as intersecções de colunas e linhas, representando
                    <strong>cada informação ou dado individual</strong>
                    registrado em si (ex: o nome "João Silva" na coluna "Nome"
                    da linha do cliente X).
                  </li>
                </ul>
              </li>
              <li>
                <h4>Inter-relação (Relacionamento):</h4>
                <ul>
                  <li>
                    Um conceito avançado que aparece quando diferentes tabelas
                    dentro de um banco de dados
                    <strong>
                      chamam ou se conectam a dados de outras tabelas
                    </strong>
                    . Isso permite que informações complexas sejam divididas em
                    tabelas menores e mais gerenciáveis, mas que podem ser
                    combinadas para análises abrangentes. Por exemplo, uma
                    tabela de "Pedidos" pode se relacionar com uma tabela de
                    "Clientes" para saber quem fez o pedido.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Meios de Coleta de Dados</h4>
            <p>
              No passado, grande parte da coleta de dados era realizada de forma
              <strong>manual</strong>, com informações sendo anotadas em fichas
              de controle físicas. Só depois, esses dados eram digitados em
              bancos de dados eletrônicos para que relatórios fossem gerados e
              análises pudessem ser feitas. Esse processo era extremamente
              lento: se alguma anomalia fosse identificada no relatório, a
              correção só aconteceria muito depois, o que significava que o
              problema já poderia ter se agravado consideravelmente. Além da
              lentidão, havia uma quantidade limitada de informações que podiam
              ser anotadas e uma maior interferência humana, que podia levar a
              erros e distorções nos registros.
            </p>
            <p>
              Atualmente, a situação é bem diferente. Temos uma vasta gama de
              <strong>meios diversos e tecnológicos</strong> para captar e
              coletar dados de acordo com cada demanda, acelerando
              exponencialmente o processo e aumentando a precisão. Alguns
              exemplos comuns incluem leitores de código de barras ou QR Codes,
              sensores inteligentes (IoT), dispositivos móveis como nossos
              próprios celulares (que coletam localização, dados de uso,
              pagamentos), e sistemas automatizados que registram cada transação
              ou evento.
            </p>
            <h4>Relatórios e Uso da Informação</h4>
            <p>
              Para que uma tomada de decisão possa gerar resultados
              verdadeiramente satisfatórios, é fundamental que as variáveis
              relevantes sejam analisadas com{" "}
              <strong>critérios bem estabelecidos e objetivos claros</strong>.
              Dado que estamos sempre diante da necessidade de decidir entre
              duas ou mais opções, essas escolhas precisam ser solidamente
              embasadas. Portanto, se tivermos um levantamento correto de dados
              e utilizarmos adequadamente as ferramentas para o tratamento
              desses dados (como sistemas de Business Intelligence ou
              estatística), conseguiremos obter{" "}
              <strong>informações úteis e acionáveis</strong>.
            </p>
            <p>
              Essas informações são normalmente apresentadas em forma de
              <strong>relatórios ou gráficos</strong>. Para serem eficazes,
              esses relatórios e gráficos precisam ser
              <strong>bem estruturados e visualmente claros</strong>, de modo
              que apresentem respostas diretas e compreensíveis para subsidiar
              as decisões. É crucial que o analista, mesmo diante de um gráfico
              bem elaborado, compreenda de forma adequada quais são os pontos
              relevantes que devem ser comparados ou demonstrados para extrair o
              máximo de valor.
            </p>
            <p>
              Dentro de uma indústria moderna, por exemplo, o
              <strong>sensoriamento de equipamentos de produção</strong> permite
              o monitoramento contínuo de cada etapa do processo produtivo.
              Conforme a produção avança, os dados coletados geram
              <strong>indicadores de eficiência</strong> em tempo real. Tudo
              isso, quando bem alinhado e integrado, pode fornecer informações
              valiosíssimas sobre a quantidade em estoque, os prazos de entrega
              para os clientes, o planejamento otimizado da produção, entre
              outros aspectos críticos da gestão.
            </p>
            <p>
              Em resumo, as organizações modernas dependem intrinsecamente de
              <strong>boas informações</strong> para tomar decisões
              estratégicas. A qualidade da tomada de decisão, por sua vez,
              impactará diretamente nos resultados, com consequências
              significativas tanto em questões econômicas (lucratividade,
              custos) quanto sociais (satisfação de funcionários e clientes,
              impacto na comunidade), já que diversas pessoas e partes
              interessadas dependem do bom desempenho da organização.
            </p>
            <p>
              Por isso, é absolutamente <strong>imprescindível</strong> que
              sejam utilizados os meios corretos e mais eficientes para a coleta
              e o tratamento de dados. É nesse sentido que a
              <strong>Tecnologia da Informação (TI)</strong> desempenha um papel
              fundamental, não só na drástica redução do tempo de processamento
              das informações, mas também para garantir um número muito maior e
              mais rico de dados coletados, permitindo uma visão mais completa e
              precisa do cenário.
            </p>
          </div>
          <div>
            <h3>Estratégia nas Organizações</h3>
            <p>
              Em um ambiente de negócios em constante movimento, não existe uma
              única "melhor forma" de fazer as coisas. As organizações operam em
              um cenário
              <strong>dinâmico</strong> que inclui clientes, fornecedores,
              concorrentes e muitas outras partes interessadas. Cada mudança em
              um desses elementos exige adaptações na forma de agir da
              organização, pois todos os componentes se influenciam mutuamente.
            </p>
            <p>
              O <strong>planejamento estratégico</strong> busca exatamente isso:
              prever ações futuras para preestabelecer respostas adequadas a
              cada possibilidade. É como um jogo de xadrez: você não toma
              decisões sem considerar as consequências. Pelo contrário, você
              pensa em uma sequência de movimentações — sejam elas internas ou
              externas — para alcançar um objetivo.
            </p>
            <p>
              Essa lógica envolve a ideia de mover a organização do seu estado
              atual para uma{" "}
              <strong>condição futura favorável e desejada</strong>. Isso
              significa gerenciar as variáveis ao longo do caminho para atingir
              os resultados esperados. Para que isso seja possível, uma das
              principais necessidades é ter um bom{" "}
              <strong>mapeamento das informações sobre o ambiente</strong> em
              que a organização está inserida.
            </p>
            <h4>Tipos de Ambiente</h4>
            <p>A palavra "ambiente" neste contexto se refere a:</p>
            <ul>
              <li>
                <h4>Externo:</h4>
                <ul>
                  <li>
                    O ambiente onde a organização atua, composto por forças e
                    fatores que estão fora dos seus limites diretos, mas que a
                    influenciam.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Interno:</h4>
                <ul>
                  <li>
                    A própria organização. Abrange tudo que a compõe: sua
                    estrutura, capacidade produtiva, recursos físicos (ativos,
                    instalações), recursos humanos (equipe, habilidades) e
                    recursos intelectuais (conhecimento, patentes).
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Informações do Ambiente Interno</h4>
            <p>
              Para que uma empresa seja bem-sucedida, ela precisa dominar seus
              próprios recursos. Isso significa utilizar
              <strong>ferramentas e sistemas</strong> para organizar a coleta de
              dados, a fim de compreender por completo como as coisas estão
              ocorrendo e como os recursos estão sendo utilizados. Quando uma
              empresa não consegue coletar dados de forma integral (por exemplo,
              devido a limitações de sistemas), ela pode recorrer ao uso da
              <strong>estatística</strong>. Embora a estatística seja muito
              positiva para análises e projeções, ela pode, em alguns casos,
              mascarar informações detalhadas que poderiam ser cruciais para
              melhorar os resultados da organização. O ponto chave é que as
              informações do ambiente interno são, geralmente,
              <strong>mais facilmente acessadas</strong>, pois são geradas pela
              própria organização.
            </p>
            <h4>Informações do Ambiente Externo</h4>
            <p>
              O ambiente externo é o entorno da organização e se divide em dois
              níveis principais:
            </p>
            <ul>
              <li>
                <strong>Ambiente de Tarefa:</strong> Aquele que influencia a
                organização de forma mais direta e imediata.
              </li>
              <li>
                <strong>Ambiente Geral (ou Macroambiente):</strong> É comum a
                todas as organizações, mas influencia cada negócio de forma
                diferente, dependendo de como suas forças se manifestam no
                ambiente de tarefa.
              </li>
            </ul>
            <h4>Ambiente de Tarefa</h4>
            <p>
              O ambiente de tarefa é composto pelos elementos do setor onde a
              organização opera. Inclui seus{" "}
              <strong>
                clientes, fornecedores, concorrentes e agências reguladoras
              </strong>
              . É chamado de ambiente de tarefa justamente pela sua influência
              direta nas operações diárias e nos resultados. As ações desses
              elementos afetam diretamente o desempenho da organização. Coletar
              dados e informações desse ambiente exige muito{" "}
              <strong>relacionamento</strong> com os diversos elementos e,
              frequentemente, o cruzamento de várias fontes de consulta, como
              pesquisas de mercado, análise da concorrência e feedback de
              clientes.
            </p>
            <h4>Ambiente Geral</h4>
            <p>
              Também conhecido como{" "}
              <strong>macroambiente ou ambiente macroeconômico</strong>, é
              composto por informações mais amplas:
              <strong>
                políticas, ambientais, sociais, tecnológicas e econômicas (PESTE
                ou PESTEL)
              </strong>
              . Essas informações e suas projeções futuras são extremamente
              importantes, pois moldam o cenário geral em que todas as empresas
              operam. São condições variáveis que permitem o uso da estatística
              para projeções futuras ou para validar fatores predeterminados,
              nos quais hipóteses são apresentadas. Não se trata apenas de
              compreender informações estáticas, mas de identificar e analisar{" "}
              <strong>tendências futuras</strong> em linha com todas as
              possibilidades apresentadas pelas condições de mercado.
            </p>
            <p>
              A coleta, a análise e a projeção dessas informações detalhadas
              permitem o estabelecimento de{" "}
              <strong>cenários estratégicos</strong> com os quais os gestores
              poderão identificar as melhores possibilidades de ação e
              posicionamento para a organização.
            </p>
            <h4>Cenários para Estratégia</h4>
            <p>
              Para qualquer tipo de tomada de decisão estratégica, é essencial
              dispor de <strong>informações completas e imparciais</strong>.
              Elas devem permitir a compreensão tanto do cenário atual quanto de
              projeções futuras.
            </p>
            <p>
              O <strong>cenário atual</strong> é fundamentado nas informações
              coletadas sobre o histórico de acontecimentos e a condição de
              trabalho no momento presente. Já os{" "}
              <strong>cenários futuros</strong> envolvem a compreensão dessas
              condições passadas, a análise de probabilidades futuras e a
              realização de projeções estruturadas.
            </p>
            <p>
              Como não há uma exatidão absoluta nas projeções futuras,
              costumamos projetar três cenários principais para cobrir um
              espectro de possibilidades:
            </p>
            <ul>
              <li>
                <h4>Mediano:</h4>
                <ul>
                  <li>
                    Baseia-se em <strong>tendências futuras médias</strong>,
                    interpretando os fatores predeterminados em condições
                    consideradas regulares. Não representa nem as condições mais
                    favoráveis nem as mais desfavoráveis, mas sim uma situação
                    "normal" que pode ocorrer. Utiliza projeções estatísticas de
                    fatores variáveis para construir essa visão regular do
                    futuro.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Otimista:</h4>
                <ul>
                  <li>
                    Prevê condições mais favoráveis à empresa, considerando a
                    análise dos fatores predeterminados e a adoção de projeções
                    de indicadores variáveis que apontam para as
                    <strong>melhores perspectivas de resultados</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Pessimista:</h4>
                <ul>
                  <li>
                    É o oposto do cenário otimista, levando todos os fatores
                    predeterminados e as variáveis a condições que representam
                    um
                    <strong>quadro futuro pior</strong> para o ambiente em que a
                    empresa irá atuar. Serve para identificar e planejar a
                    mitigação de riscos.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A interpretação do que constitui um cenário otimista ou pessimista
              difere para cada organização, de acordo com seu tipo de negócio,
              setor e objetivos. Uma análise criteriosa identificará o que pode
              ocorrer em cada uma das situações projetadas, permitindo criar
              <strong>estratégias específicas</strong> para agir em cada uma
              delas. O objetivo é ter estratégias para
              <strong>
                aproveitar ao máximo as situações mais otimistas
              </strong>{" "}
              e, ao mesmo tempo,
              <strong>
                desviar ou mitigar os riscos das situações mais pessimistas
              </strong>
              , fazendo com que seja possível atingir, ou até superar, o
              resultado médio planejado.
            </p>
            <h4>Decisões e Atualização das Informações</h4>
            <p>
              O processo decisório nas organizações deve ser sustentado por
              informações que permitam a compreensão das
              <strong>melhores possibilidades</strong> e os impactos esperados
              de cada escolha. Ter uma estrutura de dados bem organizada —
              coletados, armazenados e tratados corretamente — é fundamental
              para estruturar cenários realistas e, consequentemente, tomar
              decisões mais assertivas.
            </p>
            <h4>Etapas de um Processo Decisório:</h4>
            <ul>
              <li>
                <h4>1. Identificar a situação:</h4>
                <ul>
                  <li>
                    Analisar os acontecimentos na organização para determinar se
                    há um problema a ser resolvido ou uma oportunidade a ser
                    aproveitada. Muitos processos internos exigem a tomada de
                    decisão; inclusive, o simples fato de não modificar uma
                    situação já é, por si só, uma decisão.
                  </li>
                </ul>
              </li>
              <li>
                <h4>2. Obter informações:</h4>
                <ul>
                  <li>
                    A qualidade dos dados e informações obtidos é diretamente
                    proporcional à probabilidade de sucesso na tomada de
                    decisão. Quanto mais precisas e completas as informações,
                    melhor a decisão.
                  </li>
                </ul>
              </li>
              <li>
                <h4>3. Gerar soluções alternativas, avaliar e escolher:</h4>
                <ul>
                  <li>
                    Desenvolver diversas opções para a situação identificada. Em
                    seguida, avaliar cada alternativa com base em critérios
                    predefinidos (custo, risco, benefício, alinhamento
                    estratégico) e escolher a solução mais adequada aos
                    objetivos organizacionais.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  4. Transformar a solução em ação e avaliar os resultados:
                </h4>
                <ul>
                  <li>
                    Colocar a decisão em prática por meio de um plano de ação
                    claro. Posteriormente, é crucial avaliar os resultados
                    obtidos. Essa avaliação não só mede o sucesso da decisão
                    atual, mas também fornece feedback valioso que auxiliará em
                    decisões futuras, realimentando o ciclo de aprendizado.
                  </li>
                </ul>
              </li>
              <li>
                <h4>5. Atualizar informações:</h4>
                <ul>
                  <li>
                    Tanto para a composição dos cenários quanto para a própria
                    tomada de decisão, os dados foram coletados e usados para
                    projetar uma situação futura, formando a base do
                    planejamento estratégico. Contudo, o ambiente é dinâmico, e
                    novas situações surgem constantemente. Por isso, é preciso
                    <strong>
                      frequentemente atualizar e continuar sempre atualizando as
                      informações
                    </strong>{" "}
                    que embasam esses planejamentos.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Algumas informações exigirão atualização quase diária, outras
              mensal, e pouquíssimas terão demanda anual ou esporádica. É
              fundamental estar atento o tempo todo às novas atualizações e
              tendências.
            </p>
            <p>
              Um planejamento, por mais bem elaborado que seja, deve ser
              <strong>modificado sempre que necessário</strong>. É preciso ter
              cuidado para que a organização não perca seu foco principal, mas,
              ao mesmo tempo, considerando o ambiente dinâmico, é imprescindível
              <strong>reavaliar os planejamentos</strong> continuamente para
              garantir que permaneçam relevantes e alinhados ao contexto atual.
            </p>
          </div>
          <div>
            <h3>Gerenciamento das Informações</h3>
            <p>
              Vamos explorar alguns conceitos fundamentais para o gerenciamento
              de informações nas organizações:
            </p>
            <ul>
              <li>
                <strong>TIC</strong> (Tecnologia da Informação e Comunicação)
              </li>
              <li>
                <strong>SPT</strong> (Sistemas de Processamento de Transações)
              </li>
              <li>
                <strong>ERP</strong> (Enterprise Resource Planning)
              </li>
              <li>
                <strong>SIG</strong> (Sistema de Informação Gerencial)
              </li>
              <li>
                <strong>CRM</strong> (Customer Relationship Management)
              </li>
            </ul>
            <h4>Obsolescência Programada e Novas Tecnologias</h4>
            <p>
              No ambiente organizacional e de consumo, alguns produtos são
              criados com uma <strong>vida útil pré-definida</strong>. Isso é
              especialmente comum em tecnologias de ponta. Esses produtos são
              lançados no mercado com uma predisposição para se tornarem
              obsoletos ou não funcionais em determinado período, o que exige
              sua substituição por modelos mais novos. Embora essa prática
              esteja ligada a uma lógica de
              <strong>faturamento e lucro</strong> das organizações, ela também
              impulsiona o <strong>desenvolvimento tecnológico contínuo</strong>
              .
            </p>
            <p>
              No universo dos sistemas, a dinâmica não é diferente. O avanço das
              novas tecnologias proporcionou e impulsionou o surgimento de novas
              estruturas e conceitos:
            </p>
            <ul>
              <li>
                <h4>Cloud Computing (Computação em Nuvem):</h4>
                <ul>
                  <li>
                    Refere-se à{" "}
                    <strong>
                      disponibilidade e demanda de recursos de computação
                    </strong>
                    , como armazenamento, servidores e poder de processamento,
                    pela internet. Em vez de manter infraestrutura própria, as
                    organizações acessam esses serviços de provedores externos.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Big Data:</h4>
                <ul>
                  <li>
                    É a capacidade de trabalhar com uma
                    <strong>grande massa de dados</strong> — volumes massivos e
                    complexos que exigem abordagens e tecnologias específicas
                    para serem processados. Funciona como um mecanismo
                    estratégico que utiliza a constante e crescente captação de
                    dados (principalmente gerados por dispositivos móveis, redes
                    sociais, sensores, etc.) e possibilita analisar e
                    interpretar esses dados para obter insights valiosos.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Business Intelligence (BI - Inteligência de Negócios):</h4>
                <ul>
                  <li>
                    É o{" "}
                    <strong>
                      processo de coleta, organização, análise, compartilhamento
                      e monitoramento de informações
                    </strong>
                    que auxiliam diretamente o processo de gestão e a formulação
                    da estratégia da organização. O BI transforma dados brutos
                    em informações compreensíveis e úteis para a tomada de
                    decisões.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Todos esses conceitos estão intrinsecamente ligados à
              <strong>
                importância e à lógica do gerenciamento de informações
              </strong>
              . Eles representam aquilo que precisamos cuidadosamente cuidar e
              resguardar para obter respostas claras e embasadas na tomada de
              decisão.
            </p>
            <h4>TIC - Tecnologia da Informação e Comunicação</h4>
            <p>
              Um sistema de informação pode ser tanto manual quanto
              informatizado. A função primordial de um{" "}
              <strong>sistema informatizado</strong> é coletar, organizar e
              transmitir dados, possibilitando a análise e o posterior uso das
              informações na tomada de decisão, aprimorando significativamente
              os resultados.
            </p>
            <p>
              As <strong>TICs</strong> (Tecnologias da Informação e Comunicação)
              integram hardware e software com elementos de comunicação (redes),
              gerando modernas soluções tecnológicas. Elas representam a
              plataforma tecnológica que nos permite migrar de sistemas manuais
              para os eletrônicos, automatizados e interconectados. As TICs
              contemplam a lógica fundamental de{" "}
              <strong>entrada, processamento e saída de dados</strong>. Para
              isso, elas dependem de hardware (computadores, servidores),
              software (programas, sistemas operacionais), bancos de dados (onde
              os dados são armazenados) e redes de dados (para comunicação e
              compartilhamento).
            </p>
            <h4>As 3 Camadas do Software:</h4>
            <p>
              Um software geralmente é composto por três camadas distintas que
              trabalham em conjunto:
            </p>
            <ul>
              <li>
                <h4>1. Interface do Usuário (Front-end):</h4>
                <ul>
                  <li>
                    É o meio que proporciona uma
                    <strong>ligação lógica entre a máquina e o usuário</strong>.
                    Pode se manifestar por meio de telas, botões, teclados,
                    sinais de áudio e vídeo, ou qualquer outro recurso que possa
                    ser compreendido pelo usuário quando emitido pela máquina,
                    ou compreendido pela máquina quando a origem é o usuário. É
                    a parte visível e interativa do sistema.
                  </li>
                </ul>
              </li>
              <li>
                <h4>2. O Código (Back-end/Lógica de Negócio):</h4>
                <ul>
                  <li>
                    Consiste nas <strong>linhas de programação</strong> com
                    funções específicas para cada ação e reação esperada. É a
                    tradução da lógica de negócio e dos requisitos do sistema em
                    uma linguagem que a máquina pode executar, realizando as
                    tarefas para as quais o software foi projetado.
                  </li>
                </ul>
              </li>
              <li>
                <h4>3. O Banco de Dados (Armazenamento):</h4>
                <ul>
                  <li>
                    É a{" "}
                    <strong>
                      estrutura lógica para o armazenamento dos dados
                    </strong>
                    . Permite fácil acesso e compreensão das informações de
                    acordo com os tipos de dados envolvidos. É onde todas as
                    informações geradas e utilizadas pelo software são guardadas
                    e gerenciadas.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Objetivos dos Sistemas de Informação</h4>
            <p>
              Os sistemas de informação modernos são projetados para atingir
              cinco objetivos organizacionais estratégicos:
            </p>
            <ol>
              <li>
                <strong>Atingir excelência operacional:</strong> Otimizar
                processos, reduzir custos e aumentar a eficiência das operações
                diárias.
              </li>
              <li>
                <strong>Desenvolver novos produtos e serviços:</strong> Apoiar a
                inovação e a criação de ofertas que atendam às necessidades do
                mercado.
              </li>
              <li>
                <strong>Melhorar a qualidade das decisões gerenciais:</strong>
                Fornecer dados e informações precisas e relevantes para embasar
                escolhas estratégicas e táticas.
              </li>
              <li>
                <strong>Aprimorar o relacionamento com os clientes:</strong>{" "}
                Coletar e analisar dados sobre clientes para personalizar
                interações, melhorar o atendimento e aumentar a fidelidade.
              </li>
              <li>
                <strong>Assegurar a sustentabilidade do negócio:</strong> Apoiar
                a resiliência e o crescimento a longo prazo da organização,
                adaptando-se às mudanças do ambiente.
              </li>
            </ol>
            <p>Os sistemas, em termos de abrangência, podem ser:</p>
            <ul>
              <li>
                <h4>Departamentais:</h4>
                <ul>
                  <li>
                    Com função única ou específica de um departamento/setor da
                    organização. Geram informações usadas somente para
                    finalidades específicas daquele setor, sem uma integração
                    ampla com outras áreas.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Integrados:</h4>
                <ul>
                  <li>
                    Sistemas que se{" "}
                    <strong>interligam entre diversos departamentos</strong>,
                    gerando informações compartilhadas que se somam a cada ação
                    de cada área. Promovem uma visão holística e unificada da
                    organização.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>SIG - Sistema de Informação Gerencial</h4>
            <p>
              Existe uma distinção importante entre os <strong>SPTs</strong>{" "}
              (Sistemas de Processamento de Transações) e os{" "}
              <strong>SIGs</strong> (Sistemas de Informação Gerencial). Os SPTs
              são sistemas que se concentram em processar tipos específicos de
              transações, cumprindo uma função operacional. São eles que
              registram as transações rotineiras de uma organização, como
              vendas, pagamentos, entradas de estoque, etc.
            </p>
            <p>
              Por outro lado, os <strong>SIGs</strong> têm a função de organizar
              os dados coletados pelos SPTs e promover a
              <strong>interpretação de informações</strong> que permitam o
              gerenciamento eficaz da organização. Embora façamos essa distinção
              entre os tipos de sistemas, o ideal é que ocorra uma
              <strong>integração profunda</strong> entre os diversos SPTs. Essa
              integração é fundamental para que se possa ter bons SIGs, ou seja,
              para que um grande volume de transações registradas nos diversos
              setores possa ser consolidado e utilizado para um apoio gerencial
              robusto.
            </p>
            <p>
              Foi a partir dessa lógica de integração que surgiram os
              <strong>ERPs</strong> (Enterprise Resource Planning, ou
              Planejamento dos Recursos Empresariais). Um ERP é um sistema
              integrado que interliga dados e processos de toda a organização em
              um sistema único, permitindo gerenciar de forma abrangente todos
              os recursos. A lógica modular do ERP deve atuar sobre todos os
              pontos fundamentais do negócio, garantindo sua efetividade. Assim,
              ele integra os diferentes setores (finanças, RH, produção, vendas)
              e proporciona ao gestor um panorama geral e atualizado da
              organização. O importante é compreender que precisamos da lógica
              do processamento de transações (SPTs) e da geração de informações
              gerenciais (SIGs) para evoluir aos conceitos e benefícios de um
              sistema ERP.
            </p>
            <h4>Sistemas para Estratégia e Decisão</h4>
            <p>
              O gestor tem acesso a <strong>relatórios gerenciais</strong>, que
              são a condensação de informações atualizadas e confiáveis,
              estruturadas de forma clara e objetiva. Frequentemente, esses
              relatórios são convertidos em modelos gráficos para facilitar a
              análise e a rápida compreensão. Para que isso funcione bem, é
              necessário identificar os principais pontos de atenção e os
              indicadores-chave de desempenho (KPIs) relevantes para cada tipo
              de informação.
            </p>
            <p>
              Esses relatórios podem ser caracterizados em três tipos
              principais:
            </p>
            <ul>
              <li>
                <h4>Programados:</h4>
                <ul>
                  <li>
                    São <strong>relatórios periódicos</strong>, gerados em
                    intervalos regulares, como demonstrativos diários, semanais
                    ou mensais de vendas, produção ou despesas.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Sob Demanda:</h4>
                <ul>
                  <li>
                    São relatórios <strong>solicitados pelo usuário</strong>{" "}
                    para algo específico e pontual, como um histórico de
                    pagamentos de um cliente em determinado período ou um
                    relatório de vendas de um produto específico.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Exceção:</h4>
                <ul>
                  <li>
                    São relatórios <strong>gerados automaticamente</strong>
                    quando são identificados eventos ou condições fora do padrão
                    esperado. Por exemplo, um indicador de produção que ficou
                    abaixo do programado, alguma anomalia em um processo, ou um
                    nível de estoque abaixo do mínimo. Servem para alertar os
                    gestores e permitir a tomada de decisões rápidas para
                    resolver problemas.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Além desses, temos também os <strong>SIS</strong> (Strategic
              Information Systems - Sistemas de Informação Estratégicos), que
              são divididos em
              <strong>SAD</strong> (Sistemas de Apoio à Decisão) e{" "}
              <strong>SAE</strong>
              (Sistemas de Apoio Executivo). Ambos contam com avançadas
              possibilidades de <strong>simulação de resultados</strong>. Isso é
              feito a partir da junção de informações históricas, somadas a
              eventos ou variáveis propostos pelo usuário, permitindo
              compreender as possibilidades de resultados em diferentes cenários
              (otimista, pessimista, mediano). Há muitas opções tecnológicas
              para auxiliar o uso estratégico das informações.
            </p>
            <p>
              Em resumo, os Sistemas de Informação Gerencial são aplicados em
              diversas áreas da organização:
            </p>
            <ul>
              <li>
                Para <strong>finanças</strong>, o SIG envolve todos os registros
                das movimentações financeiras (entradas e saídas de valores),
                gerando relatórios que permitem compreender as demandas de
                recursos, resultados financeiros e muitos outros indicadores.
              </li>
              <li>
                Nas áreas de <strong>vendas e atendimento ao cliente</strong>,
                as empresas contam com as diversas possibilidades de um
                <strong>CRM</strong> (Customer Relationship Management -
                Gerenciamento de Relacionamento com o Cliente). O CRM é um SIG
                que ajuda a compreender as ações tomadas e as demandas
                específicas, seja de cada cliente individual ou de grupos de
                clientes, melhorando a experiência e a fidelização.
              </li>
              <li>
                Na <strong>produção</strong>, as empresas utilizam SIGs
                específicos para manufatura, para compreender as demandas por
                matéria-prima, a disponibilidade e o uso de equipamentos, a
                alocação de mão de obra e outras condições essenciais para a
                otimização da produção.
              </li>
              <li>
                Na <strong>gestão de pessoas</strong>, o SIG vai muito além da
                folha de pagamento, abrangendo as diversas condições e demandas
                que envolvem os colaboradores, incluindo a análise de
                desempenho, desenvolvimento e bem-estar dos trabalhadores.
              </li>
              <li>
                Para a <strong>gestão de projetos</strong>, o SIG auxilia na
                interpretação da aplicação dos recursos, confrontando o
                planejamento com a realização das atividades em tempo real,
                permitindo ajustes e controle eficaz.
              </li>
            </ul>
            <p>
              O grande propósito de todos esses sistemas e conceitos é
              <strong>
                melhorar a coleta de dados, ampliar a geração de informações
                relevantes e permitir a melhor aplicação dessas informações para
                a obtenção de resultados superiores
              </strong>{" "}
              para a organização.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default AdministracaoSistemas;
