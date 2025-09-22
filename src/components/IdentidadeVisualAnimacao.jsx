import { useState } from "react";
import aula1 from "../assets/audiosM7/aula01.mp3";
import aula2 from "../assets/audiosM7/aula02.mp3";
import aula3 from "../assets/audiosM7/aula03.mp3";
import aula4 from "../assets/audiosM7/aula04.mp3";

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
        </>
      )}
    </section>
  );
};

export default IdentidadeVisualAnimacao;
