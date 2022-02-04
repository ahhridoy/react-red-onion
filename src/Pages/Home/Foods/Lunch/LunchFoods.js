import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import LunchFood from "./LunchFood";

const LunchFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("lunch.json")
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);

    return (
        <Container>
            <Row id="lunchFoods">
                {foods.map((food) => (
                    <LunchFood key={food.id} food={food}></LunchFood>
                ))}
            </Row>
        </Container>
    );
};

export default LunchFoods;
