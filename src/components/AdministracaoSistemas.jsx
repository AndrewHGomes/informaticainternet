import { useState } from "react";
import aula1 from "../assets/audiosM3/aula01.mp3";
import aula2 from "../assets/audiosM3/aula02.mp3";
import aula3 from "../assets/audiosM3/aula03.mp3";
import aula4 from "../assets/audiosM3/aula04.mp3";

import aula5 from "../assets/audiosM3/aula05.mp3";
import aula6 from "../assets/audiosM3/aula06.mp3";
import aula7 from "../assets/audiosM3/aula07.mp3";
import aula8 from "../assets/audiosM3/aula08.mp3";

import aula9 from "../assets/audiosM3/aula09.mp3";
import aula10 from "../assets/audiosM3/aula10.mp3";
import aula11 from "../assets/audiosM3/aula11.mp3";
import aula12 from "../assets/audiosM3/aula12.mp3";

import aula13 from "../assets/audiosM3/aula13.mp3";
import aula14 from "../assets/audiosM3/aula14.mp3";
import aula15 from "../assets/audiosM3/aula14.mp3";
import aula16 from "../assets/audiosM3/aula16.mp3";

import aula17 from "../assets/audiosM3/aula17.mp3";
import aula18 from "../assets/audiosM3/aula18.mp3";
import aula19 from "../assets/audiosM3/aula19.mp3";
import aula20 from "../assets/audiosM3/aula20.mp3";

import aula21 from "../assets/audiosM3/aula21.mp3";
import aula22 from "../assets/audiosM3/aula22.mp3";
import aula23 from "../assets/audiosM3/aula23.mp3";
import aula24 from "../assets/audiosM3/aula24.mp3";

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
            <h3>Sistema e Teoria dos Sistemas</h3>
            <div className="audios">
              <audio src={aula1} controls></audio>
              <audio src={aula2} controls></audio>
              <audio src={aula3} controls></audio>
              <audio src={aula4} controls></audio>
            </div>
            <h4>O que é um sistema?</h4>
            <p>
              Um <strong>sistema</strong> é um conjunto de partes organizadas
              que funcionam juntas. Não pense apenas em computadores; um sistema
              pode ser qualquer coisa, desde uma família até o corpo humano.
            </p>
            <p>
              A ideia principal é que cada <strong>elemento</strong> (a menor
              parte do sistema) está conectado e afeta o todo. Para entender
              isso, pense na sua rotina diária. A tarefa de{" "}
              <strong>lavar a louça</strong> não é só pegar a esponja. Ela
              envolve:
            </p>
            <ul>
              <li>
                <strong>Dependências:</strong>
                <ul>
                  <li>
                    São as tarefas, elementos ou condições que{" "}
                    <strong>precisam estar prontas</strong> antes que uma
                    atividade possa começar. São os pré-requisitos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dependentes:</strong>
                <ul>
                  <li>
                    São as tarefas ou resultados que{" "}
                    <strong>só podem acontecer depois</strong> de uma outra
                    atividade ser concluída. São as consequências ou passos
                    seguintes.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Visão Sistêmica</h4>
            <p>
              O ponto-chave é desenvolver uma <strong>visão sistêmica</strong>.
              Isso significa que, em vez de focar em uma única tarefa, você
              aprende a enxergar como todas as partes se relacionam e
              influenciam umas às outras.
            </p>
            <p>
              Na <strong>administração</strong>, essa visão é fundamental. Ela
              permite que você entenda como uma pequena mudança em uma área pode
              causar grandes impactos em outras, tornando a tomada de decisões
              muito mais eficaz.
            </p>
            <p>
              <strong>Para fixar:</strong> Um sistema é como um quebra-cabeça.
              Cada peça é um <strong>elemento</strong>
              essencial que, quando combinado com as outras, forma um todo
              completo e funcional.
            </p>
            <h4>A Teoria Geral dos Sistemas (TGS)</h4>
            <p>
              A <strong>Teoria Geral dos Sistemas (TGS)</strong> surgiu para
              superar uma forma de pensar antiga, chamada de{" "}
              <strong>lógica reducionista</strong>. Antes da TGS, as pessoas
              estudavam os problemas e as organizações dividindo tudo em partes
              isoladas. Isso fazia com que perdessem a visão do todo e
              dificultava a conexão entre diferentes áreas do conhecimento.
            </p>
            <p>
              A TGS, criada pelo biólogo{" "}
              <strong>Ludwig von Bertalanffy </strong>entre 1950 e 1968, propôs
              uma nova abordagem: ver o mundo de forma{" "}
              <strong>integrada</strong>. Em vez de estudar a física, a química
              ou a biologia separadamente, a ideia é analisá-las de forma
              interdependente, entendendo que cada parte faz parte de um
              conjunto maior.
            </p>
            <h4>O que é um Sistema na TGS?</h4>
            <p>
              A própria palavra "sistema" é o conceito central da teoria. Ele
              pode ser definido como:
            </p>
            <ul>
              <li>
                <q>
                  Um conjunto de elementos ou componentes que interagem para
                  atingir um objetivo. <cite>(Stair e Reynolds)</cite>
                </q>
              </li>
              <li>
                <q>
                  Um conjunto de elementos unidos por alguma forma de interação
                  ou interdependência. <cite>(Chiavenato)</cite>
                </q>
              </li>
            </ul>
            <p>
              A TGS não oferece soluções prontas, mas sim{" "}
              <strong>conceitos</strong> que podem ser aplicados em diversas
              áreas, incluindo a <strong>administração</strong>. Na
              administração, a TGS se tornou fundamental com o avanço da
              tecnologia e o uso de dados, pois ela ajuda a entender como a
              informação gerada em um setor se conecta e impacta outros.
            </p>
            <p>
              <strong>Para fixar:</strong> A TGS mudou a maneira de pensar,
              passando da análise de partes isoladas para a visão integrada do
              todo, reconhecendo a interdependência entre os elementos.
            </p>
            <h4>O Funcionamento Básico de um Sistema</h4>
            <p>
              Todo sistema existe para produzir um resultado. Para entender como
              isso acontece, podemos dividi-lo em três etapas principais:
            </p>
            <ol>
              <li>
                <strong>Entradas (Inputs):</strong>
                <ul>
                  <li>
                    São os elementos que o sistema precisa para funcionar. Pense
                    nelas como a matéria-prima. Elas vêm do ambiente externo e
                    podem ser qualquer coisa, como:
                    <ul>
                      <li>
                        <strong>Informações:</strong> Dados, relatórios.
                      </li>
                      <li>
                        <strong>Recursos:</strong> Dinheiro, materiais, energia.
                      </li>
                      <li>
                        <strong>Pessoas:</strong> Funcionários, clientes.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Processamento:</strong>
                <ul>
                  <li>
                    É a fase em que o sistema age e transforma as entradas. É
                    aqui que o "trabalho" acontece. A qualidade do processamento
                    depende diretamente da quantidade e da qualidade das
                    entradas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Saídas (Outputs)</strong>
                <ul>
                  <li>
                    É o resultado final do sistema. Elas são o produto ou
                    serviço que o sistema entrega ao ambiente. As saídas devem
                    estar de acordo com o propósito original do sistema.
                  </li>
                </ul>
              </li>
            </ol>
            <p>Exemplo Prático:</p>
            <ul>
              <li>
                <strong>Entradas:</strong>
                <ul>
                  <li>Farinha, água, fermento, sal, energia.</li>
                </ul>
              </li>
              <li>
                <strong>Processamento:</strong>
                <ul>
                  <li>Misturar os ingredientes, sovar a massa, assar.</li>
                </ul>
              </li>
              <li>
                <strong>Saídas:</strong>
                <ul>
                  <li>Pães prontos.</li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Para fixar:</strong> Todo sistema segue a lógica Entrada →
              Processamento → Saída para transformar recursos em resultados.
            </p>
            <h4>Tipos de Sistemas</h4>
            <p>
              Os sistemas não são todos iguais. Eles se classificam em duas
              categorias principais, dependendo de como interagem com o ambiente
              externo:
            </p>
            <ol>
              <li>
                <strong>Sistemas Abertos:</strong>
                <ul>
                  <li>
                    <strong>Definição:</strong> São aqueles que têm uma{" "}
                    <strong>interação constante</strong> e intensa com o
                    ambiente. Eles recebem diversas <strong>entradas</strong> e
                    produzem muitas <strong>saídas</strong>.
                  </li>
                  <li>
                    <strong>Características:</strong>
                    <ul>
                      <li>
                        São influenciados por fatores externos (economia,
                        política, clima, fornecedores, etc.).
                      </li>
                      <li>
                        São flexíveis e precisam se adaptar para funcionar.
                      </li>
                      <li>
                        Seu comportamento e resultados nem sempre são
                        previsíveis.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Exemplos:</strong>
                    <ul>
                      <li>
                        Uma empresa é um sistema aberto. A quantidade de
                        produtos que ela vende depende de fatores externos como
                        o mercado, a concorrência e o poder de compra dos
                        clientes.
                      </li>
                      <li>
                        Um ser vivo (como você!) é um sistema aberto. Ele
                        interage com o ambiente para obter comida, água e
                        oxigênio.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sistemas fechados:</strong>
                <ul>
                  <li>
                    <strong>Definição:</strong> São aqueles que{" "}
                    <strong>não interagem</strong> ou têm pouca interação com o
                    ambiente externo. Suas entradas e saídas são limitadas ou
                    inexistentes.
                  </li>
                  <li>
                    <strong>Características:</strong>
                    <ul>
                      <li>
                        São previsíveis e têm um comportamento padronizado.
                      </li>
                      <li>
                        São chamados de <strong>sistemas mecânicos</strong> ou
                        <strong>determinísticos</strong>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Exemplos:</strong>
                    <ul>
                      <li>
                        Um relógio é um sistema fechado. Ele funciona
                        internamente sem depender de fatores externos (exceto,
                        talvez, a troca da bateria).
                      </li>
                      <li>
                        Outros exemplos incluem máquinas e equipamentos criados
                        pelo ser humano.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              <strong>Para fixar:</strong>
            </p>
            <ul>
              <li>
                <strong>Sistemas Abertos:</strong> são como organismos vivos: se
                adaptam e dependem do ambiente.
              </li>
              <li>
                <strong>Sistemas Fechados:</strong> são como máquinas:
                previsíveis e isoladas do ambiente.
              </li>
            </ul>
            <h4>Aplicando a Visão de Sistemas na Prática</h4>
            <p>
              Ter uma <strong>visão sistêmica</strong> é fundamental para a
              <strong>administração</strong> e o desenvolvimento de sistemas.
              Significa <strong>"diminuir o zoom"</strong> em um processo para
              enxergar o cenário completo, em vez de analisar dados isolados.
            </p>
            <h4>A Importância da Visão de Conjunto</h4>
            <p>
              Um dado por si só pode não revelar a verdade. Apenas quando você
              conecta informações de diferentes áreas é que a realidade se torna
              clara.
            </p>
            <ul>
              <li>
                <strong>1º Veículo:</strong>
                <ul>
                  <li>
                    O veículo 1 gasta R$ 1.000,00 de combustível (dado do setor
                    de pagamentos). No mesmo período, ele transportou apenas 200
                    kg de mercadoria (dado do setor de logística).
                  </li>
                </ul>
              </li>
              <li>
                <strong>2º Veículo:</strong>
                <ul>
                  <li>
                    O veículo 2 gasta mais combustível, mas transporta um peso
                    muito maior, o que o torna o mais eficiente em termos de
                    custo por quilo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>3º Veículo:</strong>
                <ul>
                  <li>
                    O veículo 3 gasta menos combustível no total, mas seu volume
                    de transporte também é baixo, o que faz com que seu custo
                    por quilo transportado seja maior do que o do veículo 2.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Análise Sistêmica na Prática</h4>
            <p>
              O texto apresenta um exemplo de como dados isolados podem levar a
              conclusões erradas:
            </p>
            <ol>
              <li>
                <strong>Análise Isolada de Gasto de Combustível:</strong>
                <ul>
                  <li>
                    O veículo 2 parece ser o mais gastador, e o veículo 3, o
                    mais econômico.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Análise Isolada de Peso Transportado:</strong>
                <ul>
                  <li>
                    O veículo 3 parece ter o pior desempenho de transporte.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Análise Sistêmica:</strong>
                <ul>
                  <li>
                    Ao cruzar os dados de "custo de combustível" com "peso
                    transportado", a realidade muda. O veículo 1 é, na verdade,
                    o que tem o maior custo de combustível por quilo
                    transportado.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              <strong>Conclusão:</strong> Apenas com uma visão sistêmica, que
              une informações de diferentes áreas, é possível tomar decisões
              corretas e eficazes. O que parecia um problema no veículo 2, na
              verdade, era um problema de ineficiência no veículo 1.
            </p>
            <h4>Classificação e Aplicação dos Sistemas</h4>
            <p>
              A classificação de um sistema depende da sua relação com o
              ambiente externo, e isso define se ele é <strong>aberto</strong>{" "}
              ou <strong>fechado</strong>.
            </p>
            <h4>Tipificando os Sistemas</h4>
            <ul>
              <li>
                <strong>Sistema Aberto:</strong>
                <ul>
                  <li>
                    É aquele que é{" "}
                    <strong>influenciado por fatores externos</strong> e não
                    pode controlá-los. O exemplo do veículo na aula é um sistema
                    aberto, pois seu desempenho e custos são afetados por
                    elementos como a logística da empresa e o peso das
                    mercadorias transportadas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sistema Fechado:</strong>
                <ul>
                  <li>
                    É aquele que não sofre interferência do ambiente externo.
                    Máquinas, equipamentos e alguns softwares são exemplos
                    claros. Uma calculadora, por exemplo, sempre dará a mesma
                    resposta para a mesma operação (2 + 2 sempre será 4),
                    independentemente de fatores externos.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Apesar da diferença, a lógica de funcionamento é a mesma para
              ambos:
            </p>
            <p>
              <strong>Entrada → Processamento → Saída</strong>
            </p>
            <ul>
              <li>
                <strong>Entrada:</strong>
                <ul>
                  <li>
                    A informação ou dado que o sistema recebe (ex: os números e
                    o sinal de soma na calculadora).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Processamento:</strong>
                <ul>
                  <li>
                    A ação que o sistema executa com base nas regras
                    estabelecidas (ex: a calculadora segue as leis da matemática
                    para fazer o cálculo).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Saída:</strong>
                <ul>
                  <li>
                    O resultado final (ex: o número 4 na tela da calculadora).
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Pontos-Chave</h4>
            <ul>
              <li>
                Um{" "}
                <strong>sistema é um conjunto de elementos organizados</strong>.
              </li>
              <li>
                A <strong>visão sistêmica</strong> é crucial para a
                administração, pois{" "}
                <strong>
                  permite enxergar os problemas de forma ampla, entendendo como
                  cada parte influencia o todo
                </strong>
                .
              </li>
              <li>
                A qualidade da <strong>saída</strong> depende da qualidade das{" "}
                <strong>entradas</strong>. É por isso que é fundamental fazer as
                perguntas certas e usar dados de qualidade.
              </li>
              <li>
                Sistemas podem ser <strong>abertos</strong> (influenciados pelo
                ambiente, como uma empresa) ou <strong>fechados</strong>{" "}
                (isolados do ambiente, como uma máquina).
              </li>
            </ul>
          </div>
          <div>
            <h3>Comunicação e Sabedoria</h3>
            <div className="audios">
              <audio src={aula5} controls></audio>
              <audio src={aula6} controls></audio>
              <audio src={aula7} controls></audio>
              <audio src={aula8} controls></audio>
            </div>
            <p>
              Esta aula explora como transformamos informações em conhecimento.
              O processo começa com o recebimento de <strong>dados</strong>, que
              são pequenas e dispersas frações de informação.
            </p>
            <h4>Dados, Informação e Comunicação</h4>
            <ul>
              <li>
                <strong>O que são dados?</strong>
                <ul>
                  <li>
                    Dados são os fatos brutos que coletamos o tempo todo, de
                    qualquer lugar. Eles podem vir de uma conversa, de um vídeo
                    na internet, de um livro ou até mesmo de algo que vemos na
                    rua. Eles chegam até nós por meio da{" "}
                    <strong>comunicação</strong>, seja ela por texto, som,
                    imagens ou gestos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>De dados à informação:</strong>
                <ul>
                  <li>
                    Sozinhos, os dados não têm muito sentido. A mágica acontece
                    quando você começa a ligar os pontos entre eles. Ao cruzar e
                    comparar dados diferentes, você os organiza e lhes dá
                    significado, transformando-os em informação.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Para fixar:</strong> A jornada do conhecimento começa com
              a <strong>comunicação</strong>, que nos entrega{" "}
              <strong>dados</strong>. Em seguida, nossa mente processa esses
              dados para criar <strong>informação</strong>, que é a base do
              aprendizado. É um processo de "digerir" pequenas partes até que
              elas façam sentido como um todo.
            </p>
            <h4>Pirâmide do Conhecimento (DIKW)</h4>
            <p>
              A <strong>Pirâmide do Conhecimento</strong> é um modelo que
              explica a jornada de transformar dados simples em sabedoria. A
              leitura deve ser feita da base para o topo, pois cada nível se
              constrói sobre o anterior. As quatro camadas da pirâmide são:
            </p>
            <ol>
              <li>
                <strong>Dados (Base)</strong>
                <ul>
                  <li>
                    <strong>O que é?</strong>
                    <ul>
                      <li>
                        São a matéria-prima do conhecimento: fatos brutos,
                        dispersos e sem contexto, como números, palavras e
                        imagens.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Exemplo:</strong>
                    <ul>
                      <li>
                        A temperatura de 25 graus. Sozinho, esse número não diz
                        muita coisa.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Informação</strong>
                <ul>
                  <li>
                    <strong>O que é?</strong>
                    <ul>
                      <li>
                        É o resultado de organizar e dar sentido aos dados. É o
                        "tratamento" dos dados.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Exemplo:</strong>
                    <ul>
                      <li>
                        "A temperatura de 25 graus foi registrada em São Paulo,
                        na manhã de hoje." Agora o dado tem contexto e
                        significado.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conhecimento</strong>
                <ul>
                  <li>
                    <strong>O que é?</strong>
                    <ul>
                      <li>
                        É a capacidade de entender a informação e reconhecer
                        padrões e comportamentos. Permite elaborar conclusões
                        baseadas nas informações e experiências.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Exemplo:</strong>
                    <ul>
                      <li>
                        "Com base nos dados de temperatura, sabemos que o clima
                        de São Paulo costuma ser quente nesta época do ano.
                        Podemos prever que a tarde será ensolarada."
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sabedoria (Topo)</strong>
                <ul>
                  <li>
                    <strong>O que é?</strong>
                    <ul>
                      <li>
                        É o nível mais alto, que se conquista com a maturidade
                        de <strong>saber quando e como aplicar</strong> o
                        conhecimento. É a capacidade de usar o conhecimento de
                        forma eficaz para tomar decisões e resolver problemas.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Exemplo:</strong>
                    <ul>
                      <li>
                        "Com a previsão de calor, é sensato usar roupas leves e
                        beber bastante água hoje, e talvez evitar atividades
                        físicas ao ar livre no meio da tarde."
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              <strong>Para fixar:</strong> A jornada é: <strong>Dados</strong>{" "}
              (o que é) →<strong>Informação</strong> (o que significa) →{" "}
              <strong>Conhecimento</strong> (como usar) →
              <strong>Sabedoria</strong> (quando e por que usar).
            </p>
            <h4>Comunicação</h4>
            <p>
              A <strong>comunicação</strong> é um processo de troca de
              mensagens, que busca envolver outras pessoas. Ela pode ser vista
              como um sistema, com etapas de <strong>codificação</strong>{" "}
              (formar a mensagem) e <strong>decodificação</strong>{" "}
              (interpretá-la).
            </p>
            <h4>Tipos e Formatos</h4>
            <p>
              A comunicação pode ser classificada de diferentes maneiras,
              dependendo de como a mensagem é transmitida e processada.
            </p>
            <ul>
              <li>
                <strong>Formatos:</strong>
                <ul>
                  <li>
                    Pode ser biológica (gestos, fala), técnica (computadores,
                    telefone) ou social (jornais, livros).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Meios:</strong>
                <ul>
                  <li>Rádio, televisão, internet, conversas, entre outros.</li>
                </ul>
              </li>
            </ul>
            <h4>Comunicação Formal vs. Informal</h4>
            <ul>
              <li>
                <strong>Comunicação Formal:</strong>
                <ul>
                  <li>
                    Segue regras e fluxos preestabelecidos. É geralmente
                    documentada, como em memorandos, contratos e e-mails de
                    trabalho. Sua propagação é hierárquica e o conteúdo é
                    imutável.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Comunicação Informal:</strong>
                <ul>
                  <li>
                    É espontânea e não segue canais definidos. Ocorre em
                    conversas do dia a dia e pode sofrer alterações ao ser
                    repassada, como acontece nos "boatos".
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O Modelo de Lasswell</h4>
            <p>
              O teórico Harold Lasswell propôs cinco perguntas que ajudam a
              entender qualquer processo de comunicação. Elas definem o
              objetivo, o conteúdo e o impacto da mensagem:
            </p>
            <ul>
              <li>Quem? (O comunicador)</li>
              <li>Diz o quê? (A mensagem)</li>
              <li>Por qual canal? (O meio de transmissão)</li>
              <li>Para quem? (O público)</li>
              <li>Com que efeito? (O resultado ou a intenção da mensagem)</li>
            </ul>
            <p>
              <strong>Para fixar:</strong> A comunicação eficaz depende do
              <strong>formato</strong> e da <strong>codificação</strong>{" "}
              corretos. Erros podem acontecer se a mensagem for incompleta ou se
              o receptor não puder decodificá-la.
            </p>
            <h4>Da Coleta de Dados à Sabedoria</h4>
            <p>
              Esta seção mostra como a <strong>Pirâmide do Conhecimento</strong>{" "}
              funciona na prática, usando um exemplo de pesquisa de mercado. O
              objetivo é demonstrar a jornada de transformar{" "}
              <strong>dados brutos</strong> em{" "}
              <strong>sabedoria aplicada</strong>.
            </p>
            <h4>Exemplo Prático: Pesquisa de Consumo</h4>
            <ol>
              <li>
                <strong>Dados (Questionário individual):</strong>
                <ul>
                  <li>
                    O ponto de partida são os dados brutos, coletados
                    individualmente em um questionário. Um dado isolado (ex:
                    "João, 25 anos, prefere maçã verde") por si só não tem valor
                    para a tomada de decisão.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Informação (Análise do conjunto):</strong>
                <ul>
                  <li>
                    Ao agrupar e analisar todos os dados do questionário, eles
                    se transformam em informação relevante. Com isso, é
                    possível, por exemplo, descobrir que{" "}
                    <strong>
                      70,4% dos consumidores preferem maçã vermelha
                    </strong>
                    . Esta informação já permite uma análise mais apurada.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conhecimento (Entendendo o padrão):</strong>
                <ul>
                  <li>
                    Com base na informação, geramos conhecimento. Neste caso, o
                    conhecimento é que há uma{" "}
                    <strong>forte preferência por maçãs vermelhas</strong>. A
                    partir disso, a empresa pode concluir que é mais vantajoso
                    comprar mais maçãs vermelhas do que verdes para vender.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sabedoria (Aplicação e adaptação):</strong>
                <ul>
                  <li>
                    A sabedoria é a capacidade de usar esse conhecimento de
                    forma estratégica e adaptável. O gestor aplica o
                    conhecimento adquirido para comprar as maçãs na quantidade
                    correta. Além disso, a sabedoria permite que ele perceba
                    mudanças no padrão de consumo e mude a estratégia de compra
                    no futuro, se necessário.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              A <strong>Pirâmide do Conhecimento</strong> é uma ferramenta de
              gestão que permite estruturar o trabalho, transformando dados
              simples em resultados concretos. Mesmo que alguém precise apenas
              do resultado final, é a estrutura hierárquica da pirâmide que
              garante que esse resultado seja sólido e confiável.
            </p>
            <h4>Desvendando a Comunicação</h4>
            <p>
              A <strong>comunicação</strong> é um processo que envolve um{" "}
              <strong>emissor</strong> e um <strong>receptor</strong>. Para que
              a mensagem seja eficaz, o receptor precisa ser capaz de decifrá-la
              usando o mesmo código ou idioma do emissor.
            </p>
            <h4>Barreiras na Comunicação</h4>
            <p>
              Mesmo com um código em comum, a comunicação pode falhar. Os
              principais obstáculos são:
            </p>
            <ul>
              <li>
                <strong>Ruído:</strong>
                <ul>
                  <li>
                    São interferências que podem distorcer a mensagem e mudar
                    seu sentido original. Isso é muito comum na{" "}
                    <strong>comunicação informal</strong> (como um "telefone sem
                    fio").
                  </li>
                </ul>
              </li>
              <li>
                <strong>Interpretação:</strong>
                <ul>
                  <li>
                    Na <strong>comunicação formal</strong> (como documentos e
                    e-mails), a mensagem chega intacta, mas o receptor pode
                    interpretá-la de forma errada. Por isso, a clareza é
                    fundamental para evitar falhas de entendimento.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Comunicação e Tecnologia</h4>
            <p>
              A comunicação entre computadores é um exemplo de comunicação
              formal. Para funcionar, ela exige protocolos rigorosos que
              garantem:
            </p>
            <ul>
              <li>
                <strong>Integridade da mensagem:</strong>
                <ul>
                  <li>A mensagem deve chegar sem falhas.</li>
                </ul>
              </li>
              <li>
                <strong>Segurança:</strong>
                <ul>
                  <li>
                    É necessário criptografar os dados para que apenas o
                    destinatário correto possa lê-los.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>A Ligação entre Conhecimento e Comunicação</h4>
            <p>A comunicação e o conhecimento estão totalmente interligados:</p>
            <ul>
              <li>
                <strong>Dependência mútua:</strong>
                <ul>
                  <li>
                    Precisamos da comunicação para obter dados e iniciar a
                    jornada da Pirâmide do Conhecimento.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Melhora contínua:</strong>
                <ul>
                  <li>
                    O conhecimento nos ajuda a aprimorar a comunicação,
                    tornando-a mais clara e com menos ruídos.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Para fixar:</strong> Para chegar a um resultado de
              qualidade, é preciso garantir que a mensagem seja sempre clara e
              sem ruídos, da coleta de dados até a interpretação. Afinal, a
              sabedoria é construída sobre a base de dados confiáveis e uma
              comunicação eficaz.
            </p>
          </div>
          <div>
            <h3>Dados e sua Origem</h3>
            <div className="audios">
              <audio src={aula9} controls></audio>
              <audio src={aula10} controls></audio>
              <audio src={aula11} controls></audio>
              <audio src={aula12} controls></audio>
            </div>
            <p>
              Os <strong>dados</strong> estão em tudo que fazemos, sendo gerados
              a todo momento em uma organização, quer eles sejam coletados ou
              não. É por isso que é fundamental criar mecanismos para
              capturá-los, organizá-los e armazená-los corretamente.
            </p>
            <h4>A Importância dos Dados</h4>
            <p>
              Dados não são apenas números; eles são a base para{" "}
              <strong>tomar decisões</strong>e planejar com mais assertividade.
              Sem dados, não é possível:
            </p>
            <ul>
              <li>Entender o tempo e os recursos de um processo.</li>
              <li>Fazer estimativas, cronogramas ou orçamentos precisos.</li>
              <li>Solucionar problemas futuros de forma eficaz.</li>
            </ul>
            <p>
              Apesar de a tecnologia ter ampliado a coleta de dados, a geração
              deles é um conceito que{" "}
              <strong>existe antes da informática</strong>.
            </p>
            <h4>Exemplos da Geração de Dados</h4>
            <ul>
              <li>
                <strong>Na Indústria (Ex: Montadora de Veículos):</strong>
                <ul>
                  <li>
                    Cada peça que chega, cada etapa da produção e até mesmo o
                    tempo gasto em cada processo geram dados. A coleta desses
                    dados é essencial para a <strong>rastreabilidade</strong>,
                    ou seja, para conseguir identificar, por exemplo, quais
                    carros foram montados com um lote de peças específico para
                    um recall.
                  </li>
                </ul>
              </li>
              <li>
                <strong>No Comércio:</strong>
                <ul>
                  <li>
                    A movimentação de produtos, o tempo de atendimento ao
                    cliente, o valor das vendas e o controle de estoque geram
                    dados. Esses dados são importantes para decidir quando e
                    quanto repor, qual o valor de venda e para entender o perfil
                    do cliente.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dados Externos (Ex: Celulares e Internet):</strong>
                <ul>
                  <li>
                    A navegação na internet, a localização e os acessos que você
                    faz também geram dados. Eles podem ser usados para entender
                    padrões de comportamento, mesmo que não sejam criados
                    internamente na empresa.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Para fixar: Os dados estão em todos os lugares. A chave não é
              apenas tê-los, mas{" "}
              <strong>padronizar sua coleta e organização</strong> para que
              sejam imparciais e possam gerar resultados para a empresa.
            </p>
            <h4>Processos nas Organizações</h4>
            <p>
              Os processos são conjuntos de atividades ou "receitas" que uma
              organização usa para atingir um objetivo. Existem processos em
              todas as áreas, como produção, finanças e administração.
            </p>
            <h4>O que é um Processo?</h4>
            <p>
              Um processo é a <strong>sequência de etapas</strong> necessárias
              para realizar uma tarefa. Para entender, basta pensar na receita
              de um bolo, que tem atividades como:
            </p>
            <ol>
              <li>Separar os ingredientes.</li>
              <li>Misturar a massa.</li>
              <li>Assar no forno.</li>
            </ol>
            <p>
              Da mesma forma, as empresas usam{" "}
              <strong>manuais de procedimento</strong> para garantir que as
              atividades sejam feitas de forma padronizada. Isso é crucial para
              que o resultado final seja consistente.
            </p>
            <h4>Processos e Dados</h4>
            <p>A relação entre processos e dados é de mão dupla:</p>
            <ul>
              <li>
                Os dados que já existem na organização ajudam a modelar e
                organizar os processos.
              </li>
              <li>Os processos geram novos dados a cada execução.</li>
            </ul>
            <p>
              Ao padronizar e repetir as tarefas, a organização consegue coletar
              e organizar os dados com mais facilidade. Isso, por sua vez, gera
              informações mais ricas sobre o desempenho das atividades e sobre
              os resultados obtidos, permitindo que a empresa aprimore seus
              processos continuamente.
            </p>
            <p>
              <strong>Para fixar:</strong> Um processo é a "receita" de uma
              tarefa. A repetição controlada de processos gera dados valiosos
              que, quando bem analisados, trazem informações importantes para a
              organização.
            </p>
            <h4>Estruturação de Processos</h4>
            <p>
              A <strong>estruturação de processos</strong> é a forma de
              organizar e planejar as atividades para garantir que um resultado
              esperado seja sempre alcançado.
            </p>
            <h4>Por que Estruturar Processos?</h4>
            <p>
              Embora uma tarefa possa ser feita intuitivamente, a falta de um
              plano formal pode levar a resultados inconsistentes e
              insatisfatórios. Para uma organização, isso é um grande problema.
              O principal objetivo de estruturar processos é alcançar a
              padronização, que é essencial para:
            </p>
            <ul>
              <li>
                <strong>Previsibilidade:</strong>
                <ul>
                  <li>
                    Garante que o resultado de uma tarefa seja sempre o mesmo,
                    como o sabor de um sanduíche em uma rede de fast-food.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Controle:</strong>
                <ul>
                  <li>
                    Permite gerenciar custos, tempo e recursos de forma mais
                    eficiente.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Qualidade e Segurança: </strong>
                <ul>
                  <li>
                    Ajuda a encontrar a melhor maneira de executar uma tarefa,
                    com menos falhas e maior segurança.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Em resumo,{" "}
              <strong>
                o processo é a organização das atividades para obter algo
              </strong>
              . A estruturação transforma essa "organização" em um guia para
              quem executa a tarefa, garantindo que o resultado final atenda a
              um padrão de qualidade e seja previsível.
            </p>
            <h4>Tarefas Cíclicas e Repetitivas</h4>
            <p>
              Dentro de uma organização, as tarefas podem ser{" "}
              <strong>cíclicas</strong> (repetitivas) ou{" "}
              <strong>não repetitivas</strong>. A maioria das atividades que
              fazemos se encaixa na primeira categoria, e entender isso é
              fundamental para a gestão.
            </p>
            <h4>O que são Tarefas Cíclicas?</h4>
            <p>
              São atividades que se repetem com frequência, seguindo a mesma
              sequência lógica. O exemplo do trabalho de um caixa de
              supermercado ilustra bem isso:
            </p>
            <ul>
              <li>Começa o atendimento de um cliente.</li>
              <li>Registra os produtos.</li>
              <li>Finaliza o pagamento.</li>
              <li>Repete o processo para o próximo cliente.</li>
            </ul>
            <p>
              A repetição das tarefas permite à empresa{" "}
              <strong>mensurar a eficiência</strong>
              (ex: o tempo médio de atendimento por cliente) e{" "}
              <strong>identificar oportunidades de melhoria</strong>. Essa
              padronização é o que garante a qualidade consistente de produtos e
              serviços.
            </p>
            <h4>Tarefas Não Repetitivas</h4>
            <p>
              São atividades que não fazem parte da rotina, como a mudança de um
              escritório de lugar ou a reformulação do layout de uma loja.
              Embora não se repitam frequentemente para a empresa que as
              executa, a lógica de estruturação de processos ainda é aplicada.
            </p>
            <p>
              Por exemplo, para uma empresa de mudanças, a mudança de um
              escritório é uma tarefa cíclica. Eles têm um processo padrão para
              realizar esse serviço, o que lhes permite medir a eficiência e
              garantir a qualidade.
            </p>
            <h4>Para fixar:</h4>
            <ul>
              <li>
                <strong>Tarefas cíclicas</strong> são a rotina de uma empresa.
              </li>
              <li>
                <strong>A repetição</strong> permite a padronização, a medição
                de desempenho e a busca por melhorias contínuas.
              </li>
              <li>
                A lógica de <strong>estruturação de processos</strong> se aplica
                a todos os tipos de tarefas.
              </li>
            </ul>
            <h4>Melhores Práticas e Melhoria Contínua</h4>
            <p>
              A ideia de que "a prática leva à perfeição" é um bom começo, mas o
              mundo está em constante mudança. Por isso, as organizações devem
              buscar a <strong>melhoria contínua</strong>.
            </p>
            <h4>O que é Melhoria Contínua?</h4>
            <p>
              É a busca constante por formas de aprimorar processos, resultados
              e práticas de trabalho. Isso significa que, mesmo que um
              procedimento seja bom, é preciso estar atento a novas tecnologias
              e ajustes que possam torná-lo ainda melhor.
            </p>
            <p>
              Ao fazer isso, a empresa considera diversas opções para alcançar
              um mesmo objetivo: uma mais rápida, outra mais econômica, ou mais
              segura. A escolha depende dos objetivos da empresa.
            </p>
            <h4>A Visão Sistêmica e a Melhoria Contínua</h4>
            <p>
              A <strong>visão sistêmica</strong> é essencial nesse processo. Ao
              ajustar um processo, é fundamental analisar as conexões e as
              consequências que a mudança pode ter em outras partes da
              organização. Tudo está interligado, e uma alteração em um setor
              pode afetar outros, direta ou indiretamente.
            </p>
            <h4>Conectando os Conceitos</h4>
            <p>
              A jornada até aqui te deu todas as ferramentas para analisar e
              melhorar processos:
            </p>
            <ul>
              <li>
                <strong>Dados:</strong>
                <ul>
                  <li>Tudo o que fazemos gera dados.</li>
                </ul>
              </li>
              <li>
                <strong>Análise:</strong>
                <ul>
                  <li>
                    Ao coletar e tratar esses dados, geramos informações que
                    permitem avaliar a qualidade dos processos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Processos Cíclicos:</strong>
                <ul>
                  <li>
                    A repetição de tarefas facilita essa análise, tornando a
                    busca por melhorias mais eficiente.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Visão Sistêmica:</strong>
                <ul>
                  <li>
                    Lembre-se sempre de que os processos e a comunicação são
                    sistemas interligados. Melhorar a comunicação, por exemplo,
                    pode trazer dados mais confiáveis, o que leva a um melhor
                    conhecimento e, consequentemente, a processos mais
                    eficientes.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Aprender a ver o mundo como um conjunto de sistemas e processos
              cíclicos te dá uma base sólida para aprimorar qualquer atividade.
            </p>
          </div>
          <div>
            <h3>Cibernética e a Importância dos Dados</h3>
            <div className="audios">
              <audio src={aula13} controls></audio>
              <audio src={aula14} controls></audio>
              <audio src={aula15} controls></audio>
              <audio src={aula16} controls></audio>
            </div>
            <p>
              Esta aula aprofunda a relação entre a lógica de sistemas e a
              tecnologia, mostrando que a base de um sistema, seja manual ou
              digital, é a mesma.
            </p>
            <h4>A Lógica Antes da Tecnologia</h4>
            <p>
              A tecnologia, ou <strong>Cibernética</strong>, é um suporte
              poderoso, mas a sua eficácia depende de uma boa{" "}
              <strong>estruturação prévia</strong>. Um controle financeiro, por
              exemplo, pode ser feito em um caderno ou no Excel. A diferença é
              que a tecnologia facilita a organização e a análise dos dados,
              tornando a tomada de decisões mais ágil. A lógica é clara:
            </p>
            <ul>
              <li>
                Precisamos saber <strong>o que procurar</strong>.
              </li>
              <li>
                Os dados devem ser coletados e estruturados de forma{" "}
                <strong>imparcial e completa</strong>.
              </li>
              <li>
                A tecnologia é o meio que potencializa essa coleta e tratamento,
                nos dando informações realmente úteis.
              </li>
            </ul>
            <h4>O Que é Cibernética?</h4>
            <p>
              A <strong>Cibernética</strong> é a ciência por trás dos sistemas
              de controle automático. Ela compara o funcionamento de sistemas em
              seres humanos e em máquinas, demonstrando que há lógicas
              semelhantes em ambos.
            </p>
            <ul>
              <li>
                <strong>O corpo humano:</strong>
                <ul>
                  <li>
                    Tem sistemas interligados (digestivo, respiratório, etc.).
                    Se um falha, todos são afetados.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Uma organização:</strong>
                <ul>
                  <li>
                    Tem departamentos (financeiro, de vendas, de produção) que
                    funcionam como sistemas interligados.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Essa ciência, que a gente chama de <strong>informática</strong>,
              nos ajuda a encontrar padrões e a processar dados. A tecnologia se
              baseia em um modelo lógico e matemático, usando impulsos elétricos
              (0 e 1) para compor, armazenar e resgatar dados.
            </p>
            <h4>O Papel da Tecnologia</h4>
            <p>
              A grande vantagem da tecnologia é a possibilidade de automação.
              Ela permite:
            </p>
            <ul>
              <li>
                Coleta, tratamento e armazenamento de dados de forma automática.
              </li>
              <li>
                Geração de informações e tomada de decisões sem intervenção
                manual.
              </li>
            </ul>
            <p>
              Isso garante <strong>velocidade e confiabilidade</strong> nos
              resultados, oferecendo um potencial muito maior do que os
              processos manuais.
            </p>
            <p>
              <strong>Para fixar:</strong> A informática não é mágica; ela é um
              suporte para a lógica. A qualidade do seu resultado depende da
              qualidade da sua entrada.
            </p>
            <h4>Bancos de Dados</h4>
            <p>
              O conceito de <strong>banco de dados</strong> é muito parecido com
              o de um banco de dinheiro. Ambos servem para{" "}
              <strong>armazenar e gerenciar algo de valor</strong> — no caso do
              banco de dados, são informações e dados.
            </p>
            <h4>A Lógica do Banco de Dados</h4>
            <p>
              A principal função de um banco de dados é{" "}
              <strong>armazenar dados de forma organizada e segura</strong>.
              Muito antes da tecnologia da informação, essa lógica já era usada
              em:
            </p>
            <ul>
              <li>
                <strong>Diários:</strong>
                <ul>
                  <li>Armazenam eventos e datas.</li>
                </ul>
              </li>
              <li>
                <strong>Álbuns de fotos:</strong>
                <ul>
                  <li>Guardam imagens em ordem.</li>
                </ul>
              </li>
              <li>
                <strong>Fichas de controle:</strong>
                <ul>
                  <li>Registram dados de vendas ou finanças.</li>
                </ul>
              </li>
            </ul>
            <p>
              O papel e a caneta são tecnologias que permitem a mesma lógica de
              armazenamento e organização de dados que um sistema informatizado.
            </p>
            <h4>A Tecnologia e a Evolução dos Bancos de Dados</h4>
            <p>
              A cibernética não inventou o banco de dados, mas o transformou
              completamente. Com a tecnologia, o volume de dados que pode ser
              armazenado e a velocidade para tratá-los aumentaram
              exponencialmente.
            </p>
            <p>
              Anteriormente, anotações e registros eram apenas ferramentas de
              apoio. Com o advento da tecnologia, eles se tornaram um{" "}
              <strong>ativo estratégico fundamental</strong> para as
              organizações, permitindo análises complexas e transformando a
              forma como as empresas operam.
            </p>
            <p>
              <strong>Para fixar:</strong> O banco de dados é, em sua essência,
              um local organizado para guardar informações. A tecnologia apenas
              potencializou essa função, tornando-o uma ferramenta estratégica
              essencial.
            </p>
            <h4>Estruturação Eletrônica de Bancos de Dados</h4>
            <p>
              A <strong>estruturação eletrônica de bancos de dados</strong> não
              é um conceito novo, mas sim a aplicação da lógica que já usamos em
              processos manuais. A tecnologia apenas potencializa essa lógica,
              tornando-a mais eficiente.
            </p>
            <h4>Matemática e Lógica</h4>
            <p>
              A matemática e o raciocínio lógico são a base para entender como
              os bancos de dados eletrônicos funcionam. Eles nos ajudam a
              encontrar padrões e a criar meios para que diferentes tabelas se
              conectem.
            </p>
            <h4>A Estrutura dos Bancos de Dados Eletrônicos</h4>
            <p>
              Um banco de dados eletrônico é composto por várias{" "}
              <strong>tabelas</strong>
              interconectadas. Isso é feito para evitar repetição de dados,
              economizar tempo e reduzir a chance de erros.
            </p>
            <ul>
              <li>
                <strong>Tabela:</strong>
                <ul>
                  <li>
                    É um conjunto de <strong>linhas</strong> (registros) e{" "}
                    <strong>colunas</strong> (tipos de informação).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Registro:</strong>
                <ul>
                  <li>
                    Cada linha é um registro único (ex: um cliente, um produto).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Campos:</strong>
                <ul>
                  <li>
                    As colunas definem o tipo de dado que será inserido (ex:
                    Nome_prod, Cód_produto).
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A grande sacada é a <strong>inter-relação</strong>. Em vez de
              digitar todos os dados de um cliente a cada novo pedido, você
              apenas insere o código dele. O sistema, então, busca as
              informações completas em outra tabela, otimizando o processo.
            </p>
            <h4>Inter-relação entre Tabelas</h4>
            <p>
              As tabelas se conectam por meio de{" "}
              <strong>campos de indexação</strong>, que são geralmente códigos
              únicos, como o CPF para clientes ou um código de produto. Essa
              inter-relação é a essência do banco de dados eletrônico, pois:
            </p>
            <ul>
              <li>
                <strong>Conecta dados:</strong>
                <ul>
                  <li>
                    As informações de uma tabela (ex: clientes) são usadas em
                    outra (ex: pedidos de vendas).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Otimiza o processo:</strong>
                <ul>
                  <li>
                    Reduz a necessidade de redigitar dados e o risco de erros.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Para fixar:</strong> Um banco de dados eletrônico usa a
              lógica de inter-relacionar tabelas para simplificar o
              armazenamento e o acesso aos dados, tornando os processos mais
              eficientes e confiáveis.
            </p>
            <h4>Meios de Coleta de Dados</h4>
            <p>
              A coleta de dados evoluiu muito. Antes da tecnologia, tudo era
              feito de forma manual. Nos primórdios da informática, os dados
              eram anotados e, depois, digitados em um sistema. Esse processo
              era lento e ineficiente, pois levava tempo para que um problema
              fosse identificado e corrigido.
            </p>
            <ul>
              <li>
                <strong>Lentidão:</strong>
                <ul>
                  <li>
                    Havia um grande atraso entre o momento do evento e a análise
                    dos dados. Um problema na produção, por exemplo, só era
                    identificado e corrigido dias depois de ter ocorrido.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Limitações:</strong>
                <ul>
                  <li>
                    A quantidade de dados que podia ser coletada e anotada era
                    limitada.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Erros:</strong>
                <ul>
                  <li>
                    A intervenção humana podia distorcer os dados e comprometer
                    os resultados.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>A Evolução para a Coleta Eletrônica</h4>
            <p>
              Com o avanço da tecnologia, surgiram diversos meios eletrônicos
              para coletar dados de forma automatizada. Eles tornaram o processo
              mais rápido e preciso:
            </p>
            <ul>
              <li>
                <strong>Leitores de Código de Barras e QR Codes:</strong>
                <ul>
                  <li>
                    Usados para registrar produtos e facilitar o controle de
                    estoque e vendas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sensores:</strong>
                <ul>
                  <li>
                    Na indústria, sensores em máquinas e equipamentos coletam
                    dados sobre movimento e produção em tempo real.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dispositivos Pessoais:</strong>
                <ul>
                  <li>
                    Nossos celulares, por exemplo, são grandes coletores de
                    dados, registrando localização, pesquisas e hábitos de
                    consumo. Esses dados são usados por empresas para criar
                    ações de marketing direcionadas.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O Valor da Coleta Automatizada</h4>
            <p>
              A coleta de dados automatizada é crucial para a sobrevivência das
              empresas. Ela permite:
            </p>
            <ul>
              <li>
                <strong>Monitoramento em tempo real:</strong>
                <ul>
                  <li>A empresa tem controle total sobre seus processos.</li>
                </ul>
              </li>
              <li>
                <strong>Agilidade:</strong>
                <ul>
                  <li>
                    A tomada de decisões é muito mais rápida, pois os dados são
                    analisados no momento em que são gerados.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Relatórios e Uso da Informação</h4>
            <p>
              A <strong>tomada de decisão</strong> é a principal finalidade da
              coleta e do tratamento de dados. Para que uma decisão seja eficaz,
              ela deve ser baseada em informações claras, que por sua vez vêm de
              dados bem coletados e analisados.
            </p>
            <h4>Relatórios e Gráficos</h4>
            <p>
              As informações úteis para a tomada de decisão são geralmente
              apresentadas em <strong>relatórios</strong> e{" "}
              <strong>gráficos</strong>.
            </p>
            <ul>
              <li>
                <strong>Relatórios:</strong>
                <ul>
                  <li>Têm dados mais detalhados e específicos.</li>
                </ul>
              </li>
              <li>
                <strong>Gráficos:</strong>
                <ul>
                  <li>
                    São mais intuitivos para a análise. Eles permitem que
                    gestores compreendam rapidamente as informações e os
                    comparem visualmente para tomar decisões.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O Papel da Inteligência Artificial</h4>
            <p>
              A <strong>inteligência artificial (IA)</strong> hoje tem um papel
              crucial na análise e na tomada de decisões. Ela não apenas ajuda a
              demonstrar informações relevantes, mas também pode sugerir ações
              e, em alguns casos, executar mudanças de forma automática.
            </p>
            <ul>
              <li>
                <strong>Exemplo de IA no marketing:</strong>
                <ul>
                  <li>
                    Você conversa sobre um produto perto do seu celular e, pouco
                    tempo depois, a IA usa essa informação para direcionar
                    anúncios do produto em suas redes sociais.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Exemplo de IA na indústria:</strong>
                <ul>
                  <li>
                    A IA monitora a produção em tempo real, usa os dados de
                    desempenho para planejar a produção e até sugere ajustes,
                    como a necessidade de negociar um novo prazo com o cliente,
                    caso o cronograma não possa ser cumprido.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Conclusão: A Jornada do Dado à Decisão</h4>
            <p>
              A jornada que você percorreu nesta aula — da coleta de dados à
              tomada de decisão — é o cerne da administração e dos sistemas.
            </p>
            <ul>
              <li>
                <strong>Dados:</strong>
                <ul>
                  <li>São a base de tudo.</li>
                </ul>
              </li>
              <li>
                <strong>Tecnologia:</strong>
                <ul>
                  <li>
                    A informática e outras tecnologias são essenciais, pois
                    aceleram o processo de coleta e tratamento de dados,
                    garantindo maior volume e confiabilidade.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Habilidades:</strong>
                <ul>
                  <li>
                    Apesar do avanço tecnológico, é fundamental que você
                    desenvolva suas habilidades para saber como coletar os dados
                    certos, entender as informações geradas e aplicá-las de
                    forma estratégica.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A tecnologia transformou as profissões, tornando o mundo cada vez
              mais dependente da capacidade de analisar e usar informações de
              forma inteligente.
            </p>
          </div>
          <div>
            <h3>Estratégia e Sistemas</h3>
            <div className="audios">
              <audio src={aula17} controls></audio>
              <audio src={aula18} controls></audio>
              <audio src={aula19} controls></audio>
              <audio src={aula20} controls></audio>
            </div>
            <p>
              A <strong>estratégia</strong> é a chave para o sucesso em qualquer
              organização. Diferente de simplesmente "deixar a vida me levar", a
              estratégia exige <strong>controle</strong>,{" "}
              <strong>planejamento</strong> e um <strong>propósito</strong> bem
              definido para alcançar resultados.
            </p>
            <h4>Estratégia nas Organizações</h4>
            <p>
              O planejamento estratégico é essencial para que uma empresa possa
              se adaptar e evoluir em um ambiente de constante mudança. A
              empresa não age sozinha; ela é influenciada e influencia clientes,
              fornecedores e concorrentes. Para entender a estratégia, podemos
              pensar em um jogo de xadrez:
            </p>
            <ul>
              <li>
                Um bom jogador não faz um movimento sem prever as possíveis
                respostas do oponente.
              </li>
              <li>
                Ele tem um plano de longo prazo, mas também está pronto para
                ajustar a estratégia com base nas ações do adversário.
              </li>
            </ul>
            <p>
              Essa mesma lógica se aplica ao mundo dos negócios. A estratégia é
              a <strong>arte de prever os próximos passos</strong> de clientes e
              concorrentes para tomar as melhores decisões e alcançar os
              objetivos da empresa.
            </p>
            <h4>Conectando a Estratégia aos Sistemas</h4>
            <p>
              A principal função de um sistema, nesse contexto, é fornecer as
              informações necessárias para um bom planejamento estratégico. A
              lógica de sistemas que você aprendeu — do dado à sabedoria — é o
              que permite à organização mapear seu ambiente, entender as
              variáveis e tomar decisões informadas.
            </p>
            <p>
              <strong>Para fixar:</strong>
            </p>
            <ul>
              <li>
                A estratégia é sobre <strong>planejamento e controle</strong>,
                não sobre deixar o destino te guiar.
              </li>
              <li>
                A dinâmica de uma organização é semelhante a um jogo de xadrez:
                cada ação exige uma resposta estratégica.
              </li>
              <li>
                A chave para o sucesso é ter um{" "}
                <strong>bom mapeamento das informações</strong>
                para entender o ambiente e planejar o futuro.
              </li>
            </ul>
            <h4>Informações do Ambiente Interno</h4>
            <p>
              Em gestão, o termo <strong>"ambiente"</strong> se refere tanto ao
              local onde a empresa atua (ambiente externo) quanto à própria
              empresa (ambiente interno). As{" "}
              <strong>informações do ambiente interno</strong> são aquelas que
              dizem respeito à própria organização, como seus recursos,
              estrutura e capacidade.
            </p>
            <h4>Coleta e Tratamento de Dados Internos</h4>
            <p>
              Teoricamente, é mais fácil para uma empresa coletar dados
              internos, já que ela os gera. No entanto, para que esses dados
              sejam úteis, é essencial ter uma{" "}
              <strong>boa estruturação de sistemas e ferramentas</strong> para:
            </p>
            <ul>
              <li>
                <strong>Coleta imparcial:</strong>
                <ul>
                  <li>
                    Garantir que os dados de todos os processos sejam coletados
                    de forma completa e sem viés.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tratamento:</strong>
                <ul>
                  <li>
                    Transformar os dados brutos em informações relevantes que
                    possam ser analisadas.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A falta de uma estruturação adequada pode levar a resultados
              incompletos ou errados, comprometendo a tomada de decisão.
            </p>
            <h4>O Desafio da Variação dos Dados </h4>
            <p>
              Nem todos os dados internos são fáceis de coletar. Por exemplo, em
              uma linha de produção com atividades manuais, os tempos e
              movimentos podem variar. Nesses casos, a empresa pode usar a
              <strong>estatística</strong> para ter uma visão geral, mas isso
              pode esconder detalhes importantes que poderiam ser usados para
              melhorar os resultados. A coleta exata de dados, quando possível,
              é sempre preferível.
            </p>
            <p>
              <strong>Para fixar:</strong> As informações do ambiente interno
              são cruciais para a empresa. A chave é usar sistemas eficientes
              para coletar e tratar os dados de forma completa e precisa,
              superando os desafios das variações para ter um panorama real da
              situação.
            </p>
            <h4>Informações do Ambiente Externo</h4>
            <p>
              O ambiente externo de uma organização é dividido em dois níveis
              que influenciam a empresa.
            </p>
            <ol>
              <li>
                <strong>Ambiente de Tarefa:</strong>
                <ul>
                  <li>
                    É o ambiente mais próximo e que afeta a empresa diretamente.
                    Ele é composto por:
                    <ul>
                      <li>
                        <strong>Clientes:</strong>
                        <ul>
                          <li>
                            Suas ações (ex: mudança de hábitos de compra)
                            impactam diretamente as vendas da empresa.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Fornecedores:</strong>
                        <ul>
                          <li>
                            Mudanças de preço ou problemas de logística afetam
                            os custos e a produção.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Concorrentes:</strong>
                        <ul>
                          <li>
                            Ações da concorrência (ex: redução de preço) exigem
                            uma resposta imediata da empresa.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Agências Reguladoras e Associações:</strong>
                        <ul>
                          <li>
                            Suas regras e decisões têm impacto direto nas
                            operações do negócio.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    A coleta de informações nesse ambiente exige muito
                    relacionamento e cruzamento de dados de diversas fontes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Ambiente Geral (Macroambiente):</strong>
                <ul>
                  <li>
                    Este ambiente é mais amplo e comum a todas as organizações.
                    Ele influencia o ambiente de tarefa e, por consequência, a
                    empresa. Seus principais fatores são agrupados em uma sigla
                    comum na administração: <strong>PASTE</strong>.
                    <ul>
                      <li>
                        <strong>Políticos:</strong>
                        <ul>
                          <li>
                            Leis, regulamentações e decisões do governo (ex: uma
                            nova lei que afeta a educação). A análise é baseada
                            em fatores <strong>predeterminados</strong> e
                            hipóteses.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Ambientais:</strong>
                        <ul>
                          <li>
                            Condições ecológicas, leis e as transformações do
                            meio ambiente.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Sociais:</strong>
                        <ul>
                          <li>
                            Cultura e comportamento da sociedade (ex: novas
                            tendências de consumo).
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Tecnológicos:</strong>
                        <ul>
                          <li>
                            Inovações e o desenvolvimento de novas tecnologias.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Econômicos:</strong>
                        <ul>
                          <li>
                            Variáveis como o valor do dólar, PIB e renda. A
                            análise é baseada em fatores{" "}
                            <strong>variáveis</strong>, que usam dados
                            históricos e estatística para projeções.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    A coleta, a análise e a projeção dessas informações externas
                    são cruciais para a empresa{" "}
                    <strong>identificar cenários e planejar estratégias</strong>{" "}
                    de longo prazo.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Cenários para Estratégia</h4>
            <p>
              Para tomar decisões estratégicas, as empresas precisam de
              informações completas para analisar não apenas o presente, mas
              também o futuro. Como não é possível prever o futuro com exatidão,
              a gestão estratégica cria <strong>três cenários</strong> para se
              preparar para diferentes possibilidades.
            </p>
            <h4>Os Três Tipos de Cenários</h4>
            <ul>
              <li>
                <strong>Cenário Mediano:</strong>
                <ul>
                  <li>
                    É a projeção mais provável. Ele se baseia em tendências
                    médias, interpretando os fatores predeterminados de forma
                    regular e usando projeções estatísticas para as variáveis.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cenário Otimista:</strong>
                <ul>
                  <li>
                    Este cenário considera as condições mais favoráveis para a
                    empresa. Para os fatores predeterminados, ele assume as
                    melhores condições. Para as variáveis, ele usa projeções que
                    indicam os melhores resultados possíveis.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cenário Pessimista:</strong>
                <ul>
                  <li>
                    Este é o oposto do otimista, prevendo as piores condições
                    futuras para a empresa. Para os fatores predeterminados e as
                    variáveis, ele assume as condições mais desfavoráveis.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              É importante notar que a definição de "otimista" ou "pessimista"
              depende do tipo de negócio. Por exemplo, um aumento no valor do
              dólar é pessimista para uma empresa importadora, mas otimista para
              uma exportadora.
            </p>
            <h4>Como Usar os Cenários?</h4>
            <p>
              A função dos cenários é permitir que a empresa crie{" "}
              <strong>estratégias para cada situação</strong>. O objetivo não é
              acertar qual cenário vai acontecer, mas sim estar preparado para
              agir em qualquer um deles.
            </p>
            <p>
              A empresa deve desenvolver estratégias para{" "}
              <strong>aproveitar as oportunidades</strong> do cenário otimista
              e, ao mesmo tempo, <strong>se proteger dos riscos</strong> do
              cenário pessimista, garantindo que o resultado final se aproxime
              do que foi projetado no cenário mediano.
            </p>
            <h4>Decisões e Atualização das Informações</h4>
            <p>
              O <strong>processo decisório</strong> em uma organização deve ser
              sustentado por informações confiáveis. Ter uma boa estrutura para
              coletar e tratar dados permite criar cenários realistas e tomar
              decisões mais assertivas.
            </p>
            <h4>Etapas do Processo Decisório </h4>
            <p>
              O processo de tomada de decisão pode ser dividido em etapas
              claras:
            </p>
            <ol>
              <li>
                <strong>Identificar a Situação:</strong>
                <ul>
                  <li>
                    Analisar os acontecimentos para reconhecer se existe um
                    problema a ser resolvido ou uma oportunidade a ser
                    aproveitada.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Obter Informações:</strong>
                <ul>
                  <li>
                    Coletar dados e transformá-los em informações relevantes. A
                    qualidade dos dados é fundamental para o sucesso da decisão.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Gerar e Avaliar Soluções:</strong>
                <ul>
                  <li>
                    Criar diferentes opções para resolver o problema ou
                    aproveitar a oportunidade. Em seguida, avaliar cada
                    alternativa para escolher a que melhor se alinha com os
                    objetivos da organização.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Transformar Solução em Ação:</strong>
                <ul>
                  <li>Colocar a decisão em prática.</li>
                </ul>
              </li>
              <li>
                <strong>Avaliar Resultados e Atualizar Informações:</strong>
                <ul>
                  <li>
                    Analisar os resultados da decisão e usar essa experiência
                    para informar decisões futuras.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              A Necessidade de Atualizar as Informações O planejamento
              estratégico, que se baseia em projeções futuras, não é estático.
              Como o ambiente de negócios é dinâmico e muda constantemente, é
              essencial atualizar as informações de forma frequente.
            </p>
            <p>
              A frequência de atualização varia: alguns dados precisam ser
              atualizados diariamente, outros mensalmente, e poucos, anualmente.
              O importante é manter um processo contínuo de coleta para garantir
              que o planejamento esteja sempre alinhado com o contexto atual.
            </p>
            <p>
              <strong>Para fixar:</strong> Tomar boas decisões exige um processo
              estruturado, que vai desde a identificação do problema até a
              avaliação do resultado. A base de tudo são dados e informações de
              qualidade, que precisam ser atualizados constantemente para
              refletir a realidade de um mercado dinâmico.
            </p>
          </div>
          <div>
            <h3>Gerenciamento das Informações e Sistemas</h3>
            <div className="audios">
              <audio src={aula21} controls></audio>
              <audio src={aula22} controls></audio>
              <audio src={aula23} controls></audio>
              <audio src={aula24} controls></audio>
            </div>
            <p>
              Esta aula explora como os conceitos de sistemas e administração se
              aplicam na prática, discutindo termos e siglas comuns no mundo
              corporativo, como{" "}
              <strong>
                obsolescência programada, computação em nuvem, big data e
                business intelligence
              </strong>
              .
            </p>
            <h4>Obsolescência Programada</h4>
            <p>
              A obsolescência programada é uma estratégia de negócios onde
              produtos, especialmente os tecnológicos, são feitos para se
              tornarem obsoletos ou não funcionais após um tempo pré-definido.
              Isso impulsiona o consumidor a comprar novos modelos.
            </p>
            <p>
              Esse conceito está ligado ao ciclo de vida do produto: após a fase
              de maturidade, a empresa lança um novo modelo e descontinua o
              anterior, garantindo um ciclo contínuo de vendas. Para os
              gestores, a obsolescência programada tem dois lados:
            </p>
            <ul>
              <li>
                <strong>Estratégia de negócios:</strong>
                <ul>
                  <li>
                    Usar a descontinuação para impulsionar a venda de novos
                    produtos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Impacto interno:</strong>
                <ul>
                  <li>
                    Ter que lidar com a necessidade constante de substituir
                    equipamentos e sistemas na própria organização.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Novas Tecnologias e Conceitos</h4>
            <p>
              A evolução da tecnologia impulsionou o surgimento de novos
              conceitos e sistemas que são fundamentais para o gerenciamento de
              informações:
            </p>
            <ul>
              <li>
                <strong>Cloud Computing (Computação em Nuvem):</strong>
                <ul>
                  <li>
                    Acesso a recursos de computação, como armazenamento e
                    processamento, por meio da internet, sem a necessidade de
                    infraestrutura local.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Big Data:</strong>
                <ul>
                  <li>
                    Refere-se ao grande volume de dados gerados constantemente
                    (principalmente por dispositivos móveis). O{" "}
                    <strong>Big Data</strong> é uma forma estratégica de coletar
                    e analisar essa enorme massa de dados para encontrar padrões
                    e insights.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Business Intelligence (BI):</strong>
                <ul>
                  <li>
                    É a inteligência de negócios. É o processo de coletar,
                    organizar, analisar e monitorar informações para apoiar a
                    tomada de decisões e a estratégia da empresa.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Para fixar:</strong> O gerenciamento das informações é
              crucial para a estratégia de qualquer negócio. A{" "}
              <strong>obsolescência programada</strong> afeta tanto a produção
              quanto o consumo, enquanto conceitos como{" "}
              <strong>Cloud Computing, Big Data e Business Intelligence</strong>{" "}
              são ferramentas essenciais para lidar com a crescente quantidade
              de dados e para tomar decisões mais assertivas.
            </p>
            <h4>Tecnologia da Informação e Comunicação (TIC)</h4>
            <p>
              Um <strong>sistema de informação</strong> pode ser manual ou
              automatizado, e sua função é sempre a mesma: coletar, organizar e
              transmitir dados para ajudar na tomada de decisões. As{" "}
              <strong>Tecnologias da Informação e Comunicação (TICs)</strong>{" "}
              são as ferramentas que permitem a passagem de sistemas manuais
              para eletrônicos.
            </p>
            <h4>O que são TICs?</h4>
            <p>
              As TICs integram <strong>hardware</strong> (equipamentos),{" "}
              <strong>software</strong> (programas) e
              <strong>redes de comunicação</strong> (internet, por exemplo).
              Elas são a plataforma que dá agilidade e volume ao tratamento de
              dados. A lógica de{" "}
              <strong>entrada, processamento e saída </strong>se aplica
              perfeitamente às TICs.
            </p>
            <h4>As Três Camadas do Software</h4>
            <p>
              Para entender como um sistema automatizado funciona, é preciso
              conhecer as três camadas do software:
            </p>
            <ul>
              <li>
                <strong>Interface do Usuário:</strong>
                <ul>
                  <li>
                    É o que conecta a pessoa à máquina. São as telas, botões,
                    teclado ou qualquer outro elemento que permite a interação.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Código:</strong>
                <ul>
                  <li>
                    São as linhas de programação que traduzem as ações do
                    usuário para a linguagem da máquina, fazendo o software
                    executar suas funções.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Banco de Dados:</strong>
                <ul>
                  <li>
                    É a estrutura lógica para armazenar os dados. Ele permite
                    que as informações sejam guardadas de forma organizada e
                    acessadas facilmente.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Com a integração desses elementos, os sistemas de informação
              automatizados se tornam muito mais eficientes do que os manuais.
            </p>
            <h4>Objetivos dos Sistemas de Informação</h4>
            <p>
              Os <strong>sistemas de informação</strong> existem para ajudar as
              organizações a atingir resultados. De acordo com os autores Laudon
              e Laudon (2010), eles atendem a cinco objetivos principais:
            </p>
            <ol>
              <li>
                <strong>Atingir Excelência Operacional:</strong>
                <ul>
                  <li>
                    Ajudam a otimizar as operações do dia a dia, tornando os
                    processos mais eficientes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Desenvolver Novos Produtos e Serviços:</strong>
                <ul>
                  <li>
                    Fornecem informações valiosas para criar e aprimorar o que a
                    empresa oferece ao mercado.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Melhorar a Qualidade das Decisões Gerenciais:</strong>
                <ul>
                  <li>
                    Fornecem dados e relatórios que permitem aos gestores tomar
                    decisões mais assertivas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Aprimorar o Relacionamento com os Clientes:</strong>
                <ul>
                  <li>
                    Agilizam o atendimento e fornecem informações que permitem
                    um serviço mais personalizado.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Assegurar a Sustentabilidade do Negócio:</strong>
                <ul>
                  <li>
                    Ao otimizar processos, reduzir custos e melhorar o
                    relacionamento com clientes, os sistemas garantem que a
                    empresa se mantenha economicamente viável a longo prazo.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Sistemas Departamentais vs. Sistemas Integrados</h4>
            <p>
              Os sistemas de informação também podem ser classificados por seu
              nível de abrangência dentro da empresa:
            </p>
            <ul>
              <li>
                <strong>Sistemas Departamentais:</strong>
                <ul>
                  <li>
                    São usados por um único setor para uma função específica. Um
                    exemplo é um sistema que apenas cadastra clientes potenciais
                    para o setor comercial. As informações são usadas apenas
                    para as necessidades daquele departamento.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sistemas Integrados:</strong>
                <ul>
                  <li>
                    Conectam vários departamentos e compartilham informações
                    entre eles. Por exemplo, um sistema de controle de estoque
                    que se liga aos setores financeiro, comercial e de produção.
                    Quando um cliente faz um pedido, o sistema verifica o
                    estoque e avisa a produção, criando uma cadeia de informação
                    que todos podem acessar.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Compreender essas funcionalidades e diferenças é fundamental para
              entender como a informação flui e é usada para apoiar os objetivos
              de uma organização.
            </p>
            <h4>Sistemas de Informação Gerencial</h4>
            <p>
              Existem diferentes tipos de sistemas de informação porque eles são
              projetados para atender a diferentes funções dentro de uma
              organização.
            </p>
            <h4>Sistemas de Processamento de Transações (SPT)</h4>
            <p>
              Os <strong>SPTs</strong> são sistemas operacionais que processam
              transações rotineiras e específicas. Eles registram dados do dia a
              dia da empresa, como a folha de pagamento, vendas e emissão de
              notas fiscais. Sua função é operacional.
            </p>
            <h4>Sistemas de Informação Gerencial (SIG)</h4>
            <p>
              Os <strong>SIGs</strong> têm uma função gerencial. Eles não apenas
              processam dados, mas os organizam e interpretam para fornecer
              informações que ajudam no gerenciamento da empresa. Embora sejam
              distintos dos SPTs, o ideal é que os SIGs usem os dados coletados
              pelos SPTs para fornecer um panorama mais completo.
            </p>
            <h4>ERP: A Integração dos Sistemas</h4>
            <p>
              O <strong>ERP</strong> (Enterprise Resource Planning) é a evolução
              natural da integração de sistemas. Ele conecta os dados e
              processos de toda a organização em uma{" "}
              <strong>única plataforma</strong>. Essa integração permite que os
              gestores tenham uma visão geral dos recursos da empresa,
              facilitando a coordenação entre os diferentes departamentos. O ERP
              funciona com base em módulos, que atuam em cada setor da empresa
              para garantir a efetividade e o gerenciamento dos recursos.
            </p>
            <p>
              <strong>Para fixar:</strong>
            </p>
            <ul>
              <li>
                <strong>SPTs:</strong>
                <ul>
                  <li>Processam dados de transações operacionais.</li>
                </ul>
              </li>
              <li>
                <strong>SIGs:</strong>
                <ul>
                  <li>
                    Usam os dados dos SPTs para fornecer informações gerenciais.
                  </li>
                </ul>
              </li>
              <li>
                <strong>ERP:</strong>
                <ul>
                  <li>
                    Integra todos os dados e processos da empresa em um único
                    sistema para um gerenciamento mais eficiente.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Sistemas para Estratégia e Decisão</h4>
            <p>
              Os <strong>Sistemas de Informação Gerencial (SIGs)</strong> são
              essenciais para uma boa gestão. Eles coletam dados de vários
              setores e os transformam em relatórios gerenciais que ajudam os
              gestores a analisar a situação e planejar ações futuras.
            </p>
            <h4>Relatórios Gerenciais</h4>
            <p>
              Os relatórios gerenciais condensam informações de forma clara e
              objetiva. Eles podem ser de três tipos:
            </p>
            <ul>
              <li>
                <strong>Programados:</strong>
                <ul>
                  <li>
                    Gerados em intervalos regulares, como relatórios de vendas
                    diários ou financeiros mensais.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sob Demanda:</strong>
                <ul>
                  <li>
                    Criados para atender a uma necessidade específica, como um
                    relatório sobre o histórico de pagamentos de um fornecedor.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Exceção:</strong>
                <ul>
                  <li>
                    Acionados automaticamente quando algo fora do padrão
                    acontece, como a queda de um indicador de produção.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Sistemas de Apoio à Decisão</h4>
            <p>
              Além dos SIGs, existem sistemas mais avançados que auxiliam
              diretamente a estratégia e a tomada de decisão:
            </p>
            <ul>
              <li>
                <strong>SAD (Sistemas de Apoio à Decisão): </strong>
                <ul>
                  <li>
                    Usam dados históricos e novas informações para simular
                    cenários futuros, ajudando a entender as possíveis
                    consequências de uma decisão.
                  </li>
                </ul>
              </li>
              <li>
                <strong>SAE (Sistemas de Apoio Executivo):</strong>
                <ul>
                  <li>
                    Versões mais sofisticadas do SAD, que ajudam a diretoria e
                    os executivos a tomar decisões estratégicas.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Aplicações na Prática</h4>
            <p>
              Os sistemas de informação gerencial são usados em todos os setores
              de uma empresa:
            </p>
            <ul>
              <li>
                <strong>Finanças:</strong>
                <ul>
                  <li>
                    Para gerenciar o fluxo de dinheiro e gerar relatórios de
                    resultados.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Vendas (CRM):</strong>
                <ul>
                  <li>
                    Para gerenciar o relacionamento com o cliente, entendendo
                    suas necessidades e preferências.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Manufatura:</strong>
                <ul>
                  <li>
                    Para controlar a produção, o estoque de matéria-prima e o
                    uso de equipamentos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Gestão de Pessoas:</strong>
                <ul>
                  <li>
                    Para ir além da folha de pagamento e analisar o desempenho
                    dos funcionários.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Gestão de Projetos:</strong>
                <ul>
                  <li>
                    Para monitorar o andamento de um projeto, comparando o
                    planejamento com a execução.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A principal função de todos esses sistemas é a mesma:{" "}
              <strong>
                melhorar a coleta de dados, ampliar a geração de informações e
                garantir que elas sejam bem aplicadas para alcançar os melhores
                resultados
              </strong>
              .
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default AdministracaoSistemas;
