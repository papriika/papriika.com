import React, { Component } from 'react';
import Home from './containers/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }
  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
