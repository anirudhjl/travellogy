import React from "react";
import "../flights/flights.css";

class Hotels extends React.Component {
  render() {
    return (
      <div>
        <h2>Hotels</h2>
        <br />
        <form>
          <div className="wrapper">
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
                <p>Date</p>
              </label>
              <input type="date" required className="form-control" />
            </div>
            <div>
              <label>
                <p>Time</p>
              </label>
              <input type="time" required className="form-control" />
            </div>
          </div>
          <br />
          <button className="btn btn-dark">Check</button>
        </form>
      </div>
    );
  }
}

export default Hotels;
