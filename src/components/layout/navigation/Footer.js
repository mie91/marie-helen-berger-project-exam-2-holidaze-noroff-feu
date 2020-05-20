import React from "react";
import {Container, Row, Col, Form, Image} from "react-bootstrap";
import FooterLogo from "../../../assets/logo/logoLight_m.png";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col className="col-sm-4">
                        <div className="footer-newsletter">

                        </div>
                    </Col>
                    <Col className="col-sm-4">
                        <div className="footer-socialmedia">
                            <div className="footer-socialmedia__icons"></div>
                            
                        </div>
                    </Col>
                    <Col className="col-sm-4">
                        <div className="footer-contact">

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-sm-12">
                        <div className="footer-bottom">
                            <Image className="footer-bottom__logo" fluid src={FooterLogo} alt="Holidaze Logo" />
                            <p>Copyright © 2020 Marie Helen Berger</p>
                        </div>
                        
                    </Col>
                </Row>
                
            </Container>
            
        </footer>

    );
}

export default Footer;








