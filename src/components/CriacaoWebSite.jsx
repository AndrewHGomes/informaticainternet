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
            <h3>Introdução à Criação de Projetos Web</h3>
            <ul>
              <li>
                <strong>Objetivo:</strong>
                <ul>
                  <li>
                    O estudo da criação de projetos web, focando em teoria e
                    prática, incluindo o uso de softwares e manipulação de
                    imagens, áudio e vídeo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Função Primordial de um Site:</strong>
                <ul>
                  <li>
                    <strong>Informar:</strong>
                    <ul>
                      <li>Mais importante que a estética.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Usabilidade: </strong>
                    <ul>
                      <li>
                        Deve ser fácil de usar, oferecendo uma boa experiência
                        para o usuário.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Importância do Briefing:</strong>
                <ul>
                  <li>
                    <strong>O que é:</strong>
                    <ul>
                      <li>
                        Documento que define o que o sistema deve e não deve
                        fazer.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Para que serve:</strong>
                    <ul>
                      <li>
                        Garante que o projeto atenda às necessidades do usuário,
                        pensando na sua experiência.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tipos de Websites e suas Prioridades:</strong>
                <ul>
                  <li>
                    <strong>Intranet:</strong>
                    <ul>
                      <li>
                        Foco na acessibilidade das informações internas mais
                        usadas. O layout é secundário.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Website Institucional:</strong>
                    <ul>
                      <li>
                        Foco na beleza e na quantidade de informações para
                        cativar o visitante e transmitir credibilidade.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Site de Vendas:</strong>
                    <ul>
                      <li>
                        Foco em produto e preço. A prioridade é mostrar
                        informações detalhadas do produto, preço e passar
                        confiabilidade da loja.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Site de Notícias:</strong>
                    <ul>
                      <li>
                        Foco na atualização. O mais novo deve aparecer primeiro.
                        Deve permitir o aprofundamento das notícias por meio de
                        links.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Mapa Mental</h4>
            <ul>
              <li>
                <strong>O que é:</strong>
                <ul>
                  <li>
                    Um <strong>esqueleto</strong> ou estrutura hierárquica do
                    site. Ele define as principais partes, a relação entre elas
                    e o que estará em cada lugar.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Quando fazer:</strong>
                <ul>
                  <li>
                    Depois de ter um <strong>briefing</strong> completo e
                    entender as necessidades do usuário e do projeto.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Como fazer:</strong>
                <ul>
                  <li>Pode ser feito em papel ou software.</li>
                  <li>
                    Gaste o tempo necessário para fazê-lo bem, pois ele é a{" "}
                    <strong>fundação do projeto</strong>.
                  </li>
                  <li>
                    Um mapa mental mal feito leva a retrabalho e frustração.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Princípio de construção:</strong>
                <ul>
                  <li>
                    <strong>Pense do mais geral para o mais específico</strong>.
                  </li>
                  <li>
                    Comece com o que é mais importante e visível ("o que todo
                    mundo precisa ver").
                  </li>
                  <li>
                    Vá detalhando para o que é menos importante ou específico
                    ("o que só pouquíssimas pessoas precisam ver").
                  </li>
                </ul>
              </li>
              <li>
                <strong>Objetivo:</strong>
                <ul>
                  <li>
                    Ter uma hierarquia bem definida desde o início para evitar
                    problemas no desenvolvimento.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Mapa Mental Digital</h4>
            <ul>
              <li>
                <strong>Vantagem sobre o papel:</strong>
                <ul>
                  <li>
                    Permite <strong>editar, rearranjar e realocar</strong> as
                    partes do mapa sem bagunçar o projeto.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Ferramentas:</strong>
                <ul>
                  <li>
                    Existem softwares pagos (Mind Manager, Mind Meister, Xmind)
                    e gratuitos (Free Mind, Free Plane, Coggle). O importante é
                    saber utilizá-los.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Benefícios:</strong>
                <ul>
                  <li>
                    <strong>Visualização:</strong>
                    <ul>
                      <li>
                        A equipe de desenvolvimento e stakeholders (clientes,
                        chefes) podem visualizar a estrutura do site antes de
                        começar a codificar.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Hierarquia e Caminhos do Usuário:</strong>
                    <ul>
                      <li>
                        Define de forma clara a hierarquia do site, a ligação
                        entre as páginas e os possíveis caminhos que o usuário
                        pode seguir.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Evita Retrabalho:</strong>
                    <ul>
                      <li>
                        Permite que os interessados discutam e concordem com a
                        estrutura antes do desenvolvimento, evitando grandes
                        mudanças após o trabalho estar pronto.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dica Importante:</strong>
                <ul>
                  <li>
                    <strong>Documentação:</strong>
                    <ul>
                      <li>Mantenha os mapas mentais guardados.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Assinatura:</strong>
                    <ul>
                      <li>
                        Peça para os clientes ou chefes assinarem o documento
                        para atestar que eles concordam com a estrutura. Isso
                        protege o desenvolvedor, garantindo que qualquer mudança
                        futura no escopo exija mais tempo ou pagamento
                        adicional.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Responsividade</h4>
            <p>
              A maior parte do acesso à internet hoje é feita por meio de
              <strong>smartphones</strong>. No Brasil, há mais de 210 milhões de
              conexões via celular. Por isso, a <strong>responsividade</strong>{" "}
              (a capacidade de um site se adaptar a diferentes telas) é crucial.
            </p>
            <h4>Pontos-chave para um design responsivo:</h4>
            <ul>
              <li>
                <strong>Espaço é limitado:</strong>
                <ul>
                  <li>
                    A tela do celular é pequena. Botões devem ser grandes o
                    suficiente para os dedos, mas o design deve ser eficiente.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Foco no conteúdo:</strong>
                <ul>
                  <li>
                    Priorize o conteúdo sobre a interface. Aplicativos populares
                    como Instagram e WhatsApp são exemplos disso.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Pirâmide invertida:</strong>
                <ul>
                  <li>
                    Apresente as informações mais importantes primeiro (resumo
                    no topo), seguindo a lógica jornalística.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Layout limpo:</strong>
                <ul>
                  <li>
                    Use fundos simples (branco ou preto) e mantenha os botões
                    clicáveis e visíveis, evitando links sublinhados que são
                    menos intuitivos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Layout vertical:</strong>
                <ul>
                  <li>
                    Desenvolva o site para ser visualizado na vertical, a menos
                    que o conteúdo principal seja vídeo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Call-to-Action (CTA):</strong>
                <ul>
                  <li>
                    Utilize "chamadas para ação" claras (ex: "Clique aqui",
                    "Saiba mais") para guiar o usuário de forma rápida e direta.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Domínio e Hospedagem</h4>
            <p>
              Antes de colocar um site no ar, você precisa de um{" "}
              <strong>domínio</strong> (o nome do site) e{" "}
              <strong>hospedagem</strong> (o serviço que o mantém online).
            </p>
            <h4>Domínio:</h4>
            <ul>
              <li>
                <strong>Escolha do nome:</strong>
                <ul>
                  <li>Curto e fácil de lembrar.</li>
                  <li>Evite letras duplas, hífens e caracteres incomuns.</li>
                  <li>
                    Deve ser <strong>mobile-friendly</strong>, ou seja, fácil de
                    digitar em celulares.
                  </li>
                  <li>Não use nomes protegidos por direitos autorais.</li>
                </ul>
              </li>
              <li>
                <strong>Registro:</strong>
                <ul>
                  <li>
                    No Brasil, o registro de domínios com final .br é feito pelo
                    site <strong>registro.br</strong>.
                  </li>
                  <li>
                    Você verifica a disponibilidade do nome e, se estiver livre,
                    pode registrá-lo por um valor anual.
                  </li>
                  <li>
                    O registro.br é um órgão governamental, diferente da
                    hospedagem.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Hospedagem:</h4>
            <ul>
              <li>
                <strong>O que é:</strong>
                <ul>
                  <li>
                    É o serviço que armazena os arquivos do seu site para que
                    ele possa ser acessado na internet.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Contratação:</strong>
                <ul>
                  <li>Existem inúmeros serviços de hospedagem.</li>
                  <li>
                    Pesquise preços, espaço de armazenamento, funcionalidades e
                    suporte técnico.
                  </li>
                  <li>
                    Algumas empresas oferecem domínio e hospedagem em um pacote,
                    mas são serviços distintos.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>Interface</h3>
            <h4>Introdução ao GIMP</h4>
            <p>
              O GIMP (Gnu Image Manipulation) é um software de edição de imagens
              <strong>gratuito e de código aberto</strong>. É uma ótima
              ferramenta para quem quer começar a editar fotos sem ter que pagar
              por licenças.
            </p>
            <h4>Como instalar e abrir:</h4>
            <ol>
              <li>
                Acesse o link <strong>gimp.org/downloads/</strong>.
              </li>
              <li>
                Clique em <strong>Microsoft Store</strong> para baixar e
                instalar.
              </li>
              <li>O processo de download e instalação pode levar um tempo.</li>
              <li>
                Após a instalação, abra o programa. Ele inicia sem nenhuma
                imagem aberta.
              </li>
              <li>
                Para abrir uma imagem, vá em Arquivo &gt; Abrir. Se quiser ver a
                pré-visualização, clique em "clique para criar
                pré-visualização".
              </li>
            </ol>
            <h4>A interface do GIMP:</h4>
            <ul>
              <li>
                O GIMP possui uma <strong>janela de ferramentas</strong> no lado
                esquerdo.
              </li>
              <li>
                No lado direito, há <strong>janelas de encaixe</strong> com
                outras funcionalidades.
              </li>
              <li>
                Ao selecionar uma ferramenta, suas opções aparecem logo abaixo
                da caixa de ferramentas.
              </li>
              <li>
                Após abrir uma imagem, todos os menus são ativados. Cada menu
                tem funções específicas:
                <ul>
                  <li>
                    <strong>Arquivo:</strong>
                    <ul>
                      <li>Salvar, exportar, imprimir.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Editar:</strong>
                    <ul>
                      <li>Funções como copiar, colar e preferências.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Selecionar:</strong>
                    <ul>
                      <li>Ferramentas de seleção.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Visualizar:</strong>
                    <ul>
                      <li>Opções de visualização da imagem.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Imagem:</strong>
                    <ul>
                      <li>
                        Propriedades gerais da imagem (tamanho, tipo de cor).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Camada:</strong>
                    <ul>
                      <li>
                        Gerencia as camadas da imagem, essencial para
                        composições complexas.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cores:</strong>
                    <ul>
                      <li>
                        Ajustes de cores para a imagem inteira ou partes dela.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Ferramentas:</strong>
                    <ul>
                      <li>
                        Outra forma de acessar as ferramentas do lado esquerdo.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Filtros:</strong>
                    <ul>
                      <li>Diversos filtros para aplicar na imagem.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Janelas:</strong>
                    <ul>
                      <li>Gerencia as janelas do programa.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Ajuda:</strong>
                    <ul>
                      <li>Suporte e tutoriais.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Ferramentas de Seleção no GIMP</h4>
            <p>
              A <strong>seleção</strong> é uma das tarefas mais comuns na edição
              de imagens, permitindo isolar partes de uma foto para que você
              possa alterá-las sem modificar o restante.
            </p>
            <h4>Principais ferramentas de seleção:</h4>
            <ul>
              <li>
                <strong>Seleção Retangular ou Elíptica:</strong>
                <ul>
                  <li>
                    Seleciona áreas em formas geométricas. Para acessar a
                    ferramenta elíptica, clique e segure no ícone da ferramenta
                    retangular.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Seleção Livre (Laço):</strong>
                <ul>
                  <li>
                    Permite desenhar o contorno de uma área manualmente. É ideal
                    para objetos com formas irregulares, como a flor do exemplo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Seleção Contígua ou por Cor (Varinha Mágica):</strong>
                <ul>
                  <li>
                    Seleciona áreas de cor similar. Basta clicar na cor que
                    deseja isolar.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Dicas importantes:</h4>
            <ul>
              <li>
                <strong>Paciência:</strong>
                <ul>
                  <li>
                    Usar a ferramenta de seleção livre (laço) exige atenção para
                    contornar o objeto com precisão.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Inverter seleção:</strong>
                <ul>
                  <li>
                    Depois de selecionar uma área, você pode inverter a seleção
                    para trabalhar no fundo ou no restante da imagem. Basta ir
                    em Selecionar &gt; Inverter.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Com a área selecionada, você pode aplicar diversas modificações,
              como ajustar a cor ou temperatura, sem afetar o resto da imagem.
            </p>
            <h4>Imagem e Cores no GIMP</h4>
            <p>
              O GIMP oferece menus específicos para manipular a imagem como um
              todo e para ajustar suas cores.
            </p>
            <ul>
              <li>
                <strong>Menu Imagem:</strong>
                <ul>
                  <li>Permite transformações na foto inteira.</li>
                  <li>
                    Funções principais:
                    <ul>
                      <li>Cortar</li>
                      <li>Girar</li>
                      <li>Inverter (horizontal ou vertical)</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Menu Cores:</strong>
                <ul>
                  <li>
                    Permite ajustes mais detalhados sobre a cor da imagem.
                  </li>
                  <li>
                    Alguns ajustes importantes:
                    <ul>
                      <li>
                        <strong>Temperatura:</strong>
                        <ul>
                          <li>
                            Deixa a imagem com tons mais "quentes" (amarelos) ou
                            "frios" (azuis).
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Matiz-Croma:</strong>
                        <ul>
                          <li>
                            Permite mudar radicalmente a paleta de cores da
                            foto.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>
                          Saturação, Exposição, Brilho e Contraste:
                        </strong>
                        <ul>
                          <li>Ajustes clássicos para aprimorar a foto.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Calibrar a imagem (Níveis):</strong>
                    <ul>
                      <li>Uma forma de balancear as cores.</li>
                      <li>Acesse por Cores &gt; Níveis.</li>
                      <li>
                        Selecione o conta-gotas de sombra e clique na área mais
                        escura da foto.
                      </li>
                      <li>
                        Selecione o conta-gotas de realce e clique na área mais
                        clara da foto.
                      </li>
                      <li>
                        Isso equilibra os níveis de cor da imagem, tornando-a
                        mais impactante.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Camadas no GIMP</h4>
            <p>
              As <strong>camadas</strong> são o recurso que permite{" "}
              <strong>montagens e composições</strong> de mais de uma imagem em
              um único projeto. Com elas, é possível manipular elementos de
              fotos diferentes como se fossem imagens separadas.
            </p>
            <ul>
              <li>
                <strong>Como usar as camadas:</strong>
                <ol>
                  <li>
                    <strong>Copiar e Colar:</strong>
                    <ul>
                      <li>
                        Selecione uma área de uma foto, copie (Ctrl+C) e cole
                        (Ctrl+V) em outra imagem. O GIMP criará automaticamente
                        uma nova camada para o elemento colado.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Manipular as camadas:</strong>
                    <ul>
                      <li>
                        Para alterar o tamanho de um elemento na camada, use
                        Camada &gt; Transformação.
                      </li>
                      <li>
                        Para mover o elemento, use a ferramenta de movimento.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Gerenciamento:</strong>
                    <ul>
                      <li>
                        A janela de Camadas, localizada no lado direito da
                        interface do GIMP, permite visualizar e gerenciar cada
                        camada individualmente, como a imagem do leão na praia.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ul>
            <h4>Filtros no GIMP</h4>
            <p>
              Os <strong>filtros</strong> são efeitos pré-definidos que podem
              ser aplicados a uma imagem inteira ou a uma parte dela.
            </p>
            <ul>
              <li>
                <strong>Como usar:</strong>
                <ul>
                  <li>
                    Vá até o menu Filtros para ver a lista de opções, que são
                    agrupadas por estilo (por exemplo, "Artísticos",
                    "Distorções").
                  </li>
                  <li>
                    Para aplicar um filtro, basta selecioná-lo e o efeito será
                    aplicado à imagem.
                  </li>
                  <li>
                    Você pode aplicar filtros em apenas uma parte da imagem,
                    desde que ela esteja <strong>selecionada</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dica:</strong>
                <ul>
                  <li>
                    A melhor maneira de entender o que cada filtro faz é{" "}
                    <strong>testando</strong>. Brinque com os diferentes filtros
                    para ver os efeitos que eles criam. Por exemplo, o filtro de
                    "Aquarela" (em "Artísticos") pode transformar uma foto em
                    uma pintura, enquanto o "Gravura" (em "Distorções") pode dar
                    um efeito de desenho em relevo.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              O GIMP é uma ferramenta gratuita, então explore todos os seus
              recursos sem medo para desenvolver sua habilidade.
            </p>
          </div>
          <div>
            <h3>Roteiro</h3>
            <h4>Criação de Vídeos (Roteiro)</h4>
            <p>
              A base de qualquer vídeo é o <strong>roteiro</strong>, que é a
              história a ser contada. Um roteiro é uma estrutura que utiliza{" "}
              <strong>imagens, diálogos e descrições</strong> para guiar a
              narrativa.
            </p>
            <h4>A Estrutura da História:</h4>
            <ul>
              <li>
                Toda história tem <strong>começo, meio e fim</strong>, mesmo que
                não apresentados nessa ordem.
              </li>
              <li>
                Você, como roteirista, deve saber a história completa antes de
                começar a escrevê-la.
              </li>
              <li>
                Uma boa ideia de roteiro pode ser explicada em uma ou duas
                frases.
              </li>
            </ul>
            <h4>Personagem e Ação:</h4>
            <ul>
              <li>
                A <strong>ação</strong> é o que acontece na história, e o{" "}
                <strong>personagem</strong> é com quem acontece.
              </li>
              <li>
                Existem dois tipos de ação:
                <ul>
                  <li>
                    <strong>Ação física:</strong>
                    <ul>
                      <li>o que o personagem faz (ex: assaltar um banco).</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Ação emocional:</strong>
                    <ul>
                      <li>
                        o que o personagem sente ou as decisões que toma (ex: se
                        apaixonar).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                As ações do personagem devem mostrar suas motivações, em vez de
                serem explicadas por falas.{" "}
                <q>
                  Se uma ação precisa ser explicada verbalmente... ela está
                  errada.
                </q>{" "}
                <cite>(Alfred Hitchcock)</cite>
              </li>
            </ul>
            <h4>Conflito e Biografia do Personagem:</h4>
            <ul>
              <li>
                Toda história é movida por <strong>conflitos</strong>. Sem
                conflito, não há drama.
              </li>
              <li>
                <strong>Defina a necessidade do seu personagem:</strong> O que
                ele quer? O que o motiva?
              </li>
              <li>
                Crie uma <strong>biografia detalhada</strong> para seu
                personagem, mesmo que não seja mostrada na tela. Entender seus
                pontos de vista, gostos e peculiaridades ajuda a criar
                obstáculos e a definir suas ações.
              </li>
              <li>
                O <strong>personagem também pode ser uma entidade</strong>, como
                uma empresa, que tem uma história e pode ser o protagonista de
                um vídeo institucional.
              </li>
            </ul>
            <h4>Cenário</h4>
            <p>
              O <strong>cenário</strong> (ou locação) é o espaço físico onde a
              história de um vídeo se desenrola. Ele é crucial para ajudar a
              contar a história e contextualizar a ação e os personagens.
            </p>
            <h4>Tipos de Cenários:</h4>
            <ul>
              <li>
                <strong>Locais existentes:</strong>
                <ul>
                  <li>
                    Gravar em um local real, ajustando-o para que se adapte à
                    narrativa. É a opção mais comum e acessível.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cenários construídos:</strong>
                <ul>
                  <li>
                    Criar um ambiente do zero, como montar um escritório ou uma
                    fábrica dentro de um galpão.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Gravação ao ar livre:</strong>
                <ul>
                  <li>
                    Filmar em locações externas como ruas, praças ou praias.
                    Apresenta desafios como o controle do clima, de pessoas e,
                    principalmente, do som. Por isso, grandes cineastas como
                    Alfred Hitchcock preferiam estúdios.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>A Importância do Cenário:</h4>
            <ul>
              <li>
                O cenário deve reforçar a narrativa. Ele molda a forma como o
                espectador entende a história. Um filme sério de super-herói não
                funcionaria com um cenário ensolarado e alegre.
              </li>
              <li>
                Em vídeos institucionais, o cenário precisa ser{" "}
                <strong>coerente com a empresa</strong>. Uma fábrica de carros
                deve ser mostrada em sua linha de produção ou em uma pista de
                corrida, não em um escritório genérico. O ambiente deve ajudar a
                contar a história da marca.
              </li>
            </ul>
            <h4>Classificação de Cenários:</h4>
            <p>Segundo Stadler (2019), os cenários podem ser:</p>
            <ul>
              <li>
                <strong>Espaços Naturais:</strong>
                <ul>
                  <li>
                    Locações reais, sejam externas (ruas, praias) ou internas
                    (casas, teatros).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Espaços Naturais Representados:</strong>
                <ul>
                  <li>
                    Ambientes que parecem reais, mas são construídos em estúdio
                    ou recriados digitalmente.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Espaços Imaginários:</strong>
                <ul>
                  <li>
                    Locais que não existem na realidade, como planetas de ficção
                    ou ambientes criados por computador.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Em todos os casos, o cenário deve sempre se{" "}
              <strong>encaixar na ideia principal da história</strong>.
            </p>
            <h4>Enquadramento e Estabilização</h4>
            <p>
              O <strong>enquadramento</strong> em vídeo segue os mesmos
              princípios da fotografia, como a <strong>regra dos terços</strong>
              . Para um enquadramento mais dinâmico, posicione o objeto de
              destaque em uma das interseções da grade de nove quadros.
            </p>
            <h4>Estabilização</h4>
            <ul>
              <li>
                <strong>Vídeos tremidos</strong> são desconfortáveis de
                assistir. Por isso, a estabilidade é fundamental.
              </li>
              <li>
                <strong>Tripé:</strong>
                <ul>
                  <li>
                    É o equipamento mais comum para manter a câmera parada e
                    estável.
                    <ul>
                      <li>São relativamente baratos e essenciais.</li>
                      <li>
                        Permitem controlar a altura, a inclinação (para tomadas
                        na vertical) e o ângulo (para tomadas de cima para baixo
                        – plongée – ou de baixo para cima – contra-plongée).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Gimbal:</strong>
                <ul>
                  <li>
                    Um estabilizador com giroscópio e motores.
                    <ul>
                      <li>
                        Corrige os movimentos da câmera, mantendo-a estável
                        enquanto você se move.
                      </li>
                      <li>Permite filmagens em movimento sem trepidações.</li>
                      <li>
                        Existem modelos portáteis de um, dois ou três eixos,
                        ideais para smartphones e câmeras.
                      </li>
                    </ul>
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
