import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";

function AccomodationDetail() {
   const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = BASE_URL + "accomodations/" + id;
    const options = { headers };

    useEffect(() => {
        fetch(url, options )
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }


    return null
    /*
    return (
        <Container>
            <Row>
                <Col>
                    <h1>{detail.name}</h1>
                    <p>{detail.description}</p>
                </Col>
                <Col>
                    <Image src={detail.image}/>
                </Col>
            </Row>
        </Container>
        
        
    );*/
}

export default AccomodationDetail;