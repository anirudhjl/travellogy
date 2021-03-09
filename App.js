import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/header";
import MainPage from "./Components/main";
import SignIn from "./Components/signIn";
import Contact from "./Components/contact";
import About from "./Components/about";
import Hotels from "./Components/hotels";
import Cruises from "./Components/cruises";
import Flights from "./Components/flights";
import Profile from "./Components/profile";
import Confirm from "./Components/confirm";
import SignUp from "./Components/signUp";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/home" component={MainPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signin/hotels" component={Hotels} />
          <Route exact path="/signin/flights" component={Flights} />
          <Route exact path="/signin/cruises" component={Cruises} />
          <Route exact path="/profilepic" component={Profile} />
          <Route exact path="/userinfo" component={Profile} />
          <Route exact path="/confirm" component={Confirm} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
