import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './css/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="btn-2"
  style={{
    color: "black",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    fontWeight: "bold"
  }}>Log In</button>;
};

export default Login;