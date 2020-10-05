import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Users } from './components/Users';
import { Register } from './components/Register';
import { Navbar } from './components/Navbar';
import ReactPlayer from "react-player";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" component={Users} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
      <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=QzQhZof_nwI" />
      </div>
    </Router>
  );
}

export default App;
