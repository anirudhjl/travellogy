import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.email,
      password: event.target.password,
    });
  };
  confirmMail = (event) => {
    var password = document.getElementById("newpassword").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if (password === confirmpassword) {
      event.preventDefault();
      this.props.history.push("/confirm");
    } else event.preventDefault();
  };
  render() {
    return (
      <form className="form-group" onSubmit={this.confirmMail}>
        <label>
          <p>Email</p>
        </label>
        <input
          type="email"
          onChange={this.handleChange}
          className="form-control"
          required
          style={{ width: "40%" }}
        />
        <br />
        <label>
          <p>Password</p>
        </label>
        <input
          type="password"
          id="newpassword"
          minLength="8"
          required
          className="form-control"
          onChange={this.handleChange}
          style={{ width: "40%" }}
        />
        <br />
        <label>
          <p>Confirm Password</p>
        </label>
        <input
          type="password"
          style={{ width: "40%" }}
          id="confirmpassword"
          minLength="8"
          required
          className="form-control"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button className="btn btn-dark" type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUp;
