import axios from "axios";

// функция для получения сконфигурированного экземпляра из axios
export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  return api;
};
