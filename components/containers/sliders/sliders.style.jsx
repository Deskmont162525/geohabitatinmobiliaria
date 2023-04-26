import { makeStyles } from "@material-ui/core";

export const useStylesSliders = makeStyles((theme) => ({
    root: {
      position: "relative", // Agregar posición relativa al contenedor principal
      width: "100%",
      height: "400px", // Usar altura completa de la ventana
      overflow: "hidden", // Ocultar cualquier contenido fuera del contenedor
    },
    img: {
      position: "absolute", // Cambiar posición absoluta para permitir otros elementos debajo
      top: 0,
      left: 0,
      width: "100%",
      height: "400px",
      objectFit: "cover",
      transition: "opacity 1s ease",
    },
    controls: {
      position: "absolute", // Cambiar posición absoluta para permitir otros elementos debajo
      left: "50%",
      bottom: "1rem",
      transform: "translate(-50%, 0)",
      display: "flex",
      justifyContent: "center",
      zIndex: 1, // Establecer zIndex para colocar los controles encima de las imágenes   
    },
    controlButton: {
      width: "13px !important",
      height: "13px !important",
      padding:12,
      margin: "10px",
      borderRadius: "50%",
      backgroundColor:  "#f5f5f5 !important",
      color: "#fff",
      opacity: 0.5,
      "&:hover": {
        opacity: 1,
      },
    },
    activeControlButton: {
      opacity: 1,
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
      zIndex: 1,
    },
    info: {
      position: "absolute", // Cambiar posición absoluta para permitir otros elementos debajo
      bottom: "2rem",
      left: "50%",
      transform: "translate(-50%, 0)",
      textAlign: "center",
      zIndex: 1, // Establecer zIndex para colocar la información encima de las imágenes
    },
    infoText: {
      background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))", // Usar degradado de fondo para la información
      padding: "1rem",
    },
    valueButton: {
      fontSize: "20px",
      fontWeight: 700,
      fontStyle: "normal",
      textTransform: "uppercase",
      padding: "15px",
      display: "inline-block",
      backgroundColor: "#72b70f",
      borderRadius: "5px",
    },
    blockquote: {
      color: "#fff",
      margin: "40px",
    },
  }));