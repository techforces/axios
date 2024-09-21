import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://icanhazdadjoke.com/";
// see vite.config.js for link, fixes cors issue

export const SecondRequest = () => {
  const [joke, setJoke] = useState("Random dad joke");

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(data.joke);
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="second-request">
      <button className="button" onClick={fetchDadJoke}>
        Random joke
      </button>
      <p>{joke}</p>
    </div>
  );
};
