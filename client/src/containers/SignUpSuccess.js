import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import '../css/SignUp.css';
import logoWordmarkDark from './../img/papriika-logo-wordmark-1.svg';

// Using a ES6 class component as it contains state.
class SignUpSuccess extends Component {
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
          <div className="card col-md-8">
            <div className="card-body">
              <div className="text-center mb-4">
                <a href="/" className="brand">
                  <img
                    className="brand-img"
                    src={logoWordmarkDark} 
                    alt="Papriika Logo"
                  />
                </a>
                <p className="lead font-weight-bold">
                  Success!
                </p>
                <p>
                  You are now signed up for updates.
                </p>
                <a
                  className="btn btn-primary btn-signup btn-block"
                  style={{
                    textDecoration: 'none'
                  }}
                  href="/" 
                  role="button"
                  tabIndex="1">
                  Home
                </a>
              </div>
            </div>
            <div className="text-center small letter-space mt-9 mb-2">
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

export default SignUpSuccess;
