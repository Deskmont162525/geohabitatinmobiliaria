import { http } from "../data/fetch";

const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;

export const InteresaService = {
  getAllInteresados: async () => {
    try {
      return await http
        .get(`${urlAuth}/interesados/interesado`)
        .then((res) => {
          // console.log('que tiene esto es el', res);
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

  postCreateInteresa: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/interesados/interesado`, JSON.stringify(data))
        .then((res) => {
          // console.log('res', res);
          return res;
        })
        .catch((ex) => {
          return { message: "Hubo un error en el servidor interno", code: 500 };
        });
    } catch (err) {
      throw Error("Error al obtener postCreateInteresa");
    }
  },

  putActualizarIntere: async (id, data) => {
    try {
      return await http
        .put(`${urlAuth}/interesados/interesado/${id}`, data)
        .then((res) => {
        //   console.log("que tiene esto es el email", res);
          return res;
        })
        .catch((ex) => {
          console.log(ex);
          return { message: "Hubo un error en el servidor", code: 500 };
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener putActualizarIntere");
    }
  },
  getDeleteIntereById: async (id) => {
    try {
      return await http
        .deleted(`${urlAuth}/interesados/interesado/${id}`)
        .then((res) => {
        //   console.log("que tiene esto es el email", res);
          return res;
        })
        .catch((ex) => {
          console.log(ex);
          return { message: "Hubo un error en el servidor", code: 500 };
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener getDeleteIntereById");
    }
  },

  postDeletedInteresaMultiple: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/interesados/interesado/delete-multiple`, JSON.stringify(data))
        .then((res) => {
        //   console.log('res', res);
          return res;
        })
        .catch((ex) => {
          return { message: "Hubo un error en el servidor interno", code: 500 };
        });
    } catch (err) {
      throw Error("Error al obtener postCreateInteresa");
    }
  },
};
