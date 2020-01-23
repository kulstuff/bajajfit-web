import React from "react";
import "./App.scss";
// import DataWidget from "./components/dataWidget/DataWidget";
// import CurrencyWidget from "./components/CurrencyWidget/CurrencyWidget";
// import HeartbeatWidget from "./components/HeartbeatWidget/HeartbeatWidget";
//import BMIWidget from "./components/BMIWidget/BMIWidget";
//import CaloriesWidget from "./components/CaloriesWidget/CaloriesWidget";
import AdWidget from "./components/AdWidget/AdWidget";

let App = () => {
  return (
    <div className="App">
      <AdWidget />
    </div>
  );
};

export default App;
