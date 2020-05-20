import React, { useState } from "react";
import {Container, Col, Row, Form, Button} from "react-bootstrap";
import BackToTop from "../layout/other/BackToTop";
import MainHeader from "../layout/headers/MainHeader";
import SubHeader from "../layout/headers/SubHeader";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";


const schema = yup.object().shape({

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email address is required")

});

function Home() {

    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
        setValidated(true);
    }

    return (
        <>
            <div className="header-image header-image--home">
                <div className="header-image__text-box header-image__text-box--dark">
                    <MainHeader title="Find your perfect place to stay in Bergen"/>

                    <div className="header-image__btn header-image__btn--dark" ><Link to="/accomodations"> Explore</Link></div>
                </div>
            </div>
            <div className="main-container main-container--dark-pink">
            <Container>
                <Row>
                    <Col className="col-sm-6">
                        <div className="text-content text-content--light">
                            <MainHeader title="Experience Bergen"/>
                            <SubHeader title="Gateway to the Fjords"/>
                            <p>Est nulla non do magna et consectetur elit aliquip eu aliqua reprehenderit tempor. Pariatur ullamco incididunt sunt sit ipsum velit ex ut ipsum irure. Mollit officia cillum Lorem exercitation ad in non. Commodo reprehenderit consectetur laborum nisi eiusmod esse minim quis laborum exercitation tempor dolor reprehenderit.
                        </p>
                        </div>
                    </Col>
                    <Col className="col-sm-6">
                        <div className="text-content text-content--light">
                            <MainHeader title="Let us help you"/>
                            <SubHeader title="Finding the perfect place"/>
                            <p>Do aliqua sit ex consequat culpa deserunt id. In excepteur aute nisi cupidatat esse aliquip tempor ad cillum consectetur velit do. Occaecat nulla quis elit enim pariatur amet esse ad consectetur. Laborum consequat laborum tempor qui et est proident ex. Amet cillum voluptate est pariatur et excepteur enim labore irure. Sit amet consectetur proident reprehenderit adipisicing. Commodo ut fugiat nisi veniam incididunt voluptate deserunt ea incididunt qui excepteur voluptate quis.
                        </p>
                        </div>
                    </Col>
                </Row>
                    <Row className="justify-content-md-center">
                    <Col className="col-sm-12">
                        <div className="newsletter-home">
                            <MainHeader title="Sign up for our newsletter"/>
                            <SubHeader title="Get the latest news, and unique deals!"/>
                            
                                <Form className="newsletter-home__form" inline onSubmit={handleSubmit(onSubmit)}>
                                        
                                    <Form.Control className="newsletter-home__input" name="email" placeholder="Enter your E-mail" ref={register} />

                                    <Button className="newsletter-home__btn" type="submit">Sign up!</Button>
   
                                    </Form>
                                    {errors.email && <div className="newsletter-home__error">{errors.email.message}</div>}

                                    {validated && <div className="newsletter-home__validated">You are now signed up successfully!</div>}
                
                        </div>
                    </Col>
                </Row>
            </Container>
            
            </div>
        <BackToTop/>
        </>
    );
}

export default Home;
