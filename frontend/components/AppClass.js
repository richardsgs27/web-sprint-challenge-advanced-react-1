
import React from "react";
import axios from "axios";

const URL = "http://localhost:9000/api/result";

const initialState = {
  email: "",
  message: "",
  x: 2,
  y: 2,
  count: 0,
};

export default class AppClass extends React.Component {
  state = initialState;
 

  addGrid = () => {
    const newGrid = {
      email: this.state.email,
      steps: this.state.count,
      x: this.state.x,
      y: this.state.y,
    };
    axios.post(URL, newGrid)
      .then((res) => {
        this.setState({
          ...this.state,
          message: [...this.state.message, res.data.message,
          ],
          
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          message: err.response.data.message
        })
      });
  };

  onChange = evt => {
    this.setState({ email: evt.target.value });
  };
  
  onSubmit = evt => {
    evt.preventDefault();
    this.addGrid();
    this.setState({
      email: "", 
    });
  };


  reset = () => {
    this.setState({
      ...this.state,
      count: 0,
      email: "",
      message: "",
      x: 2,
      y: 2,
    });
  };

  onLeft = () => {
    if (this.state.x > 1) {
      this.setState({
        ...this.state,
        x: this.state.x - 1,
        count: this.state.count + 1,
        message: "",
      });
    } else {
      this.setState({
        ...this.state,
        message: "🚫 NO MORE MOVES ALLOWED 🚫",
      });
    }
  };

  onRight = () => {
    if (this.state.x < 3) {
      this.setState({
        ...this.state,
        x: this.state.x + 1,
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        ...this.state,
        message: "🚫 NO MORE MOVES ALLOWED 🚫",
      });
    }
  };

  onUp = () => {
    if (this.state.y > 1) {
      this.setState({
        ...this.state,
        y: this.state.y - 1,
        count: this.state.count + 1,
        message: "",
      });
    } else {
      this.setState({
        ...this.state,
        message: "🚫 NO MORE MOVES ALLOWED 🚫",
      });
    }
  };

  onDown = () => {
    if (this.state.y < 3) {
      this.setState({
        ...this.state,
        y: this.state.y + 1,
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        ...this.state,
        message: "🚫 NO MORE MOVES ALLOWED 🚫",
      });
    }
  };

  render() {
    const { x, y, count, email, message } = this.state;
    const { className } = this.props;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">
            Coordinates ({x}, {y})
          </h3>
          <h3 id="steps">{count === 1 ? `You moved ${count} time` : `You moved ${count} times`}</h3>
        </div>
        <div id="grid">
          <div className={y === 1 && x === 1 ? "square active" : "square"}>
            {y === 1 && x === 1 ? "B" : ""}
          </div>
          <div className={y === 1 && x === 2 ? "square active" : "square"}>
            {y === 1 && x === 2 ? "B" : ""}
          </div>
          <div className={y === 1 && x === 3 ? "square active" : "square"}>
            {y === 1 && x === 3 ? "B" : ""}
          </div>
          <div className={y === 2 && x === 1 ? "square active" : "square"}>
            {y === 2 && x === 1 ? "B" : ""}
          </div>
          <div className={y === 2 && x === 2 ? "square active" : "square"}>
            {y === 2 && x === 2 ? "B" : ""}
          </div>
          <div className={y === 2 && x === 3 ? "square active" : "square"}>
            {y === 2 && x === 3 ? "B" : ""}
          </div>
          <div className={y === 3 && x === 1 ? "square active" : "square"}>
            {y === 3 && x === 1 ? "B" : ""}
          </div>
          <div className={y === 3 && x === 2 ? "square active" : "square"}>
            {y === 3 && x === 2 ? "B" : ""}
          </div>
          <div className={y === 3 && x === 3 ? "square active" : "square"}>
            {y === 3 && x === 3 ? "B" : ""}
          </div>
        </div>
        <div className="info">
          <h3 id="message">
            {message}
          </h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.onLeft}>
            LEFT
          </button>
          <button id="up" onClick={this.onUp}>
            UP
          </button>
          <button id="right" onClick={this.onRight}>
            RIGHT
          </button>
          <button id="down" onClick={this.onDown}>
            DOWN
          </button>
          <button id="reset" onClick={this.reset}>
            reset
          </button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            id="email"
            type="email"
            placeholder="type email"
            value={email}
          >

          </input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    );
  }
}