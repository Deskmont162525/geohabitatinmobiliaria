export const validatorDataObjetoTP = (dataValidar, error) => {
    let {
      errorNombre,
      errorTextNombre,
    } = error;
  
    const { nombre } = dataValidar;
  
    if (nombre === "") {
      errorNombre = true;
      errorTextNombre = "Ingrese nombre";
    } else {
      errorNombre = false;
      errorTextNombre = "";
    }
  
    if (errorNombre) {
      return {
        errorNombre,
        errorTextNombre,
      };
    } else {
      return false;
    }
  };
  