import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import FooterLogo from "../../../assets/logo/logoLight_m.png";
import FacebookIcon from "../../../assets/icons/white/social-006_facebook.png";
import TwitterIcon from "../../../assets/icons/white/social-003_twitter.png";
import InstagramIcon from "../../../assets/icons/white/social-038_instagram.png";
import Newsletter from "../other/Newsletter";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={4} md={4} sm={12}>
            <div className="footer-newsletter">
              <Newsletter mainheader="Join our newsletter!" />
            </div>
          </Col>
          <Col lg={4} md={4} sm={6}>
            <div className="footer-socialmedia">
              <h2 className="footer-socialmedia__header">Follow us on:</h2>
              <a target="blank" href="https://facebook.com">
                <Image
                  src={FacebookIcon}
                  className="footer-socialmedia__icons"
                />
              </a>
              <a target="blank" href="https://twitter.com">
                <Image
                  src={TwitterIcon}
                  className="footer-socialmedia__icons"
                />
              </a>
              <a target="blank" href="https://instagram.com">
                <Image
                  src={InstagramIcon}
                  className="footer-socialmedia__icons"
                />
              </a>
              <div className="footer-socialmedia__link">
                <Link to="/login">Admin Login</Link>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={6}>
            <div className="footer-contact">
              <h2 className="footer-contact__header">Find us here:</h2>
              <ul className="footer-contact__list">
                <li className="footer-contact__list-item">HOLIDAZE A/S</li>
                <li className="footer-contact__item">Torgalmenningen 123</li>
                <li className="footer-contact__list-item">5020 Bergen</li>
                <br></br>
                <li className="footer-contact__item">holidaze@mail.com</li>
                <li className="footer-contact__list-item">+47 12345678</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} sm={12}>
            <div className="footer-bottom">
              <Image
                className="footer-bottom__logo"
                fluid
                src={FooterLogo}
                alt="Holidaze Logo"
              />
              <p>Copyright © 2020 Marie Helen Berger</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
