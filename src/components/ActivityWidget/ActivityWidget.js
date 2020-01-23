import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./ActivityWidget.scss";

let stepData = {
  steps: [5734, 12694, 8801, 21301, 17690, 8499, 2154],
  dates: ["17th", "18th", "19th", "20th", "21st", "22nd", "23rd"]
};

let heartbeatData = {
  dates: ["17th", "18th", "19th", "20th", "21st", "22nd", "23rd"],
  heartbeat: [89, 87, 85, 80, 81, 78, 70]
};

class ActivityWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsButton: true,
      heartbeatButton: false,
      data: {}
    };
  }

  componentDidMount() {
    var ctx = document.getElementById("canvas").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(8,155,171,0.6)");
    gradient.addColorStop(1, "rgba(232,241,243,0.1)");
    const newData = {
      labels: stepData.dates,
      datasets: [
        {
          label: "Total Daily Steps",
          data: stepData.steps,
          borderWidth: 3,
          backgroundColor: gradient,
          borderColor: this.props.border_color,
          pointRadius: 5
        }
      ]
    };
    this.setState({ data: newData });
  }
  render() {
    let stepsActive = () => {
      var ctx = document.getElementById("canvas").getContext("2d");
      var gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(8,155,171,0.6)");
      gradient.addColorStop(1, "rgba(232,241,243,0.1)");
      console.log(this.state);
      this.setState({
        stepsButton: true,
        heartbeatButton: false,
        data: {
          labels: stepData.dates,
          datasets: [
            {
              label: "Total Daily Steps",
              data: stepData.steps,
              borderWidth: 3,
              backgroundColor: gradient,
              borderColor: this.props.border_color,
              pointRadius: 5
            }
          ]
        }
      });
      console.log(this.state);
    };

    let heartbeatActive = () => {
      var ctx = document.getElementById("canvas").getContext("2d");
      var gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(8,155,171,0.6)");
      gradient.addColorStop(1, "rgba(232,241,243,0.1)");
      console.log(this.state);
      this.setState({
        stepsButton: false,
        heartbeatButton: true,
        data: {
          labels: heartbeatData.dates,
          datasets: [
            {
              label: "Avg Heartrate",
              data: heartbeatData.heartbeat,
              borderWidth: 3,
              backgroundColor: gradient,
              borderColor: this.props.border_color,
              pointRadius: 5
            }
          ]
        }
      });
      console.log(this.state);
    };

    let stepsActiveClass = "ActivityWidget__Button";

    let heartbeatActiveClass = "ActivityWidget__Button";

    if (this.state.stepsButton === true) {
      stepsActiveClass = stepsActiveClass.concat(
        " ActivityWidget__Button-Selected"
      );
    } else {
      stepsActiveClass = stepsActiveClass.slice(0, 23);
    }

    if (this.state.heartbeatButton === true) {
      heartbeatActiveClass = heartbeatActiveClass.concat(
        " ActivityWidget__Button-Selected"
      );
    } else {
      heartbeatActiveClass = heartbeatActiveClass.slice(0, 23);
    }
    return (
      <div className="test ActivityWidget">
        <h1>test</h1>
        <div className="ActivityWidget__Chart ">
          <Line
            id="canvas"
            data={this.state.data}
            width={100}
            height={50}
            options={{
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  fontColor: "rgba(8,155,171,1)",
                  fontFamily: "Raleway",
                  fontStyle: "bold"
                }
              },
              maintainAspectRatio: true,
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      //   color: "rgba(8,155,171,0.1)"
                      color: "white"
                    }
                  }
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true
                    },
                    gridLines: {
                      //   color: "rgba(8,155,171,0.1)"
                      color: "white"
                    }
                  }
                ]
              }
            }}
          />
        </div>
        <div className="ActivityWidget__Button-Container">
          <button className={stepsActiveClass} onClick={stepsActive}>
            Steps
          </button>
          <button className={heartbeatActiveClass} onClick={heartbeatActive}>
            HeartRate
          </button>
        </div>
      </div>
    );
  }
}

export default ActivityWidget;
