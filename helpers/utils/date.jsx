export const dayInfoPayment = (date) => {
  const datePayment = new Date(date);
  let day = datePayment.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = datePayment.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = datePayment.getFullYear();
  return `${year}-${month}-${day}`;
};

export const dayInfoTotal = (date) => {
  const datePayment = new Date(date);
  let day = datePayment.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = datePayment.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = datePayment.getFullYear();
  let hours = datePayment.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = datePayment.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = datePayment.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
