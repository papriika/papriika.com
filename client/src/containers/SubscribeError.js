import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import logoWordmarkDark from './../img/papriika-logo-wordmark-1.svg';

// Using a ES6 class component as it contains state.
class SubscribeError extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div 
          className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 pr-0
          ">
          <div className="card col-md-8 mt-4c mt-md-6">
            <div className="card-body">
              <div className="text-center mb-4">
                <a href="/" className="brand d-block mb-4 mb-md-4b">
                  <img
                    className="brand-img"
                    src={logoWordmarkDark} 
                    alt="Papriika Logo"
                  />
                </a>
                <p className="lead-md font-weight-bold">
                  :(&nbsp;&nbsp;Sorry
                </p>
                <p className="mb-4b">
                  Something went wrong. Please go back and make sure all fields are filled out correctly.
                </p>
                <a
                  className="btn btn-primary btn-subscribe mx-auto"
                  style={{
                    textDecoration: 'none',
                    maxWidth: '280px'
                  }}
                  href="/subscribe" 
                  role="button"
                  tabIndex="1">
                  Back
                </a>
              </div>
            </div>
            <div className="text-center small letter-space mt-9 mb-4">
              <CopyrightUpdate 
                style={{
                  display: 'inline-block'
                }}
              />
              &nbsp;Papriika Inc.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscribeError;
