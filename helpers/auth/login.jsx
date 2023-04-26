import { AuthService } from "../../services/AuthService";
import { destroyCookie, setCookie } from "nookies";

export const SignIn = async (
  login,
  setMessage,
  router,
  setLoading,
  handleDialogFailed,
  setOptionDialog,
  setActionDialog
) => {
  setLoading(true);
  const data = await AuthService.postLogin({
    ...login,
    applicationId: parseInt(process.env.NEXT_PUBLIC_APPLICATION_ID),
  });
  if (data.code === "C0000") {
    const { data: dataToken } = data;
    const { accessToken } = dataToken;
    const dataUser = await AuthService.getAboutMe(accessToken);
    const { data: user } = dataUser;
    // const statusCedula = await AuthService.statusCedula(user.dni, accessToken);
    if (dataUser.code == "C0000") {
      const tokenDecode = await AuthService.decodeToken(accessToken);
      setCookie(null, "token", accessToken, {
        path: '/',
        expires: new Date(tokenDecode.data?.expiresIn),
      });
      setCookie(null, "user", JSON.stringify(user), {
        path: '/',
        expires: new Date(tokenDecode.data?.expiresIn),
      });
      setCookie(null, "expiration", new Date(tokenDecode.data?.expiresIn), {
        path: '/',
        expires: new Date(tokenDecode.data?.expiresIn),
      });
      router.push("/sesion");
    } else {
      setLoading(false);
      setMessage("Error al iniciar sesión");
      handleDialogFailed();
    }
  }
  if (data.code === "C0002") {
    setLoading(false);
    setOptionDialog("Registrate");
    setActionDialog(data.code);
    setMessage("El usuario no se encuentra registrado");
    handleDialogFailed();
  }

  if (data.code !== "C0002" && data.code !== "C0000") {
    setLoading(false);
    setOptionDialog("Reintentar");
    setActionDialog(data.code);
    setMessage(data.message);
    handleDialogFailed();
  }
};

export const SignInCashier = async (
  login,
  setMessage,
  router,
  setLoading,
  handleDialogFailed,
  setOptionDialog,
  setActionDialog
) => {
  // Se ejecuta el loader
  setLoading(true);
  // Se envia datos del formulario
  const data = await AuthService.postLogin({
    ...login,
    applicationId: parseInt(process.env.NEXT_PUBLIC_APPLICATION_ID),
  });
  //Cuando la respuesta es exitosa
  if (data.code === "C0000") {
    const { data: dataToken } = data;
    //Obtenemos el token de usuario
    const { accessToken } = dataToken;
    const tokenDecode = await AuthService.decodeToken(accessToken);
    //Agregar la cookie de la sesión
    setCookie(null, "token_cashier", accessToken, {
      expires: new Date(tokenDecode.data?.expiresIn),
    });
    setCookie(null, "expiration_cashier", new Date(tokenDecode.data?.expiresIn), {
      expires: new Date(tokenDecode.data?.expiresIn),
    });
    //Redireccionamos a la pagina de filtros
    router.push("/cajero/consulta-pagos");
  }
  //Cuando la respuesta no es exitosa
  if (data.code === "C0002") {
    setLoading(false);
    setOptionDialog("Registrate");
    setActionDialog(data.code);
    setMessage("El usuario no se encuentra registrado");
    handleDialogFailed();
  }
  //Cuando la respuesta no es exitosa
  if (data.code !== "C0002" && data.code !== "C0000") {
    setLoading(false);
    setOptionDialog("Reintentar");
    setActionDialog(data.code);
    setMessage(data.message);
    handleDialogFailed();
  }
};

export const Logout = ({ router }) => {
  destroyCookie(null, "token", {path: '/'});
  destroyCookie(null, "user", {path: '/'});
  destroyCookie(null, "expiration", {path: '/'});
  sessionStorage.clear();
  router.push("/iniciar-sesion");
};


export const LogoutCashier = ({ router }) => {
  destroyCookie(null, "token_cashier");
  destroyCookie(null, "expiration_cashier");
  router.push("/cajero");
};

export const changePassword = async ({
  form,
  setLoadingPwd,
  router,
  handleDialogFailed,
  setMessage,
  setOptionDialog,
  setActionDialog,
}) => {
  setLoadingPwd(true);
  const response = await AuthService.postChangePwd({
    email: form.email,
    applicationId: process.env.NEXT_PUBLIC_APPLICATION_ID,
  });
  if (response.code === "C0000") {
    router.push("/olvidaste-tu-contrasena");
  } else {
    setLoadingPwd(false);
    setMessage(response.message);
    setOptionDialog("Reintentar");
    setActionDialog(response.code);
    handleDialogFailed();
  }
};

export const changePasswordSession = async ({
  form,
  setLoading,
  setMessage,
  handleDialog,
  handleDialogFailed,
}) => {
  setLoading(true);
  const response = await AuthService.postChangePwd({
    email: form.email,
    applicationId: process.env.NEXT_PUBLIC_APPLICATION_ID,
  });
  if (response.code === "C0000") {
    setLoading(false);
    setMessage(
      "Hemos enviado un enlace a tu correo electrónico para que restaures tu contraseña."
    );
    handleDialog();
  } else {
    setLoading(false);
    setMessage("Algo salio mal, inténtelo de nuevo");
    handleDialogFailed();
  }
};

export const recoveryPassword = async ({
  form,
  setLoadingPwd,
  handleDialog,
  handleDialogFailed,
  setMessage,
}) => {
  setLoadingPwd(true);
  if (form.token) {
    const response = await AuthService.recoveryPwd(form);
    setLoadingPwd(false);
    if (response.code === "C0000") {
      setMessage("Cambio de contraseña exitoso");
      handleDialog();
    } else {
      setMessage("Algo salio mal, inténtelo de nuevo");
      handleDialogFailed();
    }
  } else {
    setLoadingPwd(false);
    setMessage("No dispone de un token");
    handleDialogFailed();
  }
};

export const updateProfile = async ({
  id,
  profile,
  token,
  expiresIn,
  setMessage,
  handleDialog,
  handleDialogFailed,
  setLoading,
}) => {
  setLoading(true);
  const response = await AuthService.putUserProfile(id, profile, token);
  if (response.code === "C0000") {
    setLoading(false);
    setCookie(
      null,
      "user",
      JSON.stringify({
        ...profile,
        city: {
          id: profile.cityId,
          department: {
            id: profile.department,
          },
        },
      }),
      {
        expires: new Date(expiresIn),
      }
    );
    setMessage("Perfil actualizado exitosamente");
    handleDialog();
  } else {
    setLoading(false);
    setMessage("Algo salio mal, inténtelo de nuevo");
    handleDialogFailed();
  }
};

export const requestCedula = async ({ user, token }) => {
  const statusCedula = await AuthService.statusCedula(user.dni, token);
};
