import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import BackToTop from "../../layout/other/BackToTop";

function Establishments() {
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = BASE_URL + "establishments";

  const options = { headers };

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
    return (
      <div className="spinner-container">
        <Spinner animation="grow" className="spinner " />;
      </div>
    );
  }

  return (
    <>
      <div className="main-container main-container main-container--admin">
        <Container>
          <div className="basic-btn basic-btn--dark">
            <Link to={"/admin"}>Dashboard</Link>
          </div>
          <div className="admin-box admin-box--enquiry-list">
            <Row className="justify-content-md-center">
              <Col lg={3} md={10} sm={12}>
                <div className="admin-box__image">
                  <Image src={Logo} fluid></Image>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={6} md={10} sm={12}>
                < h1 className = "admin-box__header admin-box__header--breakable" > Establishments < /h1>

                <div className="admin-box__info-text">
                  <p>
                    Ex dolore excepteur sint consequat proident culpa do id.
                    Labore labore occaecat commodo et.
                  </p>
                </div>
                <div className="admin-box__content-list">
                  <ul>
                    <li className="admin-box__content-list-item admin-box__content-item--establishments">
                      <Link to="/admin/establishments/add">
                        Add Establishment
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={8} md={10} sm={12}>
                <div className="admin-box__card-container admin-box__card-container--enquiries">
                  {establishments.map((establishment) => {
                    return (
                      <Link
                        className="admin-box__card-wrapper"
                        to={`/admin/establishments/edit/${establishment.id}`}
                      >
                        {" "}
                        <div key={establishment.id} className="admin-box__card">
                          <Row className="justify-content-md-center">
                            <Col lg={2} md={9} sm={9} xs={9}>
                              <Image fluid src={establishment.image}></Image>
                            </Col>
                            <Col lg={10} md={9} sm={9} xs={9}>
                              <h4 className="admin-box__card-header">
                                {establishment.name}
                              </h4>
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

export default Establishments;
