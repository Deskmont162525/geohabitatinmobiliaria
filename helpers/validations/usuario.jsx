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

//   if (username.trim() === "") {
//     errors.errorUsername = true;
//     errors.errorTextUsername = "Ingrese un Username de usuario";
//   }

//   if (titleForm === "Create") {
//     if (password.trim() === "") {
//       errors.errorPassword = true;
//       errors.errorTextPassword = "Ingrese una contraseña";
//     }
//   }

//   if (email.trim() === "") {
//     errors.errorEmail = true;
//     errors.errorTextEmail = "Ingrese un correo electrónico";
//   } else if (!validator.isEmail(email)) {
//     errors.errorEmail = true;
//     errors.errorTextEmail = "Ingrese un correo electrónico válido";
//   }

//   if (nombres.trim() === "") {
//     errors.errorNombre = true;
//     errors.errorTextNombre = "Ingrese los nombres";
//   }

//   if (apellidos.trim() === "") {
//     errors.errorApellidos = true;
//     errors.errorTextApellidos = "Ingrese los apellidos";
//   }

//   if (numero_documento.trim() === "") {
//     errors.errorNumeroDocumento = true;
//     errors.errorTextNumeroDocumento = "Ingrese el número de documento";
//   } else if (/[^\w\s]/.test(numero_documento)) {
//     errors.errorNumeroDocumento = true;
//     errors.errorTextNumeroDocumento = "No ingrese caracteres especiales";
//   }

//   if (numero_telefonico.trim() === "") {
//     errors.errorNumeroTelefonico = true;
//     errors.errorTextNumeroTelefonico = "Ingrese el número telefónico";
//   } else if (!validator.isMobilePhone(numero_telefonico)) {
//     errors.errorNumeroTelefonico = true;
//     errors.errorTextNumeroTelefonico = "Ingrese un número de teléfono válido";
//   }

//   if (
//     errors.errorNombre ||
//     errors.errorEmail ||
//     errors.errorNumeroDocumento ||
//     errors.errorTipoDocumento ||
//     errors.errorApellidos ||
//     errors.errorNumeroTelefonico ||
//     errors.errorPassword
//   ) {
//     return errors;
//   } else {
//     return false;
//   }
// };




if (username === "") {
  errors.errorUsername = true;
  errors.errorTextUsername = "Ingrese nombre de usuario";
} else {
  errors.errorUsername = false;
  errors.errorTextUsername = "";
}

if (password === "") {
  errors.errorPassword = true;
  errors.errorTextPassword = "Ingrese contraseña";
} else {
  errors.errorPassword = false;
  errors.errorTextPassword = "";
}

// if (confirmPassword !== password) {
//   errors.errorConfirmPassword = true;
//   errors.errorTextConfirmPassword = "Las contraseñas no coinciden";
// } else {
//   errors.confirmPassword = false;
//   errors.errorTextConfirmPassword = "";
// }

if (email === "") {
  errors.errorEmail = true;
  errors.errorTextEmail = "Ingrese dirección de correo electrónico";
} else {
  errors.errorEmail = false;
  errors.errorTextEmail = "";
}

if (!role || !role.name) {
  errors.errorRole = true;
  errors.errorTextRole = "Seleccione un rol válido";
} else {
  errors.errorRole = false;
  errors.errorTextRole = "";
}

if (nombres === "") {
  errors.errorNombres = true;
  errors.errorTextNombres = "Ingrese nombres";
} else {
  errors.errorNombres = false;
  errors.errorTextNombres = "";
}

if (apellidos === "") {
  errors.errorApellidos = true;
  errors.errorTextApellidos = "Ingrese apellidos";
} else {
  errors.errorApellidos = false;
  errors.errorTextApellidos = "";
}

if (numero_documento === "") {
  console.log("aaaaaaa");
  errors.errorNumero_documento = true;
  errors.errorTextNumeroDocumento = "Ingrese número de documento";
} else {
  console.log("bbbbbbb");
  errors.errorNumero_documento = false;
  errors.errorTextNumeroDocumento = "";
}

console.log("numero_documento",numero_documento);
if (!tipo_documento || !tipo_documento.name) {
  errors.errorTipo_documento = true;
  errors.errorTextTipoDocumento = "Seleccione un tipo de documento válido";
} else {
  errors.errorTipo_documento = false;
  errors.errorTextTipoDocumento = "";
}

if (numero_telefonico === "") {
  errors.errorNumero_telefonico = true;
  errors.errorTextNumeroTelefonico = "Ingrese número de teléfono";
} else {
  errors.errorNumero_telefonico = false;
  errors.errorTextNumeroTelefonico = "";
}

// Puedes agregar más validaciones aquí según las propiedades de userState

// Verificar si hay errores
const hasErrors = Object.values(errors).some((value) => value === true);

if (hasErrors) {
  return errors;
} else {
  return false;
}
};