import React from "react";
import CardForms from "../../../components/containers/cardForms";
import NavbarAdmin from "../../../components/ui/NavbarAdmin";
import { TipoPropiedService } from "../../../services/TipoPropiService";
import { AgenteService } from "../../../services/agenteService";
import { requireNoAuthentication } from "../../../HOC/noAuthHOC";
import { PropiedService } from "../../../services/PropiedadesService";

const FormsPage = ({ nameForm, dataTP, dataAgent, dataPropied }) => {
  const [tipoPagoOptions, setTipoPagoOptions] = React.useState([]);
  const [agentsOptions, setAgentsOptions] = React.useState([]);
  const [propiedOptions, setPropiedOptions] = React.useState([]);

  React.useEffect(() => {
  const filteredData = dataTP?.data.filter((item) => item.estado);
  const filteredDataAD = dataAgent?.data.filter((item) => item.estado);
  const filteredDataPD = dataPropied?.data.filter((item) => item.estado);

  const mappedData = filteredData.map((item) => ({
    label: item.nombre,
    value: item._id,
  }));
  const mappedDataAG = filteredDataAD.map((item) => ({
    label: item.username,
    value: item.id,
  }));
  const mappedDataPD = filteredDataPD.map((item) => ({
    label: item.titulo,
    value: item._id,
  }));

  setTipoPagoOptions(mappedData);
  setAgentsOptions(mappedDataAG);
  setPropiedOptions(mappedDataPD);
}, [dataTP]);

  return <>
  <NavbarAdmin active="Inicio-Admin" />
  <CardForms nameForm={nameForm} tipoPagoOptions={tipoPagoOptions} agentsOptions={agentsOptions} propiedOptions={propiedOptions} />  
  </>;
};

export async function getServerSideProps(context) {
  const nameForm = context?.params?.id;
  const [dataTP, dataAgent, dataPropied] = await Promise.all([TipoPropiedService.getAllTipoPropied(), AgenteService.getAllAgentes(), PropiedService.getAllPropied()]);
  // console.log("dataTP", dataTP, dataAgent);
  return {
    props: { nameForm, dataTP, dataAgent, dataPropied },
  };
}

// export default requireNoAuthentication(FormsPage);
export default FormsPage;    
