export const validatorPermission = (permission, error) => {
  let { errorModule, errorTextModule, errorAction, errorTextAction } = error;
  const { moduleId, action } = permission;

  if (moduleId === "" || moduleId === 0) {
    errorModule = true;
    errorTextModule = "Ingrese modulo";
  } else {
    errorModule = false;
    errorTextModule = "";
  }

  if (action === "" || action === 0) {
    errorAction = true;
    errorTextAction = "Ingrese acción";
  } else {
    errorAction = false;
    errorTextAction = "";
  }

  if (errorAction || errorModule || (errorModule && errorAction)) {
    return {
      errorModule,
      errorTextModule,
      errorAction,
      errorTextAction,
    };
  } else {
    return false;
  }
};

export const validatorNewPermission = (permission, error) => {
  let {
    errorModule,
    errorTextModule,
    errorAction,
    errorTextAction,
    errorProfile,
    errorTextProfile,
  } = error;
  const { moduleId, action, profileId } = permission;

  if (profileId === "" || profileId === 0) {
    errorProfile = true;
    errorTextProfile = "Ingrese perfil";
  } else {
    errorProfile = false;
    errorTextProfile = "";
  }

  if (moduleId === "" || moduleId === 0) {
    errorModule = true;
    errorTextModule = "Ingrese modulo";
  } else {
    errorModule = false;
    errorTextModule = "";
  }

  if (action === "" || action === 0) {
    errorAction = true;
    errorTextAction = "Ingrese acción";
  } else {
    errorAction = false;
    errorTextAction = "";
  }

  if (
    errorAction ||
    errorModule ||
    errorProfile ||
    (errorModule && errorAction && errorProfile)
  ) {
    return {
      errorModule,
      errorTextModule,
      errorAction,
      errorTextAction,
      errorProfile,
      errorTextProfile,
    };
  } else {
    return false;
  }
};
