let regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validatorCompany = (company, error) => {
  let {
    errorDni,
    errorName,
    errorCountry,
    errorTextDni,
    errorTextName,
    errorTextCountry,
    errorPhone,
    errorEmail,
    errorTextPhone,
    errorTextEmail,
  } = error;
  const { dni, name, country, email, phone } = company;

  if (name === "") {
    errorName = true;
    errorTextName = "Ingrese nombre";
  } else {
    errorName = false;
    errorTextName = "";
  }

  if (dni === "") {
    errorDni = true;
    errorTextDni = "Ingrese DNI";
  } else {
    errorDni = false;
    errorTextDni = "";
  }

  if (country === "" || country === 0) {
    errorCountry = true;
    errorTextCountry = "Ingrese país";
  } else {
    errorCountry = false;
    errorTextCountry = "";
  }

  if (email === "") {
    errorEmail = true;
    errorTextEmail = "Ingrese email";
  } else if (!regexEmail.test(email)) {
    errorEmail = true;
    errorTextEmail = "Ingrese email valido";
  } else {
    errorEmail = false;
    errorTextEmail = "";
  }

  if (phone === "") {
    errorPhone = true;
    errorTextPhone = "Ingrese telefono";
  } else if (phone.trim().length > 15) {
    errorPhone = true;
    errorTextPhone = "Debe tener maximo 15 digitos";
  }
  //  else if (parseInt(phone) < 3000000000 || parseInt(phone) > 3999999999) {
  //   errorPhone = true;
  //   errorTextPhone = "Telefono inválido";
  // } 
  else if (phone.trim().length < 6) {
    errorPhone = true;
    errorTextPhone = "Debe tener minimo 6 digitos";
  } else {
    errorPhone = false;
    errorTextPhone = "";
  }

  if (
    errorDni ||
    errorName ||
    errorCountry ||
    errorEmail ||
    errorPhone ||
    (errorName && errorDni && errorCountry && errorEmail && errorPhone)
  ) {
    return {
      errorDni,
      errorName,
      errorCountry,
      errorTextDni,
      errorTextName,
      errorTextCountry,
      errorPhone,
      errorEmail,
      errorTextPhone,
      errorTextEmail,
    };
  } else {
    return false;
  }
};
