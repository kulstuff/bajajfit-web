import React from "react";
import "./LeaderBoardWidget.scss";

let LeaderBoardWidget = props => {
  let {
    Name1,
    Name2,
    Name3,
    Name4,
    Name5,
    HP1,
    HP2,
    HP3,
    HP4,
    HP5
  } = props;
  return (
    <div className="LeaderBoardWidget test">
      <div className="LeaderBoardWidget__LeaderBoard col col-6">
        Leaderboard
      </div>
      <div className="LeaderBoardWidget__Name1 col col-6">{Name1}</div>
      <div className="LeaderBoardWidget__Name1HP col col-6"> {HP1}</div>
      <div className="LeaderBoardWidget__Name2 col col-6">{Name2}</div>
      <div className="LeaderBoardWidget__Name2HP col col-6">{HP2}</div>
      <div className="LeaderBoardWidget__Name3 col col-6">{Name3}</div>
      <div className="LeaderBoardWidget__Name3HP col col-6">{HP3}</div>
      <div className="LeaderBoardWidget__Name4 col col-6">{Name4}</div>
      <div className="LeaderBoardWidget__Name4HP col col-6">{HP4}</div>
      <div className="LeaderBoardWidget__Name5 col col-6">{Name5}</div>
      <div className="LeaderBoardWidget__Name5HP col col-6">{HP5}</div>
    </div>
  );
};

export default LeaderBoardWidget;
