import React, { Component } from 'react';
import Header from '../components/Navbar';
import Page404 from './Page404';

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
        <Page404 />
      </div>
    );
  }
}

export default NoMatch;
