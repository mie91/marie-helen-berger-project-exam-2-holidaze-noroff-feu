import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import BackToTop from "../layout/other/BackToTop";
import MainHeader from "../layout/headers/MainHeader";
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <div className="headerImage headerImage--home">
                <div className="headerImage__textBox headerImage__textBox--dark">
                    <MainHeader title="Find your perfect place to stay in Bergen"/>

                    <div className="headerImage__btn headerImage__btn--dark" ><Link to="/accomodations"> Explore</Link></div>
                </div>
                
            </div>
        <BackToTop/>
        </>
    );
}

export default Home;
