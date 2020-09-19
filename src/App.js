import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Users } from './components/Users';
import { Navbar } from './components/Navbar';
import { Register } from './components/Register';

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
    </Router>
  );
}

export default App;
