import validator from "validator";

export const validateUserData = (userData, errors, titleForm) => {
  const {
    username,
    password,
    email,
    role,
    nombres,
    apellidos,
    numero_documento,
    tipo_documento,
    numero_telefonico,
  } = userData;

  if (username.trim() === "") {
    errors.errorUsername = true;
    errors.errorTextUsername = "Ingrese un Username de usuario";
  }

  if (titleForm === "Create") {
    if (password.trim() === "") {
      errors.errorPassword = true;
      errors.errorTextPassword = "Ingrese una contraseña";
    }
  }

  if (email.trim() === "") {
    errors.errorEmail = true;
    errors.errorTextEmail = "Ingrese un correo electrónico";
  } else if (!validator.isEmail(email)) {
    errors.errorEmail = true;
    errors.errorTextEmail = "Ingrese un correo electrónico válido";
  }

  if (nombres.trim() === "") {
    errors.errorNombre = true;
    errors.errorTextNombre = "Ingrese los nombres";
  }

  if (apellidos.trim() === "") {
    errors.errorApellidos = true;
    errors.errorTextApellidos = "Ingrese los apellidos";
  }

  if (numero_documento.trim() === "") {
    errors.errorNumeroDocumento = true;
    errors.errorTextNumeroDocumento = "Ingrese el número de documento";
  } else if (/[^\w\s]/.test(numero_documento)) {
    errors.errorNumeroDocumento = true;
    errors.errorTextNumeroDocumento = "No ingrese caracteres especiales";
  }

  if (numero_telefonico.trim() === "") {
    errors.errorNumeroTelefonico = true;
    errors.errorTextNumeroTelefonico = "Ingrese el número telefónico";
  } else if (!validator.isMobilePhone(numero_telefonico)) {
    errors.errorNumeroTelefonico = true;
    errors.errorTextNumeroTelefonico = "Ingrese un número de teléfono válido";
  }

  if (
    errors.errorNombre ||
    errors.errorEmail ||
    errors.errorNumeroDocumento ||
    errors.errorTipoDocumento ||
    errors.errorApellidos ||
    errors.errorNumeroTelefonico ||
    errors.errorPassword
  ) {
    return errors;
  } else {
    return false;
  }
};
