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
            <h3>A Importância da Gestão da Informação e do Conhecimento</h3>
            <p>
              Em um mundo onde a informação é um dos principais ativos de uma
              organização, a capacidade de gerenciá-la de forma eficiente é
              fundamental para o sucesso de qualquer negócio. A informação
              correta, no momento certo, pode ser a diferença entre o lucro e o
              prejuízo, ou entre o sucesso e o fracasso.
            </p>
            <p>
              O texto destaca a evolução da sociedade, da{" "}
              <strong>Sociedade Industrial</strong>
              para a <strong>Sociedade da Informação</strong> e, mais
              recentemente, para a
              <strong>Sociedade do Conhecimento e da Colaboração</strong>. Essa
              transição demonstra que o conhecimento, assim como a informação,
              se tornou um fator-chave para a competitividade das empresas.
            </p>
            <p>
              Para profissionais de TI, como o técnico em informática para
              internet, a <strong>gestão da informação</strong> é uma
              competência essencial, pois permite agregar valor às empresas.
              Isso inclui:
            </p>
            <ul>
              <li>
                <strong>Planejar o armazenamento dos dados:</strong>
                <ul>
                  <li>
                    Para que possam ser utilizados de forma mais fácil e
                    eficiente em sistemas de software.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Garantir a segurança das informações:</strong>
                <ul>
                  <li>Protegendo-as de acessos não autorizados.</li>
                </ul>
              </li>
            </ul>
            <p>
              Dominar as competências de gestão da informação é um diferencial
              muito procurado no mercado de trabalho.
            </p>
            <h4>O Que São Sistemas?</h4>
            <p>
              Um <strong>sistema</strong> é um conceito amplo, que se refere a
              um conjunto de elementos que interagem para formar um todo
              unificado e complexo. Esses elementos trabalham juntos para
              alcançar um objetivo.
            </p>
            <ul>
              <li>
                Uma <strong>empresa</strong>, por exemplo, pode ser vista como
                um sistema, pois é formada por pessoas, áreas, tecnologias e
                processos que colaboram para atingir as metas.
              </li>
              <li>
                A <strong>informação</strong> também pode ser organizada como um
                sistema, com elementos que precisam ser estruturados para
                agregar valor à organização.
              </li>
            </ul>
            <p>
              Os sistemas podem ser classificados de acordo com suas
              características:
            </p>
            <ul>
              <li>
                <strong>Aberto ou Fechado:</strong>
                <ul>
                  <li>
                    Depende se há ou não interação com o ambiente externo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Estável ou Dinâmico:</strong>
                <ul>
                  <li>Reflete a frequência das mudanças que ele sofre.</li>
                </ul>
              </li>
              <li>
                <strong>Permanente ou Temporário:</strong>
                <ul>
                  <li>Relacionado à sua disponibilidade de uso.</li>
                </ul>
              </li>
            </ul>
            <p>
              O <strong>sistema de informação</strong> é uma forma organizada de
              sistema que fornece informações importantes para a gestão de uma
              empresa. Ele é composto por três etapas principais:
            </p>
            <ol>
              <li>
                <strong>Entrada de dados:</strong>
                <ul>
                  <li>Coleta das informações.</li>
                </ul>
              </li>
              <li>
                <strong>Processamento:</strong>
                <ul>
                  <li>Tratamento e organização desses dados.</li>
                </ul>
              </li>
              <li>
                <strong>Saída de conhecimento:</strong>
                <ul>
                  <li>
                    Geração de informações relevantes e úteis para a tomada de
                    decisões.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Para entender a fundo a gestão da informação, é preciso
              compreender a diferença entre os conceitos de{" "}
              <strong>dados, informação e conhecimento</strong>.
            </p>
            <h4>
              Elementos de um Sistema de Informação: A Hierarquia de Valor
            </h4>
            <p>
              A gestão da informação se baseia em uma hierarquia de valor, onde
              cada nível agrega mais sentido e utilidade ao anterior.
            </p>
            <ol>
              <li>
                <strong>Dado:</strong>
                <ul>
                  <li>
                    O <strong>dado</strong> é o nível mais fundamental. Ele pode
                    ser entendido como um <strong>fato bruto e isolado</strong>,
                    sem contexto ou significado. São as unidades básicas a
                    partir das quais a informação é criada.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Informação:</strong>
                <ul>
                  <li>
                    A <strong>informação</strong> é o dado que foi{" "}
                    <strong>organizado, processado e contextualizado</strong>.
                    Ela tem significado e relevância, e é útil para uma tarefa
                    específica.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conhecimento:</strong>
                <ul>
                  <li>
                    O <strong>conhecimento</strong> é o nível mais elevado. É a
                    <strong>capacidade de usar as informações</strong> para
                    tomar decisões estratégicas, resolver problemas ou melhorar
                    o desempenho do negócio. O conhecimento surge da análise e
                    interpretação das informações.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Tipos de Informação e Níveis de Decisão</h4>
            <p>
              Para que uma empresa funcione bem, as informações precisam ser
              organizadas de forma a apoiar os diferentes níveis de decisão.
              Elas podem ser estruturadas em três níveis principais:
            </p>
            <ul>
              <li>
                <strong>Operacional:</strong>
                <ul>
                  <li>
                    Informações usadas para decisões diárias e de curto prazo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tática:</strong>
                <ul>
                  <li>
                    Informações usadas por gerentes para planejar e controlar
                    ações em médio prazo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Estratégica:</strong>
                <ul>
                  <li>
                    Informações usadas pela alta direção para definir os
                    objetivos de longo prazo da empresa.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              As informações também podem ser classificadas quanto à sua origem:
            </p>
            <ul>
              <li>
                <strong>Formais:</strong>
                <ul>
                  <li>
                    São informações confiáveis, vindas de fontes como bases de
                    dados da própria empresa, jornais e revistas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Informais:</strong>
                <ul>
                  <li>
                    São informações de origem não verificável, mas que ainda
                    podem ser úteis na tomada de decisão.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Independentemente do tipo, para serem úteis, as informações
              precisam ser <strong>estruturadas</strong>. Uma informação não
              estruturada (ou seja, não padronizada) não pode ser usada de forma
              eficaz para a gestão de uma organização.
            </p>
            <h4>O Que É Conhecimento?</h4>
            <p>
              O <strong>conhecimento</strong> é a capacidade de usar a
              informação de forma estratégica para melhorar o desempenho de um
              negócio. Ele é um ativo valioso para as organizações e pode ser
              classificado em dois tipos:
            </p>
            <ul>
              <li>
                <strong>Conhecimento Tácito:</strong>
                <ul>
                  <li>
                    É o conhecimento individual, que está "na cabeça" das
                    pessoas. Ele é difícil de ser gerenciado ou transferido.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conhecimento Explícito:</strong>
                <ul>
                  <li>
                    É o conhecimento que foi documentado e está disponível para
                    todos na organização, como em manuais, treinamentos e
                    procedimentos.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A grande dificuldade para as empresas é transformar o conhecimento
              tácito em explícito, o que permite que a organização tome decisões
              mais rapidamente e de forma mais assertiva.
            </p>
            <h4>Do Dado ao Conhecimento: Um Fluxo Contínuo</h4>
            <p>
              O conhecimento não surge do nada; ele é o resultado de um processo
              que começa com o <strong>dado</strong>. Esse fluxo, que também
              pode ser chamado de <strong>Hierarquia da Informação</strong>,{" "}
              funciona da seguinte forma:
            </p>
            <ol>
              <li>
                <strong>Dado:</strong>
                <ul>
                  <li>
                    É a unidade mais básica, um fato bruto e sem contexto.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Informação:</strong>
                <ul>
                  <li>
                    O dado é organizado, processado e recebe um contexto,
                    tornando-se útil.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Conhecimento:</strong>
                <ul>
                  <li>
                    A informação é usada para gerar insights e apoiar a tomada
                    de decisões.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Esse processo não é unilateral. O conhecimento gerado pode, por
              sua vez, demandar novas informações, que exigem a coleta de novos
              dados. Isso cria um <strong>ciclo contínuo</strong> de aprendizado
              e crescimento para a organização.
            </p>
            <p>
              O bom uso das informações, baseado na experiência, torna esse
              ciclo mais eficiente, permitindo que a empresa evolua e se adapte
              constantemente às demandas do mercado.
            </p>
          </div>
          <div>
            <h3>A Informação na Sociedade Atual</h3>
            <p>
              Vivemos na <strong>Sociedade da Informação</strong>, em transição
              para a <strong>Sociedade do Conhecimento e da Colaboração</strong>
              . Esse cenário exige que as empresas gerenciem um volume cada vez
              maior de dados para se manterem competitivas.
            </p>
            <p>
              Tanto indivíduos quanto organizações geram e utilizam um fluxo
              constante de informações em todas as suas atividades, seja em
              compras online, redes sociais ou nos negócios. A gestão eficiente
              e segura dessas informações é fundamental para o sucesso.
            </p>
            <h4>Diferença entre Técnica e Tecnologia</h4>
            <p>
              Embora frequentemente usados como sinônimos,{" "}
              <strong>técnica e tecnologia</strong> têm significados distintos:
            </p>
            <ul>
              <li>
                <strong>Técnica:</strong>
                <ul>
                  <li>
                    É a forma de fazer algo, um conjunto de atividades ou
                    métodos usados para manipular informações e alcançar um
                    resultado.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tecnologia:</strong>
                <ul>
                  <li>
                    É a <strong>técnica evoluída e sistematizada</strong>. É um
                    conjunto organizado de conhecimentos e ferramentas que são
                    aplicados na produção e comercialização de produtos e
                    serviços.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O Papel e o Valor dos Sistemas de Informação</h4>
            <p>
              Um <strong>sistema de informação</strong> é um conjunto de pessoas
              e processos, com ou sem o apoio de tecnologia, que trabalham
              juntos para coletar, armazenar e processar dados, transformando-os
              em informação útil para a tomada de decisões.
            </p>
            <p>O ciclo de um sistema de informação é o seguinte:</p>
            <ol>
              <li>
                <strong>Entrada:</strong>
                <ul>
                  <li>Dados brutos são inseridos.</li>
                </ul>
              </li>
              <li>
                <strong>Processamento:</strong>
                <ul>
                  <li>Os dados são organizados e analisados.</li>
                </ul>
              </li>
              <li>
                <strong>Saída:</strong>
                <ul>
                  <li>A informação relevante é gerada e disponibilizada.</li>
                </ul>
              </li>
            </ol>
            <h4>Qualidades e Valor da Informação</h4>
            <p>
              Para ser realmente valiosa, a informação precisa ter{" "}
              <strong>qualidade, clareza e precisão</strong>. Quando isso
              acontece, ela se torna um fator de apoio para a empresa de quatro
              formas:
            </p>
            <ul>
              <li>
                <strong>Fator de apoio à decisão:</strong>
                <ul>
                  <li>Reduz a incerteza e o risco na tomada de decisões.</li>
                </ul>
              </li>
              <li>
                <strong>Fator de produção:</strong>
                <ul>
                  <li>
                    Serve como base para a criação de novos produtos ou a
                    melhoria dos existentes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fator de sinergia:</strong>
                <ul>
                  <li>
                    Pode ser compartilhada entre diferentes departamentos para
                    melhorar a comunicação e o trabalho em equipe.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fator de comportamento:</strong>
                <ul>
                  <li>
                    Influencia o comportamento de pessoas tanto dentro quanto
                    fora da organização.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Em um mercado dinâmico, as empresas, por serem sistemas abertos,
              precisam usar sistemas de informação para "ouvir" o mercado e se
              adaptar rapidamente. A flexibilidade e a capacidade de usar a
              informação de forma estratégica são cruciais para manter a
              competitividade.
            </p>
            <h4>As Três Dimensões de um Sistema de Informação</h4>
            <p>
              Para que um sistema de informação seja eficaz, ele deve ser
              planejado e implementado considerando três dimensões principais,
              além de respeitar a estrutura hierárquica (estratégico, tático e
              operacional) da organização:
            </p>
            <ul>
              <li>
                <strong>Dimensão Organizacional:</strong>
                <ul>
                  <li>
                    O sistema precisa respeitar a{" "}
                    <strong>cultura e as regras da empresa</strong>. Ele deve
                    fornecer informações específicas e seguras para cada nível
                    hierárquico, garantindo que os dados sejam usados de forma
                    apropriada e alinhada com os valores da organização.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dimensão Tecnológica:</strong>
                <ul>
                  <li>
                    Envolve a escolha do <strong>hardware e software</strong>{" "}
                    adequados para processar as informações de forma eficiente.
                    A tecnologia deve ser robusta o suficiente para suportar o
                    volume de dados e o processamento necessários para o
                    funcionamento da empresa.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dimensão das Pessoas:</strong>
                <ul>
                  <li>
                    Foca nos <strong>colaboradores e clientes</strong>. O
                    sistema deve atender às necessidades dos clientes e ser
                    fácil de usar. Os colaboradores precisam ter as habilidades
                    e o treinamento necessários para desenvolver e operar o
                    sistema de forma eficaz.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Tipos de Sistemas de Informação</h4>
            <p>
              Os sistemas de informação podem ser classificados de acordo com o
              nível hierárquico que eles atendem e o tipo de informação que
              processam:
            </p>
            <ul>
              <li>
                <strong>
                  Sistema de Informação Operacional (ou de Processamento de
                  Transações):
                </strong>
                <ul>
                  <li>
                    <strong>Função:</strong>
                    <ul>
                      <li>
                        Cuida das operações rotineiras e transações básicas do
                        dia a dia.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Objetivo:</strong>
                    <ul>
                      <li>
                        Coletar, processar e armazenar dados operacionais para
                        uso posterior pelos níveis superiores.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sistema de Informação Gerencial:</strong>
                <ul>
                  <li>
                    <strong>Função:</strong>
                    <ul>
                      <li>
                        Apoia o nível gerencial. Transforma dados do nível
                        operacional em relatórios pré-definidos (diários,
                        semanais, etc.) para facilitar a tomada de decisão.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Características:</strong>
                    <ul>
                      <li>
                        Ajuda a identificar áreas de melhoria e a prever o
                        futuro com base no desempenho passado.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sistema de Apoio à Decisão (SAD):</strong>
                <ul>
                  <li>
                    <strong>Função:</strong>
                    <ul>
                      <li>
                        Apoia o nível estratégico. Possui um poder de análise
                        maior, permitindo interação com os usuários para criar
                        modelos e solucionar problemas complexos.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Função:</strong>
                    <ul>
                      <li>
                        Processa grandes volumes de dados (internos e externos)
                        e frequentemente utiliza ferramentas como{" "}
                        <strong>Business Intelligence</strong> (BI) para
                        fornecer informações inteligentes e aprofundadas, que
                        auxiliam nas decisões mais importantes.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Como a TI Apoia os Sistemas de Informação</h4>
            <p>
              A <strong>Tecnologia da Informação (TI)</strong> é fundamental
              para a gestão da informação nas empresas. Ela fornece as
              ferramentas e soluções de computação necessárias para{" "}
              <strong>
                produzir, armazenar, transmitir, proteger e usar a informação
              </strong>
              . Sua principal função é garantir que as informações da
              organização sejam gerenciadas de forma eficiente.
            </p>
            <p>
              O grande desafio de um sistema de informação é fornecer as
              informações certas para todos os níveis hierárquicos de uma
              empresa (operacional, tático e estratégico). Uma das soluções para
              essa complexidade é o uso de <strong>sistemas integrados</strong>,
              que centralizam e facilitam o fluxo de informações entre os
              diferentes departamentos.
            </p>
            <p>Os três sistemas integrados mais comuns são:</p>
            <ul>
              <li>
                <strong>ERP (Enterprise Resource Planning):</strong>
                <ul>
                  <li>
                    Integra o planejamento e o gerenciamento de todos os
                    recursos da empresa. Ele é dividido em módulos que se
                    comunicam para facilitar o fluxo de informações em áreas
                    como finanças, produção e recursos humanos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>CRM (Customer Relationship Management):</strong>
                <ul>
                  <li>
                    Focado na gestão do relacionamento com o cliente. Ele
                    consolida informações para ajudar a conquistar e fidelizar
                    clientes, geralmente utilizando dados de outros sistemas,
                    como o ERP.
                  </li>
                </ul>
              </li>
              <li>
                <strong>SCM (Supply Chain Management):</strong>
                <ul>
                  <li>
                    Gerencia a cadeia de suprimentos. Ele apoia a logística da
                    empresa, desde o recebimento de matérias-primas até a
                    entrega do produto final ao cliente.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Sistemas de Informação na Era Digital</h4>
            <p>
              A vida moderna e os negócios evoluíram rapidamente com o avanço da
              tecnologia, tornando o uso de sistemas de informação na era
              digital uma necessidade. A maioria das transações e comunicações
              acontece online, o que exige que as empresas adaptem seus sistemas
              para lidar com essa nova realidade.
            </p>
            <p>
              Para facilitar a troca de informações, as organizações utilizam
              diferentes tipos de redes, cada uma com características
              específicas:
            </p>
            <ul>
              <li>
                <strong>Intranet:</strong>
                <ul>
                  <li>
                    É uma rede privada, exclusiva para os membros de uma
                    organização. Ela utiliza as tecnologias da internet, mas não
                    é acessível ao público. Seu objetivo é aumentar a
                    produtividade, permitindo que os colaboradores transfiram
                    conhecimento e acessem informações rapidamente, mesmo em
                    escritórios remotos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Extranet:</strong>
                <li>
                  Conecta a intranet de uma empresa à de seus clientes,
                  fornecedores e parceiros de negócio. É uma rede segura,
                  projetada para a troca de informações estratégicas de forma
                  rápida e controlada, já que pessoas de fora não têm acesso
                  facilitado.
                </li>
              </li>
              <li>
                <strong>Internet:</strong>
                <ul>
                  <li>
                    A rede mundial e pública de computadores. Por ser aberta,
                    exige atenção redobrada com a segurança das informações que
                    são obtidas ou transmitidas por ela.
                  </li>
                </ul>
              </li>
              <p>
                A ascensão do comércio eletrônico e dos negócios digitais tornou
                os sistemas de informação mais complexos. Eles agora precisam de
                uma arquitetura robusta, grande capacidade de processamento e,
                acima de tudo, foco na <strong>segurança dos dados</strong>. A
                <strong>Tecnologia da Informação (TI)</strong> se tornou
                indispensável para garantir que esses sistemas sejam eficientes
                e adequados às demandas do mercado.
              </p>
            </ul>
          </div>
          <div>
            <h3>A Gestão da Informação</h3>
            <p>
              A gestão da informação é um processo crucial para as empresas na
              <strong>Sociedade da Informação</strong>, onde o volume de dados
              cresce exponencialmente. Entender a informação como um{" "}
              <strong>ativo valioso</strong> — assim como recursos financeiros
              ou humanos — é o primeiro passo para garantir a competitividade de
              uma organização.
            </p>
            <h4>O que é Gestão da Informação?</h4>
            <p>
              A <strong>Gestão da Informação</strong> é um processo
              organizacional que envolve a coleta, o armazenamento, a
              organização e a distribuição de informações de forma eficiente.
              Seu principal objetivo é garantir que dados relevantes e de fácil
              acesso estejam disponíveis para apoiar a{" "}
              <strong>tomada de decisão</strong> em todos os níveis da empresa
            </p>
            <p>
              Para ser eficaz, a gestão da informação depende de três pilares:
            </p>
            <ul>
              <li>
                <strong>Rotina:</strong>
                <ul>
                  <li>Um processo bem-definido e consistente.</li>
                </ul>
              </li>
              <li>
                <strong>Pessoas:</strong>
                <ul>
                  <li>
                    Profissionais especializados e treinados, comprometidos em
                    seguir as regras de armazenamento e segurança.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Ferramentas:</strong>
                <ul>
                  <li>
                    Tecnologias adequadas para lidar com grandes volumes de
                    dados.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              O <strong>fluxo da informação</strong> dentro de uma organização é
              único e composto por pessoas, fontes de dados, tecnologias e
              produtos. Mapear esse fluxo ajuda a prever problemas e a garantir
              que a informação seja obtida, distribuída e utilizada de forma
              correta e segura.
            </p>
            <p>
              No contexto de <strong>Tecnologia da Informação (TI)</strong>, um
              profissional com conhecimento em gestão da informação é capaz de
              catalogar, organizar e distribuir grandes volumes de dados, o que
              o torna um ativo indispensável para qualquer negócio.
            </p>
            <h4>Gestão adequada das informações</h4>
            <p>
              Para que uma empresa tenha sucesso, a{" "}
              <strong>Gestão da Informação</strong> é fundamental. Não basta
              apenas ter os dados; é preciso gerenciá-los de forma estratégica
              para transformá-los em um recurso valioso.
            </p>
            <h4>As Fases da Gestão da Informação</h4>
            <p>
              O processo de gerenciar informações é um ciclo contínuo, com
              várias fases que se complementam. A seguir, uma visão das etapas
              essenciais para uma gestão eficiente:
            </p>
            <ol>
              <li>
                <strong>Determinação das Exigências de Informação: </strong>
                <ul>
                  <li>
                    A primeira fase é identificar quais informações são
                    realmente necessárias para cada área da empresa. É preciso
                    entender o negócio e o que é relevante para clientes,
                    fornecedores e concorrentes. Uma análise criteriosa ajuda a
                    focar nas informações essenciais, evitando o excesso de
                    dados.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Coleta da Informação:</strong>
                <ul>
                  <li>
                    As informações podem vir de fontes internas (dentro da
                    empresa) ou externas. É importante que as pessoas sejam
                    responsáveis por obter e compartilhar informações de forma
                    direta e confiável, para que não se perca tempo procurando
                    dados que já existem.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Qualidade da Informação:</strong>
                <ul>
                  <li>
                    Para que a informação seja útil, ela deve ter alta
                    qualidade. Problemas como falta de exatidão, formatos
                    inadequados ou baixa confiabilidade podem levar a decisões
                    erradas. A informação precisa ser clara, precisa e fácil de
                    acessar no momento em que é necessária.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Uso e Adaptação:</strong>
                <ul>
                  <li>
                    A gestão da informação não é um processo estático. As
                    necessidades de informação mudam constantemente, seja por
                    fatores econômicos, sociais ou de mercado. É crucial que a
                    empresa consiga se adaptar e identificar novas fontes e
                    tipos de informação para se manter competitiva.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              O gerenciamento adequado das informações transforma dados em um
              ativo que apoia as decisões da empresa, permitindo que ela atinja
              seus objetivos e se adapte às mudanças do mercado.
            </p>
            <h4>Organização e Armazenamento da Informação</h4>
            <p>
              A agilidade de uma empresa na resposta às necessidades do mercado
              depende diretamente da forma como suas informações são organizadas
              e armazenadas. Essa é uma fase crítica da{" "}
              <strong>Gestão da Informação</strong>, que envolve a estruturação
              de um banco de dados para ser eficiente e escalável.
            </p>
            <h4>Modelagem de Dados e Banco de Dados</h4>
            <p>
              Um <strong>banco de dados</strong> é uma coleção de arquivos
              relacionados que armazena informações sobre pessoas, lugares ou
              coisas. A <strong>modelagem de dados</strong> é o processo de
              planejar como esses dados serão organizados, o que garante que a
              informação seja flexível e compreensível para todos os usuários.
            </p>
            <p>A modelagem de dados envolve definir:</p>
            <ul>
              <li>
                <strong>Objetos de Dados: </strong>
                <ul>
                  <li>
                    Representam os dados em um nível conceitual. Por exemplo,
                    "dimensão" é um objeto que pode conter dados de largura,
                    altura e profundidade.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Atributos de Dados: </strong>
                <ul>
                  <li>
                    São as propriedades ou características de um objeto. Por
                    exemplo, os atributos de um "veículo" poderiam ser marca,
                    modelo e cor. É crucial definir o tipo ou formato do dado
                    (numérico, decimal ou alfanumérico).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Relacionamentos:</strong>
                <ul>
                  <li>
                    A forma como os objetos de dados se conectam. Um
                    relacionamento pode ser criado entre um objeto "pessoa" e um
                    objeto "veículo" para identificar o proprietário. A{" "}
                    <strong>cardinalidade</strong> define a quantidade de
                    ocorrências possíveis nessa relação (por exemplo, uma pessoa
                    pode ter um ou mais veículos).
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              A padronização e a conscientização dos usuários sobre as regras de
              modelagem são essenciais para que todos possam usar a informação
              de maneira consistente. Entender a fundo o negócio é o primeiro
              passo para modelar os dados de forma adequada e garantir que eles
              atendam às necessidades da empresa.
            </p>
            <h4>Distribuição e Utilização da Informação</h4>
            <p>
              Depois de ser coletada e organizada, a informação precisa ser
              distribuída e utilizada de forma estratégica. A informação pode
              ser vista tanto como um <strong>produto</strong> quanto como um{" "}
              <strong>serviço</strong>.
            </p>
            <ul>
              <li>
                <strong>Informação como Produto:</strong>
                <ul>
                  <li>
                    É a informação produzida, armazenada e avaliada por sua
                    exatidão e integridade.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Informação como Serviço: </strong>
                <ul>
                  <li>
                    O foco está na facilidade de acesso, no formato e na
                    possibilidade de se relacionar com outras informações.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Uma distribuição bem-sucedida garante que a informação chegue à
              pessoa certa, no local certo e no momento certo.
            </p>
            <h4>Segurança e Análise</h4>
            <p>
              Para que o uso da informação agregue valor, é fundamental que ela
              esteja acessível de forma fácil e segura. A segurança da
              informação é crucial para evitar que dados confidenciais sejam
              acessados por pessoas não autorizadas.
            </p>
            <p>O uso correto da informação, por sua vez, permite:</p>
            <ul>
              <li>
                <strong>Reduzir incertezas:</strong>
                <ul>
                  <li>Ajudando na tomada de decisões.</li>
                </ul>
              </li>
              <li>
                <strong>Construir conhecimento:</strong>
                <ul>
                  <li>Aumentando a inteligência competitiva da empresa.</li>
                </ul>
              </li>
            </ul>
            <p>
              Essa análise e interpretação dos dados são a base de conceitos
              como o <strong>Business Intelligence (BI)</strong>, que transforma
              informações em conhecimento valioso para o negócio.
            </p>
            <h4>Comportamento Adaptativo na Gestão da Informação</h4>
            <p>
              O <strong>comportamento adaptativo</strong> na gestão da
              informação é a capacidade de uma organização se ajustar
              rapidamente às novas necessidades de dados e informações. Para que
              isso seja possível, o modelo de dados precisa ser flexível e
              permitir mudanças.
            </p>
            <p>Para garantir essa flexibilidade, é essencial:</p>
            <ul>
              <li>
                <strong>Modelo de Dados Flexível:</strong>
                <ul>
                  <li>
                    O projeto do banco de dados deve ser construído de forma que
                    permita a fácil criação de novas tabelas, atributos e
                    relacionamentos. Quanto mais independentes forem os objetos
                    de dados, mais fácil será para o sistema evoluir.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Padronização e Reúso:</strong>
                <ul>
                  <li>
                    Manter nomes e conceitos padronizados evita a duplicação de
                    informações. Além disso, planejar o{" "}
                    <strong>reúso de dados</strong> é fundamental. Armazenar
                    informações na forma mais básica e granular possível, como
                    registrar cada venda individualmente em vez de apenas o
                    total mensal, permite que esses dados sejam usados para
                    gerar uma infinidade de novas informações e relatórios no
                    futuro.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Armazenar dados básicos de forma clara e direta facilita a
              adaptação da empresa, permitindo que ela responda rapidamente a
              mudanças no mercado e nas necessidades do negócio.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default GestaoDaInformacao;
