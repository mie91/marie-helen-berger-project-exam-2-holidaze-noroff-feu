import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import Maps from "./maps/Maps";


function AccomodationDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    const url = BASE_URL + "establishments/" + id;
    const options = { headers };

    useEffect(() => {
        fetch(url, options )
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                setDetail(json);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
        <Container>
                <Maps/>
                <div className="accomodation-detail">
                <Row>
                    <Col className="col-md-6">
                        <h1 className="accomodation-detail__header">{detail.name}</h1>
                        <p className="accomodation-detail__description">{detail.description}</p>
                        <div className="accomodation-detail__details">
                            <p>
                                Max Guests: {detail.maxGuests}
                            </p>
                        </div>
                        <div className="accomodation-detail__details">
                            <p>
                                Self Catering: {detail.selfCatering}
                            </p>
                        </div>
                        <div className="accomodation-detail__details">
                            <p>
                                Price: {detail.price}
                            </p>
                        </div>

                    </Col>
                    <Col className="col-md-6">
                        <Image fluid className="accomodation-detail__image"src={detail.image} />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-12">
                        <div className="accomodation-detail__details">
                            <p>
                                email: {detail.email}
                            </p>
                        </div>
                        <Button>Send Inquiry</Button>

                    </Col>
                </Row>
                </div>
                
            
        </Container>   
    );
}

export default AccomodationDetail;