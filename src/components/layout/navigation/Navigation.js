import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import LogOut from "../../admin/login/LogOut";

function Navigation() {
    const { user } = useContext(AuthContext);
    return (
        <div className="menu">
            <NavLink to="/" exact>
                Home
            </NavLink>
            <NavLink to="/accomodations" exact>
                Accomodations
            </NavLink>
            <NavLink to="/contact" exact>
                Contact
            </NavLink>

            {user ? (
                <>
                    <NavLink to="/admin">Admin Page</NavLink>
                    <LogOut />
                </>
            ) : (
                    <NavLink to="/register">Register</NavLink>
                )}
        </div>
    );
}

export default Navigation;