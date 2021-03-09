import React from "react";
import "../Styles/main/main.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  pageMover = (event) => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.history.push("/signin");
      this.setState({
        isLoggedIn: true,
      });
    } else event.preventDefault();
  };
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.email,
      password: event.target.password,
    });
  };
  render() {
    return (
      <div id="page">
        <h1>Travellogy</h1>
        <p>Why stop when you can not!</p>
        <br />
        <button
          className="btn btn-dark btn-lg"
          id="myBtn"
          type="button"
          onClick={() => {
            document.getElementById("signinModal").style.display = "block";
          }}
        >
          Sign In
        </button>{" "}
        <button
          className="btn btn-primary btn-lg"
          type="button"
          onClick={() => {
            this.props.history.push("/signup");
          }}
        >
          Sign Up
        </button>
        <div id="signinModal" className="modal">
          <div className="modal-content">
            <div
              className="close"
              onClick={() => {
                document.getElementById("signinModal").style.display = "none";
              }}
            >
              &times;
            </div>
            <form className="form-group" onSubmit={this.pageMover}>
              <p>
                <label>Email</label>
              </p>
              <input
                type="email"
                required
                id="email"
                onChange={this.handleChange}
                className="form-control"
              />
              <br />
              <p>
                <label>Password</label>
              </p>
              <input
                type="password"
                id="password"
                required
                minLength="8"
                className="form-control"
                onChange={this.handleChange}
              />
              <br />
              <br />
              <button className="btn btn-dark" id="confirmbtn" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
