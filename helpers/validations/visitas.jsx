export const validatorDataVisita = (dataValidar, error) => {
    let {
      errorIdInmueble,
      errorTextIdInmueble,
      errorIdInteresado,
      errorTextIdInteresado,
      errorFechaVisita,
      errorTextFechaVisita,
      errorComentarios,
      errorTextComentarios,
    } = error;
  
    const { id_inmueble, interesado_id, fecha_visita, comentarios } = dataValidar;
  
    if (!id_inmueble || id_inmueble.code === '') {
      errorIdInmueble = true;
      errorTextIdInmueble = 'Seleccione un inmueble';
    } else {
      errorIdInmueble = false;
      errorTextIdInmueble = '';
    }
  
    if (!interesado_id || interesado_id.code === '') {
      errorIdInteresado = true;
      errorTextIdInteresado = 'Seleccione un interesado';
    } else {
      errorIdInteresado = false;
      errorTextIdInteresado = '';
    }
  
    if (!fecha_visita) {
      errorFechaVisita = true;
      errorTextFechaVisita = 'Ingrese una fecha de visita';
    } else {
      errorFechaVisita = false;
      errorTextFechaVisita = '';
    }
  
    if (!comentarios) {
      errorComentarios = true;
      errorTextComentarios = 'Ingrese comentarios';
    } else {
      errorComentarios = false;
      errorTextComentarios = '';
    }
  
    if (
      errorIdInmueble ||
      errorIdInteresado ||
      errorFechaVisita ||
      errorComentarios
    ) {
      return {
        errorIdInmueble,
        errorTextIdInmueble,
        errorIdInteresado,
        errorTextIdInteresado,
        errorFechaVisita,
        errorTextFechaVisita,
        errorComentarios,
        errorTextComentarios,
      };
    } else {
      return false;
    }
  };
  