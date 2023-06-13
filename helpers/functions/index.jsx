export function obtenerFechaActual() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
  
    // Formatear la fecha en formato corto (dd/mm/aaaa)
    const fechaFormateada = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${anio}`;
  
    return fechaFormateada;
  }