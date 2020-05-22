import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";


function AccomodationItem({ id, name, image, price, description }) {
    return ( 
            <div className="accomodation-card">
                <h3 className="accomodation-card__header">{name}</h3>

                <Image className="accomodation-card__image" src={image}></Image>

                <p className="accomodation-card__description">{description}</p>
                <div className="accomodation-card__price">Price:{price} $</div>

                <Link to={"accomodations/" + id}>
                    <Button variant="secondary" block>View</Button>
                </Link>
            </div>
    );
}

export default AccomodationItem;