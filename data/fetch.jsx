const headers = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
});

const headersToken = (token) => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
});

// encript

const postE = async (url, body, token) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headers(),
    body,
  });
  return await response.json();
};

// consultas
const get = async (url, token) => {
  const response = await fetch(url, {
    method: "GET",
    headers: headersToken(token),
  });
  return await response.json();
};

const post = async (url, body, token) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headersToken(token),
    body,
  });
  return await response.json();
};

const put = async (url, body, token) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: headersToken(token),
    body,
  });
  return await response.json();
};

const getS = async (url, body, token) => {
  const response = await fetch(url, {
    method: "GET",
    headers: headersToken(token),
    body,
  });
  return await response.json();
};

const getR = async (url, token) => {
  const response = await fetch(url, {
    method: "GET",
    headers: headersToken(token),
  });
  return await response.text();
};

const postC = async (url, token) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headersToken(token),
  });
  return await response.text();
};


export const http = {
  getR,
  getS,
  get,
  post,
  postE,
  postC,
  put,  
};
