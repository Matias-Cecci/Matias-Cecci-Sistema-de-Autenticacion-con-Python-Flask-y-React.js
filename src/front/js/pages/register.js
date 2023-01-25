import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Register = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const sendRegisterCredential = async () => {
    const response = await fetch("https://3001-matiascecci-matiascecci-7s5aq9y5seh.ws-eu84.gitpod.io/api/register",{
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
    const data = await response.json();
    if (response.ok) {
        
        navigate("/login");
    } else {
        setError(data.response);
    }
  };

  return (
    <div className="text-center mt-5">
        Register
        <div>
            <label htmlFor="email">email</label>
            <input name="email" placeholder="email" value={email} onChange={(e) => {
                setError(false);
                setEmail(e.target.value);
            }}
            ></input>
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input name="password" placeholder="password" value={password} onChange={(e) => {
                setError(false);
                setPassword(e.target.value);
            }}>
            </input>
        </div>
        <button className="btn btn-success" onClick={() => sendRegisterCredential()}>
            Register
        </button>
        {error ? (<p className="alert alert-warning">{error}</p>) : null}
    </div>
    );
};
