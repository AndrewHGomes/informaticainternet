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
            <li>AVA - Ambiente Virtual de Aprendizagem;</li>
            <li>CMA - Central de Mediação Acadêmica;</li>
            <li>UTA - Unidade Temática de Aprendizagem;</li>
            <li>APOL - Atividades Pedagógicas Online;</li>
            <li>PAP - Polo de Apoio Presencial;</li>
            <li>RCP - Recuperação de Conceito Pago;</li>
          </ul>
        </>
      )}
    </section>
  );
};

export default Ambientacao;
