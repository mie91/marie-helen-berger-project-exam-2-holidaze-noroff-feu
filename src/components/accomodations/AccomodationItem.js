import React from "react";
import { Link } from "react-router-dom";
import { Image, Col } from "react-bootstrap";

function AccomodationItem({ id, name, image, price, description, maxGuests }) {
  return (
    <Col lg={4} md={6} sm={12}>
      <Link className="accomodation-card__link-wrap" to={"accomodations/" + id}>
        <div className="accomodation-card">
          <h4 className="accomodation-card__header">{name}</h4>

          <Image fluid className="accomodation-card__image" src={image}></Image>
          <p className="accomodation-card__description">{description}</p>
          <div className="accomodation-card__detail accomodation-card__detail--orange">
            Max Guests: {maxGuests}{" "}
          </div>
          <div className="accomodation-card__detail">From: {price} $</div>
        </div>
      </Link>
    </Col>
  );
}

export default AccomodationItem;
