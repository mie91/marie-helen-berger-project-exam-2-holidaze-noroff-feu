import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { IoIosLogOut } from "react-icons/io";

function Login() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  function doLogout() {
    logout();
    history.push("/");
  }

  return (
    <Link id="nav-link__admin" onClick={doLogout}>
      Log Out
      <IoIosLogOut aria-label="Logout icon" />
    </Link>
  );
}

export default Login;
