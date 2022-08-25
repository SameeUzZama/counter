import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="main">
      Counter App
      <div className="container">{counter}</div>
      <div className="buttons">
        <button
          className="button1"
          onClick={() => setCounter(counter + 1)}
          disabled={counter === 10}
        >
          Increment
        </button>
        <button
          className="button2"
          onClick={() => setCounter(counter - 1)}
          disabled={counter === 0}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
