import React from "react";
import { Link } from "react-router-dom";
import { Button, Image, Col } from "react-bootstrap";


function AccomodationItem({ id, name, image, price, description }) {
    return ( 
        <Col lg={4} md={6} sm={12}>
            <div className="accomodation-card">
                <h4 className="accomodation-card__header">{name}</h4>

                <Image fluid className="accomodation-card__image" src={image}></Image>

                <p className="accomodation-card__description">{description}</p>
                <div className="accomodation-card__price">From: {price} $</div>

                <Link className="accomodation-card__btn" to={"accomodations/" + id} >
                View
                </Link>
            </div>
        </Col>
    );
}

export default AccomodationItem;