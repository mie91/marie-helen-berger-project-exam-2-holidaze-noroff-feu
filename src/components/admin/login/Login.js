import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { BASE_URL, headers } from "../../../constants/api";
import ErrorMessage from "../../layout/other/ErrorMessage";
import Logo from "../../../assets/logo/logoLight_m.png";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function Login() {
  const { register, handleSubmit } = useForm();
  const { registerUser } = useContext(AuthContext);

  const history = useHistory();

  function onSubmit(data) {
    console.log("data", data);
    registerUser(data.username);
    history.push("/admin");
  }

  return (
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

      <Button type="submit">Login</Button>
    </Form>
  );
}

export default Login;



/* <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name="username" placeholder="Enter your username" ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" placeholder="Enter your password" ref={register} />
                </Form.Group>

                <Button type="submit">Log In</Button>
            </Form>
        </> */