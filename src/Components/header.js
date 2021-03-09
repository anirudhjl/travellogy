import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../Images/profile.png";
import "../Styles/header/header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Anirudh",
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
        <NavLink exact to="/contact">
          Contact
        </NavLink>
        <NavLink exact to="/userinfo">
          <img src={profile} alt="Profile" />
          &nbsp;
          {this.state.username}
        </NavLink>
        <hr />
      </nav>
    );
  }
}

export default Header;
