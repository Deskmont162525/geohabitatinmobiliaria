import CardsAgentes from "../../components/containers/cardsAgentes";
import Footer from "../../components/ui/Footer";
import HeaderPages from "../../components/ui/Header";
import Navbar from "../../components/ui/Navbar";
import SubNavbar from "../../components/ui/SubNavbar";
import { dataCards } from "../../data/objets";

const AgentesPage = () => {
  
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar active="Agentes" />
      </div>
      <HeaderPages />
      <SubNavbar title="Agentes" />
      <div className="container">
        <CardsAgentes dataCards={dataCards} />
      </div>
      
      <Footer />
    </>
  );
};

export default AgentesPage;
