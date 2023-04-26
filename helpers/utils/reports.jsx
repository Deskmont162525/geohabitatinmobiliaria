import { dayInfoTotal } from "./date";

export const nameStatus = (status) => {
  let name = "";
  switch (status) {
    case "REJECTED":
      name = "RECHAZADAS";
      break;
    case "REQUESTED":
      name = "SOLICITADOS";
      break;
    case "SOLD":
      name = "VENDIDOS";
      break;
    case "CART":
      name = "CARRITO";
      break;
    case "ACCEPTED":
      name = "ACEPTADOS";
      break;
    case "RELEASED":
      name = "LIBERADOS";
      break;
    default:
      name = "OTRO";
      break;
  }
  return name;
};

export const transformDate = (objDate) => {
  const year = objDate.years !== 0 ? `${objDate.years} años ` : "";
  const month = objDate.months !== 0 ? `${objDate.months} meses ` : "";
  const day = objDate.days !== 0 ? `${objDate.days} dias ` : "";
  const hour = objDate.hours !== 0 ? `${objDate.hours} horas ` : "";
  const minute = objDate.minutes !== 0 ? `${objDate.minutes} minutos ` : "";
  const second = objDate.seconds !== 0 ? `${objDate.seconds} segundos ` : "";

  return year + month + day + hour + minute + second;
};

// Array para Transacciones
export const getDataTransaction = (data) => {
  let exportData = [];
  if (data !== []) {
    data.forEach((l) => {
      let object = {
        ESTADO: nameStatus(l.status),
        CANTIDAD: l.total,
      };
      exportData.push(object);
    });
  }
  return exportData;
};

// Array para Tiempo de respuesta
export const getDataTiming = (data) => {
  let exportData = [];
  if (data !== []) {
    data.forEach((l) => {
      let object = {
        "CODIGO DE SOLICITUD": l.request_uuid,
        SOLICITANTE: l.supplier_country,
        "ID SOLICITANTE": l.supplier_id,
        USUARIO: l.user_fullname,
        "ID USUARIO": l.user_id,
        IMPORTADOR: l.importer,
        PAIS: l.country_of_origin,
        DESCRIPCION: l.description,
        "NRO REFERENCIA": l.reference,
        ESTADO: l.status_stock,
        CANTIDAD: l.available_quantity,
        "CANTIDAD SOLICITADA": l.requested_quantity,
        "PRECIO UNITARIO": parseFloat(l.price),
        "PRECIO TOTAL": parseFloat(l.price) * parseInt(l.requested_quantity),
        "DIA SOLICITADO": dayInfoTotal(l.requested_at),
        "ESTADO SOLICITUD": nameStatus(l.status),
        RECHAZADO: l.rejected_at ? dayInfoTotal(l.rejected_at) : "",
        "TIEMPO DE ESPERA - RECHAZADO": l.rejected_time
          ? transformDate(l.rejected_time)
          : "",
        "OPCION DE RECHAZO": l.rejection_option_id ? l.rejection_option_id : "",
        "DETALLE DE RECHAZO": l.rejection_details ? l.rejection_details : "",
        ACEPTADO: l.accepted_at ? dayInfoTotal(l.accepted_at) : "",
        "TIEMPO DE ESPERA - ACEPTADO": l.accepted_time
          ? transformDate(l.accepted_time)
          : "",
        LIBERADO: l.released_at ? dayInfoTotal(l.released_at) : "",
        "TIEMPO DE ESPERA - LIBERADO": l.released_time
          ? transformDate(l.released_time)
          : "",
        VENDIDO: l.sold_at ? dayInfoTotal(l.sold_at) : "",
        "TIEMPO DE ESPERA - VENDIDO": l.sold_time
          ? transformDate(l.sold_time)
          : "",
      };
      exportData.push(object);
    });
  }
  return exportData;
};

// Array para Repuestos
export const getDataParts = (data) => {
  let exportData = [];
  if (data !== []) {
    data.forEach((l) => {
      let object = {
        "CODIGO DE SOLICITUD": l.request_uuid,
        SOLICITANTE: l.supplier_country,
        "ID SOLICITANTE": l.supplier_id,
        USUARIO: l.user_fullname,
        "ID USUARIO": l.user_id,
        IMPORTADOR: l.importer,
        PAIS: l.country_of_origin,
        DESCRIPCION: l.description,
        "NRO REFERENCIA": l.reference,
        ESTADO: l.status_stock,
        "CANTIDAD DISPONIBLE": l.requested_quantity,
        "PRECIO UNITARIO": parseFloat(l.price),
        "PRECIO TOTAL": parseFloat(l.price) * parseInt(l.requested_quantity),
        "DIA SOLICITADO": dayInfoTotal(l.requested_at),
        "ESTADO SOLICITUD": nameStatus(l.status),
      };
      exportData.push(object);
    });
  }
  return exportData;
};
