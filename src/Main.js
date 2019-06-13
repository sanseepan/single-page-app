import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Book from "./Book";
import { Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/book/:number" component={Book} />
      </Switch>
    </div>
  );
};

export default Main;
