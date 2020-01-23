import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashbaord/Dashboard";
import Journal from "./pages/Journal/Journal";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}
export default App;
