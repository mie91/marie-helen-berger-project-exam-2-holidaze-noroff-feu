import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Spinner,
  Image,
  Button,
  Form,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorMessage from "../../layout/other/ErrorMessage";

const schema = yup.object().shape({
  establishmentId: yup
    .string()
    .required("The id of the establishment is required"),

  name: yup
    .string()
    .required("A name is required")
    .min(2, "The name is to short"),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("A valid email is required"),

  checkIn: yup
    .date()
    .typeError("Select a valid date (eg: May 5 2020)")
    .required("Select check-in date"),

  checkOut: yup
    .date()
    .typeError("Select a valid date (eg: May 5 2020)")
    .required("Select check-out date"),
});

function AccomodationInquiry() {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema: schema,
  });

  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  const url = BASE_URL + "establishments/" + id;
  const options = { headers };

  const history = useHistory();

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDetail(json);
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

  async function onSubmit(data) {
    const url = BASE_URL + "enquiries";
    const options = { headers, method: "POST", body: JSON.stringify(data) };

    fetch(url, options)
      .then((r) => r.json())
      .then((j) => console.log(j));
    setValidated(true);
    setTimeout(() => {
      history.push("/");
    }, 3000);
    console.log("data", data);
  }

  return (
    <div className="main-container main-container--dark-pink">
      <Container>
        <div className="basic-btn">
          <Link to={"/accomodations"}>back</Link>
        </div>
        <div className="form-box">
          <Row className="justify-content-md-center">
            <Col lg={8} md={10} sm={12}>
              <div className="form-box__info-text">
                <Image
                  className="form-box__image"
                  fluid
                  src={detail.image}
                  rounded
                ></Image>
              </div>
              <h1 className="form-box__header">Send Enquiry</h1>
              <h3 className="form-box__sub-header">{detail.name}</h3>
              <div className="form-box__info-text">
                <p>
                  Sunt qui in excepteur dolore do cupidatat culpa. Culpa aliquip
                  elit commodo commodo tempor ea nisi.{" "}
                </p>
              </div>
            </Col>
          </Row>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="justify-content-md-center">
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="form-box__group">
                  <Form.Control
                    className="form-box__field"
                    disabled
                    hidden
                    name="establishmentId"
                    defaultValue={detail.id}
                    ref={register}
                  />
                  {errors.establishmentId && (
                    <ErrorMessage>
                      {errors.establishmentId.message}
                    </ErrorMessage>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="form-box__group">
                  <Form.Label className="form-box__label">Name</Form.Label>
                  <Form.Control
                    className="form-box__field"
                    name="name"
                    placeholder="Enter Your full name"
                    ref={register}
                  />
                  {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                  )}
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="form-box__group">
                  <Form.Label className="form-box__label">Email</Form.Label>
                  <Form.Control
                    className="form-box__field"
                    name="email"
                    placeholder="Enter an email address"
                    ref={register}
                  />
                  {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={4} md={6} sm={6}>
                <Form.Label className="form-box__label">Check-in: </Form.Label>
                <Form.Group className="form-box__group">
                  <Controller
                    autoComplete="none"
                    as={DatePicker}
                    control={control}
                    valueName="selected"
                    onChange={([selected]) => selected}
                    name="checkIn"
                    className="form-control form-box__datepicker form-box__datepicker--check-in"
                    placeholderText="Select check-in date"
                    isClearable
                    dateFormat="MMMM d yyyy"
                    minDate={new Date()}
                  />
                  {errors.checkIn && (
                    <ErrorMessage>{errors.checkIn.message}</ErrorMessage>
                  )}
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={6}>
                <Form.Label className="form-box__label">Check-out: </Form.Label>
                <Form.Group className="form-box__group">
                  <Controller
                    autoComplete="none"
                    as={DatePicker}
                    control={control}
                    valueName="selected"
                    onChange={([selected]) => selected}
                    name="checkOut"
                    className="form-control form-box__datepicker form-box__datepicker--check-out"
                    placeholderText="Select check-out date"
                    isClearable
                    dateFormat="MMMM d yyyy"
                    minDate={new Date()}
                  />
                  {errors.checkOut && (
                    <ErrorMessage>{errors.checkOut.message}</ErrorMessage>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={6} md={6} sm={12}>
                {validated && (
                  <div className="form-box__validation">
                    <h4>Your enquiry has been sent successfully!</h4>
                    <i>
                      <p>You will be redirected.</p>
                    </i>
                  </div>
                )}
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={3} md={6} sm={12}>
                <div className="form-box__btn-container">
                  <Button className="form-box__submit-btn" type="submit">
                    Send
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default AccomodationInquiry;
