import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import FooterColLeft from './FooterColLeft';
import FooterColCenter from './FooterColCenter';
import FooterColRight from './FooterColRight';
import Social from './Social';
import logoWordmarkLight from './../img/papriika-logo-wordmark-1-white.svg';
import '../css/Footer.css';

class Footer extends Component {
  state = {
    socialItems: [
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
      },
      {
        id: 6,
        href: 'https://join.slack.com/t/papriika/shared_invite/enQtNTc1Mzk0MDUxMDYyLWE4YmMyNzM5MGQ1OTcxNjM2MzEyMjVhNTE1Y2M5ZWY3M2IyZjRlZGZjMGY2ZjdiMmJmOGUxMjA0YzA0OTg5OTc',
        alt: 'Chat with developers',
        icon: 'slack'
      }
    ]
  }

  render() {
    return (
      <footer 
        className={`container-fluid ${this.props.className}`}
        style={{backgroundColor: '#000'}}>
        <div className="container pt-6 pb-6">
          <div className="mb-4b">
            <a href="/">
              <img
                src={logoWordmarkLight} 
                className="navbar-brand-img" 
                alt="Papriika Logo"
                style={{
                  marginLeft: '-3px'
                }}/>
            </a>
          </div>
          <div className="text-white">
            <div className="row">
              <div className="col-sm-6 col-md-3 mb-4 ml-auto">
                <ul className="list-unstyled my-2">
                  <li className="d-block mb-3">Destinations</li>
                  <FooterColLeft className="text-white"/>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                <ul className="list-unstyled my-2">
                  <li className="d-block mb-3">Memberships</li>
                  <FooterColCenter className="text-white"/>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                <ul className="list-unstyled my-2">
                  <li className="d-block mb-3">Other</li>
                  <FooterColRight className="text-white"/>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white-50 mb-4">
            <div className="row d-flex align-items-end">
              <ul className="inline-list"
                style={{
                  paddingRight: '2px',
                  paddingLeft: '8px'
                }}>
                <Social 
                  socialItems={this.state.socialItems}
                  listAlign="list-inline-item"
                  className="text-white"
                />
              </ul>
              <div className="subscribe ml-auto pl-3 pr-3">
                <p className="text-white small-font-size-90 mt-4">
                  Subscribe to our mailing list.
                </p>
                <a
                  className="btn btn-white btn-block mx-auto mb-4"
                  href="/subscribe" 
                  role="button">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className="container line w-100 bg-white mb-4c"></div>
            <div className="mb-4">
              <a 
                href="https://opensource.guide/how-to-contribute"
                className="btn btn-white btn-open-source ml-0">
                 Open Source <span role="img" aria-label="heart">❤️</span>
              </a>
            </div>
            <div className="small text-white-30 letter-space mb-2">
              Papriika is a <a href="http://universe.engineering" 
                alt="Universe.engineering" className="text-white">
                Universe Labs
              </a>
              &nbsp;open source, dapp initiative.
            </div>
            <div className="small text-white-30 letter-space mb-2">
              <CopyrightUpdate 
                style={{
                  display: 'inline-block'
                }}/>
              &nbsp;Papriika Inc.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
