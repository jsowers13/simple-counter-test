//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import "../styles/timer.css";

const Timer = (props) => {
  return (
      <div className="big-counter">
          <h1>Counter</h1>
      <div className="clock">
        <i class="fa-regular fa-clock"></i>
      </div>
      <div className="five">{props.digitFive % 10}</div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div>
    </div>
  );
};
Timer.propTypes = {
  digitFive: PropTypes.number,
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};
let counter = 0;
setInterval(function () {
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  counter++;
  console.log(five, four, three, two, one);
  //render your react application
  ReactDOM.render(
    <Timer
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
      digitFive={five}
    />,
    document.querySelector("#app")
  );
}, 1000);
