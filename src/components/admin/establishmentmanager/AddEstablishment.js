import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { BASE_URL, headers } from "../../../constants/api";
import ErrorMessage from "../../layout/other/ErrorMessage";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(2, "The name is to short"),
});

function AddEstablishment() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  async function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "establishments";

    const options = { headers, method: "POST", body: JSON.stringify(data) };

    await fetch(url, options);
    setValidated(true);
    setTimeout(() => {
      history.push("/admin/establishments");
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
                <h1 className="admin-box__header admin-box__header--breakable">
                  Add Establishment
                </h1>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={10} md={10} sm={12}>
                <div className="admin-box__form">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="justify-content-md-center">
                      <Col lg={10} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Name:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="name"
                            placeholder="Enter name of establishment"
                            ref={register}
                          />
                          {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col lg={6} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Email:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="email"
                            placeholder="Enter establishment email"
                            ref={register}
                          />
                          {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Price:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="price"
                            placeholder="Enter price per night"
                            ref={register}
                          />
                          {errors.price && (
                            <ErrorMessage>{errors.price.message}</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col lg={6} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Image:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="image"
                            placeholder="Enter image URL"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Max guests:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="maxGuests"
                            placeholder="Max guests"
                            ref={register}
                          />
                          {errors.maxGuests && (
                            <ErrorMessage>
                              {errors.maxGuests.message}
                            </ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col lg={3} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Latitude:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="lat"
                            d
                            placeholder="Enter coordinate (latitude)"
                            ref={register}
                          />
                          {errors.lat && (
                            <ErrorMessage>{errors.lat.message}</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                      <Col lg={3} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Longitude:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="lng"
                            placeholder="Enter coordinate (longitude)"
                            ref={register}
                          />
                          {errors.lng && (
                            <ErrorMessage>{errors.lng.message}</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Self Catering:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input admin-box__form-input--select"
                            as="select"
                            ref={register}
                            name="selfCatering"
                          >
                            <option value="true">true</option>
                            <option value="false">false</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col lg={10} md={6} sm={12}>
                        <Form.Group>
                          <Form.Label className="admin-box__form-label">
                            Description
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            as="textarea"
                            rows="5"
                            name="description"
                            placeholder="Enter the establishment description here"
                            ref={register}
                          />
                          {errors.description && (
                            <ErrorMessage>
                              {errors.description.message}
                            </ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col lg={10} md={6} sm={12}>
                        {validated && (
                          <div className="admin-box__validation">
                            <h4>
                              The establishment has been created successfully!
                            </h4>
                          </div>
                        )}
                      </Col>
                    </Row>
                    <Row className="justify-content-md-end">
                      <Col lg={4} md={6} sm={12}>
                        <button className="admin-box__update-btn" type="submit">
                          Create
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

export default AddEstablishment;

