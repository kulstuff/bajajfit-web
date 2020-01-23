import React from "react";
import "./HeartbeatWidget.scss";

let HeartbeatWidget = props => {
  let { BPM } = props;
  return (
    <div className="HeartbeatWidget">
      <div className="HeartbeatWidget__Heartbeat col col-6"> HeartBeat </div>
      <div className="HeartbeatWidget__InnerBox col col-6">
        <div className="HeartbeatWidget__BPMValue col col-6"> {BPM}</div>
        <div className="HeartbeatWidget__BPM col col-6"> bpm </div>
        <div className="HeartbeatWidget__HeartbeatPicture col col-6"></div>
      </div>
    </div>
  );
};

export default HeartbeatWidget;
