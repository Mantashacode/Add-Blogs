import React from "react";
import Navbar from "./components/Navbar";
import "./components/navbar.css";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogsData from "./components/BlogsData";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="nav">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/Create">
              <Create />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/BlogsData/:id">
              <BlogsData />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
