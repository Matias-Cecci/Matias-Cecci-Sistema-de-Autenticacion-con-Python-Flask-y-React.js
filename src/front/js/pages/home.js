import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return(
    <div className="container">
        {store.currentUserEmail ? "Hola Usuario " + store.currentUserEmail : "Please Register or Login"}
    </div>
    );
  
};
