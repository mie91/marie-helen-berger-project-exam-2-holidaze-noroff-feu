import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import DeleteEnquiry from "./DeleteEnquiry";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Link } from "react-router-dom";
import Moment from "react-moment";

function EnquiryDetail() {
  const defaultState = {
    name: "",
    email: "",
  };

  const [enquiry, setEnquiries] = useState(defaultState);

  let { id } = useParams();

  const options = { headers };
  const fetchUrl = BASE_URL + "enquiries/" + id;

  useEffect(() => {
    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setEnquiries(json))
      .catch((error) => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="main-container main-container--dark-purple main-container main-container--admin">
        <Container>
          <div className="basic-btn basic-btn--dark">
            <Link to={"/admin/enquiries"}>back</Link>
          </div>
          <div className="admin-box admin-box--enquiry-detail">
            <Row className="justify-content-md-center">
              <Col lg={3} md={10} sm={12}>
                <div className="admin-box__image">
                  <Image src={Logo} fluid alt="The Holidaze logo"/>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={10} md={10} sm={12}>
                <h1 className="admin-box__header">Enquiry</h1>
              </Col>
            </Row>
            <div className="admin-box__message-wrap">
              <Row className="justify-content-md-center">
                <Col lg={10} md={10} sm={12}>
                  <div className="admin-box__message-content">
                    <p className="admin-box__message-detail">Email:</p>
                    <p className="admin-box__message-detail admin-box__message-detail--pink">
                      {enquiry.email}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col lg={5} md={10} sm={12}>
                  <div className="admin-box__message-content">
                    <p className="admin-box__message-detail">Name:</p>
                    <p className="admin-box__message-detail admin-box__message-detail--pink">
                      {enquiry.name}
                    </p>
                  </div>
                </Col>
                <Col lg={5} md={10} sm={12}>
                  <div className="admin-box__message-content">
                    <p className="admin-box__message-detail">Sent:</p>
                    <p className="admin-box__message-detail admin-box__message-detail--pink">
                      <Moment fromNow>{enquiry.createdAt}</Moment>
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                <Col lg={5} md={10} sm={12}>
                  <div className="admin-box__message-content">
                    <p className="admin-box__message-detail">Enquiry Id:</p>
                    <p className="admin-box__message-detail admin-box__message-detail--pink">
                      {enquiry.id}
                    </p>
                  </div>
                </Col>
                <Col lg={5} md={10} sm={12}>
                  <div className="admin-box__message-content">
                    <p className="admin-box__message-detail">
                      Establishment Id:
                    </p>
                    <p className="admin-box__message-detail admin-box__message-detail--pink">
                      {enquiry.establishmentId}
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                <Col lg={5} md={5} sm={6}>
                  <div className="admin-box__message-content admin-box__message-content--check-in">
                    <p className="admin-box__message-detail">Check In:</p>
                    <p className="admin-box__message-detail admin-box__message-detail--pink">
                      <Moment format="DD MMMM YYYY">{enquiry.checkIn}</Moment>
                    </p>
                  </div>
                </Col>
                <Col lg={5} md={5} sm={6}>
                  <div className="admin-box__message-content admin-box__message-content--check-out">
                    <p className="admin-box__message-detail">Check-Out:</p>
                    <p className="admin-box__message-detail admin-box__message-detail--pink">
                      <Moment format="DD MMMM YYYY">{enquiry.checkOut}</Moment>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className="justify-content-md-center">
              <Col lg={10} md={10} sm={12}>
                <DeleteEnquiry id={id} />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default EnquiryDetail;
