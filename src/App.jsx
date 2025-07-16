import AdministracaoSistemas from "./components/AdministracaoSistemas";
import Ambientacao from "./components/Ambientacao";
import GestaoDaInformacao from "./components/GestaoDaInformacao";
import InterfaceWeb from "./components/InterfaceWeb";
import Introducao from "./components/Introducao";

const App = () => {
  return (
    <>
      <header>
        <h1>Curso Técnico de Informática para Internet</h1>
      </header>
      <Ambientacao />
      <Introducao />
      <GestaoDaInformacao />
      <AdministracaoSistemas />
      <InterfaceWeb />
    </>
  );
};

export default App;
