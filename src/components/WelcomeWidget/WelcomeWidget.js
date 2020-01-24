import React from "react";
import "./WelcomeWidget.scss";
import blob from "../../assets/img/blob.png";
import read from "../../assets/img/reading.png";
let WelcomeWidget = props => {
  let { name } = props;
  return (
    <div className="WelcomeWidget">
      <img src={blob} className="WelcomeWidget__blob" />
      <img src={read} className="WelcomeWidget__read" />
      <h1 className="WelcomeWidget__Title">Welcome {name}</h1>
      <p className="WelcomeWidget__Info">
        Today, we have a sale on the premium for Auto Insurance by Bajaj Allianz
      </p>
      <button className="WelcomeWidget__Button">Find Out More </button>
    </div>
  );
};

export default WelcomeWidget;
