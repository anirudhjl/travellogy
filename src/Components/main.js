import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Styles/main/main.css";

const MainPage = () => {
  let history = useHistory();
  const [state, setState] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pageMover = (event) => {
    event.preventDefault();
    if (state.email !== "" && state.password !== "") {
      console.log(isLoggedIn);
      history.push("/signin");
    } else event.preventDefault();
  };
  const handleChange = (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    setIsLoggedIn(true);
  };

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
          history.push("/signup");
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
          <form className="form-group" onSubmit={pageMover}>
            <p>
              <label>Email</label>
            </p>
            <input
              type="email"
              required
              name="email"
              id="email"
              value={state.name}
              onChange={handleChange}
              className="form-control"
            />
            <br />
            <p>
              <label>Password</label>
            </p>
            <input
              type="password"
              id="password"
              name="password"
              value={state.name}
              required
              minLength="8"
              className="form-control"
              onChange={handleChange}
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
};

export default MainPage;
