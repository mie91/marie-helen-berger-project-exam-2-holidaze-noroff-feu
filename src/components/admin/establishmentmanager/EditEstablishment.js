import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { BASE_URL, headers, PATCH } from "../../../constants/api";
import DeleteEstablishment from "./DeleteEstablishment";
import ErrorMessage from "../../layout/other/ErrorMessage";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(2, "The name is to short"),

  email: yup.string().email("Please enter a valid email"),

  price: yup.number(),

  image: yup.string(),

  maxGuests: yup.number().min(1, "Minimum 1 person"),

  lat: yup
    .number()
    .min(-90, "Latitude must be between -90 and 90")
    .max(90, "Latitude must be between -90 and 90"),

  lng: yup
    .number()
    .min(-180, "Longitude must be between -180 and 180")
    .max(180, "Longitude must be between -180 and 180"),

  description: yup
    .string()
    .min(2, "The description is to short")
    .max(200, "The description is to long"),
});


function EditEstablishment() {
  const defaultState = {
    name: "",
    email: "",
    establishmentId: "",
    price: "",
    image: "",
    maxGuests: "",
    lat: "",
    lng: "",
    selfCatering: "",
    description: "",
  };

  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const [establishment, setEstablishment] = useState(defaultState);

  let { id } = useParams();

  const options = { headers };
  const fetchUrl = BASE_URL + "establishments/" + id;

  useEffect(() => {
    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setEstablishment(json))
      .catch((error) => console.log(error));
  }, []);

  async function onSubmit(data) {
    console.log("data", data);

    const updateOptions = {
      headers,
      method: PATCH,
      body: JSON.stringify(data),
    };
    await fetch(fetchUrl, updateOptions);
    setValidated(true);
    setTimeout(() => {
      history.push("/admin/establishments");
    }, 2000);
    console.log("data", data);
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
                <h1 className="admin-box__header">Edit Establishment</h1>
                <h3 className="admin-box__subheader">{establishment.name}</h3>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={10} md={10} sm={12}>
                <div className="admin-box__form">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="justify-content-md-center">
                      <Col lg={6} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Name:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="name"
                            defaultValue={establishment.name}
                            placeholder="Enter name of establishment"
                            ref={register}
                          />
                          {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                          )}
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            ID:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="establishmentId"
                            defaultValue={establishment.id}
                            placeholder="Enter establishment ID"
                            ref={register}
                          />
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
                            defaultValue={establishment.email}
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
                            defaultValue={establishment.price}
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
                            defaultValue={establishment.image}
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
                            defaultValue={establishment.maxGuests}
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
                            defaultValue={establishment.lat}
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
                            defaultValue={establishment.lng}
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
                            defaultValue={establishment.selfCatering}
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
                            defaultValue={establishment.description}
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
                            <h4>The establishment has been updated successfully!</h4>
                            
                          </div>
                        )}
                      </Col>
                    </Row>
                    <Row className="justify-content-md-end">
                      <Col lg={4} md={6} sm={12}>
                        <DeleteEstablishment id={id} />
                        <button className="admin-box__update-btn" type="submit">
                          Update
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

export default EditEstablishment;
