import React, { Component } from 'react';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import SignUpError from './containers/SignUpError';
import SignUpSuccess from './containers/SignUpSuccess';
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
          <Route path="/signup" component={SignUp} />
          <Route path="/signup-error" component={SignUpError} />
          <Route path="/signup-success" component={SignUpSuccess} />
        </div>
      </Router>
    );
  }
}

export default App;
