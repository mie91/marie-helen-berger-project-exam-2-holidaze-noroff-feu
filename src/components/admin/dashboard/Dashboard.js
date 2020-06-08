import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FiMail, FiPlusCircle, FiHome} from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

function Dashboard() {
    
  return (
    <>
      <div className="main-container main-container--dark-purple main-container main-container--admin">
        <Container>
          <div className="admin-box admin-box--dashboard">
            <Row className="justify-content-md-center">
              <Col lg={12} md={10} sm={12}>
                <div className="admin-box__image">
                  <Image src={Logo} fluid alt="Holidaze Logo"/>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={6} md={10} sm={12}>
                <h1 className="admin-box__header">Dashboard</h1>
                <h4 className="admin-box__sub-header">
                  What do you want to do?
                </h4>
                <div className="admin-box__info-text">
                  <p>
                    Ex dolore excepteur sint consequat proident culpa do id.
                    Labore labore occaecat commodo et laboris amet incididunt.
                  </p>
                </div>
                <div className="admin-box__content-list">
                  <ul>
                    <li className="admin-box__content-list-item admin-box__content-item--enquiries">
                      <Link to="/admin/enquiries">
                        <BsQuestionCircle aria-label="Questionmark Icon" size={25} /> Enquiries
                      </Link>
                    </li>
                    <li className="admin-box__content-list-item admin-box__content-item--messages">
                      <Link to="/admin/contacts">
                        <FiMail aria-label="Letter/Mail Icon" size={25} /> Messages
                      </Link>
                    </li>
                    <li className="admin-box__content-list-item admin-box__content-item--establishments">
                      <Link to="/admin/establishments">
                        <FiHome aria-label="House Icon" size={25} /> Establishments
                      </Link>
                    </li>
                    <li className="admin-box__content-list-item admin-box__content-item--establishments">
                      <Link to="/admin/establishments/add">
                        <FiPlusCircle aria-label="Plus Icon" size={25} /> Add Establishment
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
