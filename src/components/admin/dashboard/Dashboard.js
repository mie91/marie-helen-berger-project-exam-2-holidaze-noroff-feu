import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h1>Establishment Manager</h1>
            <ul>
                <li>
                    <NavLink to="/admin/establishments">List Establishments</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/establishments/add">Add Establishment</NavLink>
                </li>
            </ul>
        </>
    );
}

export default Dashboard;
