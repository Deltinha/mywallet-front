import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://mywallet-deltinha.herokuapp.com";

function createHeaders(token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
}

export function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

export function postLogIn(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}

export function postEntry({ body, token }) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/entries`, body, config);
  return promise;
}

export function getEntries(token) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/entries`, config);
  return promise;
}

export function postLogout(token) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/logout`, {}, config);
  return promise;
}
