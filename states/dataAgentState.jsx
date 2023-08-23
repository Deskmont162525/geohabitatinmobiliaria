import { parseCookies } from "nookies";
const { userGEO } = parseCookies();
const cookieValue =
  userGEO === undefined || userGEO === "" ? "" : JSON.parse(userGEO);

export const agentState = {
  id_usuario: cookieValue?.data?.id,
  descripcion: "",
  imagen: {},
};
