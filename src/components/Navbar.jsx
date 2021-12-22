import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/navbar.scss";

const Navbar = () => {
  let login = false;
  let admin = false;
  if (JSON.parse(localStorage.getItem("admin"))) {
    login = true;
    admin = true;
  } else if (JSON.parse(localStorage.getItem("user"))) {
    login = true;
    admin = false;
  }

  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">E-Com</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          {login ? (
            <>
              {admin ? (
                <li>
                  <Link to="/adminRekap">Rekap Penjualan</Link>
                </li>
              ) : (
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              )}
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
