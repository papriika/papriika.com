import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import FooterColLeft from './FooterColLeft';
import FooterColCenter from './FooterColCenter';
import FooterColRight from './FooterColRight';
import FooterSocial from './FooterSocial';
import logoWordmarkLight from './../img/papriika-logo-wordmark-1-white.svg';
import '../css/Footer.css';

class Footer extends Component {
  state = {
    footerSocialItems: [
      {
        id: 1,
        href: 'https://github.com/papriika/',
        alt: 'GitHub Papriika (Papriika)',
        icon: 'github'
      },
      {
        id: 2,
        href: 'https://www.facebook.com/papriikaco/',
        alt: 'Facebook Papriika (papriikaco)',
        icon: 'facebook'
      },
      {
        id: 3,
        href: 'https://www.instagram.com/papriikaco/',
        alt: 'Instagram Papriika (papriikaco)',
        icon: 'instagram'
      },
      {
        id: 4,
        href: 'https://twitter.com/papriikaco',
        alt: 'Twitter Papriika (@papriikaco)',
        icon: 'twitter'
      },
      {
        id: 5,
        href: 'https://www.pinterest.com/papriika/',
        alt: 'Pinterest Papriika (Papriika)',
        icon: 'pinterest'
      }
    ]
  }

  render() {
    return (
      <footer 
        className={`container-fluid ${this.props.className}`}
        style={this.props.style}>

        <div className="container pt-6 pb-6">
          <div className="mb-4b">
            <img
              src={logoWordmarkLight} 
              className="navbar-brand-img" 
              alt="Papriika Logo"
              style={{
                marginLeft: '-3px'
              }}/>
          </div>
          <div className="">
            <div className="row">
              <div className="col-sm-6 col-md-3 mb-4 ml-auto">
                <ul className="list-unstyled my-2">
                  <li className="d-block text-white mb-3">Destinations</li>
                  <FooterColLeft className="text-white" />
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                <ul className="list-unstyled my-2">
                  <li className="d-block text-white mb-3">Memberships</li>
                  <FooterColCenter className="text-white" />
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                <ul className="list-unstyled my-2">
                  <li className="d-block text-white mb-3">Company</li>
                  <FooterColRight className="text-white" />
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white-50 mb-4">
            <div className="row">
              <ul className="inline-list ml-auto"
                style={{
                  paddingRight: '2px',
                  paddingLeft: '8px'
                }}>
                <FooterSocial 
                  footerSocialItems={this.state.footerSocialItems} 
                />
              </ul>
            </div>
          </div>
          <div className="container line bg-white mb-4c"></div>
          <div className="small text-white-50 letter-space mb-2">
            Papriika is a <a href="http://universe.engineering" 
              alt="Universe.engineering"
              className="text-white">
                Universe Labs
              </a>
              &nbsp;open source, dapp initiative.
          </div>
          <div className="small text-white-50 letter-space mb-2">
            <CopyrightUpdate 
              style={{
                display: 'inline-block'
              }}
            />
            &nbsp;Papriika Inc.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
