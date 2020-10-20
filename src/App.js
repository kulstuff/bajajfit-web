import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import Dashboard from "./pages/Dashbaord/Dashboard";
import Journal from "./pages/Journal/Journal";
import "./App.scss";
import Bajaar from "./pages/Bajaar/Bajaar";
import Tasks from "./pages/Tasks/Tasks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/bajaar" component={Bajaar} />
          <Route exact path="/tasks" component={Tasks} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
