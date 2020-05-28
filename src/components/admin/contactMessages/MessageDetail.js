import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import DeleteMessage from "./DeleteMessage";

function MessageDetail() {
    const defaultState = {
        name: "",
        email: "",
    };

    const [contacts, setContacts] = useState(defaultState);

    let { id } = useParams();

    const options = { headers };
    const fetchUrl = BASE_URL + "contacts/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setContacts (json))
            .catch((error) => console.log(error));
    }, []);



    return (
        <>
            <p>Name: {contacts.name}</p>
            <p>Email: {contacts.email}</p>
            <p>Message: {contacts.message}</p>
            <p>Sent: {contacts.createdAt}</p>
            <DeleteMessage id={id} />
        </>
    );
}

export default MessageDetail;
