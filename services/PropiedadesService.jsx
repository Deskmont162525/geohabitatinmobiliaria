import { http } from "../data/fetch";

const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;

export const PropiedService = {
  getAllPropied: async () => {
    try {
      return await http
        .get(`${urlAuth}/propiedades/propiedad`)
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

  getAllPropiedImagenes: async () => {
    try {
      return await http
        .get(`${urlAuth}/images/propiedad-images`)
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

  postCreatePropied: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/propiedades/propiedad`, JSON.stringify(data))
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

  putActualizarPropied: async (id, data) => {
    try {
      return await http
        .put(`${urlAuth}/propiedades/propiedad/${id}`, data)
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
  getDeletePropiedById: async (id) => {
    try {
      return await http
        .deleted(`${urlAuth}/propiedades/propiedad/${id}`)
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

  postDeletedPropiedMultiple: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/propiedades/propiedad/delete-multiple`, JSON.stringify(data))
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
