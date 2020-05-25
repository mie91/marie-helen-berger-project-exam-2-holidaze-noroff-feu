import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
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
            <p>Name: {enquiry.name}</p>
            <p>Email: {enquiry.email}</p>
            <p>Check In: {enquiry.checkIn}</p>
            <p>Check Out: {enquiry.checkOut}</p>
            <p>Sent: {enquiry.createdAt}</p>
            <DeleteEnquiry id={id} />
        </>
    );
}

export default AddEstablishment;
