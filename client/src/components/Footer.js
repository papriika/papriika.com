import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import FooterSocial from '../components/FooterSocial';
import logoWordmarkLight from './../img/papriika-logo-wordmark-1-white.svg';

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
        <img
          src={logoWordmarkLight} 
          className="" 
          alt="Papriika Logo"/>
        <div className="small text-white-50 font-weight-bold mb-5">
          <ul className="list-inline my-2">
            <FooterSocial 
              footerSocialItems={this.state.footerSocialItems} 
            />
          </ul>
        </div>
        <div className="small text-white-50 letter-space mb-2">
          <CopyrightUpdate 
            style={{
              display: 'inline-block'
            }}
          />
          &nbsp;Papriika Inc.
        </div>
        <div className="small text-white-50 letter-space pb-2">
          Papriika is a <a href="http://universe.engineering" 
            alt="Universe.engineering"
            className="text-white">
              Universe Labs
            </a>
            &nbsp;open source, dapp initiative.
        </div>
      </footer>
    );
  }
}

export default Footer;
