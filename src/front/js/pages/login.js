import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const sendLoginCredential = async () => {
    const response = await fetch("https://3001-matiascecci-matiascecci-7s5aq9y5seh.ws-eu84.gitpod.io/api/login",{
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
    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        await actions.getCurrentUserEmail();
        navigate("/");
    } else {
        setError(true);
    }
  };

  return (
    <div className="container col-6 mt-3 border rounded">
        <h2 className="text-center m-3">Login </h2>
        <div className="row my-3">
            <label className="col-sm-2 col-form-label" htmlFor="email">Email: </label>
            <div className="col-sm-10">
                <input className="form-control" name="email" placeholder="email" value={email} onChange={(e) => {
                        setError(false);
                        setEmail(e.target.value);
                    }}
                ></input>
            </div>
        </div>
        <div className="row my-3">
            <label className="col-sm-2 col-form-label" htmlFor="password">Password: </label>
            <div className="col-sm-10">
                <input className="form-control" name="password" placeholder="password" value={password} onChange={(e) => {
                    setError(false);
                    setPassword(e.target.value);
                }}>
                </input>
            </div>
        </div>
        <div className="text-center mt-2 p-3 "> 
            <button className="btn btn-primary btn-lg" onClick={() => sendLoginCredential()}>
                Login
            </button>
            {error ? (<p className="alert alert-warning">Error en crendenciales</p>) : null}
        </div>
    </div>
    );
};
