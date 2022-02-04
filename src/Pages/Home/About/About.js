import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './About.css';
import img1 from '../../../images/Image/img1.png';
import img2 from '../../../images/Image/img2.png';
import img3 from '../../../images/Image/img3.png';

const About = () => {
    return (
        <Container className="mt-5">
            <div>
                <h3 className="about-title">Why you choose us</h3>
                <p className="about-title">
                    Barton waited twenty always repair we with in do. An
                    delighted offending <br/>curiosity my is dashwoods at. Boy
                    prosperous increasing sorrouned
                </p>
            </div>
            <Row>
                <Col md={4}>
                    <Image className="w-100" src={img1}></Image>
                    <h5>Fast Delivery</h5>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cupiditate reiciendis vero quasi enim possimus provident a eos est earum.</small> <br />
                    <Link>See More</Link>
                </Col>
                <Col md={4}>
                    <Image className="w-100" src={img2}></Image>
                    <h5>A Good Auto Responder</h5>
                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius distinctio enim quod dolor harum nisi! Consequuntur tenetur debitis deserunt error.</small> <br />
                    <Link>See More</Link>
                </Col>
                <Col md={4}>
                    <Image className="w-100" src={img3}></Image>
                    <h5>Home Delivery</h5>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore unde velit, voluptatum deserunt dolores quos? Aut quisquam totam alias saepe.</small> <br />
                    <Link>See More</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
