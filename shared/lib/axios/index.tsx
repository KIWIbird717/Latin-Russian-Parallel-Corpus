import axios from "axios";

export const serviceUrl = axios.create({
  baseURL: "/api",
});
