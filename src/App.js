import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Game = lazy(() => import("./game"));
const Form = lazy(() => import("./form"));
const Nameform = lazy(() => import("./nameform"));
const Calculator = lazy(() => import("./calculator"));
const SignupDialog = lazy(() => import("./signUpDialog"));
// const SignupDialog = lazy(() => import('./signUpDialog'));
const Home = lazy(() => import("./home"));
const ParentChild = lazy(() => import("./parentChild"));
const TaskPage = lazy(() => import("./TaskPage"));

function App() {
  const name = "angel";
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <ul>
            <li>
              <Link to="/">Game</Link>
            </li>
            <li>
              <Link to={`/name/${name}`}>Nameform</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/signUpDialog">SignupDialog</Link>
            </li>
            <li>
              <Link to="/parentChild">About</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/TaskPage">Task</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Game} />
            <Route path="/name/:name" component={Nameform} />
            <Route path="/form" component={Form} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/signUpDialog" component={SignupDialog} />
            <Route path="/parentChild" component={ParentChild} />
            <Route path="/home" component={Home} />
            <Route path="/TaskPage" component={TaskPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
    // <Game /><Form /><Nameform /> <Calculator /> <SignupDialog />
  );
}

export default App;
