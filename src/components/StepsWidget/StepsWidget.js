import React from "react";
import { Circle } from "rc-progress";
import "./StepsWidget.scss";

let StepsWidget = props => {
  let { completed_steps, required_steps } = props;
  return (
    <div className="StepsWidget">
      <div className="StepsWidget__Steps">Todays Steps </div>
      <div className="StepsWidget__InnerBox">
        <div className="StepsWidget__StepsValue">
          {completed_steps}
          <br />
          Steps
        </div>
        <div className="StepsWidget__ProgressBar">
          <Circle
            percent={(100 * completed_steps) / required_steps}
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

export default StepsWidget;
