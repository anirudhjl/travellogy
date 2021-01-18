import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./header/header";
import MainPage from "./mainPage/mainPage";
import SignIn from "./signIn/signIn";
import Contact from "./contact/contact";
import AboutUs from "./aboutUs/aboutUs";
import Hotels from "./hotels/hotels";
import Cruises from "./cruises/cruises";
import Flights from "./flights/flights";
import Profile from "./profile/profile";
import Confirm from "./confirm/confirm";
import SignUp from "./signUp/signUp";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/home" component={MainPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/aboutus" component={AboutUs} />
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
}

export default App;
