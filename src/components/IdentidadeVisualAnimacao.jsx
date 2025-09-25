import { useState } from "react";
import aula1 from "../assets/audiosM7/aula01.mp3";
import aula2 from "../assets/audiosM7/aula02.mp3";
import aula3 from "../assets/audiosM7/aula03.mp3";
import aula4 from "../assets/audiosM7/aula04.mp3";

import aula5 from "../assets/audiosM7/aula05.mp3";
import aula6 from "../assets/audiosM7/aula06.mp3";
import aula7 from "../assets/audiosM7/aula07.mp3";
import aula8 from "../assets/audiosM7/aula08.mp3";

const IdentidadeVisualAnimacao = () => {
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
        <h2>IDENTIDADE VISUAL E ANIMAÇÃO</h2>
        <img src="/seta.png" onClick={visualizar} className={classeGirarImg} />
      </div>
      {abrir && (
        <>
          <div>
            <h3>Introdução à Computação Gráfica</h3>
            <div className="audios">
              <audio src={aula1} controls></audio>
              <audio src={aula2} controls></audio>
              <audio src={aula3} controls></audio>
              <audio src={aula4} controls></audio>
            </div>
            <p>
              A computação gráfica e a animação utilizam ferramentas matemáticas
              e computacionais para criar e processar imagens. Este campo
              abrange:
            </p>
            <ul>
              <li>
                <strong>Fundamentos:</strong>
                <ul>
                  <li>
                    O que é computação gráfica, suas subáreas e a geometria para
                    construir imagens.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Imagens:</strong>
                <ul>
                  <li>Entendimento de imagens matriciais.</li>
                </ul>
              </li>
            </ul>
            <p>
              O objetivo é compreender o estudo da computação gráfica e do
              processamento digital, além de explorar a composição e construção
              de imagens.
            </p>
            <h4>Requisitos para Iniciar</h4>
            <strong>Hardware:</strong>
            <ul>
              <li>
                <strong>Processadores: </strong>
                <ul>
                  <li>
                    Geralmente, são usados microprocessadores de uso geral e
                    GPUs (Graphics Processing Unit) dedicadas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dispositivos de Captura:</strong>
                <ul>
                  <li>
                    Câmeras digitais e scanners (rádio, laser, ultrassom) para
                    captar elementos do mundo real.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Realidade Virtual/Aumentada:</strong>
                <ul>
                  <li>
                    Óculos e máscaras específicas para integração completa.
                  </li>
                </ul>
              </li>
            </ul>
            <strong>Software:</strong>
            <ul>
              <li>
                <strong>Bibliotecas e APIs:</strong>
                <ul>
                  <li>
                    Utilização de bibliotecas ou APIs (Application Programming
                    Interfaces) voltadas para o desenvolvimento de aplicações
                    gráficas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tipos de Software:</strong>
                <ul>
                  <li>
                    <strong>Modelagem 3D e Animação:</strong> Ferramentas para
                    modelagem, animação e visualização.
                  </li>
                  <li>
                    <strong>Edição de Imagens:</strong> Aplicações com
                    ferramentas para segmentação, filtragem, compressão, etc.
                  </li>
                  <li>
                    <strong>Uso Específico:</strong> Programas para visualização
                    de imagens médicas, processamento de imagens de satélite,
                    entre outros.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O que é Computação Gráfica?</h4>
            <p>
              A <strong>computação gráfica</strong> lida com o processamento de
              elementos gráficos para diversas finalidades. Ela envolve a
              criação de imagens digitais, desde a modelagem ou captura de
              objetos do mundo real até sua exibição em uma tela, impressão ou
              outro tipo de representação.
            </p>
            <h4>Aplicações</h4>
            <p>
              Aplicações de computação gráfica estão em diversas áreas, como:
            </p>
            <ul>
              <li>Jogos digitais.</li>
              <li>Filmes e animações.</li>
              <li>Sistemas de reconhecimento (impressão digital, facial).</li>
              <li>Interfaces de usuário e telas sensíveis ao toque.</li>
              <li>Criação de modelos 3D.</li>
              <li>Sistemas de navegação para robôs.</li>
            </ul>
            <h4>O Processo</h4>
            <ol>
              <li>
                <strong>Mundo Real como Ponto de Partida:</strong>
                <ul>
                  <li>
                    Uma cena ou objeto do mundo real é convertido para o meio
                    digital através de dois processos principais:
                    <ul>
                      <li>
                        <strong>Modelagem:</strong> Criação de representações
                        digitais de objetos (geralmente 3D) a partir de
                        equações, pontos, superfícies ou outras formas
                        geométricas. Pode ser feita manualmente ou com softwares
                        específicos.
                      </li>
                      <li>
                        <strong>Captura:</strong> Registro de dados do mundo
                        real com sensores, como câmeras fotográficas ou máquinas
                        de ressonância magnética, para gerar uma imagem digital.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Transformações:</strong>
                <ul>
                  <li>
                    A imagem digital pode sofrer <strong>transformações</strong>{" "}
                    geométricas (como rotação e translação) ou ser serializada
                    para armazenamento em arquivos. Este processo utiliza
                    modelos matemáticos para descrever e modificar a imagem.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Realidade Virtual e Aumentada</h4>
            <p>
              A computação gráfica também é fundamental para o conceito de
              realidades sintéticas.
            </p>
            <ul>
              <li>
                <strong>Realidade Material:</strong>
                <ul>
                  <li>O mundo como o conhecemos, sem imagens sintéticas.</li>
                </ul>
              </li>
              <li>
                <strong>Realidade Virtual (RV):</strong>
                <ul>
                  <li>
                    Um ambiente completamente virtual criado para imergir o
                    usuário, isolando-o da realidade material.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Realidade Aumentada (RA): </strong>
                <ul>
                  <li>
                    Sobreposição de elementos gráficos virtuais sobre uma imagem
                    capturada do mundo real. Por exemplo, inserir um objeto 3D
                    na tela de um celular, que o exibe como se estivesse no
                    ambiente real.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Subáreas da Computação Gráfica</h4>
            <p>
              A computação gráfica é dividida em quatro subáreas principais,
              cada uma com objetivos específicos:
            </p>
            <ol>
              <li>
                <strong>Modelagem Tridimensional</strong>
                <ul>
                  <li>
                    <strong>Objetivo:</strong> Criar modelos matemáticos 3D de
                    objetos ou cenas.
                  </li>
                  <li>
                    <strong>Processo:</strong> Pode ser feita manualmente ou,
                    para maior realismo, com o uso de imagens capturadas do
                    mundo real (ex: scanners 3D a laser) ou a partir de imagens
                    2D (reconstrução).
                  </li>
                  <li>
                    <strong>Produtos:</strong> Modelos 3D realistas, que podem
                    ter características extras como cor e textura.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Síntese de Imagens</strong>
                <ul>
                  <li>
                    <strong>Objetivo:</strong> Produzir imagens sintéticas a
                    partir de modelos matemáticos e transformações.
                  </li>
                  <li>
                    <strong>Processo:</strong> Usa equações e construções
                    geométricas para criar imagens digitais. É a base para
                    interfaces gráficas e animações.
                  </li>
                  <li>
                    <strong>Foco:</strong> Criação de imagens a partir de
                    descrições matemáticas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Visão Computacional</strong>
                <ul>
                  <li>
                    <strong>Objetivo:</strong> Extrair informações úteis de
                    imagens capturadas do mundo real.
                  </li>
                  <li>
                    <strong>Processo:</strong> Analisa imagens digitais para
                    identificar objetos de interesse. A imagem pode passar por
                    pré-processamento (filtragem, segmentação) para facilitar a
                    extração de características.
                  </li>
                  <li>
                    <strong>Foco:</strong> Análise e interpretação de imagens.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Processamento de Imagens</strong>
                <ul>
                  <li>
                    <strong>Objetivo:</strong> Tratar e alterar imagens digitais
                    para obter novas imagens digitais modificadas.
                  </li>
                  <li>
                    <strong>Processo:</strong> Realiza modificações como
                    filtragem, segmentação, compressão/descompressão. Dedica-se
                    à edição de imagens e à preparação para impressão.
                  </li>
                  <li>
                    <strong>Foco:</strong> Manipulação e edição de imagens
                    existentes.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Geometria na Construção de Imagens</h4>
            <p>
              A geometria é fundamental para a criação de imagens
              computacionais. Ela utiliza conceitos da geometria analítica, como
              equações e funções, para descrever e construir formas.
            </p>
            <strong>Retas e Cônicas</strong>
            <ul>
              <li>
                <strong>Retas:</strong>
                <ul>
                  <li>
                    A equação geral de uma reta em 2D é Ax+By+C=0. As constantes
                    A, B e C definem sua inclinação e posição.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Círculos: </strong>
                <ul>
                  <li>
                    Um círculo tem a equação (x−h) 2 +(y−k) 2 =r 2 , onde (h,k)
                    é o centro e r é o raio.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cônicas: </strong>
                <ul>
                  <li>
                    São curvas formadas pela interseção de um plano com um cone.
                    Incluem:
                    <ul>
                      <li>
                        <strong>Círculos</strong>
                      </li>
                      <li>
                        <strong>Elipses</strong>
                      </li>
                      <li>
                        <strong>Parábolas</strong>
                      </li>
                      <li>
                        <strong>Hipérboles</strong>
                      </li>
                      <li>
                        Cada uma tem sua própria equação específica, cujas
                        constantes definem suas propriedades geométricas.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Funções Matemáticas</h4>
            <p>
              As funções são usadas para construir formas mais complexas. Elas
              relacionam elementos de um conjunto (domínio) com elementos de
              outro (contradomínio).
            </p>
            <ul>
              <li>
                <strong>Funções Contínuas:</strong>
                <ul>
                  <li>
                    Têm domínio e contradomínio de números reais, resultando em
                    gráficos contínuos (linhas ou superfícies). Ex: f(x)=x 2
                    (parábola) e f(x,y)=sin(x)sin(y) (superfície ondulada).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Funções Discretas:</strong>
                <ul>
                  <li>
                    Têm domínio e contradomínio de números inteiros. O gráfico é
                    uma série de pontos, não uma linha contínua. Ex: f(n)=n e
                    f(n,m)=n+m.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Imagens Vetoriais</h4>
            <p>
              São imagens descritas completamente por equações e funções
              matemáticas. Elas não têm limites de resolução e podem ser
              redimensionadas infinitamente sem perder qualidade. A cor e a
              transparência também são definidas por atributos matemáticos. As
              imagens vetoriais são representações sintéticas da realidade e,
              quando visualizadas, são <strong>digitalizadas</strong> para se
              tornarem <strong>imagens digitais</strong>.
            </p>
            <h4>Imagem Matricial</h4>
            <p>
              Uma <strong>imagem matricial</strong>, também conhecida como{" "}
              <strong>raster</strong> ou <strong>bitmap</strong>, é uma imagem
              digital representada por uma matriz de valores. Cada elemento
              dessa matriz é um <strong>pixel</strong> (picture element).
            </p>
            <ul>
              <li>
                <strong>Estrutura:</strong>
                <ul>
                  <li>
                    A imagem é armazenada em uma matriz bidimensional.
                    <ul>
                      <li>
                        As colunas e linhas representam as coordenadas (x,y).
                      </li>
                      <li>
                        O valor de cada célula da matriz determina, por exemplo,
                        o tom de cinza (do preto, valor 0, ao branco, valor
                        255).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Armazenamento:</strong>
                <ul>
                  <li>
                    São armazenadas em arquivos que contêm os dados de todos os
                    pixels.
                  </li>
                  <li>
                    Formatos como <strong>BMP</strong> são arquivos sem
                    compactação.
                  </li>
                  <li>
                    Para reduzir o tamanho, usam-se formatos comprimidos, como
                    <strong>TIFF, JPEG e PNG</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Diferença entre Matricial e Vetorial:</strong>
                <ul>
                  <li>
                    <strong>Imagens Matriciais (como fotos):</strong>
                    <ul>
                      <li>
                        Armazenam cada pixel individualmente. Perdem qualidade
                        ao serem ampliadas.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Imagens Vetoriais (como ícones, logos): </strong>
                    <ul>
                      <li>
                        Armazenam apenas descritores de formas (equações
                        matemáticas). Podem ser ampliadas indefinidamente sem
                        perda de qualidade, pois o programa as "digitaliza"
                        (renderiza) na resolução desejada no momento da
                        exibição.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>Matrizes na Computação Gráfica</h3>
            <div className="audios">
              <audio src={aula1} controls></audio>
              <audio src={aula2} controls></audio>
              <audio src={aula3} controls></audio>
              <audio src={aula4} controls></audio>
            </div>
            <ul>
              <li>
                <strong>O que são?</strong>
                <ul>
                  <li>
                    Uma matriz é uma estrutura de dados bidimensional (linhas e
                    colunas) onde todos os elementos são do mesmo tipo. Na
                    computação gráfica, elas são a base para{" "}
                    <strong>transformações geométricas</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Por que são importantes?</strong>
                <ul>
                  <li>
                    As transformações como translação, escala, rotação e
                    reflexão são implementadas através de{" "}
                    <strong>cálculos de matrizes</strong>, o que justifica a
                    necessidade de placas de vídeo dedicadas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tipos de matrizes:</strong>
                <ul>
                  <li>
                    <strong>
                      Matriz genérica: tem m linhas e n colunas (ex: uma matriz
                    </strong>
                    2x3 tem 2 linhas e 3 colunas).
                  </li>
                  <li>
                    <strong>Vetor:</strong> uma matriz com apenas uma linha ou
                    uma coluna.
                  </li>
                  <li>
                    <strong>
                      Matriz quadrada: tem o mesmo número de linhas e colunas.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Matriz identidade (I): uma matriz quadrada que age como o
                    </strong>
                    número 1 em cálculos com matrizes.
                  </li>
                </ul>
              </li>
            </ul>
            <h4></h4>
            <ul>
              <li>
                <strong>Soma e Subtração:</strong>
                <ul>
                  <li>
                    Só podem ser feitas entre matrizes com as{" "}
                    <strong>mesmas dimensões</strong>
                    (mesmo número de linhas e colunas).
                  </li>
                  <li>
                    A operação é realizada <strong>elemento a elemento</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Transposição:</strong>
                <ul>
                  <li>
                    É a simples <strong>troca das linhas pelas colunas</strong>.
                  </li>
                  <li>A transposta de uma matriz identidade é ela mesma.</li>
                </ul>
              </li>
              <li>
                <strong>Multiplicação:</strong>
                <ul>
                  <li>
                    É a operação mais complexa e essencial para transformações
                    gráficas.
                  </li>
                  <li>
                    <strong>Pré-requisito:</strong> O número de colunas da{" "}
                    <strong>primeira matriz</strong> deve ser{" "}
                    <strong>igual</strong> ao número de linhas da segunda
                    matriz.
                  </li>
                  <li>
                    <strong>Resultado:</strong> A matriz-produto terá o número
                    de linhas da primeira matriz e o número de colunas da
                    segunda.
                  </li>
                  <li>
                    <strong>Como funciona:</strong> Cada elemento da
                    matriz-produto é o resultado da{" "}
                    <strong>soma das multiplicações</strong> dos elementos da
                    linha da primeira matriz pelos elementos da coluna da
                    segunda.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Transformações Geométricas</h4>
            <ul>
              <li>
                <strong>Como um ponto é representado? </strong>
                <ul>
                  <li>
                    Um ponto com coordenadas (x,y) pode ser representado como
                    uma <strong>matriz coluna</strong>, como [x y]. Isso
                    facilita as operações matemáticas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>O que é uma transformação? </strong>
                <ul>
                  <li>
                    É o processo de mover ou alterar a posição de um ponto. Isso
                    é feito multiplicando o vetor do ponto por uma{" "}
                    <strong>matriz de transformação</strong> (T). A fórmula é: P
                    ′ =T×P.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Como desfazer uma transformação?</strong>
                <ul>
                  <li>
                    Para reverter a transformação, basta aplicar a{" "}
                    <strong>matriz inversa</strong> (T −1 ), ou seja, P=T −1 ×P
                    ′ .
                  </li>
                </ul>
              </li>
              <li>
                <strong>Exemplo:</strong>
                <ul>
                  <li>
                    Um ponto P no plano bidimensional é transformado em P ′
                    usando uma matriz T.
                  </li>
                  <li>
                    Essa mesma lógica se aplica a pontos em três dimensões, onde
                    a matriz de transformação é maior para acomodar as
                    coordenadas x,y e z.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Translação e Escala</h4>
            <p>
              A animação gráfica usa <strong>transformações geométricas</strong>{" "}
              para mover ou alterar imagens e modelos 3D, e essas transformações
              são feitas usando a <strong>multiplicação de matrizes</strong>.
            </p>
            <h4>Translação (Movimentação)</h4>
            <ul>
              <li>
                <strong>O que é?</strong>
                <ul>
                  <li>
                    É o movimento de um objeto, deslocando cada coordenada por
                    um valor fixo. Por exemplo, mover um objeto 2 unidades para
                    a direita no eixo X e 2 unidades para cima no eixo Y.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Como funciona? </strong>
                <ul>
                  <li>
                    Para realizar a translação com matrizes, é preciso adicionar
                    uma dimensão extra.
                    <ul>
                      <li>
                        <strong>Em 2D:</strong> Usa-se a matriz de translação T
                        T ​ = ​ 1 0 0 ​ 0 1 0 ​ d x ​ d y ​ 1 ​ ​ , onde d x ​ e
                        d y ​ são os valores de deslocamento nos eixos X e Y.
                      </li>
                      <li>
                        <strong>Em 3D:</strong> O mesmo conceito se aplica, com
                        uma matriz maior que inclui o eixo Z.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Escala (Redimensionamento)</h4>
            <ul>
              <li>
                <strong>O que é?</strong>
                <ul>
                  <li>
                    É a alteração das dimensões de um objeto, aumentando ou
                    diminuindo seu tamanho.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Como funciona?</strong>
                <ul>
                  <li>
                    Multiplica-se as coordenadas por um fator de escala (s x ​
                    ,s y).
                    <ul>
                      <li>
                        Em 2D: A matriz de escala é T S ​ = ​ s x ​ 0 0 ​ 0 s y
                        ​ 0 ​ 0 0 1 ​ ​ .
                      </li>
                      <li>Se s&gt;1, o objeto aumenta.</li>
                      <li>Se 0&lt;s&lt;1, o objeto diminui.</li>
                      <li>
                        <strong>Em 3D:</strong> O mesmo conceito se aplica, com
                        um fator de escala para o eixo Z.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Exemplo Prático (2D):</h4>
            <ul>
              <li>
                <strong>Translação: </strong>
                <ul>
                  <li>
                    Para mover um ponto 3 unidades para a direita (d x ​ =3) e 2
                    para cima (d y ​ =2), a matriz de transformação é: T T ​ = ​
                    1 0 0 ​ 0 1 0 ​ 3 2 1 ​ ​ .
                  </li>
                </ul>
              </li>
              <li>
                <strong>Escala:</strong>
                <ul>
                  <li>
                    Para ampliar um objeto 2 vezes no eixo X (s x ​ =2) e 3
                    vezes no eixo Y (s y ​ =3), a matriz de transformação é: T S
                    ​ = ​ 2 0 0 ​ 0 3 0 ​ 0 0 1 ​ ​ .
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Rotação e Reflexão</h4>
            <p>
              Além da translação e da escala, a <strong>rotação</strong> e a{" "}
              <strong>reflexão</strong> são outras duas transformações
              importantes na computação gráfica.
            </p>
            <h4></h4>
            <ul>
              <li>
                <strong>O que é?</strong>
                <ul>
                  <li>
                    É o ato de girar um objeto em torno de um ponto central
                    (geralmente a origem).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Como funciona?</strong>
                <ul>
                  <li>
                    Para girar um ponto por um ângulo θ, usa-se uma matriz de
                    rotação.
                    <ul>
                      <li>
                        <strong>Em 2D:</strong> A matriz de rotação para um
                        ângulo θ (sentido anti-horário) é: T R ​ =[ cosθ sinθ ​
                        −sinθ cosθ ​ ].
                      </li>
                      <li>
                        <strong>Em 3D:</strong> A rotação pode ser feita em
                        torno de cada eixo (X, Y ou Z), e cada uma tem sua
                        própria matriz de transformação.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Reflexão (Espelhamento)</h4>
            <ul>
              <li>
                <strong>O que é?</strong>
                <ul>
                  <li>
                    É o "espelhamento" de um objeto em torno de um eixo ou
                    plano.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Como funciona?</strong>
                <ul>
                  <li>
                    Para refletir um objeto, usa-se uma matriz de reflexão.
                    <ul>
                      <li>
                        <strong>Reflexão no eixo Y (2D):</strong> A matriz é: T
                        Y ​ =[ −1 0 ​ 0 1 ​ ].
                      </li>
                      <li>
                        <strong>Reflexão no eixo X (2D):</strong> A matriz é: T
                        X ​ =[ 1 0 ​ 0 −1 ​ ].
                      </li>
                      <li>
                        <strong>Em 3D:</strong> A reflexão ocorre em torno de
                        planos (XY, YZ ou XZ) e segue a mesma lógica, invertendo
                        o sinal da coordenada que está fora do plano de
                        reflexão.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Concatenação de Matrizes e Comutatividade</h4>
            <ul>
              <li>
                <strong>Como combinar transformações?</strong>
                <ul>
                  <li>
                    É possível combinar múltiplas transformações (como rotação e
                    translação) multiplicando suas matrizes em uma "matriz de
                    transformação composta".
                  </li>
                </ul>
              </li>
              <li>
                <strong>Atenção!</strong>
                <ul>
                  <li>
                    A ordem da multiplicação <strong>importa</strong>, porque a
                    multiplicação de
                    <strong>matrizes não é comutativa</strong>. Por isso, A×B é
                    diferente de B×A.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Posição do ponto:</strong>
                <ul>
                  <li>
                    O vetor do ponto deve ser posicionado à direita da matriz de
                    transformação para a multiplicação (P ′ =T×P). Se o ponto
                    for uma matriz linha, é preciso usar a transposta da matriz
                    de transformação.
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

export default IdentidadeVisualAnimacao;
