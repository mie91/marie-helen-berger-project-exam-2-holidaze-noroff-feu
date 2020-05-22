import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Spinner, Image, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";



function AccomodationDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    const url = BASE_URL + "establishments/" + id;
    const options = { headers };
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(url, options )
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                setDetail(json);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

     async function onSubmit(data) {
        console.log("data", data);

        }

    return (
        <Container>
            <h1>{detail.name}</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                     <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control disabled name="name" defaultValue={detail.name} placeholder="Enter an name" ref={register}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" defaultValue={detail.email} placeholder="Enter an email address" ref={register}/>
                </Form.Group>
                <Button type="submit">Update</Button>
                </Form>
                
            
        </Container>   
    )
}

export default AccomodationDetail;