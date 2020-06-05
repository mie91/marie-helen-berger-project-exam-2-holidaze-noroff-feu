import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { BASE_URL, headers } from "../../../constants/api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import ErrorMessage from "../../layout/other/ErrorMessage";
import Logo from "../../../assets/logo/logoLight_m.png";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("A name is required")
    .min(2, "The name is to short"),

  password: yup
    .string()
    .required("A password is required")
    .min(5, "The password is to short"),
});



function Login() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const { registerUser } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  function onSubmit(data) {
    setValidated(true);
    console.log("data", data);
    registerUser(data.username);
    setTimeout(() => {
      history.push("/admin");
    }, 2000);
  }

  return (
    <>
      <div className="main-container main-container--white-purple main-container main-container--admin">
        <Container>
          <div className="basic-btn basic-btn--dark">
            <Link to={"/admin/establishments"}>back </Link>{" "}
          </div>{" "}
          <div className="admin-box admin-box--establishment-edit">
            <Row className="justify-content-md-center">
              <Col lg={3} md={10} sm={12}>
                <div className="admin-box__image">
                  <Image src={Logo} fluid></Image>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={8} md={10} sm={12}>
                <h1 className="admin-box__header">Admin Login</h1>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={10} md={10} sm={12}>
                <div className="admin-box__form">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="justify-content-md-center">
                      <Col lg={5} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Name:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="username"
                            placeholder="Enter username"
                            ref={register}
                          />
                          {errors.username && (
                            <ErrorMessage>{errors.username.message}</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col lg={5} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Password:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="password"
                            placeholder="Enter password"
                            ref={register}
                          />
                          {errors.password && (
                            <ErrorMessage>{errors.password.message}</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                      <Col lg={5} md={6} sm={12}>
                        {validated && (
                          <div className="admin-box__validation">
                            <h4>
                              Logged in successfully!
                            </h4>
                          </div>
                        )}
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col lg={12} md={6} sm={12}>
                        <button className="admin-box__basic-btn" type="submit">
                          Login
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Login;



/* <>
            <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <Form.Group>
        <Form.Label>User Name</Form.Label>
        <Form.Control
          name="username"
          placeholder="Enter your username"
          ref={register}
        />
      </Form.Group>

      <Button type="submit">Register</Button>
    </Form>
        </> */