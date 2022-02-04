import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DinnerFood from "./DinnerFood";

const DinnerFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("dinner.json")
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);

    return (
        <Container>
            <Row id="dinnerFoods">
                {foods.map((food) => (
                    <DinnerFood key={food.id} food={food}></DinnerFood>
                ))}
            </Row>
        </Container>
    );
};

export default DinnerFoods;
