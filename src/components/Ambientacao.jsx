import { useState } from "react";

const Ambientacao = () => {
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
        <h2>AMBIENTAÇÃO</h2>
        <img src="/seta.png" onClick={visualizar} className={classeGirarImg} />
      </div>
      {abrir && (
        <>
          <h3>Algumas siglas</h3>
          <ul>
            <li>
              <strong>AVA</strong>: Ambiente Virtual de Aprendizagem;
            </li>
            <li>
              <strong>CMA</strong>: Central de Mediação Acadêmica;
            </li>
            <li>
              <strong>UTA</strong>: Unidade Temática de Aprendizagem;
            </li>
            <li>
              <strong>APOL</strong>: Atividades Pedagógicas Online;
            </li>
            <li>
              <strong>PAP</strong>: Polo de Apoio Presencial;
            </li>
            <li>
              <strong>RCP</strong>: Recuperação de Conceito Pago;
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default Ambientacao;
