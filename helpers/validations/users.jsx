let regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validatorUser = (user, error) => {
  let {
    errorDocumentType,
    errorTextDocumentType,
    errorDni,
    errorTextDni,
    errorFirstname,
    errorTextFirstname,
    errorMiddlename,
    errorTextMiddlename,
    errorLastname,
    errorTextLastname,
    errorEmail,
    errorTextEmail,
    errorCompanyId,
    errorTextCompanyId,
    errorProfileId,
    errorTextProfileId,
    errorStatus,
    errorTextStatus,
    errorPhone,
    errorTextPhone,
  } = error;
  const {
    documentType,
    dni,
    firstname,
    middlename,
    lastname,
    email,
    companyId,
    profileId,
    status,
    phone,
  } = user;

  if (firstname === "") {
    errorFirstname = true;
    errorTextFirstname = "Ingrese nombres";
  } else {
    errorFirstname = false;
    errorTextFirstname = "";
  }

  // if (middlename === "") {
  //   errorMiddlename = true;
  //   errorTextMiddlename = "Ingrese segundo nombre";
  // } else {
  //   errorMiddlename = false;
  //   errorTextMiddlename = "";
  // }

  if (lastname === "") {
    errorLastname = true;
    errorTextLastname = "Ingrese apellidos";
  } else {
    errorLastname = false;
    errorTextLastname = "";
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

  if (documentType === "" || documentType === 0) {
    errorDocumentType = true;
    errorTextDocumentType = "Ingrese tipo de documento";
  } else {
    errorDocumentType = false;
    errorTextDocumentType = "";
  }

  if (dni === "") {
    errorDni = true;
    errorTextDni = "Ingrese número de documento";
  } else {
    errorDni = false;
    errorTextDni = "";
  }

  if (companyId === "" || companyId === 0) {
    errorCompanyId = true;
    errorTextCompanyId = "Ingrese empresa";
  } else {
    errorCompanyId = false;
    errorTextCompanyId = "";
  }

  if (profileId === "" || profileId === 0) {
    errorProfileId = true;
    errorTextProfileId = "Ingrese perfil";
  } else {
    errorProfileId = false;
    errorTextProfileId = "";
  }

  if (phone === "") {
    errorPhone = true;
    errorTextPhone = "Ingrese telefono";
  } else if (phone.trim().length > 15) {
    errorPhone = true;
    errorTextPhone = "Debe tener maximo 15 digitos";
  } 
  // else if (parseInt(phone) < 3000000000 || parseInt(phone) > 3999999999) {
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
    errorFirstname ||
    errorMiddlename ||
    errorLastname ||
    errorEmail ||
    errorDocumentType ||
    errorDni ||
    errorCompanyId ||
    errorProfileId ||
    errorPhone ||
    (errorFirstname &&
      errorMiddlename &&
      errorLastname &&
      errorEmail &&
      errorDocumentType &&
      errorDni &&
      errorCompanyId &&
      errorProfileId &&
      errorPhone)
  ) {
    return {
      errorDocumentType,
      errorTextDocumentType,
      errorDni,
      errorTextDni,
      errorFirstname,
      errorTextFirstname,
      errorMiddlename,
      errorTextMiddlename,
      errorLastname,
      errorTextLastname,
      errorEmail,
      errorTextEmail,
      errorCompanyId,
      errorTextCompanyId,
      errorProfileId,
      errorTextProfileId,
      errorStatus,
      errorTextStatus,
      errorPhone,
      errorTextPhone,
    };
  } else {
    return false;
  }
};
