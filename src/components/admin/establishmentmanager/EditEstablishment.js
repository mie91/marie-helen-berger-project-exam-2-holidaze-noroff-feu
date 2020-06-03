import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Spinner,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { BASE_URL, headers, PATCH } from "../../../constants/api";
import DeleteEstablishment from "./DeleteEstablishment";
import ErrorMessage from "../../layout/other/ErrorMessage";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Link } from "react-router-dom";

function EditEstablishment() {
  const defaultState = {
    name: "",
    email: "",
  };

  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [establishment, setEstablishment] = useState(defaultState);

  let { id } = useParams();

  const options = {
    headers,
  };
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
    history.push("/admin/establishments");
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
                    <Form.Row className="justify-content-md-center">
                      <Col lg={7} md={12} sm={12}>
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
                        </Form.Group>
                      </Col>
                      <Col lg={3} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Establishment ID:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="email"
                            defaultValue={establishment.id}
                            placeholder="Enter establishment ID"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                      <Col lg={7} md={12} sm={12}>
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
                        </Form.Group>
                      </Col>
                      <Col lg={3} md={12} sm={12}>
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
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                      <Col lg={7} md={12} sm={12}>
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
                      <Col lg={3} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Max guests:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
                            name="maxGuests"
                            defaultValue={establishment.maxGuests}
                            placeholder="Enter maximum number of guests"
                            ref={register}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
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
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={12} sm={12}>
                        <Form.Group className="admin-box__form-group">
                          <Form.Label className="admin-box__form-label">
                            Self Catering:
                          </Form.Label>
                          <Form.Control
                            className="admin-box__form-input"
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
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
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
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Row className="justify-content-md-center">
                      <Button type="submit">Update</Button>
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

/* <>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Edit Hotel</h1>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" defaultValue={establishment.name} placeholder="Enter a name for the establishment"
                ref={register} />
        </Form.Group>

        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" defaultValue={establishment.email} placeholder="Enter an email address"
                ref={register} />
        </Form.Group>

        <Button type="submit">Update</Button>
    </Form>
    <DeleteEstablishment id={id} />
</> */
