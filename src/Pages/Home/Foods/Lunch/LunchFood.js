import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';

const LunchFood = (props) => {
    const {id, img, name, description, price} = props.food;
    const history = useHistory();

    const handleFood = () => {
        history.push(`/details/${id}`);
    }
    return (
        <Col md={4} onClick={handleFood}>
            <Image className="w-50" src={img}></Image>
            <h5>{name}</h5>
            <p>{description}</p>
            <h4>${price}</h4>
        </Col>
    );
};

export default LunchFood;