import validator from "validator";
const errorText = "Campo Obligatorio*";

export const validatorBenefict = (
  stateTempBeneArrays,
  stateTempBene,
  error,
  setError
) => {
  const { tipoclientes, sedes, marcas } = stateTempBeneArrays;
  const { id_empresa, id_ciudad } = stateTempBene;
  var uno, dos, tres, cuatro, cinco;

  if (marcas.length === 0) {
    cinco = true;
    setError({
      ...error,
      errorCustomer_marcas: true,
      errorTextCustomer_marcas: errorText,
    });
  }
  if (sedes.length === 0) {
    cuatro = true;
    setError({
      ...error,
      errorCustomer_sedes: true,
      errorTextCustomer_sedes: errorText,
    });
  }
  if (id_ciudad === "") {
    tres = true;
    setError({
      ...error,
      errorCustomer_id_ciudad: true,
      errorTextCustomer_id_ciudad: errorText,
    });
  }
  if (tipoclientes.length === 0) {
    dos = true;
    setError({
      ...error,
      errorCustomer_tipoclientes: true,
      errorTextCustomer_tipoclientes: errorText,
    });
  }

  if (id_empresa === "") {
    uno = true;
    setError({
      ...error,
      errorCustomer_id_empresa: true,
      errorTextCustomer_id_empresa: errorText,
    });
  }

  if (
    uno ||
    dos ||
    tres ||
    cuatro ||
    cinco ||
    (uno && dos && tres && cuatro && cinco)
  ) {
    return false;
  } else {
    return true;
  }
};

export const validatorCrearArea = (stateTempBene, error, setError) => {
  var uno, dos;
  const { nombre, correo_area } = stateTempBene.area_crear;

  if (!validator.isEmail(correo_area)) {
    setError({
      ...error,
      errorCustomer_correo_area_ac: true,
      errorTextCustomer_correo_area_ac: "Ingresa un correo válido*",
    });
  }
  if (correo_area === "") {
    dos = true;
    setError({
      ...error,
      errorCustomer_correo_area_ac: true,
      errorTextCustomer_correo_area_ac: errorText,
    });
  }
  if (nombre === "") {
    uno = true;
    setError({
      ...error,
      errorCustomer_nombre_ac: true,
      errorTextCustomer_nombre_ac: errorText,
    });
  }

  if (uno || dos || (uno && dos)) {
    return false;
  } else {
    return true;
  }
};

export const validatorCostos = (stateTempBene, error, setError) => {
  var uno, dos, tres;
  const { area, centrocosto, correo_centrocosto } = stateTempBene;

  if (!validator.isEmail(correo_centrocosto)) {
    setError({
      ...error,
      errorCustomer_correo_centrocosto: true,
      errorTextCustomer_correo_centrocosto: "Ingresa un correo válido*",
    });
  }

  if (correo_centrocosto === "") {
    dos = true;
    setError({
      ...error,
      errorCustomer_correo_centrocosto: true,
      errorTextCustomer_correo_centrocosto: errorText,
    });
  }

  if (centrocosto === "") {
    dos = true;
    setError({
      ...error,
      errorCustomer_centrocosto: true,
      errorTextCustomer_centrocosto: errorText,
    });
  }

  if (area === "") {
    uno = true;
    setError({
      ...error,
      errorCustomer_area: true,
      errorTextCustomer_area: errorText,
    });
  }
  if (uno || dos || tres || (uno && dos && tres)) {
    return false;
  } else {
    return true;
  }
};

export const validatorFinal = (stateTempBene, error, setError) => {
  var uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve;

  const {
    imagenurl,
    numerobeneficio,
    valorunitario,
    estadobeneficio,
    vigenciafin,
    condiciones,
    descripcion,
    titulo,
    codigo,
  } = stateTempBene;

  if (imagenurl === "") {
    nueve = true;
    setError({
      ...error,
      errorCustomer_imagenurl: true,
      errorTextCustomer_imagenurl: errorText,
    });
  }

  if (estadobeneficio === "") {
    seis = true;
    setError({
      ...error,
      errorCustomer_estadobeneficio: true,
      errorTextCustomer_estadobeneficio: errorText,
    });
  }
  
  if (numerobeneficio === "") {
    ocho = true;
    setError({
      ...error,
      errorCustomer_numerobeneficio: true,
      errorTextCustomer_numerobeneficio: errorText,
    });
  }

  if (valorunitario === "") {
    siete = true;
    setError({
      ...error,
      errorCustomer_valorunitario: true,
      errorTextCustomer_valorunitario: errorText,
    });
  }  

  if (vigenciafin === "") {
    cinco = true;
    setError({
      ...error,
      errorCustomer_vigenciafin: true,
      errorTextCustomer_vigenciafin: errorText,
    });
  }

  if (condiciones === "") {
    cuatro = true;
    setError({
      ...error,
      errorCustomer_condiciones: true,
      errorTextCustomer_condiciones: errorText,
    });
  }

  if (descripcion === "") {
    tres = true;
    setError({
      ...error,
      errorCustomer_descripcion: true,
      errorTextCustomer_descripcion: errorText,
    });
  }

  if (titulo === "") {
    dos = true;
    setError({
      ...error,
      errorCustomer_titulo: true,
      errorTextCustomer_titulo: errorText,
    });
  }

  if (codigo === "") {
    uno = true;
    setError({
      ...error,
      errorCustomer_codigo: true,
      errorTextCustomer_codigo: errorText,
    });
  }


  if (
    uno || dos || tres || cuatro || cinco || seis || siete || ocho || nueve ||
    (uno && dos && tres && cuatro && cinco && seis && siete && ocho && nueve)
  ) {
    return false;
  } else {
    return true;
  }
};
