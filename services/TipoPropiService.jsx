import { http } from "../data/fetch";

const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;

export const TipoPropiedService = {
  getAllTipoPropied: async () => {
    try {
      return await http
        .get(`${urlAuth}/tipoPropiedades/tipoPropiedad`)
        .then((res) => {
        //   console.log('que tiene esto es el', res);
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

  postCreateTipoPropied: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/tipoPropiedades/tipoPropiedad`, JSON.stringify(data))
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

  putActualizarTipoPropied: async (id, data) => {
    try {
      return await http
        .put(`${urlAuth}/tipoPropiedades/tipoPropiedad/${id}`, data)
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
  getDeleteTipoPropiedById: async (id) => {
    try {
      return await http
        .deleted(`${urlAuth}/tipoPropiedades/tipoPropiedad/${id}`)
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

  postDeletedTipoPropiedMultiple: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/tipoPropiedades/tipoPropiedad/delete-multiple`, JSON.stringify(data))
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
