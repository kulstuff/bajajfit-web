import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import Dashboard from "./pages/Dashbaord/Dashboard";
import Journal from "./pages/Journal/Journal";
import "./App.scss";
import Bajaar from "./pages/Bajaar/Bajaar";
import Tasks from "./pages/Tasks/Tasks";
import LeaderBoardWidget from "././components/LeaderboardWidget/LeaderBoardWidget";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={withRouter(Dashboard)} />
          <Route exact path="/journal" component={withRouter(Journal)} />
          <Route exact path="/bajaar" component={withRouter(Bajaar)} />
          <Route exact path="/tasks" component={withRouter(Tasks)} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
