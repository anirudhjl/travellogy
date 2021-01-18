import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../signIn/signIn.css";

class signIn extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <p>
            <a href={"mailto:Travellogy@gmail.com"} style={{ float: "right" }}>
              Help?
            </a>
          </p>
          <p>Welcome aboard to a beautiful journey ahead</p>
        </div>
        <br />
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <h4>Hotels</h4>
              </Card.Title>
              <br />
              <Card.Text>
                Check in some of the best hotels and restuarants for amazing
                trip using Travellogy.
              </Card.Text>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.props.history.push("/signin/hotels");
                }}
              >
                Check
              </button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <h4>Flights</h4>
              </Card.Title>
              <br />
              <Card.Text>
                Check in some of the best premium airways for your amazing trip
                using Travellogy.
              </Card.Text>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.props.history.push("/signin/flights");
                }}
              >
                Check
              </button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <h4>Cruises</h4>
              </Card.Title>
              <br />
              <Card.Text>
                Check in some of the lavishing cruises with millions of others
                using Travellogy.
              </Card.Text>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.props.history.push("/signin/cruises");
                }}
              >
                Check
              </button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default signIn;
