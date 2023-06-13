import validator from "validator";

export const validatorDataIntere = (dataValidar, error) => {
  let {
    errorNombre,
    errorTextNombre,
    errorEmail,
    errorTextEmail,
    errortelefono,
    errorTexttelefono,
  } = error;

  const { nombre, email, telefono } = dataValidar;
  
  if (nombre === "") {
    errorNombre = true;
    errorTextNombre = "Ingrese nombre";
  } else {
    errorNombre = false;
    errorTextNombre = "";
  }

  if (email === "") {
    errorEmail = true;
    errorTextEmail = "Ingrese email";
  } else if (!validator.isEmail(email)) {
    errorEmail = true;
    errorTextEmail = "Ingrese un correo electrónico válido";
  } else {
    errorEmail = false;
    errorTextEmail = "";
  }

  if (telefono === "") {
    errortelefono = true;
    errorTexttelefono = "Ingrese teléfono";
  } else if (!validator.isMobilePhone(telefono) || telefono.length < 7) {
    errortelefono = true;
    errorTexttelefono =
      "Ingrese un número de teléfono válido sin letras o caracteres";
  } else {
    errortelefono = false;
    errorTexttelefono = "";
  }

  if (errorEmail || errortelefono) {
    return {
      errorNombre,
      errorTextNombre,
      errorEmail,
      errorTextEmail,
      errortelefono,
      errorTexttelefono,
    };
  } else {
    return false;
  }
};
