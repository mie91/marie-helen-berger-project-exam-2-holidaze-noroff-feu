import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Row, Col, Spinner, Image, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



function AccomodationDetail() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    const url = BASE_URL + "establishments/" + id;
    const options = { headers };
    const { register, handleSubmit, control } = useForm();
    
    
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
        

        const url = BASE_URL + "enquiries";

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        fetch(url, options)
            .then((r) => r.json())
            .then((j) => console.log(j));

           console.log("data", data);
           console.log (startDate);

        }

        

    return (
        <Container>
            <h1>{detail.name} - Enquiry</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    
                    <Form.Control disabled hidden name="establishmentId" defaultValue={detail.id} ref={register}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" placeholder="Enter Your full name" ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" placeholder="Enter an email address" ref={register}/>
                </Form.Group>

                
                    <Form.Label>Select days</Form.Label>
                <Form.Group> 
                    <Controller
                        as={DatePicker}
                        control={control}
                        valueName="selected" 
                        onChange={([selected]) => selected}
                        name="checkIn"
                        className="form-control"
                        placeholderText="Select check-in date"
                        isClearable
                        
                        dateFormat="MMMM d yyyy"
                    />
                    <Controller
                        as={DatePicker}
                        control={control}
                        valueName="selected"
                        onChange={([selected]) => selected}
                        name="checkOut"
                        className="form-control"
                        placeholderText="Select check-out date"
                        isClearable
                        
                        dateFormat="MMMM d yyyy"
                    />
                        
                        
                </Form.Group>


                <Button type="submit">Send</Button>
                </Form>
                
            
        </Container>   
    )
}

export default AccomodationDetail;