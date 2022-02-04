import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import banner from "../../../images/bannerbackground.png";
import "./Banner.css";

const backgroundImg = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "700px",
};

const Banner = () => {
    return (
        <div>
            <div style={backgroundImg}>
                <h1 className="text">Best Food Waiting For Your Belly</h1>

                <div className="d-flex justify-content-center">
                    <InputGroup className="mb-3 w-50">
                        <FormControl placeholder="Search Your Foods" />
                        <Button variant="danger">Search</Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Banner;
