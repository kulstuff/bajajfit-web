import React from "react";
import { Circle } from "rc-progress";
import "./BMIWidget.scss";

let BMIWidget = props => {
  let { BMI } = props;
  return (
    <div className="BMIWidget">
      <div className="BMIWidget__BMI">Body Mass Index </div>
      <div className="BMIWidget__InnerBox">
        <div className="BMIWidget__BMIValue"> {BMI} BMI</div>
        <div className="BMIWidget__ProgressBar">
          <Circle
            percent={BMI * 3}
            strokeWidth="8"
            strokeColor={{
              "0%": "#089bab",
              "100%": "#87d068"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BMIWidget;
