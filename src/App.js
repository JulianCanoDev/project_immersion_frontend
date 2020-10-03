import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Users } from './components/Users';
import { Register } from './components/Register';
import { Navbar } from './components/Navbar';
import ReactPlayer from "react-player";

class HelloWorld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show});
  }

  render() {
      if(this.state.show) {
        return (
          <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle show</button>
          </div>
        )
      } else {
        return (
          <h1>There are no elements
            <button onClick={this.toggleShow}>Toggle show</button>
          </h1>
        )
      }
  }
}

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
        This is my component:
        <HelloWorld mytext="Sabro" subtitle="El subti" />
        <HelloWorld mytext="Elegantes esos props" subtitle="Why am I a jsx component?" />
      </div>
      <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=QzQhZof_nwI" />
    </div>
    </Router>
  );
}

export default App;
