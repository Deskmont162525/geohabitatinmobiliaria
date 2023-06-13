import { http } from "../data/fetch";

const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;

export const UserGService = {
  getAllUserGs: async () => {
    try {
      return await http
        .get(`${urlAuth}/auth/users`)
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

  getAllRoles: async () => {
    try {
      return await http
        .get(`${urlAuth}/roles/role`)
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

  postCreateUser: async (data) => {
    const dataSend = {
      username: data.username,
      password: data.password,
      email: data.email,
      role: data.role.name,
      nombres: data.nombres,
      apellidos: data.apellidos,
      numero_documento: data.numero_documento,
      tipo_documento: data.tipo_documento,
      numero_telefonico: data.numero_telefonico,
      estado: data.estado,
      password:data.password
    };

    try {
      return await http
        .post(`${urlAuth}/auth/user/signup`, JSON.stringify(dataSend))
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

  putActualizarUserGs: async (id, data) => {
    try {
      return await http
        .put(`${urlAuth}/auth/users/${id}`, data)
        .then((res) => {
            // console.log("que tiene esto es el email", res);
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
  getDeleteUserGById: async (id) => {
    try {
      return await http
        .deleted(`${urlAuth}/auth/users/${id}`)
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

  postDeletedUaersGMultiple: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/auth/users/delete-multiple`, JSON.stringify(data))
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
