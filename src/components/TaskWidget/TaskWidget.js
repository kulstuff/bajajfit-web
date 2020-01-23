import React from "react";
import { Circle } from "rc-progress";
import CurrencyWidget from "../CurrencyWidget/CurrencyWidget";
import "./TaskWidget.scss";

let TaskWidget = props => {
  let { targetText, progress, target, hp, bp, sender } = props;
  console.log(parseFloat(progress / target));
  return (
    <div className="TaskWidget">
      <h1 className="TaskWidget__Title">{targetText}</h1>
      <h1 className="TaskWidget__Subtitle">
        {progress}/{target}
      </h1>
      <Circle
        class="TaskWidget__Circle"
        percent={(100 * progress) / target}
        strokeWidth="8"
        strokeColor={{
          "0%": "#089bab",
          "100%": "#87d068"
        }}
      />
      <h1 className="TaskWidget__Progress">{(100 * progress) / target} %</h1>
      <div className="TaskWidget__Prize">
        <CurrencyWidget HP={hp} BP={bp} />
      </div>
      <div className="TaskWidget__Sender">{sender}</div>
    </div>
  );
};

export default TaskWidget;
