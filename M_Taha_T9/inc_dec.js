import React, { useState } from "react";
// import "./styles.css";
import "./counter.css";
function Counter() {
  const [Counter, setCounter] = useState(0);
  const [notification, setNotification] = useState("");
  let color1 = "red";
  const increaseCounter = () => {
    {
      Counter <= 10
        ? setCounter(Counter + 1)
        : setNotification("Counter OverFLow");

      setTimeout(() => {
        setNotification("");
      }, 500);
    }
  };

  const decreaseCounter = () => {
    Counter > 0
      ? setCounter(Counter - 1)
      : setNotification("Counter cannot be zero");
    setTimeout(() => {
      setNotification("");
    }, 500);
  };

  const resetCounter = () => {
    setCounter(0);
    setNotification("Counter has been reset");
    setTimeout(() => {
      setNotification("");
    }, 500);
  };

  return (
    <div className="app-container">
      <h2 className="Counter-display">{Counter}</h2>
      <button className="action-button" onClick={increaseCounter}>
        Increment
      </button>
      <button className="action-button" onClick={decreaseCounter}>
        Decrement
      </button>
      <button className="reset-button" onClick={resetCounter}>
        Reset
      </button>
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
}
export default Counter;
