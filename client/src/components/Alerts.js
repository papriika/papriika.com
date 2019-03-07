import React, { Component } from 'react';
import '../css/Alerts.css';

class Alerts extends Component {
  render() {
    return (
      <div 
        className={`alert ${this.props.size} ${this.props.color} ${this.props.className}`}
        style={this.props.style}
        >
        {this.props.children}
      </div>
    );
  }
}

export default Alerts;