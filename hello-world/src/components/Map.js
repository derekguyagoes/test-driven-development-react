import React, { Component } from "react";
import "./Map.css";

class Map extends Component {
  render() {
    return (
      <div className="MapBox">
        <img src="images/none.png" alt="no store selected" />
      </div>
    );
  }
}

Map.propTypes = {};

export default Map;