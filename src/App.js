import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Details from "./Pages/Details/Details";
import BreakfastFoods from "./Pages/Home/Foods/Breakfast/BreakfastFoods";
import DinnerFoods from "./Pages/Home/Foods/Dinner/DinnerFoods";
import LunchFoods from "./Pages/Home/Foods/Lunch/LunchFoods";
import FoodsHeader from "./Pages/Home/FoodsHeader/FoodsHeader";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <div className="App">
            <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/breakfastFoods">
                        <BreakfastFoods></BreakfastFoods>
                    </Route>
                    <Route path="/lunchFoods">
                        <FoodsHeader></FoodsHeader>
                        <LunchFoods></LunchFoods>
                    </Route>
                    <Route path="/dinnerFoods">
                        <FoodsHeader></FoodsHeader>
                        <DinnerFoods></DinnerFoods>
                    </Route>
                    <Route path="/details/:foodId">
                        <FoodsHeader></FoodsHeader>
                        <Details></Details>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
