import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Overlay = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)
  ), url(https://storage.googleapis.com/papriika.com/destinations/hotel-142-shanghai-puli-hotel-spa-01.jpg);
  background-size: cover;
  background-position: center;
  height: 500px;

  @media (min-width: 768px) {
    height: 660px;
  }
`;

const Lead = styled.p`
  font-size: 1.15rem;
  max-width: 550px;

  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
`;

const HeadVariable = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

// Using a ES6 class component as it contains state.
class Home extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: '#fff'
      }}>
        <Alert
          size="alert-small"
          color="alert-black"
          className="text-center"
          style={{
            marginBottom: 0
          }}
          >
          Coming soon! Exclusive member rewards.
        </Alert>

        <Navbar colorScheme="navbar-light"/>
        <div className="container-fluid pl-0 pr-0 hero">
          <div className="row no-gutters">
            <Overlay className="col d-flex align-items-center justify-content-center text-white p-4">
              <div className="container"
                style={{
                  maxWidth: '900px'
                }}>
                <div className="display-4 text-center"
                  style={{
                    fontFamily: 'Judson, serif',
                    fontWeight: '500'
                  }}>
                  Access <HeadVariable>to over 2,400 of </HeadVariable>the world's best hotels.
                </div>
                <Lead className="lead font-weight-normal text-center mx-auto mb-4b">
                  We use the blockchain to provide clear and open pricing. Saving hotels and you money.
                </Lead>
                <div className="text-center">
                  <a
                    className="btn btn-light btn-block mx-auto mb-4"
                    style={{
                      maxWidth: '280px'
                    }}
                    href="/subscribe" 
                    role="button"
                    tabIndex="1">
                    Subscribe
                  </a>
                  <p>Subscribe to receive updates.</p>
                </div>
              </div>
            </Overlay>
          </div>
        </div>
        <a 
          href="mailto:inquiries@papriika.com?subject=Early membership inquiry 50% off — Papriika.com" 
          alt="Early Papriika membership inquiry 50% off"
          >
        </a>
        <Alert
          color="alert-black"
          className="text-center"
          style={{
            marginBottom: 0,
            textTransform: 'none'
          }}
          >
          We use the blockchain as a source of truth, guaranteeing <span style={{fontWeight: '900'}}>Travellers</span> and <span style={{fontWeight: '900'}}>Hôteliers</span> the best rates.
        </Alert>
        <Footer 
          className="mt-9"
          style={{
            backgroundColor: '#000'
          }}
          />
      </div>

    );
  }
}

export default Home;
