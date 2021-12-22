import React from "react";
import { useHistory } from "react-router";
import "../styles/components/logout.scss";

function Logout() {
  let history = useHistory();
  if (JSON.parse(localStorage.getItem("user"))) {
    localStorage.removeItem("user");
  } else if (JSON.parse(localStorage.getItem("admin"))) {
    localStorage.removeItem("admin");
    localStorage.removeItem("user");

  const logout = () => {
    history.push("/login");
  };

    return (
        <div className="mains">
            <h3 id="title">Berhasil Logout</h3>
            <button onClick={logout} id="button">Back to Login</button>
        </div>
    )
}

export default Logout;
