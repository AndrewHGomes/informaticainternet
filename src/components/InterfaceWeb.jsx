import { useState } from "react";

const InterfaceWeb = () => {
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
        <h2>INTERFACE WEB</h2>
        <img src="/seta.png" onClick={visualizar} className={classeGirarImg} />
      </div>
      {abrir && (
        <>
          <div>
            <h3>O que é Interface Web?</h3>
            <p>
              Tudo o que enxergamos e somos capazes de manipular, fisicamente ou
              digitalmente, tem uma <strong>interface</strong>, ou seja,{" "}
              <strong>
                uma camada na qual o utilizador e o criador se comunicam
              </strong>
              . É uma forma de comunicação (Norman, 2006). A interface,
              principalmente a digital, atua como uma espécie de{" "}
              <strong>tradutora</strong> que faz a mediação entre duas partes,
              deixando que uma entenda a outra. É um tipo de{" "}
              <strong>relação semântica</strong>, na qual o que importa é o{" "}
              <strong>significado e a expressão</strong> (Steven Johnson, 2001).
            </p>
            <p>
              O princípio mais importante das interfaces é a{" "}
              <strong>visibilidade</strong> (Norman, 2006), as{" "}
              <strong>
                instruções, sejam elas ícones, palavras ou o simples mecanismo
                de ação do equipamento que deve estar "na cara" do usuário
              </strong>
              . Isso é ainda mais sério quando falamos de interfaces web, que é
              a função desse curso.
            </p>
            <p>
              No nosso cotidiano, durante uma conversa, a interação cara a cara
              apresenta várias deixas simbólicas: um sorriso, cara fechada,
              olhar longe. Todas essas sinalizações indicam mais ou menos o que
              a pessoa está pensando ou sentindo ao ouvir a outra (Primo, 2011).
              Essas informações não estão tão evidentes quando nos relacionamos
              com um website ou app de celular. Por serem mediados por uma tela,
              existe um estreitamento das possibilidades simbólicas de
              comunicação.
            </p>
            <p>
              Se isso já existia nas cartas, por causa do tempo entre o
              recebimento da mensagem e o envio da resposta, depois nos
              telégrafos e no telefone, por causa da enotação, que muda
              radicalmente a compreensão de um texto, na internet isso atinge
              proporções muito maiores.
            </p>
            <h3>Antes da Internet</h3>
            <p>
              <strong>
                A evolução do ser humano como um ser social passa muito pelo
                desenvolvimento da escrita,
              </strong>{" "}
              uma vez que o que uma pessoa escreve pode ser lido por outra
              (desde que conheça a linguagem) sem que elas se conheçam ou que
              ocupem o mesmo lugar no espaço ou no tempo. Outra grande evolução
              foi a <strong>evolução digital</strong>. Entretanto,
              diferentemente da escrita, que emergiu em diversos locais do mundo
              em diversos pontos da história (Chomsky, 2014) e de que os
              registros são escassos, a evolução digital foi muito bem
              documentada.
            </p>
            <p>
              Muito do que entendemos como digital começa na Segundo Guerra
              Mundial, quando os alemães, inimigos dos ingleses, desenvolveram
              uma máquina para criptografar, ou seja, embaralhar as mensagens
              que enviavam de um batalhão para outro. Assim, caso algum inglês,
              estadunidense ou francês encontrasse a mensagem, não conseguiria
              decifrá-la. Um inglês chamado <strong>Alan Turing</strong>,
              desenvolveu um método para desembaralhar as mensagens (Leavitt,
              2009). Um pouco antes, o mesmo Turing conceituou formalmente
              aquilo que tornaria os computadores (e todo o mundo digital que
              nos cerca) possíveis: os <strong>algoritmos</strong>. Em 1936, ele
              definiu algoritmos como{" "}
              <strong>
                um conjunto não ambíguo e ordenado de passos executáveis que
                definem um processo finito
              </strong>{" "}
              (Huws; Finnis, 2017). Ou seja, uma série de etapas que precisam
              ser feitas para chegar a um resultado. Antes de Turing,
              computadores era o nome dado às pessoas que trabalhavam fazendo
              cálculos complexos usando papel e lápis. Computador, como
              conhecemos hoje, surgiu através das ideias de um pesquisador
              estadunidense chamado <strong>Vannevar Bush</strong>. Bush, porém,
              pensou em uma máquina e deu a ela o nome de <strong>Memex</strong>{" "}
              no término da Segunda Guerra, em 1945.
            </p>
            <blockquote>
              <q>
                Um memex é um aparelho no qual o indivíduo armazena todos os
                seus livros, registros e comunicações, e que é mecanizado de
                forma a ser consultado com grande velocidade e flexibilidade. É
                um suplemento ampliado e íntimo de sua memória. Consiste em uma
                escrivaninha, e embora se suponha que possa ser operado à
                distância, é no móvel que funciona primariamente. No topo ficam
                telas translúcidas inclinadas, nas quais se pode projetar
                material para leitura. Há um teclado e um conjunto de botões e
                alavancas. No mais, lembra uma escrivaninha comum.
              </q>
              <cite> - (Bush, 2011, p. 24)</cite>
            </blockquote>
            <p>
              Pouco tempo depois, nos Estados Unidos, pesquisadores começaram a
              desenvolver máquinas de acordo com que Bush havia pensado para o
              Memex, e criaram o{" "}
              <strong>
                ENIAC (Eletronic Numerical Integrator and Computer)
              </strong>
              , com a finalidade de enviar astronautas ao espaço. Esse
              computador era tão grande que os trabalhadores dormiam
              literalmente dentro dele, já que ele tinha{" "}
              <strong>46 metros de comprimento e 3 metros de altura</strong>.
            </p>
            <p>
              Alguns anos depois, em 1977, a geração de pessoas como{" "}
              <strong>
                Steve Jobs e Steve Wosniak (fundadores da Apple Computers)
              </strong>
              , criaram os microcomputadores. A partir da década de 1980, os
              computadores foram, aos poucos, invadindo os lares das pessoas
              mundo afora, assim como relógios digitais, agendas eletrônicas,
              brinquedos com pequenos chips digitais e carros luxuosos que já
              contavam com injeção eletrônica. Mas nada disso foi páreo para a
              maior das invensões: a internet.
            </p>
            <h3>A Internet</h3>
            <p>
              A internet é um fruto da Guerra Fria, uma guerra mais intelectual
              e de informações, entre EUA e URSS, que lutavam pelo domínio
              territorial e cultural. No ano de 1969, os EUA destinaram uma
              grande verba para a{" "}
              <strong>ARPA (Advanced Research Projects Agency)</strong>, um
              órgão do governo responsável pelas pesquisas com finalidade
              militar. Em 1972, os cientistas do projeto conseguiram ligar
              quatro computadores em locais distintos da costa oeste dos EUA:
              Universidade da Califórnia, em Los Angeles, Universidade da
              Califórnia, em Santa Bárbara, Instituto de Pesquisas de Stanford,
              também na Califórnia, e na Universidade de Utah, em Nevada. Essa
              pequena rede foi o início da <strong>Arpanet</strong> (Santos,
              2022).
            </p>
            <p>
              Um ano depois, o governo norte-americano, tomou para si os pontos
              da Arpanet que já estavam em cerca de cem computadores espalhados
              pelos EUA, e, então, contratou <strong>Vinton Serf</strong>, um
              matemático que criou o protocolo <strong>TCP-IP</strong>, para que
              qualquer computador com acesso a um equipamento conhecido como
              modem pudesse se conectar com outro computador com o mesmo
              equipamento. O TCP-IP era um código de endereçamento de máquina,
              ou seja, se um computador tivesse o endereço de outro, poderia
              conectá-lo. Era o início da internet.
            </p>
            <p>
              Apoiados na invensão de <strong>Ted Nelson</strong>, que em 1965
              lançou as bases teóricas para o <strong>hipertexto</strong>, essa
              rede de computadores começou a se popularizar a partir de 1980,
              porém, de uma forma feia e chata: texto preto em tela branca ou
              verde, e sem muito o que fazer. Podia se navegar de um texto para
              outro e só.
            </p>
            <p>
              Isso mudou com um cientista inglês chamado{" "}
              <strong>Tim Berners-Lee</strong>, pesquisador do{" "}
              <strong>
                CERN (Conselho Europeu de Pesquisa Nuclear - sigla em Francês)
              </strong>
              , na Suiça, que criou a coisa mais importante para a difusão
              maciça da internet: a <strong>Interface Gráfica</strong>. Também
              chamada de Teia de Alcance Mundial ou{" "}
              <strong>World Wide Web (WWW)</strong>, que utilizamos nos
              navegadores. Isso deixou a rede mais agradável, visual, e também
              permitiu novas estruturas, como áudio, vídeo e imagens. Ao mesmo
              tempo, um estudante da Universidade de Illinois,{" "}
              <strong>Marc Andreessen</strong>, criou um software para navegar
              pala WWW, o <strong>Mosaic</strong>. Apesar de fazer muito sucesso
              no meio acadêmico, o Mosaic era restrito ao Andreessen. Depois de
              formado, Andreessen criou, em conjunto com{" "}
              <strong>Jim Clark</strong>, a <strong>Netscape</strong>, primeira
              empresa comercial que o produto principal era um browser de
              internet. A partir de 1993, qualquer pessoa podia navegar na
              internet.
            </p>
            <p>
              O grande "boom" veio entre 1994 e 1998, quando a maior parte das
              famílias de classe média do mundo começou a se conectar e ter
              acesso a diversos conteúdos e navegar por informações úteis,
              inúteis, engraçadas ou trágicas. Também nessa época começou a se
              difundir o email, e muitas pessoas trocaram as cartas pelo carreio
              eletrônico, com o intuito de promover a comunicação entre pessoas
              distantes.
            </p>
            <p>
              Em 2000, houve o que se chamou de{" "}
              <strong>"o estouro da bolha .com"</strong>, onde diversar empresas
              quebraram da noite para o dia, pois os investidores da bolsa
              decidiram tirar seus investimentos de empresas digitais. Com isso,
              as empresas que continuaram e as que surgiram depois, se tornaram
              muito mais próximas de seus consumidores, e também muito mais
              úteis, pois a internet não era mais um ambiente para aventureiros.
            </p>
            <h3>Internet Ubíqua</h3>
            <p>
              A internet não parou de crescer, se tornou muito mais presente na
              vida de todos, é quase <strong>ubíqua</strong>, ou seja, está em
              todos os lugares e em todo o tempo, o que é benéfico e assustador
              ao mesmo tempo. A parte boa é que temos todas as informações da
              internet em nossas mãos. A parte assustadora é perceber o quanto
              nos tornamos dependentes desses equipamentos. Isso se deu por
              conta de duas tecnologias:{" "}
              <strong>dados móveis e wi-fi (Wireless Fidelity)</strong>
            </p>
            <p>
              No caso dos dados móveis, uma pessoa compra um pacote de dados de
              alguma empresa de telefonia. Já no caso do wi-fi, uma pessoa
              contrata um acesso de internet fixo em sua residência e, por meio
              da tecnologia wi-fi, os equipamentos podem acessar a internet sem
              utilização de cabos. Essas duas tecnologias são anteriores aos
              smartphones.
            </p>
            <h3>Smartphones</h3>
            <p>
              Do inglês, smart (inteligente) phone (telefone), são um
              aprimoramento dos telefones celulares. A ideia da telefonia
              celular começa com o conceito da existência de um aparelho de
              comunicação telefônica não mais centrado em um ambiente, e sim em
              um <strong>indivíduo</strong>. Até a existência do telefone
              particular, as linhas telefônicas eram fixas em uma residência ou
              estabelecimento comercial. A primeira patente de um aparelho
              telefônico foi registrada em 1876, e em 1973, o primeiro celular
              foi apresentado pela Motorola. Suas vendas começaram em 1983, e só
              famílias muito ricas podiam comprar. No Brasil, isso só ocorreu no
              início do século XXI.
            </p>
            <p>
              Entre 2002 e 2007, muitos foram os avanços no aparelho. As pessoas
              começaram a entender que ele podia ser uma extensão do computador
              de casa. Começaram a receber câmeras, telas coloridas, envio e
              recebimento de emails, etc. Em 2007, a Apple, que já havia feito o
              iPod, decidiu entrar no ramo dos smartphones.
            </p>
            <p>
              Liderados por Steve Jobs, a empresa focou no uso cotidiano e na
              experiência do usuário. Assim, nasceu o iPhone, o primeiro
              smartphone moderno, com{" "}
              <strong>possibilidade de toques múltiplos na tela</strong> pelos
              dedos do usuário. A partir da tecnologia{" "}
              <strong>multitouch</strong>, há uma mudança de conceito sobre o
              celular, que passou a ser indispensável na vida da maior parte das
              pessoas (Santos, 2022).
            </p>
            <p>
              O aparelho virou apenas uma tela. Tudo nele é virtual. Havia
              apenas um botão físico na parte frontal e outros poucos como
              liga/desliga e de volume.{" "}
              <strong>
                O próprio teclado desaparece quando a tela desliga
              </strong>{" "}
              ou quando algum aplicativo é utilizado. Isso foi uma grande
              mudança nas interfaces que víamos em nosso cotidiano.
            </p>
            <p>
              Um ano depois do iPhone, em 2008, a Google, em parceria com um
              consórcio de desenvolvedores menores, lançou o{" "}
              <strong>Android</strong>. Era baseado na arquitetura Linux, ou
              seja, uma base de criação de código aberto. Isso quer dizer que a
              maior parte do Android podia ser alterada por quem quer que fosse.
            </p>
            <p>
              A Apple desenvolvia o hardware (o aparelho, o iPhone) e o sistema
              operacional (IOS), enquanto a Google desenvolvia e licenciava
              apenas o sistema operacional para qualquer empresa que desejasse
              utilizá-lo. Com isso, o Android se proliferou, ficando com cerca
              de 71,31% dos celulares vendidos contra 27,95% do IOS. Os demais
              sistemas correspondem a apenas 0,74% das vendas (Statcounter,
              2024).
            </p>
            <p>
              Faz um bom tempo que o smartphone deixou de ser um telefone. Hoje
              em dia ele é a câmera, a filmadora, a agenda, a calculadora, o
              caixa eletrônico, a caixa de música, a livraria, a loja, a
              previsão do tempo, a máquina de escrever, o mapa, o ponto de taxi,
              a aula, etc. Juntamente com a internet, ele nos fornece muitas
              coisas cruciais do mundo atual.
            </p>
          </div>
          <div>
            <h2>Fotografia</h2>
            <p>
              A fotografia não começou com uma boa definição, colorida e bonita.
              Em 1826, o francês <strong>Joseph Niépce</strong> construiu uma
              máquina que consistia em uma placa metálica revestida de betume,
              que, em conjunto com uma câmara escura, produzia uma imagem. Em
              1837, outro francês, <strong>Louis Daguerre</strong>, aperfeiçoou
              essa máquina e produziu o <strong>daguerreótipo</strong>, um tipo
              rudimentar de máquina fotográfica (Kubrusly, 2003). De lá pra cá,
              muitas coisas mudaram. A fotografia, que antes era impressa em um
              pedaço de vidro, passou a ser impressa em um papel especial.
              Atualmente, eles nem são mais impressas, são compartilhadas aos
              montes em redes sociais.
            </p>
            <p>
              Devemos deixar claro que fotografia{" "}
              <strong>não representa a realidade</strong>. Ela é fruto de uma{" "}
              <strong>escolha do fotógrafo</strong>, que escolhe o local onde
              vai fotografar, como vai fotografar e de qual forma vai mostrar o
              objeto ou pessoa fotografado (Sotang, 2013). Como dizia o filósofo{" "}
              <strong>Vilém Flusser (2011)</strong>, toda fotografia{" "}
              <strong>é mentirosa</strong>.
            </p>
            <p>Temos quatro dimensões que nos rodeiam:</p>
            <ul>
              <li>Altura;</li>
              <li>Largura;</li>
              <li>Profundidade;</li>
              <li>Tempo;</li>
            </ul>
            <p>
              Uma foto, por melhor que seja,{" "}
              <strong>deleta a profundidade e o tempo</strong>. Toda fotografia{" "}
              <strong>é um instante congelado</strong>, portanto, o tempo é
              deletado. Qualquer fotografia, seja impressa ou não, também perde
              sua profundidade. As outras duas dimensões que restaram (altura e
              largura) são modificadas. Logo, a fotografia{" "}
              <strong>é a arte do olho</strong> segundo o filósofo{" "}
              <strong>Water Benjamin (2010)</strong>. Antes, nas artes plásticas
              como a pintura, o artista precisava de uma coordenação motora
              fina, agora, o artista precisa posicionar bem a câmera, apertar um
              botão e saber algumas técnicas.
            </p>
            <h3>Simetria</h3>
            <p>
              Essa, talvez, seja a coisa mais importante. Não que a fotografia
              deve ser simétrica, mas até para criar fotografias assimétricas, o
              fotógrafo precisa conhecer simetria.
            </p>
            <p>
              Em 1202, um matemático chamado <strong>Leonardo Fibonacci</strong>{" "}
              desenvolveu uma sequência que explicava como muitas coisas na
              natureza funcionavam. Ele usa a{" "}
              <strong>
                soma de dois números anteriores para gerar um terceiro
              </strong>{" "}
              e assim sucessivamente. Exemplo: 1 + 2 = 3; 2 + 3 = 5; 3 + 5 = 8;
              5 + 8 = 13 e assim por diante. Essa sequência acaba gerando
              graficamente, uma espiral ascendente. A partir de Fibonacci, os
              fotógrafos foram adaptando sua ideia de simetria, simplificando
              para um quadrante de <strong>nove quadros</strong>. É uma grade de{" "}
              <strong>3 quadros por 3 quadros</strong>. Essa opção existe tanto
              nas câmeras proficionais quanto nos smartphones. Para uma boa foto
              usando os nove quadros, o elemento de foco deve estar posicionado
              em um dos quatro encontros entre as linhas do quadrante.
            </p>
            <h3>Contraste, Sombra e Cor</h3>
            <p>
              Uma outra característica importante é o <strong>contraste</strong>
              , que é, basicamente,{" "}
              <strong>
                colocar em foco algo que seja, de alguma forma, muito diferente
                do fundo
              </strong>
              . Temos até uma certa oposição, mas basta colocar um elemento
              muito díspar que se destaque do fundo.
            </p>
            <p>
              Outra característica também muito importante e que ressalta
              lugares e temáticas é o <strong>uso da sombra</strong>, colocando
              elementos escuros na tela, isso faz{" "}
              <strong>destacar a luz</strong>. Quando inserimos sombras no
              enquadramento, deixamos aquilo que está iluminado ainda mais
              presente.
            </p>
            <p>
              O uso dos <strong>contrastes das cores e tonalidades</strong> em
              uma foto direcionam o olhar do espectador. Quanto mais
              contrastantes as cores, mais o leitor vai prestar atenção.
              Precisamos entender que existem{" "}
              <strong>
                cores quentes (derivações de vermelho, laranja e amarelo)
              </strong>
              , que transmitem agitação, movimento, mudança, e também{" "}
              <strong>cores frias (derivações de verde, azul e violeta)</strong>
              , que indicam calmaria, passividade, serenidade. Quanto à
              tonalidade, que podem ser mais saturadas ou menos saturadas,
              podemos dizer que fotos <strong>menos saturadas</strong> (mais
              escuras), tendem a dar uma aparência mais{" "}
              <strong>desconfiada, misteriosa</strong>. Já as cores{" "}
              <strong>mais saturadas</strong> (mais claras), tendem a ser vistas
              como mais <strong>otimistas, vivas, vibrantes</strong>.
            </p>
            <h3>Texturas, Padrões e Reflexos</h3>
            <p>
              Quando temos a impressão de uma foto parecer estar "áspera" ou
              "gosmenta", mesmo que ela esteja sendo vista na tela de um
              celular, é porque o fotógrafo conseguiu acertar a{" "}
              <strong>textura</strong> da fotografia.
            </p>
            <p>
              Os <strong>padrões são quaisquer coisas repetitivas</strong> que{" "}
              <strong>comuniquem uma ideia ou sentimento</strong>. Um bom
              exemplo são os vitrais coloridos e iluminados, como das igrejas
              mais antigas.
            </p>
            <p>
              Um fotógrafo pode trabalhar também o <strong>reflexo</strong>, ou
              seja,{" "}
              <strong>"duplicar" uma imagem a partir de um espelho</strong>, o
              que transmite uma impressão de <strong>amplitude</strong> por um
              lado e <strong>curiosidade</strong> por outro. O observador vai
              buscar entender qual é o objeto real de foco e qual sua cópia
              espelhada.
            </p>
            <h3>Perpectiva, Forma e Linha</h3>
            <p>
              Uma das maiores invenções humanas foi a{" "}
              <strong>perspectiva</strong>. Explicada e estruturada na{" "}
              <strong>Renascença</strong>, por volta do século XV, essa forma de
              percepção de um{" "}
              <strong>
                ambiente tridimensional vertido para o bidimensional
              </strong>{" "}
              foi e ainda é utilizado não só na fotografia, mas em boa parte das
              tentativas de bidimensionar um objeto ou espaço tridimensional
              (Gombrich, 1995). Quando criamos{" "}
              <strong>linhas imaginárias</strong> que se encontram em um{" "}
              <strong>ponto de fuga</strong>, estamos gerando uma fotografia que
              faz uso da perspectiva. O fotógrafo deve saber dirigir o olhar do
              observador, pois esse deve ter seus olhos conduzidos pelo
              fotógrafo.
            </p>
            <p>
              Outra técnica que pode ser trabalhada é a da{" "}
              <strong>forma</strong>, ou seja, destacar{" "}
              <strong>uma forma em relação às demais</strong> na composição.
              Fazer com que o leitor se interesse pela forma destacada e como
              ela funciona na imagem.
            </p>
            <p>
              Também temos a <strong>linha</strong>, o elemento que{" "}
              <strong>dirige o olhar do observador</strong>. A linha indica os
              caminhos que os olhos precisam passar, define limites, mostra
              distâncias e descreve contornos. Existem dois tipos de linhas,{" "}
              <strong>retas e curvas</strong>. Com elas, os fotógrafos manipulam
              os olhos do observador sempre em prol da estrutura da composição.
            </p>
            <blockquote>
              <q>Não se tira uma foto. Você a faz.</q>
              <cite> - Sebastião Salgado Filho</cite>
            </blockquote>
          </div>
          <div>
            <h2>Funções do Design</h2>
            <p>
              Podemos dizer com segurança que{" "}
              <strong>tudo ou quase tudo possui um design</strong>, ou seja, o
              que vemos foi pensado para ser assim. Podemos usar o conceito de{" "}
              <strong>affordance</strong>, que, para Norman (2006), se refere à
              capacidade de um objeto material ou virtual deixar claro para que
              serve. Affordances fornecem fortes indicações para a operação de
              objetos com apenas uma olhada. Qualquer coisa com um{" "}
              <strong>bom affordance é fácil de ser compreendida</strong>.
            </p>
            <p>
              O smartphone é algo que <strong>não tem um bom affordance</strong>
              , pois não conseguimos saber para que serve só de olharmos (Não
              significa que os softwares do smartphone tenham mal affordance).{" "}
              <strong>É aí que entra o design</strong>. Ao contrário do que
              muita gente pensa, design não significa desenho, e sim{" "}
              <strong>projeto</strong>.
            </p>
            <p>
              O papel de um designer de projetos web é fornecer um aplicativo ou
              site com o melhor affordance possível, que seja o mais intuitivo e
              fácil para o usuário. Além disso, deve ser o mais bonito e
              agradável possível, para encantar o usuário e mantê-lo em contato
              com seu produto por mais tempo. Por último, deve ser simbólico o
              suficiente para que, ao utilizar o produto, a pessoa entenda que
              ele é mais do que apresenta ser, ou seja, ele tem uma carga
              simbólica que vai além do que está em suas mãos.
            </p>
            <p>
              Tudo isso começa com um design limpo, um projeto que não seja
              confuso e que consiga transmitir a maior quantidade possível de
              informações de forma clara e objetiva. Para isso, precisamos de
              quatro princípios básicos:
            </p>
            <ol>
              <li>Proximidade;</li>
              <li>Alinhamento;</li>
              <li>Repetição;</li>
              <li>Contraste.</li>
            </ol>
            <h3>Proximidade</h3>
            <p>
              <strong>
                As coisas conceitualmente próximas precisam estar visualmente
                próximas
              </strong>{" "}
              (Williams, 2013). Informações que "tem a ver" precisam estar
              próximas umas das outras, as que não tem tanto a ver, precisam
              ficar separadas. Esse conceito trata de organizar visualmente a
              informação. Quanto mais as coisas estão organizadas, mais fácil é
              entender, se torna mais simples de compreender.
            </p>
            <h3>Alinhamento</h3>
            <p>
              <strong>
                Organizar em um certo padrão, com uma certa segurança
              </strong>{" "}
              (Williams, 2013). Nenhum elemento de uma página, seja de papel ou
              online, pode ser colocada de maneira arbitrária. Cada item deve
              estar visualmente conectado a outro elemento na página. Não se
              deve "jogar" os elementos nela. O alinhamento nos permite ancorar
              as coisas em fios invisíveis que as liguem umas às outras.
            </p>
            <h3>Repetição</h3>
            <p>
              <strong>Repetição gera consistência e antecipação visual.</strong>{" "}
              (Dondis, 2015). O uso intencional de elementos visuais idênticos
              ou semelhantes confere unidade e coesão ao design. Por exemplo, o
              fato de os capítulos dos livros começarem com uma letra diferente
              faz com que o leitor consiga antever o que está acontecendo: a
              abertura de um novo capítulo. Quanto mais simples, mais
              sofisticado e elegante.
            </p>
            <blockquote>
              <q>A simplicidade é o mais alto nível de sofisticação.</q>{" "}
              <cite>Leonardo da Vinci</cite>
            </blockquote>
            <h3>Contraste</h3>
            <p>
              <strong></strong>
              <strong>
                É quando, no mesmo espaço, temos elementos <ins>muito</ins>{" "}
                diferentes. Se um item não é idêntico ao outro, ele deve ser{" "}
                <ins>muito</ins> diferente
              </strong>{" "}
              (Dondis, 2015). Essa é uma regra de ouro do design, onde a palavra{" "}
              <strong>muito</strong> é a chave.
            </p>
          </div>
          <div>
            <h2>Cores e Tipografia</h2>
            <h3>Cores</h3>
            <p>
              Estamos acostumados a viver em um mundo colorido. Mas como fazer
              para as cores serem harmoniosas em uma interface?
            </p>
            <p>
              Existem <strong>"dois tipos de cores"</strong>: as luzes e os
              pigmentos.{" "}
              <strong>
                Cores-luz são aquelas formadas pela incidência de qualquer tipo
                de raio luminoso
              </strong>
              , inclusive dos smartphones, televisores, aparelhos de som, etc. A
              soma de todas as cores-luz resulta em luz branca. Cores-luz seguem
              o modelo <strong>RGB (Red, Green, Blue)</strong> e é a forma como
              todos os aparelhos eletroeletrônicos emitem suas cores (Farina,
              2011). Já as{" "}
              <strong>
                cores-pigmento são aquelas produzidas a partir de algum composto
                químico, extraído da natureza ou forjado em indústrias
              </strong>
              . Os pigmentos são percebidos a partir de uma superfície
              reflexiva, ou seja, uma superfície que reflete aquela cor. A
              mistura de todos os pigmentos resulta na cor preta. Cores-pigmento
              seguem o modelo{" "}
              <strong>CMYK (Cyan, Magenta, Yellow, Black)</strong> e é a forma
              como todas as coisas são impressas (Dondis, 2015).
            </p>
            <p>
              É importante conhecer e destacar o{" "}
              <strong>círculo cromático</strong>, que se inicia com as{" "}
              <strong>cores primárias: vermelho, amarelo e azul</strong>. Não
              podemos criar as cores primárias por meio de misturas. Mas,
              misturar uma cor primária com a outra cor primária ao lado,
              podemos ir criando as cores secundárias. Depois é só ir misturando
              as cores com as que estão ao seu lado e teremos o círculo
              cromático.{" "}
              <strong>
                Cores complementares são as que estão no extremo oposto do
                círculo, ou seja, o maior contraste possível
              </strong>
              . Temos também as{" "}
              <strong>
                tríades, um conjunto de três cores equidistantes que ficam
                equilibradas
              </strong>{" "}
              em qualquer design. Essa combinação se inicia com a escolha de uma
              cor e criar um <strong>triângulo equilátero</strong>. Outro
              esquema, seria usar{" "}
              <strong>
                cores análogas, que é a combinação das cores ao lado da cor
                principal
              </strong>
              .
            </p>
            <h3>Tonalidades, Luzes, Sombras e Temperatura</h3>
            <p>
              É bem simples entender sobre <strong>luzes e sombras</strong>. A{" "}
              <strong>cor pura</strong> é chamada de <strong>matiz</strong>. Ao
              acrescentar branco a matiz, terá mais luz, ao acrescentar preto a
              matiz, terá mais sombra. No círculo cromático, na terceira posição
              de fora para dentro temos as cores matiz, as cores mais externas
              são sombras da matiz, as cores mais internas são luzes da matiz.
            </p>
            <p>
              As <strong>tonalidades</strong> se referem à qualidade particular
              de <strong>brilho, profundidade ou pureza</strong> de qualquer
              cor. Para criar <strong>contraste</strong>, é necessário alterar
              de forma radical as tonalidades, usar o{" "}
              <strong>máximo de contraste</strong>.
            </p>
            <p>
              As <strong>temperaturas</strong> das cores podem ser{" "}
              <strong>quentes ou frias</strong>. Cores quentes são utilizadas
              para representar calor, intensidade, festa, etc. As cores frias
              costumam representar elementos frios, noite, calmaria, etc. Cores
              quentes derivam do vermelho, alaranjado, amarelo. Já as cores
              frias, derivam do azul, verde roxo.
            </p>
            <h3>Tipografia</h3>
            <p>
              Também chamada de <strong>fontes</strong>, a{" "}
              <strong>tipografia</strong> é o{" "}
              <strong>desenho das letras</strong>. Também é uma das principais
              partes de um design, seja digital ou impresso. Existem,
              basicamente, cinco classificações de fontes:
            </p>
            <ul>
              <li>Com serifa;</li>
              <li>Sem serifa;</li>
              <li>Monoespaçadas;</li>
              <li>Script ou Handwriting;</li>
              <li>Símbolos.</li>
            </ul>
            <p>
              <strong>Serifa</strong> tem uma origem antiga, da época em que
              pessoas escreviam com penas (pombo, ganso ou pavão, dependendo da
              condição financeira) e tinteiro. Ao molhar a pena no tinteiro e
              depois escrever, algumas áreas do papel ficavam mais encharcadas,
              criando pequenas "bolhas" de tinta. Tempos depois, com a invensão
              da prensa de Gutenberg, em 1500, percebeu-se que os pequenos
              prolongamentos das letras contribuíam para leitura no papel, pois
              "ligavam" uma letra à outra. Em <strong>livros impressos</strong>,{" "}
              geralmente de literatura, onde a pessoa pretende mergulhar na
              história, é comum ser usado fontes <strong>com serifa</strong>. Já
              no computador, smartphones, etc, ou em{" "}
              <strong>livros de consulta</strong>, é comum serem usadas fontes{" "}
              <strong>sem serifa</strong>, pois naturalmente a tela proporciona
              uma experiência de leitura pior do que do papel, já que a
              incidência de iluminação sempre é um complicador para os olhos.
              Nesses casos, deixam a leitura mais simples pois não trazem tantos
              adereços.
            </p>
            <p>
              As fontes <strong>monoespaçadas</strong> são usadas em geral para
              fazer uma <strong>manção a um código de programação</strong>, no
              caso da informática, ou trazer um aspécto de{" "}
              <strong>máquina de escrever</strong> para passar uma ideia de
              coisa velha. São monoespaçadas pois todas as letras possuem o
              mesmo tamanho, o mesmo espaçamento e a mesma distância em tela.
            </p>
            <p>
              Fontes do tipo <strong>script ou handwriting</strong> são usadas
              para dar a impressão de que alguma pessoa{" "}
              <strong>escreveu com as próprias mãos</strong> o texto que está na
              tela. Já as do tipo <strong>símbolos</strong> são utilizadas
              apenas como <strong>decoração</strong> (Garfield, 2012).
            </p>
            <h3>Características das Fontes</h3>
            <p>
              A tipografia pode apresentar várias características. A primeira é
              o <strong>tamanho</strong>, ou seja, sua posição relativa em
              relação aos outros elementos do design. Uma fonte de 120 pontos
              fica gigante em uma folha de papel A4 mas fica minúscula em um
              outdoor. Cabe ao designer equilibrar a fonte em relação aos outros
              elementos da composição. É um erro usar uma fonte tão grande que
              ofusque os demais componentes, assim como é um erro utilizar uma
              fonte tão pequena que atrapalhe a legibilidade (Williams, 2013).
            </p>
            <p>
              O <strong>peso</strong>, que é a espessura do traço, também á algo
              a destacar. A maioria das fontes pertence a uma família
              tipográfica, um conjunto de variações dentro de um mesmo estilo.
              Dentro dessa variedade, podemos encontrar alguns pesos diferentes.
            </p>
            <ul>
              <li>Extralight;</li>
              <li>Regular;</li>
              <li>Itálico;</li>
              <li>Negrito;</li>
              <li>Extranegrito.</li>
            </ul>
            <p>
              Basicamente, usamos uma fonte <strong>regular</strong> para textos
              mais longos, pelo conforto de leitura. Fonte em{" "}
              <strong>negrito</strong> serve como destaque à mensagem, pois é
              praticamente impossível ignorá-la. Fonte em{" "}
              <strong>itálico</strong> são empregadas para dar um ar de
              sofisticação.
            </p>
            <p>
              A <strong>direção</strong> também é algo muito explorado no design
              tipográfico. O texto não precisa seguir a disposição tradicional
              da esquerda para a direita e de cima para baixo.{" "}
              <strong>
                Outras formas e direções podem ser usadas para criar impacto
                visual
              </strong>
              . Além disso, as cores das fontes e cores de fundo podem ser
              modificadas para obter resultados mais interessantes e que causam
              esse impacto.
            </p>
          </div>
          <div>
            <h2>História da UX</h2>
            <p>
              Algumas coisas são muito importantes destacar nessa interação
              entre o humano que está na frente da tela e o que está visualmente
              aparecendo na tela. Não é algo simples. É difícil e trabalhoso
              criar uma interface que realmente funciona para que o usuário se
              sinta confortável para utilizar a interface de forma interessante.
            </p>
            <p>
              A sigla <strong>UX</strong> significa{" "}
              <strong>User Experience</strong> ou{" "}
              <strong>Experiência do Usuário</strong>. Esse termo nem sempre foi
              utilizado assim. Na época que do Memex, por ser algo conceitual,
              não precisava de maiores expectativas para ser utilizado. Mas,
              quando surgiu o Eniac, foi necessário algum tipo de interface.
              Afinal, como uma pessoa poderia conversar com uma máquina lógica?
              Foi necessária a criação de algo que fizesse a comunicação entre o
              ser humano aqui fora e a máquina lá dentro. Foi necessária a
              criação de uma <strong>interface</strong>.
            </p>
            <p>
              As primeiras interfaces eram{" "}
              <strong>mudanças de cabos e switches</strong>, que, se um operador
              mudasse para um lado fazia uma coisa, para outro lado, fazia outra
              coisa. Logo depois, a <strong>IBM</strong>, começou a usar cartões
              perfurados no Eniac. Ou seja, uma pessoa programava o computador
              em um cartão que precisava ser furado e depois introduzido e lido
              pela máquina. Isso era muito confuso, talvez por isso foi
              abandonado tão logo chegaram os primeiros monitores, em que o
              programador poderia digitar o que queria que a máquina fizesse.
            </p>
            <p>
              Isso também não era tão simples, já que apenas alguém formado em
              processamento de dados (como era chamado na época) ou engenharia
              conseguiria fazer o computador realizar uma tarefa. Porém, isso
              mudou quando pessoas comuns passaram a utilizar um computador.
              Mas, para isso, foi preciso que as instruções não fossem tão
              complexas. Foi preciso algum tipo de interface que fovoreceu a
              compreensão e utilização daquela nova tecnologia (Moggridge,
              2007). Assim foram surgindo as{" "}
              <strong>interfaces gráficas</strong>, principalmente a partir do{" "}
              <strong>laboratório PARC (Palo Alto Research Center)</strong> da
              empresa <strong>Xerox</strong>. A ideia central era fazer com que
              pessoas comuns conseguissem utilizar aquele novo equipamento. Com
              isso, diversos pesquisadores começaram a tentar elaborar novas e
              melhores experiências para os utilizadores. Assim, na década de
              1980, vários cientistas, de várias áreas, começaram a configurar o
              que se chamou <strong>Interação Homem-Computador</strong>. Esse
              termo foi comum até 1990, quando foi modificado para{" "}
              <strong>design de interação</strong>, deslocando o centro do
              estudo para a inter-ação entre usuário e o computador. Esse termo
              foi utilizado até a primeira década do século XXI, até que foi
              substituído por <strong>User Experience - UX</strong>.
            </p>
            <h3>Design Centrado no Usuário</h3>
            <p>
              Como design significa projeto, a ideia principal é criar um
              projeto que torne a experiência do usuário a melhor possível,
              dados os limites daquela tecnologia. Isso quer dizer: produtos que
              sejam compreensíveis e facilmente utilizáveis. Para isso,{" "}
              <strong>
                o projeto deve ser capaz de determinar as ações que o usuário
                pode tomar a qualquer momento
              </strong>
              , e também{" "}
              <strong>
                deixar visíveis os comandos e as possibilidades de cada comando
              </strong>
              . Mais do que isso, deve-se{" "}
              <strong>
                tornar possível a visualização do modelo conceitual do sistema,
                as ações possíveis e suas consequências
              </strong>
              .
            </p>
            <p>
              O sistema também deveria ser capaz de mostrar ao seu utilizador o
              estado atual no qual se encontra, além de seguir os mapeamentos
              naturais entre as intenções e as ações exigidas, assim como ações
              e seus efeitos no sistema (Norman, 2006). Podemos dizer que{" "}
              <strong>
                o usuário tem que conseguir descobrir sozinho como fazer, o que
                fazer e o que está acontecendo
              </strong>
              . Quanto menos instruções forem necessárias, melhor será o design
              (Preece; Rogers; Sharp, 2005). Quanto mais a pessoa sentir que
              sabe fazer sem ter sido ensinada, melhor.
            </p>
            <p>
              Para isso ser simples,{" "}
              <strong>existem algumas regras básicas</strong> (Norman, 2006). A
              primeira delas deixa claro que{" "}
              <strong>
                o designer deve usar o conhecimento que a maior parte das
                pessoas possui em suas cabeças, ou que estão no mundo
              </strong>
              . Quando o conhecimento exigido para entender uma tarefa está
              disponível externamente, as pessoas aprendem melhor e de forma
              mais simples. Um bom modelo conceitual permite que, ao olhar para
              o sistema, o indivíduo já perceba mais ou menos como ele funciona
              e para que serve.
            </p>
            <p>
              Como designers, têm três modelos mentais que devemos prestar
              atenção:
            </p>
            <ol>
              <li>
                <strong>Modelo de design</strong>:
                <ul>
                  <li>
                    É o conceito que o projetista tem em sua mente, o que ele
                    quer para aquele sistema;
                  </li>
                </ul>
              </li>
              <li>
                <strong>Modelo de usuário</strong>:
                <ul>
                  <li>
                    Modelo mental que a pessoa comum tem ao usar aquele sistema;
                  </li>
                </ul>
              </li>
              <li>
                <strong>Imagem do sistema</strong>:
                <ul>
                  <li>
                    É a capacidade de o sistema ser compreendido por meio de sua
                    interface, ou seja, visualmente o sistema tem que ser capaz
                    de explicar para que serve e como funciona.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Funciona da seguinte maneira: O designer cria a imagem em sua
              mente e a desenha na imagem do sistema. O usuário cria um modelo
              em sua mente e dialoga com a imagem do sistema, que pode ou não,
              se adaptar aos seus anseios. Quando o sistema vai bem, o{" "}
              <strong>modelo de design</strong> e o{" "}
              <strong>modelo do usuário</strong> são muito próximos, isso quer
              dizer que o usuário entendeu tudo que o projetista criou. Como nem
              sempre é assim, é importante essa terceira camada que é a{" "}
              <strong>imagem do sistema</strong>.
            </p>
            <p>
              Quando a imagem do sistema não casa com o modelo do usuário,
              Norman (2006) afirma que a melhor solução para esse problema é
              criar um manual. Outra regra é simplificar ao máximo a estrutura
              de cada tarefa, fazendo com que o usuário faça mais com menos
              esforço. Quanto menos o usuário precisa se esforçar para entender
              algum comando, melhor para ele. Quanto mais óbvio, mais
              interessante para o utilizador do sistema.
            </p>
            <p>
              Primeiramente pode-se oferecer{" "}
              <strong>auxiliares mnemônicos - formas de memorização</strong>. Se
              o usuário conseguir memorizar o que precisa ser feito, sua
              capacidade de utilização melhorar a cada utilização. Outra coisa
              muito funcional é a utilização de instrumentos e indicadores, ou
              seja, deixar feedbacks do sistema mais visíveis para o usuário.
            </p>
            <p>
              Outra boa ideia é automatizar rotinas, mas manter as tarefas
              idênticas, como tarefas rotineiras de um aplicativo. A última das
              ideias é mudar a natureza das tarefas, deixar as coisas mais
              fáceis.
            </p>
            <p>
              A terceira regra de Norman (2006) é tornar as coisas visíveis, é
              assegurar que todos os procedimentos que o usuário precisa saber
              ou conhecer estão à sua disposição. Se um site possui um link,
              este deve estar visível, destacado (Nielsen, 2000). Isso envolve a
              quarta regra, que é a do mapeamento, que é criar um design que
              deixa à mostra tudo o que poderá ser feito. É muito importante nos
              certificarmos que o usuário do nosso sistema tenha a capacidade de
              determinar os relacionamentos entre interações e possíveis ações,
              entre ações e seus efeitos sobre o sistema (Norman, 2006), entre o
              que está acontecendo e o que é possível ser visto pelos nossos
              sentidos e a diferença entre o que está acontecendo no sistema e o
              que o usuário quer que aconteça. Daí a importância do feedback.
            </p>
            <p>
              A quinta regra fala sobre coersões naturais e artificiais, ou
              seja, o usuário é levado a fazer apenas uma coisa. Não deixar
              possibilidades para que ele faça algo errado ou que não foi
              previsto. O usuário deve fazer apenas uma coisa, e isso deve ser
              tarefa correta.
            </p>
            <p>
              A sexta regra diz que é importante projetar para o erro, ou seja,
              sempre presumir que o usuário possa clicar em algum lugar e gerar
              um erro. Que o usuário pode, por curiosidade ou equívoco, fazer
              algo que não estava previsto no funcionamento correto do
              equipamento. Por isso a importância de fazer o projeto também para
              o erro. É importante que o usuário possa reconhecer seu erro e
              recuperar alguma bobagem que tenha feito, ou seja, evitar ao
              máximo que ele erre. Porém, se errar, deve ter alguma forma de
              conter os dados desse erro.
            </p>
            <p>
              A última regra de Norman (2006) trata da padronização. Quando
              alguma coisa não pode ser projetada sem mapeamentos arbitrários e
              dificuldades, sempre se pode padronizar, ou seja, fazer com que as
              ações relacionadas trabalhem sempre da mesma forma, sejam ações,
              resultados, displays ou layouts inteiros. Nesse caso, a pessoa
              teria que aprender a usar o sistema. Entretanto, uma vez
              aprendido, tudo vai funcionar, pois são padronizados.
            </p>
            <h3>Metas das Interfaces e da UX</h3>
            <p>
              Observando tudo isso, chegamos a algumas conclusões sobre a
              interação sistema e usuário:
            </p>
            <blockquote>
              <q>
                Os sistemas, cada dia que passa, precisam ser mais
                satisfatórios, mais agradáveis, mais divertidos, mais
                interessantes. Mas também precisam ser mais úteis, mais
                motivadores, mais agradáveis ao olhar, mais incentivadores de
                criatividade, mais compensadores e mais emocionalmente
                adequados.
              </q>{" "}
              <cite> - (Preece, Rogers e Sharp, 2005)</cite>
            </blockquote>

            <p>
              Quanto mais dessas características, mais sucesso terá. As metas de
              uma interface são várias e interdependentes. É preciso ser
              eficiente no uso para que seja compensador e emocionalmente
              adequado. Da mesma forma, para ser motivador é preciso ter boa
              utilidade, e para ser interessante é preciso ser fácil de
              entender.
            </p>
            <h3>Não me faça pensar</h3>
            <p>
              Esse é um dos conceitos e um conselho dos mais pertinentes de um
              dos livros mais importantes sobre UX:{" "}
              <strong>Não me faça pensar!</strong> (Steve Krug, 2014). Ele diz
              em seu livro que{" "}
              <strong>
                quando entra em uma página na internet, ele não está interessado
                em entender como a página funciona, ele quer apenas o conteúdo
                ali presente.
              </strong>{" "}
              Não é interessante para o usuário aprender sobre a página, apenas
              consumir o conteúdo exposto. A página em si deve "desaparecer"
              para o usuário.
            </p>
            <p>
              Não nos preocupamos muito como essas plataformas de redes sociais
              digitais funcionam, queremos somente ver os vídeos e fotos
              (Santos, 2022).{" "}
              <strong>
                O usuário deve ser capaz de entender a página sem se esforçar
                para isso. Ela deve ser evidente, simples e direta para que
                nenhuma pessoa precise pensar muito em como navegar.
              </strong>
            </p>
            <p>
              Há também uma questão comercial envolvida:{" "}
              <strong>
                Quanto menos as pessoas demoram para entender a página, mais
                estão propensas a gastar
              </strong>
              . Páginas e aplicativos confusos fazem os usuários se afastarem, e
              com isso, também afastam as possibilidades de consumo daquele
              ambiente. Cada dúvida que temos aumenta nosso trabalho, todos
              odeiam ter trabalho. Além disso, quando damos trabalho às pessoas,
              as destraímos de seu objetivo principal. Por mínimas que sejam as
              distrações, elas vão se somando até chegar ao abandono do website
              ou app.
            </p>
            <p>
              <strong>
                Normalmente as pessoas não gostam de precisar descobrir alguma
                coisa, principalmente quando seu foco é outro
              </strong>{" "}
              (Krug, 2014). Além disso, o usuário pode pensar que o responsável
              pelo site é desleixado por não deixar tudo óbvio, o que vai
              diminuir a confiança no site.
            </p>
            <p>
              <strong>
                A meta do projetista de interface web é deixar tudo de forma
                clara na camada de "conversa" com seu usuário
              </strong>
              . Quanto menos o usuário pensar em como usar o site, melhor. Sites
              e apps devem ser autoexplicativos, devem ser tão simples que até
              uma pessoa leiga consiga usar.
            </p>
            <p>
              <strong>
                É muito importante deixar tudo claro e evidente. Devemos lembrar
                que o website em si deve ser "invisível"
              </strong>
              . Um site de vendas deve priorizar os produtos, um site de um jogo
              deve priorizar a diversão e um site de informação deve sempre
              deixar a informação em primeiro plano. Quanto mais evidente forem
              as instruções, melhor. Todos os usuários pensam "não me faça
              pensar".
            </p>
            <h3>Satisfazimento</h3>
            <p>
              Muita gente imagina que sabemos como usar a internet ou nossos
              celulares, mas, na verdade não sabemos, apenas utilizamos. Krug
              (2014) afirma que usamos uma coisa chamada{" "}
              <strong>satisfazimento</strong>, expressão cunhada pelo economista{" "}
              <strong>Herbert Simon</strong>, na década de 1950. Mas Krug não
              pegou essa ideia do economista, e sim de um psicólogo chamado{" "}
              <strong>Gary Klein</strong> (2001), que a utilizava para pensar
              que a maior parte das pessoas não escolhem a melhor opção, mas
              sim, escolhem a primeira opção razoável; daí satisfazimento.
            </p>
            <p>
              Mas por que não escolher a melhor opção? Primeiramente, porque
              estamos com pressa. Depois, porque se errarmos na escolha, nada
              acontece, é só voltar e clicar em outro link ou outro botão. Não
              há uma punição ou grande perda de tempo na maior parte das vezes.
              A terceira razão é que avaliar as opções não necessariamente vai
              melhorar nossas chances de escolher melhor. Quando os sites são
              mal projetados, passar horas olhando antes de clicar não vai
              ajudar em nada. Por último, adivinhar é mais divertido e menos
              trabalhoso do que ficar pensando. Simplesmente clicamos e "vemos
              no que dá", se der errado, refazemos.
            </p>
            <h2>Público Alvo</h2>
            <h3>Quem é o Usuário?</h3>
            <p>
              Quase nunca sabemos de verdade quem são essas pessoas.{" "}
              <strong>
                É impossível saber quem de fato utiliza nosso sistema
              </strong>
              . Ainda que façamos testes e vejamos pessoas utilizando, isso não
              significa que as pessoas de fora do local de trabalho utilizarão
              da mesma forma. O que temos que fazer é{" "}
              <strong>
                admitir que ninguém consegue definir quem é o usuário do sistema
              </strong>{" "}
              e, muito menos, definir o que ele vai fazer ao longo do tempo.
              Nossa missão é fazer o melhor para a grande maioria das pessoas.
            </p>
            <p>
              Krug (2014, p. 7) diz que para algo ser usável, é necessário que{" "}
              <q>
                uma pessoa na média (ou mesmo abaixo da média) será capaz de
                descobrir como usá-lo para desempenhar algo sem obter ônus
                maiores que os bônus
              </q>
              . Ou seja, nosso projeto deve ser feito pensando em pessoas
              medianas ou abaixo da média, para pessoas com pouco conhecimento.{" "}
              <strong>
                É importante que essas pessoas sintam que o uso da tecnologia é
                útil de alguma forma
              </strong>
              , nem que seja para uma diversão, apenas passar o tempo, o usuário
              deve sentir que seu tempo está sendo bem empregado ao usar o
              sistema.
            </p>
            <p>
              Isso não é tudo, pois existem dois momentos distintos do usuário:
            </p>
            <ul>
              <li>
                <strong>Usar um sistema por dever ou obrigação</strong>:
                <ul>
                  <li>Fazer declaração do imposto de renda;</li>
                  <li>Sistema de ponto da empresa;</li>
                  <li>Aplicativos de transporte;</li>
                </ul>
              </li>
              <li>
                <strong>Usar um sistema por vontade própria</strong>:
                <ul>
                  <li>Redes sociais;</li>
                  <li>Streaming de vídeos;</li>
                  <li>Apps de música;</li>
                </ul>
              </li>
            </ul>
            <p>
              Nos casos em que os usuários são compelidos a utilizar certo
              sistema, a vida do programador UX fica mais fácil, já que não pode
              haver concorrência ou fuga do projeto. Mas,{" "}
              <strong>
                na maioria das vezes, os usuários não estão presos à plataforma
              </strong>
              , eles podem escolher entre um sistema ou um sistema concorrente.
              Nesses casos, é melhor saber quem são os usuários, o que{" "}
              <strong>NÃO É uma tarefa simples</strong>.
            </p>
            <p>
              Muitas vezes pensamos no usuário como a pessoa que efetivamente
              vai usar o sistema, o que nem sempre é verdade e nem sempre são só
              essas pessoas. Preece, Rogers e Sharp (2005){" "}
              <strong>
                lembram que usuários, muitas vezes, são as pessoas que gerenciam
                os usuários diretos
              </strong>
              .
            </p>
            <p>Também são usuários:</p>
            <ul>
              <li>
                <strong>Quality Assurance Tester:</strong>
                <ul>
                  <li>aqueles que são contratados para testar sistemas.</li>
                </ul>
              </li>
              <li>
                <strong>Quem compra o app:</strong>
                <ul>
                  <li>
                    tem a escolha de comprar do fornecedor A ou de seu
                    concorrente B.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Também podemos pensar como Ken Eason(1989), o que não exclui a
              visão anterior. Existem três níveis de usuários:
            </p>
            <ol>
              <li>
                <strong>Primários:</strong>
                <ul>
                  <li>que utilizam frequentemente o sistema;</li>
                </ul>
              </li>
              <li>
                <strong>Secundários:</strong>
                <ul>
                  <li>
                    que eventualmente utilizam ou utilizam através por meio de
                    um intermediário;
                  </li>
                </ul>
              </li>
              <li>
                <strong>Terciários:</strong>
                <ul>
                  <li>
                    aqueles que nem precisam utilizar o sistema para serem
                    afetados por ele.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Uma "pegadinha" que existe é que: quem contrata um sistema, nem
              sempre, ou quase nunca, é um utilizador assíduo. Geralmente é um
              burocrata que vai, eventualmente, comprar um app ou site. Devemos
              agradá-lo também, mas sem desagradar o usuário final, ou o sistema
              NÃO será implantado com sucesso.
            </p>
            <h3>O Público Alvo</h3>
            <p>
              Definir um público alvo{" "}
              <strong>NÃO é exatamente muito simples, mas é essencial</strong>.
              É preciso lembrar que todo projeto nasce de uma necessidade que,
              segundo Peters (2024), pode ser identificada pelos usuários comuns
              ou por alguém envolvido no processo de desenvolvimento de alguma
              outra coisa que identificou um gargalo. Com a necessidade
              identificada, é importante juntar todas as informações sobre o que
              fazer e construir um <strong>briefing</strong>.
            </p>
            <p>
              O briefing, em geral,{" "}
              <strong>
                é construído pela pessoa (ou pessoas) que deseja ter o melhor do
                sistema, e ali coloca tudo o que o sistema DEVE fazer e o que
                NÃO pode fazer. Além de dizer mais ou menos como deverá ser a
                proposta gráfica e de usabilidade do sistema
              </strong>
              . O briefing deve ser bem feito para que não haja dissabores e
              para que o desenvolvedor não jogue serviço fora. Briefing{" "}
              <strong>mal feito irá gerar um trabalho não desejado</strong>{" "}
              fazendo-se perder parte do trabalho (ou até o trabalho todo)
              (Memória, 2005). O Briefing deve ser bem detalhado, inclusive{" "}
              <strong>sobre o usuário ideal daquele sistema</strong>.
            </p>
            <p>
              O público alvo sempre é diferente em cada projeto. É arriscado
              julgar que os públicos são iguais. É importante investigar os
              perfis dos futuros utilizadores do sistema e os modos de
              utilização. Os perfis devem estar bem ancorados em fatos e não em
              achismos.
            </p>
            <p>
              É interessante criar uma <strong>Persona</strong>, um{" "}
              <strong>
                personagem fictício que ajudará a entender melhor os
                comportamentos do público alvo
              </strong>
              . Para isso, primeiro é preciso coletar dados de possíveis
              clientes ou futuros usuários. Com isso, sabemos mais ou menos a
              idade, o poder aquisitivo e a predisposição ao uso de um site ou
              app. Na segunda fase, é interessante realizar perguntas, formais
              ou informais a possíveis utilizadores. Assim, é possível criar a{" "}
              <strong>Persona</strong> que poderá interagir com o sistema em
              questão.
            </p>
            <p>
              Criar essa Persona é muito mais difícil que somente presumir o
              público alvo,{" "}
              <strong>
                pois este é mais genérico, enquanto que a Persona, por mais que
                seja fictícia, é mais restrita, mais contundente
              </strong>
              . Melhor ainda, seria criar várias Personas, de acordo com o
              escopo do projeto e o tempo de duração dele, já que criar uma
              Persona toma tempo.
            </p>
            <h3>Mapas e Breadcrumbs</h3>
            <p>
              O usuário <strong>NUNCA pode estar perdido no site</strong>. A
              pior coisa para uma pessoa que está navegando em um site ou app, é
              sentir-se predida, sem saber onde ir ou clicar. Para evitar isso,
              uma das coisas interessantes é utilizar as informações, deixar
              claro onde o usuário está.
            </p>
            <p>
              Sites bem estruturados, na parte superior da página, estão as{" "}
              <strong>
                <q>migalhas de pão</q>, as breadcrumbs
              </strong>{" "}
              (Krug, 2014). Essas indicações são preciosas pois conferem a
              capacidade de navegação e a hierarquia. Segundo Felipe Memória
              (2005), o usuário precisa da resposta dessas três perguntas:
            </p>
            <ol>
              <li>Onde estou?</li>
              <li>Onde estive?</li>
              <li>Aonde posso ir?</li>
            </ol>
            <p>
              Se os breadcrumbs responderem essas três perguntas, o usuário não
              ficará perdido ou frustrado com algo que não conhece. Um usuário
              comum não sabe exatamente como é a empresa ou como ela funciona.
              Os breadcrumbs servem como hierarquia visual para indicar como o
              site é estruturado. Isso faz com que o visitante preste atenção em
              outras modalidades ou informações, principalmente em sites de
              vendas de produtos ou serviços.
            </p>
            <p>
              Segundo Krug (2014), as pessoas não tem noção se o site tem 10,
              100 ou 1000 páginas,{" "}
              <strong>
                como saber se já explorou tudo se nem sabe a dimensão?
              </strong>{" "}
              Além disso, as pessoas também não tem noção de direção na web, não
              navegam de forma linear. Normalmente vão vagando até encontrar uma
              indicação do que lhe interessa.
            </p>
            <p>
              O <strong>Rodapé da página</strong> também se destaca na questão
              do direcionamento. Sites importantes e de grande porte tem uma
              espécie de mapa do site. Com esse mapa, o usuário pode localizar
              as áreas mais importantes do site, podendo fazer uma navegação
              mais precisa.
            </p>
            <p>
              Todo site tem uma <strong>homepage ou landing page</strong>. Essa
              página é o começo de tudo e tem a função de dar segurança ao
              usuário pois, se ele se perder, basta clicar no botão{" "}
              <strong>home ou no ícone da "casinha"</strong> e voltar a navegar
              do início e refazer sua jornada.
            </p>
            <p>
              Uma{" "}
              <strong>
                homepage bem estruturada é fundamental para um bom projeto de
                website e tão primordial quanto em um projeto de app para
                smartphone
              </strong>
              . Além disso,{" "}
              <strong>uma landing page é a fachada da empresa</strong>. Uma
              página de abertura mal estruturada é um convite para o usuário{" "}
              <strong>se retirar</strong>.
            </p>
            <p>
              Também é importante ter um bom sistema de buscas. Por falta de
              tempo ou disposição, as pessoas não vão ficar muito tempo
              navegando em sites muito grandes. Um bom sistema de buscas faz com
              que o usuário vá direto à informação que busca. Segundo Nielsen
              (2000), um website deve ter sempre a janela de busca disponível a
              qualquer momento para que o usuário busque o que quiser na hora
              que desejar.
            </p>
            <h3>Quais palavras usar?</h3>
            <p>
              Lacan (1998) chega a dizer que{" "}
              <q>o inconsciente é estruturado como a linguagem</q>. Tudo o que
              somos em nossas vidas é regido pela linguagem e pela forma mais
              comum dela, que é a língua. Na internet, não funciona escrever
              como Camões, precisamos de informações rápidas.
            </p>
            <p>
              Uma das principais{" "}
              <strong>
                regras da navegação é omitir as palavras desnecessárias
              </strong>
              . Nesse quesito, Krug (2014), Memória (2005), Preece, Rogers e
              Sharp (2005) e Nielsen (2000), são unânimes:{" "}
              <strong>na internet, menos é mais</strong>. Isso{" "}
              <strong>
                reduz a quantidade de ruídos ou interferências nas páginas, e dá
                maior destaque àquilo que interessa, além de deixar as páginas
                menores
              </strong>
              .
            </p>
            <p>
              O importante é lembrar que{" "}
              <strong>a navegação é para o usuário</strong>, não para a empresa
              ou quem trabalha nela (a menos que seja uma intranet). Siglas ou
              palavras que só a empresa conhece devem ser retiradas, pois
              ninguém de fora conseguem entender.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default InterfaceWeb;
