import AdministracaoSistemas from "./components/AdministracaoSistemas";
import Ambientacao from "./components/Ambientacao";
import CriacaoWebSite from "./components/CriacaoWebSite";
import GestaoDaInformacao from "./components/GestaoDaInformacao";
import InterfaceWeb from "./components/InterfaceWeb";
import Introducao from "./components/Introducao";
import PrincipiosWebDesign from "./components/PrincipiosWebDesign";

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
      <CriacaoWebSite />
      <PrincipiosWebDesign />
    </>
  );
};

export default App;
