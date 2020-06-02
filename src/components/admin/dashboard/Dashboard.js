import React from "react";
import { Link} from "react-router-dom";
import Logo from "../../../assets/logo/logoLight_m.png"
import { Container, Row, Col, Spinner, Image, Button, Form } from "react-bootstrap";

function Dashboard() {
    return (
        <>
            <div className="main-container main-container--white-purple main-container main-container--admin">
                <Container>
                    
                    <div className="admin-box admin-box--dashboard">
                        <Row className="justify-content-md-center">
                            <Col lg={3} md={10} sm={12}>
                        <div className="admin-box__image">
                            <Image src={Logo} fluid></Image>
                        </div>
                        </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col lg={6} md={10} sm={12}>
                            
                            <h1 className="admin-box__header">Admin Dashboard</h1>
                            <h4 className="admin-box__sub-header">What do you want to do?</h4>
                            <div className="admin-box__info-text">
                                <p>Ex dolore excepteur sint consequat proident culpa do id. Labore labore occaecat commodo et laboris amet incididunt. Aute aliqua anim et Lorem occaecat non enim anim tempor velit.</p>
                            </div>
                            <div className="admin-box__content-list">
                                <ul>
                                        <li className="admin-box__content-list-item admin-box__content-item--enquiries">
                                            <Link to="/admin/enquiries">See Enquiries</Link>
                                        </li>
                                        <li className="admin-box__content-list-item admin-box__content-item--messages">
                                            <Link to="/admin/contacts">See messages</Link>
                                        </li>
                                        <li className="admin-box__content-list-item admin-box__content-item--establishments">
                                            <Link to="/admin/establishments">See Establishments</Link>
                                        </li>
                                        <li className="admin-box__content-list-item admin-box__content-item--establishments">
                                            <Link to="/admin/establishments/add">Add Establishment</Link>
                                        </li>
                                        
                                </ul>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Dashboard;


/*<h1>Admin Dashboard</h1>
            <ul>
                
            </ul> */