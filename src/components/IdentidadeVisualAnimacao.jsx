import { useState } from "react";
import aula1 from "../assets/audiosM7/aula01.mp3";
import aula2 from "../assets/audiosM7/aula02.mp3";
import aula3 from "../assets/audiosM7/aula03.mp3";
import aula4 from "../assets/audiosM7/aula04.mp3";

import aula5 from "../assets/audiosM7/aula05.mp3";
import aula6 from "../assets/audiosM7/aula06.mp3";
import aula7 from "../assets/audiosM7/aula07.mp3";
import aula8 from "../assets/audiosM7/aula08.mp3";

import aula9 from "../assets/audiosM7/aula09.mp3";
import aula10 from "../assets/audiosM7/aula10.mp3";
import aula11 from "../assets/audiosM7/aula11.mp3";
import aula12 from "../assets/audiosM7/aula12.mp3";

import aula13 from "../assets/audiosM7/aula13.mp3";
import aula14 from "../assets/audiosM7/aula14.mp3";
import aula15 from "../assets/audiosM7/aula15.mp3";
import aula16 from "../assets/audiosM7/aula16.mp3";

import aula17 from "../assets/audiosM7/aula17.mp3";
import aula18 from "../assets/audiosM7/aula18.mp3";
import aula19 from "../assets/audiosM7/aula19.mp3";
import aula20 from "../assets/audiosM7/aula20.mp3";

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
              <audio src={aula5} controls></audio>
              <audio src={aula6} controls></audio>
              <audio src={aula7} controls></audio>
              <audio src={aula8} controls></audio>
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
                        ​ 0 ​ 0 0 1.
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
                        -sinθ cosθ ​ ].
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
                    <strong>matrizes não é comutativa</strong>. Por isso, AxB é
                    diferente de BxA.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Posição do ponto:</strong>
                <ul>
                  <li>
                    O vetor do ponto deve ser posicionado à direita da matriz de
                    transformação para a multiplicação (P ′ =TxP). Se o ponto
                    for uma matriz linha, é preciso usar a transposta da matriz
                    de transformação.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>Modelagem e Visualização 3D (Polilinhas)</h3>
            <div className="audios">
              <audio src={aula9} controls></audio>
              <audio src={aula10} controls></audio>
              <audio src={aula11} controls></audio>
              <audio src={aula12} controls></audio>
            </div>
            <p>
              Esta etapa da jornada em computação gráfica foca na{" "}
              <strong>
                construção e visualização de imagens tridimensionais
              </strong>
              .
            </p>
            <h4>Tópicos Abordados</h4>
            <ul>
              <li>Polilinhas</li>
              <li>Splines</li>
              <li>Poliedros e malhas</li>
              <li>Visão e cores</li>
              <li>Visão estéreo</li>
            </ul>
            <h4>Objetivo</h4>
            <p>
              Compreender a <strong>modelagem</strong> da maioria das formas
              (3D) e como
              <strong>capturar/apresentar</strong> esses modelos em telas usando
              <strong>cores eficientemente</strong>.
            </p>
            <h4>Polilinhas</h4>
            <strong>Conceito</strong>
            <ul>
              <li>
                As <strong>transformações geométricas</strong> (vistas
                anteriormente) podem ser aplicadas a descritores de{" "}
                <strong>imagens vetoriais</strong> para construir modelos 3D.
              </li>
              <li>
                <strong>Formas regulares</strong> (ponto, reta, círculo) são
                fáceis de descrever (⟹ poucos parâmetros).
              </li>
              <li>
                <strong>Estruturas complexas</strong> e{" "}
                <strong>linhas não-retas</strong> exigem:
                <ul>
                  <li>Mais pontos.</li>
                  <li>Recursos de aproximação.</li>
                </ul>
              </li>
            </ul>
            <h4>Aproximação de Curvas</h4>
            <ul>
              <li>
                Uma <strong>linha curva</strong> é aproximada por uma{" "}
                <strong>sequência de segmentos de reta</strong>.
              </li>
              <li>
                <strong>Exemplo:</strong> A Figura 1 mostra a curva aproximada
                por 3 ou 12 segmentos.
                <ul>
                  <li>
                    <strong>Mais segmentos</strong> (↑) ⟹{" "}
                    <strong>Melhor fidelidade & Mais recursos</strong> (↑).
                  </li>
                </ul>
              </li>
              <li>
                É crucial buscar o <strong>equilíbrio</strong> entre a{" "}
                <strong>fidelidade</strong> da aproximação e o{" "}
                <strong>uso de recursos computacionais</strong>.
              </li>
            </ul>
            <h4>O que é Polilinha</h4>
            <ul>
              <li>
                <strong>Definição:</strong>
                <ul>
                  <li>
                    O conjunto de segmentos de reta usado para aproximar uma
                    curva.
                  </li>
                </ul>
              </li>
              <li>
                É um conjunto de{" "}
                <strong>vértices conectados por segmentos de reta</strong>.
              </li>
              <li>
                <strong>Uso:</strong>
                <ul>
                  <li>
                    Permite delinear várias formas geométricas, incluindo
                    <strong>polígonos</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Representação (Programação):</strong>
                <ul>
                  <li>Sequências de vértices (coordenadas).</li>
                </ul>
              </li>
            </ul>
            <h4>Splines Avançadas (Bézier e B-Splines)</h4>
            <ul>
              <li>
                É uma <strong>curva composta</strong> por seções{" "}
                <strong>polinomiais</strong>.
              </li>
              <li>
                Deve satisfazer algum <strong>critério de continuidade</strong>{" "}
                (C0 ,C1 ,C2) nas junções.
              </li>
              <li>
                <strong>Diferença:</strong>
                <ul>
                  <li>
                    Polilinhas: Sequências de segmentos de <strong>reta</strong>
                    .
                  </li>
                  <li>
                    Splines: Sequências de curvas <strong>polinomiais</strong>.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>O que são Polinômios?</h4>
            <ul>
              <li>
                <strong>Forma:</strong> Uma soma de parcelas do tipo a n ​ x n
                (ou a ij ​ x i y j para duas incógnitas).
                <ul>
                  <li>a é um número real (coeficiente).</li>
                  <li>n é um número natural (expoente, grau).</li>
                </ul>
              </li>
              <li>
                <strong>Característica:</strong> Seu gráfico é uma{" "}
                <strong>curva suave</strong>.
              </li>
              <li>
                <strong>Descrição Eficiente:</strong> Um polinômio de ordem 3 (a
                3 ​ x 3 +a 2 ​ x 2 +a 1 ​ x+a 0 ​ ) é descrito por apenas{" "}
                <strong>4 parâmetros</strong> (os coeficientes a i ​ ).
              </li>
            </ul>
            <h4>Curvas de Bézier</h4>
            <ul>
              <li>Propostas por Pierre Bézier para design de automóveis.</li>
              <li>
                São <strong>splines</strong> usadas para descrever{" "}
                <strong>curvas suaves</strong> por meio de
                <strong>pontos de referência</strong>.
              </li>
              <li>Essas referências são chamadas pontos de controle.</li>
            </ul>
            <strong>Definição Matemática</strong>
            <ul>
              <li>
                É definida pela fórmula: P(u)=∑ i=0 n ​ P i ​ B i,n ​(u).
                <ul>
                  <li>
                    Pi: São os <strong>pontos de controle</strong>.
                  </li>
                  <li>
                    Bi,n(u): São os <strong>polinômios de Bernstein</strong>.
                  </li>
                  <li>
                    ∑: Símbolo de somatória (soma todos os termos de i=0 até n).
                  </li>
                </ul>
              </li>
            </ul>
            <h4>B-Splines</h4>
            <ul>
              <li>
                Outro tipo de spline muito usada, gerada pela aproximação de um
                <strong>conjunto de pontos de controle</strong>.
              </li>
              <li>
                Possui <strong>maior complexidade</strong> de cálculo que as
                Curvas de Bézier.
              </li>
            </ul>
            <strong>Vantagem Chave</strong>
            <ul>
              <li>
                O <strong>grau do polinômio</strong> pode ser definido{" "}
                <strong>independentemente</strong> do número de pontos de
                controle (embora com limitações).
              </li>
            </ul>
            <h4>Representação e Extensão</h4>
            <ul>
              <li>
                <strong>Na Memória:</strong>
                <ul>
                  <li>
                    Tanto as Curvas de Bézier quanto as B-Splines são
                    armazenadas como uma{" "}
                    <strong>sequência de vértices (pontos de controle)</strong>,
                    similar às polilinhas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Descrição:</strong>
                <ul>
                  <li>
                    A descrição, no entanto, é de uma{" "}
                    <strong>curva real</strong> (suave), não de uma série de
                    segmentos de reta.
                  </li>
                </ul>
              </li>
              <li>
                <strong>3D (Superfícies): </strong>
                <ul>
                  <li>
                    O conceito pode ser estendido para o espaço tridimensional,
                    resultando em <strong>Superfícies de Bézier</strong> e{" "}
                    <strong>Superfícies B-Spline</strong>.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Poliedros e Malhas</h4>
            <ol>
              <li>
                <strong>Polígonos (Conceitos 2D)</strong>
                <ul>
                  <li>
                    Estes conceitos são a base para a construção 3D e são
                    importantes para entender as faces das malhas:
                    <ul>
                      <li>
                        <strong>Polígono Simples:</strong>
                        <ul>
                          <li>
                            Não há <strong>interseção</strong> entre seus
                            segmentos (bordas).
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Polígono Não-Simples:</strong>
                        <ul>
                          <li>
                            Há interseção entre segmentos (exemplo: formas de
                            estrela).
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Polígono Convexo:</strong>
                        <ul>
                          <li>
                            Qualquer segmento de reta desenhado entre dois
                            pontos internos está{" "}
                            <strong>completamente dentro</strong> do polígono.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Polígono Côncavo:</strong>
                        <ul>
                          <li>
                            Ocorre o oposto do convexo (possui 'concavidades' ou
                            'reentrâncias').
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Poliedros e Malhas Poligonais (3D)</strong>
                <ul>
                  <li>
                    <strong>Poliedro</strong>
                    <ul>
                      <li>
                        <strong>Função:</strong> Estrutura 3D que{" "}
                        <strong>aproxima</strong>
                        sólidos contínuos (similar à polilinha em 2D).
                      </li>
                      <li>
                        <strong>Composição:</strong> É um sólido constituído por
                        <strong>faces</strong> formadas por um arranjo de
                        <strong>polígonos planares</strong>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Malha Poligonal</strong>
                    <ul>
                      <li>
                        <strong>Definição:</strong> É a{" "}
                        <strong>superfície</strong> composta por esses polígonos
                        planares (faces).
                      </li>
                      <li>
                        Pode ser <strong>aberta</strong> ou{" "}
                        <strong>fechada</strong>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Representação e Eficiência</strong>
                    <ol>
                      <li>
                        <strong>Preferência por Convexos:</strong>
                        <ul>
                          <li>
                            É prática a utilização de{" "}
                            <strong>polígonos convexos</strong>
                            (triângulos e quadriláteros) devido à{" "}
                            <strong>facilidade operacional</strong> nos
                            algoritmos de exibição 3D → 2D.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Triangulação (Subdivisão):</strong>
                        <ul>
                          <li>
                            Malhas podem ser subdivididas em{" "}
                            <strong>triângulos</strong> (malhas triangulares)
                            para simplificação:
                            <ul>
                              <li>
                                Vantagem 1: Triângulos são sempre{" "}
                                <strong>convexos</strong>.
                              </li>
                              <li>
                                Vantagem 2: São{" "}
                                <strong>mais simples de representar</strong> na
                                memória.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Estrutura de Dados:</strong>
                        <ul>
                          <li>
                            A escolha da estrutura de dados para armazenar a
                            malha na memória é crucial e define a{" "}
                            <strong>eficiência</strong> dos algoritmos de
                            manipulação.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Vis&atilde;o e Cores</h4>
            <p>
              O sistema visual de intera&ccedil;&atilde;o humana com a
              Computa&ccedil;&atilde;o Gr&aacute;fica &eacute; o pr&oacute;prio{" "}
              <strong>olho humano</strong>, sendo a cor modelada a partir das
              c&eacute;lulas da retina (cones) em diferentes sistemas.
            </p>

            <h4>Sistema Visual Humano</h4>
            <ul>
              <li>
                O foco &eacute; o <strong>olho humano</strong>, onde a imagem se
                forma na retina.
              </li>
              <li>
                A retina possui c&eacute;lulas especializadas:
                <ul>
                  <li>
                    <strong>Cones:</strong> Respons&aacute;veis pela{" "}
                    <strong>vis&atilde;o de cores</strong> (Vermelho, Verde,
                    Azul).
                  </li>
                  <li>
                    <strong>Bastonetes:</strong> Respons&aacute;veis pela
                    vis&atilde;o em <strong>pouca luz</strong> (preto e branco).
                  </li>
                </ul>
              </li>
            </ul>

            <h4>Modelo de Cor Aditivo: RGB</h4>
            <ul>
              <li>
                <strong>Nome:</strong> RGB (<strong>R</strong>ed,{" "}
                <strong>G</strong>reen, <strong>B</strong>lue), baseado nos
                tr&ecirc;s tipos de cones.
              </li>
              <li>
                <strong>Natureza:</strong> Modelo de cor{" "}
                <strong>aditivo</strong>, obtido pela{" "}
                <strong>adi&ccedil;&atilde;o de luz</strong>.
              </li>
              <li>
                <strong>Uso:</strong> Indicado para exibi&ccedil;&atilde;o em{" "}
                <strong>Telas</strong>.
              </li>
              <li>
                <strong>Composi&ccedil;&atilde;o:</strong>
                <ul>
                  <li>R, G e B s&atilde;o prim&aacute;rias.</li>
                  <li>
                    Sua combina&ccedil;&atilde;o m&aacute;xima resulta em{" "}
                    <strong>Branco (W)</strong>.
                  </li>
                  <li>
                    Representado por valores de 0 a 255 para cada componente (r,
                    g, b).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Transpar&ecirc;ncia:</strong> &Eacute; um{" "}
                <strong>componente extra</strong> (Alpha) para
                sobreposi&ccedil;&atilde;o.
              </li>
            </ul>

            <h4>Modelo de Cor Subtrativo: CMYK</h4>
            <ul>
              <li>
                <strong>Nome:</strong> CMYK (<strong>C</strong>yan,{" "}
                <strong>M</strong>agenta, <strong>Y</strong>ellow,{" "}
                <strong>K</strong>ey Plate / Preto).
              </li>
              <li>
                <strong>Natureza:</strong> Modelo de cor{" "}
                <strong>subtrativo</strong>, usado para{" "}
                <strong>impress&atilde;o</strong>.
              </li>
              <li>
                <strong>Cores B&aacute;sicas:</strong> Ciano, Magenta e Amarelo
                (secund&aacute;rias do RGB).
              </li>
              <li>
                <strong>O Preto (K):</strong> &Eacute; um pigmento separado
                adicionado para pureza e <strong>economia de tinta</strong>.
              </li>
            </ul>

            <h4>Outros Modelos</h4>
            <ul>
              <li>
                <strong>HSL:</strong> Representa a cor por componentes de
                cromaticidade (<strong>Matiz</strong> e{" "}
                <strong>Satura&ccedil;&atilde;o</strong>) e{" "}
                <strong>Lumin&acirc;ncia</strong>.
              </li>
              <li>
                <strong>Uso HSL:</strong> Comum em{" "}
                <strong>processamento de imagens</strong>, onde se exige uma
                rela&ccedil;&atilde;o de ordem.
              </li>
            </ul>
            <h4>Vis&atilde;o Est&eacute;reo</h4>
            <p>
              A vis&atilde;o est&eacute;reo &eacute; uma{" "}
              <strong>t&eacute;cnica de simula&ccedil;&atilde;o 3D</strong>{" "}
              baseada na diferen&ccedil;a de &acirc;ngulo de vis&atilde;o entre
              os dois olhos humanos, utilizando duas imagens 2D
              simult&acirc;neas.
            </p>

            <h4>Conceito</h4>
            <ul>
              <li>
                Simula a percep&ccedil;&atilde;o de profundidade usando{" "}
                <strong>duas imagens 2D</strong>.
              </li>
              <li>
                O "cinema 3D"{" "}
                <strong>
                  n&atilde;o &eacute; verdadeiramente tridimensional
                </strong>
                , apenas a proje&ccedil;&atilde;o dupla.
              </li>
            </ul>

            <h4>
              M&eacute;todos de Exibi&ccedil;&atilde;o (Efeitos Est&eacute;reos)
            </h4>
            <ol>
              <li>
                <strong>Filtros de Cores (An&aacute;glifo):</strong>
                <ul>
                  <li>
                    <strong>Princ&iacute;pio:</strong> Proje&ccedil;&atilde;o de
                    imagens com filtros de cores diferentes (ex: Vermelho e
                    Ciano).
                  </li>
                  <li>
                    <strong>Visualiza&ccedil;&atilde;o:</strong> Requer{" "}
                    <strong>&oacute;culos com lentes coloridas</strong>.
                  </li>
                  <li>
                    <strong>Desvantagem:</strong> Causa{" "}
                    <strong>aberra&ccedil;&atilde;o crom&aacute;tica</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Polariza&ccedil;&atilde;o da Luz:</strong>
                <ul>
                  <li>
                    <strong>Princ&iacute;pio:</strong> Proje&ccedil;&atilde;o de
                    luz com{" "}
                    <strong>polariza&ccedil;&otilde;es diferentes</strong> (ex:
                    Vertical e Horizontal).
                  </li>
                  <li>
                    <strong>Visualiza&ccedil;&atilde;o:</strong> Requer{" "}
                    <strong>&oacute;culos polarizadores</strong>.
                  </li>
                  <li>
                    <strong>Vantagem:</strong> Elimina a aberra&ccedil;&atilde;o
                    crom&aacute;tica do m&eacute;todo anterior.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Barreira de Paralaxe:</strong>
                <ul>
                  <li>
                    <strong>Objetivo:</strong> Eliminar o uso de &oacute;culos.
                  </li>
                  <li>
                    <strong>Mecanismo:</strong> Um anteparo sobre a tela garante
                    que cada olho veja apenas a imagem espec&iacute;fica a ele.
                  </li>
                </ul>
              </li>
            </ol>
            <h4>Conceitos-Chave</h4>
            <p>
              Os pontos a seguir s&atilde;o os conceitos centrais desta etapa
              sobre modelagem e visualiza&ccedil;&atilde;o 3D que devem ser
              internalizados.
            </p>
            <ul>
              <li>
                <strong>Polilinhas:</strong>
                <ul>
                  <li>
                    Aproximam <strong>formas n&atilde;o-regulares</strong> por
                    segmentos de reta.
                  </li>
                  <li>
                    A <strong>fidelidade</strong> &eacute; um{" "}
                    <strong>trade-off</strong> entre o n&uacute;mero de
                    v&eacute;rtices e o uso de recursos computacionais.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Splines:</strong>
                <ul>
                  <li>
                    S&atilde;o{" "}
                    <strong>modelagens matem&aacute;ticas suaves</strong>{" "}
                    (polin&ocirc;mios).
                  </li>
                  <li>
                    Exemplos: Curvas de <strong>B&eacute;zier</strong> e{" "}
                    <strong>B-splines</strong>.
                  </li>
                  <li>
                    Permitem alta fidelidade com{" "}
                    <strong>menos pontos de controle</strong> do que polilinhas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Poliedros e Malhas:</strong>
                <ul>
                  <li>
                    S&atilde;o estruturas 3D formadas pela
                    agrega&ccedil;&atilde;o de{" "}
                    <strong>pol&iacute;gonos planares</strong> (faces).
                  </li>
                  <li>
                    <strong>Tri&acirc;ngulos</strong> s&atilde;o o formato
                    preferido, pois s&atilde;o sempre convexos e mais simples
                    para representar na mem&oacute;ria.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sistemas de Cores:</strong>
                <ul>
                  <li>
                    <strong>RGB (Aditivo):</strong> Usado em{" "}
                    <strong>TELAS</strong> (adi&ccedil;&atilde;o de luz).
                  </li>
                  <li>
                    <strong>CMYK (Subtrativo):</strong> Usado em{" "}
                    <strong>IMPRESS&Otilde;ES</strong> (subtra&ccedil;&atilde;o
                    de pigmentos).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Vis&atilde;o Est&eacute;reo:</strong>
                <ul>
                  <li>
                    &Eacute; uma t&eacute;cnica que usa{" "}
                    <strong>duas imagens simult&acirc;neas</strong> para simular
                    profundidade (3D).
                  </li>
                  <li>
                    M&eacute;todos principais: filtro de cor (An&aacute;glifo) e
                    polariza&ccedil;&atilde;o.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>Câmera Virtual</h3>
            <div className="audios">
              <audio src={aula13} controls></audio>
              <audio src={aula14} controls></audio>
              <audio src={aula15} controls></audio>
              <audio src={aula16} controls></audio>
            </div>
            <p>
              A câmera virtual é a ferramenta que transforma modelos 3D em
              imagens 2D na tela, simulando uma câmera real. Para isso, ela usa
              sete "graus de liberdade" que permitem ajustar seu posicionamento
              (translação e rotação nos eixos X, Y e Z) e foco. Essa câmera
              virtual aplica transformações geométricas aos objetos 3D para
              projetá-los na tela. Esse processo considera também outros
              elementos, como iluminação e textura, para criar uma cena
              realista.
            </p>
            <h4>Síntese de Imagens</h4>
            <p>
              A <strong>síntese de imagens</strong> é o processo de gerar
              imagens artificiais, combinando elementos como geometria,
              iluminação, sombreamento e texturas. O modelo de câmera usado
              nesse processo projeta um modelo 3D em um plano 2D usando um
              sistema de coordenadas do mundo real. A aplicação de uma matriz de
              transformação é o que "comanda" a câmera virtual, definindo sua
              translação e rotação, e ajustando a perspectiva para aproximar ou
              afastar a cena.
            </p>
            <h4>Pipeline de Visualização (ou de Renderização)</h4>
            <p>É uma sequência de etapas para renderizar uma imagem.</p>
            <ol>
              <li>
                <strong>Vértices das malhas poligonais:</strong>
                <ul>
                  <li>São a base do modelo 3D.</li>
                </ul>
              </li>
              <li>
                <strong>Transformações Geométricas:</strong>
                <ul>
                  <li>
                    Aplicadas aos vértices para transladar e rotacionar os
                    objetos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Câmera Virtual:</strong>
                <ul>
                  <li>
                    Suas transformações são aplicadas a todos os vértices da
                    cena.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Rasterização:</strong>
                <ul>
                  <li>
                    Projeção perspectiva que converte os dados da cena em
                    pixels, considerando a oclusão (quando um objeto está na
                    frente do outro). Ela gera fragmentos que compõem a imagem
                    final.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Montagem da Imagem Final: </strong>
                <ul>
                  <li>
                    O estágio final, onde os fragmentos de imagem são reunidos.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              O pipeline também permite <strong>interação do usuário</strong>,
              que pode ajustar objetos e a posição da câmera, criando animações
              interativas.
            </p>
            <h4>Rasterização</h4>
            <p>
              A rasterização é o processo de converter um modelo 3D em uma
              imagem 2D, considerando que a tela tem um número finito de pixels.
              Para isso, ela usa o algoritmo ray casting. O ray casting funciona
              traçando "raios" imaginários que partem do observador e passam por
              cada pixel da tela. O primeiro objeto que o raio intercepta
              determina a cor daquele pixel. Esse método é mais eficiente que o
              ray tracing, que rastreia cada raio de luz individualmente, pois o
              ray casting rastreia os raios em grupos, limitando o processamento
              ao número de pixels da tela.
            </p>
            <h4>Modelo de Phong</h4>
            <p>
              O <strong>modelo de iluminação de Phong</strong> é usado para
              determinar a cor e a iluminação de cada pixel. Ele divide a
              luminosidade em três componentes:
            </p>
            <ol>
              <li>
                <strong>Luz ambiente:</strong>
                <ul>
                  <li>
                    É uma aproximação global da luz refletida no ambiente.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Luz difusa: </strong>
                <ul>
                  <li>
                    A luz que incide em um objeto e se reflete em várias
                    direções, com a mesma intensidade. Sua intensidade depende
                    da distância da luz ao observador e do ângulo de incidência.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Luz especular:</strong>
                <ul>
                  <li>
                    A luz que incide em um objeto e se reflete em um ângulo
                    igual ao de incidência, criando um efeito "espelhado" ou de
                    brilho.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              A combinação desses três componentes matematicamente define a cor
              final de um pixel na tela. O expoente especular (ns) e o
              coeficiente de reflexão especular (ks) são parâmetros que definem
              o brilho e o quão "espelhado" um material é.
            </p>
            <h4>Tonalização (Shading)</h4>
            <p>
              A <strong>tonalização</strong> melhora o realismo visual ao
              interpolar a cor entre os vértices de um polígono. Em vez de usar
              polígonos planos, ela usa{" "}
              <strong>superfícies curvas (splines)</strong>, que são construídas
              a partir dos vértices, para renderizar objetos com uma aparência
              mais suave. Isso evita a aparência "quadriculada" de modelos com
              baixa resolução.
            </p>
            <h4>Texturas</h4>
            <p>
              <strong>Texturas</strong> são imagens 2D (podem ser até
              fotografias) sobrepostas nos polígonos 3D, como se fossem um
              "papel de parede". Para aplicar a textura, as coordenadas dos
              vértices do polígono são mapeadas na imagem da textura, e a cor de
              cada ponto dentro do polígono é extraída dessa imagem. Isso
              adiciona detalhes visuais sem a necessidade de aumentar a
              complexidade do modelo 3D.
            </p>
            <h4>Conceitos Essenciais</h4>
            <ul>
              <li>
                <strong>Câmera Virtual:</strong>
                <ul>
                  <li>
                    Posiciona o observador na cena 3D usando 7 graus de
                    liberdade (translação, rotação e foco).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Pipeline de Visualização:</strong>
                <ul>
                  <li>A sequência de etapas que leva um modelo 3D à tela.</li>
                </ul>
              </li>
              <li>
                <strong>Rasterização:</strong>
                <ul>
                  <li>
                    O processo de converter o modelo 3D em pixels. O algoritmo
                    ray casting determina qual objeto é visível para cada pixel.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Visualização:</strong>
                <ul>
                  <li>
                    Melhora o realismo usando:
                    <ul>
                      <li>
                        <strong>Modelo de Phong:</strong> Decompõe a iluminação
                        em três componentes (ambiente, difusa e especular).
                      </li>
                      <li>
                        <strong>Tonalização:</strong> Suaviza a aparência dos
                        objetos.
                      </li>
                      <li>
                        <strong>Texturas:</strong> Adiciona detalhes a
                        superfícies.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>Animação e o Modelador</h3>
            <div className="audios">
              <audio src={aula17} controls></audio>
              <audio src={aula18} controls></audio>
              <audio src={aula19} controls></audio>
              <audio src={aula20} controls></audio>
            </div>
            <ul>
              <li>
                <strong>Base da Animação 3D:</strong>
                <ul>
                  <li>
                    A animação tradicional (2D) é o ponto de partida, tendo como
                    fundação os <strong>12 Princípios da Animação</strong> da
                    Disney (The Illusion of Life):
                    <ul>
                      <li>
                        Esticar e Comprimir, Antecipação, Encenação, Siga
                        Direto/Pose a Pose, Prosseguimento/Ação de Sobreposição,
                        Começar/Terminar Devagar, Arcos, Ação Secundária,
                        Cronometragem (Timing), Exagero, Desenhar Sólidos,
                        Apelo.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Modelagem Digital 3D: </strong>
                <ul>
                  <li>
                    Processo de criar{" "}
                    <strong>representações matemáticas</strong> que simulam o
                    formato de um objeto tridimensional, com base no universo
                    artístico (não só técnico).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Habilidades do Modelador:</strong>
                <ul>
                  <li>
                    Ter <strong>referências</strong> (para modelar elementos
                    inexistentes).
                  </li>
                  <li>
                    Ser bom <strong>observador</strong> (para definir textura,
                    simetria, comportamento físico, etc.).
                  </li>
                  <li>
                    Saber <strong>resolver problemas</strong> (solucionar
                    situações de visualidade).
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Transformações de Objetos no Espaço e Modelagem</h4>
            <ul>
              <li>
                <strong>Transformações Espaciais:</strong>
                <ul>
                  <li>
                    Operações fundamentais em 3D, comandadas por matrizes que
                    agem sobre vetores de posição. São elas:
                    <ul>
                      <li>
                        <strong>Mover:</strong> Reposicionar o objeto no espaço.
                      </li>
                      <li>
                        <strong>Rotacionar:</strong> Especificar o ângulo do
                        objeto em torno de um eixo.
                      </li>
                      <li>
                        <strong>Escalar:</strong> Alterar o tamanho do objeto
                        (aumentar ou diminuir).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Estrutura Básica do Modelo:</strong>
                <ul>
                  <li>
                    <strong>Pontos</strong> (por vetores) → Ligados por{" "}
                    <strong>Arestas</strong> (edges) → Formam
                    <strong>Polígonos</strong> → Formam Poliedros.
                  </li>
                  <li>
                    <strong>Peso da Aresta:</strong> Define a nitidez
                    (suavidade/canto vivo) entre os polígonos.
                  </li>
                  <li>
                    <strong>Splines:</strong> Importantes para a construção e
                    para a movimentação mais orgânica.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Mapas de Vértices (Vortex Maps):</strong>
                <ul>
                  <li>
                    Guardam informações necessárias à modelagem e animação.
                    Exemplos:
                    <ul>
                      <li>
                        <strong>Texturas (Texture UV):</strong> Planifica a
                        textura no modelo.
                      </li>
                      <li>
                        <strong>Peso (Weight):</strong> Influência da estrutura
                        interna sobre o modelo.
                      </li>
                      <li>
                        <strong>Transformação (Morph):</strong> Informações de
                        deslocamento.
                      </li>
                      <li>
                        <strong>Cor:</strong> Armazena valores de mudança de
                        cor.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Técnicas de Modelagem Realística:</strong>
                <ul>
                  <li>
                    <strong>
                      Modelagem NURBS (Non-Uniform Rational B-Splines):{" "}
                    </strong>
                    <ul>
                      <li>
                        Modela objetos com <strong>curvas suaves</strong>{" "}
                        (generaliza Curvas de Bézier). Uso em declínio devido à
                        dificuldade com modelagem orgânica.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Modelagem Poligonal:</strong>
                    <ul>
                      <li>
                        Método mais <strong>utilizado atualmente</strong>.
                        Trabalha com subdivisão de polígonos. Categoriza objetos
                        em <strong>High Poly</strong>
                        (alto detalhamento) e <strong>Low Poly</strong> (baixo
                        detalhamento).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      Subdivisão de Superfície (Subdivision Surface):
                    </strong>
                    <ul>
                      <li>
                        Refinamento da modelagem poligonal que cria{" "}
                        <strong>superfícies lisas</strong> a partir da malha
                        poligonal.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Técnicas de Movimentação e Estrutura de Modelos 3D</h4>
            <ul>
              <li>
                <strong>Blueprints</strong>
                <ul>
                  <li>
                    <strong>Definição: Referências visuais</strong> (vistas de
                    frente, costas, lado) usadas no processo de modelagem.
                  </li>
                  <li>
                    <strong>Função:</strong> Ajudam o animador a manter a{" "}
                    <strong>consistência visual</strong> e a definir{" "}
                    <strong>posições-chave de movimentação</strong> (corrida,
                    salto, expressões, gestual), limitando velocidade, altura,
                    etc.
                  </li>
                  <li>
                    <strong>Uso:</strong> Permite desenvolver um objeto ou
                    animação partindo de um exemplo existente, economizando
                    etapas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Estruturas Articuladas (Rigging)</strong>
                <ul>
                  <li>
                    <strong>Rigging:</strong> Estrutura de articulação
                    hierárquica (parentesco pai/filho) que inclui articulações e
                    o sistema muscular. Essencial para dar movimento ao modelo
                    3D.
                  </li>
                  <li>
                    <strong>Parentesco (Parenting):</strong> O objeto filho se
                    move independentemente, mas segue o movimento do pai.
                  </li>
                  <li>
                    <strong>Cinemática:</strong>
                    <ul>
                      <li>
                        <strong>Cinemática Direta:</strong> Criação da própria
                        hierarquia (movimento do pai afeta o filho).
                      </li>
                      <li>
                        <strong>Cinemática Inversa:</strong> Inversão da
                        hierarquia original (movimento de um ponto final, como a
                        mão, afeta a cadeia, como o braço).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Componentes Esqueléticos:</strong>
                    <ul>
                      <li>
                        <strong>Ossos (Bones):</strong> Unem visualmente as
                        articulações.
                      </li>
                      <li>
                        <strong>Articulações (Joints):</strong> Pontos de
                        conexão.
                      </li>
                      <li>
                        <strong>Pivôs (Pivots):</strong> Marcadores onde o
                        modelo pode rotacionar, definindo a estrutura
                        hierárquica.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Esqueleto (Skeleton):</strong> Conjunto hierárquico
                    de ossos, pivôs e articulações. Deve ser montado antes de
                    texturizar para permitir testes de movimento. Usado em
                    modelos orgânicos e superfícies duras com deformação.
                  </li>
                  <li>
                    <strong>Músculos (Muscles):</strong> Adicionados ao
                    esqueleto para tornar a movimentação mais realista. Sistemas
                    de simulação que agem como deformadores de preenchimento.
                  </li>
                  <li>
                    <strong>Deformadores:</strong> Ferramentas que mudam a forma
                    da geometria do personagem, conectadas ao sistema de
                    articulação (sondas/rig). Usados para gerar efeitos
                    realistas (dobras, repuxos de pele).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Movimentação de Personagens</strong>
                <ul>
                  <li>
                    <strong>Anatomia:</strong> Conhecimento básico é necessário
                    para desenvolver estruturas de articulação verossímeis
                    (mesmo em personagens não-humanos).
                    <ul>
                      <li>
                        <strong>Expressões Faciais</strong>
                        <ul>
                          <li>
                            <strong>Verossimilhança:</strong> Exige conhecimento
                            da anatomia facial (ossos e músculos).
                          </li>
                          <li>
                            <strong>Modelagem:</strong> A face é construída
                            usando polígonos que devem seguir o fluxo dos
                            músculos.
                          </li>
                          <li>
                            <strong>Animação de Vértices:</strong> Mover
                            vértices individualmente é difícil; animadores usam
                            o rigging (sobre músculos/esqueletos) para que um
                            pequeno movimento (ex: piscar) influencie grandes
                            partes da face de uma só vez.
                          </li>
                          <li>
                            <strong>Blendshapes:</strong> Deformadores que criam
                            um objeto base e o replicam em poses-chaves (formas
                            alteradas) para animar transições faciais.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Movimentação de Pessoas e Animais</strong>
                        <ul>
                          <li>
                            O movimento deve ser <strong>natural</strong> para
                            evitar estranheza.
                          </li>
                          <li>
                            <strong>Quadro-Chave (Keyframing):</strong>{" "}
                            Definição de <strong>início, meio e fim</strong> das
                            posições e atributos do objeto. O software interpola
                            os quadros intermediários. Usado tipicamente com 24
                            a 30 quadros por segundo.
                          </li>
                          <li>
                            <strong>Animação com Gráficos:</strong> Define o
                            movimento interpolado (a transição) entre keyframes
                            através do desenho de uma{" "}
                            <strong>linha de trajetória</strong>
                            (gráficos), permitindo maior sutileza.
                          </li>
                          <li>
                            <strong>
                              Captura de Movimento (Motion Capture):
                            </strong>{" "}
                            Técnica popular onde um <strong>ator real</strong>{" "}
                            realiza o movimento usando roupas com{" "}
                            <strong>marcadores</strong>. Câmeras registram o
                            movimento, e o computador o <strong>captura</strong>{" "}
                            e o conecta aos pontos do modelo 3D. Exige grande
                            planejamento (posicionamento estratégico dos
                            marcadores).
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Cenários, Texturas e Materiais</h4>
            <ul>
              <li>
                <strong>Funções do Cenário 3D:</strong>
                <ol>
                  <li>
                    <strong>Explicar o Relacionamento Espacial</strong>{" "}
                    (interno/externo).
                  </li>
                  <li>
                    <strong>Criação da Atmosfera</strong> (estrutura, forma,
                    material, iluminação condizentes com a emoção).
                  </li>
                  <li>
                    <strong>Realce do Papel do Personagem</strong> (coerência
                    entre cenário e personagem).
                  </li>
                  <li>
                    <strong>Controle de Cena</strong> (desenvolvimento baseado
                    em composição, movimentos e ângulos de visão).
                  </li>
                  <li>
                    <strong>Melhora do Impacto Visual</strong> (união de formas,
                    cores, texturas e iluminação para imersão).
                  </li>
                </ol>
              </li>
              <li>
                <strong>Modelagem de um Ambiente Urbano</strong>
                <ul>
                  <li>
                    <strong>Desafio:</strong> Modelar uma área grande,
                    minimizando repetição.
                  </li>
                  <li>
                    <strong>Facilitador:</strong> Cidades grandes tendem a ter
                    formas simétricas e padronizadas (ruas, edifícios).
                  </li>
                  <li>
                    <strong>Itens Essenciais:</strong> Modelos-base de ruas,
                    repetição de edifícios, estruturas de referência,
                    propriedades e adereços.
                  </li>
                  <li>
                    <strong>Aspectos de Qualidade:</strong>
                    <ul>
                      <li>
                        <strong>Perspectiva:</strong> Ponto de vista de
                        observação (terceira pessoa, top-down, etc.).
                      </li>
                      <li>
                        <strong>Tema:</strong> Configuração do espaço (cidade
                        grande, suja, surreal, etc.).
                      </li>
                      <li>
                        <strong>Tamanho do Mundo:</strong> Define o uso de mapas
                        de texturas e remoção de polígonos não usados.
                      </li>
                      <li>
                        <strong>
                          Escala do Mundo em Relação ao Personagem:
                        </strong>{" "}
                        Proporções corretas para a exploração.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Métodos de Construção:</strong>
                    <ul>
                      <li>
                        <strong>Modular:</strong> Construir espaços e encaixar
                        objetos sobre uma grade (grid).
                      </li>
                      <li>
                        <strong>Livre:</strong> Objetos distribuídos livremente,
                        relacionados à perspectiva do espectador.
                      </li>
                      <li>
                        <strong>Híbrido:</strong> Combinação dos dois (ex.:
                        edifícios modulares, ruas livres).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Modelagem de um Ambiente Natural</strong>
                <ul>
                  <li>
                    <strong>Desafio Extra:</strong> A variedade e a riqueza de
                    detalhes dos elementos de um ambiente natural.
                  </li>
                  <li>
                    <strong>Elementos e Qualidade:</strong>
                    <ul>
                      <li>
                        <strong>
                          Perspectiva: Determina se o ambiente é limitado pela
                        </strong>
                        atuação do personagem.
                      </li>
                      <li>
                        <strong>
                          Tema: Transmite emoções (ex.: árvores com ou sem
                          folhas
                        </strong>
                        para tranquilidade/apreensão).
                      </li>
                      <li>
                        <strong>
                          Tamanho do Mundo: Auxilia na definição da quantidade
                          de
                        </strong>
                        ativos (plantas, etc.).
                      </li>
                      <li>
                        <strong>Terreno:</strong> Composto de polígonos/pixels,
                        criado manualmente ou por softwares especializados.
                      </li>
                      <li>
                        <strong>Água:</strong> Difícil de simular devido à
                        complexidade da dinâmica de fluidos.
                      </li>
                      <li>
                        <strong>Plantas:</strong> Usadas para preencher e
                        detalhar o terreno.
                      </li>
                      <li>
                        <strong>Céu:</strong> Pode ser criado por Imagem Única
                        (visão limitada), Céu Cúpula (Sky-Dome) (envolve o
                        mundo) ou Céu Caixa (Sky-Box) (área separada).
                      </li>
                      <li>
                        <strong>Sol:</strong> Tratado como uma luz direcional,
                        não um objeto 3D.
                      </li>
                      <li>
                        <strong>Nuvens:</strong> Dependem do tipo de céu usado
                        (imagem ou algoritmos).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Texturas e Materiais</strong>
                <ul>
                  <li>
                    <strong>Objetivo:</strong> Transformar as superfícies do
                    modelo (que vem liso e sombreado) para representar
                    conceitualmente o objeto no mundo real.
                  </li>
                  <li>
                    <strong>Processo:</strong>
                    <ol>
                      <li>
                        <strong>
                          Mapa UV: Criação de um mapa planificado para adicionar
                        </strong>
                        propriedades corretas (cores, detalhes) à mão ou via
                        fotografias.
                      </li>
                      <li>
                        <strong>
                          Sombreadores (Shaders): Comandos que o software usa
                          para
                        </strong>
                        calcular efeitos de renderização, definindo a aparência
                        final do objeto (cor, refletividade, transparência,
                        realces, etc.).
                      </li>
                      <li>
                        <strong>
                          Simulação de Superfície: Criação de padrões (celular,
                        </strong>
                        grid, fractal, etc.) para simular texturas e gerar
                        informações visuais realistas.
                      </li>
                    </ol>
                    <ul>
                      <li>
                        <strong>Teste:</strong> A renderização é feita para que
                        a equipe de iluminação observe o comportamento da luz
                        sobre os materiais.
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

export default IdentidadeVisualAnimacao;
