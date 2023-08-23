// decode token
import jwt_decode from 'jwt-decode';

export function decodeToken(token) {
    try {
        const decoded = jwt_decode(token);
        return decoded;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export function validateTokenExpiration(expiration) {
    var expirationDate = new Date(expiration * 1000);
    if (expirationDate < new Date()) {
        return '0000'; // Token vencido
    }
    return '0001'; // Token válido
}

export const obtenerFechaSinHora = (fecha) => {
    const fechaCompleta = new Date(fecha);
    const anio = fechaCompleta.getFullYear();
    const mes = (fechaCompleta.getMonth() + 1).toString().padStart(2, '0');
    const dia = fechaCompleta.getDate().toString().padStart(2, '0');

    if (fecha !== undefined) {
        return `${anio}-${mes}-${dia}`;
    }
};