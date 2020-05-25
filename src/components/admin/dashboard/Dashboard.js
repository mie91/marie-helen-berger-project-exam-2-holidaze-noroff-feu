import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h1>Establishment Manager</h1>
            <ul>
                <li>
                    <NavLink to="/admin/establishments">See Establishments</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/establishments/add">Add Establishment</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/establishments/inquiries/all">See Inquiries</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/messages/all">See messages</NavLink>
                </li>
            </ul>
        </>
    );
}

export default Dashboard;
