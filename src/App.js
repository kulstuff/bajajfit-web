import React from "react";
import "./App.scss";
// import DataWidget from "./components/dataWidget/DataWidget";
// import CurrencyWidget from "./components/CurrencyWidget/CurrencyWidget";
import HeartbeatWidget from "./components/HeartbeatWidget/HeartbeatWidget";
//import CaloriesWidget from "./components/CaloriesWidget/CaloriesWidget";


let App = () => {
  return (
    <div className="App">
     <HeartbeatWidget BPM="99" />
    </div>
  );
};

export default App;
