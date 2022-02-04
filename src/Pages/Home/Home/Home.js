import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BreakfastFoods from "../Foods/Breakfast/BreakfastFoods";
import FoodsHeader from "../FoodsHeader/FoodsHeader";

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <FoodsHeader></FoodsHeader>
            <BreakfastFoods></BreakfastFoods>
            <About></About>
        </div>
    );
};

export default Home;
