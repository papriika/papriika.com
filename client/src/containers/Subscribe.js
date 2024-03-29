import React, { Component } from 'react';
import styled from 'styled-components';
import CopyrightUpdate from 'copyright-update';
import SubscribeForm from '../components/SubscribeForm';
import logoWordmarkDark from './../img/papriika-logo-wordmark-1.svg';

const Div = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

// Using a ES6 class component as it contains state.
class Subscribe extends Component {
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
              <Div className="mb-4">
                <a href="/" className="brand d-block mb-4 mb-md-4b">
                  <img
                    className="brand-img brand-img-md-pull-left"
                    src={logoWordmarkDark} 
                    alt="Papriika Logo"
                  />
                </a>
                <p className="lead font-weight-bold">
                  Access over 2,400 of the world's best hotels. Subscribe.
                </p>
                <p>
                  Receive the latest updates, news, features, destinations, member benefits and more…
                </p>
              </Div>
              <SubscribeForm />
              <a
                className="btn btn-link btn-block mx-auto mt-3"
                href="/" 
                role="button">
                Back to home
              </a>
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

export default Subscribe;
