import { useState } from "react";

const CriacaoWebSite = () => {
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
        <h2>CRIAÇÃO DE WEBSITE</h2>
        <img src="/seta.png" onClick={visualizar} className={classeGirarImg} />
      </div>
      {abrir && (
        <>
          <div>
            <h3>Conceitos Essenciais para Criação de Projetos Web</h3>
            <p>
              A{" "}
              <strong>
                função primordial de um site é informar e ser útil
              </strong>
              , priorizando a <strong>experiência do usuário</strong> (UX) sobre
              a estética. Um bom projeto começa com o usuário em mente.
            </p>
            <p>
              Para garantir isso, o primeiro passo é a elaboração de um briefing
              detalhado. Este documento deve definir claramente:
            </p>
            <ul>
              <li>O que o sistema DEVE fazer.</li>
              <li>O que o sistema NÃO PODE fazer.</li>
            </ul>
            <h4>Foco do Projeto x Finalidade</h4>
            <p>
              A finalidade do projeto determina quais elementos devem ser
              priorizados.
            </p>
            <ul>
              <li>
                <strong>Intranet:</strong>
                <ul>
                  <li>
                    O mais importante é que as informações internas e mais
                    acessadas estejam facilmente acessíveis. O layout é menos
                    crucial.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Website Institucional:</strong>
                <ul>
                  <li>
                    A prioridade é a beleza e o layout, que devem passar uma
                    imagem profissional e atrativa da empresa, além de fornecer
                    todas as informações necessárias.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Site de Vendas (E-commerce):</strong>
                <ul>
                  <li>
                    O foco principal é o produto e seu preço. A ordem de
                    importância para o usuário é:
                    <ol>
                      <li>Preço do produto.</li>
                      <li>Informações detalhadas sobre o produto.</li>
                      <li>Confiabilidade da loja.</li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Site de Notícias:</strong>
                <ul>
                  <li>
                    A prioridade é a <strong>data das reportagens</strong>, com
                    as mais recentes aparecendo primeiro. É essencial a inclusão
                    de <strong>links</strong> que permitam ao usuário
                    aprofundar-se no tema.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Mapa Mental: Por que usar?</h4>
            <p>
              O <strong>mapa mental</strong> é o esqueleto de um projeto web,
              uma representação visual da sua{" "}
              <strong>estrutura e hierarquia</strong>. Ele serve como uma
              fundação sólida para o site.
            </p>
            <ul>
              <li>
                <strong>Objetivo Principal:</strong>
                <ul>
                  <li>
                    Explicar o que estará em cada parte do site, definindo o que
                    é mais e menos importante (hierarquia).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Vantagem:</strong>
                <ul>
                  <li>
                    Evita retrabalho e frustração. Passar tempo no planejamento
                    inicial (10, 20, 30 horas) é crucial para evitar grandes
                    refações no futuro.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Como Fazer um Mapa Mental</h4>
            <p>
              A regra principal é pensar do mais geral para o mais específico.
            </p>
            <ol>
              <li>
                <strong>Geral:</strong> Comece com o que “todo mundo precisa
                ver” no site.
              </li>
              <li>
                <strong>Específico:</strong> Prossiga para o que apenas poucas
                pessoas precisariam ver.
              </li>
            </ol>
            <p>
              Essa hierarquia bem definida garante um projeto sem grandes dores
              de cabeça.
            </p>
            <h4>Ferramentas: Papel vs. Digital</h4>
            <p>
              É possível fazer um mapa mental em papel ou em um software. Ambas
              as abordagens têm seus pontos fortes.
            </p>
            <ul>
              <li>
                <strong>Papel:</strong>
                <ul>
                  <li>Simples, requer apenas caneta e papel.</li>
                </ul>
              </li>
              <li>
                <strong>Digital:</strong>
                <ul>
                  <li>
                    Mais eficiente para revisões. Permite adicionar, remover e
                    realocar páginas facilmente. Além disso, softwares como{" "}
                    <strong>
                      Mind Manager, Mind Meister, Xmind, Free Mind, Free Plane
                      ou Coggle
                    </strong>{" "}
                    oferecem uma visualização clara para a equipe, clientes e
                    patrocinadores, facilitando a colaboração e o alinhamento.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>A Importância da Definição e Acordo</h4>
            <p>
              Um mapa mental bem elaborado deve mapear toda a hierarquia,
              incluindo os caminhos que o usuário pode percorrer.
            </p>
            <ul>
              <li>
                <strong>Garantia:</strong>
                <ul>
                  <li>
                    Com o mapa em mãos, todos os envolvidos (equipe, cliente,
                    chefes) podem opinar e concordar com a estrutura antes de
                    qualquer desenvolvimento.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dica Profissional:</strong>
                <ul>
                  <li>
                    Guarde os mapas e, se possível, peça para as pessoas{" "}
                    <strong>assinarem sua ciência</strong>. Isso protege você
                    contra mudanças de última hora sem compensação, caso o
                    cliente decida alterar a estrutura após o trabalho já ter
                    sido iniciado.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O que é e Por que a Responsividade é Essencial?</h4>
            <p>
              A <strong>responsividade</strong> é a capacidade de um site ser
              visualizado de forma interessante e funcional em dispositivos de
              tamanhos variados, especialmente em celulares. É um conceito
              fundamental porque a maioria dos acessos à internet hoje em dia
              acontece por meio de smartphones. No Brasil, cerca de 82,5% da
              população acessam sites via celular, tornando a responsividade
              obrigatória para alcançar o público.
            </p>
            <h4>Princípios de Design para Dispositivos Móveis</h4>
            <p>
              Devido ao espaço limitado das telas de smartphones, o design para
              responsividade deve focar no essencial:
            </p>
            <ul>
              <li>
                <strong>Foco no Conteúdo:</strong>
                <ul>
                  <li>
                    Priorize o conteúdo sobre a interface. Interfaces limpas e
                    minimalistas são mais eficazes em telas pequenas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Informação Crucial Primeiro:</strong>
                <ul>
                  <li>
                    Utilize o conceito de pirâmide invertida do jornalismo.
                    Posicione as informações mais importantes e um resumo
                    conciso no topo da página. Os usuários podem rolar para
                    baixo se quiserem mais detalhes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Layout Limpo e Simples: </strong>
                <ul>
                  <li>Use fundos neutros, como branco ou preto.</li>
                  <li>Evite designs complexos e cores em excesso.</li>
                  <li>
                    Garanta que os botões (clicáveis) sejam grandes o suficiente
                    para os dedos.
                  </li>
                  <li>
                    Prefira botões a links sublinhados para facilitar a
                    interação.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Layout Verticalizado:</strong>
                <ul>
                  <li>
                    Crie um design otimizado para a visualização vertical. Não
                    espere que o usuário vire o celular, a menos que o conteúdo
                    principal seja vídeo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Chamadas para Ação (CTAs):</strong>
                <ul>
                  <li>
                    Use CTAs ("Call-to-Action") como atalhos para que o usuário
                    realize rapidamente uma ação desejada (por exemplo: "Saiba
                    mais", "Ligue agora", "Comprar"). O CTA funciona como uma
                    ferramenta para guiar o usuário e alcançar os objetivos do
                    site.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Domínio: O Nome e Endereço do Site</h4>
            <p>
              O domínio é o nome do seu site (ex: exemplo.com.br) e é a primeira
              coisa a ser registrada antes de hospedar o conteúdo.
            </p>
            <h4>Dicas para Escolher um Bom Domínio:</h4>
            <ul>
              <li>
                <strong>Seja curto e direto:</strong>
                <ul>
                  <li>
                    Nomes com muitas letras são difíceis de lembrar e digitar.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Evite complicações: </strong>
                <ul>
                  <li>
                    Não use letras duplas, hífens, ou palavras que podem gerar
                    confusão ortográfica.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Considere a legalidade:</strong>
                <ul>
                  <li>
                    Verifique se o nome não é uma marca registrada ou nome
                    famoso, para evitar problemas jurídicos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Pense no Mobile:</strong>
                <ul>
                  <li>
                    A maioria dos acessos vem de celulares, então escolha um
                    nome <strong>fácil de digitar</strong> em um teclado de
                    smartphone.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Seja coerente com o público:</strong>
                <ul>
                  <li>
                    Use extensões (.br, .com) que reflitam a área de atuação da
                    sua empresa. Um domínio .com.br indica foco no Brasil,
                    enquanto apenas .com sugere um alcance global.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Como Registrar um Domínio:</h4>
            <ul>
              <li>
                No Brasil, o registro de domínios com a terminação .br é feito
                pelo registro.br, que é gerenciado pelo NIC.br.
              </li>
              <li>
                É necessário verificar a disponibilidade do nome e, se estiver
                livre, seguir os passos para registrá-lo em seu nome, informando
                seu CPF e outros dados. O registro é renovado anualmente.
              </li>
            </ul>
            <h4>Hospedagem: O Local Físico do Site</h4>
            <p>
              A <strong>hospedagem</strong> é o serviço que armazena os arquivos
              do seu site (textos, imagens, vídeos) em um servidor, tornando-o
              acessível na internet.
            </p>
            <ul>
              <li>
                <strong>Domínio vs. Hospedagem:</strong>
                <ul>
                  <li>
                    São duas coisas diferentes, embora muitas empresas ofereçam
                    ambos os serviços em um único pacote. O{" "}
                    <strong>domínio é o nome</strong>, e a{" "}
                    <strong>hospedagem é o "terreno"</strong> onde o site é
                    construído.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Contratando o Serviço:</strong>
                <ul>
                  <li>
                    Existem milhares de provedores de hospedagem. A escolha
                    depende das necessidades do seu projeto. É aconselhável
                    pesquisar e comparar preços, espaço de armazenamento,
                    funcionalidades e suporte oferecido por cada serviço antes
                    de tomar uma decisão.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>Interface</h3>
            <h4>Como Instalar o GIMP</h4>
            <ol>
              <li>
                <strong>Download:</strong>
                <ul>
                  <li>
                    O GIMP pode ser baixado pelo site oficial em{" "}
                    <strong>gimp.org/downloads</strong>. A forma mais simples é
                    pela Microsoft Store, o que pode levar um tempo
                    considerável.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Interface Inicial: </strong>
                <ul>
                  <li>Ao abrir, o GIMP exibe três janelas principais:</li>
                  <ul>
                    <li>
                      <strong>Caixa de Ferramentas:</strong>
                      <ul>
                        <li>Fica no lado esquerdo.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Janela Principal:</strong>
                      <ul>
                        <li>Onde as imagens são abertas.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Janelas de Encaixe:</strong>
                      <ul>
                        <li>Ficam no lado direito.</li>
                      </ul>
                    </li>
                  </ul>
                </ul>
              </li>
            </ol>
            <h4>Edição de Imagem: Ferramentas de seleção</h4>
            <p>
              A seleção é a base da edição, permitindo isolar partes específicas
              da imagem para modificação sem alterar o restante. As principais
              ferramentas de seleção são:
            </p>
            <ul>
              <li>
                <strong>Seleção Retangular/Elíptica:</strong>
                <ul>
                  <li>Para áreas com formas geométricas.</li>
                </ul>
              </li>
              <li>
                <strong>Seleção Livre (Laço):</strong>
                <ul>
                  <li>
                    Ideal para traçar contornos de formas irregulares com
                    precisão.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Seleção por Cor:</strong>
                <ul>
                  <li>Seleciona todos os pixels da mesma cor na imagem.</li>
                </ul>
              </li>
              <li>
                <strong>Seleção Contígua (Varinha Mágica):</strong>
                <ul>
                  <li>
                    Seleciona pixels com a mesma cor que estão próximos uns dos
                    outros.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Dica Essencial:</strong> A{" "}
              <strong>inversão de seleção</strong> é uma técnica poderosa. Após
              selecionar uma área (por exemplo, uma flor), você pode inverter a
              seleção para aplicar alterações em todo o <strong>fundo</strong>,
              exceto na área selecionada.
            </p>
            <h4>Manipulação de Imagem e Cores</h4>
            <p>
              O menu <strong>Imagem</strong> afeta a foto como um todo e
              permite:
            </p>
            <ul>
              <li>
                <strong>Cortar</strong> para remover partes indesejadas.
              </li>
              <li>
                <strong>Inverter</strong> para espelhar a imagem.
              </li>
              <li>
                <strong>Girar</strong>
              </li>
            </ul>
            <p>
              O menu <strong>Cores</strong> é fundamental para ajustes tonais e
              de luz:
            </p>
            <ul>
              <li>
                <strong>Temperatura:</strong>
                <ul>
                  <li>
                    Deixa a imagem mais <strong>quente</strong> (amarelada) ou
                    mais <strong>fria</strong> (azulada).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Matiz-Croma:</strong>
                <ul>
                  <li>Permite mudar as cores radicalmente.</li>
                </ul>
              </li>
              <li>
                <strong>Níveis:</strong>
                <ul>
                  <li>
                    Uma ferramenta crucial para calibrar a imagem. Use o
                    conta-gotas para áreas mais escuras e mais claras para
                    equilibrar o contraste e o brilho.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Camadas</h4>
            <p>
              As camadas são a chave para a criação de{" "}
              <strong>montagens</strong> e para trabalhar com múltiplos
              elementos em uma única imagem.
            </p>
            <ul>
              <li>
                Cada elemento (uma foto, um texto, um objeto) pode estar em sua
                própria camada, permitindo que seja{" "}
                <strong>movido, redimensionado e transformado</strong>{" "}
                independentemente dos outros.
              </li>
              <li>
                Para criar uma montagem, basta{" "}
                <strong>selecionar e copiar</strong> um elemento de uma imagem e{" "}
                <strong>colar</strong> na outra. Uma nova camada será criada
                automaticamente.
              </li>
              <li>
                A janela de <strong>Camadas</strong> (geralmente no lado direito
                da tela) permite organizar, visualizar e manipular todas as
                camadas da sua composição.
              </li>
            </ul>
            <h4>Filtros</h4>
            <p>
              Os filtros são uma ferramenta poderosa para modificar
              drasticamente a aparência de uma imagem. Ao contrário da crença
              popular, eles existem há décadas, muito antes do Instagram.
            </p>
            <ul>
              <li>
                <strong>Acesso:</strong>
                <ul>
                  <li>
                    Encontrados no <strong>menu Filtros</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Variedade:</strong>
                <ul>
                  <li>
                    Os filtros estão agrupados em estilos (por exemplo,
                    "Artísticos," "Distorções," etc.), oferecendo uma ampla gama
                    de efeitos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Aplicação:</strong>
                <ul>
                  <li>
                    Um filtro pode ser aplicado a toda a imagem ou apenas a uma
                    <strong>área selecionada</strong>, permitindo um controle
                    criativo preciso.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Dica de Essencial:</strong> A melhor maneira de aprender
              sobre filtros é a <strong>experimentação</strong>. Use uma imagem
              de teste e aplique diferentes filtros para entender o que cada um
              faz, como os de "Aquarela" ou "Gravura".
            </p>
            <h4>Processo de Aprendizagem e Maestria</h4>
            <p>
              A melhor forma de dominar o GIMP ou qualquer outra ferramenta de
              edição é através da <strong>prática contínua</strong>.
            </p>
            <ul>
              <li>
                <strong>Exploração:</strong>
                <ul>
                  <li>
                    Não tenha medo de <strong>testar, brincar e fuçar</strong>{" "}
                    nos menus e nas ferramentas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Benefício:</strong>
                <ul>
                  <li>
                    O GIMP é uma ferramenta gratuita, o que significa que você
                    pode usá-la livremente em qualquer contexto profissional ou
                    pessoal.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Desenvolvimento:</strong>
                <ul>
                  <li>
                    Quanto mais tempo você dedica à ferramenta, mais intuitivo e
                    rápido se torna o seu processo de edição, levando à
                    <strong>maestria</strong>.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default CriacaoWebSite;
