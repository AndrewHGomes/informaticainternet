import { useState } from "react";
import aula1 from "../assets/audiosM8/aula01.mp3";
import aula2 from "../assets/audiosM8/aula02.mp3";
import aula3 from "../assets/audiosM8/aula03.mp3";
import aula4 from "../assets/audiosM8/aula04.mp3";

import aula5 from "../assets/audiosM8/aula05.mp3";
import aula6 from "../assets/audiosM8/aula06.mp3";
import aula7 from "../assets/audiosM8/aula07.mp3";
import aula8 from "../assets/audiosM8/aula08.mp3";

import aula9 from "../assets/audiosM8/aula09.mp3";
import aula10 from "../assets/audiosM8/aula10.mp3";
import aula11 from "../assets/audiosM8/aula11.mp3";
import aula12 from "../assets/audiosM8/aula12.mp3";

import aula13 from "../assets/audiosM8/aula13.mp3";
import aula14 from "../assets/audiosM8/aula14.mp3";
import aula15 from "../assets/audiosM8/aula15.mp3";
import aula16 from "../assets/audiosM8/aula16.mp3";

const ModelagemSistemasWeb = () => {
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
        <h2>MODELAGEM DE SISTEMAS WEB</h2>
        <img src="/seta.png" onClick={visualizar} className={classeGirarImg} />
      </div>
      {abrir && (
        <>
          <div>
            <h3>Modelagem e Processos de Negócio</h3>
            <div className="audios">
              <audio src={aula1} controls></audio>
              <audio src={aula2} controls></audio>
              <audio src={aula3} controls></audio>
              <audio src={aula4} controls></audio>
            </div>
            <p>
              A Modelagem de Sistemas é um estudo fundamental que funciona como
              a ponte entre as necessidades do cliente e o desenvolvimento de
              software. Seu principal objetivo é{" "}
              <strong>traduzir as necessidades de negócio</strong> em um{" "}
              <strong>projeto técnico de software</strong>, garantindo que os
              objetivos empresariais sejam atendidos de forma organizada antes
              mesmo de iniciar a codificação.
            </p>
            <h4>O Conceito de Processo de Negócio</h4>
            <p>
              Um Processo de Negócio é definido como um{" "}
              <strong>conjunto de tarefas estruturadas e relacionadas</strong>{" "}
              que tem o propósito de gerar um{" "}
              <strong>produto ou serviço</strong> específico. Toda atividade
              dentro de uma empresa, desde a compra de matéria-prima até a
              entrega final ao cliente, pode ser agrupada em processos.
            </p>
            <p>O modelo teórico de um processo envolve:</p>{" "}
            <ul>
              <li>
                Recebimento de <strong>Insumos de Entrada</strong>;
              </li>
              <li>
                <strong>Processamento</strong> desses insumos;
              </li>
              <li>
                Geração de um <strong>Resultado (Saída)</strong>.
              </li>
            </ul>
            <h4>A Importância da Documentação e Mapeamento</h4>
            <p>
              A documentação dos processos de negócio é crucial para a saúde e
              competitividade da empresa. Ela formaliza o funcionamento da
              organização, implementa a estratégia do negócio e se torna um{" "}
              <strong>diferencial competitivo</strong>, pois a maneira como os
              processos são executados reflete diretamente na qualidade e na
              criação de valor para o cliente.
            </p>
            <p>
              Processos bem definidos e conhecidos por todos garantem a{" "}
              <strong>padronização de resultados</strong>, aumentam a{" "}
              <strong>eficiência</strong> e evitam que o conhecimento vital do
              negócio fique restrito à "cabeça" dos colaboradores. Isso minimiza
              prejuízos graves (como um recall) e reduz o custo da perda de
              profissionais, pois o fluxo de trabalho está formalizado.
            </p>
            <h4>Mapeamento e Melhoria de Processos (AS IS e TO BE)</h4>
            <p>
              A gestão de processos envolve duas etapas principais de modelagem:
            </p>
            <ul>
              <li>
                <strong>AS IS ("Como É"):</strong> É a "fotografia" do processo
                atual. Consiste em <strong>identificar e mapear</strong> o passo
                a passo de como o processo é realmente executado no dia a dia,
                entrevistando e observando os profissionais envolvidos.
              </li>
              <li>
                <strong>TO BE ("Como Será"):</strong> É a proposta de um{" "}
                <strong>novo processo ou a melhoria</strong> do processo AS IS,
                visando torná-lo mais <strong>eficiente e ágil</strong>. O novo
                fluxo deve ter um <strong>propósito claro</strong> e trazer
                ganhos de produtividade e qualidade.
              </li>
            </ul>
            <p>
              Para construir o TO BE, é necessário um pensamento inovador,
              questionando o processo atual e buscando o que pode ser{" "}
              <strong>
                eliminado, substituído, adicionado, unificado ou paralelizado
              </strong>
              . Após a modelagem e documentação do TO BE, é essencial medir os
              ganhos esperados para validar a eficácia da melhoria.
            </p>
            <h4>Utilizando o BPMN para Modelar Processos</h4>
            <p>
              Para garantir que o fluxo seja de fácil leitura e compreensão por
              todos os envolvidos, utiliza-se uma linguagem única baseada na
              disciplina BPM (Business Process Modeling). Essa linguagem é a
              BPMN (Business Process Model and Notation), a notação padrão mais
              utilizada para modelar processos de negócio.
            </p>
            <p>
              A BPMN utiliza elementos gráficos simples e padronizados para
              representar o encadeamento das atividades, desde o seu início até
              a finalização:
            </p>
            <ul>
              <li>
                <strong>Eventos (Círculos):</strong> Indicam o início (verde) ou
                o fim (vermelho) do processo.
              </li>
              <li>
                <strong>Atividades/Tarefas (Retângulos):</strong> Representam o{" "}
                <strong>trabalho realizado</strong> em uma etapa do processo.
              </li>
              <li>
                <strong>Fluxo de Sequência (Seta):</strong> Conector que mostra
                a ordem de execução das atividades.
              </li>
              <li>
                <strong>Gateway (Losango):</strong> Elemento de{" "}
                <strong>decisão</strong> que separa ou junta os diferentes
                caminhos lógicos do processo.
              </li>
            </ul>
            <p>
              A modelagem do processo de negócio é, portanto, o primeiro passo
              da modelagem de sistemas e da construção de um software, pois ela
              identifica as partes do fluxo que podem e devem ser{" "}
              <strong>automatizadas</strong>.
            </p>
          </div>
          <div>
            <h3>Análise Estruturada e Modelagem de Processos de Negócio</h3>
            <div className="audios">
              <audio src={aula5} controls></audio>
              <audio src={aula6} controls></audio>
              <audio src={aula7} controls></audio>
              <audio src={aula8} controls></audio>
            </div>
            <p>
              O conhecimento em análise de sistemas é{" "}
              <strong>fundamental</strong> para o desenvolvimento de software.
              Ele permite traduzir as necessidades de negócio do cliente em um{" "}
              <strong>projeto técnico planejado e documentado</strong>,
              garantindo que os objetivos de negócio sejam atendidos com um
              processamento <strong>rápido e eficiente</strong>. Construir
              software é uma atividade complexa que exige planejamento
              estratégico antes da codificação.
            </p>
            <p>
              Devido à crescente necessidade por programas e à evolução
              tecnológica, foi preciso estruturar a construção de software. A
              análise de sistemas surgiu, definindo formas mais efetivas de
              desenvolver sistemas <strong>confiáveis</strong> e com{" "}
              <strong>custo adequado</strong>.{" "}
            </p>
            <p>
              Análise de sistemas é uma técnica que visa encontrar o{" "}
              <strong>melhor caminho lógico</strong> para o processamento de
              informações. A modelagem de sistemas, por sua vez, é uma prática
              baseada em modelos, buscando um melhor entendimento da entidade
              real a ser construída. O modelo deve representar:
            </p>
            <ul>
              <li>
                <strong>Entidades físicas</strong> (ex: aluno, cliente) e suas
                informações.
              </li>
              <li>
                As <strong>funcionalidades</strong> (solução técnica) que o
                software precisa entregar, tanto do ponto de vista do cliente
                quanto do técnico.
              </li>
            </ul>
            <p>
              Ao longo do tempo, a evolução da análise de sistemas propôs três
              grandes métodos de modelagem:
            </p>
            <ul>
              <li>Modelagem Estruturada</li> <li>Modelagem Essencial</li>{" "}
              <li>Modelagem Orientada a Objetos</li>{" "}
            </ul>
            <h4>Modelagem Estruturada</h4>
            <p>
              A análise estruturada é um método de modelagem que se fundamenta
              em <strong>quebrar um problema em partes menores</strong> para
              facilitar a busca pela melhor solução. Seu foco principal é nas
              <strong>funcionalidades</strong> que o software deve entregar.
              Utiliza um conjunto de ferramentas para organizar a análise, sendo
              o <strong>Diagrama de Fluxo de Dados (DFD)</strong> e o{" "}
              <strong>Dicionário de Dados (DD)</strong> as principais.
            </p>
            <p>
              O objetivo principal é a construção de um{" "}
              <strong>modelo lógico</strong>, buscando compreender a lógica por
              trás de cada funcionalidade. Os modelos visuais produzidos devem
              fornecer um quadro claro e geral do sistema. A especificação do
              sistema, baseada na análise estruturada, é o elo entre a análise e
              o projeto e é composta por DFD, DD e especificações de processos.
            </p>
            <h4>Diagrama de Fluxo de Dados (DFD)</h4>
            <p>
              O DFD é uma ferramenta essencial para compreender e analisar o
              <strong>fluxo de dados</strong> (entrada, processamento e saída)
              no sistema e entre ele e o ambiente externo. Ele mostra, por meio
              de uma representação em rede, as funcionalidades que o sistema
              deve entregar e os dados que as interligam. O DFD foca no{" "}
              <strong>O QUE</strong> o sistema faz (análise), e não no COMO
              (projeto).
            </p>
            <p>
              A criação do DFD deve seguir boas práticas, como escolher{" "}
              <strong>nomes significativos, numerar os processos</strong> e
              utilizar o <strong>particionamento em níveis</strong> (quebrar o
              detalhamento) para facilitar a compreensão de um problema
              complexo.
            </p>
            <p>O diagrama é composto pelos seguintes elementos:</p>
            <ul>
              {" "}
              <li>
                <strong>Processo (ou Bolha):</strong> É o coração do DFD. Mostra
                as funcionalidades que transformam dados de entrada em dados de
                saída. Devem ter nomes claros e diretos, utilizando{" "}
                <strong>verbos</strong> (ex: Armazenar dados do cliente ). Podem
                representar ações manuais ou automatizadas.
              </li>{" "}
              <li>
                <strong>Fluxo de Dados:</strong> Interligam os processos.
                Representam os caminhos por onde os dados circulam, indicados
                por <strong>setas</strong> (origem para destino). Cada fluxo
                deve ter um único nome, que identifica os dados transportados
                (ex: Pedido).
              </li>
              <li>
                <strong>Depósito de Dados:</strong> Representa o{" "}
                <strong>armazenamento</strong>
                de dados para uso futuro. O nome deve estar sempre no{" "}
                <strong>plural</strong>
                (ex: Clientes).
              </li>
              <li>
                <strong>Entidade (ou Terminador):</strong> Fontes ou
                destinatários das informações que entram ou saem do sistema
                (pessoas, coisas ou outro sistema externo). O nome deve estar no
                <strong>plural</strong> e em <strong>maiúsculo</strong> (ex:
                CLIENTES, SISTEMA DE CONTABILIDADE).
              </li>
            </ul>
            <h4>Organização e Níveis do DFD</h4>
            <p>
              Para facilitar a visualização e manutenção, o DFD é organizado em
              uma série de níveis, que oferecem sucessivamente mais detalhes
              sobre o sistema. O objetivo é ir do nível mais macro ao mais
              detalhado. O limite de criação de níveis é o{" "}
              <strong>completo entendimento do problema</strong>.
            </p>
            <ul>
              <li>
                <strong>DFD de Contexto (Nível Mais Alto):</strong> Oferece a
                visão macro. Contém apenas <strong>um processo</strong> que
                representa o sistema todo, os principais fluxos de dados e os
                <strong>agentes externos</strong> (entidades).
              </li>
              <li>
                <strong>DFD de Nível Zero:</strong> Analisa os{" "}
                <strong>principais processos</strong> do software, detalhando os
                fluxos e entidades envolvidas nessas funções.
              </li>
              <li>
                <strong>DFDs de Níveis Intermediários:</strong> Mostram a
                <strong>decomposição</strong> e o detalhamento de cada processo
                modelado nos níveis superiores, até que todos os relacionamentos
                de dados estejam claros.
              </li>
            </ul>
            <p>
              O principal benefício de usar o DFD na modelagem é a sua
              <strong>simplicidade</strong>, que permite a avaliação do modelo
              junto aos usuários e a{" "}
              <strong>identificação precoce de falhas</strong> nos requisitos.
            </p>
          </div>
          <div>
            <h3>Engenharia de Requisitos</h3>
            <div className="audios">
              <audio src={aula9} controls></audio>
              <audio src={aula10} controls></audio>
              <audio src={aula11} controls></audio>
              <audio src={aula12} controls></audio>
            </div>
            <h4>O Planejamento do Software</h4>
            <ul>
              <li>
                <strong>Processo inicial:</strong>
                <ul>
                  <li>
                    Modelar os <strong>processos de negócio</strong> para propor{" "}
                    <strong>melhorias</strong> que serão automatizadas por um
                    software. Este é o primeiro passo para construir o{" "}
                    <strong>software correto</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>A Importância dos Dados:</strong>
                <ul>
                  <li>
                    O software <strong>processa dados</strong> para gerar
                    resultados. É crucial entender e modelar bem a entrada, o
                    armazenamento e o relacionamento dos dados (com entidades e
                    depósitos).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Meta da Etapa:</strong>
                <ul>
                  <li>
                    Meta da Etapa: Entender, classificar e descrever os
                    <strong>Requisitos de Software</strong> para traduzir as
                    necessidades do cliente em linguagem que possa ser
                    codificada (linhas de código).
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Engenharia de Requisitos</h4>
            <ul>
              <li>
                <strong>Definição de Requisitos:</strong>
                <ul>
                  <li>
                    O objetivo do software é automatizar processos de negócio.
                  </li>
                  <li>
                    Processos são compostos por funcionalidades com
                    características e regras.
                  </li>
                  <li>
                    Requisitos são a base para o projeto de software, definindo{" "}
                    <strong>
                      o que o usuário precisa e o que o sistema deve fazer
                    </strong>{" "}
                    para satisfazê-lo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Características dos Requisitos:</strong>
                <ul>
                  <li>
                    Geralmente expressos em{" "}
                    <strong>linguagem natural e escrita</strong>.
                  </li>
                  <li>
                    Devem ser obtidos com os <strong>usuários</strong> que
                    conhecem o negócio.
                  </li>
                  <li>
                    Devem ser entendidos pela <strong>equipe técnica</strong>.
                  </li>
                  <li>
                    Sua descrição parte do{" "}
                    <strong>fluxo do processo de negócio</strong>.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O Processo de Levantamento de Requisitos</h4>
            <p>
              A <strong>coleta de requisitos</strong> é fundamental. Se
              mal-entendida, resulta em um software errado. O processo se
              organiza em quatro passos principais:
            </p>
            <ol>
              <li>
                <strong>Estudo de Viabilidade</strong>
                <ul>
                  <li>
                    <strong>Objetivo</strong>
                    <ul>
                      <li>
                        Entender a necessidade e verificar a{" "}
                        <strong>praticidade</strong>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial</strong>
                    <ul>
                      <li>
                        Analisar se o software é <strong>viável</strong> em
                        termos técnicos, financeiros e de prazo (pode ser
                        materializado na prática).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Coleta de Requisitos</strong>
                <ul>
                  <li>
                    <strong>Objetivo</strong>
                    <ul>
                      <li>Obter as ideias e necessidades com os usuários.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial</strong>
                    <ul>
                      <li>
                        Analistas entrevistam{" "}
                        <strong>clientes e usuários finais</strong> (todos que
                        interagem com o processo) para o entendimento completo.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Especificação de Requisitos</strong>
                <ul>
                  <li>
                    <strong>Objetivo</strong>
                    <ul>
                      <li>
                        <strong>Documentar e detalhar</strong> os requisitos.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial</strong>
                    <ul>
                      <li>
                        Traduzir os requisitos em uma{" "}
                        <strong>linguagem clara, direta e natural</strong>.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Validação dos Requisitos</strong>
                <ul>
                  <li>
                    <strong>Objetivo</strong>
                    <ul>
                      <li>
                        Garantir o <strong>entendimento correto</strong>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial</strong>
                    <ul>
                      <li>
                        <strong>Revisar e validar</strong> o que foi documentado
                        com os usuários, garantindo que as regras de negócio
                        estejam perfeitas.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Ciclo de Vida da Engenharia de Requisitos</h4>
            <ul>
              <li>
                <strong>Ciclo de Vida:</strong>
                <ul>
                  <li>
                    Todo processo é iniciado, tem passos e é concluído. A
                    Engenharia de Requisitos (ER) segue um ciclo evolutivo e
                    complementar.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Objetivo:</strong>
                <ul>
                  <li>
                    Detalhar os 4 passos anteriores em uma sequência mais
                    aprofundada, garantindo clareza e controle.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Os 7 Passos do Ciclo de Vida da ER</h4>
            <ol>
              <li>
                <strong>Concepção</strong>
                <ul>
                  <li>
                    <strong>Meta Principal</strong>
                    <ul>
                      <li>Compreender o Problema (Macro)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial para Estudo</strong>
                    <ul>
                      <li>
                        Entender o <strong>cenário do cliente</strong> e a{" "}
                        <strong>necessidade de negócio</strong>. Define a
                        comunicação e o comprometimento inicial. O fluxo do
                        processo de negócio serve como base.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Levantamento</strong>
                <ul>
                  <li>
                    <strong>Meta Principal</strong>
                    <ul>
                      <li>Coletar Detalhes (Micro)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial para Estudo</strong>
                    <ul>
                      <li>
                        Analistas entrevistam usuários para entender{" "}
                        <strong>em detalhes</strong> como os requisitos devem
                        funcionar. Evolui o entendimento da Concepção.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Elaboração</strong>
                <ul>
                  <li>
                    <strong>Meta Principal</strong>
                    <ul>
                      <li>Refinar o Modelo Técnico</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial para Estudo</strong>
                    <ul>
                      <li>
                        <strong>Expandir e refinar</strong> as informações
                        coletadas. Definir um modelo técnico e{" "}
                        <strong>cenários de uso</strong> (como o usuário
                        interage), avaliando restrições.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Negociação</strong>
                <ul>
                  <li>
                    <strong>Meta Principal</strong>
                    <ul>
                      <li>Validar e Priorizar</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial para Estudo</strong>
                    <ul>
                      <li>
                        Usuários <strong>validam</strong> os requisitos e podem
                        pedir alterações. É crucial conciliar{" "}
                        <strong>custo, prazo e escopo</strong>. Priorizar os
                        requisitos que geram <strong>mais valor</strong> ao
                        negócio.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Especificação</strong>
                <ul>
                  <li>
                    <strong>Meta Principal</strong>
                    <ul>
                      <li>Projetar a Implementação</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial para Estudo</strong>
                    <ul>
                      <li>
                        Definidos os requisitos (pós-negociação), inicia-se o
                        projeto de construção. Define-se as{" "}
                        <strong>tecnologias, linguagem e banco de dados</strong>{" "}
                        a serem utilizados.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Validação</strong>
                <ul>
                  <li>
                    <strong>Meta Principal</strong>
                    <ul>
                      <li>Garantir a Correção e Viabilidade</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial para Estudo</strong>
                    <ul>
                      <li>
                        Exame final da especificação. Garante que todos os
                        requisitos estejam{" "}
                        <strong>identificados, claros e coerentes</strong>.
                        Aplica-se revisões técnicas, gerenciais e de negócio.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Gestão de Requisitos</strong>
                <ul>
                  <li>
                    <strong>Meta Principal</strong>
                    <ul>
                      <li>Controlar Mudanças Contínuas</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Descrição Essencial para Estudo</strong>
                    <ul>
                      <li>
                        Necessária porque requisitos mudam (negócio, mercado,
                        etc.). Conjunto de atividades para{" "}
                        <strong>
                          identificação, controle, rastreamento e modificação
                        </strong>{" "}
                        dos requisitos ao longo do tempo.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Documentação e Tipos de Requisitos</h4>
            <p>
              O sucesso de um software começa no entendimento e no detalhamento
              dos requisitos.{" "}
              <strong>A Especificação de Requisitos de Software (DER)</strong> é
              uma descrição macro das funcionalidades que o sistema deve ter. O
              objetivo do DER é listar os requisitos que são suficientes e
              necessários para o desenvolvimento do projeto, garantindo que
              todos os elementos que farão parte do escopo sejam mapeados. O
              documento é considerado macro porque ele apenas lista as
              funcionalidades (como "Cadastro de Produtos" ou "Carrinho de
              Compra"), mas não detalha como essas funções irão operar.
            </p>
            <p>
              Um <strong>Requisito</strong> é a automação de um processo
              executado pelo usuário. É uma necessidade do negócio, uma condição
              necessária que satisfaz um objetivo. Requisitos de software vão
              além de apenas funções; eles incluem objetivos, propriedades e as
              restrições que o sistema deve apresentar. Os requisitos de
              software são classificados em duas categorias principais:
              Funcionais e Não Funcionais.
            </p>
            <p>
              <strong>Requisitos Funcionais (RF)</strong> definem{" "}
              <strong>O QUE o software faz</strong>. Eles descrevem as funções e
              os serviços que o sistema deve fornecer ao cliente. Exemplos de
              Requisitos Funcionais são: O sistema deve cadastrar médicos. O
              sistema deve emitir um relatório de clientes. O sistema deve mudar
              o estado de um cliente de "em consulta" para "consultado".
            </p>
            <p>
              <strong>Requisitos Não Funcionais (RNF)</strong> referem-se a{" "}
              <strong>COMO o software deve ser</strong>. Eles impõem restrições
              de qualidade, performance ou implementação aos requisitos
              funcionais. Os RNFs buscam atender às necessidades dos usuários em
              termos de características de qualidade ou tempo de resposta.
              Exemplos de Requisitos Não Funcionais são: O sistema deve imprimir
              o relatório em até 5 segundos. O sistema deve ser implementado na
              linguagem Java.
            </p>
            <h4>Trabalhando com Casos de Uso</h4>
            <strong>Casos de Uso e Documentação</strong>
            <p>
              Os requisitos precisam ser entendidos e bem documentados para que
              todos os envolvidos no software opinem sobre a melhor forma de
              implementar as funcionalidades. Em metodologias tradicionais, os
              requisitos funcionais do sistema são modelados e detalhados em
              documentos chamados <strong>Casos de Uso</strong>.
            </p>
            <p>
              Um Caso de Uso documenta as ações necessárias, os comportamentos e
              a sequência de passos para alcançar um resultado satisfatório.
              Documentar um Caso de Uso significa descrever como o software vai
              se comportar, listando os <strong>fluxos de eventos</strong> que
              levam a um resultado. Um único Caso de Uso pode descrever um ou
              mais requisitos, como, por exemplo, o Caso de Uso "Cadastrar
              Cliente", que pode incluir inserir, alterar, consultar e excluir
              dados. É essencial criar um padrão claro para a documentação de
              Casos de Uso, pois seu objetivo é detalhar os requisitos de forma
              que o software seja construído corretamente.
            </p>
            <h4>Os Três Tipos de Fluxos de Eventos</h4>
            <p>
              Os fluxos de eventos em um Caso de Uso evidenciam o que deve ser
              executado, baseando-se em três tipos:
            </p>
            <ol>
              <li>
                <strong>Fluxo Principal (FP) – Caminho Feliz:</strong>
                <ul>
                  <li>
                    É o caminho normal e esperado. Nele, todas as informações
                    estão corretas e o caso de uso executa seu objetivo
                    principal passo a passo. Exemplo no caso de "Cadastrar
                    Cliente": Cliente informa dados $\rightarrow$ Sistema grava
                    dados $\rightarrow$ Sistema retorna "Cadastro Efetuado com
                    Sucesso".
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fluxo Alternativo (FA):</strong>
                <ul>
                  <li>
                    É o tratamento de situações que não são o caminho normal.
                    Descreve o passo a passo para lidar com informações erradas
                    ou ações não previstas. Exemplo: O sistema verifica se o CPF
                    é válido; se for inválido, envia a mensagem "CPF Inválido" e
                    retorna para a tela.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fluxo de Exceção (FE):</strong>
                <ul>
                  <li>
                    Considera funções que não fazem parte do objetivo principal
                    do caso de uso, mas estão disponíveis para o usuário e fazem
                    parte do processo. Não são obrigatórias. Exemplos comuns:
                    Alterar senha (enquanto está logando), Help on-line sobre um
                    produto, ou Histórico de Compras (enquanto está fazendo uma
                    nova compra).
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Esta etapa reforçou a importância de requisitos bem entendidos e
              documentados para o sucesso do software. Construir software não é
              trivial, sendo necessário um processo gradual: entender as etapas
              e depois definir a construção. Foi discutido o ciclo de vida da{" "}
              <strong>
                Engenharia de Requisitos e a necessidade da Gestão de Requisitos
              </strong>{" "}
              para lidar com a evolução das necessidades do usuário e as
              mudanças no mercado. Por fim, foram compreendidos o Documento de
              Especificação de Requisitos e a diferença entre Requisitos
              Funcionais e Não Funcionais.
            </p>
          </div>
          <div>
            <h3>Introdução à UML</h3>
            <div className="audios">
              <audio src={aula13} controls></audio>
              <audio src={aula14} controls></audio>
              <audio src={aula15} controls></audio>
              <audio src={aula16} controls></audio>
            </div>
            <p>
              A jornada de construção de software começou com a compreensão dos
              <strong>processos de negócio</strong>, focando em modelá-los
              (processos AS IS) para identificar melhorias e definir o processo
              futuro (TO BE), que será detalhado para automação via software. Em
              seguida, discutiu-se a crucial{" "}
              <strong>importância dos dados</strong>, incluindo sua entrada,
              armazenamento, relacionamento com entidades e depósitos,
              enfatizando que o software processa dados para gerar resultados. O
              estudo avançou para os <strong>requisitos</strong>, divididos em
              funcionais e não funcionais, destacando a necessidade de listá-los
              em um documento de especificação e detalhá-los em{" "}
              <strong>casos de uso</strong> para garantir um entendimento claro
              e completo sobre o funcionamento do sistema.
            </p>
            <h4>Unified Modeling Language (UML)</h4>
            <p>
              A <strong>Unified Modeling Language (UML)</strong> é uma linguagem
              ou notação gráfica padronizada, usada para especificar, visualizar
              e documentar projetos de software desenvolvidos sob o paradigma de
              <strong>orientação por objetos</strong>. É fundamental entender
              que a UML não é um método de desenvolvimento, ou seja, ela não
              dita a ordem das etapas, mas sim atua como uma{" "}
              <strong>ferramenta de visualização e comunicação</strong> do
              sistema.
            </p>
            <p>
              A UML é controlada pelo{" "}
              <strong>Object Management Group (OMG)</strong> e é reconhecida
              mundialmente como a norma da indústria para modelar software
              graficamente. Sua criação se deu em 1994, impulsionada pela
              necessidade de padronizar e formalizar o desenvolvimento de
              softwares cada vez mais complexos, o que também levou à
              popularização do <strong>Rational Unified Process (RUP)</strong>{" "}
              como um ciclo de vida de desenvolvimento tradicional.
            </p>
            <h4>Modelos e Visões da UML</h4>
            <p>
              A UML fornece uma gama de <strong>diagramas visuais</strong> que
              facilitam a análise e o projeto de sistemas e software, garantindo
              que todos os envolvidos compartilhem a mesma visão e conhecimento.
              Os símbolos gráficos utilizados na UML possuem{" "}
              <strong>semântica bem definida</strong>, tornando-os um padrão que
              facilita o uso e o entendimento.
            </p>
            <p>
              Um <strong>modelo</strong> em engenharia de software é uma
              simplificação ou abstração da realidade e das atividades
              envolvidas no processo de desenvolvimento, criado para melhor
              compreender o sistema a ser construído e codificado. Os modelos da
              UML expressam duas visões complementares sobre o software:
            </p>
            <ol>
              <li>
                <strong>Visão Estrutural:</strong>
                <ul>
                  <li>
                    Captura a <strong>estrutura estática</strong> do sistema, ou
                    seja, quais elementos o compõem e como eles se relacionam
                    entre si.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Visão Comportamental:</strong>
                <ul>
                  <li>
                    Captura a <strong>dinâmica</strong> do sistema, ou seja,
                    como os elementos se comunicam, se comportam e respondem a
                    diferentes estímulos e interações.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Modelos e Diagramas Principais da UML 2.0</h4>
            <p>
              A <strong>UML</strong> é composta por diversos modelos que, em
              conjunto, fornecem uma visão completa da construção e
              funcionamento do software. Estes diagramas buscam mostrar
              visualmente a solução definida, baseada nos requisitos do projeto.
              A versão atual padrão da linguagem é a <strong>UML 2.0</strong>.
            </p>
            <h4>Principais Diagramas da UML</h4>
            <ol>
              <li>
                <strong>Diagrama de Classes:</strong>
                <ul>
                  <li>
                    Objetivo:
                    <ul>
                      <li>
                        Principal diagrama da Análise e Projeto Orientado a
                        Objetos (OO).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Uso:
                    <ul>
                      <li>
                        Mostra as classes do sistema, seus atributos, métodos e
                        todos os tipos de relacionamento (herança, associação,
                        composição, agregação).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Diagrama de Componentes:</strong>
                <ul>
                  <li>
                    Objetivo:
                    <ul>
                      <li>
                        Modela as partes físicas do software no ambiente de
                        desenvolvimento.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Uso:
                    <ul>
                      <li>
                        Representa artefatos de software como códigos-fonte,
                        executáveis, DLLs e bibliotecas.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Diagrama de Implantação:</strong>
                <ul>
                  <li>
                    Objetivo:
                    <ul>
                      <li>
                        Modela o hardware em que o software será executado.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Uso:
                    <ul>
                      <li>
                        Representa a estrutura de hardware e rede, segregada por
                        ambientes (desenvolvimento, teste, produção, etc.).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Diagrama de Casos de Uso:</strong>
                <ul>
                  <li>
                    Objetivo:
                    <ul>
                      <li>
                        Especifica e detalha os requisitos funcionais do
                        sistema.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Uso:
                    <ul>
                      <li>
                        Descreve os cenários de interação entre os atores
                        (usuários/sistemas externos) e o sistema.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Diagrama de Sequência:</strong>
                <ul>
                  <li>
                    Objetivo:
                    <ul>
                      <li>
                        Modela a interação dinâmica entre objetos ao longo do
                        tempo.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Uso:
                    <ul>
                      <li>
                        Detalha a ordem e a sequência das chamadas, apoiando a
                        visão dinâmica do sistema.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Diagrma de Atividades:</strong>
                <ul>
                  <li>
                    Objetivo:
                    <ul>
                      <li>
                        Modela processos de negócio ou a lógica interna (fluxo
                        de controle e dados).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Uso:
                    <ul>
                      <li>
                        Equivalente ao BPMN na UML; usado para descrever o fluxo
                        de atividades ou detalhar casos de uso.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Diagrama de Estados:</strong>
                <ul>
                  <li>
                    Objetivo:
                    <ul>
                      <li>
                        Modela como eventos externos causam mudanças no estado
                        de um objeto.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Uso:
                    <ul>
                      <li>
                        Descreve o ciclo de vida de um objeto e como ele
                        transiciona entre diferentes estados.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Uso Estratégico dos Diagramas</h4>
            <p>
              Embora existam outros diagramas na UML, a utilização deve ser
              baseada no princípio de <strong>agregação de valor</strong>.
            </p>
            <ul>
              <li>
                Não se trata de grau de importância, mas sim de relevância para
                o projeto.
              </li>
              <li>
                Conforme os conceitos de agilidade, deve-se{" "}
                <strong>evitar o desperdício</strong>: não gaste tempo criando
                diagramas desnecessários que não aprimorem a compreensão ou a
                qualidade do software.
              </li>
              <li>
                A UML agrega valor quando utilizada de maneira{" "}
                <strong>adequada</strong> para melhorar o entendimento da
                solução que está sendo definida.
              </li>
            </ul>
            <p>
              <strong>Atenção:</strong> A UML modela o software seguindo as
              premissas da <strong>Orientação a Objetos (OO)</strong>.
            </p>
            <h4>Conceitos de Orientação a Objetos (OO)</h4>
            <p>
              A <strong>Orientação a Objetos (OO)</strong> é um conceito
              fundamental da engenharia de software e uma forma de construir
              sistemas, representando os elementos da solução como{" "}
              <strong>objetos</strong>. Seu uso é difundido porque a modelagem
              por objetos se aproxima da forma como o cérebro humano percebe e
              categoriza o mundo, simplificando a compreensão de um software
              complexo.
            </p>
            <p>
              A OO é um <strong>processo conceitual</strong> (independente de
              linguagem de programação) que visualiza o domínio do problema como
              uma coleção de <strong>objetos</strong> e seus métodos associados.
            </p>
            <h4>O Objeto</h4>
            <p>
              O objeto é a base da Orientação a Objetos. Ele denota uma{" "}
              <strong>entidade</strong>
              do mundo real, seja ela:
            </p>
            <ul>
              <li>
                <strong>Física:</strong>
                <ul>
                  <li>Um carro, uma pessoa, um livro.</li>
                </ul>
              </li>
              <li>
                <strong>Conceitual:</strong>
                <ul>
                  <li>Um diagrama de um sistema.</li>
                </ul>
              </li>
              <li>
                <strong>De Software:</strong>
                <ul>
                  <li>Um checkbox em uma página web.</li>
                </ul>
              </li>
            </ul>
            <p>
              Para uma boa análise de software, o objeto possui as seguintes
              características essenciais:
            </p>
            <ul>
              <li>
                <strong>Identidade:</strong>
                <ul>
                  <li>
                    É o que identifica o objeto de forma{" "}
                    <strong>unívoca</strong> (única) entre os demais, permitindo
                    que outros objetos o referenciem.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Características (Atributos):</strong>
                <ul>
                  <li>
                    Descrevem as <strong>propriedades</strong> do objeto, sendo
                    mutáveis ao longo do tempo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Comportamento (Métodos):</strong>
                <ul>
                  <li>
                    Determina como o objeto <strong>reage</strong> a estímulos
                    do mundo real ou de outros objetos (ações que ele pode
                    realizar).
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Conceitos Fundamentais da OO</h4>
            <p>
              A orientação a objetos se apoia em conceitos específicos que
              facilitam a modelagem e a lógica do sistema:
            </p>
            <ol>
              <li>
                <strong>Abstração:</strong>
                <ul>
                  <li>
                    Consiste em focar nos{" "}
                    <strong>aspectos essenciais e relevantes</strong> de uma
                    entidade para um propósito específico, ignorando suas
                    propriedades acidentais. É crucial para simplificar
                    conceitos complexos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Encapsulamento:</strong>
                <ul>
                  <li>
                    Significa separar o software em partes o mais{" "}
                    <strong>isoladas</strong> possível.
                  </li>
                  <li>
                    Envolve a separação dos <strong>aspectos externos</strong>{" "}
                    (a <strong>interface</strong>, que é o que o objeto conhece
                    e sabe fazer) dos{" "}
                    <strong>detalhes internos da implementação</strong> (que
                    ficam ocultos).
                  </li>
                  <li>
                    O objetivo é restringir o acesso ao comportamento interno,
                    tornando o software mais flexível e fácil de modificar ou
                    estender. (Exemplo: o motorista só precisa saber como usar a
                    embreagem e o acelerador, sem precisar entender seu
                    funcionamento interno).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Herança:</strong>
                <ul>
                  <li>
                    É o <strong>compartilhamento</strong> de atributos e
                    operações entre objetos, com base em um{" "}
                    <strong>relacionamento hierárquico</strong>.
                  </li>
                  <li>
                    Permite que uma estrutura comum seja compartilhada por
                    diversos objetos relacionados,{" "}
                    <strong>evitando redundâncias</strong>. Um objeto em um
                    nível inferior da hierarquia herda as características dos
                    objetos nos níveis superiores.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Diagrama de Casos de Uso</h4>
            <p>
              O <strong>Diagrama de Caso de Uso</strong> é frequentemente o
              primeiro diagrama da UML a ser construído após o levantamento de
              requisitos. Ele é essencial para analisar o relacionamento das
              funcionalidades do sistema entre si e com os usuários que as
              executam.
            </p>
            <h4>Foco e Objetivo</h4>
            <ul>
              <li>
                Seu objetivo principal é modelar o{" "}
                <strong>comportamento externo</strong> do software.
              </li>
              <li>
                Ele <strong>não se preocupa</strong> com a forma como as funções
                serão implementadas internamente.
              </li>
              <li>
                É uma ferramenta crucial para a comunicação: permite que os
                usuários validem se o levantamento de requisitos está completo e
                se o entendimento sobre o funcionamento do software está
                correto.
              </li>
            </ul>
            <h4>Elementos do Diagrama</h4>
            <p>
              A modelagem começa com a identificação dos <strong>atores</strong>{" "}
              e dos <strong>casos de uso</strong> do sistema, baseando-se nos
              requisitos funcionais.
            </p>
            <ol>
              <li>
                <strong>Atores: </strong>
                <ul>
                  <li>
                    Representam os usuários (humanos ou outros sistemas) que
                    interagem com o software.
                    <ul>
                      <li>
                        <strong>Representação:</strong> Bonecos.
                      </li>
                      <li>
                        <strong>Posição:</strong> Ficam <strong>fora</strong> do
                        retângulo que delimita o sistema.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Casos de Uso:</strong>
                <ul>
                  <li>
                    Representam as funcionalidades principais do sistema.
                    <ul>
                      <li>
                        <strong>Representação:</strong> Elipses
                        (circunferências).
                      </li>
                      <li>
                        <strong>Posição:</strong> Ficam <strong>dentro</strong>{" "}
                        de um retângulo que define os{" "}
                        <strong>limites do software</strong> (o escopo total).
                        Para cada caso de uso, devem ser detalhados os cenários
                        principais e alternativos.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Relacionamentos:</strong>
                <ul>
                  <li>
                    Representam as interações entre os atores e os casos de uso,
                    e entre os próprios casos de uso.
                    <ul>
                      <li>
                        <strong>Representação:</strong> Linhas retas ou
                        pontilhadas.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Visualização e Escopo</h4>
            <p>
              O diagrama de casos de uso mostra visualmente o processo de
              negócio e como as funcionalidades se relacionam para atender às
              necessidades dos usuários. O retângulo delimitador é uma boa
              prática para indicar claramente o <strong>escopo total</strong> do
              software: tudo o que está dentro faz parte das funcionalidades a
              serem executadas, e tudo o que está fora são os elementos que
              interagem com ele.
            </p>
            <h4>Componentes do Diagrama de Casos de Uso</h4>
            <p>
              Os componentes, ou elementos, de um Diagrama de Caso de Uso são a
              linguagem visual essencial para compreender a interação e o escopo
              do sistema.
            </p>
            <ol>
              <li>
                <strong>Ator (Actor)</strong>
                <ul>
                  <li>
                    <strong>Definição:</strong> Representa o{" "}
                    <strong>papel</strong> executado por uma entidade que
                    interage com o sistema.
                  </li>
                  <li>
                    <strong>Função:</strong> Modela algo que está{" "}
                    <strong>fora da fronteira do sistema</strong>
                    (indivíduos, outros sistemas) e que precisa trocar
                    informações com ele.
                  </li>
                  <li>
                    <strong>Observação:</strong> Um único usuário pode exercer o
                    papel de vários atores, e um único ator pode ser
                    representado por vários usuários.
                  </li>
                  <li>
                    <strong>Representação:</strong> Um <strong>boneco</strong>{" "}
                    com um rótulo indicando o nome do ator.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Caso de Uso (Use Case)</strong>
                <ul>
                  <li>
                    <strong>Definição:</strong> Define uma{" "}
                    <strong>função</strong> ou funcionalidade específica do
                    sistema.
                  </li>
                  <li>
                    <strong>Modelagem:</strong> A modelagem deve focar primeiro
                    no <strong>fluxo principal</strong> e, em seguida, nos{" "}
                    <strong>fluxos alternativos e de exceção</strong> para
                    garantir a completude do escopo.
                  </li>
                  <li>
                    Representação: Uma elipse (circunferência) contendo o nome
                    do caso de uso.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Relacionamentos (Relationships)</strong>
                <ul>
                  <li>
                    <strong>Definição:</strong> Mostram a ligação entre atores e
                    casos de uso, e a ligação entre os próprios casos de uso.
                  </li>
                  <li>
                    <strong>Objetivo:</strong> Ajudam a compreender a dinâmica
                    de interação e o funcionamento dos processos de negócio no
                    software.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>
              Tipos Cruciais de Associação (Relacionamentos) entre Casos de Uso
            </h4>
            <p>
              Os relacionamentos são fundamentais para mostrar a dinâmica de
              interação entre as funcionalidades do software:
            </p>
            <ul>
              <li>
                <strong>Inclusão (Include):</strong>
                <ul>
                  <li>
                    Indica que um caso de uso secundário (B) é{" "}
                    <strong>essencial e obrigatório</strong> para o
                    comportamento de um caso de uso principal (A).
                  </li>
                  <li>
                    Pode ser lido como: "B faz parte de A" (B is_part_of A).
                  </li>
                  <li>
                    Exemplo: Efetuar Saque faz <strong>Include</strong> de
                    Autenticar Cliente.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Extensão (Extend):</strong>
                <ul>
                  <li>
                    Indica que um caso de uso secundário (B){" "}
                    <strong>pode ser acrescentado</strong> (é opcional ou
                    condicional) ao comportamento do caso de uso principal (A).
                  </li>
                  <li>
                    A execução da extensão depende de um ponto de extensão ou de
                    uma condição específica.
                  </li>
                  <li>
                    Exemplo: Contratar Seguro faz <strong>Extend</strong> de
                    Efetuar Saque.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Conclusão</h4>
            <p>
              Esta etapa cobriu a <strong>UML</strong>, os conceitos de{" "}
              <strong>Orientação a Objetos</strong> e a fundo o{" "}
              <strong>Diagrama de Caso de Uso</strong>. A UML oferece um
              conjunto de diagramas visuais que, juntos, fornecem o entendimento
              de toda a solução de software projetada. O Diagrama de Caso de
              Uso, especificamente, tem o objetivo de visualizar o{" "}
              <strong>escopo do projeto</strong>, as funcionalidades, os atores
              envolvidos e os relacionamentos entre todos esses elementos,
              facilitando a compreensão da dinâmica do software.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default ModelagemSistemasWeb;
