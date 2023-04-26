import React, { useState, useEffect } from "react";
import "./App.css";
// import axios from "axios";

export default function App(props) {
  const [state, setState] = useState({ advice: "" });

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    const url = "https://api.adviceslip.com/advice";
    fetch(url, { cache: "no-cache" })
      .then((response) => {
        return response.json();
        // const { advice } = response.data.slip;
        // this.setState({ advice });
        // console.log(advice);
      })
      .then((data) => {
        let advice = data.slip.advice;
        setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { advice } = state;
  return (
    <div className="app">
      <div className="card">
        <h2 className="heading">{advice}</h2>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}
