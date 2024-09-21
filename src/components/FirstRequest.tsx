import axios from "axios";
import { useEffect } from "react";

const url = "/react-store-products";
// see vite.config.js for link, fixes cors issue

export const FirstRequst = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="first-request">first request</h2>;
};
