import React, { Component } from "react";

class Box extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    this.handleBoxClick = this.props.methods.handleBoxClick.bind(this);
  }

  render() {
    const { key, id, color } = this.props.values;
    console.log(key + "key");
    return (
      <div
        id={id}
        key={key + "key"}
        style={{
          width: "180px",
          height: "180px",
          backgroundColor: color,
          border: "1px solid black",
          display: "inline-block",
        }}
        onClick={(event) => this.handleBoxClick(event)}
      >
        <span>{color}</span>
      </div>
    );
  }
}

export default Box;
