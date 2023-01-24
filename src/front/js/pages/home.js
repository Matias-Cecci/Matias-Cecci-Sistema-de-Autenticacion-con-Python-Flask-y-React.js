import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const sendLoginCredential = async () => {
    const response = await fetch(
      "https://3001-matiascecci-matiascecci-7s5aq9y5seh.ws-eu83.gitpod.io/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
  };

  return (
    <div className="text-center mt-5">
      LOGIN
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button className="btn btn-primary" onClick={() => sendLoginCredential()}>
        Login
      </button>
    </div>
  );
};
