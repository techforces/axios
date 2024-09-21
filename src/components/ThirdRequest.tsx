import axios from "axios";
import { useState } from "react";

const url = "/axios-tutorial-post";
// see vite.config.js for link, fixes cors issue

export const ThirdRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { name: name, email: email });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="third-request">
      <h2>Post request</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="example@email.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
