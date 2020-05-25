import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { BASE_URL, headers } from "../../../constants/api";

function InquiriesList() {
    const [enquiries, setEnquiries] = useState([]);

    const url = BASE_URL + "enquiries";

    const options = { headers };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setEnquiries(json);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="grow" variant="light" className="spinner" />;
    }

        return (
            <>
            <h1>Enquiries</h1>
            <ul>
                    {enquiries.map((enquiry) => {
                    return (
                        <li key={enquiry.id}>
                            <NavLink to={`/admin/enquiries/${enquiry.id}`}>{enquiry.name} - {enquiry.establishment}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
        );
    }

export default InquiriesList;