import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import Moment from "react-moment";
import BackToTop from "../../layout/other/BackToTop";
import { BsPeopleCircle } from "react-icons/bs";

function Messages() {
  const [contact, setContact] = useState([]);

  const url = BASE_URL + "contacts";

  const options = { headers };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setContact(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedMessages = contact.sort((a, b) => b.createdAt - a.createdAt);

  console.log(sortedMessages);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="grow" className="spinner " />;
      </div>
    );
  }

  return (
    <>
      <div className="main-container main-container--dark-purple main-container main-container--admin">
        <Container>
          <div className="basic-btn basic-btn--dark">
            <Link to={"/admin"}>Dashboard</Link>
          </div>
          <div className="admin-box admin-box--message-list">
            <Row className="justify-content-md-center">
              <Col lg={3} md={10} sm={12}>
                <div className="admin-box__image">
                  <Image src={Logo} fluid></Image>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={6} md={10} sm={12}>
                <h1 className="admin-box__header">Messages</h1>
                <h4 className="admin-box__sub-header">
                  Received from contact form
                </h4>
                <div className="admin-box__info-text">
                  <p>
                    Ex dolore excepteur sint consequat proident culpa do id.
                    Labore labore occaecat commodo et.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={8} md={10} sm={12}>
                <div className="admin-box__card-container admin-box__card-container--message-list">
                  {contact.map((contact) => {
                    return (
                      <Link
                        className="admin-box__card-wrapper"
                        to={`/admin/contacts/${contact.id}`}
                      >
                        {" "}
                        <div key={contact.id} className="admin-box__card">
                          <Row className="justify-content-md-center">
                            <Col lg={2} md={3} sm={3} xs={3}>
                              <div className="admin-box__card-icon admin-box__card-icon--person">
                                <BsPeopleCircle size={55} />
                              </div>
                            </Col>
                            <Col lg={10} md={9} sm={9} xs={9}>
                              <h4 className="admin-box__card-header">
                                {contact.name}
                              </h4>
                              <p className="admin-box__card-subheader">
                                <Moment format="DD MMMM YYYY">
                                  {contact.createdAt}
                                </Moment>
                              </p>
                              <p className="admin-box__card-subheader--italic">
                                <Moment fromNow>{contact.createdAt}</Moment>
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <BackToTop />
    </>
  );
}

export default Messages;
