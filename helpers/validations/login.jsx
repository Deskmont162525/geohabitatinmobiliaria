var regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

let regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validatorLogin = (login, error) => {
  let { errorEmail, errorPassword, errorTextEmail, errorTextPassword } = error;
  const { email, password } = login;

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

  if (password === "") {
    errorPassword = true;
    errorTextPassword = "Ingrese contraseña";
  } else if (password.trim().length < 8) {
    errorPassword = true;
    errorTextPassword = "Debe tener una contraseña mayor a 8 digitos";
  } else if (!regex.test(password)) {
    errorPassword = true;
    errorTextPassword =
      "La contraseña debe contener mínimo 8 caracteres entre los cuales debe haber: un carácter especial ($@$!%*?&), una minúscula, una mayúscula y un número.";
  } else if (password.trim().length > 20) {
    errorPassword = true;
    errorTextPassword = "Debe tener una contraseña menor o igual a 20 digitos";
  } else {
    errorPassword = false;
    errorTextPassword = "";
  }

  if (errorEmail || errorPassword || (errorPassword && errorEmail)) {
    return { errorEmail, errorPassword, errorTextEmail, errorTextPassword };
  } else {
    return false;
  }
};

export const validatorForgotPassword = (login, error) => {
  let { errorEmail, errorTextEmail } = error;
  const { email } = login;

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

  if (errorEmail) {
    return { errorEmail, errorTextEmail };
  } else {
    return false;
  }
};

export const validatorRecoveryPwd = (form, error) => {
  let {
    errorPassword,
    errorConfirmPassword,
    errorTextPassword,
    errorTextConfirmPassword,
  } = error;
  const { password, pwdVerification } = form;

  if (password === "") {
    errorPassword = true;
    errorTextPassword = "Ingrese contraseña";
  } else if (password.trim().length < 8) {
    errorPassword = true;
    errorTextPassword = "Debe tener una contraseña mayor a 8 digitos";
  } else if (!regex.test(password)) {
    errorPassword = true;
    errorTextPassword =
      "La contraseña debe contener mínimo 8 caracteres entre los cuales debe haber: un carácter especial ($@$!%*?&), una minúscula, una mayúscula y un número.";
  } else if (password.trim().length > 20) {
    errorPassword = true;
    errorTextPassword = "Debe tener una contraseña menor o igual a 20 digitos";
  } else {
    errorPassword = false;
    errorTextPassword = "";
  }

  if (pwdVerification === "") {
    errorConfirmPassword = true;
    errorTextConfirmPassword = "Debe repetir contraseña";
  } else {
    errorConfirmPassword = false;
    errorTextConfirmPassword = "";
  }

  if (password !== pwdVerification) {
    errorConfirmPassword = true;
    errorTextConfirmPassword = "Contraseñas no coinciden";
  } else {
    errorConfirmPassword = false;
    errorTextConfirmPassword = "";
  }

  if (
    errorPassword ||
    errorConfirmPassword ||
    (errorPassword && errorConfirmPassword)
  ) {
    return {
      errorPassword,
      errorConfirmPassword,
      errorTextConfirmPassword,
      errorTextPassword,
    };
  } else {
    return false;
  }
};
