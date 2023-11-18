import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import TrafficLight from "./component/TrafficLight";

//import your own components


//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
