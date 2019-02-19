import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Code404 from '../components/Code404';

class NoMatch extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column">
        <Navbar />
        <div 
          style={{
            paddingTop: '56px'
          }}>
        </div>
        <Code404 />
      </div>
    );
  }
}

export default NoMatch;
