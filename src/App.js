import "./styles.css";
import ReactDOM from "react-dom";
import Timer from "react-compound-timer";
import TimePicker from "react-time-picker";
import React, { useState } from "react";

// const React = require("react")

function initialTime() {
  const [value, onChange] = useState("10:00");

  return (
    <div>
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
}

class CountDownTimer extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <Timer initialTime={initialTime()} direction="backward">
            {({ start, resume, pause, stop, reset, timerState }) => (
              <React.Fragment>
                <div>
                  <Timer.Hours /> h <Timer.Minutes /> m <Timer.Seconds /> s
                </div>
                <br />
                <div>
                  <button onClick={start}>Start</button>
                  <button onClick={pause}>Pause</button>
                  <button onClick={resume}>Resume</button>
                  <button onClick={stop}>Stop</button>
                  <button onClick={reset}>Reset</button>
                </div>
              </React.Fragment>
            )}
          </Timer>
        </h3>
      </div>
    );
  }
}

module.exports = CountDownTimer;

ReactDOM.render(<CountDownTimer />, document.getElementById("root"));
