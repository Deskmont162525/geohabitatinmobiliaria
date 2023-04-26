export const PAGO_FINALIZADO = "Pago Finalizado";
export const PAGO_RECHAZADO = "Último pago rechazado, volver a intentar";

export const CICLO_TRANSACCION = "ciclo transaccion";
export const PENDIENTE_FINALIZAR = "Pago pendiente por finalizar";
export const PAGO_PENDIENTE_INICIAR = "Pago pendiente por iniciar";
export const PENDIENTE_CR = "Pendiente por CR";
export const PAGO_RECHAZADO_CR = "Último pago rechazado, volver a intentar";
export const NO_REGISTRO = "Aun no se obtiene registro de pago.";
export const ERROR_CR = "Error CR";
export const PAGO_DECLINADO = "Pago declinado";
export const ABONO_RECIBIDO = "Abono recibido";

export const APPROVED = "Pago aprobado";
export const DECLINED = "Pago declinado";
export const VOIDED = "Pago anulado";
export const PENDIENTE = "Pago pendiente por finalizar";
export const ERROR = "Error en la transacción";
export const PROCESO_INICIADO = "Proceso iniciado";
export const PAGO_VENCIDO = "Vencida";

export const TIPO_VEHICULO = "Vehiculo";

export const BENEFICIO_VENCIDO = "Vencido";
export const BENEFICIO_CANGEADO = "Canjeado";

export const BENEFICIO_ACTIVE = "Activo";
export const BENEFICIO_PAUSADO = "Pausado";
export const BENEFICIO_CACELADO = "Cancelado";

export const dayPayment = (date) => {
  const datePayment = new Date(date);
  const day = datePayment.getDate();
  const month = datePayment.getMonth() + 1;
  let monthName = "";
  switch (month) {
    case 1:
      monthName = "enero";
      break;
    case 2:
      monthName = "febrero";
      break;
    case 3:
      monthName = "marzo";
      break;
    case 4:
      monthName = "abril";
      break;
    case 5:
      monthName = "mayo";
      break;
    case 6:
      monthName = "junio";
      break;
    case 7:
      monthName = "julio";
      break;
    case 8:
      monthName = "agosto";
      break;
    case 9:
      monthName = "septiembre";
      break;
    case 10:
      monthName = "octubre";
      break;
    case 11:
      monthName = "noviembre";
      break;
    case 12:
      monthName = "diciembre";
      break;
    default:
      monthName = "";
      break;
  }
  const year = datePayment.getFullYear();

  return `${day} de ${monthName} ${year}`;
};

export const dayInfoPayment = (date) => {
  const datePayment = new Date(date);
  let day = datePayment.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = datePayment.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = datePayment.getFullYear();

  return `${year}-${month}-${day}`;
};

export const statusPayment = (status) => {
  let imgStatus = "";
  // switch (status) {
  //   case "PAGO_VENCIDO":
  //     imgStatus = "/images/vencida.svg";
  //     break;
  //   case "Pagada":
  //     imgStatus = "/images/pagado.svg";
  //     break;
  //   case "Pendiente":
  //     imgStatus = "/images/pendiente.svg";
  //     break;
  //   case "Anticipo":
  //     imgStatus = "/images/anticipo.svg";
  //     break;
  //   default:
  //     imgStatus = "";
  //     break;
  // }
  switch (status) {
    case PENDIENTE:
      imgStatus = "/images/pendiente.svg";
      break;
    case PAGO_FINALIZADO:
      imgStatus = "/images/pagado.svg";
      break;
    case PAGO_VENCIDO:
      imgStatus = "/images/vencida.svg";
      break;
    case ERROR:
      imgStatus = "/images/imagesIcons/icoTriangulo.svg";
      break;
    case ABONO_RECIBIDO:
      imgStatus = "/images/anticipo.svg";
      break;
    default:
      imgStatus = "/images/pendiente.svg";
      break;
  }
  return imgStatus;
};

export const statusBenefict = (status) => {
  let imgStatus = "";
  switch (status) {
    case BENEFICIO_VENCIDO:
      imgStatus = `/${process.env.NEXT_PUBLIC_BASE_PATH}/images/vencida.svg`;
      break;
    case BENEFICIO_CANGEADO:
      imgStatus = `/${process.env.NEXT_PUBLIC_BASE_PATH}/images/pagado.svg`;
      break;
    default:
      imgStatus = `/${process.env.NEXT_PUBLIC_BASE_PATH}/images/icoTriangulo.svg`;
      break;
  }
  return imgStatus;
};

export const statusChecked = (payments, id) => {
  return payments?.some((value) => {
    return id === value.id;
  });
};

export const currencyPayment = (currency) => {
  var numCurrency = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
  return numCurrency.format(currency);
};

export const isPaid = (pay) => {
  if (pay.int_estado_pago == 1 && pay.saldo_actual == 0) {
    return PAGO_FINALIZADO;
  } else if (
    pay.int_estado_pago == 0 ||
    (pay.int_estado_pago == null && pay.saldo_actual != 0)
  ) {
    return PAGO_VENCIDO;
  } else if (pay.int_estado_pago == 1) {
    return ABONO_RECIBIDO;
  } else if (pay.int_estado_pago == 2) {
    return DECLINED;
  } else if (pay.int_estado_pago == 3) {
    return VOIDED;
  } else if (pay.int_estado_pago == 4) {
    return ERROR;
  } else if (pay.int_estado_pago == 5) {
    return PENDIENTE;
  } else if (pay.int_estado_pago == 888) {
    return PROCESO_INICIADO;
  } else if (pay.int_estado_pago == 1000) {
    return PAGO_RECHAZADO;
  } else if (pay.int_estado_pago == 999) {
    return PENDIENTE_FINALIZAR;
  } else if (pay.int_estado_pago == 4001) {
    return PENDIENTE_CR;
  } else if (pay.int_estado_pago == 4000) {
    return PAGO_RECHAZADO_CR;
  } else if (pay.int_estado_pago == 4003) {
    return PAGO_DECLINADO;
  } else if (pay.int_estado_pago == 777) {
    return ERROR_CR;
  } else {
    return pay.estado_ag;
  }
};

export const isPaidBenefict = (pay) => {
  if (pay.estado == 1) {
    return BENEFICIO_CANGEADO;
  } else if (pay.estado == 0) {
    return BENEFICIO_VENCIDO;
  } else {
    return pay.estado;
  }
};
export const isStateBenefict = (pay) => {
  if (pay.estado == "Activo") {
    return "estadoA";
  } else if (pay.estado == "Pausado") {
    return "estadoP";
  } else {
    return "estadoC";
  }
};

export const currency = (campo) => {
  let valor = campo;
  let num = "";
  if (valor != "" && valor != null) {
    valor = valor.replace(/\./g, "");
    valor = valor.replace(/\./g, "");
    valor = valor.replace(/[^0-9]/g, "");
    if (valor != "" && valor != null) {
      num = Math.ceil(valor)
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
      num = num.split("").reverse().join("").replace(/^[\.]/, "");
    }
  }
  campo = num;
  return num;
};

export const isTypeId = (pay) => {
  if (pay.tipo_id === "Vehiculo" || pay.tipo_id === "vehiculo") {
    return false;
  } else {
    return true;
  }
};

export const statusPaymentCashier = (status) => {
  let message = "";
  switch (status) {
    case 1 || "1":
      return (message = "Pago finalizado Ok");
    case 2 || "2":
      return (message = "Pago declinado");
    case 3 || "3":
      return (message = "pago anulado");
    case 4 || "4":
      return (message = "Error en la transacción");
    case 5 || "5":
      return (message = "Pago pendiente por finalizar");
    case 888 || "888":
      return (message = "Proceso inciado");
    case 1002 || "1002":
      return (message = "Pago rechazado");
    case 1001 || "1001":
      return (message = "Error entre ACH y el Banco. (Rechazada)");
    case 1000 || "1000":
      return (message = "Pago rechazado");
    case 4003 || "4003":
      return (message = "Error CR");
    case 4000 || "4000":
      return (message = "Rechazado CR");
    case 4001 || "4001":
      return (message = "Pendiente por CR");
    case 999 || "999":
      return (message = "Pago pendiente por finalizar");
    case 888 || "888":
      return (message = "Pago pendiente por iniciar");
    case 777 || "777":
      return (message = "Pago declinado");
    case 200 || "200":
      return (message = "Pago iniciado");
    default:
      return (message = "Estado desconocido");
  }
};

export const isBenefictEstado = (pay) => {
  if (pay?.estadobeneficio == "Activo") {
    return BENEFICIO_ACTIVE;
  } else if (pay?.estadobeneficio == "Cancelado") {
    return BENEFICIO_CACELADO;
  } else if (pay?.estadobeneficio == "Pausado") {
    return BENEFICIO_PAUSADO;
  } else {
    return BENEFICIO_VENCIDO;
  }
};
