import React from "react";
import "./Square.css";

class Square extends React.Component {
  constructor(props) {
    super();
  }

  onClick = (event) => {
    this.props.clickedFunc();
  };

  render() {
    return (
      <div
        className="single_box"
        onClick={this.onClick}
        style={{ backgroundColor: this.props.curColor }}
      ></div>
    );
  }
}

export default Square;
