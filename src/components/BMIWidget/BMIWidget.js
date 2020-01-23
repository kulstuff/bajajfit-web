import React from "react";
import ProgressBar from "react-progressbar-circle";
import "./BMIWidget.scss";

let BMIWidget = props => {
  // let {BMI}=props;
  return (
    <div className="test BMIWidget">
      <div className="BMIWidget__BMI">Body Mass Index </div>
      <div className="BMIWidget__InnerBox">
        <div className="BMIWidget__BMIValue"> 18 BMI</div>
        <div className="BMIWidget__ProgressBar">
          <ProgressBar
            sqSize={100}
            strokeWidth={8}
            percentage={77}
            color={"#0000"}
          />
        </div>
      </div>
    </div>
  );
};

export default BMIWidget;
