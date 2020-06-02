import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Spinner, Image, Form } from "react-bootstrap";
import { BASE_URL, headers, PATCH } from "../../../constants/api";
import DeleteEstablishment from "./DeleteEstablishment";
import ErrorMessage from "../../layout/other/ErrorMessage";
import Logo from "../../../assets/logo/logoLight_m.png";



function AddEstablishment() {
const defaultState = {
name: "",
email: "",
};

const history = useHistory();
const { register, handleSubmit } = useForm();
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

const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
await fetch(fetchUrl, updateOptions);
history.push("/admin/establishments");
}

return (
  <>
    <div className="main-container main-container--white-purple main-container main-container--admin">
      <Container>
        <div className="admin-box admin-box--establishment-edit">
          <Row className="justify-content-md-center">
            <Col lg={3} md={10} sm={12}>
              <div className="admin-box__image">
                <Image src={Logo} fluid></Image>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={10} md={10} sm={12}>
              <h1 className="admin-box__header">Edit Establishment</h1>
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
                          name="name"
                          defaultValue={establishment.name}
                          placeholder="Name of establishment"
                          ref={register}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={5} md={12} sm={12}>
                      <Form.Group className="admin-box__form-group">
                        <Form.Label className="admin-box__form-label">
                          Email:
                        </Form.Label>
                        <Form.Control
                          className="admin-box__form-input"
                          name="name"
                          defaultValue={establishment.email}
                          placeholder="Name of establishment"
                          ref={register}
                        />
                      </Form.Group>
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