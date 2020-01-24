import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashbaord/Dashboard";
import Journal from "./pages/Journal/Journal";
import "./App.scss";
import Bajaar from "./pages/Bajaar/Bajaar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bajaar />
      </div>
    );
  }
}
export default App;
