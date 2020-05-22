import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";



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
                <h1>Hello {detail.name}</h1>
                
            
        </Container>   
    );
}

export default AccomodationDetail;