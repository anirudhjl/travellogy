import React from "react";
import "../flights/flights.css";

class Flights extends React.Component {
  render() {
    return (
      <div>
        <h2>Flights</h2>
        <br />

        <form>
          <div className="wrapper">
            <div>
              <label>
                <p>Origin</p>
              </label>
              <input
                type="text"
                placeholder="Eg: Mumbai, Delhi, Kolkata..."
                className="form-control"
                required
              />
            </div>
            <div>
              <label>
                <p>Destination</p>
              </label>
              <input
                type="text"
                placeholder="Eg: Bangalore, Goa, Manali..."
                className="form-control"
                required
              />
            </div>
            <div>
              <label>
                <p>Date of travel</p>
              </label>
              <input type="date" required className="form-control" />
            </div>
            <div>
              <label>
                <p>Time of departure</p>
              </label>
              <input type="time" required className="form-control" />
            </div>
            <br />
          </div>
          <button className="btn btn-dark">Check</button>
        </form>
      </div>
    );
  }
}

export default Flights;
