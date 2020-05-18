import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import {Navbar, Nav} from "react-bootstrap";
import LogOut from "../../admin/login/LogOut";
import NavLogoText from "../../../assets/logo/textLogo_m.png";
import NavLogo from "../../../assets/logo/logoDark_m.png";

function Navigation() {
    const { user } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
            <NavLink to="/" exact>
                <img alt="" src={NavLogo} className="second-brand" />
            </NavLink>
            <Navbar.Collapse id="responsive-navbar-nav">

                <NavLink to="/" exact>
                    <Navbar.Brand> <img alt="Holidaze logo" src={NavLogo}
                    />
                    </Navbar.Brand>
                </NavLink>
                <Nav className="navbar-nav ml-auto container__navLinks">
                    <NavLink id="nav-link" to="/" exact>
                        Home
                    </NavLink>
                    <NavLink id="nav-link" to="/accomodations" exact>
                        Accomodations
                    </NavLink>
                    <NavLink id="nav-link" to="/contact" exact>
                        Contact Us
                    </NavLink>
                    </Nav>
                <Nav className="navbar-nav ml-auto flex-column container__navLinksAdmin">
                    {user ? (
                        <>
                            <NavLink id="nav-link__admin" to="/admin">Manage</NavLink>
                            <LogOut />
                            
                        </>
                    ) : (

                        <>
                            <NavLink id="nav-link__admin" to="/login">Login</NavLink>

                            <NavLink id="nav-link__admin" to="/register">Register</NavLink>

                            </>
                        )}    
                
     </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;