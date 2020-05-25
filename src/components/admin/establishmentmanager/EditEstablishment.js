import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { BASE_URL, headers, PATCH } from "../../../constants/api";
import DeleteEstablishment from "./DeleteEstablishment";

function AddEstablishment() {
    const defaultState = {
        name: "",
        email: "",
    };

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [establishment, setEstablishment] = useState(defaultState);

    let { id } = useParams();

    const options = { headers };
    const fetchUrl = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setEstablishment(json))
            .catch((error) => console.log(error));
    }, []);

    async function onSubmit(data) {
        console.log("data", data);

        const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
        await fetch(fetchUrl, updateOptions);
        history.push("/admin/establishments");
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Edit Hotel</h1>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" defaultValue={establishment.name} placeholder="Enter a name for the establishment" ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" defaultValue={establishment.email} placeholder="Enter an email address" ref={register} />
                </Form.Group>

                <Button type="submit">Update</Button>
            </Form>
            <DeleteEstablishment id={id} />
        </>
    );
}

export default AddEstablishment;
