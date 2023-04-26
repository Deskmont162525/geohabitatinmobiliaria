export const validatorProfile = (profile, error) => {
  let { errorName, errorTextName } = error;
  const { name } = profile;

  if (name === "") {
    errorName = true;
    errorTextName = "Ingrese nombre";
  } else {
    errorName = false;
    errorTextName = "";
  }

  if (errorName) {
    return {
      errorName,
      errorTextName,
    };
  } else {
    return false;
  }
};
