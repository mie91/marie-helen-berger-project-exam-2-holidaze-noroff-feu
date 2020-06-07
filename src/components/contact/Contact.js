import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import ErrorMessage from "../layout/other/ErrorMessage";
import { Link } from "react-router-dom";


const schema = yup.object().shape({

    name: yup
        .string()
        .required("A name is required")
        .min(2, "The name is to short"),

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("A valid email is required"),

    message: yup
        .string()
        .required("Please enter your message")
        .min(10, "The message is to short")
});


function Contact () {
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema});
    const history = useHistory();

     async function onSubmit(data) {
        const url = BASE_URL + "contacts";
        const options = { headers, method: "POST", body: JSON.stringify(data) };

        fetch(url, options)
            .then((r) => r.json())
            .then((j) => console.log(j));
         setValidated(true);
         setTimeout(() => {
            history.push("/");
         }, 3000)
        console.log("data", data);
        
        }

    return (
        <div className="main-container main-container--dark-pink main-container--enquiry-form">
            <Container>
                <div className="basic-btn basic-btn--dark">
                    <Link to={"/"}>back</Link>
                </div>
                <div className="form-box">
                    <Row className="justify-content-md-center">
                        <Col lg={8} md={10} sm={12}>
                    
                    <h1 className="form-box__header">Contact</h1>
                    <h3 className="form-box__sub-header">HOLIDAZE</h3>
                    <div className="form-box__info-text">
                        <p>Sunt qui in excepteur dolore do cupidatat culpa. Culpa aliquip elit commodo commodo tempor ea nisi. </p>
                    </div>
                    </Col>
                    </Row>
                    
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="justify-content-md-center">
                            <Col lg={6} md={12} sm={12}>

                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col lg={4} md={6} sm={12}>
                            <Form.Group className="form-box__group">
                                <Form.Label className="form-box__label">Name</Form.Label>
                                <Form.Control className="form-box__field" name="name" placeholder="Enter Your full name" ref={register} />
                                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                            </Form.Group>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                            <Form.Group className="form-box__group">
                                <Form.Label className="form-box__label">Email</Form.Label>
                                <Form.Control className="form-box__field" name="email" placeholder="Enter an email address" ref={register} />
                                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col lg={8} md={6} sm={12}>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control className="form-box__field" as="textarea" rows="5" name="message"
                                        placeholder="Enter your message here" ref={register} />
                                    {errors.message && (<ErrorMessage>{errors.message.message}</ErrorMessage>)}
                                </Form.Group></Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col lg={6} md={6} sm={12}>
                                {validated && <div className="form-box__validation"><h4>Your enquiry has been sent successfully!</h4><i><p>You will be redirected.</p></i></div>}
                            </Col>
                        </Row>
                        
                        <Row className="justify-content-md-center">
                            <Col lg={3} md={6} sm={12}>
                                <div className="form-box__btn-container">
                                    <Button className="form-box__submit-btn" type="submit">Send</Button>
                                </div>
                        
                                
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Contact ;