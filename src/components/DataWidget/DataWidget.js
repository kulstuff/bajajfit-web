import React from "react";
import "./DataWidget.scss";

//Props to be passed :
//name, age, height, blood, avatar
//avatar requires an image url

let DataWidget = props => {
  let { name, age, weight, height, blood, avatar } = props;
  return (
    <div className="DataWidget">
      <div
        className="DataWidget__Avatar"
        style={{ backgroundImage: "url(" + avatar + ")" }}
      ></div>
      <div className="DataWidget__Holder">
        <p className="DataWidget__Name">{name}</p>
        <p className="DataWidget__Age">{age} Years</p>
        <div className="DataWidget__Info clearfix">
          <div className="col col-4 DataWidget__Info-Heading">Weight</div>
          <div className="col col-4 DataWidget__Info-Heading">Height</div>
          <div className="col col-4 DataWidget__Info-Heading">Blood</div>
          <div className="col col-4 DataWidget__Info-Data">{weight}kg</div>
          <div className="col col-4 DataWidget__Info-Data">{height}cm</div>
          <div className="col col-4 DataWidget__Info-Data">{blood}</div>
          <div className="DataWidget__Info-Dot DataWidget__Info-Dot-1"></div>
          <div className="DataWidget__Info-Dot DataWidget__Info-Dot-2"></div>
        </div>
      </div>
    </div>
  );
};

export default DataWidget;
