import React, { Component } from "react";
import "./App.scss";
import CalorieWidgetLarge from "./components/CalorieWidgetLarge/CalorieWidgetLarge";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalorieWidgetLarge />
      </div>
    );
  }
}

export default App;
