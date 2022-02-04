import React from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const {signInUsingGoogle, signInUsingGithub} = useAuth();
    return (
        <div className="d-flex justify-content-center my-5">
            <Form className="w-25">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                    />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Submit
                </Button> <br /> <br />
                <Button onClick={signInUsingGoogle} className="me-4" variant="warning">Google Sign In</Button>
                <Button onClick={signInUsingGithub} variant="warning">Github Sign In</Button>
            </Form>
        </div>
    );
};

export default Login;
