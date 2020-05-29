import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Logo from "../../../assets/logo/logoLight_m.png"
import { Container, Row, Col, Spinner, Image, Button, Form } from "react-bootstrap";

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
        return <div className="spinner-container"><Spinner animation="grow" className="spinner "/>;</div>
    }

        return (
         <>
             <div className="main-container main-container--white-purple main-container main-container--admin">
                 <div>hello</div>
                 <Container>

                     <div className="admin-box admin-box--enquiry-list">
                         <Row className="justify-content-md-center">
                             <Col lg={3} md={10} sm={12}>
                             <div className="admin-box__image">
                                 <Image src={Logo} fluid></Image>
                             </div>
                             </Col>
                         </Row>
                         <Row className="justify-content-md-center">
                             <Col lg={6} md={10} sm={12}>

                             <h1 className="admin-box__header">Enquiries</h1>
                             <h4 className="admin-box__sub-header">Received enquiries</h4>
                             <div className="admin-box__info-text">
                                 <p>Ex dolore excepteur sint consequat proident culpa do id. Labore labore occaecat
                                     commodo et.</p>
                             </div>
                             </Col>
                             </Row>
                            <Row className="justify-content-md-center">
                                <Col lg={8} md={10} sm={12}>
                             <div className="admin-box__card-container admin-box__card-container--enquiries">

                                 {enquiries.map((enquiry) => {
                                 return (
                                 <div li key={enquiry.id} className="admin-box__card">
                                     <p className="admin-box__card-subheader">Sent: {enquiry.createdAt}</p>
                                     <h3 className="admin-box__card-header">From: {enquiry.name}</h3>
                                     <Link className="admin-box__card-button" to={`/admin/enquiries/${enquiry.id}`}>Read </Link> 
                                </div> ); })} 

                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
     </>
        );
    }

export default InquiriesList;