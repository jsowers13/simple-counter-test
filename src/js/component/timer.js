import React, { useState } from "react";
import PropTypes from "prop-types";

import "../../styles/timer.css";

export const Timer = (props) => {
  return (
    <div className="big-counter">
      <div className="clock">
        <i class="fa-regular fa-clock"></i>
      </div>
      <div className="five">{props.digitFive}</div>
      <div className="four">{props.digitFour}</div>
      <div className="three">{props.digitThree}</div>
      <div className="two">{props.digitTwo}</div>
      <div className="one">{props.digitOne}</div>
    </div>
  );
};
