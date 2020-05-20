import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import BackToTop from "../layout/other/BackToTop";
import MainHeader from "../layout/headers/MainHeader";
import SubHeader from "../layout/headers/SubHeader";
import { Link } from "react-router-dom";


function Home() {
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
                            <SubHeader title="Gateway of the Fjords"/>
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
            </Container>
            
            </div>
        <BackToTop/>
        </>
    );
}

export default Home;
