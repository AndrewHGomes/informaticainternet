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
            <h4>Iluminação</h4>
            <p>
              A iluminação é fundamental para o impacto visual de um filme. Ela
              não serve apenas para que a audiência veja a cena, mas também para
              <strong>direcionar o olhar do espectador</strong> e criar a
              composição da imagem.
            </p>
            <ul>
              <li>
                <strong>Iluminação Concentrada:</strong>
                <ul>
                  <li>Cria sombras nítidas e texturas bem definidas.</li>
                </ul>
              </li>
              <li>
                <strong>Iluminação Difusa:</strong>
                <ul>
                  <li>É mais suave e natural, como em um dia nublado.</li>
                </ul>
              </li>
            </ul>
            <h4>Direção da Iluminação</h4>
            <p>A direção da luz em relação ao objeto também é crucial.</p>
            <ul>
              <li>
                <strong>Frontal:</strong>
                <ul>
                  <li>
                    Elimina quase todas as sombras, jogando a luz na frente do
                    objeto.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Lateral:</strong>
                <ul>
                  <li>
                    Cria sombras no lado oposto, destacando as características
                    do objeto.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Contraluz:</strong>
                <ul>
                  <li>
                    A luz vem por trás do objeto, criando uma{" "}
                    <strong>silhueta</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>De Baixo:</strong>
                <ul>
                  <li>Efeito dramático (comum em filmes de terror).</li>
                </ul>
              </li>
              <li>
                <strong>De Cima:</strong>
                <ul>
                  <li>Efeito mais natural.</li>
                </ul>
              </li>
            </ul>
            <h4>Tipos de Luz</h4>
            <ul>
              <li>
                <strong>Luz Principal (ou Luz-chave):</strong>
                <ul>
                  <li>Fonte dominante de iluminação na cena.</li>
                </ul>
              </li>
              <li>
                <strong>Luz de Preenchimento:</strong>
                <ul>
                  <li>
                    Fonte mais fraca que serve para suavizar ou eliminar sombras
                    indesejadas.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Som</h4>
            <p>
              O áudio é um dos aspectos mais importantes do audiovisual e pode
              ser dividido em quatro tipos:
            </p>
            <ul>
              <li>
                <strong>Música:</strong>
                <ul>
                  <li>Canções criadas ou usadas no filme.</li>
                </ul>
              </li>
              <li>
                <strong>Diálogos: </strong>
                <ul>
                  <li>
                    Falas dos personagens. A qualidade da captação é crucial.
                    Microfones de lapela são comuns em produções menores para
                    garantir clareza.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Narração:</strong>
                <ul>
                  <li>
                    Voz "em off", gravada em estúdio, geralmente para
                    documentários ou para explicar o que está acontecendo na
                    tela.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Efeitos Sonoros:</strong>
                <ul>
                  <li>
                    Barulhos e sons que o espectador ouve. Podem ser:
                    <ul>
                      <li>
                        <strong>Diegéticos:</strong>
                        <ul>
                          <li>
                            Fazem parte da história e são ouvidos tanto pelos
                            personagens quanto pelo público (ex: o som de um
                            carro).
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Não Diegéticos:</strong>
                        <ul>
                          <li>
                            Sons que apenas o público ouve (ex: uma trilha
                            sonora que cria suspense).
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Metadiegéticos:</strong>
                        <ul>
                          <li>
                            Sons que se passam "na cabeça" do protagonista e são
                            ouvidos por ele e pelo público, mas não pelos outros
                            personagens (ex: uma voz que sussurra).
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Ponto-chave:</strong> Iluminação, som, enquadramentos,
              locação e roteiro são todos elementos essenciais para a produção
              de conteúdo audiovisual de qualidade.
            </p>
          </div>
          <div>
            <h3>O que é Som?</h3>
            <p>
              O som é uma <strong>onda mecânica e longitudinal</strong>, ou
              seja, uma <strong>vibração</strong>
              que se propaga através de um meio físico, como o ar, a água ou um
              sólido. Ele não se propaga no vácuo por não haver moléculas para
              conduzi-lo.
            </p>
            <h4>Propriedades do Som</h4>
            <p>O som possui três propriedades principais:</p>
            <ol>
              <li>
                <strong>Velocidade:</strong>
                <ul>
                  <li>Depende do meio de propagação.</li>
                  <li>
                    Meios mais densos e elásticos propagam o som mais
                    rapidamente.
                  </li>
                  <li>
                    Exemplos de velocidade: no ar (340 m/s), na água (1500 m/s),
                    no concreto (3400 m/s).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Frequência:</strong>
                <ul>
                  <li>Determina se o som é agudo ou grave.</li>
                  <li>Medida em hertz (Hz).</li>
                  <li>
                    <strong>Graves:</strong> Menor frequência (menos Hz).
                  </li>
                  <li>
                    <strong>Agudos:</strong> Maior frequência (mais Hz).
                  </li>
                  <li>O ouvido humano ouve entre 20 Hz e 20.000 Hz.</li>
                </ul>
              </li>
              <li>
                <strong>Amplitude:</strong>
                <ul>
                  <li>
                    É a <strong>intensidade</strong> ou o{" "}
                    <strong>volume</strong> do som.
                  </li>
                  <li>Representa a quantidade de energia da onda.</li>
                  <li>Quanto maior a amplitude, mais alto o som.</li>
                </ul>
              </li>
            </ol>
            <h4>Áudio: Mono x Estéreo</h4>
            <p>
              A forma como percebemos o som na natureza é{" "}
              <strong>estéreo</strong>, pois temos dois ouvidos que captam sons
              de diferentes direções. Essa diferença nos ajuda a localizar a
              fonte do som.
            </p>
            <h4>Som Monofônico (Mono)</h4>
            <ul>
              <li>
                O som é emitido por uma <strong>única fonte</strong>.
              </li>
              <li>
                Todos os sons vêm de um mesmo ponto, sem distinção de direção.
              </li>
              <li>Exemplos: primeiros fonógrafos e discos de goma laca.</li>
            </ul>
            <h4></h4>
            <ul>
              <li>
                O som é emitido por <strong>duas ou mais fontes</strong>,
                permitindo a distribuição dos sons entre elas.
              </li>
              <li>
                Isso cria uma experiência mais próxima da realidade, onde se
                pode perceber a localização de diferentes instrumentos ou
                elementos sonoros (por exemplo, a guitarra na caixa de som
                direita e a bateria na esquerda).
              </li>
              <li>
                Esse formato se popularizou com os discos de vinil na década de
                1960.
              </li>
            </ul>
            <h4>Sistemas de Som</h4>
            <ul>
              <li>
                Atualmente, sistemas mais complexos simulam a experiência
                estéreo com mais detalhes.
              </li>
              <li>
                O sistema <strong>5.1</strong>, por exemplo, tem 5 caixas de som
                para os canais de áudio e 1 subwoofer (para sons graves).
              </li>
              <li>
                O sistema <strong>7.2</strong> tem 7 caixas e 2 subwoofers.
              </li>
              <li>
                Esses sistemas espalham o som pelo ambiente, fazendo com que o
                ouvinte se sinta "envolvido".
              </li>
              <li>
                Tecnologias avançadas como o Dolby Atmos permitem distribuir o
                som em 360°, inclusive com caixas no teto.
              </li>
            </ul>
            <h4>Captação de Áudio</h4>
            <p>
              Todo processo de captação de áudio necessita de um{" "}
              <strong>microfone</strong>. A função do microfone é{" "}
              <strong>converter a energia sonora em energia</strong>
              elétrica através de indução eletromagnética. Ele transforma as
              ondas sonoras em sinais elétricos que podem ser gravados,
              amplificados ou reproduzidos.
            </p>
            <h4>Tipos de Microfones</h4>
            <p>
              Existem diversos tipos de microfones, cada um com uma finalidade
              específica:
            </p>
            <ul>
              <li>
                <strong>Omnidirecionais:</strong>
                <ul>
                  <li>
                    Captam sons de <strong>todas as direções</strong>{" "}
                    igualmente. São ideais para gravar sons ambientes (natureza,
                    carros) ou conversas entre várias pessoas. Não são indicados
                    para isolar sons específicos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Condensadores: </strong>
                <ul>
                  <li>
                    Usados principalmente em{" "}
                    <strong>ambientes controlados</strong>, como estúdios. Eles
                    capturam fielmente os sons, sendo ótimos para vozes humanas
                    e instrumentos com notas delicadas. São comuns em podcasts e
                    gravações de música.
                  </li>
                </ul>
              </li>
              <li>
                <strong>De Lapela:</strong>
                <ul>
                  <li>
                    Pequenos e discretos, são presos à roupa. São excelentes
                    para <strong>isolar a voz humana</strong>, minimizando os
                    sons do ambiente, o que garante um áudio nítido para o
                    ouvinte.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Audacity: Software para Edição de Áudio</h4>
            <p>
              O <strong>Audacity</strong> é um software de edição de áudio{" "}
              <strong>gratuito e fácil de usar</strong>, com uma grande
              variedade de recursos. É uma excelente opção para quem está
              começando a editar áudio.
            </p>
            <h4>Funções Básicas</h4>
            <ul>
              <li>
                <strong>Abrir arquivo:</strong>
                <ul>
                  <li>
                    Vá em Arquivo &gt; Abrir para carregar sua gravação. Se for
                    um arquivo estéreo, ele aparecerá em duas ondas sonoras.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Seleção:</strong>
                <ul>
                  <li>
                    É a ferramenta mais importante. Use-a para{" "}
                    <strong>selecionar um trecho específico</strong> que você
                    deseja editar, isolando-o do resto do áudio.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Zoom:</strong>
                <ul>
                  <li>
                    Use o ícone da lupa para dar zoom e trabalhar com mais
                    precisão em trechos curtos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Recortar, Copiar e Colar:</strong>
                <ul>
                  <li>
                    Permitem mover ou duplicar partes do áudio. Primeiro,
                    selecione o trecho e depois use a função desejada.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Ajustes na Trilha de Áudio</h4>
            <p>
              Esses ajustes são feitos na trilha completa, sem a necessidade de
              seleção:
            </p>
            <ul>
              <li>
                <strong>Volume:</strong>
                <ul>
                  <li>Ajuste o volume geral da faixa de áudio.</li>
                </ul>
              </li>
              <li>
                <strong>Balanço Esquerda/Direita:</strong>
                <ul>
                  <li>
                    Altera a distribuição do som entre os canais estéreo (ouvido
                    esquerdo e direito).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Silenciar:</strong>
                <ul>
                  <li>
                    Desabilita uma faixa de áudio inteira. Útil se você tiver
                    mais de uma gravação para o mesmo som (por exemplo, de
                    microfones diferentes).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Solo:</strong>
                <ul>
                  <li>
                    Permite que você escute apenas uma faixa de áudio,
                    silenciando todas as outras.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Equalização no Audacity</h4>
            <p>
              A <strong>equalização</strong> é a alteração de frequências de uma
              faixa sonora para melhorar sua qualidade (melhorar graves e
              agudos). No Audacity, você pode equalizar a faixa inteira ou
              apenas um trecho selecionado.
            </p>
            <ul>
              <li>
                <strong>Acesso:</strong>
                <ul>
                  <li>Vá em Efeitos &gt; Equalizador Gráfico.</li>
                </ul>
              </li>
              <li>
                <strong>Ajuste:</strong>
                <ul>
                  <li>
                    Use as alavancas virtuais para aumentar (para cima) ou
                    diminuir (para baixo) a amplitude de cada frequência.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Frequências:</strong>
                <ul>
                  <li>
                    Lembre-se que <strong>frequências mais baixas</strong> são{" "}
                    <strong>graves</strong>, e{" "}
                    <strong>frequências mais altas</strong> são{" "}
                    <strong>agudas</strong>.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Outras Ferramentas de Áudio</h4>
            <ul>
              <li>
                <strong>Amplificar:</strong>
                <ul>
                  <li>
                    Aumenta ou diminui o volume de um trecho selecionado. Use
                    Efeitos &gt; Amplificar e defina um valor. Um valor menor do
                    que o atual diminui o volume; um valor maior aumenta.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Graves e Agudos:</strong>
                <ul>
                  <li>
                    Uma opção mais simples para ajustar o áudio, sem a precisão
                    do equalizador. Ideal para fazer ajustes leves na voz,
                    deixando-a mais grave ou mais aguda.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Salvar e Exportar</h4>
            <ul>
              <li>
                <strong>Salvar Projeto:</strong>
                <ul>
                  <li>
                    A função Salvar serve para guardar o projeto no formato do
                    Audacity (.aup3). Isso permite que você continue editando o
                    arquivo depois, com todas as trilhas e configurações.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Exportar:</strong>
                <ul>
                  <li>
                    Use a função Exportar para converter o áudio em um formato
                    final, como MP3 ou WAV. O arquivo exportado pode ser
                    reproduzido em qualquer computador.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Opções de Exportação (MP3):</strong>
                <ul>
                  <li>
                    A <strong>taxa de bits (Kbps)</strong> define a qualidade e
                    o tamanho do arquivo.
                  </li>
                  <li>
                    <strong>Menor valor (145-185 Kbps):</strong> Áudio mais
                    leve, ideal para compartilhamento online (ex: WhatsApp).
                  </li>
                  <li>
                    <strong>Maior valor (220-260 Kbps):</strong> Qualidade
                    superior, adequada para rádio ou vídeo.
                  </li>
                  <li>
                    <strong>Insano (320 Kbps):</strong> Qualidade máxima,
                    semelhante a um CD, ideal para gravações de música. Escolha
                    o valor que melhor se adequa ao seu meio de distribuição.
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
