import axios from "axios";
import { useEffect } from "react";

import authFetch from "./custom";

const randomUserUrl = "/api";
// see vite.config.js for link, fixes cors issue

export const FifthRequest = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch("");
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="fourth-request">Custom Instance</h2>;
};
