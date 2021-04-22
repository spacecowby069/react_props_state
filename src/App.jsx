import "./App.css";
import React, { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor() {
    super();

    const boxes = [];
    const numBoxes = 24;
    for (let i = 0; i < numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomRGB()}, ${this.getRandomRGB()}, ${this.getRandomRGB()})`
      });
    }

    // set default state
    this.state = {
      boxes,
    };
    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.getRandomRGB = this.getRandomRGB.bind(this);
  }

  getRandomRGB() {
    const singleRGB = Math.floor(Math.random() * 256);
    return singleRGB;
  }

  handleBoxClick(event) {
    const { boxes } = this.state;
    const newBoxes = boxes.map((box) => {
      if (box.id == event.target.id) {
        box.color = `rgb(${this.getRandomRGB()}, ${this.getRandomRGB()}, ${this.getRandomRGB()})`;
      }
      return box;
    });

    // Set new state after changing box getRandomColor
    this.setState({
      boxes: newBoxes,
    });
  }

  render() {
    const renderBoxes = this.state.boxes.map((box) => {
      return (
        <Box
          values={{ key: box.id, id: box.id, color: box.color }}
          methods={{ handleBoxClick: this.handleBoxClick }}
        />
      );
    });
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{renderBoxes}</div>
      </main>
    );
  }
}

export default App;
