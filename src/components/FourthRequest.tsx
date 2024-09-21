import axios from "axios";
import { useEffect } from "react";

const productsUrl = "/react-store-products";
const randomUserUrl = "/api";
// see vite.config.js for link, fixes cors issue

export const FourthRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(productsUrl);
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="fourth-request">Global Instance</h2>;
};
