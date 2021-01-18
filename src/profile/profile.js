import React from "react";
import profile from "../Images/profile.png";

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={profile} alt="Profile" height="145px" width="145px" />
        <p>
          Name: Anirudh
          <br />
          Contact: 123 392832
        </p>
      </div>
    );
  }
}

export default Profile;
