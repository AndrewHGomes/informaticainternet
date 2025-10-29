import { useState } from "react";
import aula1 from "../assets/audiosM8/aula01.mp3";
import aula2 from "../assets/audiosM8/aula02.mp3";
import aula3 from "../assets/audiosM8/aula03.mp3";
import aula4 from "../assets/audiosM8/aula04.mp3";

import aula5 from "../assets/audiosM8/aula05.mp3";
import aula6 from "../assets/audiosM8/aula06.mp3";
import aula7 from "../assets/audiosM8/aula07.mp3";
import aula8 from "../assets/audiosM8/aula08.mp3";

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
        </>
      )}
    </section>
  );
};

export default ModelagemSistemasWeb;
