import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";

function InquiriesList() {
    const [enquiries, setEnquiries] = useState([]);

    const url = BASE_URL + "enquiries";

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setEnquiries(json);
            })
            .catch((error) => console.log(error));
    }, []);

        return (
            <>
            <h1>enquiries</h1>
            <ul>
                    {enquiries.map((enquiry) => {
                    return (
                        <li key={enquiry.id}>
                            <NavLink to={`/admin/enquiries/${enquiry.id}`}>{enquiry.name}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
        );
    }

export default InquiriesList;