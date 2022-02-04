import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./FoodsHeader.css";

const FoodsHeader = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link
                            className="link-btn"
                            as={HashLink}
                            to="/home#breakfastFoods"
                        >
                            Breakfast
                        </Nav.Link>
                        <Nav.Link
                            className="link-btn"
                            as={HashLink}
                            to="/lunchFoods#lunchFoods"
                        >
                            Lunch
                        </Nav.Link>
                        <Nav.Link
                            className="link-btn"
                            as={HashLink}
                            to="/dinnerFoods#dinnerFoods"
                        >
                            Dinner
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default FoodsHeader;
