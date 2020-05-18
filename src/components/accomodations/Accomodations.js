import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import {Container, Row, Col, Button, Spinner, Card} from "react-bootstrap";

function Accomodations() {
    const [establishments, setEstablishments] = useState([]);
    const url = BASE_URL + "establishments";
    const options = { headers };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setEstablishments(json);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
		return <Spinner animation="grow" variant="light"className="spinner"/>;
	}

    return (
        <>
            <h1>Accomodations</h1>
            <ul>
                {establishments.map((establishment) => {
                    return (
                        <>
                        <Container>
                            <Row>
                                <Col className="col-sm-6"  key={establishment.id}>
                                <Card>
                                    <h1>{establishment.name}</h1>

                                </Card>
                                </Col>
                            </Row>
                        </Container>
                        </>
                    );
                })}
            </ul>
        </>
    );
}

export default Accomodations;
