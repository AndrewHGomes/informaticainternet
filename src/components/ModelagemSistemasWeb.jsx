import { useState } from "react";
import aula1 from "../assets/audiosM8/aula01.mp3";
import aula2 from "../assets/audiosM8/aula02.mp3";
import aula3 from "../assets/audiosM8/aula03.mp3";
import aula4 from "../assets/audiosM8/aula04.mp3";

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
              {" "}
              <li>
                Recebimento de <strong>Insumos de Entrada</strong>;
              </li>{" "}
              <li>
                <strong>Processamento</strong> desses insumos;
              </li>{" "}
              <li>
                Geração de um <strong>Resultado (Saída)</strong>.
              </li>{" "}
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
              {" "}
              <li>
                <strong>AS IS ("Como É"):</strong> É a "fotografia" do processo
                atual. Consiste em <strong>identificar e mapear</strong> o passo
                a passo de como o processo é realmente executado no dia a dia,
                entrevistando e observando os profissionais envolvidos.
              </li>{" "}
              <li>
                <strong>TO BE ("Como Será"):</strong> É a proposta de um{" "}
                <strong>novo processo ou a melhoria</strong> do processo AS IS,
                visando torná-lo mais <strong>eficiente e ágil</strong>. O novo
                fluxo deve ter um <strong>propósito claro</strong> e trazer
                ganhos de produtividade e qualidade.
              </li>{" "}
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
              {" "}
              <li>
                <strong>Eventos (Círculos):</strong> Indicam o início (verde) ou
                o fim (vermelho) do processo.
              </li>{" "}
              <li>
                <strong>Atividades/Tarefas (Retângulos):</strong> Representam o{" "}
                <strong>trabalho realizado</strong> em uma etapa do processo.
              </li>{" "}
              <li>
                <strong>Fluxo de Sequência (Seta):</strong> Conector que mostra
                a ordem de execução das atividades.
              </li>{" "}
              <li>
                <strong>Gateway (Losango):</strong> Elemento de{" "}
                <strong>decisão</strong> que separa ou junta os diferentes
                caminhos lógicos do processo.
              </li>{" "}
            </ul>
            <p>
              A modelagem do processo de negócio é, portanto, o primeiro passo
              da modelagem de sistemas e da construção de um software, pois ela
              identifica as partes do fluxo que podem e devem ser{" "}
              <strong>automatizadas</strong>.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default ModelagemSistemasWeb;
