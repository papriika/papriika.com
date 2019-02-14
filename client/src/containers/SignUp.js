import React, { Component } from 'react';
import styled from 'styled-components';
import CopyrightUpdate from 'copyright-update';
import FormSignup from '../components/FormSignup';
import '../css/SignUp.css';
import logoWordmarkDark from './../img/papriika-logo-wordmark-1.svg';

const Div = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

// Using a ES6 class component as it contains state.
class SignUp extends Component {
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
              <Div className="mb-4">
                <a href="/" className="brand">
                  <img
                    className="brand-img"
                    src={logoWordmarkDark} 
                    alt="Papriika Logo"
                  />
                </a>
                <p className="lead font-weight-bold">
                  Access over 2,400 of the world's best hotels. Get notified.
                </p>
                <p>
                  Receive the latest updates, news, features, destinations, member benefits and more…
                </p>
              </Div>
              <FormSignup />
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

export default SignUp;
