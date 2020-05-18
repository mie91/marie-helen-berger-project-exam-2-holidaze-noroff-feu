import React from "react";
import { useForm } from "react-hook-form";
import {Button, Form} from "react-bootstrap"

function Login() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <>
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
        </>
    );
}

export default Login;

