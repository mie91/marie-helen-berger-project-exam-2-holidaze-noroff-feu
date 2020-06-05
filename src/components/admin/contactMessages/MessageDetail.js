import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import DeleteMessage from "./DeleteMessage";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Link } from "react-router-dom";
import Moment from "react-moment";

function MessageDetail() {
    const defaultState = {
        name: "",
        email: "",
    };

    const [contacts, setContacts] = useState(defaultState);

    let { id } = useParams();

    const options = { headers };
    const fetchUrl = BASE_URL + "contacts/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setContacts (json))
            .catch((error) => console.log(error));
    }, []);



    return (
      <>
        <div className="main-container main-container--dark-purple main-container main-container--admin">
          <Container>
            <div className="basic-btn basic-btn--dark">
              <Link to={"/admin/contacts"}>back</Link>
            </div>
            <div className="admin-box admin-box--enquiry-detail">
              <Row className="justify-content-md-center">
                <Col lg={3} md={10} sm={12}>
                  <div className="admin-box__image">
                    <Image src={Logo} fluid></Image>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col lg={10} md={10} sm={12}>
                  <h1 className="admin-box__header">Message</h1>
                  <h3 className="admin-box__subheader">From contact form</h3>
                </Col>
              </Row>
              <div className="admin-box__message-wrap">
                <Row className="justify-content-md-center">
                  <Col lg={10} md={10} sm={12}>
                    <div className="admin-box__message-content">
                      <p className="admin-box__message-detail">Name:</p>
                      <p className="admin-box__message-detail admin-box__message-detail--pink">
                        {contacts.name}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col lg={5} md={10} sm={12}>
                    <div className="admin-box__message-content">
                      <p className="admin-box__message-detail">Email:</p>
                      <p className="admin-box__message-detail admin-box__message-detail--pink">
                        {contacts.email}
                      </p>
                    </div>
                  </Col>
                  <Col lg={5} md={10} sm={12}>
                    <div className="admin-box__message-content">
                      <p className="admin-box__message-detail">Sent:</p>
                      <p className="admin-box__message-detail admin-box__message-detail--pink">
                        <Moment format="DD MMMM YYYY">
                          {contacts.createdAt}
                        </Moment>
                        / <Moment fromNow>{contacts.createdAt}</Moment>
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col lg={10} md={10} sm={12}>
                    <div className="admin-box__message-content admin-box__message-content--textbox">
                      <p className="admin-box__message-detail ">Message:</p>
                      <p className="admin-box__message-textbox-content">
                        {contacts.message}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row className="justify-content-md-center">
                <Col lg={10} md={10} sm={12}>
                  <DeleteMessage id={id} />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
}

export default MessageDetail;


/* <>
            <p>Name: {contacts.name}</p>
            <p>Email: {contacts.email}</p>
            <p>Message: {contacts.message}</p>
            <p>Sent: {contacts.createdAt}</p>
            <DeleteMessage id={id} />
        </> */