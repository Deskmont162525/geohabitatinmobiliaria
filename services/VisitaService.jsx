import { http } from "../data/fetch";

const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;

export const VisitaService = {

getAllVisitas: async () => {
    try {
        return await http
            .get(`${url}/visitas/visita`)
            .then((res) => {
                console.log('que tiene esto es el email', res);
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

};