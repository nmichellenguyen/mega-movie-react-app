import React, { Component } from "react";
import "./index.css";

const Header = () => {
  return (
    <thead className="d-flex justify-content-center">
      <tr>
        <th>Movie</th>
        <th>Release date</th>
        <th>Rating</th>
        <th>Poster</th>
      </tr>
    </thead>
  );
};

class Frame extends Component {
  render() {
    return (
      <div className="Frame">
        <Header />
      </div>
    );
  }
}

export default Frame;
