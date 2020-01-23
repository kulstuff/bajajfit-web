import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeActive: true,
      journalActive: false,
      tasksActive: false,
      bajaarActive: false
    };
  }

  render() {
    let toggleJournal = () => {
      this.setState({
        homeActive: false,
        journalActive: true,
        tasksActive: false,
        bajaarActive: false
      });
    };
    let toggleTasks = () => {
      this.setState({
        homeActive: false,
        journalActive: false,
        tasksActive: true,
        bajaarActive: false
      });
    };
    let toggleBajaar = () => {
      this.setState({
        homeActive: false,
        journalActive: false,
        tasksActive: false,
        bajaarActive: true
      });
    };
    let toggleHome = () => {
      this.setState({
        homeActive: true,
        journalActive: false,
        tasksActive: false,
        bajaarActive: false
      });
    };

    let homeButtonClass = {
      container: "Navbar__Button Navbar__Button-Selected",
      icon: "Navbar__Button-Icon Navbar__Button-Selected",
      text: "Navbar__Button-Text Navbar__Button-Selected"
    };
    let journalButtonClass = {
      container: "Navbar__Button",
      icon: "Navbar__Button-Icon",
      text: "Navbar__Button-Text"
    };
    let tasksButtonClass = {
      container: "Navbar__Button",
      icon: "Navbar__Button-Icon",
      text: "Navbar__Button-Text"
    };
    let bajaarButtonClass = {
      container: "Navbar__Button",
      icon: "Navbar__Button-Icon",
      text: "Navbar__Button-Text"
    };
    //Home Class
    if (this.state.homeActive === true) {
      homeButtonClass.container = homeButtonClass.container.concat(
        " Navbar__Button-Selected"
      );
      homeButtonClass.icon = homeButtonClass.icon.concat(
        " Navbar__Button-Selected"
      );
      homeButtonClass.text = homeButtonClass.text.concat(
        " Navbar__Button-Selected"
      );
    } else {
      homeButtonClass.container = homeButtonClass.container.slice(0, 14);
      homeButtonClass.icon = homeButtonClass.icon.slice(0, 19);
      homeButtonClass.text = homeButtonClass.text.slice(0, 19);
    }

    //Journal Class
    if (this.state.journalActive === true) {
      journalButtonClass.container = journalButtonClass.container.concat(
        " Navbar__Button-Selected"
      );
      journalButtonClass.icon = journalButtonClass.icon.concat(
        " Navbar__Button-Selected"
      );
      journalButtonClass.text = journalButtonClass.text.concat(
        " Navbar__Button-Selected"
      );
    } else {
      journalButtonClass.container = journalButtonClass.container.slice(0, 14);
      journalButtonClass.icon = journalButtonClass.icon.slice(0, 19);
      journalButtonClass.text = journalButtonClass.text.slice(0, 19);
    }

    //Tasks Class
    if (this.state.tasksActive === true) {
      tasksButtonClass.container = tasksButtonClass.container.concat(
        " Navbar__Button-Selected"
      );
      tasksButtonClass.icon = tasksButtonClass.icon.concat(
        " Navbar__Button-Selected"
      );
      tasksButtonClass.text = tasksButtonClass.text.concat(
        " Navbar__Button-Selected"
      );
    } else {
      tasksButtonClass.container = tasksButtonClass.container.slice(0, 14);
      tasksButtonClass.icon = tasksButtonClass.icon.slice(0, 19);
      tasksButtonClass.text = tasksButtonClass.text.slice(0, 19);
    }

    //Bajaar Class
    if (this.state.bajaarActive === true) {
      bajaarButtonClass.container = bajaarButtonClass.container.concat(
        " Navbar__Button-Selected"
      );
      bajaarButtonClass.icon = bajaarButtonClass.icon.concat(
        " Navbar__Button-Selected"
      );
      bajaarButtonClass.text = bajaarButtonClass.text.concat(
        " Navbar__Button-Selected"
      );
    } else {
      bajaarButtonClass.container = bajaarButtonClass.container.slice(0, 14);
      bajaarButtonClass.icon = bajaarButtonClass.icon.slice(0, 19);
      bajaarButtonClass.text = bajaarButtonClass.text.slice(0, 19);
    }

    return (
      <div className="Navbar">
        <div className="Navbar__Logo"></div>
        <div className="Navbar__Button-Container">
          <Router>
            <Link to="/" onClick={toggleHome}>
              <div className={homeButtonClass.container}>
                <ion-icon name="home" class={homeButtonClass.icon}></ion-icon>
                <p className={homeButtonClass.text}>Home</p>
              </div>
            </Link>
            <Link to="/journal" onClick={toggleJournal}>
              <div className={journalButtonClass.container}>
                <ion-icon
                  name="journal"
                  class={journalButtonClass.icon}
                ></ion-icon>
                <p className={journalButtonClass.text}>Journal</p>
              </div>
            </Link>
            <Link to="/tasks" onClick={toggleTasks}>
              <div className={tasksButtonClass.container}>
                <ion-icon
                  name="trophy"
                  class={tasksButtonClass.icon}
                ></ion-icon>
                <p className={tasksButtonClass.text}>Tasks</p>
              </div>
            </Link>
            <Link to="/bajaar" onClick={toggleBajaar}>
              <div className={bajaarButtonClass.container}>
                <ion-icon name="cart" class={bajaarButtonClass.icon}></ion-icon>
                <p className={bajaarButtonClass.text}>Bajaar</p>
              </div>
            </Link>
          </Router>
        </div>
        <div className="Navbar__Plant"></div>
      </div>
    );
  }
}

export default Navbar;
