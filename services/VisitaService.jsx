import { http } from "../data/fetch";

const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;

export const VisitaService = {

getAllVisitas: async () => {
    try {
        return await http
            .get(`${urlAuth}/visitas/visita`)
            .then((res) => {
                // console.log('que tiene esto es el email', res);
                return res;
            })
            .catch((ex) => {
                console.log(ex);
                return { message: 'Hubo un error en el servidor', code: 500 };
            });
    } catch (err) {
        // console.log(err);
        throw Error('Error al obtener getSendEmailById');
    }
},

postCreateVisitas: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/visitas/visita`, JSON.stringify(data))
        .then((res) => {
        //   console.log('res', res);
          return res;
        })
        .catch((ex) => {
          return { message: "Hubo un error en el servidor interno", code: 500 };
        });
    } catch (err) {
      throw Error("Error al obtener postCreateVisitas");
    }
  },

  putActualizarVisitas: async (id, data) => {
    try {
      return await http
        .put(`${urlAuth}/visitas/visita/${id}`, data)
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
      throw Error("Error al obtener putActualizarVisitas");
    }
  },
  getDeleteVisitasById: async (id) => {
    try {
      return await http
        .deleted(`${urlAuth}/visitas/visita/${id}`)
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
      throw Error("Error al obtener getDeleteVisitasById");
    }
  },

  postDeletedVisitasMultiple: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/visitas/visita/delete-multiple`, JSON.stringify(data))
        .then((res) => {
        //   console.log('res', res);
          return res;
        })
        .catch((ex) => {
          return { message: "Hubo un error en el servidor interno", code: 500 };
        });
    } catch (err) {
      throw Error("Error al obtener postDeletedVisitasMultiple");
    }
  },

};