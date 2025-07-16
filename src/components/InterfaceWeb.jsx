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
          </div>
        </>
      )}
    </section>
  );
};

export default InterfaceWeb;
