import React from "react";
import NavbarAdmin from "../../components/ui/NavbarAdmin";
import LandingPage1 from "../../components/containers/infoGrafico1";
import CardListC from "../../components/elements/cardListaCitas";

const dataTemp = {
  nombre:"Soy el mejor",
  rol:"admin",
  url: ""
}

const AdminPage = ({ nameForm }) => {
  return (
    <div className="big">
      <NavbarAdmin data={dataTemp} />
      <div className="surface-0 p-4 shadow-2 border-round">
        <div className="text-3xl font-medium text-900 mb-3">
          Administración del {nameForm}
        </div>
        <div className="font-medium text-500 mb-3">
          En este módulo podrás apreciar un listado de visitas, donde
          encontrarás tanto las visitas globales como las visitas agendadas para
          el día. Podrás revisar los detalles de cada visita y estar al tanto de
          todos los compromisos.
        </div>
        <div
          style={{ minHeight: "150px", height: "auto" }}
          className="border-2 border-dashed border-300"
        >
          <LandingPage1 />
          <CardListC />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
