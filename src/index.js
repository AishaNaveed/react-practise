import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const paragraph =
    "Opening times vary throughout the week. Monday: 8am to 5pm | Tuesday: 5am to 2pm | Wednesday: 10am to 2pm | Thursday: 8am to 5pm Friday: 8am to 5pm 28th sep Saturday 10am to 5pm : Saturday: 10am to 5pm | Sunday: 12 noon to 5pm";
  const reg = "/(|:)+/g";
  return (
    <section>
      <p>
        {paragraph && paragraph.match(reg)
          ? paragraph.split(" ").map((str) => <p>{str}</p>)
          : paragraph}
      </p>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
