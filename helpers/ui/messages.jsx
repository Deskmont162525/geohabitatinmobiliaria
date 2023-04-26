export const replaceMessageRegister = (message) => {
  if (message) {
    const newMessage = message.replaceAll(
      "Field dni",
      "Número de identificación"
    );
    return newMessage;
  } else {
    return "Error general comuníquese con el administrador";
  }
};

export const replaceMessageRegisterExistUser = (message) => {
  const isExist = message.indexOf("dt_dni_UNIQUE");
  const newMessage =
    isExist !== -1 ? "Número de identificación ya existente" : message;
  return newMessage;
};
