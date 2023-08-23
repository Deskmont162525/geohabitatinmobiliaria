export const validatorPropieState = (dataValidar, error) => {
  let {
    errorTitulo,
    errorTextTitulo,
    errorDescripcion,
    errorTextDescripcion,
    errorTipo,
    errorTextTipo,
    errorDireccion,
    errorTextDireccion,
    errorCiudad,
    errorTextCiudad,
    errorEstado,
    errorTextEstado,
    errorPrecio,
    errorTextPrecio,
    errorHabitaciones,
    errorTextHabitaciones,
    errorBanos,
    errorTextBanos,
    errorAgente,
    errorTextAgente,
    errorZonaComun,
    errorTextZonaComun,
    errorCocina,
    errorTextCocina,
    errorRopas,
    errorTextRopas,
    errorParqueadero,
    errorUnidad,
    errorTextUnidad,
    errorBarrio,
    errorTextBarrio,
    errorComuna,
    errorTextComuna,
    errorObservaciones,
    errorTextObservaciones,
  } = error;

  const {
    titulo,
    descripcion,
    tipo,
    direccion,
    ciudad,
    estado,
    precio,
    habitaciones,
    banos,
    agente_id,
    zona_comun,
    cocina,
    ropas,
    parqueadero,
    unidad,
    barrio,
    comuna,
    observaciones,
  } = dataValidar;

  if (titulo === "") {
    errorTitulo = true;
    errorTextTitulo = "Ingrese título";
  } else {
    errorTitulo = false;
    errorTextTitulo = "";
  }

  if (descripcion === "") {
    errorDescripcion = true;
    errorTextDescripcion = "Ingrese descripción";
  } else {
    errorDescripcion = false;
    errorTextDescripcion = "";
  }

  if (tipo === "") {
    errorTipo = true;
    errorTextTipo = "Seleccione tipo";
  } else {
    errorTipo = false;
    errorTextTipo = "";
  }

  if (direccion === "") {
    errorDireccion = true;
    errorTextDireccion = "Ingrese dirección";
  } else {
    errorDireccion = false;
    errorTextDireccion = "";
  }

  if (ciudad === "") {
    errorCiudad = true;
    errorTextCiudad = "Ingrese ciudad";
  } else {
    errorCiudad = false;
    errorTextCiudad = "";
  }

  if (estado === "") {
    errorEstado = true;
    errorTextEstado = "Seleccione estado";
  } else {
    errorEstado = false;
    errorTextEstado = "";
  }

  if (precio <= 0) {
    errorPrecio = true;
    errorTextPrecio = "Ingrese un precio válido";
  } else {
    errorPrecio = false;
    errorTextPrecio = "";
  }

  if (habitaciones <= 0) {
    errorHabitaciones = true;
    errorTextHabitaciones = "Ingrese un número válido de habitaciones";
  } else {
    errorHabitaciones = false;
    errorTextHabitaciones = "";
  }

  if (banos <= 0) {
    errorBanos = true;
    errorTextBanos = "Ingrese un número válido de baños";
  } else {
    errorBanos = false;
    errorTextBanos = "";
  }

  if (agente_id === "") {
    errorAgente = true;
    errorTextAgente = "Seleccione un agente";
  } else {
    errorAgente = false;
    errorTextAgente = "";
  }

  if (unidad === "") {
    errorUnidad = true;
    errorTextUnidad = "Seleccione una unidad";
  } else {
    errorUnidad = false;
    errorTextUnidad = "";
  }

  if (zona_comun === "") {
    errorZonaComun = true;
    errorTextZonaComun = "Ingrese zona común";
  } else {
    errorZonaComun = false;
    errorTextZonaComun = "";
  }

  if (cocina === "") {
    errorCocina = true;
    errorTextCocina = "Ingrese cocina";
  } else {
    errorCocina = false;
    errorTextCocina = "";
  }

  if (ropas === "") {
    errorRopas = true;
    errorTextRopas = "Ingrese ropas";
  } else {
    errorRopas = false;
    errorTextRopas = "";
  }

  if (barrio === "") {
    errorBarrio = true;
    errorTextBarrio = "Ingrese barrio";
  } else {
    errorBarrio = false;
    errorTextBarrio = "";
  }

  if (comuna === "") {
    errorComuna = true;
    errorTextComuna = "Ingrese comuna";
  } else {
    errorComuna = false;
    errorTextComuna = "";
  }

  if (observaciones === "") {
    errorObservaciones = true;
    errorTextObservaciones = "Ingrese observaciones";
  } else {
    errorObservaciones = false;
    errorTextObservaciones = "";
  }

  if (
    (errorTitulo,
    errorDescripcion,
    errorTipo,
    errorDireccion,
    errorCiudad,
    errorEstado,
    errorPrecio,
    errorHabitaciones,
    errorBanos,
    errorAgente,
    errorZonaComun,
    errorCocina,
    errorRopas,
    errorParqueadero,
    errorUnidad,
    errorBarrio,
    errorComuna,
    errorObservaciones)
  ) {
    return {
      errorTitulo,
      errorTextTitulo,
      errorDescripcion,
      errorTextDescripcion,
      errorTipo,
      errorTextTipo,
      errorDireccion,
      errorTextDireccion,
      errorCiudad,
      errorTextCiudad,
      errorEstado,
      errorTextEstado,
      errorPrecio,
      errorTextPrecio,
      errorHabitaciones,
      errorTextHabitaciones,
      errorBanos,
      errorTextBanos,
      errorAgente,
      errorTextAgente,
      errorZonaComun,
      errorTextZonaComun,
      errorCocina,
      errorTextCocina,
      errorRopas,
      errorTextRopas,
      errorParqueadero,
      errorUnidad,
      errorBarrio,
      errorTextBarrio,
      errorComuna,
      errorTextComuna,
      errorObservaciones,
      errorTextObservaciones,
    };
  } else {
    return false;
  }
};
