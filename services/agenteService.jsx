import { http } from "../data/fetch";

const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;

export const AgenteService = {
  postDetailAsesorUser: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/agentes/agente`, JSON.stringify(data))
        .then((res) => {
          // console.log('res', res);
          return res;
        })
        .catch((ex) => {
          return {
            metadata: [
              {
                date: "Error servidor",
                code: "C001",
                type: "respuesta nok",
                error: ex,
              },
            ],
          };
        });
    } catch (err) {
      throw Error("Error al obtener postCreateUser");
    }
  },

  getAllAgentes: async () => {
    try {
      return await http
        .get(`${url}/auth/agents`)
        .then((res) => {
          // console.log("que tiene esto es el", res);
          return res;
        })
        .catch((ex) => {
          console.log(ex);
          return { message: "Hubo un error en el servidor interno", code: 500 };
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener getAllInteresados");
    }
  },
};
