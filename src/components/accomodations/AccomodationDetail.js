import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Image, Button, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import Maps from "./maps/Maps";
import { Link } from "react-router-dom";


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
        return <Spinner animation="grow" type="warning" className="spinner" />;
    }

    return (
        <div className="main-container main-container--dark-pink main-container__accomodation-detail">
            
            <Container>
                <div className="basic-btn basic-btn--dark">
                    <Link to={"/accomodations"}>back</Link>
                </div>
                <div className="accomodation-detail">
                    <Row className="justify-content-md-center">
                        <Col className="col-md-12">
                            <h1 className="accomodation-detail__header">{detail.name}</h1>
                            
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Image fluid className="accomodation-detail__image" src={detail.image} />
                            
                        </Col>
                        <Col>
                            <h4 className="accomodation-detail__header accomodation-detail__header--sub">Description</h4>
                        <p className="accomodation-detail__description">{detail.description}</p>
                            <div className="accomodation-detail__details accomodation-detail__details--email">
                                <u><p>Email:</p></u>
                                <p>
                                   {detail.email}
                                </p>
                            </div>
                            <h4 className="accomodation-detail__header accomodation-detail__header--sub">Details</h4>
                            <Row className="justify-content-md-center">
                            <Col lg={6} md={6} sm={6} xs={12}>
                                    <div className="accomodation-detail__details accomodation-detail__details--guests">
                                <p>
                                    Max Guests: {detail.maxGuests}
                                </p>
                            </div>
                                    <div className="accomodation-detail__details accomodation-detail__details--catering">
                                <p>
                                            Self Catering: <u> {detail.selfCatering ? 'Yes' : 'No'}</u> 
                                </p>
                            </div>
                                    <div className="accomodation-detail__details accomodation-detail__details--price">
                                <p>
                                    Price: {detail.price} $*
                                </p>
                            </div>
                                    <div className="accomodation-detail__details accomodation-detail__details--email">
                                        <p>*per night</p>
                                    </div>
                                    

                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                            <div className="accomodation-detail__map">
                                <Maps latitude={detail.lat} longitude={detail.lng} />
                            </div>
                            </Col>
                        </Row>


                        </Col>

                    </Row>
                    <Row>
                        <Col className="col-md-12">


                            <div className="basic-btn basic-btn--dark accomodation-detail__btn">
                                <Link to={`/establishments/inquiry/${detail.id}`}>Send
                            Enquiry</Link>
                            </div>
                            
                        
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>

        
    );
}

export default AccomodationDetail;