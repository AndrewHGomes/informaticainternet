import { useState } from "react";
import aula1 from "../assets/videosM1/aula01.mp4";
import aula2 from "../assets/videosM1/aula02.mp4";
import aula3 from "../assets/videosM1/aula03.mp4";
import aula4 from "../assets/videosM1/aula04.mp4";

const Introducao = () => {
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
        <h2>INTRODUÇÃO AO CURSO</h2>
        <img src="/seta.png" onClick={visualizar} className={classeGirarImg} />
      </div>
      {abrir && (
        <>
          <div>
            <h3>
              Introdução à Carreira de Técnico em Informática para Internet
            </h3>
            <video src={aula1} controls></video>
            <h4>O Papel do Técnico em Informática para Internet</h4>
            <p>
              O profissional de Técnico em Informática para Internet tem um
              papel amplo e versátil na área de{" "}
              <strong>Tecnologia da Informação (TI)</strong>. O foco do curso é
              a atuação como{" "}
              <strong>desenvolvedor de software para internet</strong>, ou seja,
              programador.
            </p>
            <h4>Conhecimentos Fundamentais:</h4>
            <ul>
              <li>
                <strong>Informática Básica:</strong>
                <ul>
                  <li>
                    Hardware, software, redes, suporte e configuração de
                    computadores.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Programação:</strong>
                <ul>
                  <li>Lógica, algoritmos e banco de dados.</li>
                </ul>
              </li>
              <li>
                <strong>Sistemas:</strong>
                <ul>
                  <li>
                    Modelagem de sistemas web e mobile, mapeamento de processos
                    e gerenciamento da informação.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Negócios:</strong>
                <ul>
                  <li>Segurança digital e negócios digitais.</li>
                </ul>
              </li>
            </ul>
            <h4>O Que é Tecnologia da Informação (TI)?</h4>
            <ul>
              <li>
                <strong>Definição:</strong>
                <ul>
                  <li>
                    TI é o conjunto de atividades e soluções que usam recursos
                    de computação para{" "}
                    <strong>
                      produzir, armazenar, transmitir, acessar, proteger e usar
                      informações
                    </strong>
                    .
                  </li>
                </ul>
              </li>
              <li>
                <strong>Importância Estratégica:</strong>
                <ul>
                  <li>
                    A TI é uma ferramenta essencial para as empresas. Ela
                    garante <strong>competitividade</strong> e ajuda a:
                    <ul>
                      <li>Automatizar processos repetitivos;</li>
                      <li>Melhorar a organização e a gestão;</li>
                      <li>Apoiar a tomada de decisões;</li>
                      <li>Prever e se adaptar às mudanças do mercado.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O mercado de trabalho em TI</h4>
            <ul>
              <li>
                <strong>Mercado em Crescimento:</strong>
                <ul>
                  <li>
                    O setor de TI é um dos mais promissores e está em constante
                    expansão, movimentando bilhões de reais e empregando milhões
                    de pessoas no Brasil.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Constante Evolução:</strong>
                <ul>
                  <li>
                    O mundo e a economia dependem cada vez mais de software.
                    Isso exige que os profissionais de TI estejam{" "}
                    <strong>
                      sempre se atualizando e buscando novos conhecimentos
                    </strong>
                    .
                  </li>
                </ul>
              </li>
              <li>
                <strong>Déficit de Profissionais:</strong>
                <ul>
                  <li>
                    O mercado de tecnologia tem uma alta demanda por
                    profissionais qualificados, especialmente em áreas como
                    desenvolvimento mobile, computação em nuvem, segurança
                    cibernética e inteligência artificial.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Perfil Profissional do Técnico em TI</h4>
            <p>
              O profissional de TI precisa ter um perfil versátil que vai além
              do conhecimento técnico.
            </p>
            <h4>Habilidades Essenciais:</h4>
            <ul>
              <li>
                <strong>Conhecimento Técnico:</strong>
                <ul>
                  <li>
                    Capacidade de construir e solucionar problemas em software.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conhecimento de Negócio:</strong>
                <ul>
                  <li>
                    Entender as diversas áreas de uma empresa (logística, RH,
                    finanças) para atender aos requisitos dos clientes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Habilidades Interpessoais:</strong>
                <ul>
                  <li>
                    <strong>Boa Comunicação:</strong>
                    <ul>
                      <li>Para se alinhar com a equipe e com os superiores.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Saber Ouvir:</strong>
                    <ul>
                      <li>
                        Essencial para compreender as necessidades do cliente.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Criatividade e Proatividade:</strong>
                    <ul>
                      <li>
                        Para buscar as melhores soluções para os problemas.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Formação: Curso Técnico vs. Curso Superior</h4>
            <strong>Curso Técnico:</strong>
            <ul>
              <li>
                <strong>Foco:</strong>
                <ul>
                  <li>
                    Formação rápida e prática, focada em uma área profissional
                    específica.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Duração:</strong>
                <ul>
                  <li>Geralmente entre 800 e 1.200 horas.</li>
                </ul>
              </li>
              <li>
                <strong>Vantagem:</strong>
                <ul>
                  <li>
                    Oferece um bom diferencial de conhecimento técnico para
                    entrar no mercado de trabalho.
                  </li>
                </ul>
              </li>
            </ul>
            <strong>Curso Superior (Graduação):</strong>
            <ul>
              <li>
                <strong>Foco:</strong>
                <ul>
                  <li>
                    Formação mais aprofundada, com maior carga de conhecimento
                    teórico e prático.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Duração:</strong>
                <ul>
                  <li>
                    De 2 a 4 anos, dependendo do tipo (tecnólogo, bacharelado,
                    licenciatura).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Vantagem:</strong>
                <ul>
                  <li>
                    A carreira pode ser iniciada com um curso técnico e
                    aprimorada com uma graduação, garantindo uma formação
                    sólida.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Regulamentação e Registro Profissional</h4>
            <ul>
              <li>
                <strong>Situação Atual:</strong>
                <ul>
                  <li>
                    A profissão de TI não é regulamentada no Brasil, o que
                    significa que não há um conselho de classe obrigatório (como
                    a OAB ou o CREA).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Projeto de Lei:</strong>
                <ul>
                  <li>
                    Existe um projeto (PL 420/2016) em análise para regulamentar
                    a profissão, exigindo diploma ou experiência mínima para
                    exercer certas funções. No entanto, a discussão ainda é
                    complexa.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Consequência:</strong>
                <ul>
                  <li>
                    Hoje, é possível atuar com carteira assinada (CLT) ou como
                    autônomo (Pessoa Jurídica), sem a obrigatoriedade de
                    registro.
                  </li>
                </ul>
              </li>
              <li>
                <strong>O que Realmente Importa:</strong>
                <ul>
                  <li>
                    O mercado valoriza a qualificação, a experiência e a busca
                    constante por conhecimento. Um bom profissional sempre terá
                    oportunidades.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>O Papel do Técnico em Informática para Internet</h3>
            <video src={aula2} controls></video>
            <p>
              O <strong>técnico em informática para internet</strong>, também
              chamado de programador ou desenvolvedor web, é o profissional que
              cria soluções (tanto de software quanto de hardware) para as
              necessidades dos clientes. Ele precisa ter uma visão completa do{" "}
              <strong>sistema</strong> para que o software funcione
              corretamente.
            </p>
            <h4>Conceitos Fundamentais de TI</h4>
            <ul>
              <li>
                <strong>Hardware:</strong>
                <ul>
                  <li>
                    É a <strong>parte física</strong> de um computador e outros
                    equipamentos. Inclui componentes eletrônicos, como placas,
                    circuitos e peças.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Software:</strong>
                <ul>
                  <li>
                    É a <strong>parte lógica</strong> do sistema. Pode ser
                    entendido como um conjunto de três elementos:
                    <ol>
                      <li>
                        <strong>Programas de computador:</strong>
                        <ul>
                          <li>
                            Linhas de código que automatizam tarefas e resolvem
                            problemas específicos.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Dados:</strong>
                        <ul>
                          <li>
                            Informações básicas que são processadas pelos
                            programas para gerar resultados.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Documentação associada:</strong>
                        <ul>
                          <li>
                            Manuais e explicações sobre o software, importantes
                            para manutenções futuras.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sistema:</strong>
                <ul>
                  <li>
                    É um conceito mais amplo, que se refere a um grupo de
                    componentes que{" "}
                    <strong>interagem para atingir um objetivo</strong>. Em TI,
                    um sistema envolve não apenas o software, mas também o
                    hardware, a linguagem de programação, o banco de dados e o
                    servidor, entre outros.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Tipos de Software</h4>
            <p>
              Os softwares podem ser classificados de acordo com sua finalidade:
            </p>
            <ul>
              <li>
                <strong>Genéricos:</strong>
                <ul>
                  <li>
                    Desenvolvidos para serem vendidos para diversos clientes com
                    necessidades semelhantes (ex: Microsoft Office).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Customizados:</strong>
                <ul>
                  <li>
                    Criados especificamente para um único cliente e suas
                    particularidades.
                  </li>
                </ul>
              </li>
            </ul>
            <p>Existem também categorias baseadas no uso:</p>
            <ul>
              <li>
                <strong>Básico:</strong>
                <ul>
                  <li>Programas de apoio, como sistemas operacionais.</li>
                </ul>
              </li>
              <li>
                <strong>Comercial:</strong>
                <ul>
                  <li>Apoia operações de negócios, como ERP e CRM.</li>
                </ul>
              </li>
              <li>
                <strong>Científico e de Engenharia:</strong>
                <ul>
                  <li>Usados para cálculos complexos.</li>
                </ul>
              </li>
              <li>
                <strong>Embutido/Embarcado:</strong>
                <ul>
                  <li>
                    Controla produtos e sistemas com microprocessador, como os
                    encontrados em carros e aviões.
                  </li>
                </ul>
              </li>
              <li>
                <strong>De Escritório/Uso Pessoal:</strong>
                <ul>
                  <li>Editores de texto, planilhas, etc.</li>
                </ul>
              </li>
              <li>
                <strong>De Inteligência Artificial:</strong>
                <ul>
                  <li>
                    Algoritmos que ensinam a máquina a resolver problemas.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Outros Termos Importantes</h4>
            <ul>
              <li>
                <strong>Requisitos:</strong>
                <ul>
                  <li>
                    As <strong>funcionalidades</strong> que um software precisa
                    ter para atender à necessidade do cliente. Para criar um bom
                    software, é fundamental entender os requisitos e se colocar
                    no lugar do cliente para compreender seu negócio.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Técnica vs. Tecnologia:</strong>
                <ul>
                  <li>
                    <strong>Técnica:</strong>
                    <ul>
                      <li>
                        Uma forma de executar um processo ou um conjunto de
                        atividades.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Tecnologia:</strong>
                    <ul>
                      <li>
                        A técnica evoluída e sistematizada, que inclui
                        conhecimento e ferramentas.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cliente vs. Usuário:</strong>
                <ul>
                  <li>
                    <strong>Cliente:</strong>
                    <ul>
                      <li>
                        Quem <strong>paga</strong> pelo software.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Usuário:</strong>
                    <ul>
                      <li>
                        Quem de fato vai <strong>usar</strong> o software e tem
                        um problema a ser resolvido. Para entender os requisitos
                        de negócio, é crucial falar com o usuário.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Desenvolvimento Web:</strong>
                <ul>
                  <li>
                    Termo para o desenvolvimento de sites e sistemas acessados
                    pela internet.
                  </li>
                  <li>
                    O desenvolvedor web pode ser um{" "}
                    <strong>web designer</strong> (focado no layout) ou um{" "}
                    <strong>web developer</strong> (focado na programação de
                    sistemas).
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contexto Histórico</h3>
            <video src={aula3} controls></video>
            <p>
              A área de Tecnologia da Informação (TI) está em constante
              evolução, e a profissão de técnico em informática para internet,
              ou desenvolvedor web, acompanha esse dinamismo desde o surgimento
              da computação. O resumo a seguir aborda a história, as
              responsabilidades éticas e as diversas funções que um profissional
              de TI pode exercer.
            </p>
            <h4>História e Evolução da TI e da Profissão</h4>
            <p>
              A história da computação, desde suas primeiras máquinas mecânicas,
              mostra a transição de um hardware rígido para sistemas mais
              flexíveis. Ada Lovelace, em 1835, é reconhecida como a{" "}
              <strong>primeira programadora</strong> ao criar um programa para a
              máquina analítica de Charles Babbage.
            </p>
            <p>
              A partir dos anos 1950, a evolução se acelerou, passando de um
              foco em hardware para um enfoque em <strong>software</strong>. A
              lista abaixo ilustra essa progressão:
            </p>
            <ul>
              <li>
                <strong>1950-1965:</strong>
                <ul>
                  <li>
                    Hardware era o principal foco, mas sem metodologias
                    sistemáticas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>1965-1975:</strong>
                <ul>
                  <li>
                    Surgiram a multiprogramação, sistemas multiusuários, a
                    primeira geração de bancos de dados (SGBD) e a ideia de
                    produtos de software genéricos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>1975-Hoje:</strong>
                <ul>
                  <li>
                    Período marcado por sistemas distribuídos, o surgimento da
                    internet, hardware de baixo custo e o crescimento de
                    metodologias ágeis e tecnologias como Big Data e mobile.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Na década de 1960, a Engenharia de Software começou a ser
              discutida, buscando uma abordagem mais formal para construir
              softwares complexos. Isso levou ao surgimento de metodologias de
              desenvolvimento:
            </p>
            <ul>
              <li>
                <strong>Anos 70</strong>
                <ul>
                  <li>Métodos orientados a funções.</li>
                </ul>
              </li>
              <li>
                <strong>Anos 80 e 90</strong>
                <ul>
                  <li>
                    Métodos orientados a objetos, base para a programação atual.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Anos 90</strong>
                <ul>
                  <li>
                    Crescimento da preocupação com a qualidade, com normas e
                    padrões da IEEE, ISO e ABNT.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Código de Ética e Responsabilidades Profissionais</h4>
            <p>
              A profissão de TI exige não apenas habilidades técnicas, mas
              também um forte senso de ética. O trabalho do profissional deve
              estar alinhado com o{" "}
              <strong>Código de Ética da ACM e da IEEE</strong>, que destacam os
              seguintes princípios:
            </p>
            <ul>
              <li>
                <strong>Contribuir para o bem-estar humano:</strong>
                <ul>
                  <li>
                    Usar as habilidades para o benefício da sociedade,
                    promovendo inclusão e responsabilidade social.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Evitar danos:</strong>
                <ul>
                  <li>
                    Prevenir consequências negativas, como a divulgação de dados
                    confidenciais ou danos à reputação.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Ser honesto e confiável:</strong>
                <ul>
                  <li>
                    Agir com integridade em relação a qualificações, conflitos
                    de interesse e informações.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Ser justo e não discriminar:</strong>
                <ul>
                  <li>Promover a participação de todos, sem preconceitos.</li>
                </ul>
              </li>
              <li>
                <strong>Respeitar direitos autorais:</strong>
                <ul>
                  <li>Proteger a propriedade intelectual de outros.</li>
                </ul>
              </li>
              <li>
                <strong>
                  Respeitar a privacidade e honrar a confidencialidade:
                </strong>
                <ul>
                  <li>
                    Usar informações pessoais e confidenciais de forma segura e
                    ética.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Principais Atribuições e Funções em TI</h4>
            <p>
              Além de desenvolver software, um técnico em informática para
              internet pode atuar em diversas funções, impulsionadas pela
              constante evolução do mercado. As principais são:
            </p>
            <ul>
              <li>
                <strong>Desenvolvedor de Software/Programador:</strong>
                <ul>
                  <li>
                    Foca no desenvolvimento e manutenção de sistemas, geralmente
                    especialista em uma linguagem ou área.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Analista de Sistemas:</strong>
                <ul>
                  <li>
                    Responsável por entender as necessidades do cliente,
                    levantar requisitos e projetar a solução estratégica antes
                    que o programador comece a codificar.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Arquiteto de Software:</strong>
                <ul>
                  <li>
                    Planeja a melhor solução técnica para um software,
                    organizando como os componentes serão criados e integrados.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Testador de Software:</strong>
                <ul>
                  <li>
                    Garante a qualidade do produto, encontrando erros e
                    problemas para que o programador os corrija.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Profissional de Gestão da Informação/Banco de Dados:
                </strong>
                <ul>
                  <li>
                    Gerencia e monitora os bancos de dados de uma empresa.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Gestor de Projetos:</strong>
                <ul>
                  <li>
                    Planeja e controla a execução de projetos de
                    desenvolvimento, mantendo a comunicação com todas as áreas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Profissional de Suporte:</strong>
                <ul>
                  <li>
                    Resolve problemas técnicos para clientes internos ou
                    externos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Gestor de Infraestrutura e Redes:</strong>
                <ul>
                  <li>
                    Gerencia a infraestrutura de TI, incluindo redes e segurança
                    de dados.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Analista de Segurança da Informação:</strong>
                <ul>
                  <li>
                    Protege os dados da empresa contra ameaças e ataques
                    cibernéticos.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Novas Habilidades e Tendências do Mercado</h4>
            <p>
              O mercado de TI tem um déficit de profissionais e exige novas
              habilidades. As áreas em crescimento que demandam profissionais
              qualificados são:
            </p>
            <ul>
              <li>
                <strong>Desenvolvedores Mobile:</strong>
                <ul>
                  <li>
                    Focados em aplicativos para dispositivos móveis, com
                    conhecimentos em UX e metodologias ágeis.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Computação na Nuvem:</strong>
                <ul>
                  <li>
                    Gerencia sistemas e informações em plataformas como AWS e
                    Azure para otimizar custos e controle.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cientista de Dados:</strong>
                <ul>
                  <li>
                    Analisa grandes volumes de dados (<strong>Big Data</strong>)
                    para extrair informações valiosas e apoiar a tomada de
                    decisões.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Segurança Cibernética:</strong>
                <ul>
                  <li>
                    Protege os sistemas contra ameaças e garante a conformidade
                    com leis como a <strong>LGPD</strong> (Lei Geral de Proteção
                    de Dados).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Inteligência Artificial:</strong>
                <ul>
                  <li>
                    Cria algoritmos que permitem que as máquinas aprendam e
                    realizem tarefas de forma inteligente.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Internet das Coisas (IoT):</strong>
                <ul>
                  <li>
                    Conecta objetos do cotidiano à internet, exigindo
                    conhecimentos em programação de hardware e segurança.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Analista de DevOps:</strong>
                <ul>
                  <li>
                    Integra as equipes de desenvolvimento e operação para
                    agilizar a entrega de software, garantindo que o ambiente de
                    uso esteja sempre disponível.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>O Papel do Desenvolvedor Web e o Conceito de Programação</h3>
            <video src={aula4}></video>
            <p>
              O <strong>desenvolvedor web</strong>, ou programador web, é um
              profissional essencial no mercado de trabalho atual. Sua principal
              responsabilidade é criar novos softwares ou aprimorar os já
              existentes, especialmente aqueles que operam na internet.
            </p>
            <p>
              A <strong>programação</strong> é o processo de escrever um
              conjunto de instruções lógicas, ou algoritmos, em uma{" "}
              <strong>linguagem de programação</strong> (um "idioma" entendido
              pelo computador). Essas instruções formam o que conhecemos como
              programas de computador ou <strong>softwares</strong>. O
              computador entende apenas o <strong>código binário</strong>{" "}
              (sequências de 0 e 1), por isso todas as linguagens de programação
              precisam ser "traduzidas" para esse formato.
            </p>
            <p>Algumas das principais linguagens de programação são:</p>
            <ul>
              <li>
                <strong>PHP:</strong>
                <ul>
                  <li>
                    Linguagem de código aberto, muito usada para sistemas web
                    dinâmicos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>C++:</strong>
                <ul>
                  <li>
                    Evolução da linguagem C, com foco em orientação a objetos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Java:</strong>
                <ul>
                  <li>
                    Linguagem de alto desempenho, orientada a objetos, com a
                    filosofia "escreva uma vez, execute em qualquer lugar."
                  </li>
                </ul>
              </li>
              <li>
                <strong>C#</strong>
                <ul>
                  <li>
                    Desenvolvida pela Microsoft, é parte da plataforma .NET e
                    também é orientada a objetos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Python:</strong>
                <ul>
                  <li>
                    Linguagem de alto nível, com sintaxe simples e clara, usada
                    em diversas aplicações complexas.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Paradigmas e Níveis de Linguagem de Programação</h4>
            <p>
              Um <strong>paradigma de programação</strong> é a forma de resolver
              um problema computacional. Os principais são:
            </p>
            <ul>
              <li>
                <strong>Procedural:</strong>
                <ul>
                  <li>
                    O software é uma sequência de comandos que o computador
                    executa em ordem.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Orientado a Objetos:</strong>
                <ul>
                  <li>
                    O paradigma mais popular, no qual o software é construído a
                    partir de componentes individuais, chamados{" "}
                    <strong>objetos</strong>, que interagem entre si. As
                    principais linguagens atuais (Java, C++, C#, Python) seguem
                    esse modelo.
                  </li>
                </ul>
              </li>
            </ul>
            <p>As linguagens também são classificadas por nível:</p>
            <ul>
              <li>
                <strong>Alto Nível:</strong>
                <ul>
                  <li>A sintaxe é próxima da linguagem humana (ex: Python).</li>
                </ul>
              </li>
              <li>
                <strong>Baixo Nível:</strong>
                <ul>
                  <li>
                    A sintaxe é próxima do código de máquina (código binário).
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Tipos de Programadores por Área de Atuação</h4>
            <p>
              O desenvolvedor web é apenas um dos tipos de programadores. As
              categorias são:
            </p>
            <ul>
              <li>
                <strong>Programador Desktop:</strong>
                <ul>
                  <li>
                    Constrói softwares para rodar em uma única máquina ou rede
                    local, sem acesso pela internet.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Programador Web:</strong>
                <ul>
                  <li>
                    Constrói softwares que rodam na internet, acessíveis por
                    usuários em qualquer lugar. Foca em sistemas complexos e
                    segurança.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Programador Mobile:</strong>
                <ul>
                  <li>
                    Desenvolve aplicativos para dispositivos móveis (iOS e
                    Android), considerando as especificidades de cada sistema.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Programador de Jogos:</strong>
                <ul>
                  <li>
                    Cria a lógica e estratégias para jogos de computador, mobile
                    ou videogames.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O Processo de Desenvolvimento de Software</h4>
            <p>
              O desenvolvimento de software é um processo organizado que envolve
              um ciclo de vida com fases básicas:
            </p>
            <ul>
              <li>
                <strong>Levantamento dos Requisitos:</strong>
                <ul>
                  <li>
                    Entender o problema do cliente e as funcionalidades que ele
                    espera do software.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Análise de Requisitos:</strong>
                <ul>
                  <li>
                    Detalhar as regras de negócio, definindo como o software
                    deve funcionar.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Projeto Técnico do Software:</strong>
                <ul>
                  <li>
                    Planejar a arquitetura do software, definindo a linguagem, o
                    banco de dados e a estrutura de componentes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Codificação:</strong>
                <ul>
                  <li>
                    Escrever o código do software usando lógica de programação e
                    a linguagem escolhida. É aqui que o programador web aplica o
                    conceito de segurança da informação, protegendo dados contra
                    acessos não autorizados.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Testes</strong>
                <ul>
                  <li>
                    Usar o software para verificar se ele atende aos requisitos
                    e se está funcionando como esperado, buscando falhas e bugs.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Implantação:</strong>
                <ul>
                  <li>
                    Disponibilizar o software final em um servidor ou na nuvem
                    para que os usuários possam utilizá-lo.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Competências e Habilidades Essenciais</h4>
            <p>
              Para ser um bom técnico em informática, é preciso ter mais do que
              apenas conhecimento de linguagens. As competências fundamentais
              incluem:
            </p>
            <ul>
              <li>
                <strong>Lógica de Programação:</strong>
                <ul>
                  <li>
                    É o mais importante. Entendendo a lógica, fica mais fácil
                    aprender diferentes linguagens.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Teoria Geral de Sistemas:</strong>
                <ul>
                  <li>
                    Conhecer sistemas de informação e{" "}
                    <strong>sistemas operacionais</strong>
                    (Windows, Linux, Mac OS) para entender como o software
                    interage com o computador.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fundamentos de Redes de Computadores:</strong>
                <ul>
                  <li>
                    Entender como os computadores se conectam e como a
                    infraestrutura de rede e a{" "}
                    <strong>computação em nuvem</strong> afetam o funcionamento
                    de um software.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  SGBD (Sistema de Gerenciamento de Banco de Dados):
                </strong>
                <ul>
                  <li>
                    Habilidade de organizar e gerenciar dados, fundamental para
                    a eficiência e o valor do software.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Análise de Sistemas:</strong>
                <ul>
                  <li>
                    Capacidade de entender os requisitos e o projeto de
                    software, especialmente em relação ao{" "}
                    <strong>paradigma de orientação a objetos</strong>, que
                    domina a programação moderna.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Essas habilidades combinadas preparam o profissional para
              construir softwares complexos e de alta qualidade.
            </p>
          </div>
          <div>
            <h3>Competências Comportamentais</h3>
            <p>
              As habilidades técnicas, ou <strong>hard skills</strong>, são
              essenciais para um profissional de TI. No entanto, o mercado de
              trabalho valoriza cada vez mais as competências comportamentais,
              conhecidas como <strong>soft skills</strong>. Elas são o
              diferencial competitivo que impulsiona o sucesso na carreira.
            </p>
            <h4>Soft Skills Fundamentais em TI</h4>
            <p>
              Estas habilidades são cruciais para o sucesso de um profissional
              de TI:
            </p>
            <ul>
              <li>
                <strong>Trabalho em Equipe:</strong>
                <ul>
                  <li>
                    O desenvolvimento de software é um esforço coletivo. A
                    capacidade de colaborar e contribuir para o grupo é vital
                    para o sucesso do projeto.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Comunicação:</strong>
                <ul>
                  <li>
                    É a chave para entender as necessidades do usuário, evitar
                    mal-entendidos e resolver conflitos. Uma comunicação clara
                    garante que as expectativas do cliente sejam atendidas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Criatividade:</strong>
                <ul>
                  <li>
                    Permite encontrar soluções inovadoras e eficientes para
                    problemas, tornando os processos mais práticos e econômicos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Empreendedorismo:</strong>
                <ul>
                  <li>
                    Ter uma mentalidade empreendedora significa entender o
                    negócio do cliente e da empresa, buscando continuamente
                    inovações para agregar valor.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dinamismo:</strong>
                <ul>
                  <li>
                    A habilidade de gerenciar várias demandas ao mesmo tempo com
                    flexibilidade e praticidade.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conhecimento do Negócio:</strong>
                <ul>
                  <li>
                    Ir além da técnica e se envolver com o negócio do cliente.
                    Isso permite propor soluções mais pertinentes e se tornar um
                    parceiro estratégico.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Iniciativa:</strong>
                <ul>
                  <li>
                    Ter proatividade para identificar e solucionar problemas
                    antes que eles se tornem maiores.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Profissionalismo:</strong>
                <ul>
                  <li>
                    Agir com ética, gostar do que faz e estar alinhado com a
                    missão, visão e valores da empresa. Envolve a busca
                    constante por aprendizado e melhoria.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Profissional Generalista vs. Especialista</h4>
            <p>No mundo da TI, você pode escolher dois caminhos de carreira:</p>
            <ul>
              <li>
                <strong>Generalista:</strong>
                <ul>
                  <li>
                    Um profissional que tem um conhecimento amplo sobre várias
                    áreas da TI. Ele não se aprofunda em um único tema, mas
                    consegue entender o panorama geral e se comunicar com
                    diferentes especialistas. É ideal para identificar problemas
                    e apontar qual profissional pode resolvê-los.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Especialista:</strong>
                <ul>
                  <li>
                    Um profissional com conhecimento profundo e focado em uma
                    tecnologia ou área específica. Ele é a pessoa ideal para
                    resolver problemas complexos dentro de sua especialidade.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Não existe um perfil melhor que o outro. A escolha depende dos
              seus objetivos de carreira e do tipo de função que você deseja
              desempenhar.
            </p>
            <p>
              Independentemente da sua escolha, o aprendizado contínuo é
              fundamental. A área de TI evolui constantemente, e a combinação de
              <strong>soft skills</strong> e <strong>hard skills</strong> é a
              receita para uma carreira de sucesso.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Introducao;
