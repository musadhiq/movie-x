import axios from "axios";
import { BASE_URL } from "./url";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
