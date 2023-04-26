import {
  recoveryBeneficioEstadosChangeNew,
  recoveryBeneficioFiltrosNewDataEstados,
  recoveryBeneficioNewDataEstadosUpdate,
} from "../../actions/controlBenefiActions";

export const dataFilterEstadoAuM = (dataBeneficsAM, stateFillEstado) => {
  if (
    (stateFillEstado.Activo && stateFillEstado.Pausado) ||
    (stateFillEstado.Activo && stateFillEstado.Cancelado) ||
    (stateFillEstado.Pausado && stateFillEstado.Cancelado) ||
    (stateFillEstado.Activo &&
      stateFillEstado.Pausado &&
      stateFillEstado.Cancelado)
  ) {
    if (
      stateFillEstado.Activo &&
      stateFillEstado.Pausado &&
      !stateFillEstado.Cancelado
    ) {
      return dataBeneficsAM.filter(
        (k) => k.estado === "Activo" || k.estado === "Pausado"
      );
    } else if (
      stateFillEstado.Activo &&
      stateFillEstado.Cancelado &&
      !stateFillEstado.Pausado
    ) {
      return dataBeneficsAM.filter(
        (k) => k.estado === "Activo" || k.estado === "Cancelado"
      );
    } else if (
      stateFillEstado.Pausado &&
      stateFillEstado.Cancelado &&
      !stateFillEstado.Activo
    ) {
      return dataBeneficsAM.filter(
        (k) => k.estado === "Pausado" || k.estado === "Cancelado"
      );
    } else {
      return dataBeneficsAM;
    }
  } else if (stateFillEstado.Activo) {
    return dataBeneficsAM.filter((k) => k.estado === "Activo");
  } else if (stateFillEstado.Pausado) {
    return dataBeneficsAM.filter((k) => k.estado === "Pausado");
  } else if (stateFillEstado.Cancelado) {
    return dataBeneficsAM.filter((k) => k.estado === "Cancelado");
  } else {
    return dataBeneficsAM;
  }
};

export const changeDataActivar = (beneficio, dispatchBeneficio, router, handleOpen) => {
  // beneficiosState aqui ingresar la accion pero debo crear la accion
  if (beneficio.stateChangeE.length !== 0) {
    const dataSend = {
      estadobeneficio: "Activo",
      ids: beneficio.stateChangeE,
    };
    recoveryBeneficioEstadosChangeNew({
      dataSend,
      beneficio,
      dispatchBeneficio,
      router,
    });
  } else {
    handleOpen()
  }
};

export const changeDataPausar = (beneficio, dispatchBeneficio, router,handleOpen) => {
  if (beneficio.stateChangeE.length !== 0) {
    const dataSend = {
      estadobeneficio: "Pausado",
      ids: beneficio.stateChangeE,
    };
    recoveryBeneficioEstadosChangeNew({
      dataSend,
      beneficio,
      dispatchBeneficio,
      router,
    });
  } else {
    handleOpen()
  }
};

export const changeDataCancelar = (beneficio, dispatchBeneficio, router,handleOpen) => {
  if (beneficio.stateChangeE.length !== 0) {
    const dataSend = {
      estadobeneficio: "Cancelado",
      ids: beneficio.stateChangeE,
    };
    recoveryBeneficioEstadosChangeNew({
      dataSend,
      beneficio,
      dispatchBeneficio,
      router,
    });
  } else {
    handleOpen()
  }
};

export const handlechangeData = (e, id, beneficio, dispatchBeneficio) => {
  if (e.target.checked) {
    recoveryBeneficioFiltrosNewDataEstados({
      id,
      dispatchBeneficio,
    });
  } else {
    var indice = beneficio.stateChangeE.indexOf(e.target.id);
    beneficio.stateChangeE.splice(indice, 1);
    recoveryBeneficioNewDataEstadosUpdate({
      beneficio,
      dispatchBeneficio,
    });
  }
};
