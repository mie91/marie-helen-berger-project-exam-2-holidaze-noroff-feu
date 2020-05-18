import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";

function Establishments() {
    const [establishments, setEstablishments] = useState([]);

    const url = BASE_URL + "establishments";

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setEstablishments(json);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <h1>Establishments</h1>
            <ul>
                {establishments.map((establishment) => {
                    return (
                        <li key={establishment.id}>
                            <NavLink to={`/admin/establishments/edit/${establishment.id}`}>{establishment.name}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Establishments;
