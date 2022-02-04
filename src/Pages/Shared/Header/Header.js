import React from "react";
import { Container, Image, Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import { useHistory } from 'react-router';
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const {user, logOut} = useAuth();
    const history = useHistory();

    const handleHomeRoute = () => {
        history.push('/home')
    }
    return (
        <>
            <Navbar bg="light" sticky="top">
                <Container>
                    <Image onClick={handleHomeRoute} className="w-25" src={logo}></Image>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">

                            {
                                user?.email ? 
                                <Nav.Link as={Link} onClick={logOut}>Logout</Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                            <Button variant="danger">Sign Up</Button>
                            {user?.displayName}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
