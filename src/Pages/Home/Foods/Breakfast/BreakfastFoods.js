import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BreakfastFood from "./BreakfastFood";

const BreakfastFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("breakfast.json")
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);

    return (
        <Container>
            <Row id="breakfastFoods">
                {foods.map((food) => (
                    <BreakfastFood key={food.id} food={food}></BreakfastFood>
                ))}
            </Row>
        </Container>
    );
};

export default BreakfastFoods;
