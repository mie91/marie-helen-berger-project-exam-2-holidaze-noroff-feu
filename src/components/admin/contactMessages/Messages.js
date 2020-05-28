import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { BASE_URL, headers } from "../../../constants/api";

function Messages() {
    const [contact, setContact] = useState([]);

    const url = BASE_URL + "contacts";

    const options = { headers };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setContact(json);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className="spinner-container"><Spinner animation="grow" className="spinner "/>;</div>
    }

        return (
            <>
            <h1>Messages</h1>
            <ul>
                    {contact.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <NavLink to={`/admin/contacts/${contact.id}`}>{contact.name} - {contact.establishment}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
        );
    }

export default Messages;