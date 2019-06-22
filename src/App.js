import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from "./components/layout/header";
import Pensioncheck from './components/pensioncheck';
import Lifesituation from './components/lifesituation';
import Contact from './components/contact';
import Salary from './components/salary';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Header branding="Epension" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pensioncheck" component={Pensioncheck} />
            <Route exact path="/pensioncheck/lifesituation" component={Lifesituation} />
            <Route exact path="/pensioncheck/lifesituation/contact" component={Contact} />
            <Route path="/pensioncheck/lifesituation/salary" component={Salary} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
