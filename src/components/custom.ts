import axios from "axios";

const authFetch = axios.create({
  baseURL: "/react-store-products",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;
