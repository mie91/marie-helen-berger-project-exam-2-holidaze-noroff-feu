import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h1>Admin Dashboard</h1>
            <ul>
                <li>
                    <NavLink to="/admin/establishments">See Establishments</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/establishments/add">Add Establishment</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/enquiries">See Enquiries</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/contacts">See messages</NavLink>
                </li>
            </ul>
        </>
    );
}

export default Dashboard;
