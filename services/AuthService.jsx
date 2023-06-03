import { http } from "../data/fetch";

const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;

export const AuthService = {
  postSignIn: async (data) => {
    try {
      return await http
        .post(`${urlAuth}/auth/users/login`, JSON.stringify(data))
        .then((res) => {          
          return res;
        })
        .catch((ex) => {
          return {
            metadata: [
              { date: "Error servidor", code: "C001", type: "respuesta nok" },
            ],
          };
        });
    } catch (err) {
      throw Error("Error al obtener postSignIn");
    }
  },

  getAcriveUsuById: async (id) => {
    try {
        return await http
            .get(`${url}/auth/users/active/${id}`)
            .then((res) => {
                // console.log("que tiene esto es el email",res)
                return res;
            })
            .catch((ex) => {
                console.log(ex);
                return { message: 'Hubo un error en el servidor', code: 500 };
            });
    } catch (err) {
        // console.log(err);
        throw Error('Error al obtener getAcriveUsuById');
    }
},
  

  };
