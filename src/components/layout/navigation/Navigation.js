import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import {Navbar, Nav} from "react-bootstrap";
import LogOut from "../../admin/login/LogOut";

import NavLogo from "../../../assets/logo/logoDark_s.png";

function Navigation() {
    const { user } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="sm">
            <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
            <NavLink to="/" exact>
                <img alt="" src={NavLogo} width="120" height="80" className="second-brand" />
            </NavLink>
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavLink to="/" exact>
                    <Navbar.Brand> <img alt="Bad Pony logo" src={NavLogo} width="120" height="80"
                        className="d-inline-block align-top" />
                    </Navbar.Brand>
                </NavLink>
            <Nav className="navbar-nav ml-auto theNavlinks">
            <NavLink id="nav-link" to="/" exact>
                Home
            </NavLink>
            <NavLink id="nav-link" to="/accomodations" exact>
                Accomodations
            </NavLink>
            <NavLink id="nav-link" to="/contact" exact>
                Contact
            </NavLink>

            {user ? (
                <>
                    <NavLink id="nav-link" to="/admin">Admin Page</NavLink>
                    <LogOut />
                </>
            ) : (
                    <NavLink id="nav-link" to="/register">Register</NavLink>
                )}
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Navigation;