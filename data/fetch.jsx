const headersToken = (token) => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
});


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

const put = async (url, body) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};


const deleted = async (url, token) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: headersToken(token),
  });
  return await response.json();
};

export const http = {
  get,
  post,
  put, 
  deleted, 
};
