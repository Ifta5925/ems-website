import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
// import About from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch >
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" exact component={About} />  */}
        <Route path="/services" exact component={Services} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
