import React from "react";
import { Circle } from "rc-progress";
import "./BHIWidget.scss";

let BMIWidget = props => {
  let { BHI } = props;
  return (
    <div className="BHIWidget">
      <div className="BHIWidget__BHI">Bajaj HealthIndex</div>
      <div className="BHIWidget__InnerBox">
        <div className="BHIWidget__BHIValue"> {BHI} BHI</div>
        <div className="BHIWidget__ProgressBar">
          <Circle
            percent={BHI}
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
