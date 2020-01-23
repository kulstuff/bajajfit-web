import React from "react";
import "./CurrencyWidget.scss";

let CurrencyWidget = props => {
  let { HP, BP } = props;
  return (
    <div className="CurrencyWidget">
      <div className="CurrencyWidget__HP col col-6">{HP} HP </div>
      <div className="CurrencyWidget__BP col col-6">
        <div className="CurrencyWidget__BP2">{BP} BP</div>{" "}
      </div>
    </div>
  );
};

export default CurrencyWidget;
