import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h4>Single page app</h4>
      <Nav />
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    {" "}
    <App />
  </BrowserRouter>,
  rootElement
);
