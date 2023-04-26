import { ADMIN } from "../helpers/constants";
import { SUCESS } from "../helpers/constants";
import { AuthService } from "../services/AuthService";
import {
  SIGN_IN,
  UI_ACTIVE_LOADER,
  UI_REMOVE_LOADER,
  LOGOUT,
  UI_ADD_MESSAGE,
} from "../type";
import { setCookie, destroyCookie } from "nookies";

export const signIn = async ({
  dispatchUi,
  dispatchAuth,
  form,
  router,
  onChangeDialog,
}) => {
  dispatchUi({
    type: UI_ACTIVE_LOADER,
  });
  const response = await AuthService.postSignIn(form);
  if (response.code === SUCESS) {
    const { data } = response;
    const dataUser = await AuthService.getAboutMe(data.accessToken);
    if (dataUser.code === SUCESS) {
      if (dataUser.data.profile.name === ADMIN) {
        dispatchAuth({
          type: SIGN_IN,
          payload: dataUser.data,
        });
        const dataToken = await AuthService.decodeToken(data.accessToken);
        setCookie(null, "token", data.accessToken, {
          expires: new Date(dataToken.data?.expiresIn),
        });
        setCookie(null, "user", JSON.stringify(dataUser.data), {
          expires: new Date(dataToken.data?.expiresIn),
        });
        setCookie(null, "roles", dataToken.data?.authorities, {
          expires: new Date(dataToken.data?.expiresIn),
        });
        router.push("/inicio");
        dispatchUi({
          type: UI_REMOVE_LOADER,
        });
      }
    }
  } else {
    dispatchUi({
      type: UI_REMOVE_LOADER,
    });
    dispatchUi({
      type: UI_ADD_MESSAGE,
      payload: {
        message: "Error al iniciar sesión,verifique credenciales",
      },
    });
    onChangeDialog();
  }
};

export const forgotPassword = async ({
  dispatchUi,
  form,
  onChangeDialogSuccess,
  onChangeDialogFailed,
}) => {
  dispatchUi({
    type: UI_ACTIVE_LOADER,
  });
  const response = await AuthService.postForgotPassword(form);
  if (response.code === SUCESS) {
    dispatchUi({
      type: UI_ADD_MESSAGE,
      payload: {
        message: "Se envio un email a tu correo electronico",
      },
    });
    onChangeDialogSuccess();
  } else {
    dispatchUi({
      type: UI_ADD_MESSAGE,
      payload: {
        message: "Error correo electronico inexistente",
      },
    });
    onChangeDialogFailed();
  }
  dispatchUi({
    type: UI_REMOVE_LOADER,
  });
};

export const recoveryPassword = async ({
  dispatchUi,
  form,
  onChangeDialogSuccess,
  onChangeDialogFailed,
}) => {
  dispatchUi({
    type: UI_ACTIVE_LOADER,
  });
  const response = await AuthService.putRecoveryPassword(form);
  if (response.code === SUCESS) {
    dispatchUi({
      type: UI_ADD_MESSAGE,
      payload: {
        message: "Cambio de contraseña exitoso",
      },
    });
    onChangeDialogSuccess();
  } else {
    dispatchUi({
      type: UI_ADD_MESSAGE,
      payload: {
        message: "Error al cambiar contraseña",
      },
    });
    onChangeDialogFailed();
  }
  dispatchUi({
    type: UI_REMOVE_LOADER,
  });
};

export const logOut = ({ dispatchAuth, router }) => {
  dispatchAuth({
    type: LOGOUT,
  });
  destroyCookie(null, "token");
  destroyCookie(null, "user");
  router.push("/");
};
