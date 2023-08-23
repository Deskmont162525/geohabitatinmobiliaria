import React from "react";
import CardsAgentes from "../../components/containers/cardsAgentes";
import Footer from "../../components/ui/Footer";
import HeaderPages from "../../components/ui/Header";
import Navbar from "../../components/ui/Navbar";
import SubNavbar from "../../components/ui/SubNavbar";
import { AgenteService } from "../../services/agenteService";

const AgentesPage = ({dataAgentes}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar active="Agentes" setIsOpen={setIsOpen} />
      </div>
      <HeaderPages />
      <SubNavbar title="Agentes" />
      <div className="container">
        <CardsAgentes dataCards={dataAgentes?.data} />
      </div>
      
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export async function getServerSideProps() {

const [dataAgentes] = await Promise.all([AgenteService.getAllAgentes()]);
// console.log("dataAgentes",dataAgentes);
  return {
    props: { dataAgentes },
  };
}

export default AgentesPage;
