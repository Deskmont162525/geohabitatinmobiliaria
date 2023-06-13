import React from 'react';
import nookies from 'nookies';
import NavbarAdmin from "../../components/ui/NavbarAdmin";
import CardListC from "../../components/elements/cardListaCitas";
import FomrCitasCrud from "../../components/elements/formCitas";


const dataTemp = {
    nombre:"Soy el mejor",
    rol:"asesor",
    url: ""
}
const AsesoresPage = () => {
  return (
    <div className="big">
      <NavbarAdmin data={dataTemp} />
      <div className="surface-0 p-4 shadow-2 border-round">
        <div className="text-3xl font-medium text-900 mb-3">
          Perfil Asesor
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
          <FomrCitasCrud />
          <div className="separator"></div>
          <CardListC />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
    const cookies = nookies.get(context);
    const decodeData = cookies?.userGeo ? JSON.parse(cookies.userGeo) : '';
    // const [dataClienteUser] = await Promise.all([AuthService.getAcriveUsuById(codigo)]);
    return {
        props: {  }
    };
}

export default AsesoresPage;
