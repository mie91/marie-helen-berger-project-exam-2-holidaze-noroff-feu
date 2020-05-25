import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { BASE_URL, headers, PATCH } from "../../../constants/api";
import DeleteEnquiry from "./DeleteEnquiry";

function AddEstablishment() {
    const defaultState = {
        name: "",
        email: "",
    };

    const [enquiry, setEnquiries] = useState(defaultState);

    let { id } = useParams();

    const options = { headers };
    const fetchUrl = BASE_URL + "enquiries/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setEnquiries(json))
            .catch((error) => console.log(error));
    }, []);



    return (
        <>
            <p>Establishment: {enquiry.name}</p>
            <p>Establishment: {enquiry.email}</p>
            <DeleteEnquiry id={id} />
        </>
    );
}

export default AddEstablishment;
