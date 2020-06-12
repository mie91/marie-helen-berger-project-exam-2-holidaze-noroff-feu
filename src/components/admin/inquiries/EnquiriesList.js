import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import Moment from "react-moment";
import BackToTop from "../../layout/other/BackToTop";
import { BsPeopleCircle } from "react-icons/bs";

function EnquiriesList() {
  const [enquiries, setEnquiries] = useState([]);

  const url = BASE_URL + "enquiries";

  const options = { headers };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setEnquiries(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div className="admin-box admin-box--enquiry-list">
            <Row className="justify-content-md-center">
              <Col lg={3} md={10} sm={12}>
                <div className="admin-box__image">
                  <Image src={Logo} fluid alt="The Holidaze logo" />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={6} md={10} sm={12}>
                <h1 className="admin-box__header">Enquiries</h1>
                <h4 className="admin-box__sub-header">Received enquiries</h4>
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
                <div className="admin-box__card-container admin-box__card-container--enquiries">
                  {enquiries.map((enquiry) => {
                    return (
                      <Link
                        key={enquiry.id}
                        className="admin-box__card-wrapper"
                        to={`/admin/enquiries/${enquiry.id}`}
                      >
                        {" "}
                        <div className="admin-box__card">
                          <Row className="justify-content-md-center">
                            <Col lg={2} md={3} sm={3} xs={3}>
                              <div className="admin-box__card-icon admin-box__card-icon--person">
                                <BsPeopleCircle
                                  size={55}
                                  aria-label="Person icon"
                                />
                              </div>
                            </Col>
                            <Col lg={10} md={9} sm={9} xs={9}>
                              <h4 className="admin-box__card-header">
                                {enquiry.name}
                              </h4>
                              <p className="admin-box__card-subheader">
                                <Moment format="DD MMMM YYYY">
                                  {enquiry.createdAt}
                                </Moment>
                              </p>
                              <p className="admin-box__card-subheader--italic">
                                <Moment fromNow>{enquiry.createdAt}</Moment>
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

export default EnquiriesList;
