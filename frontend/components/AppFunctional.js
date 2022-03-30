import React, { useState } from "react";
import axios from "axios";

export default function AppFunctional(props) {
  const URL = "http://localhost:9000/api/result";

  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [xCoordinate, setXCoordinate] = useState(2);
  const [yCoordinate, setYCoordinate] = useState(2);

  const addGrid = (newGrid) => {
    axios.post(URL, newGrid)
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  const onSubmit = evt => {
    const newGrid = {
      steps: count,
      email: email,
      x: xCoordinate,
      y: yCoordinate,
    };
    addGrid(newGrid);
    setEmail("");
    evt.preventDefault();
  };

  const reset = () => {
    setMessage("");
    setEmail("");
    setXCoordinate(2);
    setYCoordinate(2);
    setCount(0);
  };

  const right = () => {
    if (xCoordinate < 3) {
      setXCoordinate(xCoordinate + 1);
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("You can't go up");
    }
  };

  const left = () => {
    if (xCoordinate > 1) {
      setXCoordinate(xCoordinate - 1);
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("You can't go up");
    }
  };

  const up = () => {
    if (yCoordinate > 1) {
      setYCoordinate(yCoordinate - 1);
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("You can't go up");
    }
  };

  const down = () => {
    if (yCoordinate < 3) {
      setYCoordinate(yCoordinate + 1);
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("You can't go up");
    }
  };

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">
          Coordinates ({xCoordinate}, {yCoordinate})
        </h3>
        <h3 id="steps">{count === 1 ? `You moved ${count} time` : `You moved ${count} times`}</h3>
      </div>
      <div id="grid">
        <div
          className={yCoordinate === 1 && xCoordinate === 1 ? "square active" : "square"}>
          {yCoordinate === 1 && xCoordinate === 1 ? "B" : ""}
        </div>
        <div
          className={yCoordinate === 1 && xCoordinate === 2 ? "square active" : "square"}
        >
          {yCoordinate === 1 && xCoordinate === 2 ? "B" : ""}
        </div>
        <div
          className={yCoordinate === 1 && xCoordinate === 3 ? "square active" : "square"}
        >
          {yCoordinate === 1 && xCoordinate === 3 ? "B" : ""}
        </div>
        <div
          className={yCoordinate === 2 && xCoordinate === 1 ? "square active" : "square"}
        >
          {yCoordinate === 2 && xCoordinate === 1 ? "B" : ""}
        </div>
        <div
          className={yCoordinate === 2 && xCoordinate === 2 ? "square active" : "square"}
        >
          {yCoordinate === 2 && xCoordinate === 2 ? "B" : ""}
        </div>
        <div
          className={yCoordinate === 2 && xCoordinate === 3 ? "square active" : "square"}
        >
          {yCoordinate === 2 && xCoordinate === 3 ? "B" : ""}
        </div>
        <div
          className={yCoordinate === 3 && xCoordinate === 1 ? "square active" : "square"}
        >
          {yCoordinate === 3 && xCoordinate === 1 ? "B" : ""}
        </div>
        <div
          className={yCoordinate === 3 && xCoordinate === 2 ? "square active" : "square"}
        >
          {yCoordinate === 3 && xCoordinate === 2 ? "B" : ""}
        </div>
        <div
          className={yCoordinate === 3 && xCoordinate === 3 ? "square active" : "square"}
        >
          {yCoordinate === 3 && xCoordinate === 3 ? "B" : ""}
        </div>
      </div>
      <div className="info">
        <h3 id="message">
          {message}
        </h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={left}>
          LEFT
        </button>
        <button id="up" onClick={up}>
          UP
        </button>
        <button id="right" onClick={right}>
          RIGHT
        </button>
        <button id="down" onClick={down}>
          DOWN
        </button>
        <button id="reset" onClick={reset}>
          reset
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <input
          id="email"
          type="email"
          placeholder="type email"
          onChange={(evt) => setEmail(evt.target.value)}
          value={email}
        ></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}