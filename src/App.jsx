import React from "react";
import Square from "./Square";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0, status: ["white", "white", "white", "white"] };
  }

  updateCount(idx) {
    var status = this.state.status.slice();
    status[idx] = status[idx] === "white" ? "black" : "white";
    // console.log(idx, status);
    var count = 0;
    for (var i = 0; i < status.length; i++) {
      if (status[i] === "black") {
        count += 1;
      }
    }
    // console.log(count);
    this.setState({ count, status });
  }

  render() {
    return (
      <div className="container">
        <div className="count">
          <h1>Count: {this.state.count}</h1>
        </div>
        <div className="row">
          <Square
            curColor={this.state.status[0]}
            clickedFunc={() => this.updateCount(0)}
          />
          <Square
            curColor={this.state.status[1]}
            clickedFunc={() => this.updateCount(1)}
          />
        </div>
        <div className="row">
          <Square
            curColor={this.state.status[2]}
            clickedFunc={() => this.updateCount(2)}
          />
          <Square
            curColor={this.state.status[3]}
            clickedFunc={() => this.updateCount(3)}
          />
        </div>
      </div>
    );
  }
}

export default App;
